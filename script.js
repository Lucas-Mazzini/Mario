const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');
const container = document.querySelector('#container');
const button = document.querySelector('#restart');

const jump = () =>  {
    mario.classList.add('jumpp');

    setTimeout (() => {
    mario.classList.remove('jumpp')
    } , 500)
    
}
let loop;
const StartGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    container.classList.add('hidden');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {

       pipe.style.animation = 'none';  
       pipe.style.left = `${pipePosition}px`; 
       mario.style.bottom = `${marioPosition}px`;
       mario.src = 'game-over.png';
       mario.style.width = '80px';
       mario.style.marginLeft = '50px';
       mario.classList.add('gameover');
       container.classList.remove('hidden');
       container.classList.add('active');
       clearInterval(loop);
    }
    
}, 10);

const retart = () => {
    pipe.style.animation = 'pipee 1.5s infinite linear';
    pipe.style.left = '';

    mario.src = 'mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '0px';
    mario.style.bottom = '0px';
    mario.classList.remove('gameover');

    container.classList.remove('active');
    container.classList.add('hidden');
    clearInterval(loop);
    StartGame();
}

button.addEventListener('click', retart);
document.addEventListener('keydown', jump);

StartGame();




