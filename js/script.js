const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft; 
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(marioPosition);
  // console.log(pipePosition)]

  if(pipePosition<= 140 && pipePosition > 0 && marioPosition < 140) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './assets/images/game-over.png';
    mario.style.width = '90px';
    mario.style.marginLeft = '50px';  
    clearInterval(loop);
  }
}, 10);

console.log(loop);

document.addEventListener('keydown', jump);

console.log('Teste log');