const data = [65, 80, 55, 90, 75, 85];

export default function VarianceChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8">
      <h4 className="text-xs uppercase mb-8">
        Periodic Variance
      </h4>

      <div className="h-64 flex items-end gap-4">
        {data.map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-zinc-800 relative"
          >
            <div
              className="absolute bottom-0 w-full bg-white"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}