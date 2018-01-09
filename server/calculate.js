//object used in math function to set value of numbers and create a new object 
module.exports = class calculate { 
    constructor (result){
    this.result = result
    }//end constructor
}//end variable 

//function to do the math when an operator has been choosen. 
function math (firstNum, secondNum, operator) {
    let operation;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if(operation === '+') {
        operation = firstNum + secondNum;  
    } //end if 
    else if (operation === '-') {
        operation = firstNum - secondNum;
    }//end if else
     else if (operation === '*') {
       operation = firstNum * secondNum;
    }//end if else
     else if (operation === '/') {
        operation = firstNum / secondNum;
    }//end if else 
    else {
        console.log('Choose an operation'); 
    }//end else
    return operation 
}//end math operator function 
