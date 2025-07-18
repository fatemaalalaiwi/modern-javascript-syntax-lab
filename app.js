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

// *********enother Example**********************************************
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); 
// Prints: ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']


// *********Exercise 4: **********************************************
// ! Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings = [...morePizzaToppings]

console.log(uncontroversialPizzaToppings)

// *********Applying the spread operator on objects**********************************************
const originalObject = {
  foo: 'Hello',
  bar: 100,
};

const clonedObject = { ...originalObject };
console.log('Clone: ', clonedObject); 
// Prints: { foo: 'Hello', bar: 100 }

// The use of the spread operator here differs significantly from direct assignment:
const originalObject = {
  foo: 'Hello',
  bar: 100,
};

const clonedObject = originalObject;
clonedObject.foo = 'Goodbye';

console.log(originalObject); 
// Prints: { foo: 'Goodbye', bar: 100 }

// The example above demonstrates a pitfall of attempting to clone an object without the spread operator. When clonedObject is assigned originalObject directly, it doesn’t create a new, independent object. This behavior is identical to not using the spread operator to duplicate an array.

// Instead, clonedObject becomes a reference to originalObject. This means any changes made to clonedObject also affect originalObject, as they both point to the same data.

// Like with arrays, this issue can be remedied when we apply the spread operator:

const originalObject = {
  foo: 'Hello',
  bar: 100,
};

// Copy the properties of `originalObject`:
const clonedObject = { ...originalObject };

// Update the properties of `clonedObject`:
clonedObject.foo = 'Goodbye';
clonedObject.bar = 0;

console.log('Original: ', originalObject);
// Prints: { foo: 'Hello', bar: 100 }
console.log('Clone: ', clonedObject);
// Prints: { foo: 'Goodbye', bar: 0 }
// With the spread operator, clonedObject is a brand new object with a separate copy of the data from originalObject. Now, modifying clonedObject will not impact the originalObject

// *********Exercise 5: **********************************************
// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

// Your code here:

