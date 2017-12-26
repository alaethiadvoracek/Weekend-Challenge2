class objectOperation {
    constructor(x,y,operator){
        this.x = x;
        this.y = y;
        this.operator= operator;
    }//end constructor
}//end class

$(document).ready(start);

function start(){
    //event listeners
    $('#calculate').on('click', calculator);
    //$('#clear').on('click', clearData);
}//end ready function 

function calculator(){
    //makes sure button works
    console.log('button clicked')
    let value1 = $('#firstValue').val();
    let value2 = $('#secondValue').val();
    let operator = $('#operatorBtns').val();
    let calculation = new objectOperation(value1, value2, operator);
    $.ajax({
        method: 'POST',
        url: '/calculation',
        success: function (response){
            console.log('getting response:', response);
            doCalculation();
        },//end success function
        error: function (response){
            alert('Your missing something, try again');
        }//end error alert function 
    })//end ajax
}//end calculator function 
function doCalculation(){
    $.ajax({
        method: 'GET',
        url: '/calculation',
        success: function (response){
            console.log('response: ', response);
            let value1 = $('#firstValue').val();
            let value2 = $('#secondValue').val();
            let operator = $('#operatorBtns').val();
            let calculation = new objectOperation(value1, value2, operator);
            $('#results').append('<li>' + value1 + ' ' + operator + ' ' + value2 + ' ' + 
            '=' + response.result + '</li>');
        }//end response function 
    })//end ajax
}//end doCalculation function 
function clearData(){
    $('#results').empty();
    $('#firstValue').val('');
    $('#secondValue').val('');
}//end clear data function 


