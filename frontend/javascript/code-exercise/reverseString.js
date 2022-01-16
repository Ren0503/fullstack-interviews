function reverseString(str) {
    let reversedString = '';

    str.split('').forEach(char => {
        reversedString = char + reversedString;
    });

    return reversedString;
}

console.log(reverseString("hello"));