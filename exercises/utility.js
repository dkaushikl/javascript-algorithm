function checkEmpty(str) {
    return str == null || str == undefined || str.length == 0 ? false : true;
}

module.exports = { checkEmpty };