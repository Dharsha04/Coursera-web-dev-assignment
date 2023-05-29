let lengthInput = document.getElementById("inputlenvalue");
let lengthResult = document.getElementById("resultlenvalue");
let lengthInputVal = document.getElementById("inplenval");
let lengthResultVal = document.getElementById("reslenval");
var inputValue,resultValue;

lengthInput.addEventListener('keyup',lengthFunction);
lengthInputVal.addEventListener('change',lengthFunction);
lengthResultVal.addEventListener('change',lengthFunction);




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