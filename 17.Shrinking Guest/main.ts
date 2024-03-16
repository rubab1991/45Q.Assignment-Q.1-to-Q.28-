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
 // inform new dinner table won't arrive
console.log("new dinner table won't arrive thats why i can only invite two people for dinner");
//using while loop to remove guests from array
while(guests.length>2) 
{let removedguest = guests.pop();
console.log(`sorry ${removedguest} i can't invite you for dinner.`)};
//sending invitation to remaining  two guests that they are still invited
guests.forEach(guests=>console.log(`you are still invited ${guests}`));
guests.pop();
guests.pop();
console.log("empty list:",guests);

















