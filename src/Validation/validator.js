const mongoose=require('mongoose')

const isValidEmail = (value) => {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  };
const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
const isValidPassword = (pw) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/.test(pw))
        return true
}
const isValidName = (name) => {
    if (/^[-a-zA-Z_:,.' ']{1,100}$/.test(name))
        return true
}
const isValidNumber=function(value){
    let mobileNum=/^(\+\d{1,3}[- ]?)?\d{10}$/
    if(mobileNum.test(value))
    return true
}
// module.exports.emailRegex=emailRegex
module.exports = {isValidEmail,isValid,isValidPassword,isValidName}