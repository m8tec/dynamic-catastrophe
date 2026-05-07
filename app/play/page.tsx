import FlowCanvas from '@/components/flow/FlowCanvas';
import DynamicFlowLoader from '@/components/flow/DynamicFlowLoader';
import { getStaticScenario } from '@/lib/staticData';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<any>;
  searchParams: Promise<{ mode?: string; scenario?: string; topic?: string }>;
}): Promise<Metadata> {
  const { mode, scenario, topic } = await searchParams;
  
  if (mode === 'dynamic') {
    const decodedTopic = topic ? decodeURIComponent(topic) : "Das Unbekannte";
    return { title: `KI-Szenario: ${decodedTopic} | Dynamic Catastrophe` };
  }

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
    openGraph: { title, description }
  };
}

export default async function PlayPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; scenario?: string; topic?: string }>;
}) {
  const { mode, scenario, topic } = await searchParams;

  if (mode === 'dynamic') {
    const decodedTopic = topic ? decodeURIComponent(topic) : 'Unbekanntes Grauen';
    return (
      <main className="w-full h-screen bg-[#121212]">
        <DynamicFlowLoader topic={decodedTopic} />
      </main>
    );
  }
  
  const data = getStaticScenario(scenario);

  return (
    <main className="w-full h-screen bg-[#121212]">
      {data ? (
        <FlowCanvas 
          initialNodes={data.nodes} 
          initialEdges={data.edges}
          isDynamicMode={false}
          sidebarData={{
            title: data.metadata?.title || 'Unbekanntes Szenario',
            description: data.metadata?.description || 'Keine Aufzeichnungen vorhanden.',
            teaserImage: data.metadata?.teaserImage,
          }}
          theme={data.metadata?.theme}
        />
      ) : (
        <div className="w-full h-screen flex items-center justify-center bg-[#121212] text-white">
          <div className="text-xl font-vesper">Szenario nicht gefunden.</div>
        </div>
      )}
    </main>
  );
}