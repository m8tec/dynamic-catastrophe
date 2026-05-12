import FlowCanvas from "@/components/flow/FlowCanvas";
import { getStaticScenario } from "@/lib/staticData";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { parseScenarioToFlow } from "@/utils/scenarioParser";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string; }>;
}): Promise<Metadata> {
  const { scenario } = await searchParams;
  const data = getStaticScenario(scenario);

  let title = "Nicht gefunden | Dynamic Catastrophe";
  let description = "Das angeforderte Szenario wurde nicht gefunden.";

  if (data) {
    title = `${data.metadata.title} | Dynamic Catastrophe`;
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
  const data = getStaticScenario(scenario);

  if (!data) {
    return (
      <main className="w-full h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-xl font-vesper text-white">Szenario nicht gefunden.</div>
      </main>
    );
  }

  const { nodes, edges } = parseScenarioToFlow(data.rawScenario);

  return (
    <main className="w-full h-screen bg-[#121212]">
      <FlowCanvas
        title={data.metadata.title || "Unbekanntes Szenario"}
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