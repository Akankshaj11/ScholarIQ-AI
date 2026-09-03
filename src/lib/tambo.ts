/**
 * @file tambo.ts
 * @description Central configuration file for Tambo components and tools
 *
 * This file serves as the central place to register your Tambo components and tools.
 * It exports arrays that will be used by the TamboProvider.
 *
 * Read more about Tambo at https://tambo.co/docs
 */

import { Graph, graphSchema } from "@/components/tambo/graph";
import { DataCard, dataCardSchema } from "@/components/ui/card-data";
import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";
import { z } from "zod";
import { generateQuiz } from "@/services/quiz-generator";
import { generateNotes } from "@/services/notes-generator";
import { generateStudyPlan } from "@/services/study-planner";

/**
 * tools
 *
 * This array contains all the Tambo tools that are registered for use within the application.
 * Each tool is defined with its name, description, and expected props. The tools
 * can be controlled by AI to dynamically fetch data based on user interactions.
 */

export const tools: TamboTool[] = [
{
    name: "quizGenerator",
    description:
      "Generate a multiple choice quiz for students based on a study topic.",
    tool: generateQuiz,
    inputSchema: z.object({
      topic: z.string(),
      numberOfQuestions: z.number(),
    }),
    outputSchema: z.array(
      z.object({
        question: z.string(),
        options: z.array(z.string()),
        correctAnswer: z.string(),
      })
    ),
  },
  {
    name: "notesGenerator",
    description:
      "Create study notes and summaries for students in simple language.",
    tool: generateNotes,
    inputSchema: z.object({
      topic: z.string(),
      difficulty: z.string().nullable().optional(),
    }),
    outputSchema: z.object({
      title: z.string(),
      summary: z.string(),
      keyPoints: z.array(z.string()),
    }),
  },
  {
  name: "studyPlanner",
  description:
    "Creates a personalized study timetable for students based on subjects and available days.",
  tool: generateStudyPlan,
  inputSchema: z.object({
    subjects: z.array(z.string()),
    days: z.number(),
    hoursPerDay: z.number(),
  }),
  outputSchema: z.array(
    z.object({
      day: z.string(),
      sessions: z.array(
        z.object({
          subject: z.string(),
          duration: z.string(),
          task: z.string(),
        })
      ),
    })
  ),
},
];

/**
 * components
 *
 * This array contains all the Tambo components that are registered for use within the application.
 * Each component is defined with its name, description, and expected props. The components
 * can be controlled by AI to dynamically render UI elements based on user interactions.
 */
export const components: TamboComponent[] = [
  {
    name: "Graph",
    description:
      "A component that renders various types of charts (bar, line, pie) using Recharts. Supports customizable data visualization with labels, datasets, and styling options.",
    component: Graph,
    propsSchema: graphSchema,
  },
  {
    name: "DataCard",
    description:
      "A component that displays options as clickable cards with links and summaries with the ability to select multiple items.",
    component: DataCard,
    propsSchema: dataCardSchema,
  },
  // Add more components here
];
