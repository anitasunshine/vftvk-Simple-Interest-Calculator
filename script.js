//For computing the interest rate based on princial amount, interest rate, and years
function compute()
{
    //Principal amount is a float
    var principal = parseFloat(document.getElementById("principal").value);
    //Validate the principal input to ensure it is a positive number larger than 0
    if (principal <= 0) {
        //Pop up prompt if input invalid
        alert("Enter a positive number please.");
        //if input was invalid, put focus in the principal amount field for user to input again
        document.getElementById("principal").focus();
    } else {
        //Interest rate is a float at 0.25 increments
        var rate = parseFloat(document.getElementById("rate").value);
        //Years is an integer
        var years = parseInt(document.getElementById("years").value);
        //Calculate total interest rate based on principal amount, years, and interest rate
        var interest = principal * years * rate /100;
        //Get year based on current year plus years of money in the bank
        var year = new Date().getFullYear() + years;
        //Message for user
        document.getElementById("result").innerHTML = "If you deposit " + '<span class="highlight">' + principal + '</span>' +
            ",\<br\>at an interest rate of " + '<span class="highlight">' + rate + '</span>' +
            "%\<br\>You will receive an amount of " + '<span class="highlight">' + interest + '</span>' +
            ",\<br\>in the year " + '<span class="highlight">' + year + '</span>' +
            "\<br\>";
    }
}
//Indicate the accurate interest rate when user changes rate using slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        