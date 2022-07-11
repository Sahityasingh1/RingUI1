import {Image,StyleSheet,Dimensions,View,Text} from 'react-native'

function Footer(){
    return(
        <View style={styles.all}>
        <View style={styles.tap}>
            <Image style={styles.img} source={require('../Image/h.jpg')} />
            <Text style={styles.txt}>Home</Text>
        </View>
        <View style={styles.tap2}>
            <Image style={styles.img2} source={require('../Image/tr.jpg')} />
            <Text style={styles.txt}>Transactions</Text>
        </View>


        <View style={styles.right}>
        <View style={styles.tapRight}>
            <Image style={styles.img3} source={require('../Image/re.jpg')} />
            <Text style={styles.txt}>Rewards</Text>
        </View>
        <View style={styles.tap4}>
            <Image style={styles.img4} source={require('../Image/more.jpg')} />
            <Text style={styles.txt}>More</Text>
        </View>


        </View>
        

        </View>

       

    )

}

export default Footer;
const deviceWidth= Dimensions.get("window").width

const styles = StyleSheet.create({
    all:{
        flexDirection:'row',
        marginTop:0,
        marginBottom:14
    },
    tap:{
        marginLeft:24,
    },
    tapRight:{
        marginLeft:12
    },
    tap2:{
        marginLeft:30

    },
    tap4:{
        marginLeft:35

    },
    img:{
        width:24,
        height:24,
        marginLeft:6
    },
    img2:{
        width:24,
        height:24,
        marginLeft:26

    },
    img3:{
        width:24,
        height:24,
        marginLeft:deviceWidth<380?16:16

    },
    img4:{
        width:24,
        height:24,
        marginLeft:4,
        

    },
    right:{
        flexDirection:'row',
        marginLeft:deviceWidth<380?40:54,
    }

    
})