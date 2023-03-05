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


const data = Data.reduce((acc, item, index) => {
  return acc = acc + item.mark;
},0)


console.log(data)

