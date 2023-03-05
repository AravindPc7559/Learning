const arr = ['samsung', 'apple' , 'redmi', 'nokia'];

arr.push("Sony", "microsoft");
// output: ['samsung', 'apple' , 'redmi', 'nokia', 'sony', 'microsoft']

console.log(arr)

// pushing an object to an array

arr.push({
    name:"Nothing"
})
//output: ['samsung', 'apple', 'redmi', 'nokia', {name: 'Nothing'}] 

// this will push an object into an array



// by using push method we can push values to the end of the array
// we can push single values and also an object by using {}