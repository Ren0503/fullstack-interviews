var checkPermute = function (stringOne, stringTwo) {
    if (stringOne.length !== stringTwo.length) {
        return false;
    } else {
        var sortedStringOne = stringOne.split('').sort().join('');
        var sortedStringTwo = stringTwo.split('').sort().join('');

        return sortedStringOne === sortedStringTwo;
    }
}

// Tests
console.log(checkPermute('aba', 'aab'));
console.log(checkPermute('aba', 'aaba'));
console.log(checkPermute('aba', 'cde'));