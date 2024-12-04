//   const car = "bentley";
//   let CAR = true;
//   var cAr = 1+2
//   console.log(car,CAR, cAr) output bentley, true , 3

// Object function has a key-value association
// // const Atb = {
// //     head: "Mr john",
// //     tutor1: "Abdulkabir",
// //     tutor2: "frontend"
// // }

// // console.log(Atb.head); output Mr John 
// // console.log(Atb.tutor1);
// // console.log(Atb.tutor2);

// // 

// const person = {
//     firstName: "Miracle",
//     age: 30,
//     isStudent: true,
// }

// console.log(person.firstName);
// console.log(person.age);
// console.log(person.isStudent);

// const book = {
//     title: "Covenant God",
//     pages: 78,
//     available: true,
// }

// console.log(book.title);
// console.log(book.pages);
// console.log(book.available);

// const phone = {
//     brand: "samsung",
//     model: "samsung s21 ultra",
//     isNew: true,
// }

// console.log(phone.brand);
// console.log(phone.model);
// console.log(phone.isNew);

// function greet (firstName, lastName) {
//     console.log("hello " + firstname, " "+ lastname);
    
// }

// greet("opeyemi", "olayiwola")


// const greet = (firstname, lastname) => {
//     console.log("hello " + firstname + " " + lastname); output hello opeyemi olayiwola 
    
// }

// greet("opeyemi", "olayiwola")


// function add (firstnumber, secondnumber) {
//     const add = firstnumber + secondnumber
//     console.log(add);
    
// }
// add(4, 7) output 11


// const difference = (firstnumber, secondnumber) => {
//     const sub = firstnumber - secondnumber
//     console.log(sub);
// }
// difference(9, 5)


// const color = ["blue", "green", "red", "yellow", "white"]
// color.reverse()
// console.log(color);


// const house = (duplex) => {}
// function house (duplex) {}


// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr); 

// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr); output 2, 3

// const arr = [2, 3];
// arr.unshift(1);
// console.log(arr);

// const fruits = [apple, watermelon, cashew, grape, guava];
// const myOwn = fruits.slice(2, 4);
// console.log(myOwn);

// let a = 10;
// let b = 5;
// let sum = a+b;
// console.log(sum);

// while loop 
// Let a = 0;
// while (a < 1000){
// console.log(a);

// }


// 


// const a = 18;
// const b = 3;
// const quotient = a/b;
// console.log(quotient);


// % (modulus)

// let a = 15;
// let b = 4;
// let remainder = a % b;
// console.log(remainder);


// == (Equal to)

// const a = 10;
// const b = "10";
// console.log(a == b);

// === (strict equal to)

// let a = 10;
// let b = "10";
// console.log(a===b);


// != (Not equal to)

// let a = 10;
// let b = "10";
// console.log(a!=b);


// !== (Strict not equal to)

// let a = 10
// let b = "10";
// console.log(a !== b);




// let a = 15;
// let b = 15;
// console.log(a>=b);




// console.log(a<=b);


// = (Assignment operator)

// let a = 10;
// let b = 5;
// a=b;
// console.log(a);



// += (Additional assignment)

// let a = 10;
// let b =5;
// a+=5;
// console.log(a);



// If and else statements

// const votersAge = 19
// if (votersAge === 20 ||  votersAge === 25) {
//     console.log("You are eligible to vote at" + votersAge);
    
// } else {
//     console.log("You are not eligible to vote at" + votersAge);
    
// }


// const votersAge = (age) => {
//     if (age === 20 || age === 25) {
//         console.log("You are eligible to own a car at", age);
        
//     } else {
//         console.log("You are not eligible to own a car at", age);
        
//     }
// }
// votersAge(25)


// const username = "atbtechhub"
// const password = "password123"
// write a logic to compare the username and the password
// if correct successfully login 
// else check your username or password or invalid Input


// const username = "AtbTechHub"
// const password = "password123"
// if (username === "AtbTechHub" || password === "password123") {
//     console.log("successfully login");
    
// } else {
//     console.log("invalid input");

//     if ( username === "AtbTechHub" && password === "password123") {
//         console.log("login successful");
        
//     } else {
//         console.log(username !== "AtbTechHub" || password !== "password123");
        
//     }
    
// }

// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = numbers.slice(-2)
// console.log(numbers2);


// const bunny = "healthy"
// if (bunny === "healthy") {
//     console.log("bunny is healthy");
    
// } else {
//     console.log("take bunny to vet");
    
// }

// if (bunny === "sick") {
//     console.log("bunny is sick!");
    
// } else if (bunny === "dead") {
//     console.log("bunny is dead!");
    
// } else {
//     console.log("bunny is healthy");
    
// }


// for (let i = 0; i <= 100; i++) {
//     console.log(i);
    
// }

// for (let i = 100; i > 0; i--) {
//     console.log(i);
    
// }

// let index = 0;

// while (index < 5) {
//     console.log("how are you:" + index);
    


// const Atb = {
//  head: "Mr john",
//   tutor1: "Abdulkabir",
//   tutor2: "frontend"
// }

//  for (let x in atb) {
//  console.log(Atb[x]);
    
//  }

// const fruits = ["banana", "orange", "lemon", "apple", "mango"];
// const slice = fruits.slice(1, 3);
// console.log(slice);

// fruits.splice(0, 2);
// console.log(fruits);





// for (let fruit of fruits) {
//     console.log(fruit);
    
// }

// let name = "oracle";
// let color = "white";
// console.log(`my name is ${name}, I have a ${color} car`)


// % (modulus)

// let a = 15;
// let b = 4;
// let remainder = a % b;
// console.log(remainder);


// for (let i =0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
        
//     }
// }

// for (let i = 1; i <= 12; i++) {
//     console.log(i * 5);
    
// }

//  for (let i = 0; i <= 60; i+=5) {
//     console.log(i);
    
//  }

//  for (let i = 0; i < 61; i+=5) {
//     if (i * 5 !== 61) {
//         console.log(i);
        
//     }
//  }

// for (let i = 0; i<= 12; i++) {
//    const result = i*5;
//    console.log(`5 * ${i} = ${result}` );
   
// }

/* 
---------------------------------------------------------Quickchallenge--------------------------------------------------------------
      QCT (quick challenge type):  find the error
*/
// const studyshelfs = {
//    science_textbooks: [
//       `Physics`,
//       `Chemistry`,
//       `Biology`,
//       `Geography`
//    ],

//    maths_textbook: [
//       `Algebra`,
//       `Calculus`,
//       `Statistics`,
//       `Geometry`
//    ],

//    commercial_textbooks: [
//       `Marketing`,
//       `Finance`,
//       `Business Administration`,
//       `Economics`
//    ]

// }
// for (let i in studyshelfs) {
//    console.log(i);
   
// }


// ----------------------------------------Qick Challenge---------------------------------
//  QCT (quick challenge type):  coding challenge

//  write a for loop that selects out the highest number from an array of numbers.
//  e.g let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
 

// let num = [2, 4, 6, 8, 10, 12, 14];

// let max = 0;
// let len = num.length;

//   for (let n = 0; n < len - 1; n++ ){
//    if (num[n] > max) {
//      max = num[n];
//    }
//    max;
//    console.log("maximum value in array is: " + max);

// }

// let num = [2,4,6,8,7,5,7,9];
// let maxNumber = num[0];
// for (let n = 2; n > num.length;) {
//   if (n > maxNumber) {
//     maxNumber = n;
//     console.log(maxNumber);
    
//   }
// }



//  let num = [5, 7, 9, 11, 23, 42, 55, 76,];
//  let n = 0; n > num.length;
//   for (let max of num) {
//     if (max < num[n]);
//     max = num[n];
//    console.log(max);
   
//   }

// const numbers = [2,5,9,4,8,6,1];
// let highest = numbers [0];

// for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > highest) {
//             highest = numbers[i];
//       }
// }
// console.log(`The highest number is: ${highest}`);


/*const car = {
      brand: `bentley`,
      year: 2022,
      isGood: true,
}
console.log(car.brand);
console.log(car.year);
console.log(car.isGood);
*/

/*Tenary operator */
/*var firstName = `Mike`; */
/*var isAdult = 20;
var age = 25; 

age >= 24 ? console.log(isAdult  + ` is an Adult`) : console.log(isAdult  + ` is a Minor`);
*/
            // ||
           /*function isAdult () {
            let age = 19;
            age >= 20 ? `Adult` : `Minor`;
                  console.log(isAdult(24));

           } */
            
            /*function isAdult (); */

            /* switch statement*/ 
          /*  function evaluateGrade () {
                  let grade = `character A`;
                  switch (grade) {
                  case `character A`:
                        console.log(grade + `Excellent`);
                        break;
                  case `charcter B`:
                        console.log(grade + `Very good`);
                        break;
                  case `charcter C`:
                        console.log(grade + `Good`);
                        break;
                  case `charcter D`:
                        console.log(grade + `Pass`);
                        break;
                  case `charcter F`:
                        console.log(grade + `Fail`);
                        break;
                  default:
                        console.log(grade + `no grade`);
                                
                  }
            }
            */



/*Switch statement  
function evaluateGrade () {
      let grade = `character G`;
      switch (grade) {
      case `character A`:
            console.log(`Excellent`);
            break;
      case `charcter B`:
            console.log(`Very good`);
            break;
      case `charcter C`:
            console.log(`Good`);
            break;
      case `charcter D`:
            console.log(`Pass`);
            break;
      case `charcter F`:
            console.log(`Fail`);
            break;
      default:
            console.log(`no grade`);
                        
      }
}

console.log(evaluateGrade("C")); */


/* Tenary operator 
let isAdult = (age) => {
      return age >= 20 ? "Adult" : "Minor";

}
console.log(isAdult(24)); */

/* Promises is a way to handle async operations*/

/*Examples of a promise with a async and await*/

/*const getTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data = await response.json();
       console.log(data);
      return data; 
      
      
};

getTodos(); */

// spread operator

//  const arr1 = [1,2,3];
//  const arr2 = [...arr1, 4,5,6];
//  console.log(arr2);

//  Example 2

//  const bunnies = [`peter`, `john`, `paul`];
//  const bunnies2 = [...bunnies, `george`, `ringo`];
//  console.log(bunnies2);

// Rest operator 

// function sum (...numbers){
//       let result = 0
//       for (let number of numbers) {
//             result += number
//       }
//       return result
// }
//  const total = sum(1,2,2,2,6);
//  console.log(total);
 

// function average (...numbers){
//       let result = 0;
//       for (let num of numbers){
//             result += num;
//       }
//       return result/numbers.length

// }


// console.log(average(20,42,5,64,7,79,43));

/*convert JavaaScript object to JSON */
// let bunny = {
//       name: "Lucy",
//       age: 3,
//       isHappy: true
// };

// let bunnyJSON = JSON.stringify(bunny);
// const Bunny = JSON.parse(bunnyJSON);


// console.log(bunnyJSON);

// let bunnyJSON = `{"name": "Lucy", "age": 3, "isHappy": true}`;
// let bunny = JSON.parse(bunnyJSON);
// console.log(bunny.isHappy);


/* Constructor function */
// function person (name, age){
//       this.name = name;
//       this.age = age;
//       this.greet = function () {
//             console.log(`Hello, my name is: ${this.name}`);
            
//       }
// }
//  const person1 = new Person (`Ope, 30`);
//  const person2 = new Person (`Omonikara, 30`);

//  console.log(person1.name);

/* Exception handling */

// function sum (a,b){
//       if (typeof a !== `number ` || typeof b !== `number `);
//       throw new Error("please enter a number");
//      return a + b;
// }
//  console.log(sum(20,30));
 

//  const sum = (a, b) => {
//       if (typeof a !== `number` || typeof b !== `number`){
//             throw new Error("please enter a number");
            
//       }
//       const add = a + b
//       return add
//  }
// try {
//       console.log(sum(20, `c`));
      
// } catch (error) {
//       console.log("we have an error: " + error);
      
// }

/* write a JavaScript function divideNumbers that takes two numbers as arguments, a and b  the function should:
0) throw an error if any of the arguments is NaN
1) return the result by dividing a and b 
2) throw an error with the message "division by zero is not allowed" if b is 0
3) catch the errow using the try and catch block
*/

// const quotient = (a, b) => {
//       if (typeof a !== 'number' || typeof b !== `number`){
//             throw new Error("not a number");    
//       } if (b === 0){
//             throw new Error("division by zero is not allowed");   
//       }
//       const div = a / b 
//       return div
// }
// try {
//       console.log(quotient(25, 'j'));
      
// } catch (error) {
//       console.log(`not a number: ${error}`);
      
// }



// //calculator with functions operations

// const calculator = {
//       add: function (a,b) {
//           return a + b;
//       },
//       subtract: function (a, b) {
//           return a = b;
//       },
//       multiply: function (a,b) {
//           return a * b;
//       },
//       divide: function (a,b) {
//           if (b === 0) {
//               console.error("Error: Division by zero is not allowed");
//               return null;
              
//           }
//           return a / b;
//    },
//    calculate: function (operation, num1, num2) {
//       switch (operation) {
//           case "add":
//               return this.add(num1, num2);
//           case "subtract":
//               return this.subtract(num1, num2);
//           case "multiply":
//               return this.multiply(num1, num2);
//           case "divide":
//               return this.divide(num1, num2);
//           default:
//               console.error("Invalid operation. Please use add, subtract, multiply or divide.");
//               return null;
//       }
//    },
//   };
   
//   // Example usage
  
//   const num1= 15;
//   const num2 = 9;
  
//   console.log("Addition:", calculator.calculate("add", num1, num2)); // 24
//   console.log("Subtration:", calculator.calculate("subtract", num1, num2)); // 6
//   console.log("Multiplication:", calculator.calculate("multiply", num1, num2)); // 
//   console.log("Division:", calculator.calculate("divide, num1, num2")); //
  
//   // Invalid operation example
  
//   console.log("Invalid operation:", calculator.calculate("modulus", num1, num2));


// console.log(__dirname);
// console.log(__filename);

// function sayHello () {
//       console.log(`hello oracle`);
      
// }
// setTimeout (sayHello, 6000)

// const sayHello = () => {
//       console.log(`hello oracle`);
      
// }
// setTimeout(sayHello, 6000)

// const callMe = () => {
//       console.log(`I am calling every 4 seconds`);
      
// }
// setInterval(callMe, 4000)


// var time = 0;
// const sayHello = () => {
//       time +=1;
//       console.log(time + "seconds have elapsed");

//       if (time >= 5) {
//             clearInterval(timer)
//       }
      
// }
// var timer = setInterval(sayHello, 1000)

// const sub = require(`./app`)

// console.log(sub(7,3));



// ..........................File system module ........................................

//   const fs = require(`node:fs`)
//   console.log(`first`);

//   const checkedfile = fs.readFileSync(`./myFile`, `utf-8`)

//   console.log(checkedfile);
//   console.log(`second`);


//  const asyncFile = fs.readFile(`./myFile`, `UTF-8`, (error, data) => {
//         if (error) {
//               console.log(error);
            
//         } else {
//               console.log(data);
            
//         }
//   })

//   console.log(`third`); 
// output welcome to oracle file, second, third, welcome to oracle file 




// const newFile = fs.writeFileSync(`./new.txt`, `welcome to a new file`)
// console.log(`file created`);


// const fileasync = fs.writeFile(`./new.txt`,  `another file has been created`, {flag: "a"} ,(err, data) => {
//       if (err) {
//             console.log(err);
            
//       } else {
//             console.log(`file updated`);
            
//       }
// })


 const pe = require('prompt-sync')
 const prompt = pe();

 let message = prompt("what time to wake up?");
 let intervalInSecs = parseInt(prompt("2000 (in seconds):"));
 let repeatCount = parseInt(prompt("How many times should the reminder be shown? 7"));

 let count = 0;
 let intervalId = setInterval (() => {
       console.log(message);
       coutnt++;

       if (count >= repeatCount){
            clearInterval(intervalId);
             console.log("stop reminder");
            
       }
       
 },   intervalInSecs * 1000); 
 


// function sayHello (){
//       console.log(`Hello oracle`);
      
// }
// sayHello ();

//  function walkDog() {
//        return new Promise ((resolve, reject)=> {
//              setTimeout (() => {
//                    resolve(`You walked the dog`);
                  
//              }, 2000);
//        });
//  };

// async function doChores (){
//       console.log(`doing chores`);
//       const walkDogResult = await walkDog();
//       console.log(walkDogResult);
      
      
// }

// doChores();
