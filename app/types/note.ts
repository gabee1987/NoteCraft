// app/types/note.ts
export interface Note {
  id: string;
  title: string;
  content: string;
  date_created: string;
  date_modified: string;
  images: string[]; // IDs of uploaded images
  importance: number; // 1 to 5
}
