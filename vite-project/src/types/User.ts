export interface User {
    id: number;
    username: string;
    role: "admin" | "user";
    password: number | string;
  }
  