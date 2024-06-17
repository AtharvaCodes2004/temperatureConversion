const textBox = document.getElementById("textBox")
const toFarenheit = document.getElementById("toFarenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")

function Convert(){
    if(toFarenheit.checked){
        temp = Number(textBox.value)
        temp = temp * 9/5 + 32
        result.innerHTML = temp.toFixed(1) + "°F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value)
        temp = (temp-32)*(5/9)
        result.innerHTML = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a Unit"
    }
}