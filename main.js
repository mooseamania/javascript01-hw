
var userTemp = document.querySelector("#inputCelcTemp").value;

function calcFahrenheit() = {
var newTemp = ((userTemp-32) / 0.7);
return newTemp;
document.querySelector("h1").innerHTML = "That Temperature in Fahrenheit is " + newTemp;
}

function colorSwap(newTemp) = {
	if (newTemp > 59) {
		document.querySelectorAll("body").style.background-color = "red";
	}
	else if (newTemp < 30) {
		document.querySelectorAll("body").style.background-color = "blue";
	}
	else {
		document.querySelectorAll("body").style.background-color = "grey";
	}
}
document.querySelector("#calculate").addEventListener("click", calcFahrenheit);
document.querySelector("#calculate").addEventListener("click", colorSwap);
