import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Home = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
           <View style={styles.sliderContainer}>
                <Swiper
                    style={styles.item}
                    autoplay={true}
                    activeDotColor='#22D4FF'
                    autoplayTimeout={3}
                    activeDot="#11101022"
                >
                    <View>
                        {/* <Image style={styles.imgItem}  source={require('../../assets/OIP.jpg')} resizeMode="cover"/>
                        <Image style={styles.imgItem}  source={require('../../assets/assets/sample-7705346_1280.jpg')} resizeMode="cover"/>
                        <Image style={styles.imgItem}  source={require('../../assets/assets/sample-7705350_1280.jpg')} resizeMode="cover"/>
                        <Image style={styles.imgItem}  source={require('../../assets/assets/assets/Nikon-Z8-Official-Samples-00002.jpg')} resizeMode="cover"/>
                        <Image style={styles.imgItem}  source={require('../../assets/assets/assets/pexels-agrosales-20804701.jpg')} resizeMode="cover"/> */}
                        <Text style={styles.txtColor1}>1</Text>
                        <Text style={styles.txtColor1}>2</Text>
                        <Text style={styles.txtColor1}>3</Text>
                    </View>
                    <View>
                        <Text style={styles.txtColor2}>1</Text>
                        <Text style={styles.txtColor2}>2</Text>
                        <Text style={styles.txtColor2}>3</Text>
                    </View>
                    <View>
                        <Text style={styles.txtColor3}>1</Text>
                        <Text style={styles.txtColor3}>2</Text>
                        <Text style={styles.txtColor3}>3</Text>
                    </View>
                </Swiper>
                
           </View>
                <View style={styles.iconsContainer}>
                    <Icon name="cellphone" iconText="Iphone"></Icon>
                    <Icon name="android" iconText="Samsung"></Icon>
                    <Icon name="laptop" iconText="Laptop"></Icon>
                </View>
                <View style={styles.iconsContainer}>
                    <Icon name="tablet" iconText="Tablet"></Icon>
                    <Icon name="mouse" iconText="Mouse"></Icon>
                    <Icon name="keyboard-outline" iconText="Keyboard"></Icon>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconsContainer:{
        width: '90%',
        alignSelf: "center",
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
    },

    sliderContainer:{
        
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 8,
        },
        item:{
            flex: 1,
            justifyContent: 'center',
        },
        imgItem: {
            width: '100%',
            height: '100%',
            borderRadius: 8,
        },
        txtColor1: {
            backgroundColor: '#5b509cff'
        },
        txtColor2: {
            backgroundColor: '#3c6e8bff'
        },
        txtColor3: {
            backgroundColor: '#25776cff'
        },
        
})
export default Home;