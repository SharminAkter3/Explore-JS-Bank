function handleDeposite(){
    // var inputValue= document.getElementById("deposite-input").value;  //input field tai value ta ky nichi 
    var convertedInputValue = getConvertedValue("deposite-input", "value");

    // var depsoiteAmount = document.getElementById("deposite-amount").innerText;   //element tai innerText nibo
    var convertedDepositeAmount= getConvertedValue("deposite-amount", "innerText");

    // console.log(convertedInputValue, convertedDepositeAmount);

    var sum = convertedInputValue + convertedDepositeAmount;
    // console.log(sum);
    setInnerText("deposite-amount", sum);
    document.getElementById("deposite-input").value="";

    // var totalAmount = document.getElementById("total-amount").innerText;
    var convertedTotalAmount = getConvertedValue("total-amount", "innerText");

    var totalSum = convertedInputValue + convertedTotalAmount;
    setInnerText("total-amount", totalSum);
    document.getElementById("deposite-input").value="";
}

function getConvertedValue(id, element){
    if(element == "innerText"){
       var value = document.getElementById(id).innerText;
       return parseFloat(value);
    } 
    else{
        var value = document.getElementById(id).value;
        return parseFloat(value);
    }
}

function handleWithdraw(){
    // var inputWithdraw= document.getElementById("withdraw-input").value;   
    var convertedWithdrawValue = getConvertedValue("withdraw-input", "value");

    // var withdrawAmount = document.getElementById("withdraw-amount").innerText;  //element tai innerText nibo
    var convertedWithdrawAmount= getConvertedValue("withdraw-amount", "innerText");

    var sum = convertedWithdrawValue + convertedWithdrawAmount;
    console.log(sum)

    setInnerText("withdraw-amount", sum);
    document.getElementById("withdraw-input").value="";

    // var totalAmount = document.getElementById("total-amount").innerText;
    var convertedTotalAmount = getConvertedValue("total-amount", "innerText");
 
    var totalSum = convertedTotalAmount - convertedWithdrawValue;
    setInnerText("total-amount", totalSum);
    document.getElementById("withdraw-input").value="";

}

function setInnerText(id, value){
    document.getElementById(id).innerText=value;
}



