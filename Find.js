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
        name:"IronMan",
        mark:62,
        place:"Calicut"
    },
]



const data = Data.find((item) => item.name === "IronMan" && item.mark < 68)

console.log(data)



// In find method it will will only return the first obj in the array if you have multiple object that satisfies the condition.
// at that time it will only return the first obj in the array.it will not return multiple object as array. only return one object.