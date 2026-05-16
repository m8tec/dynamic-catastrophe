import AmbientAudio from "@/components/home/AmbientAudio";
import LanguageToggle from "@/components/home/LanguageToggle";

export default function SystemControls() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 h-10">
      <AmbientAudio src="/audio/home.mp3" />
      <LanguageToggle />
    </div>
  );
}