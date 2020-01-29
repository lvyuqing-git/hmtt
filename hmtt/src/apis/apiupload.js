import axios from 'axios'

export const uploadFile = (data)=>{
    return axios({
        url : '/upload',
        method : 'post',
        data
    })
}