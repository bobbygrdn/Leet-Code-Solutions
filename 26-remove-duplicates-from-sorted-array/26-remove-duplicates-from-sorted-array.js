/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let map = {}
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            nums.splice(i, 1)
            i--;
        }
    }
    return nums.length
};