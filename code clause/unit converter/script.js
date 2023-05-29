var massInput = document.getElementById('inputmassvalue');
var massResult = document.getElementById('resultmassvalue');
var massInputVal = document.getElementById('inpmassval');
var massResultVal = document.getElementById('resmassval');

var inputValue,resultValue;
massInput.addEventListener('keyup',massFunction);
massInputVal.addEventListener('change',massFunction);
massResultVal.addEventListener('change',massFunction);

inputValue = massInputVal.value;
resultValue = massResultVal.value;

function massFunction(){

    inputValue = massInputVal.value;
    resultValue = massResultVal.value;

    if(inputValue === "milligram" && resultValue === "gram"){
             massResult.value = Number(massInput.value) * 0.001;
    }

    else if(inputValue === "milligram" && resultValue === "kilogram"){
             massResult.value = Number(massInput.value) * 0.000001;
    }

    else if(inputValue === "milligram" && resultValue === "metric-ton"){
              massResult.value = Number(massInput.value) * 0.000000001;
    }



    if(inputValue === "gram" && resultValue === "milligram"){
        massResult.value = Number(massInput.value) * 1000;
    }

    else if(inputValue === "gram" && resultValue === "kilogram"){
        massResult.value = Number(massInput.value) * 0.001;
    }

    else if(inputValue === "gram" && resultValue === "metric-ton"){
         massResult.value = Number(massInput.value) * 0.000001;
    }
    


    if(inputValue === "kilogram" && resultValue === "gram"){
        massResult.value = Number(massInput.value) * 1000;
    }

    else if(inputValue === "kilogram" && resultValue === "milligram"){
        massResult.value = Number(massInput.value) * 1000000;
    }

    else if(inputValue === "kilogram" && resultValue === "metric-ton"){
         massResult.value = Number(massInput.value) * 0.001;
    }
    



    if(inputValue === "metric-ton" && resultValue === "gram"){
        massResult.value = Number(massInput.value) * 1000000;
    }

    else if(inputValue === "metric-ton" && resultValue === "kilogram"){
        massResult.value = Number(massInput.value) * 1000;
    }

    else if(inputValue === "metric-ton" && resultValue === "milligram"){
         massResult.value = Number(massInput.value) * 1000000000;
    }

}

let lengthInput = document.getElementById("inputlenvalue");
let lengthResult = document.getElementById("resultlenvalue");
let lengthInputVal = document.getElementById("inplenval");
let lengthResultVal = document.getElementById("reslenval");

lengthInput.addEventListener('keyup',lengthFunction);
function lengthFunction(){
    inputValue = lengthInputVal.value;
    resultValue = lengthResultVal.value;

    if(inputValue === "millimeter" && resultValue === "centimeter"){
             lengthResult.value = Number(lengthInput.value) * 0.1;
    }

    else if(inputValue === "millimeter" && resultValue === "kilometer"){
             lengthResult.value = Number(lengthInput.value) * 0.000001;
    }

    else if(inputValue === "millimeter" && resultValue === "meter"){
              lengthResult.value = Number(lengthInput.value) * 0.001;
    }



    if(inputValue === "centimeter" && resultValue === "millimeter"){
        lengthResult.value = Number(lengthInput.value) * 1000;
    }

    else if(inputValue === "centimeter" && resultValue === "kilometer"){
        lengthResult.value = Number(lengthInput.value) * 0.00001;
    }

    else if(inputValue === "centimeter" && resultValue === "meter"){
         lengthResult.value = Number(lengthInput.value) * 0.01;
    }
    


    if(inputValue === "kilometer" && resultValue === "millimeter"){
        lengthResult.value = Number(lengthInput.value) * 1000000;
    }

    else if(inputValue === "kilometer" && resultValue === "meter"){
        lengthResult.value = Number(lengthInput.value) * 1000;
    }

    else if(inputValue === "kilometer" && resultValue === "centimeter"){
         lengthResult.value = Number(lengthInput.value) * 100000;
    }
    



    if(inputValue === "meter" && resultValue === "millimeter"){
        lengthResult.value = Number(lengthInput.value) * 1000;
    }

    else if(inputValue === "meter" && resultValue === "kilometer"){
        lengthResult.value = Number(lengthInput.value) * 0.001;
    }

    else if(inputValue === "meter" && resultValue === "centimeter"){
         lengthResult.value = Number(lengthInput.value) * 100;
    }
}

let timeInput = document.getElementById("inputtimevalue");
let timeResult = document.getElementById("resulttimevalue");
let timeInputVal = document.getElementById("inptimeval");
let timeResultVal = document.getElementById("restimeval");

timeInput.addEventListener('keyup',timeFunction);
function timeFunction(){
    inputValue = timeInputVal.value;
    resultValue = timeResultVal.value;

    if(inputValue === "hour" && resultValue === "minute"){
             timeResult.value = Number(timeInput.value) * 60;
    }

    else if(inputValue === "hour" && resultValue === "second"){
             timeResult.value = Number(timeInput.value) * 3600;
    }

    else if(inputValue === "hour" && resultValue === "millisecond"){
              timeResult.value = Number(timeInput.value) * 3600000;
    }



    if(inputValue === "minute" && resultValue === "hour"){
        timeResult.value = Number(timeInput.value) * 0.0166667;
    }

    else if(inputValue === "minute" && resultValue === "second"){
        timeResult.value = Number(timeInput.value) * 60;
    }

    else if(inputValue === "minute" && resultValue === "millisecond"){
         timeResult.value = Number(timeInput.value) * 60000;
    }
    


    if(inputValue === "second" && resultValue === "hour"){
        timeResult.value = Number(timeInput.value) * 0.000277778;
    }

    else if(inputValue === "second" && resultValue === "millisecond"){
        timeResult.value = Number(timeInput.value) * 1000;
    }

    else if(inputValue === "second" && resultValue === "minute"){
         timeResult.value = Number(timeInput.value) * 0.0166667;
    }
    



    if(inputValue === "millisecond" && resultValue === "hour"){
        timeResult.value = Number(timeInput.value) * 2.778 * 0.0000001;
    }

    else if(inputValue === "millisecond" && resultValue === "minute"){
        timeResult.value = Number(timeInput.value) * 1.667 * 0.00001;
    }

    else if(inputValue === "millisecond" && resultValue === "second"){
         timeResult.value = Number(timeInput.value) * 0.001;
    }
}
