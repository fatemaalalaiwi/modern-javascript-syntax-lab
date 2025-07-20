const flavors = ['vanilla', 'chocolate', 'strawberry'];

const iceCreamFlavors = flavors.map((flavor) => {
  return `${flavor} ice cream`;
});

console.log(iceCreamFlavors); 
// Prints: ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']



// ********* Exercise 1 **************************************

// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((num)=> {

    return (num*2);
});
console.log(numsTimesTwo);

// ********Array destructuring ***************************************
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet);
// Prints: 'Rover'
console.log(secondPet);
// Prints: 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]);
// Prints: 'Rover'
console.log(petsArray[1]);
// Prints: 'Snuffles'

// ********Exercise 2: ***************************************
// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//


const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);

// ********Object destructuring ***************************************
const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name);
// Prints: 'Alex'
console.log(role);
// Prints: 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); 
// Prints: 'Alex'
console.log(person.role); 
// Prints: 'Software Engineer'

// ********Exercise 3 : ***************************************
// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//


const car = {
  make: 'Audi',
  model: 'Q5',
};

const { make,model} = car;

console.log(make);
console.log(model);

// ********The spread operator (...)  ***************************************
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); 
// Prints: [1, 2, 3]

duplicateArray.push(4); 
// Using spread created a *copy* of the `originalArray`
// Changing it doesn't also change `originalArray`

console.log(duplicateArray); 
// Prints: [1, 2, 3, 4]
console.log(originalArray); 
// Prints: [1, 2, 3]

// *********enother Example***************************************
// const fruits = ['apple', 'orange', 'banana'];
// const vegetables = ['broccoli', 'carrot', 'spinach'];

// const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); 
// // Prints: ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']


// // *********Exercise 4: ************************************************************************
// // ! Exercise 4: 
// // a. Duplicate the provided `morePizzaToppings` array using the spread 
// //    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// // 
// // b. Console log the `uncontroversialPizzaToppings` variable.
// //
// // Starting code (don't modify this):

// const morePizzaToppings = ['Cheese', 'Sauce'];
// const uncontroversialPizzaToppings = [...morePizzaToppings]

// console.log(uncontroversialPizzaToppings)

// // *********Applying the spread operator on objects*********************
// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// const clonedObject = { ...originalObject };
// console.log('Clone: ', clonedObject); 
// // Prints: { foo: 'Hello', bar: 100 }

// // The use of the spread operator here differs significantly from direct assignment:
// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// const clonedObject = originalObject;
// clonedObject.foo = 'Goodbye';

// console.log(originalObject); 
// Prints: { foo: 'Goodbye', bar: 100 }

// The example above demonstrates a pitfall of attempting to clone an object without the spread operator. When clonedObject is assigned originalObject directly, it doesn’t create a new, independent object. This behavior is identical to not using the spread operator to duplicate an array.

// Instead, clonedObject becomes a reference to originalObject. This means any changes made to clonedObject also affect originalObject, as they both point to the same data.

// Like with arrays, this issue can be remedied when we apply the spread operator:

// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// // Copy the properties of `originalObject`:
// const clonedObject = { ...originalObject };

// // Update the properties of `clonedObject`:
// clonedObject.foo = 'Goodbye';
// clonedObject.bar = 0;

// console.log('Original: ', originalObject);
// // Prints: { foo: 'Hello', bar: 100 }
// console.log('Clone: ', clonedObject);

// Prints: { foo: 'Goodbye', bar: 0 }
// With the spread operator, clonedObject is a brand new object with a separate copy of the data from originalObject. Now, modifying clonedObject will not impact the originalObject

// *********Exercise 5: ************************************************************************
// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.
//


const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

// Your code here:

const myCar = {...anotherCar};

myCar.make= 'Honda';
myCar.model= 'Accord';

console.log('anotherCar' , anotherCar);
console.log('myCar' , myCar);


// *********Dynamic keys in objects************************************
// const fruitInventory = {
//   apples: 2,
//   oranges: 4,
// };

// const selectedFruit = 'apples';
// // Using the `selectedFruit` variable as a dynamic key:
// const selectedFruitCount = fruitInventory[selectedFruit];

// console.log(selectedFruitCount);
// // Prints: 2

// This technique can be extended to the creation of objects, where property names are determined dynamically:
// const fruitType = 'bananas';

// // Using the `fruitType` variable as a dynamic key:
// const fruitInventory = {
//   [fruitType]: 5,
// };

// console.log(fruitInventory); 
// // Prints: { bananas: 5 }

// ********* Exercise 6:************************************************************************
// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like 
//    'username', 'age', or 'email') to it.
// 
// b. Create an object named `userProfile`. 
// 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:


const propertyName = 'username';
const userProfile = {[propertyName]: 'Fatema'};

 
console.log(userProfile)
// { username: 'Fatema' }

// ********* Exercise 8:***********************************************************************

// function addTwoNumbers(numA = 1, numB = 2) {
//   return numA + numB;
// }

// addTwoNumbers(2);


// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
// 
// b. Give `noun` a default value of "cat" and `adjective` a default value of 
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but 
//    should substitute the appropriate parameters when it is supplied with 
//    arguments.
//
// Your code here:

function addTwopara(noun = 'cat', adjective = 'orange') {
  return (`The ${noun} is ${adjective}`);
}

console.log(addTwopara());



// ********* Exercise 9:************************************************************************
// const age = 22;
// let access;

// if (age > 21) {
//   access = 'Yes';
// } else {
//   access = 'No';
// }

// console.log(access); // 'Yes'

// or
// const age = 22;
// let access = age > 21 ? 'Yes' : 'No';

// console.log(access); // 'Yes'

// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):

const pizza = 'tasty';

// Your code here:

 pizza === 'tasty' ? 'yum' : 'yuck';

 console.log(pizza)

// ********* Boolean gates*******************************************
// The && operator
// When the first expression (false) being evaluated is falsy, result will be assigned that value (false).
// const result = false && 'foo';
// console.log(result);
// Prints: false
// When the first value is truthy ('hello') and the second value is falsy (''), result is assigned the empty string (''), as it is the first falsy value encountered.
// const result = 'hello' && '';
// console.log(result);
// Prints: ''
// When both values are truthy, the result is the value of the last expression ('bar').
// const result = 'foo' && 'bar';
// console.log(result); 
// Prints: 'bar'
// The || operator
// When the first expression ('') is falsy, result is assigned 'foo' as it’s the first truthy value.
// const result = '' || 'foo';
// console.log(result);
// Prints: 'foo'
// If the first value (2) is truthy, the evaluation stops, and result is assigned the first value (2).
// const result = 2 || 0;
// console.log(result);
// Prints: 2
// When all values being evaluated are falsy ('' and 0), result is assigned the last value (0), as no truthy value is found.

// Copy
// const result = '' || 0;
// console.log(result);
// // Prints: 0

const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;


console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);


// 1:foo
// 2:243
// 3:


// ********* Exercise 10:************************************************************************
// ! Exercise 10:
// ! 10.1: Set language
// a. Construct a single line of code that assigns a default value using the 
//    logical OR operator. This line should match the logic of the following 
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// b. Create a variable called `lang`.
//
// c. Assign `lang` the value of localLangConfig or 'en' as a default if 
//    `localLangConfig is falsy.
//
// d. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):

// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it `null`.

const lang = localLangConfig || 'en';

console.log(lang);

// ! 10.2: Set website theme
// Intro: In this exercise, you'll construct a single line of code that assigns 
//        a default value to a variable named `theme` using the logical OR 
//        operator. This line should match the logic of the following statement:
//
//        "theme is equal to savedUserTheme or the default value of light."
//
// a. Create a variable called `theme`.
//
// b. Assign `theme` the value of `savedUserTheme` or 'light' as a default.
//
// c. Log the value of `theme` to the console.
//
// Your code here (`savedUserTheme` is provided to get you started):

// Simulated user theme preference (change this variable to test)
const savedUserTheme = 'dark'; // Change to 'dark', etc., or leave it `null`.

const theme  =  savedUserTheme  || 'light';
console.log(theme);

// *********  Optional chaining********************************************
// const adventurer = {
//   name: 'Alice',
// };

// console.log(adventurer.dog.name); 
// // TypeError: Cannot read properties of undefined (reading 'name')

// const adventurer = {
//   name: 'Alice',
// };

// let dog = adventurer.dog?.name;

// console.log(dog); // undefined


// ********* Exercise 11:************************************************************************
// ! Exercise 11:
// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):

const adventurer = {
  name: 'Alice',
};

// Your code here:

let cat = adventurer.cat?.name
console.log(cat);