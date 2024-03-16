// class A{
//     // constructor() {
//     //     this.brand="BMW"
//     // }
//     eat() {
//         console.log("I am eating")
//     }
// }
// class B extends A{
//     constructor() {
//         //super()
//         this.brand="Mercedes"
//     }
//     sleep() {
//         console.log("I am sleeping")
//     }
// }
// const obj=new B()

import { get } from "mongoose"

// obj.eat()
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data Id", dataId)
            resolve("success")
        }, 4000)
    })
}
async function getAllData() {
    await getData(1)
    console.log("got data 1")
    await getData(2)
    console.log("got data 2")
    await getData(3)
    console.log("got data 3")
}
getAllData()
console.log("after all data")