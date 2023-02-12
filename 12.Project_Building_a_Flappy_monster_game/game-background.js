// 63-Creating_the_Background.html
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
    bg.img = null;

    // create Background Image
    bg.creat();
}

GameBackground.prototype.creat = function(){
    //base
    var bg = this;

    // create image
    bg.img = new Image();
    bg.img.src = bg.src;
}

GameBackground.prototype.draw = function(){
    //base
    var bg = this;

    // Draw
    if(bg.img != null){
        bg.context.drawImage(bg.img, bg.x, bg.y, bg.w, bg.h)
    }
}