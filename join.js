const data = [
    {
        name:"Aravind"
    },
    {
        name:"Rahul"
    },
    {
        name:"AKhil"
    }
]


const result = data.map(item => item.name)

console.log(result.join(''))


// this will take the name from the array as new array and while using join() it will take the values from the array 
// and join all the values in the array into a string.

//eg:['aravind','rahul','akhil'] into aravindrahulakhil