export default function CategoryChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8">
      <h4 className="text-xs uppercase mb-8">
        Category Distribution
      </h4>

      <div className="flex justify-center relative">
        <svg
          className="w-48 h-48 -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="transparent"
            stroke="#2a2a2a"
            strokeWidth="8"
          />

          <circle
            cx="50"
            cy="50"
            r="42"
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="8"
            strokeDasharray="80 184"
          />

          <circle
            cx="50"
            cy="50"
            r="42"
            fill="transparent"
            stroke="#8e9192"
            strokeWidth="8"
            strokeDasharray="60 204"
            strokeDashoffset="-80"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">
            $4.2K
          </span>

          <span className="text-xs text-zinc-500">
            Aggregate
          </span>
        </div>
      </div>
    </div>
  );
}