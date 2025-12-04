import React from "react-native";
import {Text, View, StyleSheet, FlatList} from 'react-native';

class Favourites extends Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        this.setState({
            products:data
        })
    }

    render(){
        return(
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.desc}>IOS Products</Text>
            <Button onPress={() => NavigationActivation.navigate("Favorites")}>
            <FlatList
              
              data={this.state.products.ios}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
            <Text style={styles.rating}>Rating {props.rating}</Text>
            </Button>
          </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

})

export default Favorites;