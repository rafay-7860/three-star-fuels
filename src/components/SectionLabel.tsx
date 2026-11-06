type Props = {
  children: string;
  light?: boolean;
};

export default function SectionLabel({ children, light }: Props) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className={`h-px w-10 ${light ? 'bg-energy' : 'bg-energy'}`}
        aria-hidden
      />
      <span
        className={`display text-sm font-semibold tracking-[0.2em] ${
          light ? 'text-sky' : 'text-royal'
        }`}
      >
        {children}
      </span>
    </div>
  );
}
