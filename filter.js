const Data = [
    {
        name:"Hulk",
        mark:47,
        place:"malapuram"
    },
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

const filterData = Data.filter((item) => {
    return item.name === "Hulk" && item.mark < 39
})


console.log(filterData)




// In filter() it will return the full object in the array that matches the criteria.if there is no match, it will return an empty array.
// also if only one match, it will return the first element in the array.

//eg: [{name:"Hulk",mark:47,place:"malapuram"}]