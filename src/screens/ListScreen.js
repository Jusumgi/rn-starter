import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 45},
        {name: 'Friend 3', age: 32},
        {name: 'Friend 4', age: 27},
        {name: 'Friend 5', age: 25},
        {name: 'Friend 6', age: 33},
        {name: 'Friend 7', age: 29},
        {name: 'Friend 8', age: 27},
        {name: 'Friend 9', age: 50},
    ]
    return (
    <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item})=>{
            return (<View>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>Age: {item.age}</Text>
            </View>
        );
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 25
    }
});

export default ListScreen