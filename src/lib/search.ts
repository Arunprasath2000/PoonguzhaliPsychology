import type { Topic } from "../data/types";
import { TOPICS } from "../data/topics";

// A small, dependency-free search engine tuned for a study app.
//
// Scoring is weighted by field (title > tags > summary > body) and supports:
//  - multi-word queries (all terms must match somewhere)
//  - prefix and substring matching
//  - light fuzzy/typo tolerance via subsequence matching
//  - phrase boosting when the whole query appears verbatim in the title

export interface SearchHit {
  topic: Topic;
  score: number;
}

interface Indexed {
  topic: Topic;
  title: string;
  tags: string;
  summary: string;
  body: string;
  haystack: string;
}

// Lowercase and strip diacritics so "Piaget"/"piaget" and accented terms match.
const norm = (s: string) =>
  s.toLowerCase().normalize("NFKD").replace(/\p{Diacritic}/gu, "");

const INDEX: Indexed[] = TOPICS.map((t) => {
  const title = norm(t.title);
  const tags = norm(t.tags.join(" "));
  const summary = norm(t.summary);
  const body = norm(t.body + " " + t.keyPoints.join(" "));
  return { topic: t, title, tags, summary, body, haystack: `${title} ${tags} ${summary} ${body}` };
});

// Is `needle` a subsequence of `hay`? (cheap fuzzy match, e.g. "biplr" ⊂ "bipolar")
function isSubsequence(needle: string, hay: string): boolean {
  if (needle.length < 3) return false;
  let i = 0;
  for (let j = 0; j < hay.length && i < needle.length; j++) {
    if (hay[j] === needle[i]) i++;
  }
  return i === needle.length;
}

function scoreTerm(term: string, doc: Indexed): number {
  let s = 0;
  // Title matches are worth the most.
  if (doc.title.includes(term)) s += doc.title.startsWith(term) ? 60 : 40;
  // Tag matches signal strong topical relevance.
  if (doc.tags.includes(term)) s += 25;
  if (doc.summary.includes(term)) s += 12;
  if (doc.body.includes(term)) s += 6;
  // Fuzzy fallback only if nothing solid matched.
  if (s === 0) {
    if (isSubsequence(term, doc.title)) s += 14;
    else if (isSubsequence(term, doc.tags)) s += 8;
    else if (isSubsequence(term, doc.haystack)) s += 3;
  }
  return s;
}

export function search(query: string, limit = 30): SearchHit[] {
  const q = norm(query.trim());
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);

  const hits: SearchHit[] = [];
  for (const doc of INDEX) {
    let total = 0;
    let matchedAll = true;
    for (const term of terms) {
      const s = scoreTerm(term, doc);
      if (s === 0) {
        matchedAll = false;
        break;
      }
      total += s;
    }
    if (!matchedAll) continue;
    // Whole-query phrase boost.
    if (doc.title.includes(q)) total += 40;
    if (doc.haystack.includes(q)) total += 10;
    hits.push({ topic: doc.topic, score: total });
  }

  hits.sort((a, b) => b.score - a.score || a.topic.title.localeCompare(b.topic.title));
  return hits.slice(0, limit);
}

// Split a piece of text into segments marking which parts match the query terms,
// so the UI can highlight them. Case-insensitive, term-based.
export interface Segment {
  text: string;
  hit: boolean;
}

export function highlight(text: string, query: string): Segment[] {
  const terms = norm(query.trim())
    .split(/\s+/)
    .filter((t) => t.length >= 2);
  if (terms.length === 0) return [{ text, hit: false }];

  const lower = norm(text);
  const marks = new Array<boolean>(text.length).fill(false);
  for (const term of terms) {
    let from = 0;
    let idx: number;
    while ((idx = lower.indexOf(term, from)) !== -1) {
      for (let k = idx; k < idx + term.length; k++) marks[k] = true;
      from = idx + term.length;
    }
  }

  const segs: Segment[] = [];
  let cur = "";
  let curHit = marks[0] ?? false;
  for (let i = 0; i < text.length; i++) {
    if (marks[i] === curHit) {
      cur += text[i];
    } else {
      if (cur) segs.push({ text: cur, hit: curHit });
      cur = text[i];
      curHit = marks[i];
    }
  }
  if (cur) segs.push({ text: cur, hit: curHit });
  return segs;
}
