// function generateCanvas(arrLength) {
//     let arrCanvas = [];
//     for (let i = 0; i < arrLength; i++) {
//         arrCanvas[i] = [];
//         for (let j = 0; j < arrLength; j++)
//             arrCanvas[i][j] = Math.round(Math.random());
//     }
//     return arrCanvas;
// }
let arrCanvas = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
];

let arrNew = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
function checkValues() {
    for (let i = 0; i <= arrCanvas.length - 1; i++) {
        for (let j = 0; j <= arrCanvas.length - 1; j++) {
            let contAlive = 0;
            if (i - 1 < 0 || j - 1 < 0) {
                contAlive;
            } else if (arrCanvas[i - 1][j - 1] === 1) {
                contAlive++;
            }
            if (i - 1 < 0 || j - 1 < 0) {
                contAlive;
            } else if (arrCanvas[i - 1][j] === 1) {
                contAlive++;
            }
            if (i - 1 < 0 || j + 1 > arrCanvas.length - 1) {
                contAlive;
            } else if (arrCanvas[i - 1][j + 1] === 1) {
                contAlive++;
            }
            if (j - 1 < 0) {
                contAlive;
            } else if (arrCanvas[i][j - 1] === 1) {
                contAlive++;
            }
            if (j + 1 > arrCanvas.length - 1) {
                contAlive;
            } else if (arrCanvas[i][j + 1] === 1) {
                contAlive++;
            }
            if (i + 1 > arrCanvas.length - 1 || j - 1 < 0) {
                contAlive;
            } else if (arrCanvas[i + 1][j - 1] === 1) {
                contAlive++;
            }
            if (i + 1 > arrCanvas.length - 1) {
                contAlive;
            } else if (arrCanvas[i + 1][j] === 1) {
                contAlive++;
            }
            if (i + 1 > arrCanvas.length - 1 || j + 1 > arrCanvas.length - 1) {
                contAlive;
            } else if (arrCanvas[i + 1][j + 1] === 1) {
                contAlive++;
            }
            if (contAlive < 2 || contAlive > 3) {
                if (
                    i < 0 ||
                    j < 0 ||
                    i > arrCanvas.length - 1 ||
                    j > arrCanvas.length - 1
                ) {
                    contAlive;
                } else {
                    arrNew[i][j] = 0;
                }
            }
            if (contAlive >= 2 || contAlive < 3) {
                if (
                    i < 0 ||
                    j < 0 ||
                    i > arrCanvas.length - 1 ||
                    j > arrCanvas.length - 1
                ) {
                    contAlive;
                } else {
                    arrNew[i][j] = arrCanvas[i][j];
                }
            }
            if (contAlive === 3) {
                if (
                    i < 0 ||
                    j < 0 ||
                    i > arrCanvas.length - 1 ||
                    j > arrCanvas.length - 1
                ) {
                    contAlive;
                } else {
                    arrNew[i][j] = 1;
                }
            }
        }
    }
    arrCanvas = arrNew;
    console.table(arrNew);
}

export function gameOfLife() {
    //let arrLength = 3;
    const intervalID = setInterval(checkValues, 1000);

    //checkValues(arrCanvas);
    setTimeout(() => {
        clearInterval(intervalID);
    }, 10000);
}
gameOfLife();
