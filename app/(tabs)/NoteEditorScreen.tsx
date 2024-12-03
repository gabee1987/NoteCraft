// app/NoteEditorScreen.tsx
import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getNoteById, createNote, updateNote } from "../services/notes";
import StarRatingInput from "../components/StarRatingInput";
import styles from "../styles/NoteEditorStyles"; // Centralized styles

export default function NoteEditorScreen() {
  const router = useRouter();
  const { noteId } = useLocalSearchParams<{ noteId: string }>(); // Get type safe noteId from params
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(3);

  const [isLoading, setIsLoading] = useState(Boolean(noteId));

  useEffect(() => {
    if (noteId) {
      const fetchNote = async () => {
        try {
          const note = await getNoteById(noteId);
          if (note) {
            setTitle(note.title);
            setContent(note.content);
            setRating(note.rating || 3);
            console.log("Rating after open: ", rating);
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
      date_updated: new Date(),
      rating: rating,
    };

    try {
      if (noteId) {
        // Update existing note
        await updateNote(noteId as string, noteData);
      } else {
        // Create new note
        const newNote = {
          ...noteData,
          date_created: new Date(),
          images: [],
          rating: rating,
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
      <StarRatingInput rating={rating} onRatingChange={setRating} />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
}
