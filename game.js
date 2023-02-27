const board = document.getElementById("board");
const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("tic-tac-toe");
const reset = document.getElementById("reset").value;


 const spaces = 
[null, null, null,
 null, null, null,
 null, null, null];
 
 const player1 = "X";
 const player2 = "O";
 
 let currentPlayer = player1;

 const starting = ()=> {
    boxes.forEach(box => box.addEventListener("click", boxClicked))
 }
 function boxClicked(boxclicked){
    const id = boxclicked.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer
        boxclicked.target.innerText = currentPlayer
        
        if(winningPlay() !==false){
            playerText = `${currentPlayer} winner!` 
        }
        currentPlayer = currentplayer == player1 ? player2 : player1
    }
 }  

const howToWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,5],
    [2,4,6]
]

 function playerWon() {
    for (const thewinning of howToWin) {
        const [a,b,c] = thewinning

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]
        }
        return false
    }
 }
 const draw =() => {
  boxes.forEach((box, index) =>{
    if (index < 3)

    if (index % 3 === 0)

    if (index % 3 == 2)

    if (index > 5)

    box.addEventListener('click', boxClicked);
  });
};

//  reset.addEventListener('click', () =>{
//     spaces.forEach((spaces, id) =>{
//       spaces[id] = null;
//     });
    
//     boxes.forEach((box) =>{
//       box.innerText = '';
//     });
//     currentPlayer = player1;
//   });

 starting()