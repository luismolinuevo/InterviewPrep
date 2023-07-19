
//sliding window 
//O(N) runtime
//0(1) space
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let max = 0;

    while(right < prices.length) { //go to end with right
        if(prices[right] <= prices[left]) { //if right is smaller then left, then make left = right becauase it has to check the low values
            left = right
        }

        let window = prices[right] - prices[left];  //get the amount gained if you sell
        max = Math.max(max, window) //compare to max
        right++;
    }

    return max;
};


//sliding window just means you have something that slides in the array or string