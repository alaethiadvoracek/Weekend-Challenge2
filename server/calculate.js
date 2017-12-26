let calculate = {
    result: 0
}//end variable 

function math (operator) {
    let operation = operator.type;
    if(operation === 'add') {
        calculate.result = Number(operator.x) + Number(operator.y);  
    } //end if 
    else if (operation === 'subtract') {
        calculate.result = Number(operator.x) - Number(operator.y);
    }//end if else
     else if (operation === 'multiply') {
       calculate.result = Number(operator.x) * Number(operator.y);
    }//end if else
     else if (operation === 'divide') {
        calculate.result = Number(operator.x) / Number(operator.y);
    }//end if else 
    else {
        console.log('Choose an operation'); 
    }//end else
}//end math operator function 

module.exports = {
    math: math,
    calculate: calculate
}//end export