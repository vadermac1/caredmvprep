"use client";

import { useState } from "react";
import type { SampleQuestion } from "./PracticeTestPage";

interface Props {
  questions: SampleQuestion[];
  state: string;
  testLabel: string;
}

export default function SampleQuestions({ questions }: Props) {
  const [selected, setSelected] = useState<Record<number, number>>({});

  const answeredCount = Object.keys(selected).length;
  const correctCount = Object.entries(selected).filter(
    ([qi, choice]) => questions[Number(qi)].correctIndex === Number(choice)
  ).length;

  function handleSelect(qi: number, oi: number) {
    if (selected[qi] !== undefined) return;
    setSelected((prev) => ({ ...prev, [qi]: oi }));
  }

  return (
    <div>
      {/* Score tracker — appears once any question is answered */}
      <div
        className="mb-6 flex items-center gap-6 px-5 py-3 bg-white rounded-xl border border-gray-200 text-sm"
        aria-live="polite"
      >
        <span className="text-gray-500">
          Answered:{" "}
          <span className="font-bold text-gray-900">
            {answeredCount}/{questions.length}
          </span>
        </span>
        <span className="text-gray-500">
          Score:{" "}
          <span
            className="font-bold"
            style={{ color: answeredCount === 0 ? "#9ca3af" : correctCount === answeredCount ? "#1a7f3c" : "#b91c1c" }}
          >
            {correctCount}/{answeredCount > 0 ? answeredCount : questions.length}
          </span>{" "}
          correct
        </span>
        {answeredCount === questions.length && (
          <span
            className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: correctCount === questions.length ? "#f0fdf4" : "#fef2f2",
              color: correctCount === questions.length ? "#1a7f3c" : "#b91c1c",
            }}
          >
            {correctCount === questions.length
              ? "Perfect score!"
              : `${Math.round((correctCount / questions.length) * 100)}% — keep studying`}
          </span>
        )}
      </div>

      <div className="space-y-3">
        {questions.map((q, qi) => {
          const userChoice = selected[qi];
          const isAnswered = userChoice !== undefined;

          return (
            <div
              key={qi}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Question */}
              <div className="flex items-start gap-3 px-5 py-4">
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ backgroundColor: "#0f1e3c" }}
                >
                  {qi + 1}
                </span>
                <p className="font-semibold text-gray-900 text-sm leading-snug pt-0.5">
                  {q.question}
                </p>
              </div>

              {/* Answer options */}
              <div className="px-5 pb-4 space-y-2 pl-[3.25rem]">
                {q.options.map((opt, oi) => {
                  const isCorrect = oi === q.correctIndex;
                  const isSelected = oi === userChoice;

                  // Determine visual state
                  let borderStyle = "border-gray-200";
                  let bgStyle = "bg-white";
                  let textStyle = "text-gray-700";
                  let badgeBg = "#e5e7eb";
                  let badgeText = "#6b7280";
                  let icon: React.ReactNode = null;

                  if (isAnswered) {
                    if (isCorrect) {
                      borderStyle = "border-green-500";
                      bgStyle = "bg-green-50";
                      textStyle = "text-green-900 font-medium";
                      badgeBg = "#16a34a";
                      badgeText = "#fff";
                      icon = (
                        <svg
                          className="shrink-0 w-4 h-4 ml-auto text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      );
                    } else if (isSelected) {
                      borderStyle = "border-red-400";
                      bgStyle = "bg-red-50";
                      textStyle = "text-red-900 font-medium";
                      badgeBg = "#ef4444";
                      badgeText = "#fff";
                      icon = (
                        <svg
                          className="shrink-0 w-4 h-4 ml-auto text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      );
                    } else {
                      // Not selected, not correct — dim it
                      textStyle = "text-gray-400";
                      badgeText = "#d1d5db";
                    }
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(qi, oi)}
                      disabled={isAnswered}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all duration-150 ${borderStyle} ${bgStyle} ${
                        !isAnswered
                          ? "hover:border-blue-400 hover:bg-blue-50 cursor-pointer active:scale-[0.99]"
                          : "cursor-default"
                      }`}
                    >
                      <span
                        className="shrink-0 w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-colors"
                        style={{ backgroundColor: badgeBg, color: badgeText }}
                      >
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span className={`text-sm ${textStyle}`}>{opt}</span>
                      {icon}
                    </button>
                  );
                })}
              </div>

              {/* Explanation — revealed after answering */}
              {isAnswered && (
                <div className="px-5 py-4 border-t border-gray-200 bg-gray-50 pl-[3.25rem]">
                  <p className="text-sm font-semibold text-gray-800 mb-1.5">
                    Correct Answer: {String.fromCharCode(65 + q.correctIndex)} —{" "}
                    {q.options[q.correctIndex]}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
