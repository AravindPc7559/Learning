const data = [
    {
        name:"Aravind",
    },
    {
        name:"Rahul",
    },
    {
        name:"Ajith",
    }
]

const place = ['Bangalore', 'Chennai', 'Delhi', 'Kolkata']

const num = [1, 2, 3, 4, 5, 6, 7]

const out = data.map((item,index) => {
    return {
        name:item.name,
        place:place[index]
    }
})


console.log(out)


const reduce = num.reduce((acc, item, index) => {
  return  acc= acc + item
}, 0)

console.log(reduce)


const lowestTOHighest = num.sort((a, b) => a>b ? -1 : 1)

console.log(lowestTOHighest)


function x(arr){

    let temp ;
    for(let i=0; i<=arr.length-1; i++){
        for(let j=arr.length-1; j>=0; j--){
            if(arr[j]>arr[i]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        return arr
    }

}


const value = x(num)

console.log(value)