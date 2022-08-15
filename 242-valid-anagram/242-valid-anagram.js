/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const objA = createObj(s)
    const objB = createObj(t)

    if(Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }

    for(let key in objA) {
        if(objA[key] !== objB[key]) {
            return false
        }
    }
    return true

    function createObj(str) {
        const obj = {}
        for(let elem of str) {
            if(!obj[elem]) {
                obj[elem] = 1
            } else {
                obj[elem] += 1
            }
        }
        return obj
    }
};