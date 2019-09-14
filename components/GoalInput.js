import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    const cancelHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={'Course goals ...'}
                    style={styles.input}
                    onChangeText={goalInputHandler} 
                    value={enteredGoal} />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="cancel" color="red" onPress={cancelHandler} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="add" onPress={addGoalHandler} />
                    </View>                    
                </View>                
            </View>            
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    btn: {
        width: '49%',
    }
});

export default GoalInput;