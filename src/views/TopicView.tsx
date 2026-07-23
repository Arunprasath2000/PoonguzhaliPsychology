import type { Nav } from "../App";
import { CATEGORY_MAP } from "../data/types";
import { TOPICS } from "../data/topics";
import { MarkText } from "../components/MarkText";
import { useStore } from "../store";

export function TopicView({ topicId, nav }: { topicId: string; nav: Nav }) {
  const topic = TOPICS.find((t) => t.id === topicId);
  const { isBookmarked, toggleBookmark } = useStore();

  if (!topic) {
    return (
      <div className="screen">
        <div className="empty">
          <span className="em">❓</span>
          <p>Topic not found.</p>
        </div>
      </div>
    );
  }

  const c = CATEGORY_MAP[topic.category];
  const saved = isBookmarked(topic.id);

  const related = TOPICS.filter(
    (t) => t.category === topic.category && t.id !== topic.id
  ).slice(0, 4);

  return (
    <div className="screen">
      <div className="topbar">
        <button className="icon-btn" onClick={() => nav.back()} aria-label="Back">
          ←
        </button>
        <h2>{c.name}</h2>
        <button
          className="icon-btn"
          onClick={() => toggleBookmark(topic.id)}
          aria-label="Bookmark"
          style={{ color: saved ? "var(--accent)" : undefined }}
        >
          {saved ? "★" : "☆"}
        </button>
      </div>

      <div className="detail-cat">
        {c.icon} {c.name}
      </div>
      <h1 className="detail-title">{topic.title}</h1>

      <div className="card">
        <div className="card-h">💡 In simple terms</div>
        <MarkText text={topic.body} />
      </div>

      {topic.compare && (
        <div className="card">
          <div className="card-h">⚖️ {topic.compare.label}</div>
          <table className="cmp">
            <thead>
              <tr>
                <th></th>
                <th>{topic.compare.a}</th>
                <th>{topic.compare.b}</th>
              </tr>
            </thead>
            <tbody>
              {topic.compare.rows.map((r, i) => (
                <tr key={i}>
                  <td>{r[0]}</td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="card">
        <div className="card-h">🎯 Key points</div>
        <ul className="keypoints">
          {topic.keyPoints.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ul>
      </div>

      {topic.mnemonic && (
        <div className="mnemonic">
          <b>🧩 Memory hook:</b> {topic.mnemonic}
        </div>
      )}

      {related.length > 0 && (
        <>
          <div className="sec-label">
            <h2>Related topics</h2>
          </div>
          {related.map((t) => (
            <button key={t.id} className="row" onClick={() => nav.openTopic(t.id)}>
              <div className="row-ico">{CATEGORY_MAP[t.category].icon}</div>
              <div className="row-body">
                <p className="row-title">{t.title}</p>
                <p className="row-sub">{t.summary}</p>
              </div>
            </button>
          ))}
        </>
      )}
      <div className="gap-lg" />
    </div>
  );
}
