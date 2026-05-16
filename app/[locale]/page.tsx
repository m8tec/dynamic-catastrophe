import HeroBanner from "@/components/home/HeroBanner";
import StaticScenarios from "@/components/home/StaticScenarios";
import DynamicScenarioForm from "@/components/home/DynamicScenarioForm";
import UploadScenario from "@/components/home/UploadScenario";
import SystemControls from "@/components/home/SystemControls";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#121212] text-neutral-300 font-sans selection:bg-red-900 selection:text-white pb-24">
      
      <SystemControls />
      <HeroBanner />
      <div className="mb-1">
        <DynamicScenarioForm />
        <UploadScenario />
      </div>
      <StaticScenarios />
    </main>
  );
}