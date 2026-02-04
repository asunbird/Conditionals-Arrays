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


// Exercise - 10.


// Exercise - 11.


// Exercise - 12.

// Exercise - 13.

// Exercise - 14.