const display = document.getElementById('display');

function Display(input){
    if(display.value == ''){

        display.value = input;
    }
    else{
        display.value +=input;
    }
}
function Clear(){
    display.value = '';
}
function Calc(){
    try{

        display.value = eval(display.value);
    }catch(error){
        display.value = 'undefined';
    }
}