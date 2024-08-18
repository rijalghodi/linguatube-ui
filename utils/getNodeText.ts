export function getNodeText(selection: Selection): string | null {
  if (!selection.rangeCount) return null;

  const selectedNode = selection.anchorNode;
  if (!selectedNode) return null;

  const parentElement =
    selectedNode.nodeType === Node.TEXT_NODE
      ? selectedNode.parentElement
      : (selectedNode as Element);

  return parentElement?.textContent || null;
}
