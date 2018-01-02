//object used in math function to set value of numbers and create a new object 
let calculate = {
    result: math()
}//end variable 

//function to do the math when an operator has been choosen. 
function math (operator) {
    let operation = operator.type;
    if(operation === '+') {
        calculate.result = Number(operator.x) + Number(operator.y);  
    } //end if 
    else if (operation === '-') {
        calculate.result = Number(operator.x) - Number(operator.y);
    }//end if else
     else if (operation === '*') {
       calculate.result = Number(operator.x) * Number(operator.y);
    }//end if else
     else if (operation === '/') {
        calculate.result = Number(operator.x) / Number(operator.y);
    }//end if else 
    else {
        console.log('Choose an operation'); 
    }//end else
}//end math operator function 
console.log('function worked');
//export function 
module.exports = {
    math: math,
    calculate: calculate
}//end export