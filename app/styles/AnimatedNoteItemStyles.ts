// app/styles/AnimatedNoteItem.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  noteContainer: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 4, // Android shadow
    backgroundColor: "#ebebeb",
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#434343",
  },
  noteContent: {
    fontSize: 14,
    color: "#434343",
  },
});