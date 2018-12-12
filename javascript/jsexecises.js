// Exercises:

// 1.Given a number between 0 and 6 representing the days of the week, print "Go to work." if it's a work day and "Sleep in." if it's a weekend day. You can set up an array for the days of the week, or for extra credit, you can check out the JS Date object here).
// var day = 2;

// if (day < 5){
//     console.log("go to work");
// } else if (day > 4 ) {
//     console.log("sleep in");
// }

var day = 4;

var days =["go to work","go to work","go to work","go to work","go to work","slee in","sleep in"];

console.log(days[day])
 
// 2. Given a month number, between 1 and 12, and a year, print the number of days in that month - accounting for leap years.

monthEx = "February";
yearEx = 2000;

function date(month, year){

   var calendar = {
       "January": 31,
       "February": 28,
       "March":31,
       "April": 30,
       "May": 31,
       "June": 30,
       "July": 31,
       "August": 31,
       "September": 30,
       "October": 31,
       "November": 30,
       "December": 31
   };

   if(month == "February"){
       if(year % 400 != 0){
           return calendar["February"]
       } else {
           return calendar["February"] + 1
       }

   }else{
       return calendar[month] 
   }
}
console.log(date("February", 2000));
 
// 3. Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", print the total bill with the tip included. The amount of tip given for each level of service is defined by:
//Exercise 3
//Tip service
var bill = parseFloat(prompt("Enter Bill amount "));
var service = prompt("How was service? [good/fair/bad] ");
if (service == "good"){
    sum = bill + (bill* 0.20);
} else if (service == "fair") {
    sum = bill + (bill * 0.15);
} else if (service == "bad") {
    sum = bill + (bill * 0.10);
}
console.log("The bill total is now $" + sum);
function splitAmount(sum, numOfPeople){
    total = sum/numOfPeople;
    console.log("The total bill is $" + sum + ". Split among " + numOfPeople + " is $" + total);
}
numOfPeople = parseInt(prompt("Enter the number in the party: "))
splitAmount(sum, numOfPeople);




// var tipAmounts ={
//     poor: 0.1,
//     fair: 0.15,
//     good: 0.2
// }

// console.log (total * tipAmounts[service]) *

// "good" -> 20%

// "fail" -> 15%

// "bad"  -> 10%

 
// Extra: Add to "Tip Calculator"...you are also given the number of people to divide the total into. Print the amount for each person to pay.

 

// Convert it to a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. Return the final amount for each person.