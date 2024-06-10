import React, { useState } from "react";
import {
  StyleSheet,
  Text, TextInput,
  TouchableHighlight,
  View
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const Signin = ({ navigation, props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      // const response = await axios.post('http://localhost:5000/api/users/signin', {
      //   email,
      //   password,
      // });
      // const token = response.data.token;
      // Save the token and navigate to the main app screen
      //  AsyncStorage.setItem('token', token);
      navigation.navigate('dashboard');
    } catch (err) {
      // setError('Invalid email or password');
    }
  };


  return (
    <>

      <View style={stylec.main}>

        <Text style={stylec.create}>Welcome Back! </Text>

        <TextInput
          placeholder="Email or Phone"
          value={email}
          onChangeText={setEmail}
          style={stylec.input1}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          style={stylec.input1}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}

        />

        <View style={stylec.remtxt}>
          <Text>Remember me </Text>
          <TouchableHighlight  >
            <Text style={stylec.forgotxt}> Forgot password?  </Text>
          </TouchableHighlight>
        </View>

        <Text style={stylec.cont}>Or Continue with</Text>

        <View style={stylec.social}>
          <View style={stylec.rect}>
            <Icon name="google" size={30} color="red" />
          </View>
          <View style={stylec.rect}></View>
          <View style={stylec.rect}></View>
        </View>
        {/* {error ? <Text>{error}</Text> : null} */}

        <TouchableHighlight onPress={handleSignIn} >
          <Text style={stylec.buton}> Sign In </Text>
        </TouchableHighlight>

        <View style={stylec.lstext}>
          <Text style={stylec.txt}>Do you have an account ?</Text>
          <TouchableHighlight onPress={() => props.navigation.navigate("create")}>
            <Text style={stylec.sign}>Create account </Text>
          </TouchableHighlight>
        </View>

      </View>



    </>

  );

};

const stylec = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    width: "100%",
    height: '100%',
    overflow: "hidden",
    paddingHorizontal: 'auto'
  },
  create: {
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

  input1: {

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
  cont: {
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

  social: {
    flexDirection: 'row',
    top: 10,
    left: 30,
  },

  rect: {
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
    width: 332,
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    left: 12,
    top: 110,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins',
    lineHeight: 20.8,

    padding: 12,

  },


  lstext: {
    flexDirection: 'row',
    top: '36%',
    left: 70,
  },
  txt: {

    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.05,
    textAlign: 'center',

  },
  sign: {
    color: '#AFD59F',
  },
  remtxt: {
    flexDirection: 'row',
    top: 75,
    left: 20,
  },
  forgotxt: {
    left: 110,
    color: '#AFD59F',
  }


});

export default Signin; 