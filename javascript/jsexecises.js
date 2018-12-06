// Exercises:

// 1.Given a number between 0 and 6 representing the days of the week, print "Go to work." if it's a work day and "Sleep in." if it's a weekend day. You can set up an array for the days of the week, or for extra credit, you can check out the JS Date object here).
    var dayOfWeek={
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednsday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    function days(number){
        if (number == 1 || number == 2 || number == 3 || number == 4 || number == 4  ){
            console.log("Go to work")  
        }else{
            console.log("Sleep in")
        }


    }
    days();

 
// 2. Given a month number, between 1 and 12, and a year, print the number of days in that month - accounting for leap years.

 
// 3. Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", print the total bill with the tip included. The amount of tip given for each level of service is defined by:


// "good" -> 20%

// "fail" -> 15%

// "bad"  -> 10%

 
// Extra: Add to "Tip Calculator"...you are also given the number of people to divide the total into. Print the amount for each person to pay.

 

// Convert it to a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. Return the final amount for each person.