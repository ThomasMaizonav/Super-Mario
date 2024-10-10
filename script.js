const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('#game-board');
const menu = document.querySelector('#menu');
const startButton = document.querySelector('#startButton');
const restartMenu = document.querySelector('#restartMenu');
const restartButton = document.querySelector('#restartButton');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Função para iniciar o jogo
const startGame = () => {
    menu.style.display = 'none';
    gameBoard.style.display = 'block';
};

// Função para reiniciar o jogo
const restartGame = () => {
    location.reload(); // Recarrega a página para reiniciar o jogo
};

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        // Mostra o botão de reiniciar
        restartMenu.style.display = 'block';
    
    }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

// Eventos de clique para iniciar e reiniciar o jogo
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
