const removeDuplicates = (arr) => {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let exists = false;

        for (let j = 0; j < newArray.length; j++) {
            if (arr[i] === newArray[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            newArray.push(arr[i]);
        }
    }

    return newArray; 
}

const arr = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(arr));
