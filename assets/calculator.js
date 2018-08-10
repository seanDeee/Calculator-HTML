function backSpace() {
    var value = document.getElementById("answer").value;
    document.getElementById("answer").value = value.substr(0, value.length - 1);
}

function Calculate(button) {
    document.forms["Calculate"]["Input"].value += button;
}

/*Function to Turn off Calculator*/
function turnOff() {
    document.getElementById("power1").disabled = true;
    document.getElementById("power2").disabled = true;
    document.getElementById("power3").disabled = true;
    document.getElementById("power4").disabled = true;
    document.getElementById("power5").disabled = true;
    document.getElementById("power6").disabled = true;
    document.getElementById("power7").disabled = true;
    document.getElementById("power8").disabled = true;
    document.getElementById("power9").disabled = true;
    document.getElementById("power0").disabled = true;

    document.getElementById("powerPoint").disabled = true;
    document.getElementById("powerEquals").disabled = true;
    document.getElementById("powerAdd").disabled = true;
    document.getElementById("powerSubtract").disabled = true;
    document.getElementById("powerMultiplty").disabled = true;
    document.getElementById("powerDivide").disabled = true;

    document.getElementById("powerCos").disabled = true;
    document.getElementById("powerSin").disabled = true;
    document.getElementById("powerTan").disabled = true;
    document.getElementById("powerSqrt").disabled = true;
    document.getElementById("powerLog").disabled = true;
    /*document.getElementById("powerExp").disabled = true; */
    document.getElementById("powerPow").disabled = true;

    /*clear the form on turn off*/
    document.getElementById("answer").value = "";

    /*the status bar will be red if it is off*/
    document.getElementById("status").style.backgroundColor = "#e62e00";
}

/*Function to Turn On Calculator*/
function turnOn() {
    document.getElementById("power1").disabled = false;
    document.getElementById("power2").disabled = false;
    document.getElementById("power3").disabled = false;
    document.getElementById("power4").disabled = false;
    document.getElementById("power5").disabled = false;
    document.getElementById("power6").disabled = false;
    document.getElementById("power7").disabled = false;
    document.getElementById("power8").disabled = false;
    document.getElementById("power9").disabled = false;
    document.getElementById("power0").disabled = false;

    document.getElementById("powerPoint").disabled = false;
    document.getElementById("powerEquals").disabled = false;
    document.getElementById("powerAdd").disabled = false;
    document.getElementById("powerSubtract").disabled = false;
    document.getElementById("powerMultiplty").disabled = false;
    document.getElementById("powerDivide").disabled = false;

    document.getElementById("powerCos").disabled = false;
    document.getElementById("powerSin").disabled = false;
    document.getElementById("powerTan").disabled = false;
    document.getElementById("powerSqrt").disabled = false;
    document.getElementById("powerLog").disabled = false;
    /*document.getElementById("powerExp").disabled = false; */
    document.getElementById("powerPow").disabled = false;

    /*the status bar will be green if it is on*/
    document.getElementById("status").style.backgroundColor = "#1aff1a";
}


function calcCos(Calculate) {
    document.forms["Calculate"]["Input"].value = Math.cos(Calculate.Input.value);
    /*or this code (either code will work)*/
    /* Calculate.Input.value = Math.cos(Calculate.Input.value); */
}

function calcSin(Calculate) {
    document.forms["Calculate"]["Input"].value = Math.sin(Calculate.Input.value);
}

function calcTan(Calculate) {
    document.forms["Calculate"]["Input"].value = Math.tan(Calculate.Input.value);
}

function calcSqrt(Calculate) {
    document.forms["Calculate"]["Input"].value = Math.sqrt(Calculate.Input.value);
}

function calcln(Calculate) {
    document.forms["Calculate"]["Input"].value = Math.log(Calculate.Input.value);
}

function calcExp(Calculate) {
    document.forms["Calculate"]["Input"].value = Math.exp(Calculate.Input.value);
}

function calcX2(Calculate) {
    document.forms["Calculate"]["Input"].value = Math.pow(2, Calculate.Input.value);
}

function calculateResult(Calculate){
    document.forms["Calculate"]["Input"].value = eval(Calculate.Input.value);
    
    var a = document.getElementById("answer").value;
    if (a == "undefined" || a == "function Error() { [native code] }") {
        document.getElementById("answer").value ="Error";
    }
}
