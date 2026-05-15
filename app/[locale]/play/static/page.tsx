import FlowCanvas from "@/components/flow/FlowCanvas";
import { getStaticScenario } from "@/lib/staticData";
import { Metadata } from "next";
import { parseScenarioToFlow } from "@/utils/scenarioParser";
import LoadingError from "@/components/play/LoadingError";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string; }>;
}): Promise<Metadata> {
  const t = await getTranslations("StaticScenario");
  const generalT = await getTranslations("General");
  const locale = await getLocale();

  const { scenario } = await searchParams;
  const data = getStaticScenario(scenario, locale);

  let title = `${t("notFoundTitle")} | ${generalT("title")}`;
  let description = t("notFoundMetadataDescription")

  if (data) {
    title = `${data.metadata.title} | ${generalT("title")}`;
    description = data.metadata.description;
  }

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function PlayPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; scenario?: string; topic?: string }>;
}) {
  const { scenario } = await searchParams;

  const locale = await getLocale();
  const t = await getTranslations("StaticScenario");

  const data = getStaticScenario(scenario, locale);

  if (!data) {
    return (
      <LoadingError 
        title={t("notFoundTitle")}
        message={t("notFoundDescription", { scenario: scenario || t("unknown") })} 
      />
    );
  }

  const { nodes, edges } = parseScenarioToFlow(data.rawScenario);

  return (
    <main className="w-full h-screen bg-[#121212]">
      <FlowCanvas
        title={data.metadata.title || t("unknownScenario")}
        description={data.metadata.description}
        teaserImage={data.metadata.teaserImage}
        theme={data.metadata.theme}
        rawScenario={data.rawScenario}
        initialNodes={nodes}
        initialEdges={edges}
        isDynamicMode={false}
      />
    </main>
  );
}