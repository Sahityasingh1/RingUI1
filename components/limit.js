import {Image,StyleSheet,Dimensions,View,Text} from 'react-native'

function Limit(){
    return(
        <View style={styles.all}>
        <View style={styles.first}>
        <Image style={styles.img} source={require('../Image/i1.jpg')}/>
        <Text style={styles.txt}>Bank Transfer</Text>
        </View>
        <View style={styles.second}>
        <Image style={styles.img} source={require('../Image/i2.jpg')}/>
        <Text style={styles.txt}>Pending   UPI  Requests</Text>

        </View>

        </View>

        

    )

}

export default Limit;
const deviceWidth= Dimensions.get('window').width

const styles = StyleSheet.create({
    all:{
        flexDirection:'row',
        
    },
    first:{
        marginLeft:35,
        marginTop:16,

    },
    second:{
        marginLeft:40,
        marginTop:16,

    },
    img:{
        width:deviceWidth<380? 40:50,
        height:deviceWidth<380? 40:50,
    },
    txt:{
        fontSize:12,
        width:55,
        marginLeft:deviceWidth<380? 5:10,
        marginTop:4,
    }
   
})