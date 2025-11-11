import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const Profile = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>Profile Page</Text>
            <Button title="Go to Profile screen" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default Profile;