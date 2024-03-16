var guests = ["ali", "muhamad", "umer", "adil", "rawaiz", "rohail"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var names = guests_1[_i];
    console.log("would you like to have dinner ".concat(names, "?"));
}
;
var unabletoattend = "ali";
console.log("".concat(unabletoattend, " wouldn't be able to come."));
var newguest = "Ahmed";
guests[guests.indexOf(unabletoattend)] = newguest;
guests.forEach(function (guests) { console.log("would you like to have dinner ".concat(guests, "?")); });
console.log("i just found a bigger table");
guests.unshift("tom");
guests.push("alia");
guests.splice(guests.length / 2, 0, "charles");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var names = guests_2[_a];
    console.log("would you like to have dinner ".concat(names, "?"));
}
;
// inform new dinner table won't arrive
console.log("new dinner table won't arrive thats why i can only invite two people for dinner");
//using while loop to remove guests from array
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("sorry ".concat(removedguest, " i can't invite you for dinner."));
}
;
//sending invitation to remaining  two guests that they are still invited
guests.forEach(function (guests) { return console.log("you are still invited ".concat(guests)); });
guests.pop();
guests.pop();
console.log("empty list:", guests);
