// app/services/notes.ts
import { directus } from "./directus";
import { Note } from "../types/note";
import {
  readItems,
  readItem,
  createItem,
  updateItem,
  deleteItem,
} from "@directus/sdk";
import { transformNoteDates } from "./utilities";

export const getNotes = async (): Promise<Note[]> => {
  try {
    // await directus.login("admin@example.com", "directusNotes_65");
    const notes = await directus.request(readItems("notes"));

    // Convert `date_created` to Date objects
    return notes.map(transformNoteDates);
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

export const getNoteById = async (id: string): Promise<Note | null> => {
  try {
    const note = await directus.request(readItem("notes", id));

    // Convert dates for a single note
    return transformNoteDates(note);
  } catch (error) {
    console.error("Error fetching note:", error);
    return null;
  }
};

export const createNote = async (note: Partial<Note>): Promise<Note | null> => {
  try {
    const result = await directus.request(createItem("notes", note));
    return result || null;
  } catch (error) {
    console.error("Error creating note:", error);
    return null;
  }
};

export const updateNote = async (
  id: string,
  note: Partial<Note>
): Promise<Note | null> => {
  try {
    const result = await directus.request(updateItem("notes", id, note));
    return result || null;
  } catch (error) {
    console.error("Error updating note:", error);
    return null;
  }
};

export const deleteNote = async (id: string): Promise<boolean> => {
  try {
    await directus.request(deleteItem("notes", id));
    return true;
  } catch (error) {
    console.error("Error deleting note:", error);
    return false;
  }
};
