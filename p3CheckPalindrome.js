const palindromeCK = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if (str === reversed) {
        return true
    } else {
        return false
    }
};
const test1 = "level"
console.log(palindromeCK(test1));

const test2 = "hello"
console.log(palindromeCK(test2));
