// app/NotesListScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function NotesListScreen() {
  const router = useRouter();

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
      <Button
        title="Create a Note"
        onPress={() => router.push("/NoteEditorScreen")}
      />
    </View>
  );
}
