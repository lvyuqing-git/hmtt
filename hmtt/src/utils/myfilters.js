export const dateFormat = (time)=>{
    time = new Date(time)
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let day = time.getDate()
    return `${year}-${month}-${day}`
}