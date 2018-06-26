interface LoginInfo {
    username:string,
    password:string
}

interface RegisterInfo extends LoginInfo {
    email:string
}
export { LoginInfo , RegisterInfo};