import axios from '../utils/myaxios'
export const getColumnList = ()=>{
    return axios({
        url : '/category',
        
    })
}
export const getArticleList = (params)=>{
    return axios({
        url : '/post',
        params
    })
}
export const getArticleInfo=(id)=>{
    return axios({
        url : `/post/${id}`
    })
}
//获取文章评论列表
export const post_comment = (id)=>{
    return axios({
        url :`/post_comment/${id}`,
    })
}