var result = document.getElementById("result");

function display(number) {

    result.value += number;
}
function calculate() {

    try{
            
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;

    }
    catch(error){
        result.value ="Error";
    }
}
function clrs(){
 
        result.value = "";
}

function dle(){
  
    result.value = result.value.slice(0, -1);
}