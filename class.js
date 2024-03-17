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

//import { get } from "mongoose"
// obj.eat()
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data Id", dataId)
//             resolve("success")
//         }, 4000)
//     })
// }
// async function getAllData() {
//     await getData(1)
//     console.log("got data 1")
//     await getData(2)
//     console.log("got data 2")
//     await getData(3)
//     console.log("got data 3")
// }
// getAllData()
// console.log("after all data")


const obj = {
    name: "John",
    sayName: function () {
        console.log(this.name);
    }
};

const boundSayName = obj.sayName.bind(obj); // Bind this to obj
boundSayName(); // This will log "John" (correct output)


const obj2 = {
    name: "Jo",
    sayName: function () {
        const innerFunc = () => {
            console.log(this.name); // "this" here refers to the outer context's "this"
        };
        innerFunc();
    }
};

obj2.sayName(); // This will log "John"

const obj3 = {
    name: "Joh",
    sayName: function () {
        const innerFunc = function () {
            console.log(this.name); // This will log "John"
        }.bind(this); //Without the .bind(this), the this inside innerFunc would refer to the global object (in non-strict mode) or undefined (in strict mode) because innerFunc is a standalone function and not a method of any object. This behavior is due to how functions work in JavaScript: the value of this inside a function depends on how the function is called.
        innerFunc();
    }
};

obj3.sayName(); // This will log "John"

console.log('\n\n\n')
console.log('new line')
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const BoundPerson = Person.bind(null, 'John');
const john = new BoundPerson(25);
console.log(john); // Output: find output ?Person { name: 'John', age:25 }
