let calculate = {
    result: 0
}

function math (object) {
    let operation = object.type;
    if(operation === 'add') {
        calc.result = Number(object.x) + Number(obj.y);  
    } else if (operation === 'subtract') {
        calc.result = Number(object.x) - Number(obj.y);
    } else if (operation === 'multiply') {
       calc.result = Number(object.x) * Number(obj.y);
    } else if (operation === 'divide') {
        calc.result = Number(object.x) / Number(obj.y);
    } else {
        console.log('Choose an operator'); 
    }
}

module.exports = {
    math: math,
    calculate: calculate
}