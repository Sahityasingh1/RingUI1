import {View,StyleSheet,Text,ImageBackground,Dimensions,Image,ScrollView} from 'react-native'


function Header(){
    return(
        <View style={styles.all}>
        <ImageBackground
        style={styles.bgImage}
        source={require('../Image/download.jpeg')}>
        <View style={styles.allheader}>
        <Image style={styles.nav1} source={require('../Image/n.png')} />
        
        <View style={styles.mid}>
            <Text  style={styles.mid1}>Available Limit</Text>
            <View style={styles.mid2}>
            <Text  style={styles.num1} >₹ 1,000</Text>
            <Text   style={styles.num2}>/ ₹4,000</Text>
            </View>
            <Image style={styles.mid3} source={require('../Image/line.jpg')} />
           
        </View>
        <View style={styles.bell}>
        <Image style={styles.bells} source={require('../Image/b.webp')} />
        </View>
        </View>
       
        </ImageBackground>
        
        

        </View>
    )

}

export default Header;

const deviceWidth= Dimensions.get("window").width
const styles = StyleSheet.create({
    all:{
        width: deviceWidth<380 ? 360:400,
        height:  deviceWidth<380 ? 160:160,
       

    },
    allheader:{
        flexDirection:'row'
    },

    bgImage:{
        width: deviceWidth<380 ? 360:400,
        height:  deviceWidth<380 ? 180:180,
    },
    nav1:{
        width: deviceWidth<380 ?20:30,
        height: deviceWidth<380 ?20:30,
        marginLeft:20,
        marginTop:60,
    },
    mid:{
        width: deviceWidth<380 ?80:100,
        height: deviceWidth<380 ?40:60,
        marginLeft:30,
        marginTop:50,
        
    },
    mid1:{
        color:'white',
        fontWeight:"bold"

    },
    mid2:{
        flexDirection:'row'
    },
    num1:{
        color:'white',
        fontWeight:"900",
        fontSize:22
    },
    num2:{
        color:'white',
        fontWeight:"50",
        marginTop:6,
        marginLeft:10,
        fontWeight:"bold"
    },
    mid3:{
        marginTop:8,
        width:120,
        height:4

    },
    bells:{
        width: deviceWidth<380 ?30:30,
        height: deviceWidth<380 ?30:30,
        marginLeft:deviceWidth<380 ?165:170,
        marginTop:deviceWidth<380 ?60:60,
    },
   


})