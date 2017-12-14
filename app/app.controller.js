angular.module('Morpion').controller('MorpionController', function($scope,gameData) {
    this.winner = '';
    this.isDraw = false;
    this.currentPlayer = gameData.players[gameData.current];
    this.redScore = 0;
    this.greenScore = 0;
    
    // Partie en cours ?
    this.showInit = true;
    this.showMorpion = false;
    this.playing = false;
    this.showResults = false;

    // Fonction pour démarrer une partie
    this.start = () => {
        this.showInit = false;
        this.showMorpion = true;
        this.playing = true;
        gameData.gameStatus.playing = true;
    };
    
    // Ecoute evenement : partie finie
    $scope.$on('game-over', () => {
        this.playing = false;
        gameData.gameStatus.playing = false;
        
        if (gameData.gameStatus.draw == false) {
                // Il y a un gagnant
                this.winner = gameData.players[(gameData.current + 1) %2];
                if (this.winner == 'red') {
                    gameData.results.redScore++;
                } else {
                    gameData.results.greenScore++;
                }
                console.log('Game win by ', this.winner);
            } else {
                this.isDraw = true;
                console.log('Match nul');
            }

    });
    
    // Ecoute evenement : changement de joueur
    $scope.$on('switch-player', () => {
        this.currentPlayer = gameData.players[(gameData.current)];
    });
    
    this.restart = () => {
            console.log("New Game");
            gameData.values=[];
            gameData.moves=0;
            gameData.gameStatus.playing = true;
            gameData.gameStatus.draw = false;
            this.playing = true;
            this.draw = false;
    
            // On emet un evenement pour reinitialiser chaques cellules
            $scope.$broadcast('reset-game');
    };
    
    this.showScore = () => {
        this.redScore = gameData.results.redScore;
        this.greenScore = gameData.results.greenScore;
        this.showMorpion = false;
        this.showResults = true;
    };
    
    this.showGame = () => {
        this.showMorpion = true;
        this.showResults = false;
    };
});
