import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => currentGoals.filter(g => g.id !== goalId));
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)} />
      <GoalInput
        isVisible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalHandler}
      />
      <FlatList
        keyExtractor={(item, i) => item.id}
        data={courseGoals}
        renderItem={({ item: { value, id } } = {}) => (
          <GoalItem id={id} title={value} onDelete={removeGoalHandler} />
        )}
        colors={[]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 30 }
});
