// 65-Creating_the_Walls.html
function Wall(canvas){
    // base
    var wall = this;

    // Global Attributes
    wall.canvas = canvas;
    wall.context = wall.canvas.getContext('2d');

    // specifications
    wall.x = canvas.width;
    wall.y = 0;
    wall.w = 100;
    wall.h = 0;
    wall.gap = 0;
    wall.color = getRandomColor();
}

Wall.prototype.draw = function(){
    //base
    var wall = this;

    // wall color
    wall.context.fillStyle = wall.color

    // draw upper part
    wall.context.fillRect(wall.x, wall.y, wall.w, wall.h);
    
    // Draw lower part
    wall.context.fillRect(wall.x, wall.h + wall.gap, wall.w, wall.canvas.height);

}