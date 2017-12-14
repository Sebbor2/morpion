"use strict";

angular.module('Morpion', []).value('gameData', {

    // Définition d'un nombre de joueur fixe
    players: ['red','green'],
    // On fixe le joueur actuel sur 0
    current: 0,
    // Tableau stockant les cellules jouées de la grille
    values : [],
    moves : 0,
    gameStatus : {
        playing : false,
        draw : false
    },
    results : {
        redScore : 0,
        greenScore : 0
    }
});
