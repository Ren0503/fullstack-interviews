function removeDuplicate(arr) {
    const map = {};

    for (const char of arr) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    return Object.keys(map);
}

console.log(removeDuplicate([1, 4, 6, 7, 6, 8, 3, 19]));