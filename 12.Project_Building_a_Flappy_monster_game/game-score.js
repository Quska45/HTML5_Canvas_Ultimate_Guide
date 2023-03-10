// 64-Creating_the_score_board.html
function GameScore( canvas ){
    // Base
    var gameScore = this;

    // Global Attributes
    gameScore.canvas = canvas;
    gameScore.context = gameScore.canvas.getContext( '2d' );

    // specifications
    gameScore.start = new Date();
    gameScore.score = 0;
    gameScore.x = 0;
    gameScore.y = 9;
}

GameScore.prototype.draw = function(){
    // Base
    var gameScore = this;

    // Draw
    var draw = new Date();
    gameScore.score = parseFloat((draw - gameScore.start) / 1000).toFixed(1);

    gameScore.context.font = '45px Verdana';
    gameScore.context.fillText(gameScore.score, gameScore.x, gameScore.y);

}