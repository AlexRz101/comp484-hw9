//Section 1, define displayDate function
function displayDate() {
    let date = new Date(); //Create Date object

    let month = date.getMonth() + 1; //Months are zero-based
    if (month < 10) { //Add leading zero if month is less than 10
        month = '0' + month;
    }

    let day = date.getDate(); //Fetch day
    if (day < 10) { //Add leading zero if day is less than 10
        day = '0' + day;
    }

    let year = date.getFullYear(); //Fetch year
    const formattedDate = `${month}/${day}/${year}`; //Format date as MM/DD/YYYY
    document.getElementById("dateDisplay").innerText = formattedDate; //Element ID
}

displayDate(); //Call function to display date

//Section 2
function numberConversion() {
    const num1 = "21";
    const num2 = "69";
    const num3 = "rizz"; //NaN
    const num4 = "420.67";

    const num1Converted = Number(num1); //Convert string to number
    const num2Converted = Number(num2);
    const num3Converted = Number(num3); //Return NaN
    const num4Converted = Number(num4);

    //Row 1
    document.getElementById("original1").innerText = num1;
    document.getElementById("converted1").innerText = num1Converted;
    document.getElementById("isNaN1").innerText = Number.isNaN(num1Converted);
    document.getElementById("isInteger1").innerText = Number.isInteger(num1Converted);

    //Row 2
    document.getElementById("original2").innerText = num2;
    document.getElementById("converted2").innerText = num2Converted;
    document.getElementById("isNaN2").innerText = Number.isNaN(num2Converted);
    document.getElementById("isInteger2").innerText = Number.isInteger(num2Converted);

    //Row 3
    document.getElementById("original3").innerText = num3;
    document.getElementById("converted3").innerText = num3Converted;
    document.getElementById("isNaN3").innerText = Number.isNaN(num3Converted);
    document.getElementById("isInteger3").innerText = Number.isInteger(num3Converted);

    //Row 4
    document.getElementById("original4").innerText = num4;
    document.getElementById("converted4").innerText = num4Converted;
    document.getElementById("isNaN4").innerText = Number.isNaN(num4Converted);
    document.getElementById("isInteger4").innerText = Number.isInteger(num4Converted);
}

numberConversion(); //Call function to display numbers

//Section 3
function numbersAndArithmetic() {
    const itemPrice = 19.99;
    const taxRate = 0.0875;
    const shippingCost = 5;

    const taxAmount = itemPrice * taxRate; //Multiplication
    const total = itemPrice + taxAmount + shippingCost; //Addition

    //Print each value to its own element
    document.getElementById("printItemPrice").innerText = "$" + itemPrice.toFixed(2);
    document.getElementById("printTaxRate").innerText = (taxRate * 100).toFixed(2) + "%";
    document.getElementById("printShippingCost").innerText = "$" + shippingCost.toFixed(2);
    document.getElementById("printTaxAmount").innerText = "$" + taxAmount.toFixed(2); //Format to 2 decimals
    document.getElementById("printTotal").innerText = "$" + total.toFixed(2);

    //Conditional 1: free shipping check
    if (itemPrice >= 50) {
        document.getElementById("printShippingStatus").innerText = "You qualify for free shipping.";
    } else {
        document.getElementById("printShippingStatus").innerText = "You do not qualify for free shipping.";
    }
}

numbersAndArithmetic(); //Call function to display numbers and arithmetic results