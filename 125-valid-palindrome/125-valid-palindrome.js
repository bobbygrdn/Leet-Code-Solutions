/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const ALPHA_NUM = /^[a-zA-Z0-9]$/;

    let p1 = 0;
    let p2 = s.length-1;
    
    while (p1 < p2) {
        while (p1 < p2 && !ALPHA_NUM.test(s[p1])) {
            p1++;
        }
        while (p1 < p2 && !ALPHA_NUM.test(s[p2])) {
            p2--;
        }

        if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
            return false;
        }

        p1++;
        p2--;
    }

    return true;
};
