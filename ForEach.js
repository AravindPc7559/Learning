const Data = [
    {
        name:"IronMan",
        mark:62,
        place:"Kottayam"
    },
    {
        name:"Captain America",
        mark:22,
        place:"Ernakulam"
    },
    {
        name:"Hawk Eye",
        mark:22,
        place:"Thrissur"
    },
    {
        name:"Hulk",
        mark:22,
        place:"Calicut"
    },
]


let singleValue;

console.log(singleValue)

Data.forEach((item) => {
   if(item.name == "IronMan"){
    singleValue = item.mark;
   }
})



console.log(singleValue)




//  In forEach() it will return undefined in all cases. we can only get single single 
//  data inside the callback function of forEach() we can do whatever you like 
//  inside the callback function...