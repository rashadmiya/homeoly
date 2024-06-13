import * as React from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity } from 'react-native';
import draftDoc from "../testdata/draft-data";
import PatientModal from "./modals/PatientModal";
import { useNavigation } from "@react-navigation/native";
import ContextModal from "./modals/ContextModal";
import { apiService } from "../src/services/api-service";

const Patientdashboard = () => {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [allPatient, setAllPatient]= React.useState([]);

const navigation = useNavigation();
  const closeModal = () => {
      setSelectedOption('');
      setModalVisible(false);
  };

  const handleOption = (item) => {
      setSelectedItem(item);
      setModalVisible(!modalVisible);
  };

  const confirmDelete = () => {
      // Perform deletion logic here
      setModalVisible(false);
      console.log(`Deleting item: ${selectedItem.name}`);
  };

  React.useEffect(()=>{
    apiService.getAllPatient().then((res)=>{
      const data = res.data.map(item=>{return {id: item._id, ...item}})
      setAllPatient(data)
    })
  },[])

  const draftItem = (data) => {
    const { item } = data;
    return (
      <Pressable style={styles.item} onPress={()=> navigation.navigate('patient',{item})} >
        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <View style={styles.dateTime}>
            <Text style={styles.dateTimeText}>{item?.dateOfBirth}</Text>
            {/* <Text style={styles.dateTimeText}>{item.}</Text> */}
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{item?.fullName}</Text>
            <Text>{item.gender}</Text>
            <Text>{item.phone}</Text>
          </View>
        </View>
        <ContextModal item={item} />
      </Pressable>
    )
  }

  return (<>
    <View style={styles.main}>

      <View style={styles.finoverview}>
        <View>
          <Text style={styles.txt11}> Patient Overview </Text>

        </View>
        <View style={styles.line}></View>

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

      </View>

      <View>
        <TextInput placeholder="Search by name or phone" style={styles.input1} />
      </View>

      <View style={styles.info} >
        <View style={styles.info1}>
          <Text style={styles.seven}> Last 7 Days </Text>
        </View>

        <View style={styles.info2}>
          <Text style={styles.tcxt1}> filter</Text>
        </View>
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={allPatient}
        renderItem={draftItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

    </View>


    <PatientModal modalVisible={modalVisible} closeModal={closeModal} selectedItem={selectedItem} confirmDelete={confirmDelete} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />


  </>
  )};

const styles = StyleSheet.create({


  main: {
    backgroundColor: 'white',
    flex: 1,
    width: "100%",
    height: 920,
    overflow: "hidden",
  },

  finoverview: {
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
  txt11: {
    color: '#4F4F4F',
    top: 10,
    left: 8,
    fontSize: 16,
    width: 130,
  },



  line: {
    width: 340,
    top: 28,
    borderWidth: 0.8,
    borderColor: '#AFD59F',


  },

  overview: {
    flexDirection: 'row',
    top: 40,
  },
  overview1: {
    width: 105,
    height: 120,
    backgroundColor: '#FAFFFC',
    elevation: 10,
    borderRadius: 6,
    margin: 5,
  },

  overview2: {
    width: 105,
    height: 120,
    backgroundColor: '#FAFFFC',
    elevation: 10,
    borderRadius: 6,
    margin: 5,
  },

  overview3: {
    width: 103,
    height: 120,
    backgroundColor: '#FAFFFC',
    elevation: 10,
    borderRadius: 6,
    margin: 2,
    top: 3,
  },

  men: {
    width: 27.86,
    height: 30,
    top: 12,
    left: 40.07,


  },
  num: {
    width: 35,
    height: 23,
    left: 45,
    fontSize: 18,
    fontWeight: '600',
    top: 23,
  },
  txt: {
    fontFamily: 'Poppins',
    width: 85,
    height: 20,
    top: 28,
    left: 16,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.5,

  },
  txt: {
    fontFamily: 'Poppins',
    width: 85,
    height: 20,
    top: 28,
    left: 16,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.5,

  },
  txt1: {
    fontFamily: 'Poppins',
    width: 85,
    height: 20,
    top: 28,
    left: 32,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.5,

  },
  txt2: {
    fontFamily: 'Poppins',
    width: 85,
    height: 20,
    top: 28,
    left: 25,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.5,

  },

  input1: {

    width: 342,
    height: 52,
    top: '55%',
    left: 3,
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

  info: {
    flexDirection: 'row',

  },
  info1: {
    top: 50,
    left: 10,
  },
  seven: {
    width: 133,
    height: 31,
    borderRadius: 3,
    elevation: 4,
    backgroundColor: '#E3FFEF',
    fontSize: 13,

    left: 5,

  },

  info2: {
    top: 50,
    left: 136,

  },
  tcxt1: {
    width: 80,
    height: 31,
    borderRadius: 3,
    elevation: 4,
    backgroundColor: '#E3FFEF',
    color: ' #192608',
    fontSize: 14,

    left: 5,
  },
  ///
  item: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 8,
    justifyContent: 'space-between'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10
  },
  dateTimeText: {
    fontSize: 14,
    color: '#666'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  },

});
export default Patientdashboard; 