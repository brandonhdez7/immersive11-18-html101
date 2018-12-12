// 1.set board
// 2.user should be able to click on a button
//when the click happens, the square should have that players mark(x or o)
// 3. if its x's turn put x in,otherwise put o in
// in order to acomplish 3., we nee to keep track of whos turn it is
// after x goes, it becomes o's turn, and vise versa
// 5. keep other players fromtaking a sqaure
// 6. see if someone won, if so congragulate them
// 7. stop the game if somone won, otherwise keep it running

let whosTurn = 1;
// make an array for both player and push each new sqaure into the appropiate square
let player1Squares = [];
let player2Squares = [];
// array of all winning combos
const winningCombos = [
    ['A1','B1','C1'], //row 1
    ['A2','B2','C2'], //row 2
    ['A3','B3','C3'], //row 3
    ['A1','A2','A3'], //Col 1
    ['B1','B2','B3'], //Col 2
    ['C1','C2','C3'], //Col 3
    ['A1','B2','C3'], //Diag 1
    ['A3','B2','C1'], //Diag 2
 ]

let  board = ['A1','A2','A3','B1','B2','B3','C1','C2','C3']


 let gameOn = true;
// squares is an array with 9 objects
// each element is an html button element

const squares = document.getElementsByClassName('square');
// const squares = document.getElementsByTagName('button');
// console.log(squares)

for(let i = 0; i < squares.length; i++){
    // console.log(squares[i])
    // now that we have all the squares individully (squares[i])
    // we can now add an event listener to each one to add eventListerner
    // 1. what to listen to
    // 2.add the method(addEventListener)
    // 3.first arg: what event to listen for
    // 4. second arg: function to run if that even happens
    squares[i].addEventListener('click',function(event){
        // every js event, will give you the event object
        console.dir(this);
        if(gameOn){
            // check to see if the square is taken
            if(this.innerHTML == "-"){
                // its not taken, so whos turn it is
                if(whosTurn === 1){
                    // its player 1, put an x, and control to O
                    this.innerHTML = "x"; //update the DOM
                    whosTurn = 2; //update js
                    //update the DOM
                    document.getElementById('message').innerHTML = "It's O's Turn"
                    player1Squares.push(this.id)
                    checkWin(player1Squares, 1)
                }else{
                    this.innerHTML = "o";
                    whosTurn = 1;
                    document.getElementById('message').innerHTML = "It's X's Turn"
                    player2Squares.push(this.id)
                    checkWin(player2Squares, 2)
                }
            }else{
                document.getElementById('message').innerHTML = "Sorry that square is taken"
            }
            console.log(player1Squares)
            console.log(player2Squares)
        }
    })

}

function comp(){
    document.getElementById('message').innerHTML = "Its You Against AI"  
    let square = document.getElementsByClassName('square');

        for(let i = 0; i < squares.length; i++){
        square[i].textContent = '-'
        square[i].className = 'square'
        player1Squares = [];
        player2Squares = [];
        whosTurn = 1
        let gameOn = true;
        squares[i].addEventListener('click',function(event){ 
            console.dir(this);
            if(gameOn){
                if(this.innerHTML == "-"){
                    if(whosTurn === 1){                   
                        this.innerHTML = "x";
                        whosTurn = 2;  
                        let board = Math.floor(Math.random() * board.lenght);  
                                   
                        document.getElementById('message').innerHTML = "It's Your Turn"
                        player1Squares.push(this.id);
                        checkWin(player1Squares, 1)
                    }else{
                        this.innerHTML = "o";
                        whosTurn = 1;
                        document.getElementById('message').innerHTML = "It's Computers Turn"
                        player2Squares.push(this.id)
                        checkWin(player2Squares, 2)
                    }
                }else{
                    document.getElementById('message').innerHTML = "Sorry that square is taken"
                }
                console.log(player1Squares)
                console.log(player2Squares)
            }
        })
    
    }









}





function checkWin(playerSquares, whoMarked){
    console.log("checking who won...")
    console.log(playerSquares);
    console.log(whoMarked);
    // we know who just went (whoMarked)
    // and we know what squares they have (playerSquare)
    // outter loop- check each winning combination
    for(let i = 0; i < winningCombos.length; i ++){
        // keep track of how many sqaures in this combo
        let squareCount = 0
        // inner loop- check each square inside of this winning combo
        for(let j = 0; j < winningCombos[i].length; j++){
            // 
            const winningSquare = winningCombos[i][j];
            if(playerSquares.includes(winningSquare)){
                squareCount ++;

            }
 
        }
        if(squareCount === 3){
            console.log("Player won")
            console.log(winningCombos[i]);
            endGame(winningCombos[i], whoMarked)
        }

    }
}



function endGame(winningCombos,whoWon){
    gameOn = false;
    // if we get to endGame, theres a winner
    // so the game is over
    document.querySelector('#message').innerHTML = `Congrats to player ${whoWon}`
    // we know which squares are the winning squares
    for (let i = 0; i < winningCombos.length; i++){
        const winningSquare = winningCombos[i];
        const squareElem = document.getElementById(winningSquare);
        console.log(squareElem)

        squareElem.className += " winning-square"

        

    }




}

function reset(){
    let square = document.getElementsByClassName('square');
    for (let i = 0; i < square.length; i++){
        square[i].textContent = '-'
        square[i].className = 'square'
        player1Squares = [];
        player2Squares = [];

        gameOn = true;
    }
}