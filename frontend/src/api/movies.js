import { api } from "./baseApi";

const token = localStorage.getItem('auth-token')

export const uploadTrailer= async (formData)=>{
    try {
      return await api.post('/movie/upload-trailer', formData , {
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type':'multipart/form-data'
        }
       })
        
    } catch (error) {
        console.log(error);
    }

}