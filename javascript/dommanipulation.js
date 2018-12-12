console.dir(document);

var adam = document.getElementById("adamsDiv");
console.log(adam);

adam.innerHTML = "i just changed this text"

adam.style.backgroundColor = "pink"

adam.innerHTML += `
    <img src="https://placehold.it/200x200" />
`

var response = +prompt("i am a promt")
console.log(typeof response);

// var simplifiedDocument = {
//     children:[
//         {
//             tag: "<html>",
//             children: [
//                 {
//                     tag:"<head>"

//                 },
//                 {
//                     tag: "<body>"
//                 }
//             ]
//         }
//     ]
// }

// simplifiedDocument.children[0].children[1]