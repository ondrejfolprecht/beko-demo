/** Link label that rolls upward on hover. Needs to be a direct child of the link or button. */
export function Roll({ children }: { children: string }) {
  return (
    <span className="roll" data-text={children}>
      <span>{children}</span>
    </span>
  );
}
