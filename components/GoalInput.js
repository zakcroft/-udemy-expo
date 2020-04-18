import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

const GoalInput = ({ onAddGoal, onCancel, isVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const cancelGoalHandler = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputSelector}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputSelector: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
