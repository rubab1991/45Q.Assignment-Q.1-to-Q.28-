

let guests = ["ali","muhamad","umer","adil"];
for(let names of guests){console.log(`would you like to have dinner ${names}?`)};
let unabletoattend = "ali";
console.log(`${unabletoattend} wouldn't be able to come.`);
let newguest = "Ahmed";
guests[guests.indexOf(unabletoattend)] = newguest;
guests.forEach(guests => {console.log(`would you like to have dinner ${guests}?`)});






