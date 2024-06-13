import axios from "axios";

// const baseUrl = 'http://192.168.0.214:5000/';
const baseUrl = 'https://homeolyserver.onrender.com/';

const endpoints = {
    SIGNUP: "auth/api/user/signup",
    VERIFY: "auth/api/user/verify-otp",
    SIGNIN: "auth/api/user/signin",
    ADD_PATIENT: "api/patients/add-patient",
    UPDATE_PATIENT: "api/patients/update-patient",
    GET_ALL_PATIENT: "api/patients",
    DELETE_PATIENT: "api/patients/delete-patient",
    ADD_BILL : "api/create-billing-overview",
    ALL_BILLS: "api/get-all-billing-overview"
}
export const apiService = {
    signup: async (formData)=>
        await axios.post(baseUrl + endpoints.SIGNUP, formData),
    verifyOTP: async (formData)=> await axios.post( baseUrl + endpoints.VERIFY, formData),
    signin: async (formData)=> await axios.post(baseUrl+ endpoints.SIGNIN, formData),
    addPatient: async (formData)=> await axios.post(baseUrl+ endpoints.ADD_PATIENT, formData),
    updatePatient: async (formData, id)=> await axios.put(`${baseUrl}${endpoints.UPDATE_PATIENT}/${id}`, formData),
    getAllPatient: async()=> await axios.get(baseUrl+ endpoints.GET_ALL_PATIENT),
    deletePatient: async(id)=> await axios.delete(`${baseUrl}${endpoints.DELETE_PATIENT}/${id}`),
    addBill: async(formData)=> await axios.post(`${baseUrl}${endpoints.ADD_BILL}`,formData),
    getAllBill: async(formData)=> await axios.get(`${baseUrl}${endpoints.ALL_BILLS}`, formData)
}