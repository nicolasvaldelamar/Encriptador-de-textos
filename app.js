
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
btn2?.addEventListener('click', Desencriptar)
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
   palabra.style.fontSize = "20pt";
   cadena2 = r[0]
   for(let i = 0; i < r.length - 1; i++){
    cadena2 += r[i+1]
   }
   palabra.innerText = cadena2
}

function Desencriptar(){
        let matriz = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
        cadena = (input.value).toLowerCase();
    
        for(let i=0; i < matriz.length; i++) {
            if(cadena.includes(matriz[i][1])) {
                cadena = cadena.replaceAll(matriz[i][1], matriz[i][0])
            }
        }
    noencontrado.style.visibility = 'hidden';
    palabra.innerText = ""
    palabra.style.fontSize = "20pt";
    palabra.innerText = cadena
}
    