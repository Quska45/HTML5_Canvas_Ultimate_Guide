function GameBackground( src, canvas ){
    //base
    var bg = this;

    // Global Attributes
    bg.canvas = canvas;
    bg.context = bg.canvas.getContext('2d');

    //specification
    bg.x = 0;
    bg.y = 0
    bg.w = bg.canvas.width
    bg.h = bg.canvas.height
    bg.src = src
}