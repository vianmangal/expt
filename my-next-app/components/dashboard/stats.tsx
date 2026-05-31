interface StatCardProps {
  title: string;
  value: string;
  trend: string;
}

export default function StatCard({
  title,
  value,
  trend,
}: StatCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex justify-between mb-4">
        <span className="text-zinc-400">
          {title}
        </span>

        <span className="text-sm">
          {trend}
        </span>
      </div>

      <h3 className="text-2xl font-bold">
        {value}
      </h3>
    </div>
  );
}