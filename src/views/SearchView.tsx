import { useMemo, useRef, useState } from "react";
import type { Nav } from "../App";
import type { CategoryId } from "../data/types";
import { CATEGORIES, CATEGORY_MAP } from "../data/types";
import { TOPICS } from "../data/topics";
import { search, highlight } from "../lib/search";

function Highlighted({ text, query }: { text: string; query: string }) {
  const segs = highlight(text, query);
  return (
    <>
      {segs.map((s, i) => (s.hit ? <mark key={i}>{s.text}</mark> : <span key={i}>{s.text}</span>))}
    </>
  );
}

export function SearchView({ nav, initialCategory }: { nav: Nav; initialCategory?: CategoryId }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CategoryId | "all">(initialCategory ?? "all");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim();
    if (q) {
      const hits = search(q, 40).map((h) => h.topic);
      return cat === "all" ? hits : hits.filter((t) => t.category === cat);
    }
    // No query → browse mode.
    const base = cat === "all" ? TOPICS : TOPICS.filter((t) => t.category === cat);
    return [...base].sort((a, b) => a.title.localeCompare(b.title));
  }, [query, cat]);

  return (
    <div className="screen">
      <header className="app-head">
        <div className="brand">
          <div className="brand-badge">🔎</div>
          <div>
            <div className="brand-name">Explore</div>
            <div className="brand-sub">{TOPICS.length} explanations</div>
          </div>
        </div>
      </header>

      <div className="searchbar">
        <span>🔎</span>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, terms, keywords…"
          autoFocus
          autoCapitalize="none"
          autoCorrect="off"
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery("")} aria-label="Clear">
            ✕
          </button>
        )}
      </div>

      <div className="chips">
        <button className={`chip ${cat === "all" ? "active" : ""}`} onClick={() => setCat("all")}>
          All
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

      {query.trim() && (
        <div className="q-meta" style={{ marginBottom: 12 }}>
          <span>
            {results.length} result{results.length === 1 ? "" : "s"} for “{query.trim()}”
          </span>
        </div>
      )}

      {results.length === 0 ? (
        <div className="empty">
          <span className="em">🗒️</span>
          <p>
            No matches. Try a shorter or different term —
            <br /> e.g. “memory”, “Freud”, “conditioning”.
          </p>
        </div>
      ) : (
        results.map((t) => {
          const c = CATEGORY_MAP[t.category];
          return (
            <button key={t.id} className="row" onClick={() => nav.openTopic(t.id)}>
              <div className="row-ico">{c.icon}</div>
              <div className="row-body">
                <p className="row-title">
                  <Highlighted text={t.title} query={query} />
                </p>
                <p className="row-sub">
                  <Highlighted text={t.summary} query={query} />
                </p>
                <span className="row-tag">{c.name}</span>
              </div>
            </button>
          );
        })
      )}
      <div className="gap-lg" />
    </div>
  );
}
