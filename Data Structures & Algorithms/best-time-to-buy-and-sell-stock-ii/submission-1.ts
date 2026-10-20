class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let i = 0;
        let j = 1;
        let buy_flag = false;
        while (j < prices.length) {
            if (prices[i] < prices[j] && buy_flag == false) {
                profit -= prices[i];
                buy_flag=true
            }
            if(prices[i]>=prices[j] && buy_flag == true){
                profit+= prices[i];
                buy_flag = false
            } 
            // console.log(prices[i],prices[j],profit)
            i++,j++
        }
        if(buy_flag==true) profit+=prices.pop()
        return profit;
    }
}
