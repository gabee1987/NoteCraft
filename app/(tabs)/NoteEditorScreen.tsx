// app/NoteEditorScreen.tsx
import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function NoteEditorScreen() {
  const router = useRouter();

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
