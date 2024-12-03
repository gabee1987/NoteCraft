// app/(tabs)/HomeScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { getNotes } from "../services/notes";
import { Note } from "../types/note";
import AnimatedNoteItem from "../components/AnimatedNoteItem";
import styles from "../styles/HomeScreenStyles";

export default function HomeScreen() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pressedNote, setPressedNote] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotes();
        // Sort notes by date created descending
        const sortedNotes = data.sort(
          (a, b) => b.date_created.getTime() - a.date_created.getTime()
        );
        setNotes(sortedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handlePressNote = async (note: Note) => {
    setPressedNote(note.id);
    await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for animation
    setPressedNote(null);
    router.push({
      pathname: "/NoteEditorScreen",
      params: { noteId: note.id },
    });
  };

  if (isLoading) {
    return <Text style={styles.loadingText}>Loading notes...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* With animation */}
      <FlatList
        style={styles.flatList}
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnimatedNoteItem
            note={item}
            onPress={() => handlePressNote(item)}
            isPressed={pressedNote === item.id}
          />
        )}
      />

      {/* Witout Animation */}
      {/* <FlatList
        style={styles.flatList}
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteContainer}
            onPress={() => handleOpenNote(item)}
          >
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteContent}>{item.content}</Text>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
}
