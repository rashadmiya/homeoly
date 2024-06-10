import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
const Patientprofile = (props) => {
  
 
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/patient');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors', error);
      }
    };
    fetchDoctors();
  }, []);


     return (
      <>
      <View style={styles.main}>
        <View>
            <TouchableHighlight onPress={()=> props.navigation.navigate("editpatient")}>  
            <Image  source={require('../assets/drprofile/edit.png')} style={styles.edit}/>
            </TouchableHighlight>

        </View>
        <View style={styles.viewpr} >

        
       <Image style={styles.imge}/>

       <View style={styles.verified}> 
       <Text style={styles.dctr}>{patient.name} </Text>
      
       </View>

       <Text style={styles.title}> 21 Years Old </Text>   
       <Text style={styles.reg}> Prescribe 5 Times  </Text>




        </View>

    <View style={styles.info}> 
    <Text > Gender: {patient.gender}</Text>   
     <Text > Date of Birth: {patient.day/patient.month/patient.year} </Text>
     <Text > Religion: {patient.religion}</Text>   
       <Text> Phone: {patient.phone} </Text>
       <Text> Email: {patient.email} </Text>

       <Text> House: {patient.preadress}, {patient.prestate} ,{patient.precity}</Text>
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

    edit:{
           top: 30, 
           left: 298, 
    },

    viewpr:{
        top: 5, 
        left: 110,
    },
 
    
    imge:{

        width: 100,
        height: 100, 
        left: 20,
        backgroundColor: 'lightgray',
        borderRadius: 50,
       padding: 10, 
   
   
   
   },

   verified:{
    flexDirection: 'row',
    top: 20,
  },


 icon:{
   width: 13.89,
 height: 14,
 right: 8,
 top: 5,
 },
  
  

   title:{
    fontSize: 16,
    fontWeight: '400',
    top: 25, 
    left: 25,
  },

  dctr:{
    fontFamily: 'Poppins',
  fontSize: 18,
  fontWeight: '700',
  lineHeight: 21,
  textAlign: 'left',
  color: '#192608',
  width: 139,
  height: 23,
  left: 20,
   },
reg:{
     fontWeight: '400',
     fontSize: 17, 
     top: 35,
     right: 0,
},
info:{
    width: 332,
height: 260,
top: 55,
left: 14,
borderRadius: 6,
borderWidth: 1,
borderColor: '#AFD59F',

}, 

primg:{
   top: 15,
},
});
export default Patientprofile; 
