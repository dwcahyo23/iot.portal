export const roles = ["ADMIN", "MANAGER", "USER"] as const;
export type Roles = (typeof roles)[number];

export const status = ["Y", "N", "P", "C"] as const;
export type Status = (typeof status)[number];

export const liveLimit = [
  "NEW_CONDITION",
  "LONG_TERM",
  "SHORT_TERM",
  "DAMAGE",
] as const;
export type LiveLimit = (typeof liveLimit)[number];

export const operatePosition = ["FULL", "ASSIST", "SUPPORT"] as const;
export type OperatePosition = (typeof operatePosition)[number];
