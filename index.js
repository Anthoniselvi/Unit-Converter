let convertButton = document.getElementById("convertButton")
let inputValue = document.getElementById("inputValue")
let displayPoint1 = document.getElementById("display1")
let displayPoint2 = document.getElementById("display2")
let displayPoint3 = document.getElementById("display3")


convertButton.addEventListener('click', function(){
    
    let num = inputValue.value
    
    const meterToFeet = 3.281
    const feetToMeter = 0.305

    let convertToFeet = (num * meterToFeet).toFixed(3)
    let convertToMeter = (num * feetToMeter).toFixed(3)

    displayPoint1.textContent = `${num} meters = ${convertToFeet} feet | ${num} feet = ${convertToMeter} meters`
  
})

convertButton.addEventListener('click', function(){
    
    let num = inputValue.value

    const literToGallon = 0.264
    const gallonToLiter = 3.785

    let convertToGallon = (num * literToGallon).toFixed(3)
    let convertToLiter = (num * gallonToLiter).toFixed(3)

    displayPoint2.textContent = `${num} liters = ${convertToGallon} gallon | ${num} gallon = ${convertToLiter} liters`
  
})

convertButton.addEventListener('click', function(){

    let num = inputValue.value

    const kiloToPounds = 2.205
    const poundsToKilo = 0.453
  
    let convertToPounds = (num * kiloToPounds).toFixed(3)
    let convertToKilo = (num * poundsToKilo).toFixed(3)

    displayPoint3.textContent = `${num} kilos = ${convertToPounds} pounds | ${num} pounds = ${convertToKilo} kilos`
  
})





