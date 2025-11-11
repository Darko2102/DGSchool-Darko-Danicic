import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';

const About = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>Welcome to home screen</Text>
            <Button title="Go toHome screen" onPress={() => navigation.goBack()}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})
export default About;