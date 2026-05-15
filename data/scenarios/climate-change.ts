import { ScenarioData } from "@/types/scenario";
import { StaticNode, StaticEdge } from "@/types/static";

export const translations = {
  de: {
    title: "Klimawandel: Die nackte Wahrheit",
    description: "Hast du unser Schicksal schon akzeptiert? Das Original-Szenario von 'I Want a Better Catastrophe'."
  },
  en: {
    title: "Climate Change: The Naked Truth",
    description: "Have you accepted our fate yet? The original scenario from 'I Want a Better Catastrophe'."
  }
};

export const data: ScenarioData = {
  teaserImage: "/images/scenarios/climate-change/teaser.webp",
  theme: "default",
  scenario: [
    {
      id: "1",
      type: "diamond",
      text: "Ist der Klimawandel real?",
      options: [
        {
          text: "Klima was?",
          nextId: "1",
        },
        {
          text: "Ich versuche, nicht daran zu denken",
          nextId: "1",
        },
        {
          text: "Nö!",
          nextId: "4",
        },
        {
          text: "Ja",
          nextId: "13",
        },
      ],
    },
    {
      id: "4",
      type: "circle",
      text: "Verdrängst du da vielleicht etwas?",
      options: [
        {
          text: "Hmmm...",
          nextId: "1",
        },
        {
          text: "Weiter",
          nextId: "7",
        },
      ],
    },
    {
      id: "7",
      type: "cloud",
      text: "Ich verdränge gar nix!",
      options: [
        {
          text: "Alles Lügen aus China",
          nextId: "9",
        },
      ],
    },
    {
      id: "13",
      type: "diamond",
      text: "Sind wir am Arsch?",
      options: [
        {
          text: "Ich versuche, nicht daran zu denken",
          nextId: "13",
        },
        {
          text: "Wen meinst du mit »wir«?",
          nextId: "16",
        },
        {
          text: "Noch nicht, aber…",
          nextId: "38",
        },
      ],
    },
    {
      id: "16",
      type: "curved",
      text: "Meine Freund*innen und ich fliehen in ein skandinavisches Landhaus.",
      options: [
        {
          text: "Denn…",
          nextId: "18",
        },
      ],
    },
    {
      id: "19",
      type: "circle",
      text: "Könnte es sein, dass du Gefühle verdrängst?",
      options: [
        {
          text: "...oder ein wenig rassistisch bist?",
          nextId: "21",
        },
      ],
    },
    {
      id: "24",
      type: "cloud",
      text: "Nutze deine Privilegien.",
      options: [
        {
          text: "…ohne dich zu sehr als Besserwisser zu inszenieren",
          nextId: "24",
        },
        {
          text: "Weiter",
          nextId: "26",
        },
      ],
    },
    {
      id: "26",
      type: "diamond",
      text: "Es betrifft uns also alle gleichermaßen?",
      options: [
        {
          text: "Sozusagen…",
          nextId: "32",
        },
        {
          text: "Es ist kompliziert…",
          nextId: "20",
        },
      ],
    },
    {
      id: "28",
      type: "definition",
      text: "Menschen, die die Auswirkungen des Klimawandels als erste und am schlimmsten erleben, werden auf Englisch »Frontline Communities« genannt. Sie sind überwiegend Niedrigverdienende, People of Color, Indigene, aus dem globalen Süden, oder sie arbeiten unter gesundheitsschädlichen Bedingungen.",
      options: [
        {
          text: "Ohne uns keine Beschlüsse über uns",
          nextId: "26",
        },
        {
          text: "NEIN!",
          nextId: "26",
        },
      ],
    },
    {
      id: "34",
      type: "diamond",
      text: "Können wir das wieder reparieren?",
      options: [
        {
          text: "Ich versuche, nicht daran zu denken",
          nextId: "34",
        },
        {
          text: "Kommt darauf an…",
          nextId: "56",
        },
        {
          text: "Kommt darauf an…",
          nextId: "42",
        },
      ],
    },
    {
      id: "39",
      type: "curved",
      text: "Die Apokalypse findet schon statt (für mich)!",
      options: [
        {
          text: "Ich muss dauernd daran denken",
          nextId: "39",
        },
        {
          text: "Weiter",
          nextId: "28",
        },
      ],
    },
    {
      id: "42",
      type: "diamond",
      text: "Was für eine Art Problem ist es?",
      options: [
        {
          text: "Ein gewöhnliches Problem",
          nextId: "54",
        },
        {
          text: "Ein »Komplexes Problem«",
          nextId: "44",
        },
      ],
    },
    {
      id: "45",
      type: "definition",
      text: "Ein Komplexes Problem (engl. »wicked problem«) kannst du nicht definieren, geht nie vorbei, hat keine korrekte Antwort (z.B. gibt es keine optimale Lösung, auf die man sich einigen kann), ist einzigartig (z.B. so besonders, dass kein früheres Problem als Modell dienen kann) und ist selbst das Symptom von anderen (komplexen) Problemen.",
      options: [
        {
          text: "Oh, aber der Klimawandel ist sogar noch schlimmer",
          nextId: "47",
        },
      ],
    },
    {
      id: "52",
      type: "rectangle",
      text: "Dilemma, nicht Problem",
      options: [
        {
          text: "Und ein Dilemma kann man nicht »reparieren«",
          nextId: "135",
        },
        {
          text: "Weiter",
          nextId: "95",
        },
      ],
    },
    {
      id: "54",
      type: "quote",
      text: "Es ist ein technisches Problem, für das es technische Lösungen gibt. — Rex Tillerson",
      options: [
        {
          text: "Weiter",
          nextId: "52",
        },
      ],
    },
    {
      id: "56",
      type: "diamond",
      text: "In welcher Art Krise stecken wir?",
      options: [
        {
          text: "Ich versuche, nicht daran zu denken",
          nextId: "56",
        },
        {
          text: "Nahrung",
          nextId: "59",
        },
        {
          text: "Weiter",
          nextId: "73",
        },
        {
          text: "Nur eine Sache",
          nextId: "75",
        },
      ],
    },
    {
      id: "73",
      type: "cloud",
      text: "Unsere ökologische Krise ist das Ergebnis vieler Krisen.",
      options: [
        {
          text: "Weiter",
          nextId: "78",
        },
      ],
    },
    {
      id: "78",
      type: "diamond",
      text: "Wie schlimm ist es?",
      options: [
        {
          text: "Ich versuche, nicht daran zu denken",
          nextId: "78",
        },
        {
          text: "Bisschen schlimm",
          nextId: "81",
        },
        {
          text: "Richtig richtig schlimm",
          nextId: "87",
        },
        {
          text: "Richtig schlimm",
          nextId: "87",
        },
        {
          text: "Ziemlich schlimm",
          nextId: "83",
        },
      ],
    },
    {
      id: "81",
      type: "rectangle",
      text: "Business as usual.",
      options: [
        {
          text: "Weiter",
          nextId: "54",
        },
      ],
    },
    {
      id: "83",
      type: "rectangle",
      text: "Der Übergang wird schwer.",
      options: [
        {
          text: "Weiter",
          nextId: "100",
        },
      ],
    },
    {
      id: "85",
      type: "rectangle",
      text: "Zusammenbruch der Zivilisation",
      options: [
        {
          text: "Also, was nun?!",
          nextId: "112",
        },
        {
          text: "Moment!",
          nextId: "110",
        },
      ],
    },
    {
      id: "87",
      type: "diamond",
      text: "Soll ich anderen sagen wie schlimm?",
      options: [
        {
          text: "Nein",
          nextId: "78",
        },
        {
          text: "Ja",
          nextId: "90",
        },
      ],
    },
    {
      id: "90",
      type: "rectangle",
      text: "Das Aussterben der Menschheit",
      options: [
        {
          text: "Neeeiiinnn!",
          nextId: "92",
        },
        {
          text: "Moment!",
          nextId: "110",
        },
      ],
    },
    {
      id: "92",
      type: "diamond",
      text: "Können wir gar nichts machen?",
      options: [
        {
          text: "Nein :-(",
          nextId: "94",
        },
        {
          text: "Keine Angst…",
          nextId: "148",
        },
        {
          text: "Wahrscheinlich nicht, aber…",
          nextId: "181",
        },
        {
          text: "Vielleicht",
          nextId: "178",
        },
      ],
    },
    {
      id: "94",
      type: "rectangle",
      text: "Endspiel",
      options: [
        {
          text: "Weiter",
          nextId: "276",
        },
      ],
    },
    {
      id: "95",
      type: "cloud",
      text: "Also… können wir es richten, ohne dass ICH mich ändern muss?",
      options: [
        {
          text: "Nö!",
          nextId: "97",
        },
      ],
    },
    {
      id: "97",
      type: "quote",
      text: "Das verändert alles. — Naomi Klein",
      options: [
        {
          text: "Alles?!",
          nextId: "100",
        },
      ],
    },
    {
      id: "100",
      type: "quote",
      text: "Während alles auseinanderfällt, kommt alles zusammen. — Jamie Henn",
      options: [
        {
          text: "Also...",
          nextId: "102",
        },
      ],
    },
    {
      id: "102",
      type: "diamond",
      text: "Steht uns Kollaps oder Transformation bevor?",
      options: [
        {
          text: "Wen juckt's?",
          nextId: "104",
        },
        {
          text: "Beides nicht zu knapp",
          nextId: "116",
        },
      ],
    },
    {
      id: "104",
      type: "cloud",
      text: "Party feiern als ob es 2099 wäre.",
      options: [],
    },
    {
      id: "110",
      type: "diamond",
      text: "Ist das wirklich das Ende der Welt?",
      options: [
        {
          text: "Nö, nur noch ein Hollywood-Blockbuster",
          nextId: "109",
        },
        {
          text: "Ja, wirklich",
          nextId: "90",
        },
        {
          text: "Nur der Welt wie wir sie kennen",
          nextId: "112",
        },
        {
          text: "Fühlt sich ganz so an",
          nextId: "182",
        },
      ],
    },
    {
      id: "112",
      type: "quote",
      text: "Wir müssen lernen als Zivilisation zu sterben. — Roy Scranton",
      options: [
        {
          text: "Weiter",
          nextId: "100",
        },
        {
          text: "Oh!",
          nextId: "102",
        },
      ],
    },
    {
      id: "120",
      type: "diamond",
      text: "Müssen wir?",
      options: [
        {
          text: "Nö.",
          nextId: "104",
        },
        {
          text: "Ja!",
          nextId: "123",
        },
        {
          text: "Kommt darauf an",
          nextId: "157",
        },
      ],
    },
    {
      id: "124",
      type: "quote",
      text: "…die einzige Frage, die wir stellen dürfen: was braucht diese Erde von uns, wenn wir weiterhin auf ihr leben wollen? — Wendell Berry",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "127",
      type: "diamond",
      text: "Schaffen wir es?",
      options: [
        {
          text: "Frag nicht!",
          nextId: "124",
        },
        {
          text: "Vielleicht",
          nextId: "132",
        },
        {
          text: "Nein, leider…",
          nextId: "130",
        },
        {
          text: "Kommt darauf an",
          nextId: "184",
        },
      ],
    },
    {
      id: "132",
      type: "quote",
      text: "Wenn es eine Bewegung gibt, haben wir eine Chance. Also lasst uns loslegen. — Bill McKibben",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "135",
      type: "diamond",
      text: "Gibt es Gründe optimistisch zu sein?",
      options: [
        {
          text: "Es könnte noch schlimmer sein",
          nextId: "135",
        },
        {
          text: "Nicht wirklich...",
          nextId: "140",
        },
        {
          text: "Ja & Nein",
          nextId: "138",
        },
      ],
    },
    {
      id: "138",
      type: "quote",
      text: "Pessimismus des Verstandes, Optimismus des Willens. — Antonio Gramsc",
      options: [
        {
          text: "Okay, also...",
          nextId: "102",
        },
      ],
    },
    {
      id: "140",
      type: "quote",
      text: "Ich kann kein Optimist sein, aber ich bin ein Gefangener der Hoffnung. — Desmond Tutu",
      options: [
        {
          text: "Weiter",
          nextId: "141",
        },
      ],
    },
    {
      id: "141",
      type: "diamond",
      text: "Besteht noch Hoffnung?",
      options: [
        {
          text: "Siehe anderes",
          nextId: "143",
        },
        {
          text: "Hoffnung, dein Ernst? Deine Bude brennt!",
          nextId: "146",
        },
      ],
    },
    {
      id: "155",
      type: "quote",
      text: "Wir müssen das Richtige tun, weil es richtig ist. — Kathleen Dean Moore",
      options: [
        {
          text: "Weiter",
          nextId: "120",
        },
      ],
    },
    {
      id: "157",
      type: "diamond",
      text: "Was für ein Vorfahre willst du sein?",
      options: [
        {
          text: "Ein Arschloch",
          nextId: "157",
        },
        {
          text: "Mögen die Augen der Zukunft sich in dein Herz bohren",
          nextId: "157",
        },
        {
          text: "Kein Arschloch",
          nextId: "188",
        },
      ],
    },
    {
      id: "163",
      type: "cloud",
      text: "Ich darf die Hoffnung nicht aufgeben, wenn andere sich das gar nicht leisten können.",
      options: [
        {
          text: "Oder doch?",
          nextId: "163",
        },
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "166",
      type: "cloud",
      text: "Ich wähle die Hoffnung.",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "168",
      type: "cloud",
      text: "Ich rebelliere gegen mein Aussterben!",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "170",
      type: "diamond",
      text: "Sollen wir in dieser Weit überhaupt noch Kinder zeugen?",
      options: [
        {
          text: "Ja!",
          nextId: "173",
        },
        {
          text: "Ups! Habe ich schon",
          nextId: "173",
        },
        {
          text: "Nein",
          nextId: "190",
        },
      ],
    },
    {
      id: "176",
      type: "cloud",
      text: "Du kannst noch helfen, dass es langsamer und weniger schlimmer wird.",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "178",
      type: "quote",
      text: "Zu handeln ist meine Bewältigungs- und Hoffnungs-Strategie. — Chuck Collins",
      options: [],
    },
    {
      id: "181",
      type: "cloud",
      text: "Die Weltgeschichte steckt voller Überraschungen. Gewissheit gibt es nicht.",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "182",
      type: "diamond",
      text: "Warum also was tun?",
      options: [
        {
          text: "Um Zeit zu gewinnen",
          nextId: "176",
        },
        {
          text: "Ich habe Kinder!",
          nextId: "170",
        },
        {
          text: "Moralischer Anstand",
          nextId: "155",
        },
        {
          text: "Vermächtnis",
          nextId: "157",
        },
        {
          text: "Solidarität",
          nextId: "163",
        },
        {
          text: "Hoffnung?",
          nextId: "166",
        },
        {
          text: "Überleben",
          nextId: "168",
        },
      ],
    },
    {
      id: "184",
      type: "diamond",
      text: "Was liebst du zu innig, um es zu verlieren?",
      options: [
        {
          text: "Und...",
          nextId: "186",
        },
      ],
    },
    {
      id: "186",
      type: "diamond",
      text: "Was wirst du deswegen tun?",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
        {
          text: "Einen Scheiß werde ich tun",
          nextId: "195",
        },
      ],
    },
    {
      id: "190",
      type: "cloud",
      text: "Der Erde geht es ohne uns besser.",
      options: [
        {
          text: "Nun ja, okay, also…",
          nextId: "94",
        },
        {
          text: "Das lässt sich auch anders erzählen",
          nextId: "240",
        },
      ],
    },
    {
      id: "193",
      type: "cloud",
      text: "Der Erde wird es gut gehen, egal, was wir machen.",
      options: [
        {
          text: "In zehn Millionen Jahren vielleicht",
          nextId: "193",
        },
        {
          text: "Zur Hölle, nein, wird es ihr nicht!",
          nextId: "197",
        },
        {
          text: "Tatsächlich...",
          nextId: "190",
        },
      ],
    },
    {
      id: "197",
      type: "cloud",
      text: "Wir haben ein Unheil angerichtet, das nur wir aufräumen können.",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "205",
      type: "diamond",
      text: "Ist es schon JETZT?",
      options: [
        {
          text: "Noch nicht!",
          nextId: "205",
        },
        {
          text: "Jetzt!",
          nextId: "250",
        },
      ],
    },
    {
      id: "209",
      type: "cloud",
      text: "Die Wissenschaft findet eine Lösung.",
      options: [
        {
          text: "Weiter",
          nextId: "214",
        },
        {
          text: "Direct Air Capture",
          nextId: "211",
        },
      ],
    },
    {
      id: "214",
      type: "quote",
      text: "Wir gleichen Göttern, die noch enorm viel lernen müssen. — Stewart Brand",
      options: [
        {
          text: "Also wirklich noch sehr, sehr viel",
          nextId: "216",
        },
      ],
    },
    {
      id: "216",
      type: "quote",
      text: "Kolonisieren wir nicht andere Planeten, sind wir im Arsch. — Elon Musk (sinngemäß)",
      options: [],
    },
    {
      id: "219",
      type: "definition",
      text: "Degrowth (Wachstumsumkehr) bezeichnet ein gerechtes Zurückfahren von Produktion und Konsum, welches das Wohl von Menschen fördert und ökologische Zustände verbessert.",
      options: [
        {
          text: "Oh, okay",
          nextId: "326",
        },
      ],
    },
    {
      id: "222",
      type: "quote",
      text: "Wenn wir auf die Regierungen warten, wird es zu spät sein; handeln wir als Einzelne, ist das zu wenig; aber handeln wir als Gemeinschaften, könnte es vielleicht reichen. — Rob Hopkins",
      options: [
        {
          text: "Künstler;Ingenieurin;Erzähler;Heilerin;Trickster;Philosophin;Kriegerin;Guter Nachbar",
          nextId: "267",
        },
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "224",
      type: "quote",
      text: "Beschützt die Heiligkeit von Mutter Erde. — Clayton Thomas Mueller",
      options: [
        {
          text: "Weiter",
          nextId: "225",
        },
      ],
    },
    {
      id: "225",
      type: "cloud",
      text: "Ich werde dieses Fleckchen Land verteidigen.",
      options: [
        {
          text: "Das bedeutet Krieg",
          nextId: "229",
        },
      ],
    },
    {
      id: "227",
      type: "cloud",
      text: "Mein öko-sozialistischer Futurismus macht deinen kapitalistischen Realismus platt!",
      options: [
        {
          text: "Das bedeutet Krieg",
          nextId: "229",
        },
      ],
    },
    {
      id: "233",
      type: "cloud",
      text: "Warum zum Teufel recycle ich denn dann?",
      options: [
        {
          text: "Wegen des Trostes der Gründlichkeit?",
          nextId: "235",
        },
      ],
    },
    {
      id: "238",
      type: "cloud",
      text: "Suche Dir eine Metapher aus, mit der Du leben kannst.",
      options: [
        {
          text: "Klima- ~Wandel-Chaos-Apokalypse~ Notstand",
          nextId: "240",
        },
        {
          text: "Künstler;Ingenieurin;Erzähler;Heilerin;Trickster;Philosophin;Kriegerin;Guter Nachbar",
          nextId: "267",
        },
      ],
    },
    {
      id: "244",
      type: "quote",
      text: "Wir haben alles Nötige, bis auf den politischen Willen. — Al Gore",
      options: [
        {
          text: "Emissionshandel",
          nextId: "246",
        },
      ],
    },
    {
      id: "250",
      type: "diamond",
      text: "Was brauchen wir?",
      options: [
        {
          text: "Nicht so oft duschen",
          nextId: "231",
        },
        {
          text: "Bessere Narrative",
          nextId: "238",
        },
        {
          text: "Alles und Alle",
          nextId: "266",
        },
        {
          text: "Stärkere Gesetze",
          nextId: "244",
        },
        {
          text: "Durchdachte Technologie",
          nextId: "209",
        },
        {
          text: "Soziale Revolution",
          nextId: "227",
        },
        {
          text: "Widerstand aus der Zivilgesellschaft",
          nextId: "224",
        },
        {
          text: "Energie drosseln",
          nextId: "218",
        },
        {
          text: "Resiliente Gemeinschaften",
          nextId: "222",
        },
      ],
    },
    {
      id: "251",
      type: "diamond",
      text: "Sind das echte Lösungen?",
      options: [
        {
          text: "Nö!",
          nextId: "253",
        },
        {
          text: "Jupp!",
          nextId: "256",
        },
      ],
    },
    {
      id: "254",
      type: "quote",
      text: "Es ist leichter sich das Ende der Welt als das Ende des Kapitalismus vorzustellen. — Slavoj Žižek",
      options: [],
    },
    {
      id: "256",
      type: "diamond",
      text: "Sind das gerechte und demokratische Lösungen?",
      options: [
        {
          text: "Nö!",
          nextId: "255",
        },
        {
          text: "Jupp!",
          nextId: "261",
        },
      ],
    },
    {
      id: "264",
      type: "definition",
      text: "Geo-Engineering – vorsätzliche Eingriffe in  die Ökosysteme der Erde, wie zum Beispiel Aerosol- Injektion in die Stratosphäre.",
      options: [
        {
          text: "»Eine schreckliche Idee, die wir vielleicht anwenden müssen«",
          nextId: "266",
        },
      ],
    },
    {
      id: "272",
      type: "quote",
      text: "Ja, wir scheitern, aber es bleibt noch Zeit, alles zu ändern. — Greta Thunberg",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "274",
      type: "quote",
      text: "…jetzt so zu leben, wie wir glauben, dass Menschen leben sollten, trotz all dem Übel um uns, ist für sich schon ein wunderbarer Sieg. — Howard Zinn",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "276",
      type: "quote",
      text: "Wenn wir die letzten unserer Art sind, warum dann nicht die besten unserer Art sein? — Guy McPherson",
      options: [
        {
          text: "Weiter",
          nextId: "277",
        },
      ],
    },
    {
      id: "277",
      type: "quote",
      text: "Bezeuge die ganze Geschichte der Menschheit mit tragischen Augen. — Jamey Hecht",
      options: [
        {
          text: "Weiter",
          nextId: "278",
        },
      ],
    },
    {
      id: "278",
      type: "cloud",
      text: "Errichtet unserem Scheitern als Gattung ein Denkmal.",
      options: [
        {
          text: "Weiter",
          nextId: "279",
        },
      ],
    },
    {
      id: "279",
      type: "cloud",
      text: "Die Erde als Sterbestation.",
      options: [],
    },
    {
      id: "280",
      type: "rectangle",
      text: "Endspiel",
      options: [
        {
          text: "Weiter",
          nextId: "279",
        },
      ],
    },
    {
      id: "281",
      type: "diamond",
      text: "Wie willst du untergehen?",
      options: [
        {
          text: "Mit Gewinn",
          nextId: "285",
        },
        {
          text: "Stoisch",
          nextId: "287",
        },
        {
          text: "Poetisch",
          nextId: "283",
        },
        {
          text: "Strategisch",
          nextId: "289",
        },
        {
          text: "Ehrenvoll",
          nextId: "293",
        },
        {
          text: "Unglücklich",
          nextId: "291",
        },
        {
          text: "Dankbar",
          nextId: "295",
        },
        {
          text: "Tragi-komisch",
          nextId: "297",
        },
        {
          text: "Gerecht",
          nextId: "299",
        },
        {
          text: "Kreativ",
          nextId: "329",
        },
        {
          text: "Resilient",
          nextId: "331",
        },
        {
          text: "Gemeinschaftlich",
          nextId: "301",
        },
        {
          text: "Allein",
          nextId: "320",
        },
        {
          text: "Mutig",
          nextId: "311",
        },
        {
          text: "Paradox",
          nextId: "315",
        },
      ],
    },
    {
      id: "283",
      type: "cloud",
      text: "Ich suche Schönheit und Bedeutung beim Scheitern, das Unvermeidliche aufzuhalten.",
      options: [],
    },
    {
      id: "285",
      type: "cloud",
      text: "Die Apokalypse ist mein Goldesel.",
      options: [
        {
          text: "Weiter",
          nextId: "280",
        },
      ],
    },
    {
      id: "287",
      type: "cloud",
      text: "Was würde Marc Aurel machen?",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "289",
      type: "cloud",
      text: "Planst du nicht für die Apokalypse, wirst du Teil des Apokalypse-Plans von jemand anderem.",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "291",
      type: "cloud",
      text: "Aber nicht so unglücklich, dass ich meinen Mitmenschen Schlimmes antue.",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "293",
      type: "cloud",
      text: "Ich werde mit erhobenem Haupt zugrunde gehen.",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "295",
      type: "cloud",
      text: "Selbst eine beschädigte Welt hält uns, schenkt uns Momente von Zauber und Freude. Ich ziehe Freude der Verzweiflung vor, denn die Erde gibt mir täglich Freude und ich sollte das Geschenk erwidern. — Robin Wall Kimmere",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "297",
      type: "cloud",
      text: "Ohne Galgenhumor bleiben uns nur die Galgen.",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "299",
      type: "quote",
      text: "Wir werden leiden, also lasst uns das Leiden gerecht verteilen. — Gopal Dayaneni",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "329",
      type: "quote",
      text: "Verwandelt die neue Normalität in neue Schönheit. — John Michael Greer",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
        {
          text: "Weiter",
          nextId: "304",
        },
      ],
    },
    {
      id: "331",
      type: "quote",
      text: "Die Welt fällt auseinander, aber wir nicht. — Alejandro Frid",
      options: [
        {
          text: "Weiter",
          nextId: "304",
        },
      ],
    },
    {
      id: "301",
      type: "cloud",
      text: "Gemeinsam können wir es überwinden.",
      options: [
        {
          text: "Weiter",
          nextId: "302",
        },
      ],
    },
    {
      id: "302",
      type: "quote",
      text: "Vielleicht weckt die schlimmste aller Zeiten das Beste in uns. — Rebecca Solnit",
      options: [
        {
          text: "Weiter",
          nextId: "303",
        },
      ],
    },
    {
      id: "303",
      type: "quote",
      text: "Fallen, als ob wir ein Kind an unserer Brust halten. — adrienne maree brown",
      options: [
        {
          text: "Weiter",
          nextId: "304",
        },
      ],
    },
    {
      id: "304",
      type: "cloud",
      text: "Eine andere Welt (oder deren Ende) ist möglich.",
      options: [
        {
          text: "Weiter",
          nextId: "326",
        },
      ],
    },
    {
      id: "306",
      type: "diamond",
      text: "Worauf konzentrieren? Klimaschutz, Anpassung oder Leiden?",
      options: [
        {
          text: "Alle Drei",
          nextId: "304",
        },
      ],
    },
    {
      id: "308",
      type: "quote",
      text: "Sei nützlich, auch wenn du nicht weißt, ob du Hebamme oder Sterbehelfer bist. — Joanna Macy",
      options: [
        {
          text: "Also...",
          nextId: "306",
        },
      ],
    },
    {
      id: "311",
      type: "quote",
      text: "Wenn es zu spät ist, gibt es umso mehr, wofür es sich lohnt zu kämpfen. — Tim DeChristopher",
      options: [
        {
          text: "Nein, es ist mehr oder weniger viel zu spät",
          nextId: "318",
        },
      ],
    },
    {
      id: "315",
      type: "quote",
      text: "Nachgeben ohne aufzugeben. — Meg Wheatley",
      options: [],
    },
    {
      id: "316",
      type: "cloud",
      text: "Hoffnungslosigkeit kann die Welt retten.",
      options: [
        {
          text: "Verzweiflung ist unsere einzige Hoffnung",
          nextId: "316",
        },
      ],
    },
    {
      id: "320",
      type: "cloud",
      text: "Ich habe vorgesorgt.",
      options: [
        {
          text: "Prepper, vereinigt euch?",
          nextId: "325",
        },
        {
          text: "Scheiß auf dich!",
          nextId: "null",
        },
        {
          text: "Und dich!",
          nextId: "",
        },
        {
          text: "Und dich!",
          nextId: "",
        },
      ],
    },
    {
      id: "326",
      type: "cloud",
      text: "Ich will eine bessere Katastrophe",
      options: [],
    },
    {
      id: "9",
      type: "rectangle",
      text: "Ich mag deine Lösungen nicht, also sind sie falsch",
      options: [
        {
          text: "Ändert sich das Klima nicht eh dauernd?",
          nextId: "11",
        },
      ],
    },
    {
      id: "38",
      type: "rectangle",
      text: "Was meinst du mit »noch«?",
      options: [
        {
          text: "Weiter",
          nextId: "39",
        },
      ],
    },
    {
      id: "18",
      type: "rectangle",
      text: "Die Apokalypse wird Anderen passieren",
      options: [
        {
          text: "Weiter",
          nextId: "19",
        },
        {
          text: "Wem?!",
          nextId: "28",
        },
      ],
    },
    {
      id: "21",
      type: "rectangle",
      text: "Es ist kompliziert…",
      options: [
        {
          text: "...oder ein wenig rassistisch bist?",
          nextId: "21",
        },
        {
          text: "Unfreiwillige Migration",
          nextId: "63",
        },
        {
          text: "Rassismus",
          nextId: "64",
        },
        {
          text: "Kapitalismus",
          nextId: "65",
        },
      ],
    },
    {
      id: "32",
      type: "rectangle",
      text: "Selber Sturm, unterschiedliche Boote",
      options: [
        {
          text: "Also…",
          nextId: "34",
        },
      ],
    },
    {
      id: "20",
      type: "rectangle",
      text: "...oder ein wenig rassistisch bist?",
      options: [
        {
          text: "Es ist kompliziert…",
          nextId: "20",
        },
        {
          text: "Mist!",
          nextId: "23",
        },
      ],
    },
    {
      id: "44",
      type: "rectangle",
      text: "Hä?",
      options: [
        {
          text: "Weiter",
          nextId: "45",
        },
      ],
    },
    {
      id: "47",
      type: "rectangle",
      text: "Weil…",
      options: [
        {
          text: "…diejenigen, die das Problem lösen wollen, zugleich die sind, die es verursachen!",
          nextId: "49",
        },
      ],
    },
    {
      id: "59",
      type: "rectangle",
      text: "Wasser",
      options: [
        {
          text: "Gesundheit",
          nextId: "61",
        },
      ],
    },
    {
      id: "75",
      type: "rectangle",
      text: "Kohlenstoff",
      options: [
        {
          text: "der Lebenssaft für",
          nextId: "67",
        },
      ],
    },
    {
      id: "148",
      type: "rectangle",
      text: "Wir stürzen nicht in einen Abgrund",
      options: [
        {
          text: "(Puh!)",
          nextId: "150",
        },
      ],
    },
    {
      id: "116",
      type: "rectangle",
      text: "Können wir den Kurs noch ändern?",
      options: [
        {
          text: "Ich habe 2 Kinder, 3 Jobs und einen Haufen unbezahlter Rechnungen. Kümmer DU dich!",
          nextId: "120",
        },
        {
          text: "Haben wir schon mal (oder so ähnlich), als wir die Ozonschicht repariert haben",
          nextId: "120",
        },
        {
          text: "Nö.",
          nextId: "182",
        },
      ],
    },
    {
      id: "109",
      type: "rectangle",
      text: "Können wir den nochmal gucken?",
      options: [
        {
          text: "Weiter",
          nextId: "110",
        },
      ],
    },
    {
      id: "123",
      type: "rectangle",
      text: "Wir haben nicht das Recht zu fragen, ob es uns gelingen wird oder nicht…",
      options: [
        {
          text: "Weiter",
          nextId: "124",
        },
        {
          text: "Trotzdem...",
          nextId: "127",
        },
      ],
    },
    {
      id: "198",
      type: "rectangle",
      text: "Echt, müssen wir?",
      options: [
        {
          text: "Wenn nicht du, wer dann?",
          nextId: "200",
        },
      ],
    },
    {
      id: "130",
      type: "rectangle",
      text: "Die Welt hat schon andere Pläne",
      options: [
        {
          text: "Also, was jetzt?",
          nextId: "188",
        },
      ],
    },
    {
      id: "143",
      type: "rectangle",
      text: "Flowchart im Buch",
      options: [
        {
          text: "»I Want a Better Catastrophe«",
          nextId: "141",
        },
      ],
    },
    {
      id: "146",
      type: "rectangle",
      text: "Verdammt!",
      options: [
        {
          text: "Weiter",
          nextId: "186",
        },
      ],
    },
    {
      id: "188",
      type: "rectangle",
      text: "Wir müssen uns unserer Verantwortung stellen.",
      options: [
        {
          text: "Echt, müssen wir?",
          nextId: "199",
        },
      ],
    },
    {
      id: "173",
      type: "rectangle",
      text: "Und sie sollen wissen, dass ich alles getan habe, was ich konnte",
      options: [
        {
          text: "Wir müssen uns unserer Verantwortung stellen.",
          nextId: "198",
        },
      ],
    },
    {
      id: "195",
      type: "rectangle",
      text: "Weil…",
      options: [
        {
          text: "Weiter",
          nextId: "193",
        },
      ],
    },
    {
      id: "240",
      type: "rectangle",
      text: "Wir sind ~Räuber~ Partner",
      options: [
        {
          text: "Menschheit = ~Parasiten~ Experiment",
          nextId: "242",
        },
      ],
    },
    {
      id: "211",
      type: "rectangle",
      text: "Intelligente Straßen",
      options: [
        {
          text: "Nullenergie-Architektur",
          nextId: "213",
        },
      ],
    },
    {
      id: "267",
      type: "rectangle",
      text: "Ich bin die Antenne der Menschheit",
      options: [
        {
          text: "...und das tut weh",
          nextId: "266",
        },
      ],
    },
    {
      id: "229",
      type: "rectangle",
      text: "Stimmt, aber...",
      options: [
        {
          text: "Haben wir noch genug Zeit?",
          nextId: "262",
        },
      ],
    },
    {
      id: "235",
      type: "rectangle",
      text: "Alles und Alle",
      options: [
        {
          text: "Künstler;Ingenieurin;Erzähler;Heilerin;Trickster;Philosophin;Kriegerin;Guter Nachbar",
          nextId: "267",
        },
        {
          text: "Eigentlich nur ein paar Sachen…",
          nextId: "251",
        },
      ],
    },
    {
      id: "246",
      type: "rectangle",
      text: "Green New Deal",
      options: [
        {
          text: "Ende aller neuen Projekte zur Förderung fossiler Rohstoffe",
          nextId: "248",
        },
      ],
    },
    {
      id: "231",
      type: "rectangle",
      text: "Schreib mir nicht vor wie ich leben soll!",
      options: [
        {
          text: "Nicht so oft duschen",
          nextId: "231",
        },
      ],
    },
    {
      id: "266",
      type: "rectangle",
      text: "Künstler;Ingenieurin;Erzähler;Heilerin;Trickster;Philosophin;Kriegerin;Guter Nachbar",
      options: [
        {
          text: "Ich bin die Antenne der Menschheit",
          nextId: "268",
        },
        {
          text: "Legen wir los!",
          nextId: "270",
        },
      ],
    },
    {
      id: "218",
      type: "rectangle",
      text: "Hä?",
      options: [
        {
          text: "Weiter",
          nextId: "219",
        },
      ],
    },
    {
      id: "253",
      type: "rectangle",
      text: "Nur noch mehr beschönigender Blödsinn",
      options: [
        {
          text: "Weiter",
          nextId: "251",
        },
      ],
    },
    {
      id: "255",
      type: "rectangle",
      text: "Nur die gleiche alte Ungleichheits- und Ausbeutungs-Leier angetrieben von erneuerbarer Energie",
      options: [
        {
          text: "Weiter",
          nextId: "254",
        },
        {
          text: "Weiter",
          nextId: "256",
        },
      ],
    },
    {
      id: "261",
      type: "rectangle",
      text: "Aber...",
      options: [
        {
          text: "Haben wir noch genug Zeit?",
          nextId: "262",
        },
      ],
    },
    {
      id: "318",
      type: "rectangle",
      text: "Alsoooo...",
      options: [
        {
          text: "Weiter",
          nextId: "281",
        },
      ],
    },
    {
      id: "325",
      type: "rectangle",
      text: "Du hast nichts zu verlieren, außer deines einsamen Bunkers",
      options: [
        {
          text: "Weiter",
          nextId: "301",
        },
      ],
    },
    {
      id: "11",
      type: "rectangle",
      text: "Gott wird eingreifen bevor es zu schlimm wird",
      options: [
        {
          text: "Weiter",
          nextId: "4",
        },
      ],
    },
    {
      id: "63",
      type: "rectangle",
      text: "Rassismus",
      options: [
        {
          text: "Kapitalismus",
          nextId: "65",
        },
      ],
    },
    {
      id: "64",
      type: "rectangle",
      text: "Kapitalismus",
      options: [
        {
          text: "Demokratie",
          nextId: "66",
        },
      ],
    },
    {
      id: "65",
      type: "rectangle",
      text: "Demokratie",
      options: [
        {
          text: "Männlichkeit",
          nextId: "67",
        },
      ],
    },
    {
      id: "23",
      type: "rectangle",
      text: "Was kann ich machen?",
      options: [
        {
          text: "Weiter",
          nextId: "24",
        },
      ],
    },
    {
      id: "49",
      type: "rectangle",
      text: "Und die Zeit wird knapp!",
      options: [
        {
          text: "Weshalb der Klimawandel ein »Superkomplexes Problem« ist",
          nextId: "44",
        },
      ],
    },
    {
      id: "61",
      type: "rectangle",
      text: "Artenvielfalt",
      options: [
        {
          text: "Unfreiwillige Migration",
          nextId: "63",
        },
      ],
    },
    {
      id: "67",
      type: "rectangle",
      text: "Industrielle Zivilisation",
      options: [
        {
          text: "Narrative",
          nextId: "69",
        },
        {
          text: "Also...",
          nextId: "54",
        },
      ],
    },
    {
      id: "150",
      type: "rectangle",
      text: "Sondern nur einen schartigen, rutschigen Steilhang runter",
      options: [
        {
          text: "(Oh)",
          nextId: "182",
        },
      ],
    },
    {
      id: "200",
      type: "rectangle",
      text: "Gott?",
      options: [
        {
          text: "Der Bund für Naturschutz?",
          nextId: "199",
        },
      ],
    },
    {
      id: "199",
      type: "rectangle",
      text: "Wenn nicht du, wer dann?",
      options: [
        {
          text: "Gott?",
          nextId: "201",
        },
        {
          text: "Wenn nicht jetzt, wann dann?",
          nextId: "203",
        },
      ],
    },
    {
      id: "242",
      type: "rectangle",
      text: "Das moralische Gegenstück zum Krieg?",
      options: [
        {
          text: "Weiter",
          nextId: "238",
        },
      ],
    },
    {
      id: "213",
      type: "rectangle",
      text: "Marine Permakultur",
      options: [
        {
          text: "Direct Air Capture",
          nextId: "211",
        },
      ],
    },
    {
      id: "262",
      type: "rectangle",
      text: "Vor 30 Jahren hatten wir die",
      options: [
        {
          text: "Haben wir noch genug Zeit?",
          nextId: "262",
        },
      ],
    },
    {
      id: "248",
      type: "rectangle",
      text: "Und so vieles mehr...",
      options: [
        {
          text: "Weiter",
          nextId: "244",
        },
        {
          text: "Aber...",
          nextId: "251",
        },
      ],
    },
    {
      id: "268",
      type: "rectangle",
      text: "...und das tut weh",
      options: [
        {
          text: "Künstler;Ingenieurin;Erzähler;Heilerin;Trickster;Philosophin;Kriegerin;Guter Nachbar",
          nextId: "267",
        },
      ],
    },
    {
      id: "270",
      type: "rectangle",
      text: "Aber...",
      options: [
        {
          text: "Haben wir noch genug Zeit?",
          nextId: "262",
        },
      ],
    },
    {
      id: "66",
      type: "rectangle",
      text: "Männlichkeit",
      options: [
        {
          text: "Industrielle Zivilisation",
          nextId: "68",
        },
      ],
    },
    {
      id: "69",
      type: "rectangle",
      text: "Charakter",
      options: [
        {
          text: "Fantasie",
          nextId: "71",
        },
      ],
    },
    {
      id: "201",
      type: "rectangle",
      text: "Der Bund für Naturschutz?",
      options: [
        {
          text: "Wenn nicht du, wer dann?",
          nextId: "200",
        },
      ],
    },
    {
      id: "203",
      type: "rectangle",
      text: "Wie wäre es mit nie?",
      options: [
        {
          text: "Wenn nicht jetzt, wann dann?",
          nextId: "203",
        },
      ],
    },
    {
      id: "68",
      type: "rectangle",
      text: "Narrative",
      options: [
        {
          text: "Charakter",
          nextId: "70",
        },
      ],
    },
    {
      id: "71",
      type: "rectangle",
      text: "»Wirklichkeit«",
      options: [
        {
          text: "Das Sein an sich",
          nextId: "73",
        },
      ],
    },
    {
      id: "70",
      type: "rectangle",
      text: "Fantasie",
      options: [
        {
          text: "»Wirklichkeit«",
          nextId: "72",
        },
      ],
    },
    {
      id: "72",
      type: "rectangle",
      text: "Das Sein an sich",
      options: [
        {
          text: "Weiter",
          nextId: "73",
        },
      ],
    },
  ],
};

// legacy
export const nodess: StaticNode[] = [
  { id: "1", type: "diamond", data: { label: "Ist der Klimawandel real?" } },
  { id: "2", type: "option", data: { label: "Nö!" } },
  {
    id: "3",
    type: "option",
    data: { label: "Ich versuche, nicht daran zu denken" },
  },
  {
    id: "4",
    type: "circle",
    data: { label: "Verdrängst du da vielleicht etwas?" },
  },
  { id: "5", type: "option", data: { label: "Hmmm..." } },
  { id: "6", type: "option", data: { label: "Klima was?" } },
  { id: "7", type: "cloud", data: { label: "Ich verdränge gar nix!" } },
  { id: "8", type: "option", data: { label: "Alles Lügen aus China" } },
  {
    id: "9",
    type: "option",
    data: { label: "Ich mag deine Lösungen nicht, also sind sie falsch" },
  },
  {
    id: "10",
    type: "option",
    data: { label: "Ändert sich das Klima nicht eh dauernd?" },
  },
  {
    id: "11",
    type: "option",
    data: { label: "Gott wird eingreifen bevor es zu schlimm wird" },
  },

  { id: "12", type: "option", data: { label: "Ja" } },
  { id: "13", type: "diamond", data: { label: "Sind wir am Arsch?" } },
  {
    id: "14",
    type: "option",
    data: { label: "Ich versuche, nicht daran zu denken" },
  },
  { id: "15", type: "option", data: { label: "Wen meinst du mit »wir«?" } },
  {
    id: "16",
    type: "curved",
    data: {
      label:
        "Meine Freund*innen und ich fliehen in ein skandinavisches Landhaus.",
    },
  },
  { id: "17", type: "option", data: { label: "Denn…" } },
  {
    id: "18",
    type: "option",
    data: { label: "Die Apokalypse wird Anderen passieren" },
  },
  {
    id: "19",
    type: "circle",
    data: { label: "Könnte es sein, dass du Gefühle verdrängst?" },
  },
  {
    id: "20",
    type: "option",
    data: { label: "...oder ein wenig rassistisch bist?" },
  },
  { id: "21", type: "option", data: { label: "Es ist kompliziert…" } },
  { id: "22", type: "option", data: { label: "Mist!" } },
  { id: "23", type: "option", data: { label: "Was kann ich machen?" } },
  { id: "24", type: "cloud", data: { label: "Nutze deine Privilegien." } },
  {
    id: "25",
    type: "option",
    data: { label: "…ohne dich zu sehr als Besserwisser zu inszenieren" },
  },
  {
    id: "26",
    type: "diamond",
    data: { label: "Es betrifft uns also alle gleichermaßen?" },
  },
  { id: "27", type: "option", data: { label: "NEIN!" } },
  {
    id: "28",
    type: "definition",
    data: {
      label:
        "Menschen, die die Auswirkungen des Klimawandels als erste und am schlimmsten erleben, werden auf Englisch »Frontline Communities« genannt. Sie sind überwiegend Niedrigverdienende, People of Color, Indigene, aus dem globalen Süden, oder sie arbeiten unter gesundheitsschädlichen Bedingungen.",
    },
  },
  { id: "29", type: "option", data: { label: "Wem?!" } },
  {
    id: "30",
    type: "option",
    data: { label: "Ohne uns keine Beschlüsse über uns" },
  },
  { id: "31", type: "option", data: { label: "Sozusagen…" } },
  {
    id: "32",
    type: "option",
    data: { label: "Selber Sturm, unterschiedliche Boote" },
  },
  { id: "33", type: "option", data: { label: "Also…" } },
  {
    id: "34",
    type: "diamond",
    data: { label: "Können wir das wieder reparieren?" },
  },
  {
    id: "35",
    type: "option",
    data: { label: "Ich versuche, nicht daran zu denken" },
  },
  {
    id: "36",
    type: "option",
    data: {
      label:
        "Wir befinden uns in einem Ausnahmezustand und sollten anfangen entsprechend zu handeln",
    },
  },
  { id: "37", type: "option", data: { label: "Noch nicht, aber…" } },
  { id: "38", type: "option", data: { label: "Was meinst du mit »noch«?" } },
  {
    id: "39",
    type: "curved",
    data: { label: "Die Apokalypse findet schon statt (für mich)!" },
  },
  {
    id: "40",
    type: "option",
    data: { label: "Ich muss dauernd daran denken" },
  },
  { id: "41", type: "option", data: { label: "Kommt darauf an…" } },
  {
    id: "42",
    type: "diamond",
    data: { label: "Was für eine Art Problem ist es?" },
  },
  { id: "43", type: "option", data: { label: "Ein »Komplexes Problem«" } },
  { id: "44", type: "option", data: { label: "Hä?" } },
  {
    id: "45",
    type: "definition",
    data: {
      label:
        "Ein Komplexes Problem (engl. »wicked problem«) kannst du nicht definieren, geht nie vorbei, hat keine korrekte Antwort (z.B. gibt es keine optimale Lösung, auf die man sich einigen kann), ist einzigartig (z.B. so besonders, dass kein früheres Problem als Modell dienen kann) und ist selbst das Symptom von anderen (komplexen) Problemen.",
    },
  },
  {
    id: "46",
    type: "option",
    data: { label: "Oh, aber der Klimawandel ist sogar noch schlimmer" },
  },
  { id: "47", type: "option", data: { label: "Weil…" } },
  {
    id: "48",
    type: "option",
    data: {
      label:
        "…diejenigen, die das Problem lösen wollen, zugleich die sind, die es verursachen!",
    },
  },
  { id: "49", type: "option", data: { label: "Und die Zeit wird knapp!" } },
  {
    id: "50",
    type: "option",
    data: { label: "Weshalb der Klimawandel ein »Superkomplexes Problem« ist" },
  },
  {
    id: "51",
    type: "option",
    data: { label: "Weshalb wir es zu tun haben mit einem…" },
  },
  { id: "52", type: "rectangle", data: { label: "Dilemma, nicht Problem" } },
  { id: "53", type: "option", data: { label: "Ein gewöhnliches Problem" } },
  {
    id: "54",
    type: "quote",
    data: {
      label:
        "Es ist ein technisches Problem, für das es technische Lösungen gibt. — Rex Tillerson",
    },
  },
  { id: "55", type: "option", data: { label: "Kommt darauf an…" } },

  {
    id: "56",
    type: "diamond",
    data: { label: "In welcher Art Krise stecken wir?" },
  },
  {
    id: "57",
    type: "option",
    data: { label: "Ich versuche, nicht daran zu denken" },
  },

  { id: "58", type: "option", data: { label: "Nahrung" } },
  { id: "59", type: "option", data: { label: "Wasser" } },
  { id: "60", type: "option", data: { label: "Gesundheit" } },
  { id: "61", type: "option", data: { label: "Artenvielfalt" } },
  { id: "62", type: "option", data: { label: "Unfreiwillige Migration" } },
  { id: "63", type: "option", data: { label: "Rassismus" } },
  { id: "64", type: "option", data: { label: "Kapitalismus" } },
  { id: "65", type: "option", data: { label: "Demokratie" } },
  { id: "66", type: "option", data: { label: "Männlichkeit" } },
  { id: "67", type: "option", data: { label: "Industrielle Zivilisation" } },
  { id: "68", type: "option", data: { label: "Narrative" } },
  { id: "69", type: "option", data: { label: "Charakter" } },
  { id: "70", type: "option", data: { label: "Fantasie" } },
  { id: "71", type: "option", data: { label: "»Wirklichkeit«" } },
  { id: "72", type: "option", data: { label: "Das Sein an sich" } },
  {
    id: "73",
    type: "cloud",
    data: { label: "Unsere ökologische Krise ist das Ergebnis vieler Krisen." },
  },

  { id: "74", type: "option", data: { label: "Nur eine Sache" } },
  { id: "75", type: "option", data: { label: "Kohlenstoff" } },
  { id: "76", type: "option", data: { label: "der Lebenssaft für" } },
  { id: "77", type: "option", data: { label: "Also..." } },

  { id: "78", type: "diamond", data: { label: "Wie schlimm ist es?" } },
  {
    id: "79",
    type: "option",
    data: { label: "Ich versuche, nicht daran zu denken" },
  },
  { id: "80", type: "option", data: { label: "Bisschen schlimm" } },
  { id: "81", type: "rectangle", data: { label: "Business as usual." } },
  { id: "82", type: "option", data: { label: "Ziemlich schlimm" } },
  { id: "83", type: "rectangle", data: { label: "Der Übergang wird schwer." } },
  { id: "84", type: "option", data: { label: "Richtig schlimm" } },
  {
    id: "85",
    type: "rectangle",
    data: { label: "Zusammenbruch der Zivilisation" },
  },
  { id: "86", type: "option", data: { label: "Richtig richtig schlimm" } },
  {
    id: "87",
    type: "diamond",
    data: { label: "Soll ich anderen sagen wie schlimm?" },
  },
  { id: "88", type: "option", data: { label: "Nein" } },
  { id: "89", type: "option", data: { label: "Ja" } },
  {
    id: "90",
    type: "rectangle",
    data: { label: "Das Aussterben der Menschheit" },
  },
  { id: "91", type: "option", data: { label: "Neeeiiinnn!" } },
  {
    id: "92",
    type: "diamond",
    data: { label: "Können wir gar nichts machen?" },
  },
  { id: "93", type: "option", data: { label: "Nein :-(" } },
  { id: "94", type: "rectangle", data: { label: "Endspiel" } },

  {
    id: "95",
    type: "cloud",
    data: {
      label: "Also… können wir es richten, ohne dass ICH mich ändern muss?",
    },
  },
  { id: "96", type: "option", data: { label: "Nö!" } },
  {
    id: "97",
    type: "quote",
    data: { label: "Das verändert alles. — Naomi Klein" },
  },
  { id: "98", type: "option", data: { label: "Alles?!" } },
  {
    id: "100",
    type: "quote",
    data: {
      label:
        "Während alles auseinanderfällt, kommt alles zusammen. — Jamie Henn",
    },
  },
  { id: "101", type: "option", data: { label: "Also..." } },
  {
    id: "102",
    type: "diamond",
    data: { label: "Steht uns Kollaps oder Transformation bevor?" },
  },
  { id: "103", type: "option", data: { label: "Wen juckt's?" } },
  {
    id: "104",
    type: "cloud",
    data: { label: "Party feiern als ob es 2099 wäre." },
  },

  { id: "105", type: "option", data: { label: "Moment!" } },
  { id: "106", type: "option", data: { label: "Ja, wirklich" } },
  { id: "107", type: "option", data: { label: "Moment!" } },
  {
    id: "108",
    type: "option",
    data: { label: "Nö, nur noch ein Hollywood-Blockbuster" },
  },
  {
    id: "109",
    type: "option",
    data: { label: "Können wir den nochmal gucken?" },
  },
  {
    id: "110",
    type: "diamond",
    data: { label: "Ist das wirklich das Ende der Welt?" },
  },
  {
    id: "111",
    type: "option",
    data: { label: "Nur der Welt wie wir sie kennen" },
  },
  {
    id: "112",
    type: "quote",
    data: {
      label: "Wir müssen lernen als Zivilisation zu sterben. — Roy Scranton",
    },
  },
  { id: "113", type: "option", data: { label: "Also, was nun?!" } },
  { id: "115", type: "option", data: { label: "Oh!" } },

  {
    id: "116",
    type: "option",
    data: { label: "Können wir den Kurs noch ändern?" },
  },
  { id: "117", type: "option", data: { label: "Beides nicht zu knapp" } },
  {
    id: "118",
    type: "option",
    data: {
      label:
        "Haben wir schon mal (oder so ähnlich), als wir die Ozonschicht repariert haben",
    },
  },
  {
    id: "119",
    type: "option",
    data: {
      label:
        "Ich habe 2 Kinder, 3 Jobs und einen Haufen unbezahlter Rechnungen. Kümmer DU dich!",
    },
  },

  { id: "120", type: "diamond", data: { label: "Müssen wir?" } },
  { id: "121", type: "option", data: { label: "Nö." } },
  { id: "122", type: "option", data: { label: "Ja!" } },
  {
    id: "123",
    type: "option",
    data: {
      label:
        "Wir haben nicht das Recht zu fragen, ob es uns gelingen wird oder nicht…",
    },
  },
  {
    id: "124",
    type: "quote",
    data: {
      label:
        "…die einzige Frage, die wir stellen dürfen: was braucht diese Erde von uns, wenn wir weiterhin auf ihr leben wollen? — Wendell Berry",
    },
  },

  { id: "125", type: "option", data: { label: "Trotzdem..." } },
  { id: "126", type: "option", data: { label: "Frag nicht!" } },
  { id: "127", type: "diamond", data: { label: "Schaffen wir es?" } },
  { id: "128", type: "option", data: { label: "Vielleicht" } },
  { id: "129", type: "option", data: { label: "Nein, leider…" } },
  {
    id: "130",
    type: "option",
    data: { label: "Die Welt hat schon andere Pläne" },
  },
  { id: "131", type: "option", data: { label: "Also, was jetzt?" } },
  {
    id: "132",
    type: "quote",
    data: {
      label:
        "Wenn es eine Bewegung gibt, haben wir eine Chance. Also lasst uns loslegen. — Bill McKibben",
    },
  },

  {
    id: "134",
    type: "option",
    data: { label: "Und ein Dilemma kann man nicht »reparieren«" },
  },
  {
    id: "135",
    type: "diamond",
    data: { label: "Gibt es Gründe optimistisch zu sein?" },
  },
  {
    id: "136",
    type: "option",
    data: { label: "Es könnte noch schlimmer sein" },
  },
  { id: "137", type: "option", data: { label: "Ja & Nein" } },
  {
    id: "138",
    type: "quote",
    data: {
      label:
        "Pessimismus des Verstandes, Optimismus des Willens. — Antonio Gramsc",
    },
  },
  { id: "139", type: "option", data: { label: "Okay, also..." } },
  { id: "327", type: "option", data: { label: "Nicht wirklich..." } },
  {
    id: "140",
    type: "quote",
    data: {
      label:
        "Ich kann kein Optimist sein, aber ich bin ein Gefangener der Hoffnung. — Desmond Tutu",
    },
  },
  { id: "141", type: "diamond", data: { label: "Besteht noch Hoffnung?" } },
  { id: "142", type: "option", data: { label: "Siehe anderes" } },
  { id: "143", type: "option", data: { label: "Flowchart im Buch" } },
  {
    id: "144",
    type: "option",
    data: { label: "»I Want a Better Catastrophe«" },
  },
  {
    id: "145",
    type: "option",
    data: { label: "Hoffnung, dein Ernst? Deine Bude brennt!" },
  },
  { id: "146", type: "option", data: { label: "Verdammt!" } },

  { id: "147", type: "option", data: { label: "Keine Angst…" } },
  {
    id: "148",
    type: "option",
    data: { label: "Wir stürzen nicht in einen Abgrund" },
  },
  { id: "149", type: "option", data: { label: "(Puh!)" } },
  {
    id: "150",
    type: "option",
    data: {
      label: "Sondern nur einen schartigen, rutschigen Steilhang runter",
    },
  },
  { id: "151", type: "option", data: { label: "(Oh)" } },
  { id: "152", type: "option", data: { label: "Fühlt sich ganz so an" } },
  { id: "153", type: "option", data: { label: "Nö." } },

  { id: "154", type: "option", data: { label: "Moralischer Anstand" } },
  {
    id: "155",
    type: "quote",
    data: {
      label:
        "Wir müssen das Richtige tun, weil es richtig ist. — Kathleen Dean Moore",
    },
  },

  { id: "156", type: "option", data: { label: "Vermächtnis" } },
  {
    id: "157",
    type: "diamond",
    data: { label: "Was für ein Vorfahre willst du sein?" },
  },
  { id: "158", type: "option", data: { label: "Ein Arschloch" } },
  {
    id: "159",
    type: "option",
    data: { label: "Mögen die Augen der Zukunft sich in dein Herz bohren" },
  },
  { id: "160", type: "option", data: { label: "Kommt darauf an" } },
  { id: "161", type: "option", data: { label: "Kein Arschloch" } },

  { id: "162", type: "option", data: { label: "Solidarität" } },
  {
    id: "163",
    type: "cloud",
    data: {
      label:
        "Ich darf die Hoffnung nicht aufgeben, wenn andere sich das gar nicht leisten können.",
    },
  },
  { id: "164", type: "option", data: { label: "Oder doch?" } },

  { id: "165", type: "option", data: { label: "Hoffnung?" } },
  { id: "166", type: "cloud", data: { label: "Ich wähle die Hoffnung." } },

  { id: "167", type: "option", data: { label: "Überleben" } },
  {
    id: "168",
    type: "cloud",
    data: { label: "Ich rebelliere gegen mein Aussterben!" },
  },

  { id: "169", type: "option", data: { label: "Ich habe Kinder!" } },
  {
    id: "170",
    type: "diamond",
    data: { label: "Sollen wir in dieser Weit überhaupt noch Kinder zeugen?" },
  },
  { id: "171", type: "option", data: { label: "Ja!" } },
  { id: "172", type: "option", data: { label: "Ups! Habe ich schon" } },
  {
    id: "173",
    type: "option",
    data: {
      label: "Und sie sollen wissen, dass ich alles getan habe, was ich konnte",
    },
  },
  { id: "174", type: "option", data: { label: "Nein" } },

  { id: "175", type: "option", data: { label: "Um Zeit zu gewinnen" } },
  {
    id: "176",
    type: "cloud",
    data: {
      label:
        "Du kannst noch helfen, dass es langsamer und weniger schlimmer wird.",
    },
  },
  {
    id: "178",
    type: "quote",
    data: {
      label:
        "Zu handeln ist meine Bewältigungs- und Hoffnungs-Strategie. — Chuck Collins",
    },
  },
  { id: "179", type: "option", data: { label: "Vielleicht" } },
  { id: "180", type: "option", data: { label: "Wahrscheinlich nicht, aber…" } },
  {
    id: "181",
    type: "cloud",
    data: {
      label:
        "Die Weltgeschichte steckt voller Überraschungen. Gewissheit gibt es nicht.",
    },
  },

  { id: "182", type: "diamond", data: { label: "Warum also was tun?" } },

  { id: "183", type: "option", data: { label: "Kommt darauf an" } },
  {
    id: "184",
    type: "diamond",
    data: { label: "Was liebst du zu innig, um es zu verlieren?" },
  },
  { id: "185", type: "option", data: { label: "Und..." } },
  { id: "186", type: "diamond", data: { label: "Was wirst du deswegen tun?" } },
  { id: "187", type: "option", data: { label: "Einen Scheiß werde ich tun" } },

  {
    id: "188",
    type: "option",
    data: { label: "Wir müssen uns unserer Verantwortung stellen." },
  },

  { id: "189", type: "option", data: { label: "Nun ja, okay, also…" } },
  {
    id: "190",
    type: "cloud",
    data: { label: "Der Erde geht es ohne uns besser." },
  },
  {
    id: "191",
    type: "option",
    data: { label: "Das lässt sich auch anders erzählen" },
  },
  { id: "192", type: "option", data: { label: "Tatsächlich..." } },
  {
    id: "193",
    type: "cloud",
    data: { label: "Der Erde wird es gut gehen, egal, was wir machen." },
  },
  {
    id: "194",
    type: "option",
    data: { label: "In zehn Millionen Jahren vielleicht" },
  },
  { id: "195", type: "option", data: { label: "Weil…" } },
  {
    id: "196",
    type: "option",
    data: { label: "Zur Hölle, nein, wird es ihr nicht!" },
  },
  {
    id: "197",
    type: "cloud",
    data: {
      label: "Wir haben ein Unheil angerichtet, das nur wir aufräumen können.",
    },
  },

  { id: "198", type: "option", data: { label: "Echt, müssen wir?" } },
  { id: "199", type: "option", data: { label: "Wenn nicht du, wer dann?" } },
  { id: "200", type: "option", data: { label: "Gott?" } },
  { id: "201", type: "option", data: { label: "Der Bund für Naturschutz?" } },
  {
    id: "202",
    type: "option",
    data: { label: "Wenn nicht jetzt, wann dann?" },
  },
  { id: "203", type: "option", data: { label: "Wie wäre es mit nie?" } },
  { id: "204", type: "option", data: { label: "Später?" } },
  { id: "205", type: "diamond", data: { label: "Ist es schon JETZT?" } },
  { id: "206", type: "option", data: { label: "Noch nicht!" } },
  { id: "207", type: "option", data: { label: "Jetzt!" } },

  { id: "208", type: "option", data: { label: "Durchdachte Technologie" } },
  {
    id: "209",
    type: "cloud",
    data: { label: "Die Wissenschaft findet eine Lösung." },
  },
  { id: "210", type: "option", data: { label: "Direct Air Capture" } },
  { id: "211", type: "option", data: { label: "Intelligente Straßen" } },
  { id: "212", type: "option", data: { label: "Nullenergie-Architektur" } },
  { id: "213", type: "option", data: { label: "Marine Permakultur" } },

  {
    id: "214",
    type: "quote",
    data: {
      label:
        "Wir gleichen Göttern, die noch enorm viel lernen müssen. — Stewart Brand",
    },
  },
  {
    id: "215",
    type: "option",
    data: { label: "Also wirklich noch sehr, sehr viel" },
  },
  {
    id: "216",
    type: "quote",
    data: {
      label:
        "Kolonisieren wir nicht andere Planeten, sind wir im Arsch. — Elon Musk (sinngemäß)",
    },
  },

  { id: "217", type: "option", data: { label: "Energie drosseln" } },
  { id: "218", type: "option", data: { label: "Hä?" } },
  {
    id: "219",
    type: "definition",
    data: {
      label:
        "Degrowth (Wachstumsumkehr) bezeichnet ein gerechtes Zurückfahren von Produktion und Konsum, welches das Wohl von Menschen fördert und ökologische Zustände verbessert.",
    },
  },
  { id: "220", type: "option", data: { label: "Oh, okay" } },

  { id: "221", type: "option", data: { label: "Resiliente Gemeinschaften" } },
  {
    id: "222",
    type: "quote",
    data: {
      label:
        "Wenn wir auf die Regierungen warten, wird es zu spät sein; handeln wir als Einzelne, ist das zu wenig; aber handeln wir als Gemeinschaften, könnte es vielleicht reichen. — Rob Hopkins",
    },
  },

  {
    id: "223",
    type: "option",
    data: { label: "Widerstand aus der Zivilgesellschaft" },
  },
  {
    id: "224",
    type: "quote",
    data: {
      label:
        "Beschützt die Heiligkeit von Mutter Erde. — Clayton Thomas Mueller",
    },
  },
  {
    id: "225",
    type: "cloud",
    data: { label: "Ich werde dieses Fleckchen Land verteidigen." },
  },

  { id: "226", type: "option", data: { label: "Soziale Revolution" } },
  {
    id: "227",
    type: "cloud",
    data: {
      label:
        "Mein öko-sozialistischer Futurismus macht deinen kapitalistischen Realismus platt!",
    },
  },
  { id: "228", type: "option", data: { label: "Das bedeutet Krieg" } },
  { id: "229", type: "option", data: { label: "Stimmt, aber..." } },

  { id: "230", type: "option", data: { label: "Nicht so oft duschen" } },
  {
    id: "231",
    type: "option",
    data: { label: "Schreib mir nicht vor wie ich leben soll!" },
  },
  {
    id: "232",
    type: "option",
    data: {
      label: "Du hast die Größe des Problems noch nicht ganz begriffen…",
    },
  },
  {
    id: "233",
    type: "cloud",
    data: { label: "Warum zum Teufel recycle ich denn dann?" },
  },
  {
    id: "234",
    type: "option",
    data: { label: "Wegen des Trostes der Gründlichkeit?" },
  },
  { id: "235", type: "option", data: { label: "Alles und Alle" } },
  {
    id: "236",
    type: "option",
    data: { label: "Eigentlich nur ein paar Sachen…" },
  },

  { id: "237", type: "option", data: { label: "Bessere Narrative" } },
  {
    id: "238",
    type: "cloud",
    data: { label: "Suche Dir eine Metapher aus, mit der Du leben kannst." },
  },
  {
    id: "239",
    type: "option",
    data: { label: "Klima- ~Wandel-Chaos-Apokalypse~ Notstand" },
  },
  { id: "240", type: "option", data: { label: "Wir sind ~Räuber~ Partner" } },
  {
    id: "241",
    type: "option",
    data: { label: "Menschheit = ~Parasiten~ Experiment" },
  },
  {
    id: "242",
    type: "option",
    data: { label: "Das moralische Gegenstück zum Krieg?" },
  },

  { id: "243", type: "option", data: { label: "Stärkere Gesetze" } },
  {
    id: "244",
    type: "quote",
    data: {
      label:
        "Wir haben alles Nötige, bis auf den politischen Willen. — Al Gore",
    },
  },
  { id: "245", type: "option", data: { label: "Emissionshandel" } },
  { id: "246", type: "option", data: { label: "Green New Deal" } },
  {
    id: "247",
    type: "option",
    data: {
      label: "Ende aller neuen Projekte zur Förderung fossiler Rohstoffe",
    },
  },
  { id: "248", type: "option", data: { label: "Und so vieles mehr..." } },
  { id: "249", type: "option", data: { label: "Aber..." } },
  { id: "250", type: "diamond", data: { label: "Was brauchen wir?" } },

  { id: "251", type: "diamond", data: { label: "Sind das echte Lösungen?" } },
  { id: "252", type: "option", data: { label: "Nö!" } },
  {
    id: "253",
    type: "option",
    data: { label: "Nur noch mehr beschönigender Blödsinn" },
  },
  {
    id: "254",
    type: "quote",
    data: {
      label:
        "Es ist leichter sich das Ende der Welt als das Ende des Kapitalismus vorzustellen. — Slavoj Žižek",
    },
  },
  {
    id: "255",
    type: "option",
    data: {
      label:
        "Nur die gleiche alte Ungleichheits- und Ausbeutungs-Leier angetrieben von erneuerbarer Energie",
    },
  },
  {
    id: "256",
    type: "diamond",
    data: { label: "Sind das gerechte und demokratische Lösungen?" },
  },
  { id: "257", type: "option", data: { label: "Nö!" } },
  { id: "258", type: "option", data: { label: "Jupp!" } },

  { id: "259", type: "option", data: { label: "Haben wir noch genug Zeit?" } },
  { id: "260", type: "option", data: { label: "Jupp!" } },
  { id: "261", type: "option", data: { label: "Aber..." } },
  {
    id: "262",
    type: "option",
    data: { label: "Vor 30 Jahren hatten wir die" },
  },

  { id: "263", type: "option", data: { label: "Nur noch für..." } },
  {
    id: "264",
    type: "definition",
    data: {
      label:
        "Geo-Engineering – vorsätzliche Eingriffe in  die Ökosysteme der Erde, wie zum Beispiel Aerosol- Injektion in die Stratosphäre.",
    },
  },
  {
    id: "265",
    type: "option",
    data: {
      label: "»Eine schreckliche Idee, die wir vielleicht anwenden müssen«",
    },
  },

  {
    id: "266",
    type: "options",
    data: {
      label:
        "Künstler;Ingenieurin;Erzähler;Heilerin;Trickster;Philosophin;Kriegerin;Guter Nachbar",
    },
  },
  {
    id: "267",
    type: "option",
    data: { label: "Ich bin die Antenne der Menschheit" },
  },
  { id: "268", type: "option", data: { label: "...und das tut weh" } },

  { id: "269", type: "option", data: { label: "Legen wir los!" } },
  { id: "270", type: "option", data: { label: "Aber..." } },

  { id: "271", type: "option", data: { label: "Ja...?" } },
  {
    id: "272",
    type: "quote",
    data: {
      label:
        "Ja, wir scheitern, aber es bleibt noch Zeit, alles zu ändern. — Greta Thunberg",
    },
  },

  { id: "273", type: "option", data: { label: "Blödsinn, Zeit" } },
  {
    id: "274",
    type: "quote",
    data: {
      label:
        "…jetzt so zu leben, wie wir glauben, dass Menschen leben sollten, trotz all dem Übel um uns, ist für sich schon ein wunderbarer Sieg. — Howard Zinn",
    },
  },

  {
    id: "275",
    type: "option",
    data: { label: "Nö, wir haben es komplett versaut" },
  },
  {
    id: "276",
    type: "quote",
    data: {
      label:
        "Wenn wir die letzten unserer Art sind, warum dann nicht die besten unserer Art sein? — Guy McPherson",
    },
  },
  {
    id: "277",
    type: "quote",
    data: {
      label:
        "Bezeuge die ganze Geschichte der Menschheit mit tragischen Augen. — Jamey Hecht",
    },
  },
  {
    id: "278",
    type: "cloud",
    data: { label: "Errichtet unserem Scheitern als Gattung ein Denkmal." },
  },
  { id: "279", type: "cloud", data: { label: "Die Erde als Sterbestation." } },
  { id: "280", type: "rectangle", data: { label: "Endspiel" } },

  { id: "281", type: "diamond", data: { label: "Wie willst du untergehen?" } },
  { id: "282", type: "option", data: { label: "Poetisch" } },
  {
    id: "283",
    type: "cloud",
    data: {
      label:
        "Ich suche Schönheit und Bedeutung beim Scheitern, das Unvermeidliche aufzuhalten.",
    },
  },

  { id: "284", type: "option", data: { label: "Mit Gewinn" } },
  {
    id: "285",
    type: "cloud",
    data: { label: "Die Apokalypse ist mein Goldesel." },
  },

  { id: "286", type: "option", data: { label: "Stoisch" } },
  { id: "287", type: "cloud", data: { label: "Was würde Marc Aurel machen?" } },

  { id: "288", type: "option", data: { label: "Strategisch" } },
  {
    id: "289",
    type: "cloud",
    data: {
      label:
        "Planst du nicht für die Apokalypse, wirst du Teil des Apokalypse-Plans von jemand anderem.",
    },
  },

  { id: "290", type: "option", data: { label: "Unglücklich" } },
  {
    id: "291",
    type: "cloud",
    data: {
      label:
        "Aber nicht so unglücklich, dass ich meinen Mitmenschen Schlimmes antue.",
    },
  },

  { id: "292", type: "option", data: { label: "Ehrenvoll" } },
  {
    id: "293",
    type: "cloud",
    data: { label: "Ich werde mit erhobenem Haupt zugrunde gehen." },
  },

  { id: "294", type: "option", data: { label: "Dankbar" } },
  {
    id: "295",
    type: "cloud",
    data: {
      label:
        "Selbst eine beschädigte Welt hält uns, schenkt uns Momente von Zauber und Freude. Ich ziehe Freude der Verzweiflung vor, denn die Erde gibt mir täglich Freude und ich sollte das Geschenk erwidern. — Robin Wall Kimmere",
    },
  },

  { id: "296", type: "option", data: { label: "Tragi-komisch" } },
  {
    id: "297",
    type: "cloud",
    data: { label: "Ohne Galgenhumor bleiben uns nur die Galgen." },
  },

  { id: "298", type: "option", data: { label: "Gerecht" } },
  {
    id: "299",
    type: "quote",
    data: {
      label:
        "Wir werden leiden, also lasst uns das Leiden gerecht verteilen. — Gopal Dayaneni",
    },
  },

  { id: "328", type: "option", data: { label: "Kreativ" } },
  {
    id: "329",
    type: "quote",
    data: {
      label:
        "Verwandelt die neue Normalität in neue Schönheit. — John Michael Greer",
    },
  },

  { id: "330", type: "option", data: { label: "Resilient" } },
  {
    id: "331",
    type: "quote",
    data: {
      label: "Die Welt fällt auseinander, aber wir nicht. — Alejandro Frid",
    },
  },

  { id: "300", type: "option", data: { label: "Gemeinschaftlich" } },
  {
    id: "301",
    type: "cloud",
    data: { label: "Gemeinsam können wir es überwinden." },
  },
  {
    id: "302",
    type: "quote",
    data: {
      label:
        "Vielleicht weckt die schlimmste aller Zeiten das Beste in uns. — Rebecca Solnit",
    },
  },
  {
    id: "303",
    type: "quote",
    data: {
      label:
        "Fallen, als ob wir ein Kind an unserer Brust halten. — adrienne maree brown",
    },
  },

  {
    id: "304",
    type: "cloud",
    data: { label: "Eine andere Welt (oder deren Ende) ist möglich." },
  },
  { id: "305", type: "option", data: { label: "Alle Drei" } },
  {
    id: "306",
    type: "diamond",
    data: {
      label: "Worauf konzentrieren? Klimaschutz, Anpassung oder Leiden?",
    },
  },
  { id: "307", type: "option", data: { label: "Also..." } },
  {
    id: "308",
    type: "quote",
    data: {
      label:
        "Sei nützlich, auch wenn du nicht weißt, ob du Hebamme oder Sterbehelfer bist. — Joanna Macy",
    },
  },
  { id: "309", type: "option", data: { label: "Vielleicht" } },

  { id: "310", type: "option", data: { label: "Mutig" } },
  {
    id: "311",
    type: "quote",
    data: {
      label:
        "Wenn es zu spät ist, gibt es umso mehr, wofür es sich lohnt zu kämpfen. — Tim DeChristopher",
    },
  },
  {
    id: "312",
    type: "option",
    data: { label: "Nein, es ist mehr oder weniger viel zu spät" },
  },
  { id: "313", type: "option", data: { label: "Es ist nie zu spät!" } },

  { id: "314", type: "option", data: { label: "Paradox" } },
  {
    id: "315",
    type: "quote",
    data: { label: "Nachgeben ohne aufzugeben. — Meg Wheatley" },
  },
  {
    id: "316",
    type: "cloud",
    data: { label: "Hoffnungslosigkeit kann die Welt retten." },
  },
  {
    id: "317",
    type: "option",
    data: { label: "Verzweiflung ist unsere einzige Hoffnung" },
  },

  { id: "318", type: "option", data: { label: "Alsoooo..." } },

  { id: "319", type: "option", data: { label: "Allein" } },
  { id: "320", type: "cloud", data: { label: "Ich habe vorgesorgt." } },
  { id: "321", type: "option", data: { label: "Scheiß auf dich!" } },
  { id: "322", type: "option", data: { label: "Und dich!" } },
  { id: "323", type: "option", data: { label: "Und dich!" } },
  { id: "324", type: "option", data: { label: "Prepper, vereinigt euch?" } },
  {
    id: "325",
    type: "option",
    data: {
      label: "Du hast nichts zu verlieren, außer deines einsamen Bunkers",
    },
  },

  {
    id: "326",
    type: "cloud",
    data: { label: "Ich will eine bessere Katastrophe" },
  },
];

// legacy
export const edgess: StaticEdge[] = [
  { source: "1", target: "6" },
  { source: "6", target: "1" },

  { source: "1", target: "3" },
  { source: "3", target: "1" },

  { source: "1", target: "2" },
  { source: "2", target: "4" },

  { source: "4", target: "5" },
  { source: "5", target: "1" },

  { source: "4", target: "7" },
  { source: "7", target: "8" },
  { source: "8", target: "9" },
  { source: "9", target: "10" },
  { source: "10", target: "11" },
  { source: "11", target: "4" },

  { source: "1", target: "12" },
  { source: "12", target: "13" },

  { source: "13", target: "14" },
  { source: "14", target: "13" },

  { source: "13", target: "15" },
  { source: "15", target: "16" },
  { source: "15", target: "39" },

  { source: "16", target: "17" },
  { source: "17", target: "18" },
  { source: "18", target: "19" },
  { source: "19", target: "20" },
  { source: "20", target: "21" },
  { source: "21", target: "20" },
  { source: "20", target: "22" },
  { source: "22", target: "23" },
  { source: "23", target: "24" },
  { source: "24", target: "25" },
  { source: "25", target: "24" },
  { source: "24", target: "26" },
  { source: "18", target: "29" },
  { source: "29", target: "28" },
  { source: "28", target: "30" },
  { source: "30", target: "26" },
  { source: "28", target: "27" },
  { source: "27", target: "26" },

  { source: "13", target: "37" },
  { source: "37", target: "38" },
  { source: "38", target: "39" },
  { source: "39", target: "40" },
  { source: "40", target: "39" },
  { source: "39", target: "28" },

  { source: "37", target: "36" },
  { source: "36", target: "24" },

  { source: "26", target: "31" },
  { source: "31", target: "32" },
  { source: "32", target: "33" },
  { source: "33", target: "34" },

  { source: "34", target: "35" },
  { source: "35", target: "34" },

  { source: "34", target: "55" },
  { source: "55", target: "56" },
  { source: "56", target: "57" },

  { source: "56", target: "58" },
  { source: "58", target: "59" },
  { source: "59", target: "60" },
  { source: "60", target: "61" },
  { source: "61", target: "62" },
  { source: "62", target: "63" },
  { source: "63", target: "64" },
  { source: "64", target: "65" },
  { source: "65", target: "66" },
  { source: "66", target: "67" },
  { source: "67", target: "68" },
  { source: "68", target: "69" },
  { source: "69", target: "70" },
  { source: "70", target: "71" },
  { source: "71", target: "72" },
  { source: "72", target: "73" },

  { source: "56", target: "73" },

  { source: "26", target: "21" },
  { source: "21", target: "62" },
  { source: "21", target: "63" },
  { source: "21", target: "64" },

  { source: "34", target: "41" },
  { source: "41", target: "42" },
  { source: "73", target: "78" },
  { source: "78", target: "79" },
  { source: "79", target: "78" },
  { source: "78", target: "80" },
  { source: "80", target: "81" },
  { source: "81", target: "54" },

  { source: "42", target: "53" },
  { source: "53", target: "54" },

  { source: "56", target: "74" },
  { source: "74", target: "75" },
  { source: "75", target: "76" },
  { source: "76", target: "67" },
  { source: "67", target: "77" },
  { source: "77", target: "54" },
  { source: "54", target: "52" },

  { source: "42", target: "43" },
  { source: "43", target: "44" },
  { source: "44", target: "45" },
  { source: "45", target: "46" },
  { source: "46", target: "47" },
  { source: "47", target: "48" },
  { source: "48", target: "49" },
  { source: "49", target: "50" },
  { source: "50", target: "44" },
  { source: "50", target: "51" },
  { source: "51", target: "52" },

  { source: "52", target: "134" },
  { source: "134", target: "135" },
  { source: "135", target: "136" },
  { source: "136", target: "135" },

  { source: "135", target: "327" },
  { source: "327", target: "140" },
  { source: "140", target: "141" },
  { source: "141", target: "142" },
  { source: "142", target: "143" },
  { source: "143", target: "144" },
  { source: "144", target: "141" },
  { source: "141", target: "145" },
  { source: "145", target: "146" },
  { source: "146", target: "186" },

  { source: "78", target: "86" },
  { source: "86", target: "87" },
  { source: "87", target: "88" },
  { source: "88", target: "78" },

  { source: "87", target: "89" },
  { source: "89", target: "90" },
  { source: "90", target: "91" },
  { source: "91", target: "92" },
  { source: "92", target: "93" },
  { source: "93", target: "94" },

  { source: "78", target: "84" },
  { source: "84", target: "87" },
  { source: "84", target: "85" },
  { source: "89", target: "85" },

  { source: "78", target: "82" },
  { source: "82", target: "83" },
  { source: "83", target: "100" },

  { source: "52", target: "95" },
  { source: "95", target: "96" },
  { source: "96", target: "97" },
  { source: "97", target: "98" },
  { source: "98", target: "100" },
  { source: "98", target: "78" },

  { source: "135", target: "137" },
  { source: "137", target: "138" },
  { source: "138", target: "139" },
  { source: "139", target: "102" },

  { source: "100", target: "101" },
  { source: "101", target: "102" },
  { source: "102", target: "103" },
  { source: "103", target: "104" },

  { source: "120", target: "121" },
  { source: "121", target: "104" },

  { source: "85", target: "113" },
  { source: "113", target: "112" },
  { source: "112", target: "100" },

  { source: "112", target: "115" },
  { source: "115", target: "102" },

  { source: "85", target: "105" },
  { source: "105", target: "110" },

  { source: "110", target: "108" },
  { source: "108", target: "109" },
  { source: "109", target: "110" },

  { source: "90", target: "107" },
  { source: "107", target: "110" },

  { source: "110", target: "106" },
  { source: "106", target: "90" },

  { source: "110", target: "111" },
  { source: "111", target: "112" },
  { source: "111", target: "116" },

  { source: "116", target: "119" },
  { source: "119", target: "120" },

  { source: "102", target: "117" },
  { source: "117", target: "116" },

  { source: "116", target: "118" },
  { source: "118", target: "120" },

  { source: "120", target: "122" },
  { source: "122", target: "123" },
  { source: "123", target: "124" },
  { source: "124", target: "188" },

  { source: "123", target: "125" },
  { source: "125", target: "127" },

  { source: "127", target: "126" },
  { source: "126", target: "124" },

  { source: "127", target: "128" },
  { source: "128", target: "132" },
  { source: "132", target: "188" },

  { source: "127", target: "129" },
  { source: "129", target: "130" },
  { source: "130", target: "131" },

  { source: "127", target: "183" },
  { source: "183", target: "184" },
  { source: "184", target: "185" },
  { source: "185", target: "186" },

  { source: "186", target: "188" },
  { source: "186", target: "187" },
  { source: "187", target: "195" },
  { source: "195", target: "193" },

  { source: "110", target: "152" },
  { source: "152", target: "182" },
  { source: "152", target: "92" },

  { source: "92", target: "147" },
  { source: "147", target: "148" },
  { source: "148", target: "149" },
  { source: "149", target: "150" },
  { source: "150", target: "151" },
  { source: "151", target: "182" },

  { source: "92", target: "180" },
  { source: "180", target: "181" },
  { source: "181", target: "188" },

  { source: "92", target: "179" },
  { source: "179", target: "178" },
  { source: "187", target: "188" },

  { source: "182", target: "175" },
  { source: "175", target: "176" },
  { source: "176", target: "188" },

  { source: "182", target: "169" },
  { source: "169", target: "170" },
  { source: "170", target: "171" },
  { source: "171", target: "173" },
  { source: "173", target: "188" },
  { source: "170", target: "172" },
  { source: "172", target: "173" },

  { source: "182", target: "154" },
  { source: "154", target: "155" },
  { source: "155", target: "120" },

  { source: "182", target: "156" },
  { source: "156", target: "157" },
  { source: "157", target: "158" },
  { source: "158", target: "157" },
  { source: "157", target: "159" },
  { source: "159", target: "157" },

  { source: "120", target: "160" },
  { source: "160", target: "157" },

  { source: "157", target: "161" },
  { source: "161", target: "188" },

  { source: "182", target: "162" },
  { source: "162", target: "163" },
  { source: "163", target: "164" },
  { source: "164", target: "163" },
  { source: "163", target: "188" },

  { source: "182", target: "165" },
  { source: "165", target: "166" },
  { source: "166", target: "188" },

  { source: "182", target: "167" },
  { source: "167", target: "168" },
  { source: "168", target: "188" },

  { source: "116", target: "153" },
  { source: "153", target: "182" },

  { source: "188", target: "198" },
  { source: "198", target: "199" },
  { source: "199", target: "200" },
  { source: "200", target: "201" },
  { source: "201", target: "199" },
  { source: "199", target: "202" },
  { source: "202", target: "203" },
  { source: "203", target: "202" },
  { source: "202", target: "204" },
  { source: "204", target: "205" },
  { source: "205", target: "206" },
  { source: "206", target: "205" },
  { source: "205", target: "207" },
  { source: "207", target: "250" },

  { source: "193", target: "194" },
  { source: "194", target: "193" },
  { source: "193", target: "196" },
  { source: "196", target: "197" },
  { source: "197", target: "188" },

  { source: "170", target: "174" },
  { source: "174", target: "190" },

  { source: "193", target: "192" },
  { source: "192", target: "190" },

  { source: "190", target: "189" },
  { source: "189", target: "94" },

  { source: "94", target: "276" },
  { source: "276", target: "277" },
  { source: "277", target: "278" },
  { source: "278", target: "279" },

  { source: "190", target: "191" },
  { source: "191", target: "240" },

  { source: "250", target: "230" },
  { source: "230", target: "231" },
  { source: "231", target: "230" },
  { source: "230", target: "232" },
  { source: "232", target: "233" },
  { source: "233", target: "234" },
  { source: "234", target: "235" },

  { source: "250", target: "237" },
  { source: "237", target: "238" },
  { source: "238", target: "239" },
  { source: "239", target: "240" },
  { source: "240", target: "241" },
  { source: "241", target: "242" },
  { source: "242", target: "238" },
  { source: "238", target: "266" },

  { source: "250", target: "235" },
  { source: "235", target: "266" },
  { source: "235", target: "236" },
  { source: "236", target: "251" },

  { source: "251", target: "252" },
  { source: "252", target: "253" },
  { source: "253", target: "251" },
  { source: "252", target: "254" },

  { source: "250", target: "243" },
  { source: "243", target: "244" },
  { source: "244", target: "245" },
  { source: "245", target: "246" },
  { source: "246", target: "247" },
  { source: "247", target: "248" },
  { source: "248", target: "244" },

  { source: "248", target: "249" },
  { source: "249", target: "251" },

  { source: "251", target: "258" },
  { source: "258", target: "256" },
  { source: "256", target: "257" },
  { source: "257", target: "255" },
  { source: "255", target: "254" },
  { source: "255", target: "256" },

  { source: "256", target: "260" },
  { source: "260", target: "261" },
  { source: "261", target: "259" },

  { source: "259", target: "262" },
  { source: "262", target: "259" },

  { source: "259", target: "263" },
  { source: "263", target: "264" },
  { source: "264", target: "265" },
  { source: "265", target: "266" },

  { source: "266", target: "267" },
  { source: "267", target: "268" },
  { source: "268", target: "266" },

  { source: "250", target: "208" },
  { source: "208", target: "209" },
  { source: "209", target: "214" },

  { source: "209", target: "210" },
  { source: "210", target: "211" },
  { source: "211", target: "212" },
  { source: "212", target: "213" },
  { source: "213", target: "210" },
  { source: "210", target: "326" },

  { source: "250", target: "226" },
  { source: "226", target: "227" },
  { source: "227", target: "228" },
  { source: "228", target: "229" },
  { source: "229", target: "259" },

  { source: "266", target: "269" },
  { source: "269", target: "270" },
  { source: "270", target: "259" },

  { source: "259", target: "273" },
  { source: "273", target: "274" },
  { source: "274", target: "326" },

  { source: "250", target: "223" },
  { source: "223", target: "224" },
  { source: "224", target: "225" },
  { source: "225", target: "228" },
  { source: "228", target: "266" },

  { source: "250", target: "217" },
  { source: "217", target: "218" },
  { source: "218", target: "219" },
  { source: "219", target: "220" },
  { source: "220", target: "326" },

  { source: "250", target: "221" },
  { source: "221", target: "222" },

  { source: "222", target: "266" },
  { source: "222", target: "326" },

  { source: "259", target: "275" },
  { source: "275", target: "279" },

  { source: "281", target: "284" },
  { source: "284", target: "285" },
  { source: "285", target: "280" },
  { source: "280", target: "279" },

  { source: "281", target: "286" },
  { source: "286", target: "287" },
  { source: "287", target: "326" },

  { source: "281", target: "282" },
  { source: "282", target: "283" },

  { source: "281", target: "288" },
  { source: "288", target: "289" },
  { source: "289", target: "326" },

  { source: "281", target: "292" },
  { source: "292", target: "293" },
  { source: "293", target: "326" },

  { source: "281", target: "290" },
  { source: "290", target: "291" },
  { source: "291", target: "326" },

  { source: "281", target: "294" },
  { source: "294", target: "295" },
  { source: "295", target: "326" },

  { source: "281", target: "296" },
  { source: "296", target: "297" },
  { source: "297", target: "326" },

  { source: "281", target: "298" },
  { source: "298", target: "299" },
  { source: "299", target: "326" },

  { source: "281", target: "328" },
  { source: "328", target: "329" },
  { source: "329", target: "326" },
  { source: "329", target: "304" },

  { source: "281", target: "330" },
  { source: "330", target: "331" },
  { source: "331", target: "304" },

  { source: "281", target: "300" },
  { source: "300", target: "301" },
  { source: "301", target: "302" },
  { source: "302", target: "303" },
  { source: "303", target: "304" },

  { source: "281", target: "319" },
  { source: "319", target: "320" },
  { source: "320", target: "324" },
  { source: "324", target: "325" },
  { source: "325", target: "301" },

  { source: "320", target: "321" },
  { source: "320", target: "322" },
  { source: "322", target: undefined },
  { source: "320", target: "323" },
  { source: "323", target: undefined },
  { source: "323", target: "320" },

  { source: "281", target: "310" },
  { source: "310", target: "311" },
  { source: "311", target: "312" },

  { source: "281", target: "314" },
  { source: "314", target: "315" },
  { source: "314", target: "316" },
  { source: "316", target: "317" },
  { source: "317", target: "316" },

  { source: "259", target: "271" },
  { source: "271", target: "272" },
  { source: "272", target: "326" },

  { source: "259", target: "309" },
  { source: "309", target: "308" },
  { source: "308", target: "307" },
  { source: "307", target: "306" },
  { source: "306", target: "305" },
  { source: "305", target: "304" },
  { source: "304", target: "326" },

  { source: "259", target: "312" },
  { source: "312", target: "318" },
  { source: "318", target: "281" },

  { source: "312", target: "313" },
  { source: "313", target: "312" },

  { source: "313", target: "309" },
  { source: "309", target: "271" },
  { source: "271", target: "273" },

  { source: "313", target: "304" },

  { source: "214", target: "215" },
  { source: "215", target: "216" },
];
