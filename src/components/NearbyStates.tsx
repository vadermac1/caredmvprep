import Link from "next/link";

// Geographic neighbors for all 50 states (max 5 shown)
const NEIGHBORS: Record<string, string[]> = {
  alabama: ["georgia", "tennessee", "mississippi", "florida"],
  alaska: ["washington", "oregon", "idaho", "montana"],
  arizona: ["california", "nevada", "utah", "new-mexico", "colorado"],
  arkansas: ["missouri", "tennessee", "mississippi", "louisiana", "oklahoma"],
  california: ["oregon", "nevada", "arizona"],
  colorado: ["wyoming", "nebraska", "kansas", "new-mexico", "utah"],
  connecticut: ["new-york", "rhode-island", "massachusetts"],
  delaware: ["maryland", "pennsylvania", "new-jersey"],
  florida: ["georgia", "alabama", "south-carolina"],
  georgia: ["tennessee", "north-carolina", "south-carolina", "florida", "alabama"],
  hawaii: ["california", "alaska", "oregon", "washington"],
  idaho: ["montana", "wyoming", "utah", "nevada", "oregon"],
  illinois: ["wisconsin", "iowa", "missouri", "kentucky", "indiana"],
  indiana: ["michigan", "ohio", "kentucky", "illinois"],
  iowa: ["minnesota", "wisconsin", "illinois", "missouri", "nebraska"],
  kansas: ["nebraska", "missouri", "oklahoma", "colorado"],
  kentucky: ["ohio", "west-virginia", "virginia", "tennessee", "indiana"],
  louisiana: ["arkansas", "mississippi", "texas"],
  maine: ["new-hampshire", "vermont", "massachusetts"],
  maryland: ["pennsylvania", "delaware", "virginia", "west-virginia"],
  massachusetts: ["new-york", "connecticut", "rhode-island", "vermont", "new-hampshire"],
  michigan: ["wisconsin", "indiana", "ohio"],
  minnesota: ["wisconsin", "iowa", "south-dakota", "north-dakota"],
  mississippi: ["tennessee", "alabama", "louisiana", "arkansas"],
  missouri: ["iowa", "illinois", "kentucky", "tennessee", "arkansas", "kansas"],
  montana: ["north-dakota", "south-dakota", "wyoming", "idaho"],
  nebraska: ["south-dakota", "iowa", "missouri", "kansas", "colorado"],
  nevada: ["oregon", "idaho", "utah", "arizona", "california"],
  "new-hampshire": ["vermont", "maine", "massachusetts"],
  "new-jersey": ["new-york", "pennsylvania", "delaware"],
  "new-mexico": ["colorado", "oklahoma", "texas", "arizona", "utah"],
  "new-york": ["connecticut", "massachusetts", "vermont", "new-jersey", "pennsylvania"],
  "north-carolina": ["virginia", "tennessee", "south-carolina", "georgia"],
  "north-dakota": ["minnesota", "south-dakota", "montana"],
  ohio: ["michigan", "pennsylvania", "west-virginia", "kentucky", "indiana"],
  oklahoma: ["kansas", "missouri", "arkansas", "texas", "new-mexico"],
  oregon: ["washington", "idaho", "nevada", "california"],
  pennsylvania: ["new-york", "new-jersey", "delaware", "maryland", "ohio"],
  "rhode-island": ["connecticut", "massachusetts"],
  "south-carolina": ["north-carolina", "georgia", "tennessee"],
  "south-dakota": ["north-dakota", "minnesota", "iowa", "nebraska", "wyoming"],
  tennessee: ["kentucky", "virginia", "north-carolina", "georgia", "alabama", "mississippi"],
  texas: ["new-mexico", "oklahoma", "arkansas", "louisiana"],
  utah: ["idaho", "wyoming", "colorado", "new-mexico", "arizona", "nevada"],
  vermont: ["new-york", "massachusetts", "new-hampshire"],
  virginia: ["maryland", "west-virginia", "kentucky", "tennessee", "north-carolina"],
  washington: ["oregon", "idaho", "nevada", "california"],
  "west-virginia": ["ohio", "pennsylvania", "maryland", "virginia", "kentucky"],
  wisconsin: ["minnesota", "iowa", "illinois", "michigan"],
  wyoming: ["montana", "south-dakota", "nebraska", "colorado", "utah", "idaho"],
};

// Convert slug to display name
function stateSlugToName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Derive stateSlug and testType from full page slug
function parseSlug(slug: string): { stateSlug: string; testType: "dmv" | "cdl" | "motorcycle" } {
  if (slug.endsWith("-cdl-practice-test")) {
    return { stateSlug: slug.replace(/-cdl-practice-test$/, ""), testType: "cdl" };
  }
  if (slug.endsWith("-motorcycle-practice-test")) {
    return { stateSlug: slug.replace(/-motorcycle-practice-test$/, ""), testType: "motorcycle" };
  }
  return { stateSlug: slug.replace(/-dmv-practice-test$/, ""), testType: "dmv" };
}

const testTypeLabel: Record<string, string> = {
  dmv: "DMV Practice Test",
  cdl: "CDL Practice Test",
  motorcycle: "Motorcycle Test",
};

interface NearbyStatesProps {
  slug: string;
}

export default function NearbyStates({ slug }: NearbyStatesProps) {
  const { stateSlug, testType } = parseSlug(slug);
  const neighbors = NEIGHBORS[stateSlug] ?? [];

  if (neighbors.length === 0) return null;

  const suffix =
    testType === "cdl"
      ? "-cdl-practice-test"
      : testType === "motorcycle"
      ? "-motorcycle-practice-test"
      : "-dmv-practice-test";

  const label = testTypeLabel[testType];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-2" style={{ color: "#0d1a2d" }}>
          Practice Tests in Nearby States
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Moving or testing in a neighboring state? These {label.toLowerCase()}s follow similar rules
          — start with your region.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {neighbors.slice(0, 5).map((neighborSlug) => {
            const name = stateSlugToName(neighborSlug);
            const href = `/${neighborSlug}${suffix}`;
            return (
              <Link
                key={neighborSlug}
                href={href}
                className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center hover:border-[#1a7f3c] hover:bg-green-50 hover:shadow-sm transition"
              >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1a7f3c] transition leading-snug">
                  {name}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-[#1a7f3c]/70 transition">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
