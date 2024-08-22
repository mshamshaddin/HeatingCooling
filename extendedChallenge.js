let tempCelcius = 50;
let targetUnit = "K";

switch(targetUnit){
case "C": 
    console.log("No conversion needed")
break;

case "F":
    let temp = tempCelcius * 1.8;
    let final = x + 32;
    console.log("For case F, Celcius converted to Farenheit is " + final);
break;

case "K":
    let calculatedKelvin = tempCelcius + 273.15;
    console.log ("For case K, Celcius converted to Kelvin is " + calculatedKelvin)
    break;
}

