const num = [1,2,3,4,6,7,8,9]


const out = num.some((item) => item % 2 === 0)

console.log(out)



// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
// It doesn't modify the array.