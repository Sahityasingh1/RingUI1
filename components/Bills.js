import {Image,StyleSheet,View,Text,Dimensions} from 'react-native'

function  Bills(){
    return(
        <View style={styles.total}>
        <View style={styles.firstRow}>
        <View style={styles.first}>
        <Image style={styles.img} source={require('../Image/mobile.jpg')}/>
        <Text style={styles.txt}>Mobile</Text>
        </View>
        <View style={styles.second}>
        <Image style={styles.img} source={require('../Image/e.jpg')}/>
        <Text style={styles.txt2}>Electricity</Text>
        </View>
        <View style={styles.third}>
        <Image style={styles.img} source={require('../Image/d.jpg')}/>
        <Text style={styles.txt}>DTH</Text>
        </View>
        <View style={styles.fourth}>
        <Image style={styles.img} source={require('../Image/gas.jpg')}/>
        <Text style={styles.txt}>Gas</Text>
        </View>
        </View>

        <View style={styles.secondRow}>
        <View style={styles.first}>
        <Image style={styles.img} source={require('../Image/br.jpg')}/>
        <Text style={styles.txt1}>Broadband</Text>
        </View>
        <View style={styles.second2}>
        <Image style={styles.img} source={require('../Image/ln.jpg')}/>
        <Text style={styles.txt}>Landline</Text>
        </View>
        <View style={styles.third}>
        <Image style={styles.img} source={require('../Image/c.jpg')}/>
        <Text style={styles.txt}>Fasttag</Text>
        </View>

        <View style={styles.fourth}>
        <Image style={styles.img} source={require('../Image/ar.jpg')}/>
        <Text style={styles.txt}>View More</Text>
        </View>
        </View>


        

        

        </View>

        

        

    )

}

export default Bills;

const deviceWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    firstRow:{
        flexDirection:'row',
        marginTop:10,
        
       
    },
    secondRow:{
        flexDirection:'row',
        marginTop:10,
    },
    first:{
        marginLeft:deviceWidth<380? 25:35,
        marginTop:12,

    },
    second:{
        marginLeft:35,
        marginTop:12,

    }, second2:{
        marginLeft:28,
        marginTop:12,
    },
    third:{
        marginLeft:35,
        marginTop:12,

    },
    fourth:{
        marginLeft:35,
        marginTop:12,

    },
    img:{
        width: deviceWidth<380? 40:50,
        height:deviceWidth<380? 40:50,
    },
    txt:{
        fontSize:10,
        width:45,
        marginLeft:deviceWidth<380? 10:10,
        marginTop:4,
    }
    ,
    txt1:{
        fontSize:10,
        width:55,
        marginLeft:deviceWidth<380? 10:10,
        marginTop:4,
    },
    txt2:{
        fontSize:10,
        width:55,
        marginLeft:4,
        marginTop:4,

    },
   
})