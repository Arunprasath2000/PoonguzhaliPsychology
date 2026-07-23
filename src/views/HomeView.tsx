import type { Nav } from "../App";
import { CATEGORIES } from "../data/types";
import { TOPICS } from "../data/topics";
import { QUIZ } from "../data/quiz";
import { useStore } from "../store";

export function HomeView({ nav }: { nav: Nav }) {
  const { state } = useStore();
  const bestAll = state.quiz["all"]?.best ?? 0;

  const countByCat = (id: string) => TOPICS.filter((t) => t.category === id).length;

  return (
    <div className="screen">
      <header className="app-head">
        <div className="brand">
          <div className="brand-badge brand-badge-mono">TP</div>
          <div>
            <div className="brand-name">Poonguzhali</div>
            <div className="brand-sub">Psychology study assistant</div>
          </div>
        </div>
        <button className="head-btn" onClick={() => nav.openSearch()} aria-label="Search">
          🔎
        </button>
      </header>

      <section className="hero" onClick={() => nav.openSearch()} role="button">
        <h1>Ask anything in psychology</h1>
        <p>Clear, exam-ready explanations — disorders, Freud, memory, therapy & more.</p>
      </section>

      <div
        className="searchbar"
        onClick={() => nav.openSearch()}
        role="button"
        style={{ cursor: "pointer" }}
      >
        <span>🔎</span>
        <span style={{ color: "var(--muted-2)", fontSize: 15 }}>
          Try “Bipolar I vs II” or “defense mechanisms”…
        </span>
      </div>

      <div className="stat-strip">
        <div className="stat">
          <b>{TOPICS.length}</b>
          <span>Topics</span>
        </div>
        <div className="stat">
          <b>{QUIZ.length}</b>
          <span>Quiz Qs</span>
        </div>
        <div className="stat">
          <b>{bestAll ? `${bestAll}%` : "—"}</b>
          <span>Best score</span>
        </div>
      </div>

      <div className="sec-label">
        <h2>Study modes</h2>
      </div>
      <div className="mode-row">
        <button className="mode-tile mode-quiz" onClick={() => nav.go("quiz")}>
          <span className="em">📝</span>
          Quiz
        </button>
        <button className="mode-tile mode-viva" onClick={() => nav.go("viva")}>
          <span className="em">🎙️</span>
          Viva
        </button>
        <button className="mode-tile mode-cards" onClick={() => nav.go("cards")}>
          <span className="em">🃏</span>
          Flashcards
        </button>
      </div>

      <div className="sec-label">
        <h2>Browse by topic</h2>
        <span>{CATEGORIES.length} areas</span>
      </div>
      <div className="cat-grid">
        {CATEGORIES.map((c) => (
          <button key={c.id} className="cat-card" onClick={() => nav.openSearch(c.id)}>
            <div className="cat-ico">{c.icon}</div>
            <h3>{c.name}</h3>
            <p>{c.blurb}</p>
            <span className="count">{countByCat(c.id)} topics →</span>
          </button>
        ))}
      </div>

      {state.bookmarks.length > 0 && (
        <>
          <div className="sec-label">
            <h2>Saved</h2>
            <span>{state.bookmarks.length}</span>
          </div>
          {state.bookmarks
            .map((id) => TOPICS.find((t) => t.id === id))
            .filter(Boolean)
            .slice(0, 5)
            .map((t) => (
              <button key={t!.id} className="row" onClick={() => nav.openTopic(t!.id)}>
                <div className="row-ico">⭐</div>
                <div className="row-body">
                  <p className="row-title">{t!.title}</p>
                  <p className="row-sub">{t!.summary}</p>
                </div>
              </button>
            ))}
        </>
      )}

      <div className="gap-lg" />
    </div>
  );
}
