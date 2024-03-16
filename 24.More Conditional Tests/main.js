//Tests for equality and inequality with strings
var banana = "banana";
var uppercasebanana = "BANANA";
var ten = 10;
var five = 5;
var fruits = ["apple", "banana", "orange"];
//Eequality test:
console.log("banana is equal to banana");
console.log(banana == banana);
//inequality test:
console.log("banana is not equal to banana");
console.log(banana != banana);
//Tests using the lower case function
console.log("uppercasebanana is equal to uppercasebanana.toLowerCase");
console.log(uppercasebanana == uppercasebanana.toLowerCase());
// Numerical tests :
// equality and inequality
console.log("5 is equal to 5");
console.log(five == 5);
console.log("5 is not equal to 10");
console.log(five != ten);
//greater than and less than,
console.log("5 is greater than  10");
console.log(5 > 10);
console.log("5 is less than 10");
console.log(5 < 10);
//greater than or equal to and less than or equal to
console.log("5 is greater than or equal to  10");
console.log(5 >= 10);
console.log("5 is less than or equal to 10");
console.log(5 <= 10);
//Tests using "and" and "or" operators:
//operator "and"( && )
console.log("5 is greater 10 and 5 is less than 6 ");
console.log(5 > 10 && 5 < 6);
//operator "or" ( || )
console.log("5 is less than 10 or 5 is greater than zero");
console.log(5 < 10 || 5 > 0);
//Test whether an item is included a array
console.log("is orange included in fruits");
console.log(fruits.includes("orange"));
//Test whether an item is not included a array
console.log("is orange not included in fruits");
console.log(!fruits.includes("orange"));
