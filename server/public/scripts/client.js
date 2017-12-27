//class to create new objects to be posted in the server 
class objectOperation {
    constructor(x,y,type){
        this.x = x;
        this.y = y;
        this.type= type;
    }//end constructor
}//end class

$(document).ready(start);
//document ready function 
function start(){
    //event listeners
    $('#calculate').on('click', calculator);
    $('#clear').on('click', clearData);
}//end ready function 

//function that posts new objects to the server 
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
        },//end success function
        error: function (response){
            console.log('error', response);
            alert('Your missing a step, try again');
        }//end error alert function 
    })//end ajax
}//end calculator function 

//function that gets data from the server
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
            //appending to the DOM 
            $('#results').append('<li>' + value1 + ' ' + operator + ' ' + value2 + 
            ' ' + '=' + response.result + '</li>');
        }//end response function 
    })//end ajax
}//end doCalculation function 

//function that clears data fields on the page after a calculation has occurred. 
function clearData(){
    // $('#results').empty();
    console.log('clear button clicked');
    $('#firstValue').val('');
    $('#secondValue').val('');
}//end clear data function 


