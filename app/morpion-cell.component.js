angular.module('Morpion').component('morpionCell', {
  templateUrl: 'morpion-cell.template.html',
  bindings: {
    'index': '@'
  },
  controller: function($scope,gameData) {
    var played = false;
    this.playerClass ='';
    this.play = () => {
      if (!this.played) {
          // On affiche le joueur dans la case ssi la partie est en cours
          if (gameData.gameStatus.playing) {
                this.played = true;
                this.playerClass=gameData.players[gameData.current];
                gameData.values[this.index] = this.playerClass;
                console.log(gameData.values);
                console.log(gameData.gameStatus.draw);
                console.log('Nombre de coup(s) joué(s) : '+gameData.moves);
                gameData.current = (gameData.current + 1) %2;
              } else {
                  console.warn('Partie terminée');
              }
        // On emet l'evenement de changement de joueur
        $scope.$emit('switch-player');
      
      // Si la case est déjà prise
      } else {
          console.warn('Impossible de jouer ici');
      }
    };
      
    this.reset = () => {
        this.playerClass ='';
        this.played=false;
    };
      
    // On ecoute l'evenement indiquant s'il faut reinitialiser la cellule
    $scope.$on('reset-game', () => {
        this.reset();
    });
  }
});
