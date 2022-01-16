function isPalindrome(str) {
    return str.split('')
        .every((char, i) => {
            return char === str[str.length - i - 1];
        })
}

console.log(isPalindrome("edde"));
console.log(isPalindrome("eddfdde"));
console.log(isPalindrome("xyz123"));