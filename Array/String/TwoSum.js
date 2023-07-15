//leetcode 1


//Hashmap solution
//Runtime O(N)
//SpaceTime O(N)
function twoSumHashMap(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        //gets the difference then checks if it exist in the hashmap
        const difference = target - nums[i];

        if(map.has(difference)) {
            return [map.get(difference), i];
        }

        map.set(nums[i], i)
    }

    return []
}

//Brute Force 
//Runtime O(N^2) has a double for loop
//SpaceTime O(1)  it uses no space. Im not saving data anywhere

function twoSumBruteForce(nums, target) {
    for(let i = 0; nums.length; i++) {
        for(let j = i+1; nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}


