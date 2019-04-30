// INIT
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var playerHeight = 150;
var playerWidth = 150;
var playerX = (window.innerWidth - playerWidth) / 2;
var playerY = (window.innerHeight - playerHeight) / 2;
var vx = 0;
var vy = 0;
var orientation = 0;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var enterPressed = false;
var img = new Image();
img.src = "img/art.png";

// KEYBOARD
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if ("code" in e) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "Enter":
            case "ArrowRight":
            case "Right": // IE <= 9 and FF <= 36
            case "KeyD":
                rightPressed = true;
                return;
            case "ArrowLeft":
            case "Left": // IE <= 9 and FF <= 36
            case "KeyA":
                leftPressed = true;
                return;
            case "ArrowUp":
            case "Up": // IE <= 9 and FF <= 36
            case "KeyW":
                upPressed = true;
                return;
            case "ArrowDown":
            case "Down": // IE <= 9 and FF <= 36
            case "KeyS":
                downPressed = true;
                return;
            default:
                return;
        }
    }

    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    if(e.keyCode == 40) {
        downPressed = true;
    }
    if(e.keyCode == 13) {
        enterPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }
}
function keyUpHandler(e) {
    if ("code" in e) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "Enter":
            case "ArrowRight":
            case "Right": // IE <= 9 and FF <= 36
            case "KeyD":
                rightPressed = false;
                return;
            case "ArrowLeft":
            case "Left": // IE <= 9 and FF <= 36
            case "KeyA":
                leftPressed = false;
                return;
            case "ArrowUp":
            case "Up": // IE <= 9 and FF <= 36
            case "KeyW":
                upPressed = false;
                return;
            case "ArrowDown":
            case "Down": // IE <= 9 and FF <= 36
            case "KeyS":
                downPressed = false;
                return;
            default:
                return;
        }
    }

    if(e.keyCode == 39) {
        rightPressed = false;
    }
    if(e.keyCode == 13) {
        enterPressed = false;
    }
    if(e.keyCode == 37) {
        leftPressed = false;
    }
    if(e.keyCode == 40) {
        downPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }
}






// DRAW
function draw() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    // KEYBOARD
    if(rightPressed) {
        vx += 0.5
        //orientation += 0.01;
    }
    if(leftPressed) {
        vx -= 0.5;
        //orientation -= 0.01;
    }
    if(downPressed) {
        vy += 0.5;
    }
    if(upPressed) {
        vy -= 0.5;
    }
    
    if(enterPressed) {
        alert("please");

    }

 
    playerX += vx;
    playerY += vy;
    vx*=0.95;
    vy*=0.95;
    

    
   // ctx.rotate(orientation);
    ctx.drawImage(img, playerX, playerY);
    requestAnimationFrame(draw);

}
draw();
