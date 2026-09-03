export async function generateStudyPlan({
  subjects,
  days,
  hoursPerDay,
}: {
  subjects: string[];
  days: number;
  hoursPerDay: number;
}) {
  const plan = [];

  for (let day = 1; day <= days; day++) {
    const sessions = [];
    let remainingHours = hoursPerDay;

    let subjectIndex = (day - 1) % subjects.length;

    while (remainingHours > 0) {
      const studyHours = Math.min(2, remainingHours);

      sessions.push({
        subject: subjects[subjectIndex],
        duration: `${studyHours} hours`,
        task: "Study concepts + practice questions",
      });

      remainingHours -= studyHours;
      subjectIndex = (subjectIndex + 1) % subjects.length;
    }

    plan.push({
      day: `Day ${day}`,
      sessions,
    });
  }

  return plan;
}
