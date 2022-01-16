function isAnagram(stringA, stringB) {
    const normalize = (str) => {
        return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('')
    }

    return normalize(stringA) === normalize(stringB)
}

console.log(isAnagram('Night', 'Thing'));
console.log(isAnagram('bak', 'bag'));