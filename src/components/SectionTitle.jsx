export function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}