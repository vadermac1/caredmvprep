import { notFound } from "next/navigation";
import { getQuizConfig } from "@/data/questions/index";
import QuizEngine from "@/components/quiz/QuizEngine";

interface Props {
  params: Promise<{ testId: string }>;
}

export default async function QuizPage({ params }: Props) {
  const { testId } = await params;
  const config = getQuizConfig(testId);

  if (!config) notFound();

  return (
    <div className="max-w-2xl mx-auto">
      <QuizEngine config={config} />
    </div>
  );
}

export async function generateStaticParams() {
  const { getAllTestIds } = await import("@/data/questions/index");
  return getAllTestIds().map((testId) => ({ testId }));
}
