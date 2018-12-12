// console.dir(document);

// var dragon = document.getElementById("dragon_game");
// console.log(dragon);

// dragon.innerHTML += `
//     <img src="dragon.png" />
// `



// var fight = document.getElementByClassName("instructions").click();

//     fight.innerHTML  "you must roll a 9 or higher or they will be burnt to a crisp!"
    
console.log("sanity check");
// document.getElementById('roll-button').addEventListener('click',function(){

// })

function roll(){
    // console.log("user rolled");
    // everything belongs to the window. you dont ever have to use window.because its already assumed.
    // console.log(window);
    // window.alert("im an alert box");
    // console.log(window.document);
    // .log on an html "thing" will show you html
    // .dir on an html "thing" will show you the js object
    // console.log(document);
    // console.dir(document);
    // console.dir(document.doctype);

    // get a random number number between 1 and 6 for each die
    var rand1 = Math.ceil(Math.random() * 6);
    var rand2 = Math.ceil(Math.random() * 6);
    console.log(rand1);


    // the dice images are dn.gif. we hace 2 random numbers for the N
    // first..get the dice html thing
    var dice = document.getElementById('dice');
    console.dir(dice);
    var die1 = dice.children[0];
    var die2 = dice.children[1];
    die1.src = `d${rand1}.gif`;
    die2.src = `d${rand2}.gif`;


    if(rand1 + rand2 > 8){
        console.log("you win");
        document.getElementById('dragon');
        dragon.children[0].src = "defeated-dragon.jpg";
        
        dragon.children[0].style.width = "500px";
    }else{
        console.log("you lost");
        dragon.children[0].src = "5444997d471ba93836ae62a0d5392cc8.jpg";
        dragon.children[0].style.width = "500px";
    }
}
