import {getRows, getColumns, hasNumberInBigSquare, hasNumberInRow, hasNumberInColumns} from "./utils.js";

const board = document.querySelector('.board');

export const boardState = Array.from({length: 9}, () => new Array(9).fill(null));


function createSquares(arr) {
    for (let i = 0; i < arr.length; i++) {
        const bigSquare = document.createElement('div');
        bigSquare.classList.add('bigSquare');
        board.appendChild(bigSquare);

        for (let j = 0; j < arr[i].length; j++) {
            const square = document.createElement('input')
            square.type = 'number'
            square.min = '0'
            square.max = '9'
            square.classList.add('square');

            square.dataset.x = `${i}`
            square.dataset.y = `${j}`

            bigSquare.appendChild(square)
        }

    }
}

createSquares(boardState)

const squares = document.querySelectorAll('.square')

squares.forEach(square => {
    square.addEventListener('input', function (event) {

        const value = value
        const x = Number(this.dataset.x)
        const y = Number(this.dataset.y)

        if (value === '') {
            return boardState[x][y] = null
        }

        if (value <= 0 || value > 9) {
            return this.value = null
        }



        const rows = getRows(x, y)
        const columns = getColumns(x, y)

        let hasNumberBigSquare = hasNumberInBigSquare(x, value)
        let hasNumberRow = hasNumberInRow(x, y, value)
        let hasNumberColumns = hasNumberInColumns(x, y, value)
        
        boardState[x][y] = value
    })

})

