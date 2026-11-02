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

}

//Section 3
function toFixed() {

}

