import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Constants from 'expo-constants';

export default function App() {
  //React hooks. useState() hook.  
  const [courseGoals, setCourseGoals] = useState([]);

  //Open modal
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, {
        //I set the id field to a random number. This will be used as the key field.
        id: Math.random().toString(),
        value: goalTitle
      }]);
    setIsAddMode(false);
  };

  //Filter always returns a new array filtered by the criteria.
  //You pass a function to filter, and it runs on every element (goals in this case).
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title={'Add new goal'} onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      {/* //TODO: Check FlatList again */}
      <FlatList
        //keyExtractor allows to change the key field to, for example, id field
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            //Option #1: .bind() on the child (GoalItem) component. id prop needed in this option.
            //id={itemData.item.id}
            //onDelete={removeGoalHandler}
            //End Option #1
            //Option #2: .bind() on removeGoalHandler
            //onDelete={removeGoalHandler.bind(this, itemData.item.id)}
            //End Option #2                        
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
    padding: 10,
  },
});
