import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
const Drprofile = (props) => {
 
     const[dctrname, setDctrname]=useState();

     useEffect(() => {
      const fetchDoctors = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/users/signup');
          setDctrname(response.data);
        } catch (error) {
          console.error('Error fetching doctors', error);
        }
      };
      fetchDoctors();
    }, []);
  

     return (
      <>
      <View style={styles.main}>

      <View style={styles.profile}> 
      
      <TouchableHighlight onPress={()=> props.navigation.navigate("drprofile")}>
      <Image style={styles.imge}/>
    </TouchableHighlight>
      
    <View style={styles.drinfo}>
    
    <View style={styles.verified}> 
       <Text style={styles.dctr}>{dctrname.name}</Text>
       <Image   source={require('../assets/dashboard/check.png')} style={styles.icon}/>
       </View>

       <Text style={styles.titl}> {dctrname.email}</Text>
     <View style={styles.eyes}>
       <TouchableHighlight onPress={()=> props.navigation.navigate("profile")} style={styles.viewprof} >
           
         <Text style={styles.btnn}>View Profile </Text>
         
    </TouchableHighlight>

    <TouchableHighlight onPress={()=> props.navigation.navigate("profile")}>
          <Image source={require('../assets/drprofile/eyes.png')} style={styles.eye}/>  
    </TouchableHighlight>

    </View>
      
    </View>
      
      </View>

     <View style={styles.setting}>
        <View style={styles.acc}>
            <TouchableHighlight> 
            <Image source={require('../assets/drprofile/user.png')}/>
            </TouchableHighlight>
            <TouchableHighlight>
            <Text style={styles.tit}>Account Settings</Text>
            </TouchableHighlight>
        </View>

        <View style={styles.acc}>
            <TouchableHighlight> 
            <Image source={require('../assets/drprofile/privacy.png')}/>
            </TouchableHighlight>
            <TouchableHighlight>
            <Text style={styles.tit}>Account Privacy</Text>
            </TouchableHighlight>
        </View>


        <View style={styles.acc}>
            <TouchableHighlight> 
            <Image source={require('../assets/drprofile/policy.png')}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> props.navigation.navigate("terms")}>
            <Text style={styles.tit}>Privacy & Policy </Text>
            </TouchableHighlight>
        </View>


        <View style={styles.acc}>
            <TouchableHighlight> 
            <Image source={require('../assets/drprofile/help.png')}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> props.navigation.navigate("helpsupport")}>
            <Text style={styles.tit}>Help & Support </Text>
            </TouchableHighlight>
        </View>

        
        <View style={styles.acc}>
            <TouchableHighlight> 
            <Image source={require('../assets/drprofile/share.png')}/>
            </TouchableHighlight>
            <TouchableHighlight>
            <Text style={styles.tit}> Share App </Text>
            </TouchableHighlight>
        </View>

        
        <View style={styles.acc}>
            <TouchableHighlight> 
            <Image source={require('../assets/drprofile/rating.png')}/>
            </TouchableHighlight>
            <TouchableHighlight>
            <Text style={styles.tit}> Rating Us </Text>
            </TouchableHighlight>
        </View>


        
        <View style={styles.logout}>
            <TouchableHighlight> 
            <Image source={require('../assets/drprofile/logout.png')}/>
            </TouchableHighlight>
            <TouchableHighlight>
            <Text style={styles.logclr}>Log out  </Text>
            </TouchableHighlight>
        </View>
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
    profile:{
        flexDirection: 'row',
        top: 20,
        left: 10,
     },

     imge:{

        width: 100,
        height: 100, 
        
        backgroundColor: 'lightgray',
        borderRadius: 50,
       padding: 10, 
   
   
   
   },
   drinfo:{
     flexDirection: 'column', 
     left: 8,
   },
   
   verified:{
     flexDirection: 'row',
   },

   dctr:{
    fontFamily: 'Poppins',
  fontSize: 18,
  fontWeight: '600',
  lineHeight: 21,
  textAlign: 'left',
  color: '#192608',
  width: 139,
  height: 23,
  top: 10,
   },

  icon:{
    width: 13.89,
  height: 14,
  right: 8,
  top: 14,
  },
  titl:{
    FontSize: 12,
    fontWeight: '400',
    top: 15,
  },

  eyes:{
      flexDirection: 'row', 
  }, 

  eye:{
      top: 32,
      right: 37,
  },

  viewprof:{
    top: 20,
    width: 130, 
    height: 38, 
    borderRadius: 6, 
    borderWidth: 1, 
    borderColor:  '#00A746',
    padding: 8,
   
     
  } ,

  setting:{
    flexDirection: 'column', 
    margin: 10,
    
  }, 

  acc:{
    flexDirection: 'row', 
    top:55,
    left: 15,
  },

  tit:{

fontFamily: 'Poppins',
fontSize: 16,
fontWeight: '400',
lineHeight: 26,
letterSpacing: 0.05,
textAlign: 'left',
left: 10, 
margin: 10,
color: '#192608',

  },
  logout:{
    flexDirection: 'row', 
    top:75,
    left: 15,
  },
  logclr:{

    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.05,
    textAlign: 'left',
    left: 18, 
    color: 'red',
      },
  

});
export default Drprofile; 
