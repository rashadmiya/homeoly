import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

 const Onboard = (props) => {
  
   return (
    <View style={styles.onboard}>
     <Image
      style={styles.images}
      source={require('../assets/logo.png')}
     />
 <View> 
    <Text style={styles.head}>Hundreds of years of patient data will now be protected.  </Text>
    
    <Image
      style={styles.coverimage}
      source={require('../assets/cover.png')}
     />

   <TouchableHighlight onPress={()=> props.navigation.navigate("create")}> 
      <Text style={styles.buton}>Get Started </Text>
   </TouchableHighlight>
</View>

    </View>
 
   );


};

const styles = StyleSheet.create({

    onboard: {
       
        backgroundColor: 'white',
        flex: 1,
        width: "100%",
        height: 920,
        overflow: "hidden",
        top: -30,
      },
  images: {
     
      height: 38, 
      width: 187,
    top: 103,
    marginLeft: 90, 

  }, 
  head: {
    width: 300,
    height: 54, 
    top: 150, 
    left: 24, 
    fontSize: 18,
    lineHeight: 27,
   textAlign: 'center',
    
  },
  coverimage:{
   
    marginTop: "50%",
    left: 65, 
    height: 190, 
    width: 240, 
     
  },
 buton: {
    height: 52, 
    width:332, 
    backgroundColor: '#4CAF50',
    borderRadius: 14, 
    left: 12,
    top: 40,
    textAlign: 'center', 
    fontSize: 18, 
    color: '#fff',
    fontFamily: 'Poppins',
    lineHeight: 20.8, 
   
   padding:12, 

 }

});
export default Onboard; 

