/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1'),
    ctx = canvas.getContext('2d'),
    CANVAS_WIDTH = canvas.width = window.innerWidth,
    CANVAS_HEIGHT = canvas.height = window.innerHeight,
    numberOfShapes = 10,
    enemiesArray = [];
let gameFrame = 0;

class Shape {
    constructor() {
        this.image = new Image();
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);

        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (canvas.height - this.height);
        this.markedForDeletion = false;

        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 300);

        this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')'
    }
    update() {
        if (gameFrame % this.interval === 0) {
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX,
            dy = this.y - this.newY;
        this.x -= dx / 70;
        this.y -= dy / 70;
        if (this.x < 0 - this.width) this.markedForDeletion = true;


        if (this.x + this.width < 0) this.x = canvas.width;
        if (gameFrame % this.flapSpeed === 0) this.frame > 4 ? this.frame = 0 : this.frame++;
        particals.push(new Particle(this.x, this.y, this.width, this.color))

    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = 'transparent';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
// particles
let particals = [];
class Particle {
    constructor(x, y, size, color) {
        this.size = size;
        this.x = x + this.size / 2 + Math.random() * 50 - 25;
        this.y = y + this.size / 3 + Math.random() * 50 - 25;
        this.radius = Math.random() * this.size / 10;
        this.maxRadius = Math.random() * 20 + 35;
        this.markedForDeletion = false;
        this.speedX = Math.random() * 1 + 0.5;
        this.color = color;
    }
    update() {
        this.x += this.speedX;
        this.radius += 0.5;
        if (this.radius > this.maxRadius - 5) this.markedForDeletion = true;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = 1 - this.radius / this.maxRadius;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}


for (let i = 0; i < numberOfShapes; i++) {
    enemiesArray.push(new Shape());
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(shape => {
        shape.update();
        shape.draw();
    });
    gameFrame++;
    [...particals].forEach(object => object.update());
    [...particals].forEach(object => object.draw());
    particals = particals.filter(object => !object.markedForDeletion);


    requestAnimationFrame(animate);
}
animate();