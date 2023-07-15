//Using a set
//Runtime O(N)
//Spacetime O(N)
function containsDuplicate(arr) {
    const set = new Set(); 

    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])) {
            return true
        } else {
            set.add(arr[i])
        }
    }

    return false;
}

//Another way that this could be done is is buy using sorting the array and checking if the i and j(j being one ahead of i) is alike