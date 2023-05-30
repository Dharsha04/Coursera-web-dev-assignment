let timeInput = document.getElementById("inputtimevalue");
let timeResult = document.getElementById("resulttimevalue");
let timeInputVal = document.getElementById("inptimeval");
let timeResultVal = document.getElementById("restimeval");

timeInput.addEventListener('keyup',timeFunction);
timeInputVal.addEventListener('change',timeFunction);
timeResultVal.addEventListener('change',timeFunction);



var inputValue,resultValue;

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
