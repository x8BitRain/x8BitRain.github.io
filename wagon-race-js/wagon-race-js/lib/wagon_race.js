// TODO: write your code here
const playerOne = document.getElementById("player1_race");
const playerTwo = document.getElementById("player2_race");
let playerOnePos = 30;
let playerTwoPos = 0;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (playerOnePos >= 1710) {
    alert("Player One Wins!");
    document.location.reload(true);
  } else if (playerTwoPos >= 1710) {
    alert("Player Two Wins!");
    document.location.reload(true);
  }

  if (keyName === 'Control') {
    // do not alert when only Control key is pressed.
    playerOnePos += 30;
    playerOne.style.marginLeft = `${playerOnePos}px`;
    playerTwo.style.marginLeft = `${playerTwoPos}px`;
    playerTwoPos = playerTwoPos + Math.floor(Math.random() * 44) + 10;
  }
});
