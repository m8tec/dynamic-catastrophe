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
  searchParams: Promise<{ prompt?: string }>;
}): Promise<Metadata> {
  const { prompt } = await searchParams;

  const decodedTopic = prompt ? decodeURIComponent(prompt) : "";
  return {
    title: `KI-Szenario${decodedTopic ? `: ${decodedTopic}` : ``} | Dynamic Catastrophe`,
  };
}

export default async function PlayPage({
  searchParams,
}: {
  searchParams: Promise<{ prompt?: string }>;
}) {
  const { prompt } = await searchParams;

  const decodedTopic = prompt
    ? decodeURIComponent(prompt)
    : "Unbekanntes Grauen";
  return (
    <main className="w-full h-screen bg-[#121212]">
      <DynamicFlowLoader topic={decodedTopic} />
    </main>
  );
}
