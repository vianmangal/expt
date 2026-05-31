interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
}

export default function SummaryCard({
  title,
  value,
  change,
}: SummaryCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-5 h-36 flex flex-col justify-between">
      <span className="text-xs text-zinc-500">
        {title}
      </span>

      <h3 className="text-3xl font-bold">
        {value}
      </h3>

      <span className="text-xs text-zinc-400">
        {change}
      </span>
    </div>
  );
}