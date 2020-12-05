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
    if (keypress == "65" && e.shiftKey == true) {
        console.log("SHIFT + A");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (keypress == "90" && e.shiftKey == true) {
        console.log("SHIFT + Z");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (keypress == "67") {
        add_new_img("images/cloud.jpg");
        console.log("C Key Pressed");
    }

    if (keypress == "68") {
        add_new_img("images/dark_green.png");
        console.log("D Key Pressed");
    }

    if (keypress == "76") {
        add_new_img("images/light_green.png");
        console.log("L Key Pressed");
    }

    if (keypress == "71") {
        add_new_img("images/ground.png");
        console.log("G Key Pressed");
    }

    if (keypress == "82") {
        add_new_img("images/roof.jpg");
        console.log("R Key Pressed");
    }

    if (keypress == "84") {
        add_new_img("images/trunk.jpg");
        console.log("T Key Pressed");
    }

    if (keypress == "85") {
        add_new_img("images/unique.png");
        console.log("U Key Pressed");
    }

    if (keypress == "87") {
        add_new_img("images/wall.jpg");
        console.log("W Key Pressed");
    }

    if (keypress == "89") {
        add_new_img("images/yello_wall.png");
        console.log("Y Key Pressed");
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
    ///
}

function Up() {
    ///
}

function Left() {
    ///
}

function Down() {
    ///
}