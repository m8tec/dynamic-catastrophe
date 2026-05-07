import FlowCanvas from '@/components/flow/FlowCanvas';
import { getStaticScenario } from '@/lib/staticData';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<any>;
  searchParams: Promise<{ mode?: string; scenario?: string }>;
}): Promise<Metadata> {
  const { mode, scenario } = await searchParams;
  
  if (mode === 'dynamic') {
    return { title: "KI-Szenario: Dynamic Catastrophe" };
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
    openGraph: {
      title,
      description
    }
  };
}

export default async function PlayPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; scenario?: string }>;
}) {
  const { mode, scenario } = await searchParams;
  const data = getStaticScenario(scenario);

  return (
    <main className="w-full h-screen bg-[#1E1E1E]">
      {data ? (
        <FlowCanvas 
        initialNodes={data.nodes} 
        initialEdges={data.edges}
        isDynamicMode={mode === 'dynamic'}
      />
      ) : (
        <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: '#1E1E1E', color: '#FFFFFF' }}>
          <div className="text-xl font-vesper">Szenario nicht gefunden.</div>
        </div>
      )}
    </main>
  );
}