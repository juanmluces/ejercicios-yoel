const btnSeccionUno = document.getElementById('boton1');
const seccionUno = document.getElementById('seccion1')
const colorFondo1 = '#2f4f4f'
const colorFondo2 = '#483d8b'
const colorFondo3 = '#b8860b'

let contadorSeccion1 = 0;

function cambiarFondoSec1(){
  if (contadorSeccion1 === 0) {
    seccionUno.style.backgroundColor = colorFondo2
    contadorSeccion1 = 1
    
  } else if(contadorSeccion1 === 1 ){
    seccionUno.style.backgroundColor = colorFondo3
    contadorSeccion1 = 2
  } else{
    seccionUno.style.backgroundColor = colorFondo1
    contadorSeccion1 = 0;
  }
}


const box = document.getElementById('box');

function moverBoxArribaIzq(){
  box.style.top = 0;
  box.style.left = 0;
  box.style.bottom = 'unset';
  box.style.right = 'unset';
}

function moverBoxArribaDch(){
  box.style.top = 0;
  box.style.right = 0;
  box.style.left = 'unset';
  box.style.bottom = 'unset';
}
function moverBoxAbajoDch(){
  box.style.bottom = 0;
  box.style.right = 0;
  box.style.top = 'unset';
  box.style.left = 'unset';
}
function moverBoxAbajoIzq(){
  box.style.bottom = 0;
  box.style.le4 = 0;
  box.style.top = 'unset';
  box.style.right = 'unset';
}


const seccion3H2 = document.getElementById('seccion3H2')
const seccion3Input = document.getElementById('seccion3Input')

console.log(seccion3H2);
console.log(seccion3Input);

function changeH2() {
  seccion3H2.innerText = seccion3Input.value
  if(seccion3H2.innerText == '') {
    seccion3H2.innerText = 'Que Crack'
  }

}

