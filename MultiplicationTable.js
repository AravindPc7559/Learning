
let value = 0;

function x() {
    for(var i = 1 ; i<= 10 ; i++){
        value = value + 1;
        let result ;
        console.log("Mulitplication of", i)
        for(var j = 1 ; j<=10 ; j++){
            result = value * j
            console.log(value + "*" + j + "=" + result);
        }
    }
}


x();