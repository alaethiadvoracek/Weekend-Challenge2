class objectOperation {
    constructor(x,y,type){
        this.x = x;
        this.y = y;
        this.type= type;
    }//end constructor
}//end class

$(document).ready(start);

function start(){
    //event listeners
    $('#calculate').on('click', calculator);
    $('#clear').on('click', clearData);
}//end ready function 

function calculator(){
    //makes sure button works
    console.log('button clicked')
    let value1 = $('#firstValue').val();
    let value2 = $('#secondValue').val();
    let operator = $('#operatorBtns :selected').val();
    let calculation = new objectOperation(value1, value2, operator);
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: calculation,
        success: function (response){
            console.log('getting response:', response);
            doCalculation();
            Calculate();
        },//end success function
        error: function (response){
            console.log('error', response);
            alert('Your missing a step, try again');
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
            let operator = $('#operatorBtns :selected').text();
            let calculation = new objectOperation(value1, value2, operator);
            $('#results').append('<li>' + value1 + ' ' + operator + ' ' + value2 + 
            ' ' + '=' + response.result + '</li>');
        }//end response function 
    })//end ajax
}//end doCalculation function 
function Calculate(){
    $.ajax({
        method: "GET",
        url:'/calculate',
        success: function (response){
            console.log('getting response:', response);
            calculator();
        }//end success function 
    })//end ajax
}//end calculate function 
function clearData(){
    // $('#results').empty();
    console.log('clear button clicked');
    $('#firstValue').val('');
    $('#secondValue').val('');
}//end clear data function 


