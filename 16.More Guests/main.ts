let guests = ["ali","muhamad","umer","adil","rawaiz","rohail"];
for(let names of guests){console.log(`would you like to have dinner ${names}?`)};
let unabletoattend = "ali";
console.log(`${unabletoattend} wouldn't be able to come.`);
let newguest = "Ahmed";
guests[guests.indexOf(unabletoattend)] = newguest;
guests.forEach(guests => {console.log(`would you like to have dinner ${guests}?`)});
console.log("i just found a bigger table");
guests.unshift("tom");
guests.push("alia");
guests.splice(guests.length/2,0,"charles");
for(let names of guests){console.log(`would you like to have dinner ${names}?`);};





