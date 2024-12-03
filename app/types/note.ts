// app/types/note.ts
export interface Note {
  id: string;
  title: string;
  content: string;
  date_created: Date;
  date_updated: Date;
  images: string[]; // IDs of uploaded images
  rating: number; // 1 to 5
}
