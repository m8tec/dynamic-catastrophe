import fs from "fs";
import path from "path";
import ScenarioCard from "./ScenarioCard";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

async function getAvailableScenarios(locale: string, t: any) {
  const baseDir = fs.existsSync(path.join(process.cwd(), "src")) ? "src" : "";
  const scenariosDir = path.join(
    process.cwd(),
    baseDir,
    "data",
    "scenarios",
  );

  if (!fs.existsSync(scenariosDir)) return [];

  const files = fs.readdirSync(scenariosDir).filter((f) => f.endsWith(".ts"));
  const scenarios = [];

  for (const file of files) {
    const id = file.replace(".ts", "");
    try {
      const module = await import(`@/data/scenarios/${file}`);
      
      if (module.data?.hidden) {
        continue;
      }

      const scenarioTranslations = module.translations?.[locale] || module.translations?.de;
      scenarios.push({
        id,
        title: scenarioTranslations?.title || id,
        description: scenarioTranslations?.description || t("noDescription"),
        teaserImage: module.data?.teaserImage || null,
      });
    } catch (e) {
      console.error(`Konnte Metadaten für ${file} nicht laden.`, e);
    }
  }

  return scenarios;
}

export default async function StaticScenarios() {
  const t = await getTranslations("StaticScenarios");
  const locale = await getLocale();

  const scenarios = await getAvailableScenarios(locale, t);

  return (
    <section className="max-w-5xl mx-auto px-6 pt-20">
      <div className="mb-10 border-b border-neutral-800 pb-4">
        <h2
          className="text-3xl md:text-4xl text-white"
          style={{ fontFamily: "var(--font-vesper)" }}
        >
          {t("selectScenario")}
        </h2>
        <p className="text-neutral-500 mt-2">
          {t("description")}
        </p>
      </div>

      {scenarios.length === 0 ? (
        <p className="text-neutral-600 italic">{t("noScenarios")}</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {scenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      )}
    </section>
  );
}