export function getFullWordSelection(selection: Selection): string | null {
  if (!selection?.rangeCount) return null;

  const range = selection.getRangeAt(0);
  const textNode = range.startContainer;
  const text = textNode.textContent;

  if (!text) return null;

  let start = range.startOffset;
  let end = range.endOffset;

  // Expand selection to the left until we find a word boundary
  while (start > 0 && /\w/.test(text[start - 1])) start--;

  // Expand selection to the right until we find a word boundary
  while (end < text.length && /\w/.test(text[end])) end++;

  // Return the full word
  return text.substring(start, end);
}
