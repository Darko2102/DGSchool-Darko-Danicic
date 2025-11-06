import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Contact = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>Contact Page</Text>
            <Button title="Go to Home screen" onPress={() => navigation.goBack()}/>
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
export default Contact;