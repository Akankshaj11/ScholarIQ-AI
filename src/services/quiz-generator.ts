export async function generateQuiz({
  topic,
  numberOfQuestions,
}: {
  topic: string;
  numberOfQuestions: number;
}) {

  const questions = [];

  for (let i = 1; i <= numberOfQuestions; i++) {
    questions.push({
      question: `Sample question ${i} about ${topic}?`,
      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D",
      ],
      correctAnswer: "Option A",
    });
  }

  return questions;
}
