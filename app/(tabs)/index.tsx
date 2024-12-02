// app/(tabs)/index.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18 }}>Welcome to the NoteCraft App!</Text>
      <Button
        title="Get Started"
        onPress={() =>
          router.push({
            pathname: "/HomeScreen",
            params: { noteTitle: "Notes" },
          })
        }
      />
    </View>
  );
}
