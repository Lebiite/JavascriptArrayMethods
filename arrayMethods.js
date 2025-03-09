const items = [
    {name: "Bike", price: 100},
    {name: "Tv", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000},
    {name: "Keyboard", price: 25},
]


// 1 filter method for items with price less than 100 used to filter for specific items

// const filteredItems = items.filter((items) =>{
// //     return items.price < 100
// // })
// // console.log(filteredItems)

// 2 map method  return the the array in a different array with only names
// const itemsNames = items.map((items) =>{
//     return items.name
// })
// console.log(itemsNames)

// find method used for searching throught the array
// const foundItem = items.find((items) =>{
//     return items.price === 500
// })
// console.log(foundItem)

// 4 forEach used like loop but it takes a fucntion in it can do the same as map some times
//  items.forEach((items) =>{
//     console.log(items.name)
//  })
 
// 5 some used in checking if specific conditions  in the loop returns true or false  returns true if there are any items in the array that has a price less than  1000
// const hasInexpensiveItems = items.some((items) =>{
//     return items.price < 1000
// })
// console.log(hasInexpensiveItems)


// 6 every works similar as some but it checks for every item in the array  
// const hasInexpensiveItems = items.every((items) =>{
//     // return items.price <=100 ::returns false because there are items that has a price more than 100 
//     return items.price <=1000     //returns true because all the other items are less than a 1000 and 1 is equal to 1000
// }) 
// console.log(hasInexpensiveItems)

// 7 reduce can be used to sum the total current total starts at zero then adds one item after the other final outputs is 1840
// const total = items.reduce((currentTotal, items) =>{
//     return items.price + currentTotal
// }, 0)
// console.log(total)



// 8 includes  checks weather the array includes certain numbers ::returns true because the array includes 2

const numbers = [1, 2, 3, 4, 5]

const includesTwo = numbers.includes(7)

console.log(includesTwo)