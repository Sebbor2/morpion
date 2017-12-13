angular.module('Morpion').component('morpion', {
  templateUrl: 'morpion.template.html',
  controller: function(gameData) {
    this.checkWin = () => {
      if (gameData.values[0] === gameData.values[1] && gameData.values[0] === gameData.values[2] ||
          gameData.values[3] === gameData.values[4] && gameData.values[3] === gameData.values[5] ||
          gameData.values[6] === gameData.values[7] && gameData.values[6] === gameData.values[8] ||

          // Colonne
          gameData.values[0] === gameData.values[3] && gameData.values[0] === gameData.values[6] ||
          gameData.values[1] === gameData.values[4] && gameData.values[1] === gameData.values[7] ||
          gameData.values[2] === gameData.values[5] && gameData.values[2] === gameData.values[8] ||

          // Diagonales
          gameData.values[0] === gameData.values[4] && gameData.values[0] === gameData.values[8] ||
          gameData.values[6] === gameData.values[4] && gameData.values[6] === gameData.values[2]) {

            // Game Win
            console.log('Game win by ', gameData.players[(gameData.current + 1) %2]);
          } else {
              if (gameData.values.length == 9) {
                console.log('Match nul');
              }
            }
    };
  }
});
