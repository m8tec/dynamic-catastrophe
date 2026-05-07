export default function DynamicScenarioForm() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24">
      <div className="bg-gradient-to-b from-[#1A1A1A] to-[#121212] p-10 md:p-14 rounded-2xl border border-neutral-800/50 shadow-2xl">
        <div className="max-w-2xl">
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "var(--font-vesper)" }}
          >
            Das Unbekannte
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Lass die KI ein völlig neues, psychologisches Netz aus Ursache und
            Wirkung spinnen. Welches Thema hält dich nachts wach?
          </p>

          <form action="/play" method="GET" className="flex flex-col sm:flex-row gap-4">
            <input type="hidden" name="mode" value="dynamic" />
            <input
              type="text"
              name="topic"
              placeholder="z.B. KI-Superintelligenz, Hyperinflation..."
              required
              className="flex-1 bg-[#222] border border-neutral-700 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-[#2A2A2A] transition-all"
            />
            <button
              type="submit"
              className="bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              Erschaffen
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}