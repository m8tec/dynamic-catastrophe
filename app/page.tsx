import fs from "fs";
import path from "path";
import Link from "next/link";
import BackgroundSlider from "./components/BackgroundSlider";

async function getAvailableScenarios() {
  const baseDir = fs.existsSync(path.join(process.cwd(), "src")) ? "src" : "";
  const scenariosDir = path.join(
    process.cwd(),
    baseDir,
    "app",
    "data",
    "scenarios",
  );

  if (!fs.existsSync(scenariosDir)) return [];

  const files = fs.readdirSync(scenariosDir).filter((f) => f.endsWith(".ts"));
  const scenarios = [];

  for (const file of files) {
    const id = file.replace(".ts", "");
    try {
      const module = await import(`@/app/data/scenarios/${file}`);
      scenarios.push({
        id,
        title: module.metadata?.title || id,
        description:
          module.metadata?.description || "Keine Beschreibung verfügbar.",
      });
    } catch (e) {
      console.error(`Konnte Metadaten für ${file} nicht laden.`, e);
    }
  }

  return scenarios;
}

async function getBackgroundImages() {
  const imagesDir = path.join(process.cwd(), "public", "images", "home");

  if (!fs.existsSync(imagesDir)) return [];

  const files = fs.readdirSync(imagesDir);
  files.sort(() => Math.random() - 0.5);

  const images = files
    .filter(
      (f) =>
        f.endsWith(".png") ||
        f.endsWith(".webp") ||
        f.endsWith(".jpg") ||
        f.endsWith(".jpeg"),
    )
    .map((f) => `/images/home/${f}`);

  return images;
}

export default async function Home() {
  const scenarios = await getAvailableScenarios();
  const backgroundImages = await getBackgroundImages();

  return (
    <main className="min-h-screen w-full bg-[#121212] text-neutral-300 font-sans selection:bg-red-900 selection:text-white pb-24">
      <section className="relative w-full h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <BackgroundSlider images={backgroundImages} />

        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

        <div className="relative z-10 text-center px-6">
          <h1
            className="text-5xl md:text-7xl text-white animate-typewriter caret-blink whitespace-nowrap overflow-hidden"
            style={{ fontFamily: "var(--font-vesper)" }}
          >
            Dynamic Catastrophe
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto animate-fade-in opacity-0"
            style={{
              animation: "fadeIn 1s ease forwards 2.5s",
              fontFamily: "var(--font-vesper)",
            }}
          >
            Stelle dich den unbequemen Realitäten.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-20">
        <div className="mb-10 border-b border-neutral-800 pb-4">
          <h2
            className="text-3xl md:text-4xl font-vesper text-white"
            style={{ fontFamily: "var(--font-vesper)" }}
          >
            Szenario wählen
          </h2>
          <p className="text-neutral-500 mt-2">
            Spiele kuratierte, vordefinierte Katastrophen durch.
          </p>
        </div>

        {scenarios.length === 0 ? (
          <p className="text-neutral-600 italic">Keine Szenarien gefunden.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
              <Link
                key={scenario.id}
                href={`/play?mode=static&scenario=${scenario.id}`}
                className="group flex flex-col justify-between bg-[#1A1A1A] p-8 rounded-xl border border-neutral-800 hover:border-red-500/40 hover:bg-[#1E1E1E] transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <h3
                    className="text-2xl text-white mb-3 group-hover:text-red-400 transition-colors"
                    style={{ fontFamily: "var(--font-vesper)" }}
                  >
                    {scenario.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {scenario.description}
                  </p>
                </div>
                <div className="mt-6 text-xs uppercase tracking-widest text-neutral-600 font-semibold group-hover:text-red-500/80 transition-colors">
                  Pfad betreten →
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-24">
        <div className="bg-gradient-to-b from-[#1A1A1A] to-[#121212] p-10 md:p-14 rounded-2xl border border-neutral-800/50 shadow-2xl">
          <div className="max-w-2xl">
            <h2
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "var(--font-vesper)" }}
            >
              Das Unbekannte
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Lass die KI ein völlig neues, psychologisches Netz aus Ursache und
              Wirkung spinnen. Welches Thema hält dich nachts wach?
            </p>

            <form
              action="/play"
              method="GET"
              className="flex flex-col sm:flex-row gap-4"
            >
              <input type="hidden" name="mode" value="dynamic" />

              <input
                type="text"
                name="topic"
                placeholder="z.B. KI-Superintelligenz, Hyperinflation..."
                required
                className="flex-1 bg-[#222] border border-neutral-700 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-[#2A2A2A] transition-all"
              />

              <button
                type="submit"
                className="bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                Erschaffen
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
