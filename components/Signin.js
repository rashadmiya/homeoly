import { Image } from "@rneui/base";
import React, { useState } from "react";
import {
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { apiService } from "../src/services/api-service";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_ID = '@user_id';
export const USER_TOKEN = '@user_token';
const dimension = Dimensions.get('screen');

const Signin = ({ navigation, props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {

      await apiService.signin({ email: email, password: password }).then(async(res) => {
        try {
          await AsyncStorage.setItem(USER_ID, res.data.id);
          await AsyncStorage.setItem(USER_TOKEN, res.data.token);

          navigation.navigate('dashboard');
        } catch (error) {
          Alert.alert('Error', 'Failed to save user data.');
        }
      }).catch(err => console.log(err));

    } catch (err) {
      // setError('Invalid email or password');
    }
  };


  return (
    <>

      <View style={styles.main}>

        <Text style={styles.welcome}>Welcome Back! </Text>

        <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', }}>
          <TextInput
            placeholder="Email or Phone"
            value={email}
            onChangeText={setEmail}
            style={styles.input1}
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Password"
            style={styles.input1}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}

          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Remember me</Text>
            <TouchableOpacity  >
              <Text style={{ color: '#AFD59F' }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.cont}>Or Continue with</Text>
        </View>

        <View style={{ paddingHorizontal: '20%', marginTop: 10 }}>
          <View style={styles.social}>
            <View style={styles.rect}>
              <Image source={require('../assets/social/google.png')} style={{ height: '100%', width: '100%' }} />
            </View>
            <View style={styles.rect}>
              <Image source={require('../assets/social/facebook.png')} style={{ height: '100%', width: '100%' }} />

            </View>
            <View style={styles.rect}>
              <Image source={require('../assets/social/apple.png')} style={{ height: '100%', width: '100%' }} />
            </View>
          </View>
        </View>
        {/* {error ? <Text>{error}</Text> : null} */}

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.buton} onPress={handleSignIn} >
            <Text style={[styles.txt, { color: '#fff' }]}>Sign In </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.txt}>Do you have an account ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("create")}
          >
            <Text style={styles.sign}>Create account </Text>
          </TouchableOpacity>
        </View>

      </View>



    </>

  );

};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    width: "100%",
    height: '100%',
    paddingHorizontal: 15
  },
  welcome: {
    marginVertical: 100,
    fontFamily: 'poppins',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    lineHeight: 31,
    letterSpacing: 0.05,
    textAlign: 'center',
  },

  input1: {
    height: 52,
    marginTop: 7,
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
    marginTop: 50,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.05,
    textAlign: 'center',

  },

  social: {
    flexDirection: 'row',
  },

  rect: {
    width: 52,
    height: 52,
    borderRadius: 50,
    borderWidth: 0.6,
    backgroundColor: 'none',
    borderColor: '#9DA296',
    margin: 13,
  },

  buton: {
    height: 52,
    width: 332,
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins',
    lineHeight: 20.8,
    padding: 12,
    marginTop: 20

  },

  txt: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.05,
    textAlign: 'center',

  },

});

export default Signin; 