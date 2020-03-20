class utills {
    static checkStringEmpty(str) {
        return str == null || str == undefined || str.trim().length == 0 ? false : true;
    }

    static checkNumberEmpty(num) {
        if (typeof (num) === 'number')
            return true;

        if (!num)
            return false;

        if (typeof (num) !== 'string' || num.trim().length <= 0)
            return false

        const reg = /^.+$/g;
        return reg.test(num)
    }

    static convertToString(num) {
        if (typeof (num) === 'number')
            return `${num}`;

        return num
    }
}

module.exports = utills;