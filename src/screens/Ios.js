import React from 'react-native'
import{StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native'
import data from '../data/products.json'
import { ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item'

class Ios extends Component {
    constructor(props){
        super();
        this.state = {
            products :[]
        }
    }

    componentDidMount(){
        this.setState({
            products: data
        })
    }
    render() {
        return(
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.desc}>IOS Products</Text>
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
          </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contsainer: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20,
    },
    desc: {
        marginBottom: 20,
    },
    rating: {
        fontWeight: 'bold',
        color: '#180d0dff'
    }
})

export default Ios;