import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

import axios from 'axios';

const Verifications = ({ navigation, route,props }) =>{

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const { email } = route.params;

  const handleVerifyOTP = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/verify-otp', { email, otp });
      navigation.navigate('Signin');
    } catch (err) {
      setError('Invalid OTP, please try again');
    }
  };

return(
  <>
 <View style={styles.main}>
 <Text style={styles.verify}> Verifications </Text>
 
 <Text style={styles.head}>Please enter the 4-digit code in the email we just sent to ariful.uxd@gmail.com  </Text>

 <View style={styles.code}>
  
  <TextInput  style={styles.line} value={otp}
        onChangeText={setOtp}/> 
  <TextInput style={styles.line} /> 
  <TextInput style={styles.line} />
  <TextInput style={styles.line} /> 
{error ? <Text style={styles.error}>{error}</Text> : null}
 </View>

 <View style={styles.lstext}>
  <Text style={styles.txt}>Not you?</Text>
   <TouchableHighlight onPress={()=> props.navigation.navigate("create")}>
    <Text style={styles.email}>Change email/phone</Text>
   </TouchableHighlight>
</View>
<View style={styles.btn}>
<TouchableHighlight  onPress={handleVerifyOTP} > 
      <Text style={styles.buton}>Next </Text>
   </TouchableHighlight>

   <TouchableHighlight  > 
      <Text style={styles.buton1}> Resend code </Text>
   </TouchableHighlight>
   </View>
 </View>





  </>

);

};

const styles = StyleSheet.create({

    main:{
        backgroundColor: 'white',
        flex: 1,
        width: "100%",
        height: 920,
        overflow: "hidden",
    },
    verify:{
        width: 208,
        height: 31,
        top: 44, 
        left: 82, 
       
     fontFamily: 'poppins',
fontSize: 24,
fontWeight: '600',
color: 'black',
lineHeight: 31,
letterSpacing: 0.05,
textAlign: 'center',

    },
    head: {
        width: 382,
        height: 42, 
        top: 50, 
        left: 0,
        fontSize: 13,
        lineHeight: 21,
        textAlign: 'center',
        fontWeight: '400',
      },   
      code:{
        width: 342,
height: 120,
borderRadius: 10,
backgroundColor: '#fff',
borderColor: '#fff',
elevation: 10, 
top: 75,
left:10,
flexDirection: 'row',
      },

line:{
    width: 70, 
    height: 40, 
    borderColor: '#4F4F4F', 
    borderBottomWidth: 1, 
    margin:6,
    top: 50,
    fontSize: 14,
},

lstext:{
    flexDirection: 'row',
    top: '26%',
    left: 22,
},
txt:{
 
fontFamily: 'Poppins',
fontSize: 14,
fontWeight: '400',
lineHeight: 21,
letterSpacing: 0.05,
textAlign: 'center',

},
email:{
   color: '#AFD59F',
},
btn:{
   flexDirection: 'colum',
   top: 190,
},
buton: {
    height: 52, 
    width:332, 
    backgroundColor: '#4CAF50',
    borderRadius: 14, 
    left: 12,
    
    textAlign: 'center', 
    fontSize: 18, 
    color: '#fff',
    fontFamily: 'Poppins',
    lineHeight: 20.8, 
   
   padding:12, 

 },

 buton1:{
    height: 52, 
    width:332, 
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 14, 
    left: 12,
   top: 10,
    textAlign: 'center', 
    fontSize: 18, 
    
    fontFamily: 'Poppins',
    lineHeight: 20.8, 
   
   padding:12, 

 }

});

export default Verifications; 