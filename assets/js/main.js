function criaHoraDosSegundos(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-Br', {
    hour12: false,
    timeZone: 'GMT'
  });
}

console.log(criaHoraDosSegundos(10))

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio(){
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000)
}

document.addEventListener('click', (e) =>{
  const elemento = e.target;
  
  if (elemento.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }

  if (elemento.classList.contains('pausar')) {
    relogio.classList.add('pausado');
    clearInterval(timer)
  }

  if (elemento.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
  }
})

