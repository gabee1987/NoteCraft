// app/styles/NoteEditorStyles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#8d8d8d",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
    padding: 8,
  },
  textarea: {
    flex: 1,
    borderColor: "#8d8d8d",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
    padding: 8,
    textAlignVertical: "top",
  },
  loadingText: {
    fontSize: 18,
    color: "#434343",
    textAlign: "center",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#007BFF",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginTop: 16,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
