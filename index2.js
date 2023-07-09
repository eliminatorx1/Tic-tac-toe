console.log("welcome to tic tac toe");
let music = new Audio("music.mp3"); //creating an Html audio element in js
let audioTurn = new Audio("tapsound.wav"); //creating an Html audio element in js
let audioGameover = new Audio("gameover.wav"); //creating an Html audio element in js
let isgameover = false;

//initial variable
let turn = "X";
let count = 0;
document.getElementsByClassName("info")[0].innerText = "Turn for" + " " + turn;

//function to change the turn
const changeTurn = () => {
    return turn == "X" ? "0" : "X";
}

//Function to check for a win
const checkWin = () => {
    //we will write all the possibilities of win here
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
            boxtexts[e[0]].innerText !== ''
        ) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " has Won";
            boxtexts[e[0]].parentNode.style.backgroundColor = "#FF8C8C";
            boxtexts[e[1]].parentNode.style.backgroundColor = "#FF8C8C";
            boxtexts[e[2]].parentNode.style.backgroundColor = "#FF8C8C";
            isgameover = true;
            audioGameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    });

    // Check for draw
    if (!isgameover && count === 9) {
        document.querySelector('.info').innerText = "Match is Draw";
        isgameover = true;
        audioGameover.play();
    }
};

//Game Logic
let boxes = document.getElementsByClassName("box");
//turining into an array as this will return an html collection
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (!isgameover) {
            if (boxtext.innerText == '') {
                boxtext.innerText = turn;
                audioTurn.play(); //this will play the audio
                turn = changeTurn();
                count = count + 1;
                checkWin();
                if (!isgameover) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for" + " " + turn;
                }
            }
        } else {
            alert("Please reset the game to play again");
        }
    }, isgameover);
});

//add onclick listener to the reset button
reset = document.querySelector('#reset');

let boxtexts = document.getElementsByClassName("boxtext");
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    count = 0;
    isgameover = false;
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e => {
        boxtexts[e[0]].parentNode.style.backgroundColor = "white";
        boxtexts[e[1]].parentNode.style.background = "white";
        boxtexts[e[2]].parentNode.style.background = "white";
    });
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    audioGameover.pause();
});
