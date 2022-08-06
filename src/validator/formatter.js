const ab=function(){
    const a='   functionUp    '
    console.log(a.trim())
}

const ac=function(){
    const b='CHANGE IT TO LOWER CASE'
    console.log(b.toLowerCase())
}

const ad=function(){
    const c='Change it to upper case'
    console.log(c.toUpperCase())
}

module.exports.tr=ab
module.exports.lo=ac
module.exports.uq=ad