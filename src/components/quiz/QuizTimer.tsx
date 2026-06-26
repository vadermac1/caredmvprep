"use client";

import { useEffect } from "react";
import { useQuizStore } from "@/store/quiz";

export default function QuizTimer() {
  const timeRemaining = useQuizStore((s) => s.timeRemaining);
  const tickTimer = useQuizStore((s) => s.tickTimer);
  const phase = useQuizStore((s) => s.phase);

  useEffect(() => {
    if (phase !== 'active' || timeRemaining === null) return;
    const interval = setInterval(tickTimer, 1000);
    return () => clearInterval(interval);
  }, [phase, timeRemaining, tickTimer]);

  if (timeRemaining === null) return null;

  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  const isUrgent = timeRemaining <= 60;

  return (
    <div
      className="flex items-center gap-1.5 text-sm font-bold tabular-nums px-3 py-1.5 rounded-lg"
      style={{
        backgroundColor: isUrgent ? '#fef2f2' : '#f0f4f8',
        color: isUrgent ? '#b91c1c' : '#0f1e3c',
      }}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  );
}
