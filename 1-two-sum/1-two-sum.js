/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newArray = [];
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let current = target - nums[i];
        
        if(current in map) {
            let logged = nums.indexOf(current)
            newArray.push(logged, i);
        } 
        map[nums[i]] = i;
        }
    if(newArray.length !== 0) {
        return newArray;
    } else {
        return 'Could not find pairs';
    };

};