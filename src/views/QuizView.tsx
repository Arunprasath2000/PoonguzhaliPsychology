import { useMemo, useState } from "react";
import type { Nav } from "../App";
import type { CategoryId, QuizQuestion } from "../data/types";
import { CATEGORIES } from "../data/types";
import { QUIZ } from "../data/quiz";
import { useStore } from "../store";

type Phase = "setup" | "playing" | "done";
const LETTERS = ["A", "B", "C", "D", "E"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function QuizView({ nav }: { nav: Nav }) {
  const { recordQuiz, state } = useStore();
  const [phase, setPhase] = useState<Phase>("setup");
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [deck, setDeck] = useState<QuizQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);

  const pool = useMemo(
    () => (cat === "all" ? QUIZ : QUIZ.filter((q) => q.category === cat)),
    [cat]
  );

  function start() {
    const d = shuffle(pool).slice(0, Math.min(10, pool.length));
    setDeck(d);
    setIdx(0);
    setPicked(null);
    setCorrect(0);
    setPhase("playing");
  }

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === deck[idx].answer) setCorrect((c) => c + 1);
  }

  function next() {
    if (idx + 1 >= deck.length) {
      recordQuiz(cat, correct, deck.length);
      setPhase("done");
    } else {
      setIdx((n) => n + 1);
      setPicked(null);
    }
  }

  // ---------- Setup ----------
  if (phase === "setup") {
    return (
      <div className="screen">
        <header className="app-head">
          <div className="brand">
            <div className="brand-badge">📝</div>
            <div>
              <div className="brand-name">Quiz Mode</div>
              <div className="brand-sub">Test your knowledge</div>
            </div>
          </div>
        </header>

        <div className="hero" style={{ background: "var(--gold-grad)", color: "#241018" }}>
          <h1 style={{ color: "#241018" }}>Ready to revise?</h1>
          <p style={{ color: "rgba(36,16,24,0.8)" }}>
            10 multiple-choice questions with instant explanations.
          </p>
        </div>

        <div className="sec-label">
          <h2>Pick a topic</h2>
        </div>
        <div className="chips">
          <button className={`chip ${cat === "all" ? "active" : ""}`} onClick={() => setCat("all")}>
            All topics
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`chip ${cat === c.id ? "active" : ""}`}
              onClick={() => setCat(c.id)}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>

        <div className="q-meta">
          <span>{pool.length} questions available</span>
          {state.quiz[cat]?.best ? <span>Best: {state.quiz[cat].best}%</span> : null}
        </div>

        <div className="spacer" />
        <button className="btn btn-gold" onClick={start} disabled={pool.length === 0}>
          Start quiz →
        </button>
        <div className="gap-lg" />
      </div>
    );
  }

  // ---------- Result ----------
  if (phase === "done") {
    const pct = Math.round((correct / deck.length) * 100);
    const msg =
      pct >= 90 ? "Outstanding! 🎉" : pct >= 70 ? "Great work! 👏" : pct >= 50 ? "Good effort 💪" : "Keep practising 📚";
    return (
      <div className="screen">
        <div className="result">
          <div className="ring" style={{ ["--pct" as any]: `${pct}%` }}>
            <b>{pct}%</b>
          </div>
          <h2>{msg}</h2>
          <p>
            You got {correct} of {deck.length} correct.
          </p>
          <button className="btn btn-primary" onClick={start}>
            Try again
          </button>
          <div className="spacer" />
          <button className="btn btn-ghost" onClick={() => setPhase("setup")}>
            Choose another topic
          </button>
          <div className="spacer" />
          <button className="btn btn-ghost" onClick={() => nav.go("home")}>
            Back to home
          </button>
        </div>
      </div>
    );
  }

  // ---------- Playing ----------
  const q = deck[idx];
  const answered = picked !== null;
  return (
    <div className="screen">
      <div className="topbar">
        <button className="icon-btn" onClick={() => setPhase("setup")} aria-label="Quit">
          ✕
        </button>
        <h2>Question {idx + 1} of {deck.length}</h2>
        <div style={{ width: 40 }} />
      </div>

      <div className="quiz-progress">
        <div style={{ width: `${((idx + (answered ? 1 : 0)) / deck.length) * 100}%` }} />
      </div>

      <div className="q-text">{q.question}</div>

      {q.options.map((opt, i) => {
        let cls = "opt";
        if (answered) {
          if (i === q.answer) cls += " correct";
          else if (i === picked) cls += " wrong";
          else cls += " dim";
        }
        return (
          <button key={i} className={cls} onClick={() => choose(i)}>
            <span className="k">{LETTERS[i]}</span>
            <span>{opt}</span>
          </button>
        );
      })}

      {answered && (
        <>
          <div className="explain">
            {picked === q.answer ? "✅ Correct. " : "❌ Not quite. "}
            {q.explanation}
          </div>
          <div className="spacer" />
          <button className="btn btn-primary" onClick={next}>
            {idx + 1 >= deck.length ? "See results" : "Next question →"}
          </button>
        </>
      )}
      <div className="gap-lg" />
    </div>
  );
}
