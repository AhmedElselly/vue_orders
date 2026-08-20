export type Role = "ADMIN" | "MANAGER" | "CUSTOMER";

export interface User {
  name: string;
  role: Role;
}
