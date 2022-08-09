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

        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 300);
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

        if (this.x + this.width < 0) this.x = canvas.width;
        if (gameFrame % this.flapSpeed === 0) this.frame > 4 ? this.frame = 0 : this.frame++;
    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        ctx.strokeStyle = 'rgb(255, 255, 255, .2)';
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
    gameFrame++
    requestAnimationFrame(animate);
}
animate();