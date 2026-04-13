export const ROLES = ["PATIENT", "ENDOCRINOLOGIST", "PSYCHIATRIST"] as const;
export type Role = typeof ROLES[number];