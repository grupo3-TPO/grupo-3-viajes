

const form = document.querySelector('#form');

const submit= document.getElementById('submit');
const nombre= document.getElementById('nombre');
const apellido= document.getElementById('apellido');
const mail= document.getElementById('mail');
const password= document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //evita que se recargue  

    if (nombre.value === '' || apellido.value ==='' || apellido.value === '' || password.value === '') {
        alert('Los campos son obligatorios');
    }else {
        alert('Formulario enviado');
    }
    form.submit();
})





