export default function AnomalyDetection() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6">
      <h4 className="text-xs uppercase mb-6">
        Anomaly Detection
      </h4>

      <div className="space-y-4">
        <div className="border-l-2 border-red-500 bg-zinc-800 p-4">
          <h5 className="font-semibold">
            SUBSCRIPTION_SPIKE
          </h5>

          <p className="text-sm text-zinc-400">
            AWS_SERVICES +140%
          </p>
        </div>

        <div className="border-l-2 border-white bg-zinc-800 p-4">
          <h5 className="font-semibold">
            EFFICIENCY_PROTOCOL
          </h5>

          <button className="mt-2 border border-white px-3 py-1 text-xs">
            EXECUTE
          </button>
        </div>
      </div>
    </div>
  );
}