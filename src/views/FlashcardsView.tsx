import { useMemo, useState } from "react";
import type { CategoryId } from "../data/types";
import { CATEGORIES, CATEGORY_MAP } from "../data/types";
import { FLASHCARDS } from "../data/flashcards";
import { useStore } from "../store";

export function FlashcardsView() {
  const { isKnown, setKnown, resetKnown, state } = useStore();
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(() => {
    const d = cat === "all" ? FLASHCARDS : FLASHCARDS.filter((f) => f.category === cat);
    return d.length ? d : FLASHCARDS;
  }, [cat]);

  const safeIdx = Math.min(idx, deck.length - 1);
  const card = deck[safeIdx];
  const knownCount = deck.filter((c) => isKnown(c.id)).length;

  function pick(c: CategoryId | "all") {
    setCat(c);
    setIdx(0);
    setFlipped(false);
  }

  function advance(markKnown: boolean) {
    setKnown(card.id, markKnown);
    setFlipped(false);
    // Small delay so the flip resets before the content swaps.
    setTimeout(() => setIdx((n) => (n + 1) % deck.length), 120);
  }

  return (
    <div className="screen">
      <header className="app-head">
        <div className="brand">
          <div className="brand-badge">🃏</div>
          <div>
            <div className="brand-name">Flashcards</div>
            <div className="brand-sub">{FLASHCARDS.length} cards • tap to flip</div>
          </div>
        </div>
        <button className="head-btn" onClick={resetKnown} aria-label="Reset progress" title="Reset">
          ↺
        </button>
      </header>

      <div className="chips">
        <button className={`chip ${cat === "all" ? "active" : ""}`} onClick={() => pick("all")}>
          All
        </button>
        {CATEGORIES.filter((c) => FLASHCARDS.some((f) => f.category === c.id)).map((c) => (
          <button
            key={c.id}
            className={`chip ${cat === c.id ? "active" : ""}`}
            onClick={() => pick(c.id)}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      <div className="deck-count">
        Card {safeIdx + 1} of {deck.length} • {knownCount} known ✓
      </div>

      <div className="deck-wrap" onClick={() => setFlipped((f) => !f)}>
        <div className={`flip ${flipped ? "back" : ""}`}>
          <div className="face face-front">
            <div className="lbl">{CATEGORY_MAP[card.category].name}</div>
            <div className="content">{card.front}</div>
            <div className="tap">Tap to flip ↻</div>
          </div>
          <div className="face face-back">
            <div className="lbl">Answer</div>
            <div className="content">{card.back}</div>
            <div className="tap">Tap to flip ↻</div>
          </div>
        </div>
      </div>

      <div className="deck-actions">
        <button className="btn" onClick={() => advance(false)}>
          ↻ Review again
        </button>
        <button className="btn btn-gold" onClick={() => advance(true)}>
          ✓ Got it
        </button>
      </div>

      <div className="gap-lg" />
      <div className="q-meta">
        <span>Total known across all decks</span>
        <span>{state.known.length} cards</span>
      </div>
      <div className="gap-lg" />
    </div>
  );
}
