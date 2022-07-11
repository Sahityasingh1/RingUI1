import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Dimensions,ScrollView,Image} from 'react-native';
import Header from './components/Header';
import UpiId from './components/UpiId';
import Limit from './components/limit';
import Bills from './components/Bills';
import Footer from './components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      
      <Header/>
     
      <ScrollView style={styles.other}>
          
            <UpiId/>
            <Text style={styles.Text}>Use your limit</Text>
            <Limit/>
            <Text style={styles.Text}>Pay your Bills</Text>
            <Bills/>
            <Image style={styles.scan} source={require('./Image/scan.jpg')} />
            <Footer/>
            

            
      
      

        </ScrollView>
        
        
     

    </View>
  );
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
 
  container:{
    flex:1,
  },
  other: {
 
    borderWidth:0,
    borderColor:'black',
    borderTopLeftRadius:22,
    borderTopRightRadius:22,
    height:1800,
    width:deviceWidth<380?360:395,
    backgroundColor:'white'
   
    
  },
  Text:{
    fontWeight:'bold',
    marginLeft:24,
    marginTop:22,
    fontSize:20
  },
  scan:{
    width:60,
    height:60,
    marginHorizontal:deviceWidth<380?160:170,
    marginTop:20,
  }

  
});
