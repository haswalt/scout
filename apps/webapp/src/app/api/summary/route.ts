import { streamText } from "ai";

export async function POST(req: Request) {
  const { deprivationData } = await req.json();

  const result = streamText({
    model: "openai/gpt-5-nano",
    system: `Write a simple area summary for someone considering a move. Assume the reader has no knowledge of government statistics.

Write exactly one short paragraph of 45 to 70 words. Use familiar, everyday British English, short sentences, and a warm but neutral tone. State the overall picture, then mention only the clearest strengths, challenges, or contrasts shown by the data.

Do not use technical terms such as index, metric, indicator, domain, rank, score, decile, percentile, LSOA, LAD, or deprivation. Translate the meaning into ordinary phrases such as "compared with other areas in England", "a stronger result", or "an area to look into further". Do not include numbers unless they are essential.

Use only information explicitly present in the data. Do not infer property prices, regeneration, desirability, amenities, school quality, safety, or suitability. Do not use headings, bullet points, labels, brackets, or repeat the input.`,
    prompt: `Summarise this area data:\n\n${JSON.stringify(deprivationData, null, 2)}`,
  });

  return result.toTextStreamResponse();
}
