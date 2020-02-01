import axios from '../utils/myaxios'
//用户登录
export const login = data => {
	return axios({
		url: '/login',
		method: 'post',
		data
	})
}
//修改用户信息
export const alterInfo = (id,data)=>{
    // console.log(id);
    // console.log(data);
    
    return axios({
        url : `/user_update/${id}`,
        method : 'post',
        data
    })
}
//获取用户信息
export const userInfo = (id)=>{
    return axios({
        url : `/user/${id}`,
    })
}
//关注
export const user_follows = (id)=>{
    console.log(id);
    
    return axios({
        url : `/user_follows/${id}`
    })
}
//取关
export const user_unfollow = (id)=>{
    console.log(id);

    return axios({
        url : `/user_unfollow/${id}`
    })
}
