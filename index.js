"use strict";

$(document).ready(() => {
    let Player = function(username, cssClass){
        this.username = username;
        this.cssClass = cssClass;
        this.score =0;
    }
    
    let start = () => {
        let username1 = $('#username1').val().trim();
        let username2 = $('#username2').val().trim();

        if (username1 && username2 && morpion.nbGame === 0) {
            morpion.players.push(new Player(username1, 'redPlayer'));
            morpion.players.push(new Player(username2, 'bluePlayer'));
            // Cacher le formulaire
            $('div#start').hide();
            // Afficher la grille
            $('div#morpion').show(1000);
            // Ajout de l'écoute de l'evenement click sur chaque td
            $('div#morpion table td').each((index, item) => {
                $(item).click(morpion.listener);
            });
        } 
        if (morpion.nbGame > 0) {
            // Cacher le score (sur nouvelle partie)
            $('div#results').hide();
            // Afficher la grille
            $('div#morpion').show(1000);
            // Ajout de l'écoute de l'evenement click sur chaque td
            $('div#morpion table td').each((index, item) => {
                $(item).click(morpion.listener);
            });
        }
        else {
            //TODO : afficher message d'erreur
        }
        
    };
    
    let newGame = () => {
        
        $('div#morpion tr').each((i, line) => {
            // Pour chaque cellule
            $(line).find('td').each((j, cell) => {
               $(cell).unbind();
            });
        });
        $("div").remove(".redPlayer");
        $("div").remove(".bluePlayer");
        $('div#results h1').remove();
        morpion.result.isFull = false;
        morpion.result.winner = null;
        
        start();                               
    };
    
    let showResults = () => {
        let resultsDiv = $('div#results');
        resultsDiv.append($('<h1>Score : '
				+ 'Joueur : ' + morpion.players[0].username
                + ' Score : ' + morpion.players[0].score
                + ' Joueur : ' + morpion.players[1].username
                + ' Score : ' + morpion.players[1].score
                + '</h1>'));
    }
    
    let clickListener = (event) => {
        let cell = $(event.currentTarget);
        let player = morpion.players[morpion.currentPlayer];
        // Inscription du symbole du joueur dans la cellule
        cell.append($('<div class="'+player.cssClass+'"></div>'));
        // Désactivation listener sur la cellule
        cell.unbind();
        // TODO : Verifier si un joueur a gagné ou si partie nulle
        if (morpion.isFinished()) {
            morpion.nbGame++;
            $('div#morpion').fadeOut(500);
            // Afficher le résultat
            $('div#results').fadeIn(1000);
            // On ajoute une victoire au joueur courrant
            if(morpion.result.winner) {
                player.score++;
            } else {
                // NUL
            }
            console.log(player.score);
            showResults();
        }
            // Joueur suivant
            morpion.switchPlayer();
    }
    
    let isFinished = () => {
        let results = [[], [], []];
        let turnCount = 0;
        // Pour chaque ligne du morpion
        $('div#morpion tr').each((i, line) => {
            // Pour chaque cellule
            $(line).find('td').each((j, cell) => {
               let symbol = $(cell).children('div');
               if (symbol.length > 0)  {
                   let cssClass = symbol[0].className;
					results[i][j] = cssClass;
					++turnCount;
               }
            });
        });
        
        // Vérification des conditions de victoire
        // Définition d'une variable qui va prendre la valeur true ou false
        // Vérification des lignes
        let hasWon = checkWinCase(results[0][0],results[0][1],results[0][2]);
        hasWon = hasWon || checkWinCase(results[1][0],results[1][1],results[1][2]);
        hasWon = hasWon || checkWinCase(results[2][0],results[2][1],results[2][2]);
        
        // Vérification des colonnes
        hasWon = hasWon || checkWinCase(results[0][0],results[1][0],results[2][0]);
        hasWon = hasWon || checkWinCase(results[0][1],results[1][1],results[2][1]);
        hasWon = hasWon || checkWinCase(results[0][2],results[1][2],results[2][2]);
        
        // Vérification des diagonales
        hasWon = hasWon || checkWinCase(results[0][0],results[1][1],results[2][2]);
        hasWon = hasWon || checkWinCase(results[2][0],results[1][1],results[0][2]);
        
        // Si victoire
        if (hasWon) {
            morpion.result.winner = morpion.players[morpion.currentPlayer];
        }
        // Si Egalité
        morpion.result.isFull = turnCount === 9;
        // on renvoi vrai si partie terminée
        return morpion.result.isFull || morpion.result.winner;
    };
    
    function checkWinCase(cell1, cell2, cell3) {
        return cell1 && cell1 === cell2 && cell1 === cell3;
    }
    
    window.morpion = {
        players: [],
        nbGame : 0,
        currentPlayer: 0,
        switchPlayer: () => {
            morpion.currentPlayer = ++morpion.currentPlayer %morpion.players.length;
        },
        start: start,
        listener: clickListener,
        result: {
            isFull: false,
            winner: null
        },
        isFinished: isFinished,
        newGame: newGame,
        showResults: showResults
    };
});

