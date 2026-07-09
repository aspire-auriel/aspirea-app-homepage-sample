import { features } from "@/data/home";

// Simple inline icons approximating the reference glyphs
const icons: Record<string, React.ReactNode> = {
  "Business Account": <UserIcon />,
  "FX & Payments": <CoinsIcon />,
  "Corporate Cards": <CardIcon />,
  Yield: <SeedIcon />,
  Integrations: <BlocksIcon />,
  "Expense Management": <ChartIcon />,
};

export default function Features() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-shell px-5">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-ink text-center max-w-2xl mx-auto leading-tight">
          {features.title}
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group rounded-[18px] p-8 bg-card transition-transform hover:-translate-y-0.5"
            >
              <span className="text-ink">{icons[item.name]}</span>
              <h3 className="mt-6 text-2xl font-medium text-ink">{item.name}</h3>
              <p className="mt-3 leading-relaxed text-slate/70">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>
  );
}
function CoinsIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="9" cy="7" rx="6" ry="3" /><path d="M3 7v5c0 1.7 2.7 3 6 3" /><ellipse cx="15" cy="15" rx="6" ry="3" /><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-2" /></svg>
  );
}
function CardIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
  );
}
function SeedIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M9 11l3-3 3 3" /></svg>
  );
}
function BlocksIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5" /><path d="M17 3v6M14 6h6" /><rect x="3" y="14" width="8" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
  );
}
function ChartIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9v9z" /><path d="M12 3a9 9 0 0 1 9 9h-9z" /></svg>
  );
}
