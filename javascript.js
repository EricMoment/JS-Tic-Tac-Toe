const func = (() => {
  const start = document.querySelector('.start');
  const restart = document.querySelector('.restart');
  start.addEventListener('click', function e() {
    const player = (() => {
      let name1 = prompt("Player1: What is your name?", "Boris");
      let name2 = prompt("Player2: What is your name?", "Mikhail");
      return {name1, name2};
    })()
    start.removeEventListener('click', e);
    let counter = 1;
    const buttons = document.querySelectorAll('.square');
    const message = document.querySelector('.message');
    let gameBoard = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];
    restart.addEventListener('click', () => {
      gameBoard = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];
      counter = 1;
      buttons.forEach(button => {
        button.textContent = ``;
      });
      message.textContent = ``;
    });
    const result = () => {
      if (((gameBoard[0][0] === gameBoard[0][1]) && (gameBoard[0][1] === gameBoard[0][2]) && gameBoard[0][1] !== ' ') ||
          ((gameBoard[1][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[1][2]) && gameBoard[1][1] !== ' ') ||
          ((gameBoard[2][0] === gameBoard[2][1]) && (gameBoard[2][1] === gameBoard[2][2]) && gameBoard[2][1] !== ' ') ||
          ((gameBoard[0][0] === gameBoard[1][0]) && (gameBoard[1][0] === gameBoard[2][0]) && gameBoard[1][0] !== ' ') ||
          ((gameBoard[0][1] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][1]) && gameBoard[1][1] !== ' ') ||
          ((gameBoard[0][2] === gameBoard[1][2]) && (gameBoard[1][2] === gameBoard[2][2]) && gameBoard[1][2] !== ' ') ||
          ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2]) && gameBoard[1][1] !== ' ') ||
          ((gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][0]) && gameBoard[1][1] !== ' ')) {
        if (counter % 2 === 0) {
          message.textContent = `${player.name2} has won!`;
        } else {
          message.textContent = `${player.name1} has won!`;
        };
      } else if (counter >= 9) {
        message.textContent = 'Tie!'
      };
    };
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.textContent === 'X' || button.textContent === 'O' || message.textContent !== ``) {
          //gameBoard[button.id.charAt(0)][button.id.charAt(2)] = ' ';
          //button.textContent = ' ';   you can remember last move to not cancel other squares
          //counter -= 1;
          return;
        };
        if (counter % 2 === 0) {
          button.textContent = 'X';
          gameBoard[button.id.charAt(0)][button.id.charAt(2)] = 'X';
          button.style.cssText = "color: crimson";
          result();
          console.table(gameBoard);
          //console.log(counter)
        } else {
          button.textContent = 'O';
          gameBoard[button.id.charAt(0)][button.id.charAt(2)] = 'O';
          button.style.cssText = "color: darkslateblue";
          result();
          console.table(gameBoard);
          //console.log(counter)
        };
        counter += 1;
      });
    });
  });
})();
