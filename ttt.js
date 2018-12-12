// console.log("you're playing tic-tac-toe");

// console.log('first board consolelog', board);

if (!Window.state) {
  var Window.state = {
    player1: true
  };
}

function renderBoard(board = [[0,0,0],[0,0,0],[0,0,0]]){ 

  if (state.player1) {
    console.log("It's your turn player1");
  } else {
    console.log("It's your turn player2");
  }  

  console.log(board);
  state.player1 = !state.player1;

};


renderBoard();


