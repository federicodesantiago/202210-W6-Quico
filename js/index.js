//array.length

function arrayLength(arr) {
    let i = 0;
    arr.forEach(() => {
        i++;
    });
    return i;
}

export { arrayLength };
