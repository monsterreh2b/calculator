

var input = [];
var temp;
var temp2;
var final;

$(document).ready(function(){

function sum(x,y){
    final= x + y;
    // console.log(sum);
}

function minus(x,y){
    final = x-y;
}

function mult(x,y){
    final  = x * y;
}

function divide(x,y){
    final  = x/y;
}

function power(x,y){
    final  = Math.pow(x, y);
}

// function execute(){
//     input.push(temp);
//     // console.log(input);
// }








// $("#button-equal").on("click", function(){



// });
$(".number").on("click", function(){

    var temp = ($(this).attr("value"));
    temp = parseInt(temp);
    $("#result").html(temp);
     input.push(temp);
    // execute();

});

$(".operator").on("click", function(){
    var temp2 = ($(this).attr("value"));
    if (temp2=="plus"){
        $("#result").html("+");
    }else if (temp2=="minus"){
        $("#result").html("-");
    }else if (temp2=="divide"){
        $("#result").html("/");
    }else if (temp2=="times"){
        $("#result").html("*");
    }else if (temp2=="power"){
        $("#result").html("^");
    }
    
input.push(temp2);


});
$(".equal").on("click", function(){
    // var temp2 = ($(this).attr("value"));
    //  $("#result").html(temp2);
    if (input[1]=="plus"){
       console.log(input);
       sum(input[0],input[2]);
        $("#result").html(final);
    }else if (input[1] =="minus"){
        minus(input[0],input[2]);
$("#result").html(final);
    }else if (input[1]=="divide"){
        divide(input[0],input[2]);
$("#result").html(final);
    }else if (input[1]=="times"){
        mult(input[0],input[2]);
        $("#result").html(final);
    }else if (input[1]=="power"){
        power(input[0],input[2]);
        $("#result").html(final);
    }
});


$(".clear").on("click", function(){
    input=[];
    final=0;
    temp;
    temp2;
     $("#result").html("");


});
// $(".equal").on("click", function(){


// });

});