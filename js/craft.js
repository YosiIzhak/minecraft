const start = document.querySelector(`.start`);
const board = document.querySelector(`.board`);
const axe = document.querySelector(`.axe`);
const pickaxe = document.querySelector(`.pickaxe`);
const shovel = document.querySelector(`.shovel`);
const sidebar = document.querySelector(`.sidebar`);
const lastCube = document.querySelector(`.lastcube`);
let chosentool = 0;


function myremove() {
    var myobj = document.getElementById("showcase");
    myobj.remove();
}
const squareGame = new Map();
function matrixCube() {

    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 22; j++) {
            let cubeDiv = document.createElement('div')
            cubeDiv.classList.add(`cube`);
            cubeDiv.classList.add(`ground`);
            board.appendChild(cubeDiv);
            squareGame.set(`${i},${j}`, { cubeDiv });
        }
    }
}
matrixCube();
function setMatrixCube() {
    const matrixCubeElement = [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 3, 3],
        [3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 1, 6, 3, 3, 3],
        [3, 3, 3, 3, 7, 7, 3, 3, 3, 7, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3],
        [3, 3, 3, 3, 7, 7, 3, 3, 3, 7, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

    ];

    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 22; j++) {
            let matrixItem = squareGame.get(`${i},${j}`);
            if (matrixCubeElement[i][j] === 3) {
                matrixItem.cubeDiv.classList.remove(`ground`);
                matrixItem.cubeDiv.classList.add(`sky`);
            }
            if (matrixCubeElement[i][j] === 2) {
                matrixItem.cubeDiv.classList.remove(`ground`);
                matrixItem.cubeDiv.classList.add(`ground`);
            }
            if (matrixCubeElement[i][j] === 4) {
                matrixItem.cubeDiv.classList.remove(`ground`);
                matrixItem.cubeDiv.classList.add(`edge`);
            }
            if (matrixCubeElement[i][j] === 1) {
                matrixItem.cubeDiv.classList.remove(`ground`);
                matrixItem.cubeDiv.classList.add(`wood`);
            }

            if (matrixCubeElement[i][j] === 6) {
                matrixItem.cubeDiv.classList.remove(`ground`);
                matrixItem.cubeDiv.classList.add(`leaves`);
            }
            if (matrixCubeElement[i][j] === 5) {
                matrixItem.cubeDiv.classList.remove(`ground`);
                matrixItem.cubeDiv.classList.add(`cloud`);
            }
            if (matrixCubeElement[i][j] === 7) {
                matrixItem.cubeDiv.classList.remove(`ground`);
                matrixItem.cubeDiv.classList.add(`stone`);
            }

        }
    }

}
setMatrixCube();
const allCube = document.querySelectorAll(`.cube`);

axe.addEventListener("click", () => {
    chosentool = 1;
});
pickaxe.addEventListener("click", () => {
    chosentool = 2;
});
shovel.addEventListener("click", () => {
    chosentool = 3;
});
function removeCube(cubeDiv) {
    if (chosentool === 1) {
        if (cubeDiv.currentTarget.classList.contains('wood')) {
            cubeDiv.currentTarget.classList.remove('wood');
            cubeDiv.currentTarget.classList.add('sky');
            // lastCube.classList.add('wood');
          
        }
        if (cubeDiv.currentTarget.classList.contains('leaves')) {
            cubeDiv.currentTarget.classList.remove('leaves');
            cubeDiv.currentTarget.classList.add('sky');
            lastCube.classList.add('leaves');
        }
    }
    if (chosentool === 2) {
        if (cubeDiv.currentTarget.classList.contains('stone')) {
            cubeDiv.currentTarget.classList.remove('stone');
            cubeDiv.currentTarget.classList.add('sky');
            lastCube.classList.add('stone');
        }
    }
    if (chosentool === 3) {
        if (cubeDiv.currentTarget.classList.contains('ground')) {
            cubeDiv.currentTarget.classList.remove('ground');
            cubeDiv.currentTarget.classList.add('sky');
            lastCube.classList.add('ground');
        }
        if (cubeDiv.currentTarget.classList.contains('edge')) {
            cubeDiv.currentTarget.classList.remove('edge');
            cubeDiv.currentTarget.classList.add('sky');
            lastCube.classList.add('edge');
        }
    }
}
allCube.forEach(function (cubeDiv) {
    cubeDiv.addEventListener(`click`, removeCube);
});
