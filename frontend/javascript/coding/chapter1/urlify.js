function urlify(str, len) {
    let s = "";
    let totalSpace = str.length - len;
    let frontSpace = 0;
    let flag = false;

    for (let i = 0; i < str.length; i++) {
        if (flag === false) {
            if (str[i] === " ") frontSpace++;
            else flag = true
        }
        if (flag === true && i < str.length - (totalSpace - frontSpace)) {
            if (str[i] === " ") s += "_";
            else s += str[i];
        }
    }

    return s;
}

console.log(urlify("Mr John Smith  ", 13));