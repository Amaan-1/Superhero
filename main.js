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

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);

    if (keypress == "70") {
        add_new_img("images/spiderman_face.png");
        console.log("F Key Pressed");
    }

    if (keypress == "66") {
        add_new_img("images/spiderman_body.png");
        console.log("B Key Pressed");
    }

    if (keypress == "76") {
        add_new_img("images/ironman_legs.png");
        console.log("L Key Pressed");
    }

    if (keypress == "82") {
        add_new_img("images/thor_right_hand.png");
        console.log("R Key Pressed");
    }

    if (keypress == "72") {
        add_new_img("images/ironman_left_hand.png");
        console.log("R Key Pressed");
    }
    if (keypress == "37") {
        Left();
        console.log("LEFT");
    }

    if (keypress == "38") {
        Up();
        console.log("UP");
    }

    if (keypress == "39") {
        Right();
        console.log("RIGHT");
    }

    if (keypress == "40") {
        Down();
        console.log("DOWN");
    }
}

function Right() {
    ////
}

function Up() {
    ////
}

function Left() {
    ////
}

function Down() {
    ////
}
