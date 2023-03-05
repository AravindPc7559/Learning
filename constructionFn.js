function x(){
    var i =10;

    this.increment = function(){
      return  i = i+ 1;
    }

    this.descrement = function(){
       return i = i -1;
    }

}



const out = new x();


console.log(out.increment());
console.log(out.increment());
console.log(out.increment());
console.log(out.descrement());