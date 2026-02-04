//Part-1. Conditionals

// Exercise - 1. Function to compare two values using equality operator (==)
function compareWithEquality(a, b) {
    if (a == b) {
        return "Equal";
    } else {
        return "Not equal";
    }
}

console.log(compareWithEquality(5, "5")); // Output: Equal
console.log(compareWithEquality(10, 10));  // Output: Equal
console.log(compareWithEquality(3, 7));  // Output: Not equal

// Exercise - 2. Function to compare two values using strict equality operator (===)
function compareWithStrictEquality(a, b) {
    if (a === b) {
        return "Strictly equal";
    } else {
        return "Not strictly equal";
    }
}

console.log(compareWithStrictEquality(5, "5"));  // Output: Not strictly equal
console.log(compareWithStrictEquality(5, 5));  // Output: Strictly equal

// Exercise - 3. Function to compare two numbers
function compareNumbers(a, b) {
    if (a > b) {
        return "a is greater than b";
    } else if (a < b) {
        return "a is less than b";
    } else if (a === b) {
        return "a is equal to b";
    }
}
console.log(compareNumbers(10, 5));  // Output: a is greater than b
console.log(compareNumbers(3, 7));   // Output: a is less than b
console.log(compareNumbers(4, 4));   // Output: a is equal to b

// Exercise - 4. Function to check age
function checkAge(age) {
    if (age < 18) {
        console.log("Minor");
    } else {
        console.log("Adult");
    }
    }

checkAge(16); // Output: Minor
checkAge(21); // Output: Adult

// Exercise - 5. Function to grade score
function gradeScore(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 70) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Fail";
    }
}
console.log(gradeScore(95)); // Output: Excellent
console.log(gradeScore(75)); // Output: Good
console.log(gradeScore(60)); // Output: Average
console.log(gradeScore(40)); // Output: Fail

// Exercise - 6. Function to provide weather message based on temperature
function weatherMessage(temperature) {
    if (temperature < 0) {
        return "Very cold";
    } else if (temperature >= 0 && temperature <= 15) {
        return "Cold";
    } else if (temperature >= 16 && temperature <= 25) {
        return "Warm";
    } else if (temperature > 25) {
        return "Hot";
    }
}
console.log(weatherMessage(-5));  // Output: Very cold
console.log(weatherMessage(10));  // Output: Cold
console.log(weatherMessage(20));  // Output: Warm
console.log(weatherMessage(30));  // Output: Hot

// Exercise - 7. Function to check access based on age and permission
function canAccess(age, hasPermission) {
    if (age >= 18 && hasPermission === true) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}
console.log(canAccess(28, false));  // Output: Access denied
console.log(canAccess(17, true));  // Output: Access denied
console.log(canAccess(23, true)); // Output: Access granted


//Part-2. Arrays

// Exercise - 8.
let menuItems = ["beef_kebab", "roast_chicken", "rice", "salad"];
console.log(menuItems);

// Exercise - 9.
const restaurantMenu = [
    ["pizza", "beef", "salad", "soup"],
    ["cookies", "cheescake", "ice-cream"],
];
// Function to print main dishes and desserts with formatting
function printMenu1(restaurantMenumenu) {
    let arrayContent = "Main dishes: ";
    let comma = ", ";
    let space = " ";
    for (let i = 0; i < restaurantMenu[0].length; i++) {
        arrayContent = arrayContent + restaurantMenumenu[i] + comma + space;
    }
    console.log(arrayContent);
  }
printMenu1(restaurantMenu[0]);

function printMenu2(restaurantMenumenu) {
    arrayContent = "Desserts: ";
    let comma = ", ";
    space = " ";
    for (let j = 0; j < restaurantMenu[1].length; j++) {
        arrayContent = arrayContent + restaurantMenumenu[j] + comma + space;
  }
    console.log(arrayContent);
}
printMenu2(restaurantMenu[1]);
// Output:
// Main dishes: pizza, beef , salad , soup, 
// Desserts: cookies , cheescake , ice-cream,

// Exercise - 10. Accessing specific items in a 2D array
const restaurantMenuItems = [
    ["pizza", "beef", "salad", "soup", "hummus"],
    ["cookies", "cheescake", "ice-cream", "brownie"],
];
console.log(restaurantMenuItems[0][0]); // Output: pizza
console.log(restaurantMenuItems[1][2]); // Output: ice-cream


// Exercise - 11.
restaurantMenuItems.push(["cream soup"]);
console.log(restaurantMenuItems); 
// Output:
// [
//   [ 'pizza', 'beef ', 'salad ', 'soup', 'hummus' ],
//   [ 'cookies ', 'cheescake ', 'ice-cream', 'brownie' ],
//   [ 'cream soup' ]
// ]


// Exercise - 12.
console.log(restaurantMenuItems.pop());
// Output: [ 'cream soup' ]


// Exercise - 13.
console.log(restaurantMenuItems); // Output:
// [
//   [ 'pizza', 'beef ', 'salad ', 'soup', 'hummus' ],
//   [ 'cookies ', 'cheescake ', 'ice-cream', 'brownie' ]
// ]

// console.log(restaurantMenuItems.shift()); / Print deleted item
// Output: [ 'pizza', 'beef ', 'salad ', 'soup', 'hummus' ]

// Remove the first item from menuItems and print the updated array.
function newManu () {
    restaurantMenuItems.shift();
    return restaurantMenuItems;
 }
newManu();
console.log(restaurantMenuItems);
// Output:
// [ [ 'cookies ', 'cheescake ', 'ice-cream', 'brownie' ] ]


// Exercise - 14.
let newMenuItems = ["grilled_salmon", "steak", "mashed_potatoes"];
newMenuItems.unshift("bread");
console.log(newMenuItems);

// Output: [ 'bread', 'grilled_salmon', 'steak', 'mashed_potatoes' ]

// Bonus task.

function printItems(newMenuItems) {

    for (let i = 0; i < newMenuItems.length; i++) {
        console.log(newMenuItems[i]);
    }
    
  }
printItems(newMenuItems);

// Output:
// bread
// grilled_salmon
// steak
// mashed_potatoes);

function printArrayIf(newMenuItems) {
    let itemName = "broccoli";
  if (newMenuItems.includes(itemName)) {
    console.log("The menu includes " + itemName);
  } else {
    console.log("The menu does not include " + itemName);
  }
}
printArrayIf(newMenuItems);
// Output: The menu does not include broccoli

let oldMenu = [];
let someItem = "souffle";
function addMenuItems(oldMenu) {
    if (oldMenu.includes(someItem)) {
        return oldMenu;
        } else {
        oldMenu.push(someItem);
        return oldMenu; 
    }
}
console.log(addMenuItems(oldMenu)); // Output: [ 'souffle' ]