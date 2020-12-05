var canvas = new fabric.Canvas("myCanvas");
var block_width = 50;
var block_height = 50;
var player_x = 25;
var player_y = 25;
var object_new = "";
var object_player = "";

function add_player_img() {
    fabric.Image.fromURL("player.png", function(Img) {
        object_player = Img;
        object_player.scaleToWidth(200);
        object_player.scaleToHeight(200);
        object_player.set({
            top: player_y,
            left: player_x
        });
        canvas.add(object_player);
    });
}

function add_new_img(getImg) {
    fabric.Image.fromURL(getImg, function(Img) {
        object_new = Img;
        object_new.scaleToWidth(block_width);
        object_new.scaleToHeight(block_height);
        object_new.set({
            top: player_y,
            left: player_x
        });
        canvas.add(object_new);
    });
}
