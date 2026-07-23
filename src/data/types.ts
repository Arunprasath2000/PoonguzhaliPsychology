// Shared data model for all study content in MindMentor.

export type CategoryId =
  | "disorders"
  | "psychoanalysis"
  | "development"
  | "learning"
  | "cognition"
  | "social"
  | "personality"
  | "biological"
  | "therapy"
  | "research";

export interface Category {
  id: CategoryId;
  name: string;
  blurb: string;
  icon: string; // emoji glyph used in the UI
}

export interface Topic {
  id: string;
  title: string;
  category: CategoryId;
  tags: string[];
  summary: string; // one-line answer, shown in search results
  body: string; // simple-language explanation (lightweight markdown)
  keyPoints: string[];
  compare?: { label: string; a: string; b: string; rows: [string, string, string][] };
  mnemonic?: string;
}

export interface QuizQuestion {
  id: string;
  category: CategoryId;
  question: string;
  options: string[];
  answer: number; // index into options
  explanation: string;
}

export interface Flashcard {
  id: string;
  category: CategoryId;
  front: string;
  back: string;
}

export interface VivaQuestion {
  id: string;
  category: CategoryId;
  question: string;
  modelAnswer: string;
  followUps: string[];
}

export const CATEGORIES: Category[] = [
  { id: "disorders", name: "Disorders", blurb: "Clinical conditions & diagnosis", icon: "🩺" },
  { id: "psychoanalysis", name: "Psychoanalysis", blurb: "Freud & the unconscious", icon: "🌀" },
  { id: "development", name: "Development", blurb: "Growth across the lifespan", icon: "🌱" },
  { id: "learning", name: "Learning", blurb: "Conditioning & behaviour", icon: "🔔" },
  { id: "cognition", name: "Cognition", blurb: "Memory, thinking, perception", icon: "🧩" },
  { id: "social", name: "Social", blurb: "People in groups", icon: "👥" },
  { id: "personality", name: "Personality", blurb: "Traits & the self", icon: "🎭" },
  { id: "biological", name: "Biological", blurb: "Brain & nervous system", icon: "🧠" },
  { id: "therapy", name: "Therapy", blurb: "Treatment approaches", icon: "💬" },
  { id: "research", name: "Research", blurb: "Methods & statistics", icon: "🔬" },
];

export const CATEGORY_MAP: Record<CategoryId, Category> = CATEGORIES.reduce(
  (acc, c) => ((acc[c.id] = c), acc),
  {} as Record<CategoryId, Category>
);
