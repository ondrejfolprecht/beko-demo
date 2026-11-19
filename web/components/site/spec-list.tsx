type Spec = { label: string; value: string };

export function SpecList({ specs }: { specs: readonly Spec[] }) {
  return (
    <dl className="border-t border-line text-[15px]">
      {specs.map((spec) => (
        <div key={spec.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3">
          <dt className="text-muted-foreground">{spec.label}</dt>
          <dd>{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
