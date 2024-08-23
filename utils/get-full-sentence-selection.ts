export function getFullSentenceSelection(selection: Selection): string | null {
  if (!selection?.rangeCount) return null;

  const range = selection.getRangeAt(0);
  const textNode = range.startContainer;
  const text = textNode.textContent;

  if (!text) return null;

  let start = range.startOffset;
  let end = range.endOffset;

  // Helper function to find the boundary of a sentence
  function findSentenceBoundary(
    start: number,
    end: number,
    direction: "left" | "right",
    text: string
  ): number {
    const sentenceEndChars = /[.!?]/;
    while (start >= 0 && end < text.length) {
      if (direction === "left") {
        if (start === 0 || sentenceEndChars.test(text[start - 1])) {
          return start;
        }
        start--;
      } else {
        if (end === text.length || sentenceEndChars.test(text[end])) {
          return end;
        }
        end++;
      }
    }
    return direction === "left" ? 0 : text.length;
  }

  // Expand selection to include the full sentence
  const newStart = findSentenceBoundary(start, end, "left", text);
  const newEnd = findSentenceBoundary(start, end, "right", text);

  // Return the full sentence
  return text.substring(newStart, newEnd).trim();
}
