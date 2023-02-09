/**
 * Initial Screen
 * Game Playing Screen
 * Game Over Screen
*/
var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

var KEY_CODE = {
    R: 82
}

function FlappyMonster( canvas ){
    // Base
    var game = this;

    // Global Attributes
    game.canvas = canvas;
    game.context = game.canvas.getContext( '2d' );

    // Game State
    game.currentState = INITIAL;

    game.bindEvent();

    // Create Game Objects
    game.createObjects();
}

FlappyMonster.prototype.createObjects = function(){
    var game = this;


}

FlappyMonster.prototype.bindEvent = function(){
    var game = this;

    // Mouse Listener
    game.canvas.addEventListener('click', function( event ){
        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                break;
            case GAME_PLAYING:
                break;
        }
    })

    // key Listener
    window.addEventListener('keydown', function( event ){
        switch (game.currentState) {
            case GAME_OVER:
                if(event.keyCode === KEY_CODE.R){
                    console.log(event.keyCode);
                    game.currentState = GAME_PLAYING;
                }
                break;
        }
    })
}

FlappyMonster.prototype.start = function(){
    var game = this;

    // Start Game
    window.requestAnimationFrame(function(){
        game.runGameLoop();
    });
}

FlappyMonster.prototype.runGameLoop = function(){
    var game = this;

    // Game State
    switch (game.currentState) {
        case INITIAL:
            //Draw INITIAL 
            game.drawInitialScreen();
            break;
        case GAME_PLAYING:
            //Draw FAME PLAYING SCREEN
            game.drawGamePlayingScreen();
            break;
        case GAME_OVER:
            //Draw GAME OVER SCREEN
            game.drawGameOverScreen();
            break;
    }

    window.requestAnimationFrame(function(){
        game.runGameLoop();
    });
}

FlappyMonster.prototype.drawInitialScreen = function(){
    var game = this;

    // Draw

    // background
    game.context.fillStyle = 'black'
    game.context.fillRect(0,0,game.canvas.width, game.canvas.height)

    // text
    game.context.fillStyle = 'white'
    game.context.font = '36px Arial'
    game.context.fillText('Click to start', game.canvas.width/2 -100, game.canvas.height/2)
}

FlappyMonster.prototype.drawGamePlayingScreen = function(){
    var game = this;

    // Draw

    // background
    game.context.fillStyle = 'black'
    game.context.fillRect(0,0,game.canvas.width, game.canvas.height)

    // text
    game.context.fillStyle = 'white'
    game.context.font = '36px Arial'
    game.context.fillText('GAME PLAYING', game.canvas.width/2 -100, game.canvas.height/2)
}

FlappyMonster.prototype.drawGameOverScreen = function(){
    var game = this;

    // Draw

    // background
    game.context.fillStyle = 'black'
    game.context.fillRect(0,0,game.canvas.width, game.canvas.height)

    // text
    game.context.fillStyle = 'white'
    game.context.font = '36px Arial'
    game.context.fillText('GAME OVER', game.canvas.width/2 -100, game.canvas.height/2)
    game.context.font = '24px Arial'
    game.context.fillText('Press R to Restart', game.canvas.width/2 -100, game.canvas.height/2 + 50)
}