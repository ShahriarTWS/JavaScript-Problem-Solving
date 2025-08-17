const vowelCK = (str) => {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
            count++
        }
    }
    return count;
}

const test = "programming"
console.log(vowelCK(test));