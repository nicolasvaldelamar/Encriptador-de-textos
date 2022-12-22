
const input = document.querySelector('.input');
const btn1 = document.querySelector('.css-button-retro--sky')
const btn2 = document.querySelector('.css-button-retro--sky1')
const no = document.querySelector('.no')
const si = document.querySelector('.si')




input?.addEventListener('change', Actualizar)
btn1?.addEventListener('click', Encriptar)
btn2?.addEventListener('click', Dencriptar)

let array;
let r;

function Actualizar(){
    array = Array.from((input.value).toLowerCase());
}

function Encriptar(){
   for(let i = 0; i<array.length; i++){
      if(array[i] === 'e'){
         array[i] = 'enter'
      }
      if(array[i] === 'i'){
        array[i] = 'imes'
     }
     if(array[i] === 'a'){
        array[i] = 'ai'
     }
     if(array[i] === 'u'){
        array[i] = 'ufat'
     }
     if(array[i] === 'o'){
        array[i] = 'ober'
     }
   }
   r = array;
   console.log(r)
   return r
}

function Dencriptar(){

    let cadena = (input.value).toLowerCase();

    var posicione = cadena.indexOf("enter");
    var posicioni = cadena.indexOf("imes");
    var posiciona = cadena.indexOf("ai");
    var posicionu = cadena.indexOf("ufat");
    var posiciono = cadena.indexOf("ober");
    let posiciones = [posicione,posicioni,posiciona,posicionu,posiciono];
    let desencriptar = ['enter','imes','ai','ufat','ober'];
    for(let i = 0; i < desencriptar.length; i++){
         whilee(posiciones[i], desencriptar[i]);
    }
    
}
    


function whilee(posicion, palabra){
    while (posicion >= 0){
        cadena = cadena.slice(0, posicion) + "atito" + cadena.slice(posicion + 3);
        posicion = cadena.indexOf("ato");
    }
}
