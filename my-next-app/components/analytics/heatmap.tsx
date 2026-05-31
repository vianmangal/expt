export default function Heatmap() {
  const levels = [
    "bg-zinc-800",
    "bg-zinc-700",
    "bg-zinc-600",
    "bg-zinc-500",
    "bg-white",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8">
      <h4 className="text-xs uppercase mb-8">
        Temporal Intensity Matrix
      </h4>

      <div className="flex gap-1 overflow-auto">
        {Array.from({ length: 36 }).map((_, col) => (
          <div
            key={col}
            className="grid grid-rows-7 gap-1"
          >
            {Array.from({ length: 7 }).map((_, row) => (
              <div
                key={row}
                className={`w-3 h-3 ${
                  levels[
                    Math.floor(
                      Math.random() * levels.length
                    )
                  ]
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}