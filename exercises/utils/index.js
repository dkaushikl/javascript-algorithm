function checkStringEmpty(str) {
    return str == null || str == undefined || str.trim().length == 0 ? false : true;
}

function checkNumberEmpty(num) {
    if (typeof (num) === 'number')
        return true;

    if (!num)
        return false;

    if (typeof (num) !== 'string' || num.trim().length <= 0)
        return false

    const reg = /^.+$/g;
    return reg.test(num)
}


module.exports = { checkStringEmpty, checkNumberEmpty };