import type { LicenseType } from "./database";

export type { LicenseType };

export type QuestionCategory =
  | 'traffic_signs'
  | 'right_of_way'
  | 'speed_limits'
  | 'alcohol_and_drugs'
  | 'parking'
  | 'sharing_the_road'
  | 'safe_driving'
  | 'cdl_pre_trip'
  | 'cdl_cargo'
  | 'cdl_braking'
  | 'cdl_hours_of_service'
  | 'cdl_hazmat_classes'
  | 'motorcycle_technique'
  | 'motorcycle_gear';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;                   // e.g. "ca-permit-001"
  state: string | 'ALL';        // 'ALL' = federal/universal (CDL HOS rules, etc.)
  licenseType: LicenseType;
  category: QuestionCategory;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceRef?: string;           // e.g. "CA Driver Handbook p.45"
}

export interface QuizConfig {
  testId: string;
  label: string;
  state: string;
  licenseType: LicenseType;
  questions: Question[];
  passingScore: number;         // 0–1, e.g. 0.80
  timeLimitSecs?: number;       // undefined = no timer
}
