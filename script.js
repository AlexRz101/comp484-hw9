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
    const num1 = "21"
    const num2 = "69"
    const num3 = "rizz"
    const num4 = "420.67"

    const num1Converted = Number(num1); //Convert string to number
    const num2Converted = Number(num2);
    const num3Converted = Number(num3); //Return NaN
    const num4Converted = Number(num4);

    document.getElementById("printNums").innerText = num1 + ", " + num2 + ", " + num3 + ", " + num4;
    document.getElementById("printConvertedNums").innerText = num1Converted + ", " + num2Converted + ", " + num3Converted + ", " + num4Converted;
    document.getElementById("printConvertedNumsCheck1").innerText = Number.isNaN(num1Converted) + ", " + Number.isNaN(num2Converted) + ", " + Number.isNaN(num3Converted) + ", " + Number.isNaN(num4Converted);
    document.getElementById("printConvertedNumsCheck2").innerText = Number.isInteger(num1Converted) + ", " + Number.isInteger(num2Converted) + ", " + Number.isInteger(num3Converted) + ", " + Number.isInteger(num4Converted);
}

numberConversion(); //Call function to display numbers

//Section 3
function toFixed() {

}

