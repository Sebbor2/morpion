angular.module('Morpion').component('morpionCell', {
  templateUrl: 'morpion-cell.template.html',
  bindings: {
    'index': '@'
  },
  controller: function(gameData) {
    var played = false;
    this.playerClass ='';
    this.play = () => {
      if (!this.played) {
        this.played = true;
        this.playerClass=gameData.players[gameData.current];
        gameData.values[this.index] = this.playerClass;
        console.log(gameData.values);
        gameData.current = (gameData.current + 1) %2;

      } else {
          console.warn('Impossible de jouer ici');
      }
    };
  }
});
