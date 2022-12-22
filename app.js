
const input = document.querySelector('.input');
const btn1 = document.querySelector('.css-button-retro--sky')
const btn2 = document.querySelector('.css-button-retro--sky1')
const no = document.querySelector('.no')
const si = document.querySelector('.si')
const output = document.querySelector('.output')
const noencontrado = document.querySelector('.no-encontrado')
const palabra = document.querySelector('.palabra')

input?.addEventListener('change', Actualizar)
btn1?.addEventListener('click', Encriptar)
btn2?.addEventListener('click', Dencriptar)
let cadena;
let array;
let r;
let cadena2;
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
   noencontrado.style.visibility = 'hidden';
   palabra.innerText = ""
   palabra.style.fontSize = "18pt";
   console.log(r)
   cadena2 = r[0]
   for(let i = 0; i < r.length - 1; i++){

    cadena2 += r[i+1]
    console.log(cadena2)
   }
   palabra.innerText = cadena2
}

function Dencriptar(){
    
    cadena = (input.value).toLowerCase();

    let posicione = cadena.indexOf("enter");
    let posicioni = cadena.indexOf("imes");
    let posiciona = cadena.indexOf("ai");
    let posicionu = cadena.indexOf("ufat");
    let posiciono = cadena.indexOf("ober");
    let posiciones = [posicione,posicioni,posiciona,posicionu,posiciono];
    let desencriptar = ['enter','imes','ai','ufat','ober'];
    for(let i = 0; i < desencriptar.length; i++){
         whilee(posiciones[i], desencriptar[i]);
    }
    document.input.style.visibility = 'hidden';
    document.output.style.visibility = 'visible';
    
}
    


function whilee(posicion, palabra){
    while (posicion >= 0){
        if(palabra === "enter")
        cadena = cadena.slice(0, posicion) + "e" + cadena.slice(posicion + 3);
        posicion = cadena.indexOf(palabra);
        if(palabra === "imes")
        cadena = cadena.slice(0, posicion) + "i" + cadena.slice(posicion + 3);
        posicion = cadena.indexOf(palabra);
        if(palabra === "ai")
        cadena = cadena.slice(0, posicion) + "a" + cadena.slice(posicion + 3);
        posicion = cadena.indexOf(palabra);
        if(palabra === "ufat")
        cadena = cadena.slice(0, posicion) + "u" + cadena.slice(posicion + 3);
        posicion = cadena.indexOf(palabra);
        if(palabra === "ober")
        cadena = cadena.slice(0, posicion) + "o" + cadena.slice(posicion + 3);
        posicion = cadena.indexOf(palabra);
    }
    
}
