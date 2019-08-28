import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={'Course goals ...'}
                style={styles.input}
                onChangeText={goalInputHandler} 
                value={enteredGoal} />                
            <Button
                title="ADD"
                onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        width: '80%', borderBottomColor: 'black',
        borderBottomWidth: 1, padding: 10
    }
});

export default GoalInput;