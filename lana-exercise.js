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

// Exercise - 2.
function compareWithStrictEquality(a, b) {
    if (a === b) {
        return "Strictly equal";
    } else {
        return "Not strictly equal";
    }
}

console.log(compareWithStrictEquality(5, "5"));  // Output: Not strictly equal
console.log(compareWithStrictEquality(5, 5));  // Output: Strictly equal

// Exercise - 3.
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

// Exercise - 4.
function checkAge(age) {
    if (age < 18) {
        console.log("Minor");
    } else {
        console.log("Adult");
    }
    }

checkAge(16); // Output: Minor
checkAge(21); // Output: Adult

// Exercise - 5.
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

// Exercise - 6.

// Exercise - 7.

// Exercise - 8.

// Exercise - 9.

// Exercise - 10.

// Exercise - 11.

// Exercise - 12.

// Exercise - 13.

// Exercise - 14.