
import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Drafts = () => {
   const [visible, setVisible]= useState(false); 
     return (
      <>
      
      <View style={styles.main} >

        <View style={styles.info} >
            <View style={styles.info1}>
              <Text style={styles.seven}> Last 7 Days </Text>
            </View>

            <View style={styles.info2}> 
            <Text style={styles.tcxt1}> filter</Text>
            </View>
        </View>

     <View>
        <TouchableHighlight onPress={()=>setVisible(true)}>
        <Image source={require('../assets/draft/dot.png')} style={styles.img}/>
        </TouchableHighlight>
        <Modal transparent visible={visible}>
             <SafeAreaView style={styles.modal} onTouchStart={()=> setVisible(false)}>
              <Text style={{fontSize: 16, color:'#F7BB07',fontWeight: '400', 
}}> Edit Data </Text>
              <Text style={{margin:5, fontSize: 16, color:'#F7BB07',fontWeight: '400', 
}}>Delete </Text>

             </SafeAreaView>

        </Modal>
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
    info:{
        flexDirection: 'row',

    },
    info1:{
        top: 40,
        left: 16,
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
        top: 40,
        left: 136,
       
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
    img:{
        top: 90,
       left: '90%', 

    },
    modal:{
        width: 150,
        height: 85,
        backgroundColor: '#FFF',
        elevation: 3, 
       top: 200, 
       left: 140, 
       borderRadius: 6, 
       
    },
});
export default Drafts; 
