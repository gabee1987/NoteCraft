// app/styles/StarRatingInput.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  star: {
    fontSize: 32,
    color: "#d3d3d3", // Unselected color
    marginHorizontal: 4,
  },
  filled: {
    color: "#ffc107", // Selected color
  },
});
