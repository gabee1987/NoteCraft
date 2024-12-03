import { Note } from "../types/note";

export const transformNoteDates = (note: any): Note => ({
  ...note,
  date_created: new Date(note.date_created),
  date_modified: note.date_modified ? new Date(note.date_modified) : null,
});
