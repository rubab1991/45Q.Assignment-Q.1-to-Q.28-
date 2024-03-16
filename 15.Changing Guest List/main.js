var guests = ["ali", "muhamad", "umer", "adil"];
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
