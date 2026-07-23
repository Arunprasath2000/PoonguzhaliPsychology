import React from "react";

// Minimal renderer for the tiny markdown subset used in topic bodies:
//   **bold**, "- " bullet lines, and blank-line-separated paragraphs.

function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={`${keyBase}-${i}`}>{p.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={`${keyBase}-${i}`}>{p}</React.Fragment>;
  });
}

export function MarkText({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className="prose">
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.trim().startsWith("- ") || l.trim() === "");
        if (isList) {
          return (
            <div key={bi}>
              {lines
                .filter((l) => l.trim().startsWith("- "))
                .map((l, li) => (
                  <div className="bullet" key={li}>
                    <span>{renderInline(l.trim().slice(2), `${bi}-${li}`)}</span>
                  </div>
                ))}
            </div>
          );
        }
        return <p key={bi}>{renderInline(block, `p-${bi}`)}</p>;
      })}
    </div>
  );
}
