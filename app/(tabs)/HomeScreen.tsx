// app/HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
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
      <Text style={{ fontSize: 24, marginBottom: 16 }}>
        Welcome to NoteCraft!
      </Text>
      <Button
        title="Go to Notes"
        onPress={() =>
          router.push({
            pathname: "/NotesListScreen",
            params: { noteTitle: "Notes" },
          })
        }
      />
      <Button
        title="Create a Note"
        onPress={() =>
          router.push({
            pathname: "/NoteEditorScreen",
            params: { noteTitle: "Create/Edit Note" },
          })
        }
      />
    </View>
  );
}
