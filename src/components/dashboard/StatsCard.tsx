interface StatsCardProps {
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}

export default function StatsCard({ label, value, sub, accent }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</p>
      <p
        className="text-3xl font-extrabold leading-none mb-1"
        style={{ color: accent ? '#1a7f3c' : '#0f1e3c' }}
      >
        {value}
      </p>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
  );
}
