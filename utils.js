import {boardState, coorBoard} from './index.js'

const mapRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

const mapColumns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

export function findGroup(value,map){
    for (let i = 0; i < map.length; i++) {
        for (let j = 0 ; j< map[i].length; j++) {
            if (value === map[i][j] ) {
                return map[i]
            }
        }
    }
    return null
}

export function getRows(x,y){
    return {
        mainRow: findGroup(x,mapRows),
        localRow: findGroup(y,mapRows),
    }
}

export function getColumns(x,y){
    return {
        mainColumn: findGroup(x,mapColumns),
        localColumn: findGroup(y,mapColumns),
    }
}

export function hasNumberInBigSquare(x,value) {
    let coordinates = []

    for (let j = 0; j < boardState[x].length; j++) {
        if (value === boardState[x][j]) {
            coordinates.push(`${x},${j}`)
        }
    }

    return coordinates
}

export function hasNumberInRow(x,y,value) {
    let coordinates = []

    const {mainRow,localRow} = getRows(x,y)

    for (let i = 0; i < mainRow.length; i++) {
        for (let j = 0; j < boardState[mainRow[i]].length; j++){
            if (value === boardState[mainRow[i]][localRow[j]]) {
                coordinates.push(`${mainRow[i]},${localRow[j]}`)
            }
        }
    }

    console.log("alena-", coordinates)
    return coordinates
}

export function hasNumberInColumns(x,y,value) {
    let coordinates = []
    const {mainColumn,localColumn} = getColumns(x,y)


    for (let i = 0; i < mainColumn.length; i++){
        for (let j = 0 ; j < boardState[mainColumn[i]].length; j++){
            if (value === boardState[mainColumn[i]][localColumn[j]]){
                coordinates.push(`${mainColumn[i]},${localColumn[j]}`)
            }
        }
    }
    return coordinates
}

let selectedValue = null

export function highlightSameNumbers(currentValue) {
    if (selectedValue !== null && coorBoard[selectedValue]) {
        coorBoard[selectedValue].forEach(coordinate => {
            const [x, y] = coordinate.split(',')

            const square = document.querySelector(
                `.square[data-x="${x}"][data-y="${y}"]`
            )

            square.classList.remove('square--selected')
        })
    }

    if (currentValue === '') {
        selectedValue = null
        return
    }

    coorBoard[currentValue].forEach(coordinate => {
        const [x, y] = coordinate.split(',')

        const square = document.querySelector(
            `.square[data-x="${x}"][data-y="${y}"]`
        )

        square.classList.add('square--selected')
    })

    selectedValue = currentValue
}

export function incorrectNumberInBigSquare(coordinates){
    if (!coordinates.length) {
        return
    }

    coordinates.forEach(coordinate => {
        const [x, y] = coordinate.split(',')


        const square = document.querySelector(
            `.square[data-x="${x}"][data-y="${y}"]`
        )

        square.classList.add('square--incorrect')
    })
}

export function incirrectNumberRow(coordinates){
    if (!coordinates.length) {
        return
    }

    coordinates.forEach(coordinate => {
        const [x, y] = coordinate.split(',')
        console.log(x)
        console.log(y)

        const square = document.querySelector(
            `.square[data-x="${x}"][data-y="${y}"]`
        )
        //Алена, допиши , пж , отображение.Я не понимаю. Пытался разобраться и не получилось
        console.log("SALAM",square)

        console.log("АААА СОВПАДЕНИЕ ААААА")
    })
}

export function incirrectNumberColumns(coordinates){
    if (!coordinates.length) {
        return
    }
}

console.log(boardState)