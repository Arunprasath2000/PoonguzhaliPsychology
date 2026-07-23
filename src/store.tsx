import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Preferences } from "@capacitor/preferences";

// Lightweight persisted state: bookmarks, quiz stats, and which flashcards the
// user has marked "known". Stored via Capacitor Preferences (native, durable)
// with a localStorage fallback for the browser dev server.

const KEY = "mindmentor.state.v1";

export interface QuizStat {
  attempts: number;
  best: number; // best % correct
  lastCorrect: number;
  lastTotal: number;
}

export interface PersistState {
  bookmarks: string[]; // topic ids
  known: string[]; // flashcard ids marked known
  quiz: Record<string, QuizStat>; // keyed by category id or "all"
  streak: number;
  lastStudyDay: string; // yyyy-mm-dd
}

const EMPTY: PersistState = {
  bookmarks: [],
  known: [],
  quiz: {},
  streak: 0,
  lastStudyDay: "",
};

interface StoreCtx {
  state: PersistState;
  ready: boolean;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  setKnown: (id: string, known: boolean) => void;
  isKnown: (id: string) => boolean;
  resetKnown: () => void;
  recordQuiz: (key: string, correct: number, total: number) => void;
}

const Ctx = createContext<StoreCtx | null>(null);

async function load(): Promise<PersistState> {
  try {
    const { value } = await Preferences.get({ key: KEY });
    if (value) return { ...EMPTY, ...JSON.parse(value) };
  } catch {
    try {
      const ls = localStorage.getItem(KEY);
      if (ls) return { ...EMPTY, ...JSON.parse(ls) };
    } catch {
      /* ignore */
    }
  }
  return EMPTY;
}

async function save(state: PersistState) {
  const json = JSON.stringify(state);
  try {
    await Preferences.set({ key: KEY, value: json });
  } catch {
    try {
      localStorage.setItem(KEY, json);
    } catch {
      /* ignore */
    }
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PersistState>(EMPTY);
  const [ready, setReady] = useState(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    load().then((s) => {
      setState(s);
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    save(state);
  }, [state]);

  const api: StoreCtx = {
    state,
    ready,
    toggleBookmark: (id) =>
      setState((s) => ({
        ...s,
        bookmarks: s.bookmarks.includes(id)
          ? s.bookmarks.filter((x) => x !== id)
          : [...s.bookmarks, id],
      })),
    isBookmarked: (id) => state.bookmarks.includes(id),
    setKnown: (id, known) =>
      setState((s) => ({
        ...s,
        known: known ? [...new Set([...s.known, id])] : s.known.filter((x) => x !== id),
      })),
    isKnown: (id) => state.known.includes(id),
    resetKnown: () => setState((s) => ({ ...s, known: [] })),
    recordQuiz: (key, correct, total) =>
      setState((s) => {
        const pct = total ? Math.round((correct / total) * 100) : 0;
        const prev = s.quiz[key] ?? { attempts: 0, best: 0, lastCorrect: 0, lastTotal: 0 };
        return {
          ...s,
          quiz: {
            ...s.quiz,
            [key]: {
              attempts: prev.attempts + 1,
              best: Math.max(prev.best, pct),
              lastCorrect: correct,
              lastTotal: total,
            },
          },
        };
      }),
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used inside StoreProvider");
  return c;
}
