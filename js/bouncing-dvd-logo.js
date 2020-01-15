let speed = 25;
let scale = 0.4; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let logo = {
    x: 700,
    y: 400,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    logo.img.src = 'img/logo.png';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(logo.x, logo.y, logo.img.width*scale, logo.img.height*scale);
        ctx.drawImage(logo.img, logo.x, logo.y, logo.img.width*scale, logo.img.height*scale);
        //Move the logo
        logo.x+=logo.xspeed;
        logo.y+=logo.yspeed;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(logo.x+logo.img.width*scale >= canvas.width || logo.x <= 0){
        logo.xspeed *= -1;
        pickColor();
    }
        
    if(logo.y+logo.img.height*scale >= canvas.height || logo.y <= 0){
        logo.yspeed *= -1;
        pickColor();
    }    
}

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}