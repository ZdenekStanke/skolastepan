function multiplyBy()
{
    num1 = parseFloat(document.getElementById("firstNumber").value);
    num2 = parseFloat(document.getElementById("secondNumber").value);
    num3 = parseFloat(document.getElementById("threeNumber").value);
    num4 =parseFloat(document.getElementById("ForNumber").value);
    document.getElementById("result").innerHTML = ((num1) - (num2 )) ;
    document.getElementById("result2").innerHTML = (( num3) - ( num4));
}
function divideBy()
{
    num1 = parseFloat(document.getElementById("firstNumber").value);
    num2 = parseFloat(document.getElementById("secondNumber").value);
    num3 = parseFloat(document.getElementById("threeNumber").value);
    num4 =parseFloat(document.getElementById("ForNumber").value);
    document.getElementById("result").innerHTML = ((num2) - (num1 )) ;
    document.getElementById("result2").innerHTML = (( num4) - ( num3));

}
function ukapicu(){
    num1 = parseFloat(document.getElementById("firstNumber").value);
    num2 = parseFloat(document.getElementById("secondNumber").value);
    num3 = parseFloat(document.getElementById("threeNumber").value);
    num4 =parseFloat(document.getElementById("ForNumber").value);
    absu = Math.sqrt((num1 * num1) + (num3 * num3));
    absv = Math.sqrt((num2 * num2) + (num4 * num4));
    document.getElementById("odchvilka").innerText = Math.acos(((num1 * num2) + (num3 * num4)) / (absu * absv)) * (180/Math.PI);
    console.log({absu})
    console.log({absv})





}
