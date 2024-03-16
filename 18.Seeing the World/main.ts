let places = ["iran","america","switzerland","canada","london"];
//array in original order
console.log ("original order",places);
//printing arrays copy in alphabetical order without modifing actual list
console.log("Alphabetical order:",[...places].sort());
//array still in its original order
console.log("still in its original order:",places)
// array in reverse alphabetical order without changing the order of the original list.
console.log("reversed alphabetical order:",[...places].reverse());
//still in its original order again
console.log("still in its original order:",places);
//Reverse the order of your list to show its order is changed
console.log("Reverse the order again",places.reverse() );
//again reverse the order to show it’s back to its original order
console.log("again reverse to its original order:",places.reverse());
//sort your array to alphabetical order
console.log("sort to alphabetical order:",places.sort());
//Sort to change the array in reverse alphabetical order
console.log("reverse alphabetical order:",places.reverse());







