angular.module('Morpion').controller('MorpionController', function() {
  // Partie en cours ?
  this.playing = false;

  // Fonction pour démarrer une partie
  this.start = () => {
    this.playing = true;
  };
});
