angular.module('Morpion').component('morpion', {
  templateUrl: 'morpion.template.html',
  controller: function($scope,gameData) {
    this.checkWin = () => {
      if (gameData.values[0] === gameData.values[1] && gameData.values[0] === gameData.values[2] && gameData.values[0] != null ||
          gameData.values[3] === gameData.values[4] && gameData.values[3] === gameData.values[5] && gameData.values[3] != null ||
          gameData.values[6] === gameData.values[7] && gameData.values[6] === gameData.values[8] && gameData.values[6] != null ||

          // Colonne
          gameData.values[0] === gameData.values[3] && gameData.values[0] === gameData.values[6] && gameData.values[0] != null ||
          gameData.values[1] === gameData.values[4] && gameData.values[1] === gameData.values[7] && gameData.values[1] != null ||
          gameData.values[2] === gameData.values[5] && gameData.values[2] === gameData.values[8] && gameData.values[2] != null ||

          // Diagonales
          gameData.values[0] === gameData.values[4] && gameData.values[0] === gameData.values[8] && gameData.values[0] != null ||
          gameData.values[6] === gameData.values[4] && gameData.values[6] === gameData.values[2] && gameData.values[6] != null ) {

          // Game Win          
          //On emet un evenement pour indiquer que la partie est terminée ($scope dans le controller)
          gameData.gameStatus.playing = false;
          gameData.gameStatus.draw = false;
          $scope.$emit('game-over');
          
          } else {
              if (gameData.moves == 8) {
                  gameData.gameStatus.playing = false;
                  gameData.gameStatus.draw = true;
                  $scope.$emit('game-over');
              }
          }
          gameData.moves++;
    };
  }
});
