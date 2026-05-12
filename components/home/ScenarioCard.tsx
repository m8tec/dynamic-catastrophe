import Link from "next/link";

export default async function ScenarioCard({ scenario }: { scenario: any }) {
  return (
    <Link
      href={`/play/static/?scenario=${scenario.id}`}
      className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 hover:border-red-500/50 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[240px]"
    >
      {scenario.teaserImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url('${scenario.teaserImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-[#111]/40 transition-opacity duration-300 group-hover:opacity-80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#1A1A1A] transition-colors duration-300 group-hover:bg-[#1E1E1E]" />
      )}
      
      <div className="relative z-10 p-8 flex flex-col h-full justify-between">
        <div>
          <h3
            className="text-2xl text-white mb-3 group-hover:text-red-400 transition-colors"
            style={{ fontFamily: "var(--font-vesper)", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            {scenario.title}
          </h3>
          <p className="text-neutral-300 leading-relaxed text-sm drop-shadow-md">
            {scenario.description}
          </p>
        </div>
        
        <div className="mt-6 text-xs uppercase tracking-widest text-neutral-400 font-semibold group-hover:text-red-400 transition-colors">
          Pfad betreten →
        </div>
      </div>
    </Link>
  );
}