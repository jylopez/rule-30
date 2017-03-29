module.exports = function (arr) {
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    function newCenterValue (a3) {
        if (arraysEqual(a3, [1,1,1]) ) {
            return 0;
        }
        else if (arraysEqual(a3, [1,1,0]) ) {
            return 0;
        }
        else if (arraysEqual(a3, [1,0,1]) ) {
            return 0;
        }
        else if (arraysEqual(a3, [1,0,0]) ) {
            return 1;
        }
        else if (arraysEqual(a3, [0,1,1]) ) {
            return 1;
        }
        else if (arraysEqual(a3, [0,1,0]) ) {
            return 1;
        }
        else if (arraysEqual(a3, [0,0,1]) ) {
            return 1;
        }
        else if (arraysEqual(a3, [0,0,0]) ) {
            return 0;
        } else {
            return null;
        }
    }

    var oldArr = arr.slice(0);
    var newArr = arr.slice(0);

    // before  111  110  101  100  011  010  001  000
    // after    0    0    0    1    1    1    1    0
    oldArr.unshift(0);
    oldArr.push(0);
    newArr.unshift(0);
    newArr.push(0);

    for (var i = 1; i < oldArr.length - 2; i++) {
        if (oldArr[i] !== 0 && oldArr[i] !== 1) {
            console.warn('Array element must be 1 or 0', typeof oldArr[i])
            return null;
        }
        newArr[i] = newCenterValue(oldArr.slice(i-1, i+2));
    }

    return newArr;
}