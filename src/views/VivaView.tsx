import { useMemo, useState } from "react";
import type { CategoryId } from "../data/types";
import { CATEGORIES } from "../data/types";
import { VIVA } from "../data/viva";

export function VivaView() {
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const deck = useMemo(() => {
    const d = cat === "all" ? VIVA : VIVA.filter((v) => v.category === cat);
    return d.length ? d : VIVA;
  }, [cat]);

  // Clamp index when the deck changes.
  const safeIdx = Math.min(idx, deck.length - 1);
  const q = deck[safeIdx];

  function pick(c: CategoryId | "all") {
    setCat(c);
    setIdx(0);
    setRevealed(false);
  }

  function nextQ() {
    setRevealed(false);
    setIdx((n) => (n + 1) % deck.length);
  }

  return (
    <div className="screen">
      <header className="app-head">
        <div className="brand">
          <div className="brand-badge">🎙️</div>
          <div>
            <div className="brand-name">Viva Mode</div>
            <div className="brand-sub">Oral exam practice</div>
          </div>
        </div>
      </header>

      <div className="chips">
        <button className={`chip ${cat === "all" ? "active" : ""}`} onClick={() => pick("all")}>
          All
        </button>
        {CATEGORIES.filter((c) => VIVA.some((v) => v.category === c.id)).map((c) => (
          <button
            key={c.id}
            className={`chip ${cat === c.id ? "active" : ""}`}
            onClick={() => pick(c.id)}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      <div className="q-meta">
        <span>
          Question {safeIdx + 1} of {deck.length}
        </span>
        <span>🎓 Examiner asks…</span>
      </div>

      <div className="viva-card">
        <div className="viva-badge">Question</div>
        <div className="viva-q">{q.question}</div>
      </div>

      {revealed ? (
        <div className="viva-card">
          <div className="viva-badge" style={{ color: "var(--good)" }}>
            Model answer
          </div>
          <div className="viva-ans">{q.modelAnswer}</div>

          <div className="followups">
            <div className="viva-badge" style={{ color: "var(--rose)", marginTop: 6 }}>
              Examiner may follow up
            </div>
            {q.followUps.map((f, i) => (
              <div className="fu" key={i}>
                {f}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty" style={{ padding: "28px 20px" }}>
          <span className="em">🤔</span>
          <p>
            Say your answer out loud first, then reveal the model answer to
            <br /> compare.
          </p>
        </div>
      )}

      <div className="spacer" />
      {!revealed ? (
        <button className="btn btn-primary" onClick={() => setRevealed(true)}>
          Reveal model answer
        </button>
      ) : (
        <button className="btn btn-primary" onClick={nextQ}>
          Next question →
        </button>
      )}
      <div className="gap-lg" />
    </div>
  );
}
