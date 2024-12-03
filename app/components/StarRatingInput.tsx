// app/components/StarRatingInput.tsx
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../styles/StarRatingInputStyles";

interface StarRatingInputProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({
  rating,
  onRatingChange,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1;
        return (
          <TouchableOpacity
            key={starNumber}
            onPress={() => onRatingChange(starNumber)}
          >
            <Text style={[styles.star, rating >= starNumber && styles.filled]}>
              ★
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default StarRatingInput;
