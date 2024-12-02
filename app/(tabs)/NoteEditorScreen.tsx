// app/NoteEditorScreen.tsx
import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getNoteById, createNote, updateNote } from "../services/notes";
import { useSearchParams } from "expo-router/build/hooks";
import styles from "../styles/NoteEditorStyles"; // Centralized styles

export default function NoteEditorScreen() {
  const router = useRouter();
  const { noteId } = useLocalSearchParams<{ noteId: string }>(); // Get type safe noteId from params
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(Boolean(noteId));

  useEffect(() => {
    if (noteId) {
      const fetchNote = async () => {
        try {
          const note = await getNoteById(noteId);
          if (note) {
            setTitle(note.title);
            setContent(note.content);
          }
        } catch (error) {
          console.error("Error fetching note:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchNote();
    }
  }, [noteId]);

  const handleSaveNote = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty");
      return;
    }

    const noteData = {
      title: title.trim(),
      content: content.trim(),
      date_modified: new Date().toISOString(),
    };

    try {
      if (noteId) {
        // Update existing note
        await updateNote(noteId as string, noteData);
      } else {
        // Create new note
        const newNote = {
          ...noteData,
          date_created: new Date().toISOString(),
          images: [],
          importance: 3,
        };
        await createNote(newNote);
      }
      router.push("/HomeScreen");
    } catch (error) {
      console.error("Error saving note:", error);
      alert("Failed to save the note. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter title..."
        value={title} // Connect to state
        onChangeText={setTitle} // Update state
      />
      <TextInput
        style={styles.textarea}
        placeholder="Enter content..."
        value={content} // Connect to state
        onChangeText={setContent} // Update state
        multiline
      />
      <Button title="Save Note" onPress={handleSaveNote} />
    </View>
  );
}
