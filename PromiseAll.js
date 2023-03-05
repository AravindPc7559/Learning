
// Immediately Invoked Function

(function(){
    console.log("This data is invoked by IIFE " + new Date().getMonth());
})();


// Promise All


const promise1 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 4000)
})

const promise2 = new  Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(40);
    }, 3000)
})

const promise3 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000)
})


Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log("Promise All" + res)
})



// Promise AllSettled


const promise4 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 4000)
})



const promise5 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is a rejected promise");
    }, 6000)
})

const settles = [promise4, promise5]


Promise.allSettled(settles).then((res) => {
    console.log("All Settled" + res)
})



// Promise Any


const promise6 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise.any resolved 1item");
    }, 4000)
})



const promise7 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is a rejected promise");
    }, 6000)
})

const promise8 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise.any resolved 2item");
    }, 3000)
})


const promises = [promise6, promise7, promise8]

Promise.any(promises).then((res) => {
    console.log("Promise Any" + res);
})


// Promise Rece

const promise9 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is a rejected promise race");
    }, 6000)
})

const promise10 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise.any resolved 2item reace");
    }, 3000)
})


const promisess = [promise9, promise10]



Promise.race(promisess).then((res) => {
    console.log(res);
})




// Callbacks and Callbacks hell


function v(value ,callback){
    setTimeout(() => {
        return callback(value);
    }, 1000)
}

function s(value ,callback){
    setTimeout(() => {
        return callback(value + 2);
    }, 1000)
}


v(200, (res) => {
    s(res, (val) =>  {
        console.log("This is the callback added response" + val);
    })
})


// Timing function


const myInterval = setInterval(() => {
    console.log(new Date());
}, 5000)


setTimeout(() => {
    clearInterval(myInterval)
}, 21000)


// Async Await
const data = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
            },3000)
    })
}


async function g(){
    console.log("Starting")



   const result =  await data()

    console.log(result);

    console.log("Ending")
}

g();



// remove greg from the array

let people = ["Greg", "Mary", "Devon", "James"];


function removeVal(arr, name){
   return arr.filter((item) => item !== name)
}


const datazz = removeVal(people, ["Mary", "Greg"]);

console.log(datazz);

const txt = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";


const smallTxt = txt.substring(0, 10)

console.log(smallTxt);


const arrrr = [1,2 ,3,[ 4, 5]]


const  ddda = arrrr.flat()

console.log(ddda);

console.log(arrrr);


