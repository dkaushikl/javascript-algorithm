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
        return reg.test(num);
    }

    static convertToString(num) {
        if (typeof num === 'number')
            return `${num}`;

        if (!utills.checkNumberEmpty(num))
            return '';

        return `${num}`;
    }

    static convertNagativeInteger(num) {
        if (!utills.checkNumberEmpty(num))
            return '';

        return -Math.abs(num);
    }
}

module.exports = utills;