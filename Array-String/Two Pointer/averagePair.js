/*
Write a function called averagePair. 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
*/


//Two Pointer pattern to solve this
function averagePair(arr, avg) {
    let start = 0;
    let end = arr.length - 1;
    
    while(start < end) {
        let getAvg = (arr[start] + arr[end]) / 2;
        
        if(getAvg === avg) {
            return true;
        } else if(getAvg < avg) {
            start++;
        } else {
            end--;
        }
    }
    
    return false;
    
}


console.log(averagePair([1, 2, 3], 2.5))