// script.js
window.onload = function () {

    // Definitions
    var canvas = document.getElementById("canvasContainer");

    // Game Object
    var flappyMonster = new FlappyMonster( canvas );
    flappyMonster.start();
}