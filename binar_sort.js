const list = [ 1, 5, 3, 7, 9, 4, 7, 23, 56, 3, 44, 655, 46, 34, 58, 78 ]
// const list = []
let count = 0
let sortIt = 0
const randInd = 20

function RandomList(array){
    for (let i = 0; i < randInd; i++) {
        array.push(Math.floor(Math.random() * (100 - 0) + 0))
    }
}

function sort(array){

    if(array.length <= 1){
        return array
    }

    let middleIndex = Math.floor(array.length / 2)
    let middle = array[middleIndex]
    let less = []
    let greater = []

    for (let i = 0; i < array.length; i++) {
        sortIt++

        if(i === middleIndex){
            continue
        }else if(array[i] < middle){
            less.push(array[i])
        }else{
            greater.push(array[i])
        }

    }
  
    return [...sort(less), middle, ...sort(greater)]
}

function bilinarSearch(array, item, iterations){
    let start = 0
    let end = array.length
    let middle
    let found = false
    let positions = -1
    let i = iterations

    while(found === false && start <= end){
        middle = Math.floor((start + end) / 2)
        i++

        if(item === array[middle]){
            found = true 
            positions = middle
            console.log(`итерации поиска: ${i}`)
            return `позиция: ${middle}`
        }
        if(item < array[middle]){
            end = middle-1
        }
        else{
            start = middle+1
        }
    }
   
    return 'такого элемента нет'
}

// RandomList(list)
console.log(sort(list, sortIt))
console.log(`итерации сортировки: ${sortIt}`)
console.log(bilinarSearch(sort(list), 7, count))