const findMax = (num) => {
    let max = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}

const num = [5, 1, 9, 3]
console.log(findMax(num));