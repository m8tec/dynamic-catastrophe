"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { localizedPath } from "@/utils/localizedPath";

export default function UploadScenario() {
  const t = useTranslations("UploadScenario");
  const locale = useLocale();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/json" && !file.name.endsWith(".json")) {
      setError(t("errorInvalidFileType"));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsedData = JSON.parse(content);

        if (!parsedData.scenario || !Array.isArray(parsedData.scenario)) {
          throw new Error(t("errorInvalidScenario"));
        }

        sessionStorage.setItem("customScenario", JSON.stringify(parsedData));

        router.push(localizedPath(locale, "/play/custom"));
      } catch (err) {
        console.error("Error while parsing file:", err);
        setError(t("errorInvalidFile"));
      }

      if (fileInputRef.current) fileInputRef.current.value = "";
    };

    reader.readAsText(file);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-6">
      <input
        type="file"
        accept=".json,application/json"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4 w-full opacity-30">
          <div className="flex-1 h-px bg-neutral-500"></div>
          <span className="text-xs uppercase tracking-widest font-bold">{t("divider")}</span>
          <div className="flex-1 h-px bg-neutral-500"></div>
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full py-4 px-6 border-2 border-dashed border-neutral-700 hover:border-red-900/60 hover:bg-red-900/10 text-neutral-400 hover:text-white transition-all duration-300 rounded-lg flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-bold group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          {t("uploadButton")}
        </button>

        {error && (
          <p className="text-red-500 text-xs font-semibold uppercase tracking-wider mt-2">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}