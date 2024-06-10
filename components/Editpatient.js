import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

const Editpatient = (props) => {

     return (
      <>
      <ScrollView> 
      <View style={styles.main}> 

        <View style={styles.profile}> 
        <Image style={styles.imge}/>
        <Image  source={require('../assets/editprofile/camera.png')} style={styles.icon}/>

        </View>

      <View style={styles.editable}>

        <View>
            <Text style={styles.name}>Full Name * </Text>
        
            <TextInput
 placeholder="Email or Phone" 
 style={styles.input1}
 />

    </View>





    <View>
            <Text style={styles.name}>Date of Birth  * </Text>
        
     <View style={styles.date}>
     <TextInput
 placeholder="Day" 
 style={styles.birth}
 />

<TextInput
  placeholder="Month" 
 style={styles.birth}
 />

<TextInput
  placeholder="Year" 
 style={styles.birth}
 />

     </View>
           

    </View>


    <View>
            <Text style={styles.name}>Gender * </Text>
        
            <TextInput

 style={styles.input1}
 />

    </View>


    <View>
            <Text style={styles.name}>Phone * </Text>
        
            <TextInput

 style={styles.input1}
 />

    </View>

    <View>
            <Text style={styles.name}>Email * </Text>
        
            <TextInput

 style={styles.input1}
 />

    </View>


    <View>
            <Text style={styles.name}>Religion * </Text>
        
            <TextInput

 style={styles.input1}
 />

    </View>


    <View>
            <Text style={styles.name}>Present Address  * </Text>
        
            <TextInput
 placeholder="Country" 
 style={styles.input1}
 />

    </View>

    <View style={styles.date}>
     <TextInput
 placeholder="State" 
 style={styles.birth1}
 />

<TextInput
  placeholder="City" 
 style={styles.birth1}
 />


     </View>
<View>
     <TextInput
 placeholder="Apertment , suite etc." 
 style={styles.input1}
 />
   </View>

   <View> 
   <TouchableHighlight>
    <Text style={styles.buton}>Update </Text>
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
        height: 1050,
        overflow: "hidden",
    },
    profile:{
       top: 20, 
       left: 90,
    },
    imge:{

        width: 100,
        height: 100, 
        left: 20,
        backgroundColor: 'lightgray',
        borderRadius: 50,
       padding: 10, 
   
   
   
   },
   icon:{
      top: -35, 
      left: 95, 
   },

   name:{
     fontSize: 14, 
     fontWeight: '500',
     top: 20,
     left: 20,
     color: '#868D7E',
   },
   input1:{
    
    width: 322,
    height: 52,
    top: '25%',
    left: 10,
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

      date:{
         flexDirection: 'row', 

      },

      birth:{
    
        width: 100,
        height: 52,
        top: '6%',
        left: 9,
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
    birth1:{
      
    
         width: 155,
         height: 52,
         top: '6%',
         left: 9,
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

    buton: {
      height: 52, 
      width:332, 
      backgroundColor: '#4CAF50',
      borderRadius: 14, 
      left: 12,
      top: 50,
      textAlign: 'center', 
      fontSize: 18, 
      color: '#fff',
      fontFamily: 'Poppins',
      lineHeight: 20.8, 
     
     padding:12, 
     
   },

});
export default Editpatient; 