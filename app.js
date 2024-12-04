
/* Destructuring Arrays */

// const numbers = [1,2,3];
// /* without destructuring */
// const first = numbers[0];
// const second = numbers[1];

/* with destructuring */
// const [first, second] = numbers;
// console.log(first); /* output 1 */
// console.log(second); /* output 2 */

// Using destructuring to skip elements:

// const numbers = [1,2,3,4];
// const [, , third]; = numbers;
// console.log(third); /* output 3 */


// destructuring using rest operator

// const numbers = [1,2,3,4];
// const [first, ...rest] = numbers;
// console.log(first); /* output 1 */
// console.log(rest); /* output [2,3,4] */

/* Destructuring Objects */ 

//   const user = {
//    name: `Kara`,
//    age: 30,
//    job: `Fashion Designer`
// };
// without destructuring

//  const name = user.name;
//  const age = user.age;

// with destructuring 

//  const {name, age} = user;
//  console.log(name); /* output Kara */
//  console.log(age); /* output 30 */

// renaming variables during destructuring

//  const user = {name: `Kara`, age: 30 };
//  const {name: fullName, age: years } = user;
//  console.log(fullName); /* output Kara */
//  console.log(years); /* output 30 */
 

 /* Assigning default value */

//  const user = {name: `Mike`};
//  const {name, age = 25, job = `Artist`} = user;

//  console.log(age); /* output 25 (default value) */
//  console.log(job); /* output Artist (default value) */

 /* Nested Destructuring */ 

//  const user = {
//     name: `Timothy`,
//     address: {
//         city: `Mercyroad`,
//         zip: `10011`
//     }
//   };

// const {address} = user
// console.log(address);

//  const { address: {city, zip}} = user;

//  console.log(city); /* output Mercyroad */
//  console.log(zip);  /* output 10011 */

 /* Function parameters with objects: */

 /* function greet ({name, age}) {
    return `Hello, ${name}. You are ${age}years old.`;
 }

 const user = {name: `Tishe`, age: 24};
 console.log(greet(user)); /* output Hello, Tishe. You are 24years old. */


 
 
//  /* Promises */ 
 const count = true;

  let countValue = new Promise ((resolve, reject) => {
     if (count) {
         resolve (`There is a count value.`);
      } else {
          reject (`There is no count value`);
      }
   });
    console.log(countValue);  // output Promise { 'There is a count value.' }


// //calculator with functions operations

// //  const calculator = {
//     add: function (a,b) {
//         return a + b;
//     },
//     subtract: function (a, b) {
//         return a - b;
//     },
//     multiply: function (a,b) {
//         return a * b;
//     },
//     divide: function (a,b) {
//         if (b === 0) {
//             console.error("Error: Division by zero is not allowed");
//             return null;
            
//         }
//         return a / b;
//  },
//  calculate: function (operation, num1, num2) {
//     switch (operation) {
//         case "add":
//             return this.add(num1, num2);
//         case "subtract":
//             return this.subtract(num1, num2);
//         case "multiply":
//             return this.multiply(num1, num2);
//         case "divide":
//             return this.divide(num1, num2);
//         default:
//             console.error("Invalid operation. Please use add, subtract, multiply or divide.");
//             return null;
//     }
//  },
// };
 
// // Example usage

// const num1= 15;
// const num2 = 9;

// console.log("Addition:", calculator.calculate("add", num1, num2)); // 24
// console.log("Subtration:", calculator.calculate("subtract", num1, num2)); // 6
// console.log("Multiplication:", calculator.calculate("multiply", num1, num2)); // 
// console.log("Division:", calculator.calculate("divide, num1, num2")); //

// // Invalid operation example

// console.log("Invalid operation:", calculator.calculate("modulus", num1, num2));




// function calculator (a, b, operator) {
    //  let result;

    //  switch (operator) {
    //      case '+':
    //        result = a + b;
    //        break;
    //      case `-`:
    //        result = a - b;
    //        break;
    //      case `*`:
    //        result = a * b;
    //        break;
    //      case `/`:
    //        if (b !== 0) {
    //          result = a / b;
    //        } else {
    //          result = `Error: Division by zero`;
    //        }
    //        break;
    //        default:
    //          result = `Invalid operator`;

    //  }
    //  return result;
 

 // Example usage

//  const a = 10;
//  const b = 5;
//  const operator = `+`;

//  console.log(`Result of ${a} ${operator} ${b} is:`);
//  calculate (a,b, operator);



// console.log(__dirname);

// function sub (a,b) {
//     return a - b;
// }
// console.log(sub(7,3));

// module.exports = sub


 
 
 









