  
//   if-else conditional control-flow statement
  var adam ="hello";
  if (adam == "suh dude"){
      console.log("adam was sub dude");
  } else if (adam == "hello"){
      console.log('adam was hello');
  } else if (adam == "yo"){
      console.log('adam was yo');
  } else{
      console.log(' adam was\'t any of the above');
  }

//   while loops
var counter = 0;
while (conter < 10) {
    console.log("i'm in a loop")
    count = counter + 1;
}

var string = "";
while (string != "aaaa") {
    console.log(string)
    count = string + "a";
}

var array = [];
while (array.length < 5) {
    array.push("adam");
    console.log(array)
   
}


// forloops

for (var i=0; i<10; i = i + 1){
    console.log("im in a forloop")

}


// functions

function myFunction(){
    console.log('im in a function')
}

myFunction();

// functions with no names

var anonFunction = function(){
    console.log('anon')
}
 anonFunction();


//////////


var brandonArray = ["a", "b", "c", "d"];

var reversed = [];

while (brandonArray.length > 0){
    var popped = brandonArray.pop();
    reversed.push(popped);

    // reversed.push(brandonArray.pop());
}

console.log(reversed);