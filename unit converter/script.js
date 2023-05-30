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


