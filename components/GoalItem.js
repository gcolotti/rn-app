import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity   
            activeOpacity={0.7}
            //Option #1
            //onPress={props.onDelete.bind(this, props.id)}
            //End Option #1
            onPress={props.onDelete.bind(this, props.id)}
            onLongPress={() => console.log('Looooong press!')}>
            <View style={styles.listItem}>
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 1,
        backgroundColor: 'powderblue',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;