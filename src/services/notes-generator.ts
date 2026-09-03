export async function generateNotes({
  topic,
  difficulty,
}: {
  topic: string;
  difficulty?: string | null;
}) {
  return {
    title: topic,
    summary: `Here are easy-to-understand notes on ${topic}.`,
    keyPoints: [
      `${topic} is an important concept in computer science.`,
      `It helps in understanding system behavior.`,
      `Frequently asked in exams and interviews.`,
    ],
  };
}
