interface WeakTopic {
  category: string;
  correct: number;
  total: number;
}

interface WeakTopicsProps {
  topics: WeakTopic[];
}

const CATEGORY_LABELS: Record<string, string> = {
  traffic_signs: "Traffic Signs",
  right_of_way: "Right of Way",
  speed_limits: "Speed Limits",
  alcohol_and_drugs: "Alcohol & Drugs",
  parking: "Parking Rules",
  sharing_the_road: "Sharing the Road",
  safe_driving: "Safe Driving",
  cdl_pre_trip: "CDL Pre-Trip",
  cdl_cargo: "CDL Cargo",
  cdl_braking: "CDL Braking",
  cdl_hours_of_service: "Hours of Service",
  cdl_hazmat_classes: "HazMat Classes",
  motorcycle_technique: "Riding Technique",
  motorcycle_gear: "Protective Gear",
};

export default function WeakTopics({ topics }: WeakTopicsProps) {
  if (topics.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 px-5 py-5">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Weak Topics</h3>
        <p className="text-sm text-gray-400">Complete a practice test to identify your weak areas.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-5">
      <h3 className="text-sm font-bold text-gray-900 mb-4">Weak Topics</h3>
      <div className="space-y-3">
        {topics.map((t) => {
          const pct = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
          const color = pct >= 80 ? "#1a7f3c" : pct >= 60 ? "#d97706" : "#b91c1c";
          return (
            <div key={t.category}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-700">
                  {CATEGORY_LABELS[t.category] ?? t.category}
                </span>
                <span className="text-xs font-bold" style={{ color }}>{pct}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
