console.log("Runn here")


// Array 

var sandwich = ['Peanut butter',"jelly","bread"]

// Index
// 0 1 2 3 4 -- n-1 
// 1 2 3 4 5 --> n 
const cars = [] // Empty Array 

cars[0] = "saab" // Gan vi tri 0 cua array = saab
cars[1] = "Volvo"
cars[2] = "BMW"
console.log(cars)
console.log(cars.length)
// How get the last element
console.log(cars[cars.length-1])

// Mang 2 chieu 

var family = [["Bo","58 tuoi"],["Me","54 Tuoi"], ["Chi", "31 tuoi"],["toi","26 tuoi"]]

console.log(family[family.length-1])


// Object || ĐỐi tượng
// method and properties 


// Create a object 

// key : value 
var thuong = { 
 
    name: "PUtin",
    age: 24
}
// objectName.propertyName
console.log(thuong.name)
console.log(thuong['name'])
console.log("==============")
console.log(thuong.age)
console.log(thuong['age'])
// // === Gioi thieu 
// console.log(thuong.run())

// For ... in 
var thuong = { 
   // key: value 
    name: "PUtin",
    age: 24,
    isDeptrai: true
}
// For in || Object 
for(key in thuong) {
    console.log(thuong.key)
}


//             0          1           2
var array = ['Teacher',"Minh thu", "Nhat Quang ", "Sy Toan"]
// For in || Array 
for(var index in thuong) {
    // index: 0 , 1 ,2 ,3 
    console.log(thuong[index])
}
// Example:  0                   1 
var family = [["Bo","58 tuoi"],["Me","54 Tuoi"], ["Chi", "31 tuoi"],["toi","26 tuoi"]]

// console.log(family[0][1])
for( var index_1 in family) {
    var log = " " 
    for (var index_2 in family[index_1]) {
       log += family[index_1][index_2]
       log += " "
    }
    console.log(log)
}
// OUTPUT: 
// BO 58 tuoi
// ME 54 tuoi
// For ... of


var myDog = {
    "name": "Ngao",
    "legs": 4,
    "friends": ["everything"]
}
// thay doi ten mydog thanh husky
myDog.name = "husky"
console.log(myDog)
// gan a new properties
myDog.color =  "Brown"
console.log(myDog)

// Xoa di friends 
delete myDog.friends
console.log(myDog)