
import axios from 'axios'

const BASE_URL = "http://127.0.0.8:4500"


export const loginHandler =async(payload) => {
   const response =  await axios.post(`${BASE_URL}/login`, payload)
   return response
}


export const signupHandler = async(payload) => {
   const response = await axios.post(`${BASE_URL}/signup`, payload)
   return response
}


export const getAllUser =async () => {
   const response = await axios.get(`${BASE_URL}/allUsers`)
   return response
}