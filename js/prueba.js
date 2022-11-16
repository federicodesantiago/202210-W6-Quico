//let arrLength = 5;
let arrCanvas = [
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 0],
];
// function generateCanvas(arrLength) {
//     for (let i = 0; i < arrLength; i++) {
//         arrCanvas[i] = [];
//         for (let j = 0; j < arrLength; j++)
//             arrCanvas[i][j] = Math.round(Math.random());
//     }
//     console.log(arrCanvas);
//     return arrCanvas;
// }
function valueOne(arrCanvas, i, j, contAlive) {
    if (i - 1 < 0 || j - 1 < 0) {
        contAlive;
        return contAlive;
    }
    if (arrCanvas[i - 1][j - 1] === 1) {
        contAlive++;
    }
    return contAlive;
}
function valueTwo(arrCanvas, i, j, contAlive) {
    if (i - 1 < 0 || j - 1 < 0) {
        contAlive;
        return contAlive;
    }
    if (arrCanvas[i - 1][j] === 1) {
        contAlive++;
    }
    return contAlive;
}
function valueThree(arrCanvas, i, j, contAlive) {
    if (i - 1 < 0 || j + 1 > arrCanvas.length - 1) {
        contAlive;
        return contAlive;
    }
    if (arrCanvas[i - 1][j + 1] === 1) {
        contAlive++;
    }
    return contAlive;
}
function valueFour(arrCanvas, i, j, contAlive) {
    if (j - 1 < 0) {
        contAlive;
        return contAlive;
    }
    if (arrCanvas[i][j - 1] === 1) {
        contAlive++;
    }
    return contAlive;
}
function valueFive(arrCanvas, i, j, contAlive) {
    if (j + 1 > arrCanvas.length - 1) {
        contAlive;
        return contAlive;
    }
    if (arrCanvas[i][j + 1] === 1) {
        contAlive++;
    }
    return contAlive;
}
function valueSix(arrCanvas, i, j, contAlive) {
    if (i + 1 > arrCanvas.length - 1 || j - 1 < 0) {
        contAlive;
        return contAlive;
    }
    if (arrCanvas[i + 1][j - 1] === 1) {
        contAlive++;
    }
    return contAlive;
}
function valueSeven(arrCanvas, i, j, contAlive) {
    if (i + 1 > arrCanvas.length - 1) {
        contAlive;
        return contAlive;
    }
    if (arrCanvas[i + 1][j] === 1) {
        contAlive++;
    }
    return contAlive;
}
function valueEight(arrCanvas, i, j, contAlive) {
    if (i + 1 > arrCanvas.length - 1 || j + 1 > arrCanvas.length - 1) {
        contAlive;
        return contAlive;
    } else if (arrCanvas[i + 1][j + 1] === 1) {
        contAlive++;
    }
    return contAlive;
}
function checkValues(arrCanvas) {
    let arrNew = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    for (let i = 0; i <= arrCanvas.length - 1; i++) {
        for (let j = 0; j <= arrCanvas.length - 1; j++) {
            let contAlive = 0;
            valueOne(arrCanvas, i, j, contAlive);
            valueTwo(arrCanvas, i, j, contAlive);
            valueThree(arrCanvas, i, j, contAlive);
            valueFour(arrCanvas, i, j, contAlive);
            valueFive(arrCanvas, i, j, contAlive);
            valueSix(arrCanvas, i, j, contAlive);
            valueSeven(arrCanvas, i, j, contAlive);
            valueEight(arrCanvas, i, j, contAlive);

            if (contAlive < 2 || contAlive > 3) {
                arrNew[i][j] = 0;
            }
            /*if (contAlive > 2 || contAlive < 3) {
                arrNew[i][j] = 1;
            }*/
            if (contAlive === 3) {
                arrNew[i][j] = 1;
            }
        }
    }
    arrCanvas = arrNew;
    console.log(arrNew);
    console.table(arrCanvas);
}

export function gameOfLife(arrCanvas) {
    const intervalID = setInterval(() => checkValues(arrCanvas), 1000);
    setTimeout(() => {
        clearInterval(intervalID);
    }, 10000);
}

gameOfLife(arrCanvas);
