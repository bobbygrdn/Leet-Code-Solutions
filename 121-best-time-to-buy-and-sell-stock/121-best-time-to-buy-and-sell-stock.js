/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let max = 0;
    let profit = 0;
    let p1 = 0;
    let p2 = 1;

    while (p2 < prices.length) {
        if(prices[p1] < prices[p2]) {
            profit = prices[p2] - prices[p1]
        } else {
            p1 = p2;
        }
        if(max < profit) {
            max = profit
        }
        p2++
    }
    return max;
};