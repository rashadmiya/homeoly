import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
const Finance = (props) => {
     const [visible, setVisible]= useState(false); 
     return (
      <>
      <View style={styles.main}>
       <View  style={styles.finoverview}>   
       <View style={styles.fin}> 
          <Text style={styles.txt1}> Finance Overview </Text>
          <Text style={styles.txt2}> Today's </Text>
       </View>
       <View style={styles.line}></View>

       <View style={styles.scndoverview}>
<View style={styles.overvieww1}>
    <Image source={require('../assets/dashboard/dollar.png')} style={styles.bill1} />
    <Text style={styles.num1}>0</Text>
    <Text style={styles.billtxt}>  Todays Earning </Text>
</View>

  <View style={styles.overvieww2}>
  <Image source={require('../assets/dashboard/calender.png')} style={styles.bill1} />
    <Text style={styles.num1}>0</Text>
    <Text style={styles.billtxt1}>   Due </Text>
  </View>
</View>

       </View> 

       <View > 
  <Text style={styles.bill}>Patient Billing  </Text>
  <View style={styles.line1}></View>
</View>


<View style={styles.info} >
            <View style={styles.info1}>
              <Text style={styles.seven}> Last 7 Days </Text>
            </View>

            <View style={styles.info2}> 
            <Text style={styles.tcxt1}> filter</Text>
            </View>
        </View>
   <View style={styles.table}>

    <Text style={styles.prtable}> Patient </Text>
    <Text style={styles.table1}> Total </Text>
    <Text style={styles.table1}> Recieve</Text>
    <Text style={styles.table1}> Due </Text>
    
     </View> 
     <View style={styles.line2}></View>

     <View>
        <TouchableHighlight onPress={()=>setVisible(true)}>
        <Image source={require('../assets/draft/dot.png')} style={styles.img}/>
        </TouchableHighlight>
        <Modal transparent visible={visible} animationType='fade'>
             {/* <SafeAreaView style={styles.modal} onTouchStart={()=> setVisible(false)}> */}
             <View style={styles.modal}>
              <Text style={{fontSize: 16, color:'#4F4F4F',fontWeight: '400', borderColor:'#A8A8A866', borderBottomWidth:1,
}}>    Update Due </Text>
           <TouchableOpacity onPress={()=> props.navigation.navigate("paymenthistory")} > 
              <Text style={styles.paymenthis}> Payment History
               </Text> 
          </TouchableOpacity> 

<Text style={{margin:5, fontSize: 16, color:'#4F4F4F',fontWeight: '400', 
}}>   Text/Call </Text>
</View>
             {/* </SafeAreaView> */}

        </Modal>
     </View>


     <View style={styles.btmnav}>
     <View>
      <TouchableHighlight>
        <Image source={require('../assets/finance/home.png')} style={styles.btnavbar}/> 
        </TouchableHighlight>
     </View>

     <View>
     <TouchableHighlight>
        <Image source={require('../assets/dashboard/patient.png')} style={styles.btnavbar}/> 
        </TouchableHighlight>
      </View>

      <View>
      <TouchableHighlight>
        <Image source={require('../assets/dashboard/addicon.png')} style={{top: -16, left: 10,}}/> 
        </TouchableHighlight>
      </View>

      <View>
      <TouchableHighlight>
        <Image source={require('../assets/finance/finan.png')} style={styles.btnavbar}/> 
        </TouchableHighlight>
      </View>

      <View>
      <TouchableHighlight>
        <Image source={require('../assets/dashboard/profile.png')} style={styles.btnavbar}/> 
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
          height: 950,
          overflow: "hidden",
      },
   fin:{
      flexDirection: 'row',

   },
finoverview:{
     width: 340, 
     height: 204,
     top: 20,
     left: 10, 
     elevation: 5, 
     backgroundColor: '#FFFFFF',
     borderColor: '#83838340',
     borderWidth: 1, 
     borderRadius: 6, 

},
    txt1:{
       color: '#4F4F4F',
       top: 10,
       left: 8,
    },

    txt2:{
     color: '#4F4F4F',
     top: 10,
     left: 148,
  },

line:{
     width: 340, 
top: 28,
borderWidth: 0.8,
borderColor: '#AFD59F',


},

scndoverview:{
     flexDirection: 'row', 
     top: 35,
     left: 0,
   },
   overvieww1:{
     width: 152,
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
     width:105,
     height: 20,
     top: 28,
     left: 20,
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

   bill:{
     fontFamily: 'Poppins',
     fontSize: 18,
     fontWeight: '500',
     top: 35,
     left:13,
   
   },


   line1:{
     width: 330, 
top: 48,
left: 10, 
borderWidth: 0.8,
borderColor: '#AFD59F',


},


info:{
     flexDirection: 'row',

 },
 info1:{
     top: 60,
     left: 7,
 },
 seven:{
     width: 133,
     height: 31,
     bordeRadius: 3,
     elevation: 4, 
     backgroundColor: '#E3FFEF',
     fontSize: 13,
     
     left: 5,

 },

 info2:{
     top: 60,
     left: 126,
    
 },
 tcxt1:{
     width: 80,
     height: 31,
     bordeRadius: 3,
      elevation: 4, 
     backgroundColor: '#E3FFEF',
     color: ' #192608',
     fontSize: 14,
   
    left: 5,

 },

 table:{
      flexDirection: 'row', 
      top: 70,
      left: 10, 
      
 },
 prtable:{
  top: 17, 
 },
 table1:{
     left: 70, 
     margin: 16,
 },
   
 line2:{
     width: 330, 
top: 65,
left: 10, 
borderWidth: 0.8,
borderColor: '#AFD59F',


},

img:{
     top: 90,
    left: '90%', 

 },
 modal:{
     width: 150,
     height: 85,
     backgroundColor: '#FFF',
     elevation: 3, 
    top: '78%', 
    left: 170, 
    borderRadius: 6, 
    
 }, 
 
 btmnav:{
     width: 360, 
     height: 70, 
     flexDirection: 'row', 
     backgroundColor: '#fff',
     borderWidth: 1, 
     borderColor: '#B0B0B040',
    top: 155,
 },
 
 btnavbar:{
   top:9,
   left: 10, 
   margin: 10 ,
 },
 paymenthis:{
     margin:5, fontSize: 16,
      color:'#F7BB07',
      fontWeight: '400', 
      borderColor:'#A8A8A866',
       borderBottomWidth:1,
 },
 
});
export default Finance; 