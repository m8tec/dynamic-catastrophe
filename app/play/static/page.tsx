import FlowCanvas from "@/components/flow/FlowCanvas";
import DynamicFlowLoader from "@/components/flow/DynamicFlowLoader";
import { getStaticScenario } from "@/lib/staticData";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<any>;
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

  let error = "Szenario nicht gefunden.";
  let data;
  try {
     data = getStaticScenario(scenario);
  } catch (err) {
    console.error(err);
    error = "Fehler beim Laden des Szenarios.";
  }

  return (
    <main className="w-full h-screen bg-[#121212]">
      {data ? (
        <FlowCanvas
          description={data.metadata?.description}
          initialNodes={data.nodes}
          initialEdges={data.edges}
          isDynamicMode={false}
          rawScenario={data.metadata?.scenario}
          teaserImage={data.metadata?.teaserImage}
          theme={data.metadata?.theme}
          title={data.metadata?.title || "Unbekanntes Szenario"}
        />
      ) : (
        <div className="w-full h-screen flex items-center justify-center bg-[#121212] text-white">
          <div className="text-xl font-vesper">{error}</div>
        </div>
      )}
    </main>
  );
}
