function countVowels(sentence) {
    return sentence.match(/[aeuio]/gi)
        ? sentence.match(/[aeuio]/gi).length
        : 0
}

console.log(countVowels('abcde'));