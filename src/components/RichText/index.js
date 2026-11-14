/**
 * Renders the plain-text format used by the long-form treatment fields
 * (Sanity `text` fields and src/data/dermalFillersContent.js):
 *   - a blank line starts a new paragraph
 *   - lines starting with "- " become a bullet list
 *   - a line starting with "> " becomes a highlighted quote
 * Line breaks inside a paragraph are kept as spaces.
 */
export function parseRichText(text = '') {
  const blocks = [];
  let para = [];
  let list = null;

  const flushPara = () => {
    if (para.length) blocks.push({ type: 'p', text: para.join(' ') });
    para = [];
  };
  const flushList = () => {
    if (list) blocks.push({ type: 'ul', items: list });
    list = null;
  };

  for (const raw of String(text).replace(/\r\n?/g, '\n').split('\n')) {
    const line = raw.trim();
    if (!line) { flushPara(); flushList(); continue; }
    if (/^[-•]\s+/.test(line)) { flushPara(); (list ||= []).push(line.replace(/^[-•]\s+/, '')); continue; }
    if (line.startsWith('> ')) { flushPara(); flushList(); blocks.push({ type: 'quote', text: line.slice(2) }); continue; }
    flushList();
    para.push(line);
  }
  flushPara();
  flushList();
  return blocks;
}

export default function RichText({ text, className = 'rt', leadClassName }) {
  if (!text) return null;
  const blocks = parseRichText(text);
  return (
    <div className={className}>
      {blocks.map((b, i) => {
        if (b.type === 'ul') {
          return (
            <ul key={i} className="rt__list">
              {b.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          );
        }
        if (b.type === 'quote') {
          return <blockquote key={i} className="rt__quote">{b.text}</blockquote>;
        }
        const lead = i === 0 && leadClassName;
        return <p key={i} className={lead ? leadClassName : undefined}>{b.text}</p>;
      })}
    </div>
  );
}
