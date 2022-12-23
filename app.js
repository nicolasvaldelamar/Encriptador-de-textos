
const input = document.querySelector('.input');
const btn1 = document.querySelector('.css-button-retro--sky');
const btn2 = document.querySelector('.css-button-retro--sky1');
const btn3 = document.querySelector('.css-button-retro--sky3');
const no = document.querySelector('.no');
const si = document.querySelector('.si');
const output = document.querySelector('.output');
const noencontrado = document.querySelector('.no-encontrado');
const palabra = document.querySelector('.palabra');
const img = document.querySelector(".img");
const mensaje = document.querySelector('.mensaje');

input?.addEventListener('change', Actualizar)
btn1?.addEventListener('click', Encriptar)
btn2?.addEventListener('click', Desencriptar)
btn3?.addEventListener('click', ()=>{ 
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Texto copiado',
        showConfirmButton: false,
        timer: 1000
      })
})
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
   mensaje.style.visibility = 'visible';
   img.style.visibility = 'hidden';
   noencontrado.style.visibility = 'hidden';
   palabra.innerText = ""
   palabra.style.fontSize = "20pt";
   palabra.style.visibility = 'hidden';
   btn3.style.visibility = 'visible';
   cadena2 = r[0]
   for(let i = 0; i < r.length - 1; i++){
    cadena2 += r[i+1]
   }
   mensaje.value = cadena2
}

function Desencriptar(){
        let matriz = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
        cadena = (input.value).toLowerCase();
    
        for(let i=0; i < matriz.length; i++) {
            if(cadena.includes(matriz[i][1])) {
                cadena = cadena.replaceAll(matriz[i][1], matriz[i][0])
            }
        }
        mensaje.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        img.style.visibility = 'hidden';
        noencontrado.style.visibility = 'hidden';
        palabra.style.visibility = 'hidden';
        palabra.innerText = ""
        palabra.style.fontSize = "20pt";
        mensaje.value = cadena
}
    
