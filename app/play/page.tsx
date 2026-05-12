import LoadingError from "@/components/play/LoadingError";

export default function PlayIndexPage() {
  return (
    <LoadingError 
      title="Nichts zu sehen"
      message="Du bist im Nirgendwo gelandet. Wähle ein gültiges Szenario auf der Startseite aus, um dein Schicksal herauszufordern." 
    />
  );
}