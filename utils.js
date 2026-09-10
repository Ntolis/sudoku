import {boardState} from './index.js'

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
    for (let j = 0; j < boardState[x].length; j++) {
        if (value === boardState[x][j]) {
            return true
        }
    }
    return false
}
export function hasNumberInRow(x,y,value) {
    const {mainRow,localRow} = getRows(x,y)


    for (let i = 0; i < mainRow.length; i++) {
        for (let j = 0; j < boardState[mainRow[i]].length; j++){
            if (value === boardState[mainRow[i]][localRow[j]]) {
                return true
            }
        }
    }
    return false
}
export function hasNumberInColumns(x,y,value) {
    const {mainColumn,localColumn} = getColumns(x,y)


    for (let i = 0; i < mainColumn.length; i++){
        for (let j = 0 ; j < boardState[mainColumn[i]].length; j++){
            if (value === boardState[mainColumn[i]][localColumn[j]]){
                return true
            }
        }
    }
    return false
}
