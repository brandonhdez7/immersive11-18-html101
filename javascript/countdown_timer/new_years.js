console.log("sanity check");


function updateTimer(){
    // new date() will create a new date object with the current time
    // where current time = the moment the line ran
    var now = new Date();
    // getTime() can be run against a date object, and will covert to the #
    // of milliseconds since 1-1-1970
    var nowAsTimeStamp = now.getTime();
    console.log(nowAsTimeStamp);
    var timeRemaining = timeStamp - nowAsTimeStamp;
    console.log(timeRemaining);

    var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    
    console.log(seconds);
    console.log(minutes);

    // getElementsByClassName always returns an array, even if this is a number
    document.getElementsByClassName('weeks')[0].innerHTML = weeks
    // querySelector will use css rules to find a match
    // and only get the first one ..not an array
    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds


    document.body.style.background = "url('download.jpeg')";
    document.body.style.backgroundSize = "cover";
    
    // == compares values
    // === compares values and date types
    // minutes = "0"
    // minutes == 0 true
    // minutes === 0 not true

    if(seconds === 0){
        // update the dom "hooray another minute closer"
        document.querySelector('.message').innerHTML = "One minute closer to Christmas!";
    }else if(seconds < 50){
        document.querySelector('.message').innerHTML = "";
    }
}

var endDate = new Date("January 1, 2019");
console.log(endDate);
var timeStamp = endDate.getTime();
console.log(timeStamp);
// setInterval will call the function in arg1 and every arg2 in milliseconds
updateTimer();
setInterval(updateTimer,1000)