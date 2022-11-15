function generateCanvas(arrLength) {
    let arrCanvas = [];
    for (let i = 0; i < arrLength; i++) {
        arrCanvas[i] = [];
        for (let j = 0; j < arrLength; j++)
            arrCanvas[i][j] = Math.round(Math.random());
    }
    return arrCanvas;
}

function checkValues(arrCanvas) {
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
                arrCanvas[i][j] = 0;
            }
            if (contAlive === 3) {
                arrCanvas[i][j] = 1;
            }
        }
    }
    console.table(arrCanvas);
}

export function gameOfLife() {
    let arrLength = 5;
    const intervalID = setInterval(
        checkValues,
        1000,
        generateCanvas(arrLength)
    );

    //checkValues(arrCanvas);
    setTimeout(() => {
        clearInterval(intervalID);
    }, 10000);
}
