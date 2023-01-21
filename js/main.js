const inicio = document.querySelector('#inicio');

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

inicio.addEventListener("submit", (e) => {
    e.preventDefault();
    if(usuarios.find(user => user.email === exampleInputEmail1.value && user.pass === exampleInputPassword1.value)) {
        location.href = "../pages/articulos.html"
    }
    else alert("usuario no encontrado!")
})