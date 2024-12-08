// app/components/AnimatedNoteItem.tsx
import React, { useRef } from "react";
import {
  Animated,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import { Note } from "../types/note";
import styles from "../styles/AnimatedNoteItemStyles";

interface AnimatedNoteItemProps {
  note: Note;
  onPress: () => void;
  isPressed: boolean;
}

const AnimatedNoteItem: React.FC<AnimatedNoteItemProps> = ({
  note,
  onPress,
  isPressed,
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const shadowOpacity = useRef(new Animated.Value(0.2)).current;

  const animatePressIn = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 0.97,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shadowOpacity, {
        toValue: 0.5,
        duration: 50,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatePressOut = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shadowOpacity, {
        toValue: 0.2,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const backgroundColor = isPressed ? "#d9f3ff" : "#ebebeb";

  return (
    <TouchableWithoutFeedback
      onPressIn={animatePressIn}
      onPressOut={() => {
        animatePressOut();
        onPress();
      }}
    >
      <Animated.View
        style={[
          styles.noteContainer,
          {
            transform: [{ scale }],
            shadowOpacity,
            backgroundColor,
          },
        ]}
      >
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text
              style={styles.noteContent}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {note.content}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }, (_, index) => (
              <Text
                key={index}
                style={[
                  styles.ratingStar,
                  index < note.rating && styles.filledStar,
                ]}
              >
                ★
              </Text>
            ))}
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedNoteItem;
