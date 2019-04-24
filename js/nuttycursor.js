
//initialize variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var playerHeight = 110;
var playerWidth = 92;
var vx = 0;
var vy = 0;
var x = 0;
var y = 0;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var playerX = (canvas.width - playerWidth) / 2;
var playerY = (canvas.height - playerHeight) / 2;
var img = new Image();
img.src = "mstile-150x150.png";


// INIT
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    function keyDownHandler(e) {
        if ("code" in e) {
            switch(e.code) {
                case "Unidentified":
                    break;
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
        else if(e.keyCode == 38) {
            upPressed = true;
        }
    }
    function keyUpHandler(e) {
        if ("code" in e) {
            switch(e.code) {
                case "Unidentified":
                    break;
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
        else if(e.keyCode == 37) {
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // KEYBOARD
        if(rightPressed) {
            vx += 5;
        }
        else if(leftPressed) {
            vx -= 5;
        }
        if(downPressed) {
            vy += 5;
        }
        else if(upPressed) {
            vy -= 5;
        }
        playerX += vx;
        playerY += vy;
        ctx.drawImage(img, playerX, playerY);
        requestAnimationFrame(draw);
    }
    draw();
