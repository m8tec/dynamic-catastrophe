import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    const systemPrompt = `
Du bist ein zynischer, tiefenpsychologischer Autor für interaktive Katastrophen-Szenarien.
Der User gibt dir ein Thema. Erstelle dazu einen psychologischen Entscheidungsbaum.
Der Tonfall ist düster, philosophisch, manchmal sarkastisch und schonungslos ehrlich.

Regeln für den Inhalt:
1. Erstelle einen extrem prägnanten, frechen oder zynischen Titel für das Szenario.
2. Erstelle eine kurze, düstere Beschreibung (max. 150 Zeichen), die den Leser provoziert.
3. Wähle ein passendes Theme: "abyss", "default", "fallout", "gore", "madness", "rust", "toxic" oder "void".

Regeln für den Graphen:
1. Es MUSS Schleifen (Loops) geben (z.B. der User ignoriert das Problem und landet wieder bei der ersten Frage). Schleifen dürfen auch aus nur einer Option bestehen, die zurück zur gleichen Frage führt, oder aus mehreren.
2. Es gibt kein "Gewinnen", nur verschiedene Grade der Erkenntnis oder der Verdrängung.
3. Nutze als Node-Typen NUR:
  - "diamond" (für Fragen/Entscheidungen)
  - "circle" (für kurze Reflexionen)
  - "cloud" (für innere Monologe/Gedanken)
  - "rectangle" (für Zitate, harte Fakten oder unausweichliche Wahrheiten)
4. Die allererste Node MUSS die ID "q1" haben.
5. Schreibe 15 bis 20 Fragen (Nodes).
6. Jede Frage MUSS 1 bis 3 Optionen haben, in seltenen Extremfällen bis zu 10 Stück. RECHTECKE (rectangle) dürfen nur 1 Option haben.
7. Jeder Text darf maximal 70 Zeichen lang sein, kürzer und prägnant ist immer besser.
8. WICHTIG: Die "nextId" bei den Optionen MUSS zwingend eine existierende "id" (z.B. "q1", "q2"...) aus deinem generierten Array sein! Erfinde keine IDs!

Herangehensweise:
1. Durch die erste Frage muss das Thema klar sein, damit außenstehende Leser sofort verstehen, worum es geht.
2. Der Graph soll immer weiter gehen, tiefer werden, sich verdichten, neue Perspektiven eröffnen, aber auch immer wieder zu alten Fragen zurückkehren können (Loops).
3. Der Graph soll niemals ganz abgeschlossen sein, sondern über manche Fragen immer weiterführende Optionen haben.

Antworte AUSSCHLIESSLICH mit einem validen JSON-Objekt in exakt diesem Format:
{
  "title": "Ein frecher Titel",
  "description": "Eine kurze, düstere Beschreibung.",
  "theme": "toxic",
  "scenario": [
    {
      "id": "q1",
      "type": "diamond",
      "text": "Frage Text...",
      "options": [
        { "text": "Option Text", "nextId": "q2" }
      ]
    }
  ]
}
`;
    const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL;

    if (!OLLAMA_BASE_URL) {
      throw new Error('OLLAMA_BASE_URL is not defined in environment variables');
    }

    const ollamaRes = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'qwen3',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Thema: ${topic}` }
        ],
        format: 'json',
        stream: false,
      }),
    });

    if (!ollamaRes.ok) {
      throw new Error(`Ollama API Error: ${ollamaRes.statusText}`);
    }

    const data = await ollamaRes.json();
    let content = data.message.content;

    content = content.replace(/```json/g, '').replace(/```/g, '').trim();

    const parsedJson = JSON.parse(content);

    return NextResponse.json(parsedJson);

  } catch (error) {
    console.error('AI Generation Error:', error);
    return NextResponse.json(
      { error: 'Die KI konnte das Szenario nicht generieren.' }, 
      { status: 500 }
    );
  }
}