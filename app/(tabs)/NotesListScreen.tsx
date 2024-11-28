// app/NotesListScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { getNotes } from "../services/notes";
import { Note } from "../types/note";

export default function NotesListScreen() {
  const router = useRouter();

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    };

    fetchNotes();
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Your Notes</Text>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
      <Button
        title="Create a Note"
        onPress={() => router.push("/NoteEditorScreen")}
      />
    </View>
  );
}
