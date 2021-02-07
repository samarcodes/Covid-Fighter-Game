function loadImages() {
    //player, virus, gem
    enemyImage = new Image();
    enemyImage.src = 'Assets/v1.png';

    playerImage = new Image();
    playerImage.src = 'Assets/superhero.png';

    gemImage = new Image();
    gemImage.src = 'Assets/gemm.png';
}
function init() {
    //define the objects that we will have in the game
    canvas = document.getElementById('mycanvas');
    W = 700;
    H = 400;
    canvas.width = W;
    canvas.height = H;

    //create a context
    pen = canvas.getContext('2d');

    enemy1 = {
        x: 150,
        y: 50,
        w: 60,
        h: 60,
        speed: 20,
    };
    enemy2 = {
        x: 300,
        y: 150,
        w: 60,
        h: 60,
        speed: 30,
    };
    enemy3 = {
        x: 450,
        y: 20,
        w: 60,
        h: 60,
        speed: 40,
    };

    enemies = [enemy1, enemy2, enemy3];

    player = {
        x: 20,
        y: H/2,
        w: 60,
        h: 60,
        speed: 20,
        moving: 'false',
    }
    gem = {
        x: W-100,
        y: H/2,
        w: 60,
        h: 60,
    }

    //listen to events  on the canvas
    document.addEventListener('keydown', (e) => {
        if(e.key == 'ArrowRight') {
            player.moving = true;
        }
    });
    document.addEventListener('keyup', () => {
        player.moving = false;
    });
}
function draw() {
    //clear the canvas area for the old frame
    pen.clearRect(0, 0, W, H);

    pen.drawImage(playerImage, player.x, player.y, player.w, player.h);
    pen.drawImage(gemImage, gem.x, gem.y, gem.w, gem.h);

    enemies.forEach(enemy => {
        pen.drawImage(enemyImage, enemy.x, enemy.y, enemy.w, enemy.h); 
    });
}
function update() {
    if(player.moving == true) {
        player.x += player.speed;
    }

    enemies.forEach(enemy => {
        enemy.y += enemy.speed;
        if(enemy.y > H - enemy.h || enemy.y < 0) {
            enemy.speed *= -1;
        }
    })
}
function gameloop() {
    draw();
    update();
}

loadImages();
init();
var f = setInterval(gameloop, 100);