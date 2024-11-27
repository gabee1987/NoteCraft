// app/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f5f5f5" },
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  );
}
