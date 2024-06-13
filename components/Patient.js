


import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PatientModal from './modals/PatientModal';
import PrescriptionModal from './modals/PrescriptionModal';
import CreatePrescriptionModal from './modals/CreatePrescriptionModal';


const Patient = ({ route, navigation }) => {
     const { item } = route.params;
     const [selectedOption, setSelectedOption] = React.useState('');
     const [modalVisible, setModalVisible] = React.useState(false);
     const [selectedItem, setSelectedItem] = React.useState(null);
     const [createPrescriptionModalVisible, setCreatePrescriptionModalVisible] = React.useState(false);

     const closeModal = () => {
          setSelectedOption('');
          setModalVisible(false);
     };

     const closeCreatePrescriptionModal = () => {
          setCreatePrescriptionModalVisible(false);
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

     return (
          <View style={{ flex: 1 }}>
               <View style={styles.item} >
                    <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
                    <View style={styles.infoContainer}>
                         <View style={styles.details}>
                              <Text style={styles.name}>{`${item.name} (${item.experience})`}</Text>
                         </View>
                         <Text>{item.location}</Text>

                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                              <View style={{ backgroundColor: '#E3FFEF', padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
                                   <Text>Text/call</Text>
                              </View>

                              <View style={{ backgroundColor: '#E3FFEF', padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
                                   <Text>Billing</Text>
                              </View>

                              <View style={{ backgroundColor: '#E3FFEF', padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
                                   <Text>Info</Text>
                              </View>
                         </View>
                    </View>

               </View>

               <View style={[styles.px15,]}>
                    <View style={[styles.bgWhite]}>
                         <Text style={styles.name}>Prescription History</Text>
                         <View style={[styles.separator, { marginTop: 5 }]} />
                    </View>
               </View>

               <View style={[styles.px15,]}>
                    <View style={[styles.bgWhite]}>
                         <View style={styles.dateTime}>
                              <Text style={styles.dateTimeText}>{item.date}</Text>
                              <Text style={styles.dateTimeText}>{item.time}</Text>
                         </View>

                         <View style={[styles.justifyBetween, styles.mt10, { padding: 5 }]}>
                              <Text style={[styles.dateTimeText, { flex: 1, }]}>Rush Tox 200 + 2 bottle + 2 Span, K.P 30x 6 Tab. 2 Times a day</Text>
                              <PrescriptionModal />
                         </View>
                    </View>
                    <View style={[styles.separator, { marginTop: 5 }]} />
               </View>


               <View style={[styles.px15,]}>
                    <View style={[styles.bgWhite]}>
                         <View style={styles.dateTime}>
                              <Text style={styles.dateTimeText}>{item.date}</Text>
                              <Text style={styles.dateTimeText}>{item.time}</Text>
                         </View>

                         <View style={[styles.justifyBetween, styles.mt10, { padding: 5 }]}>
                              <Text style={[styles.dateTimeText, { flex: 1, }]}>Rush Tox 200 + 2 bottle + 2 Span, K.P 30x 6 Tab. 2 Times a day</Text>
                              <PrescriptionModal />
                         </View>
                    </View>
                    <View style={[styles.separator, { marginTop: 5 }]} />
               </View>

               <View style={[styles.px15,]}>
                    <View style={[styles.bgWhite]}>
                         <View style={styles.dateTime}>
                              <Text style={styles.dateTimeText}>{item.date}</Text>
                              <Text style={styles.dateTimeText}>{item.time}</Text>
                         </View>

                         <View style={[styles.justifyBetween, styles.mt10, { padding: 5 }]}>
                              <Text style={[styles.dateTimeText, { flex: 1, }]}>Rush Tox 200 + 2 bottle + 2 Span, K.P 30x 6 Tab. 2 Times a day</Text>
                              <PrescriptionModal />
                         </View>
                    </View>
                    <View style={[styles.separator, { marginTop: 5 }]} />
               </View>

               <View style={{ position: 'absolute', bottom: 0, right: 0, flexDirection: 'row', justifyContent: 'flex-end', }}>
                    <TouchableOpacity style={{ backgroundColor: '#00A746', width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 70 }}
                         onPress={() => {
                              setCreatePrescriptionModalVisible(true);
                              console.log("create prescription open")
                         }}
                    >
                         <Text style={{ color: '#fff', fontSize: 35 }}>+</Text>
                    </TouchableOpacity>
               </View>

               <CreatePrescriptionModal closeModal={closeCreatePrescriptionModal}
                    modalVisible={createPrescriptionModalVisible} />

          </View>
     )
};

const styles = StyleSheet.create({
     item: {
          flexDirection: 'row',
          padding: 20,
          backgroundColor: '#f9f9f9',
          borderRadius: 10,
          marginVertical: 8,
          justifyContent: 'space-between'
     },
     avatar: {
          width: 100,
          height: 100,
          borderRadius: 60,
          marginRight: 15
     },
     infoContainer: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',

     },
     justifyBetween: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 10,

     },
     px15: {
          paddingHorizontal: 15
     },

     mt10: {
          marginTop: 10
     },

     bgWhite: {
          backgroundColor: '#f9f9f9',
     },

     dateTime: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10
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
export default Patient;




