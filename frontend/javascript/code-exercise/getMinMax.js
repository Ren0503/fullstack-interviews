function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let current of arr) {
        if (current > max)
            max = current;
        if (current < min)
            min = current;
    }

    return {
        min, max
    }
}

console.log(getMinMax([1, 4, 6, 7, 6, 8, 3, 19]));