let display = document.getElementById("display");

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    const expression = display.value;
    fetch(`http://localhost:8080/calculate?expression=${encodeURIComponent(expression)}`)
        .then((response) => response.text())
        .then((data) => {
            display.value = data;
        })
        .catch(() => {
            display.value = "Error";
        });
}