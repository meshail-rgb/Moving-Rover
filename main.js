Canvas = document.getElementById("myCanvas")
ctx = Canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;


function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "mars.jpg";

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = "rover.png";
}
function uploadBackground() {   
    ctx.drawImage(background_imgTag, 0, 0, myCanvas.width, myCanvas.height) ;
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height) ;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed == "38")
    {
        up();
        console.log("up");
    }
    if (keypressed == "40")
    {
        down();
        console.log("down");
    }
    if(keypressed == "37")
    {
        left();
        console.log("left");
    }
    if(keypressed == "39")
    {
        right();
        console.log("right");
    }

}

function up() {
    if(rover_y >= 0)
    {
        rover_y -= 10;
        console.log("When up arrow is pressed =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if(rover_y <= 500)
    {
        rover_y +=10;
        console.log("When down arrow is pressed, x =" +rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if(rover_x >= 0)
    {
        rover_x -= 10;
        console.log("when left arrow is pressed, x =" +rover_x + " | y =" +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if(rover_x <=700)
    {
        rover_x +=10;
        console.log("When right arrow key pressed, x =" +rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

