// app/_layout.tsx
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigationState } from "@react-navigation/native";

type RouteParams = {
  noteTitle?: string;
};

export default function Layout() {
  return (
    <Stack
      screenOptions={({ route }: { route: { params?: RouteParams } }) => ({
        headerTitle: route.params?.noteTitle || "NoteCraft",
        headerStyle: { backgroundColor: "#f5f5f5" },
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => <BackButton />,
      })}
    >
      <Stack.Screen
        name="(tabs)/HomeScreen"
        options={{
          headerTitle: "Your Notes",
          headerRight: () => <CreateNoteButton />,
        }}
      />
      <Stack.Screen
        name="(tabs)/NoteEditorScreen"
        options={{
          headerTitle: "Create/Edit Note",
        }}
      />
    </Stack>
  );
}

function BackButton() {
  const router = useRouter();
  const canGoBack = useCanGoBack(); // Custom hook to check navigation state

  if (!canGoBack) {
    return null; // Hide the back button if there is no screen to go back to
  }

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 10 }}
      onPress={() => router.back()}
    >
      <Ionicons name="arrow-back" size={24} color="#333" />
    </TouchableOpacity>
  );
}

function CreateNoteButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 10 }}
      onPress={() =>
        router.push({
          pathname: "/NoteEditorScreen",
          params: { noteTitle: "Create/Edit Note" },
        })
      }
    >
      <Ionicons name="add" size={24} color="#333" />
    </TouchableOpacity>
  );
}

// Custom hook to determine if there is a previous screen
function useCanGoBack() {
  const stackState = useNavigationState((state) => state);
  return stackState?.index > 0; // If index > 0, there's a screen to go back to
}
