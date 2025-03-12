const tilesContainer = document.getElementById('tiles-container');
const music = document.getElementById('music');

let tiles = [];
let tileSpeed = 5;

function createTile(left) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.left = `${left * 25}%`;
    tile.style.top = '-100px';
    tilesContainer.appendChild(tile);
    tiles.push(tile);
}

function moveTiles() {
    tiles.forEach(tile => {
        let top = parseInt(tile.style.top);
        top += tileSpeed;
        tile.style.top = `${top}px`;
        if (top > window.innerHeight) {
            tile.remove();
            tiles.splice(tiles.indexOf(tile), 1);
        }
    });
}

function gameLoop() {
    if (Math.random() < 0.02) {
        createTile(Math.floor(Math.random() * 4));
    }
    moveTiles();
    requestAnimationFrame(gameLoop);
}

music.play();
gameLoop();

tilesContainer.addEventListener('click', (event) => {
    const clickedTile = event.target;
    if (clickedTile.classList.contains('tile')) {
        clickedTile.remove();
        tiles.splice(tiles.indexOf(clickedTile), 1);
    }
});