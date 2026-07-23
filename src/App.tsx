import { useState } from "react";
import type { CategoryId } from "./data/types";
import { HomeView } from "./views/HomeView";
import { SearchView } from "./views/SearchView";
import { TopicView } from "./views/TopicView";
import { QuizView } from "./views/QuizView";
import { VivaView } from "./views/VivaView";
import { FlashcardsView } from "./views/FlashcardsView";

export type Tab = "home" | "search" | "quiz" | "viva" | "cards";

export interface Nav {
  openTopic: (id: string) => void;
  openSearch: (category?: CategoryId) => void;
  go: (tab: Tab) => void;
  back: () => void;
}

const NAV_ITEMS: { tab: Tab; icon: string; label: string }[] = [
  { tab: "home", icon: "🏠", label: "Home" },
  { tab: "search", icon: "🔎", label: "Explore" },
  { tab: "quiz", icon: "📝", label: "Quiz" },
  { tab: "viva", icon: "🎙️", label: "Viva" },
  { tab: "cards", icon: "🃏", label: "Cards" },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [topicId, setTopicId] = useState<string | null>(null);
  const [searchCat, setSearchCat] = useState<CategoryId | undefined>(undefined);

  const nav: Nav = {
    openTopic: (id) => {
      setTopicId(id);
    },
    openSearch: (category) => {
      setSearchCat(category);
      setTopicId(null);
      setTab("search");
    },
    go: (t) => {
      setTopicId(null);
      if (t === "search") setSearchCat(undefined);
      setTab(t);
    },
    back: () => setTopicId(null),
  };

  return (
    <div className="app">
      {topicId ? (
        <TopicView topicId={topicId} nav={nav} />
      ) : (
        <>
          {tab === "home" && <HomeView nav={nav} />}
          {tab === "search" && <SearchView nav={nav} initialCategory={searchCat} />}
          {tab === "quiz" && <QuizView nav={nav} />}
          {tab === "viva" && <VivaView />}
          {tab === "cards" && <FlashcardsView />}
        </>
      )}

      <nav className="nav">
        {NAV_ITEMS.map((n) => (
          <button
            key={n.tab}
            className={`nav-item ${!topicId && tab === n.tab ? "active" : ""}`}
            onClick={() => nav.go(n.tab)}
          >
            <span className="ni">{n.icon}</span>
            {n.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
