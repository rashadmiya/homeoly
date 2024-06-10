
import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight, View,
} from "react-native";




const Maindashboard =(props)=>{
      
  return(
  <>
  <ScrollView>
  <View style={styles.main}>

  <View style={styles.profile}>
    <TouchableHighlight onPress={()=> props.navigation.navigate("drprofile")}>
      <Image style={styles.imge}/>
    </TouchableHighlight>

   <View style={styles.drinfo}>
     <Text style={styles.prtxt}> Welcome back, </Text>
    <View style={styles.verified}> 
       <Text style={styles.dctr}>Dr. Ariful Haque </Text>
       <Image   source={require('../assets/dashboard/check.png')} style={styles.icon}/>
       </View>
       <Text style={styles.titl}> B.H.M.S, DU</Text>
   

    </View>
   <View style={styles.sun}>
    <Image source={require('../assets/dashboard/icons.png')} style={styles.icn}/> 
    <Text style={styles.gomor}> Good Morning </Text>
   </View>


   

  </View>

  <View style={styles.slide}> 
    <Image source={require('../assets/dashboard/quote.png')} style={styles.pic} />
  </View>

<View > 
  <Text style={styles.pateint}>Patient Overview </Text>
</View>

<View style={styles.overview}>
  <View style={styles.overview1}>
    <Image source={require('../assets/dashboard/man.png')} style={styles.men} />
    <Text style={styles.num}>0</Text>
    <Text style={styles.txt}>Total Patient </Text>
  </View>
  <View style={styles.overview2}>
  <Image source={require('../assets/dashboard/male.png')} style={styles.men} />
    <Text style={styles.num}>0</Text>
    <Text style={styles.txt1}> Male </Text>
  </View>
  <View style={styles.overview3}>
  <Image source={require('../assets/dashboard/female.png')} style={styles.men} />
    <Text style={styles.num}>0</Text>
    <Text style={styles.txt2}> Female </Text>
  </View>
</View>

<View > 
  <Text style={styles.bill}>Billing Overview </Text>
</View>

<View style={styles.scndoverview}>
<View style={styles.overvieww1}>
    <Image source={require('../assets/dashboard/dollar.png')} style={styles.bill1} />
    <Text style={styles.num1}>0</Text>
    <Text style={styles.billtxt}> 7 days Earning </Text>
</View>

  <View style={styles.overvieww2}>
  <Image source={require('../assets/dashboard/calender.png')} style={styles.bill1} />
    <Text style={styles.num1}>0</Text>
    <Text style={styles.billtxt1}>   Due </Text>
  </View>
</View>

<View > 
  <Text style={styles.drft}>Draft Data  </Text>
</View>
   
   
  <View style={styles.draft}>
  <TouchableHighlight onPress={()=> props.navigation.navigate("drafts")}>
  <Image source={require('../assets/dashboard/draft.png')} style={styles.drimg} />
  </TouchableHighlight>
    <Text style={styles.drf1}>0</Text>
    <Text style={styles.drtxt}>   Total Draft Patient  </Text>
   
  </View>
  

  <View style={styles.btmnav}>
     <View>
      <TouchableHighlight>
        <Image source={require('../assets/dashboard/home.png')} style={styles.btnavbar}/> 
        </TouchableHighlight>
     </View>

     <View>
     <TouchableHighlight onPress={()=> props.navigation.navigate("patientdashboard")}>
        <Image source={require('../assets/dashboard/patient.png')} style={styles.btnavbar}/> 
        </TouchableHighlight>
      </View>

      <View>
      <TouchableHighlight onPress={()=> props.navigation.navigate("addpatient")}>
        <Image source={require('../assets/dashboard/addicon.png')} style={{top: -16, left: 10,}}/> 
        </TouchableHighlight>
      </View>

      <View>
      <TouchableHighlight onPress={()=> props.navigation.navigate("finance")}>
        <Image source={require('../assets/dashboard/finance.png')} style={styles.btnavbar}/> 
        </TouchableHighlight>
      </View>

      <View>
      <TouchableHighlight onPress={()=> props.navigation.navigate("patientprofile")}>
        <Image source={require('../assets/dashboard/profile.png')} style={styles.btnavbar}/> 
        </TouchableHighlight>
      </View>

  </View>


  </View>
  </ScrollView>
  
  </>

  );


};

const styles = StyleSheet.create({

  main:{
    backgroundColor: 'white',
    flex: 1,
    width: "100%",
    height: 890,
    overflow: "hidden",
},
profile:{
   flexDirection: 'row',
   top: 20,
   left: 10,
},
imge:{

     width: 60,
     height: 60, 
     
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
prtxt:{
  fontFamily: 'Poppins',
fontSize: 16,
fontWeight: '400',
lineHeight: 21,
textAlign: 'left',
width: 165,
height: 25,

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

},
icon:{
  width: 13.89,
height: 14,
right: 8,
top: 4,
},
titl:{
  FontSize: 12,
  fontWeight: '400',
   
},
icn:{
  width: 30,
height: 35,
left: 30,
},
gomor:{
  FontSize: 22,
  textAlign: 'center',
  
},
sun:{
   top: 18,
   flexDirection: 'column',
},
pic:{
  width:332,
  height: 145,
  left: 15,
  top: 40,
},
pateint:{
  fontFamily: 'Poppins',
  fontSize: 18,
  fontWeight: '500',
  top: 45,
  left:17,

},
overview:{
  flexDirection: 'row', 
  top: 60,
},
overview1:{
   width: 110,
   height: 120,
   backgroundColor: '#FAFFFC',
   elevation: 10,
   borderRadius: 6,
   margin:5,
},

overview2:{
  width: 110,
  height: 120,
  backgroundColor: '#FAFFFC',
  elevation: 10,
  borderRadius: 6,
  margin: 5, 
},

overview3:{
  width: 110,
  height: 120,
  backgroundColor: '#FAFFFC',
  elevation: 10,
  borderRadius: 6,
  margin: 2,
  top:3,
},

men:{
  width: 27.86,
  height: 30,
  top: 12,
  left: 40.07, 

  
},
num:{
  width: 35,
height: 23,
left: 45,
fontSize: 18,
fontWeight: '600',
top: 23,
},
txt:{
  fontFamily: 'Poppins',
  width: 85,
  height: 20,
  top: 28,
  left: 16,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 19.5, 

},
txt:{
  fontFamily: 'Poppins',
  width: 85,
  height: 20,
  top: 28,
  left: 16,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 19.5, 

},
txt1:{
  fontFamily: 'Poppins',
  width: 85,
  height: 20,
  top: 28,
  left: 32,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 19.5, 

},
txt2:{
  fontFamily: 'Poppins',
  width: 85,
  height: 20,
  top: 28,
  left: 25,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 19.5, 

},
bill:{
  fontFamily: 'Poppins',
  fontSize: 18,
  fontWeight: '500',
  top: 70,
  left:13,

},
scndoverview:{
  flexDirection: 'row', 
  top: 85,
  left: 3,
},
overvieww1:{
  width: 165,
  height: 120,
  backgroundColor: '#FAFFFC',
  elevation: 10,
  borderRadius: 6,
  margin:5,
},
overvieww2:{
  width: 165,
  height: 120,
  backgroundColor: '#FAFFFC',
  elevation: 10,
  borderRadius: 6,
  margin:5,
},


bill1:{
  width: 27.86,
  height: 30,
  top: 12,
  left: 65, 

  
},
num1:{
  width: 35,
height: 23,
left: 75,
fontSize: 18,
fontWeight: '600',
top: 23,
},
billtxt:{
  fontFamily: 'Poppins',
  width:95,
  height: 20,
  top: 28,
  left: 25,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 19.5, 

},

billtxt1:{
  fontFamily: 'Poppins',
  width:95,
  height: 20,
  top: 28,
  left: 55,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 19.5, 

},
drft:{
  fontFamily: 'Poppins',
  fontSize: 18,
  fontWeight: '500',
  top: 90,
  left:13,

},
draft:{
  width: 332,
height: 140,
backgroundColor: '#FAFFFC',
  elevation: 10,
  borderRadius: 6,
 top:110, 
  left: 15,

},
drimg:{
  width: 27.86,
  height: 30,
  top: 22,
  left: 135, 
},
drf1:{
  width: 35,
height: 23,
left: 140,
fontSize: 18,
fontWeight: '600',
top: 33,
},

drtxt:{
  fontFamily: 'Poppins',
  width:125,
  height: 20,
  top: 42,
  left: 85,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 19.5,
}, 

btmnav:{
    width: 360, 
    height: 70, 
    flexDirection: 'row', 
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderColor: '#B0B0B040',
   top: 125,
},

btnavbar:{
  top:9,
  left: 10, 
  margin: 10 ,
}

});
export default Maindashboard; 