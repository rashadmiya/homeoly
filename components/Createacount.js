import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
const Createacount = (props) => {
 
  const navigation = useNavigation();
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSignUp = async () => {
      try {
        await axios.post('http://localhost:5000/api/users/signup', {
          name,
          email,
          password,
        });
        navigation.navigate('verify', { email });
      } catch (err) {
        setError('Error during sign up, please try again');
      }
    };

 

  return (
   <>
   <View style={stylec.main}>
     <Text style={stylec.create}>Create Account </Text>
 
     <TextInput
 placeholder="Full Name"
 value={name}
 onChangeText={setName} 
 style={stylec.input1}
 />

<TextInput
 placeholder="Email or Phone" 
 value={email}
 onChangeText={setEmail}
 style={stylec.input1}
 />

<TextInput
 placeholder="Password" 
 value={password}
 onChangeText={setPassword}
 style={stylec.input1}
 secureTextEntry={true}
 />

<Text style={stylec.cont}>Or Continue with</Text>

<View style={stylec.social}>
<View style={stylec.rect}/>
<View style={stylec.rect}/>
<View style={stylec.rect}/>
</View>

<TouchableHighlight  onPress={handleSignUp} > 
      <Text style={stylec.buton}>Create Account </Text>
   </TouchableHighlight>

<View style={stylec.lstext}>
  <Text style={stylec.txt}>Already have an account ?</Text>
   <TouchableHighlight onPress={()=> props.navigation.navigate('signin')}>
    <Text style={stylec.sign}>Sign In</Text>
   </TouchableHighlight>
</View>

   </View>


   
   </>

  );


};

const stylec = StyleSheet.create( {

    main:{
        backgroundColor: 'white',
        flex: 1,
        width: "100%",
        height: 920,
        overflow: "hidden",
    }, 
    create:{
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

  input1:{
    
width: 322,
height: 52,
top: '13%',
left: 13,
margin: 7,
fontFamily: 'Poppins',
fontSize: 14,
fontWeight: '400',
lineHeight: 26,
letterSpacing: 0,
textAlign: 'left',
borderWidth: 1, 
borderColor: '#AFD59F',
borderRadius: 6, 

  }, 
  cont:{
    width: 128,
height: 21,
left: 135,
top: 90,

fontFamily: 'Poppins',
fontSize: 14,
fontWeight: '400',
lineHeight: 21,
letterSpacing: 0.05,
textAlign: 'left',

  },

  social:{
     flexDirection: 'row', 
    top: 10,
    left: 30,
  },

  rect:{
    width: 52,
    height: 52,
    borderRadius: 50,
    borderWidth: 0.6,
    backgroundColor: 'none',
    borderColor: '#9DA296',
     top: '24%', 
     left: 33,
     margin: 13,
  },

  buton: {
    height: 52, 
    width:332, 
    backgroundColor: '#4CAF50',
    borderRadius: 14, 
    left: 12,
    top: 110,
    textAlign: 'center', 
    fontSize: 18, 
    color: '#fff',
    fontFamily: 'Poppins',
    lineHeight: 20.8, 
   
   padding:12, 

 },

lstext:{
    flexDirection: 'row',
    top: '36%',
    left: 70,
},
txt:{
 
fontFamily: 'Poppins',
fontSize: 14,
fontWeight: '400',
lineHeight: 21,
letterSpacing: 0.05,
textAlign: 'center',

},
sign:{
   color: '#AFD59F',
},


});

export default Createacount; 