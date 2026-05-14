import FlowCanvas from "@/components/flow/FlowCanvas";
import { getStaticScenario } from "@/lib/staticData";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { parseScenarioToFlow } from "@/utils/scenarioParser";
import LoadingError from "@/components/play/LoadingError";

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
      <LoadingError 
        title="Szenario verschollen"
        message={`Das Szenario "${scenario || 'Unbekannt'}" existiert nicht. Vielleicht hat die Apokalypse es bereits verschlungen.`} 
      />
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