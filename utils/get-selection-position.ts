export function getSelectionPosition(selection: Selection) {
  if (!selection || selection.rangeCount === 0) return null;

  const range = selection.getRangeAt(0);
  const rects = range.getClientRects();

  if (rects.length === 0) return null;

  // Get the position of the first rectangle of the selected text
  const rect = rects[0];

  return {
    top: rect.top,
    left: rect.left,
    bottom: rect.bottom,
    right: rect.right,
    width: rect.width,
    height: rect.height,
  };
}
