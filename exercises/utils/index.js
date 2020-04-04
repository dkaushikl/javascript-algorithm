class utills {
    static checkStringEmpty(str) {
        return str == null || str == undefined || str.trim().length == 0 ? false : true;
    }

    static checkNumberEmpty(num) {
        if (typeof (num) === 'number') {
            return true;
        }

        if (!num) {
            return false;
        }

        if (typeof (num) !== 'string' || num.trim().length <= 0) {
            return false;
        }

        const reg = /^.+$/g;
        return reg.test(num);
    }

    static convertToString(num) {
        if (typeof num === 'number') {
            return `${num}`;
        }

        if (!utills.checkNumberEmpty(num)) {
            return '';
        }

        return `${num}`;
    }

    static convertNagativeInteger(num) {
        if (!utills.checkNumberEmpty(num)) {
            return '';
        }

        return -Math.abs(num);
    }

    static convertToNumber(str) {
        if (!utills.checkNumberEmpty(str)) {
            return '';
        }

        return parseFloat(str);
    }

    static checkArrayEmpty(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }

    static clearString(str) {
        return utills.convertToString(str).toLowerCase().replace(/[\W_]/g, '');
    }

    static convertToArray(str, separateSign) {
        return utills.convertToString(str).split(separateSign);
    }
}

module.exports = utills;
