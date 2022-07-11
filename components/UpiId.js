import {Image,StyleSheet,Dimensions} from 'react-native'

function UpiId(){
    return(
        <Image style={styles.upi} source={require('../Image/upi.jpg')}/>

    )

}

export default UpiId;
const deviceWidth= Dimensions.get("window").width

const styles = StyleSheet.create({
    upi:{
        marginLeft:deviceWidth<380 ?22:22,
        width: deviceWidth<380 ? 320:350,
        height:  deviceWidth<380 ? 100:110,
        marginTop:35,
        borderRadius:16
    }
})