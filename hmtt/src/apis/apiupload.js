import axios from 'axios'

export const uploadFile = (data)=>{
    console.log(data);
    
    return axios({
        url : '/upload',
        method : 'post',
        data
    })
}