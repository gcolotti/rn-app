import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Constants from 'expo-constants';
import { setPlaneDetection } from 'expo/build/AR';

export default function App() {
  //React hooks. useState() hook.  
  const [courseGoals, setCourseGoals] = useState([]);

  //Open modal
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0){
      return;
    }
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

  const removeAllGoalsHandler = () => {
    setCourseGoals([]);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button title={'Add new goal'} onPress={() => setIsAddMode(true)}/>
        </View>
        <View style={styles.btn}>
          <Button color={'red'}title={'Delete all'} onPress={removeAllGoalsHandler}/>
        </View>
      </View>      
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
    padding: 15,
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  btn: {
    width: '45%',
  }
});
