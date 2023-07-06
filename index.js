console.log("welcome to tic tac toe");
let music = new Audio("music.mp3"); //creating an Html audio element in js
let audioTurn = new Audio("ting.mp3"); //creating an Html audio element in js
let audioGameover= new Audio("gameover.mp3"); //creating an Html audio element in js
let isgameover = false;

//initial variable
let turn = "X";
document.getElementsByClassName("info")[0].innerText = "Turn for" +" "+ turn;

//function to change the turn

const changeTurn = () =>{
    return turn== "X"? "0": "X";

}

//Function to check for a win

const checkWin = () =>{
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
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&& (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&(boxtexts[e[0]].innerText !== '') ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText+ " has Won";
            // boxtexts[e].style.backGround = "red";
            console.log(boxtexts[e[0]].parentNode);
            // boxtexts[e[0]].parentNode.style.border = "2px solid red";
            boxtexts[e[0]].parentNode.style.backgroundColor = "#FF8C8C";
            boxtexts[e[1]].parentNode.style.backgroundColor = "#FF8C8C";
            boxtexts[e[2]].parentNode.style.backgroundColor = "#FF8C8C";
            console.log("hello")
           
            isgameover = true; 
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';    
            // document.querySelector('.line').style.width = "20vw";
            // document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

            
         
        }
            

    })

}




//Game Logic
let boxes = document.getElementsByClassName("box");
//turining into an array as this will return an html collection
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(!isgameover){
            if(boxtext.innerText == ''){
            
                boxtext.innerText = turn;
    
                audioTurn.play();//this will play the audio
                turn = changeTurn();
                
                checkWin();
                if(!isgameover){
                    document.getElementsByClassName("info")[0].innerText = "Turn for" +" "+ turn;
    
                }
                
            }

        }
        else{
            alert("Please reset the game to play again");
        }
        

    }, isgameover)

})

//add onclick listener to the reset button
reset = document.querySelector('#reset');






let boxtexts = document.getElementsByClassName("boxtext");
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    });
    turn = "X";
    isgameover = false;
    // document.querySelector('.line').style.width = "0vw";

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        boxtexts[e[0]].parentNode.style.backgroundColor = "transparent";
        boxtexts[e[1]].parentNode.style.background = "transparent";
        boxtexts[e[2]].parentNode.style.background = "transparent";
    
    });
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    
})
