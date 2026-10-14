// let value = [
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9]
// ]


/**
 * так , наша цель - исключить рандомно число из массива. Как это сделать?
 * Как по мне , у нас должен быть какой-то рандомно сгенерированный номер массива и просто ставить на место его null
 * @type {number[][]}
 *
 * так, шо за хуйня
 * нужно как-то вывести то рандомное число
 *
 */
// let value = [
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,5,6,7,8,9],
// ]

// let value = [
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
// ]

// for (let i = 0; i < value.length; i++) {
//
//     let randomNumber = Math.floor(Math.random() * (value.length ))
//
//     value[i][randomNumber] = null
//
//
//     for (let j = 0 ; j < value[i].length; j++) {
//
//         let FirstRandomNumber = Math.floor(Math.random() * (value.length ))
//         let tempNumber
//
//         tempNumber = value[i][FirstRandomNumber]
//         value[i][FirstRandomNumber] = value[i][j]
//         value[i][j] = tempNumber
//     }
//     console.log(value)
// }


let value = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

]

function qweqwe(value) {
    for (let i = 0; i < value.length; i++) {

        let numberOfEmptyCells = Math.floor(Math.random() * (value[i].length))


        for (let k = 0; k < numberOfEmptyCells; k++) {

            let randomNumber = Math.floor(Math.random() * (value[i].length))

            value[i][randomNumber] = null

        }

        for (let j = 0; j < value[i].length; j++) {

            let FirstRandomNumber = Math.floor(Math.random() * (value[i].length))
            let tempNumber

            tempNumber = value[i][FirstRandomNumber]
            value[i][FirstRandomNumber] = value[i][j]
            value[i][j] = tempNumber
        }

    }
    return value
}

console.log(qweqwe(value))










