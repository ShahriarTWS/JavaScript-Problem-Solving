const findEven = (num) => {
    let evenNumber = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            evenNumber.push(num[i])
        }
    }
    return evenNumber;
}

const arr = [1, 2, 3, 4, 5, 6]
console.log(findEven(arr));