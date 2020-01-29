import axios from '../utils/myaxios'

export const login = data => {
	return axios({
		url: '/login',
		method: 'post',
		data
	})
}
export const alterHead_img = (id,data)=>{
    console.log(id)
    console.log(data)
    
    return axios({
        url : `/user_update/${id}`,
        method : 'post',
        data
    })
}