// app/styles/HomeScreenStyles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
  },
  flatList: {
    width: "100%",
  },
  noteContainer: {
    padding: 16,
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0, // Initial shadow opacity
    shadowRadius: 15,
    elevation: 4, // Android-specific shadow
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
  loadingText: {
    fontSize: 18,
    color: "#434343",
    textAlign: "center",
    marginTop: 20,
  },
});
