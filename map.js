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


const data = Data.map((item ) => {
    return {
        name:item.name,
        mark:item.mark,
        country:"India"
    };
})


console.log(data);  //this data is a new array that returned from that function.




// It will return a  new array with the values that only we needed. in this case if we write return data.name the it 
// will create a new array of names from Data array
// eg: ["IronMan","Captain America","Hawk Eye","Hulk"]