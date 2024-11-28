// app/_layout.tsx
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    />
  );
}

function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 10 }}
      onPress={() => router.back()}
    >
      <Ionicons name="arrow-back" size={24} color="#333" />
    </TouchableOpacity>
  );
}
