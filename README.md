# 🧠 ScholarIQ AI — Academic Copilot & Exam Preparation Engine

**ScholarIQ AI** is an intelligent AI-powered academic assistant designed to help computer science and engineering students:
* 💡 **Understand complex concepts** step-by-step
* 📝 **Generate exam revision notes** instantly
* ❓ **Practice interactive quizzes** with multiple-choice questions
* 📅 **Build personalized study timetables** based on subjects & deadlines

All powered by natural conversation and AI agent tool calling!

---

## 🌟 Key Features

* **📚 Doubt Solver:** Ask questions on OS, DBMS, Networks, Data Structures, etc., and receive clear, step-by-step explanations.
* **📝 Revision Notes Generator:** Automatically summarize course chapters into key bullet points and high-yield exam notes.
* **❓ Practice Quiz Generator:** Generate multiple-choice quizzes with answers to test your knowledge before exams.
* **📅 Adaptive Study Planner:** Create customized daily and weekly timetables tailored to your specific subjects and available study hours.
* **📊 Interactive Dynamic UI:** Render interactive charts and data cards directly inside chat streams.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Framer Motion, Recharts, Radix UI
* **AI & Validation:** Tambo AI SDK, Tool Calling Architecture, Zod Schema Validation
* **Deployment:** Vercel

---

## 🚀 Quick Start Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/ScholarIQ-AI.git
cd ScholarIQ-AI
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root folder:
```env
NEXT_PUBLIC_TAMBO_API_KEY=your_tambo_api_key_here
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to launch **ScholarIQ AI**.

---

## 🗂️ Project Structure

```bash
ScholarIQ-AI/
├── src/
│   ├── app/               # Next.js App Router (Landing page & /chat interface)
│   ├── components/        # UI components & Tambo chat providers
│   ├── lib/               # Tambo AI tool registrations & Zod schemas
│   └── services/          # Quiz, Notes, and Study Planner generator logic
├── public/                # Static assets and icons
├── package.json           # Dependencies and project metadata
└── README.md              # Project documentation
```

---

## 📜 License
This project is licensed under the **MIT License**.
