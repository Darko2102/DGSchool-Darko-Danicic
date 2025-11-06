import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>Welcome to home screen</Text>
            <Button title="Go to About screen" onPress={() => navigation.navigate("About")}/>
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
export default Home;