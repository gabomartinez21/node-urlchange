const formulario = document.querySelector('#agregar-url');

formulario.addEventListener('submit',async e =>{
    e.preventDefault();

    const urlOriginal = document.querySelector('#urlOriginal').value;
    const respuesta = await fetch(e.target.action,{
        method:e.target.method,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({urlOriginal})
    });

    const resultado = await respuesta.json();
    console.log(resultado);
});