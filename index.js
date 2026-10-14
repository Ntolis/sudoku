import {
    getRows, getColumns, hasNumberInBigSquare, hasNumberInRow, hasNumberInColumns, highlightSameNumbers,
    incorrectNumberInBigSquare, incirrectNumberRow
} from "./utils.js";

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

export const coorBoard = {}

squares.forEach(square => {
    square.addEventListener('input', function (event) {
        const x = Number(this.dataset.x)
        const y = Number(this.dataset.y)

        const newValue = this.value
        let beforeValue = boardState[x][y]

        if (newValue === beforeValue) {
            return
        }

        if (newValue === '') {
            if (beforeValue !== null) {
                coorBoard[beforeValue] = coorBoard[beforeValue].filter((coordinate) => coordinate !== `${x},${y}`)
            }
            return boardState[x][y] = null
        }

        if (newValue <= 0 || newValue > 9) {
            return this.value = null
        }

        if (beforeValue !== null) {
            coorBoard[beforeValue] = coorBoard[beforeValue].filter((coordinate) => coordinate !== `${x},${y}`)
        }


        if (!(newValue in coorBoard)) {
            coorBoard[newValue] = []
        }

        coorBoard[newValue].push(`${x},${y}`)

        const rows = getRows(x, y)
        const columns = getColumns(x, y)

        let hasNumberBigSquare = hasNumberInBigSquare(x, newValue)
        let hasNumberRow = hasNumberInRow(x, y, newValue)
        let hasNumberColumns = hasNumberInColumns(x, y, newValue)

        incorrectNumberInBigSquare(hasNumberBigSquare)
        incorrectNumberInBigSquare(hasNumberRow)
        incorrectNumberInBigSquare(hasNumberColumns)

        // incirrectNumberColumns(hasNumberColumns)

        boardState[x][y] = newValue

        highlightSameNumbers(newValue)

    })

    square.addEventListener('click', function (event) {
        highlightSameNumbers(this.value)
    })
})

