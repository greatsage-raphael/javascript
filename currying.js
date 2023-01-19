// currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with a single argument

// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// var add2 = add(2);
// var add3 = add(3);

// console.log(add2(3)); // 5
// console.log(add3(2)); // 5

// // The above function can be rewritten as follows

// var add = x => y => x + y;

// var add2 = add(2);
// var add3 = add(3);

// console.log(add2(3)); // 5
// console.log(add3(2)); // 5



function currying(argument1){
    return function(argument2){
        return argument1 * argument2; 
    }
}


//basically currying here is similiar to currying in math. 
//Its a transformation of a function with multiple arguments into a sequence of nested functions each with a single argument. 
//fn(a,b,c) into fn(a)(b)(c)

console.log(currying(1)) // 6

function notCurried(arg1, arg2){
    return arg1 * arg2; 
}

console.log(notCurried(1)) // 6


//custom curry method 

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args); 
        } else {
            return function(...args2){
                return curried.apply(this, args.concat(args2)); 
            }
        }
    }
}

