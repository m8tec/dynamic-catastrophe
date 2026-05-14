import fs from "fs";
import path from "path";
import BackgroundSlider from "./BackgroundSlider";
import { getTranslations } from "next-intl/server";

async function getBackgroundImages() {
  const imagesDir = path.join(process.cwd(), "public", "images", "home");

  if (!fs.existsSync(imagesDir)) return [];

  const files = fs.readdirSync(imagesDir);
  files.sort(() => Math.random() - 0.5);

  const images = files
    .filter(
      (f) =>
        f.endsWith(".webp")
    )
    .map((f) => `/images/home/${f}`);

  return images;
}

export default async function HeroBanner() {
  const backgroundImages = await getBackgroundImages();

  const t = await getTranslations();

  return (
    <section className="relative w-full h-[55vh] flex flex-col items-center justify-center overflow-hidden">
      <BackgroundSlider images={backgroundImages} />

      <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

      <div className="relative z-10 text-center px-6">
        
        <div className="inline-grid text-left">
          
          <h1
            className="text-5xl md:text-7xl opacity-0 whitespace-nowrap pointer-events-none pr-2"
            style={{ fontFamily: "var(--font-vesper)" }}
          >
            {t("General.title")}
          </h1>
          
          <h1
            className="col-start-1 row-start-1 text-5xl md:text-7xl text-white whitespace-nowrap overflow-hidden border-r-4 border-white pr-2 animate-typewriter"
            style={{ fontFamily: "var(--font-vesper)" }}
          >
            {t("General.title")}
          </h1>
          
        </div>

        <p
          className="mt-6 text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto animate-fade-in opacity-0"
          style={{
            animation: "fadeIn 1s ease forwards 2.5s",
            fontFamily: "var(--font-vesper)",
          }}
        >
          {t("Hero.subtitle")}
        </p>
      </div>
    </section>
  );
}