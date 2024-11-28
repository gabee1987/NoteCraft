// app/services/directus.ts
import { createDirectus, rest, authentication } from "@directus/sdk";
import { Note } from "../types/note";

// Replace with your Directus instance URL
const DIRECTUS_URL = "http://localhost:8055";

interface Schema {
  notes: Note[];
}

export const directus = createDirectus<Schema>(DIRECTUS_URL).with(rest());
//   .with(authentication());

// export const login = async (email: string, password: string) => {
//   try {
//     await directus.login(email, password);
//     console.log("Logged in successfully");
//   } catch (error) {
//     console.error("Login failed:", error);
//   }
// };

// export const logout = async () => {
//   try {
//     await directus.logout();
//     console.log("Logged out successfully");
//   } catch (error) {
//     console.error("Logout failed:", error);
//   }
// };
