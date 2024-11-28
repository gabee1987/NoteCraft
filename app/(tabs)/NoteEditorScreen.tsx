// app/NoteEditorScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { createNote } from "../services/notes";

export default function NoteEditorScreen() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSaveNote = async () => {
    try {
      if (!title || !content) {
        alert("Title and content cannot be empty");
        return;
      }

      const newNote = {
        title,
        content,
        date_created: new Date().toISOString(),
        date_modified: new Date().toISOString(),
        images: [], // Add logic to handle images if applicable
        importance: 3, // Default importance level
      };

      const savedNote = await createNote(newNote);
      if (savedNote) {
        console.log("Note saved successfully:", savedNote);
        router.push("/NotesListScreen");
      } else {
        console.error("Failed to save the note");
      }
    } catch (error) {
      console.error("Error saving note:", error);
      alert("Failed to save the note. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter title..." />
      <TextInput
        style={styles.textarea}
        placeholder="Enter content..."
        multiline
      />
      <Button
        title="Save Note"
        onPress={() => router.push("/NotesListScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  textarea: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});
