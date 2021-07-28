export function setToken(ID,isLoggedin){
    localStorage.setItem("isLoggedin",JSON.stringify({token:ID,status:isLoggedin}))
}
export function getToken(){
    const key = JSON.parse(localStorage.getItem("isLoggedin"))
    return key
}
export function removeToken(){
    console.log('here')
    localStorage.removeItem("isLoggedin")
}