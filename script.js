



function formHandler(event){


    let degreeInput = document.getElementById("degreeInput").value;
    /* this is to convert the nuber in integer */
    degreeInput = parseInt(degreeInput);

    let coversionType = document.getElementById("conversionType").value;

    let answer = "";


    if(coversionType === "Fahrenheit"){
        /* this mean convert to Fahrenheit */

        answer = (degreeInput * 1.8) + 32

    } else if( coversionType === "Celsius"){
        answer = (degreeInput - 32) / 1.8
    }

   // alert("It is working" + answer);

   // Displayed the answer in the input field
   document.getElementById("answer").value = answer
    event.preventDefault();
}

// listener
let form = document.getElementById("temperatureForm");
form.addEventListener("submit", formHandler);