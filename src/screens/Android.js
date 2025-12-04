import React from 'react-native'
import{StyleSheet, View, Text, FlatList, TouchableOpacity, Button} from 'react-native'
import data from '../data/products.json'
import { ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item'

class Android extends Component {
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
            <Text style={styles.desc}>Android Products</Text>
            
            <FlatList
              
              data={this.state.products.android}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
            
           
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

export default Android;