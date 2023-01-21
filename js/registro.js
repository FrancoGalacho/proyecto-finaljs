const registro = document.querySelector(".registro"),
    email = document.querySelector("#email"),
    nombre = document.querySelector("#nombre"),
    user = document.querySelector("#user"),
    pass = document.querySelector("#pass"),
    btnregistrar = document.querySelector("#registrar")
    form = document.querySelector("#form-registro");

//let usuarios;
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//tengo un error en json.parse
// if (localStorage.getItem("usuarios")) {
//     usuarios = JSON.parse(localStorage.getItem("usuarios"));
// } else {
//     usuarios = [];
// }


class usuario {
    constructor(nombre, usuario, email, password) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.pass = password
    }
}



// function limparCampos() {
//     nombre.value = "";
//     user.value = "";
//     pass.value = "";
//     email.value = "";

// }


function guardarUsuario(usuario) {
    return usuarios.push(usuario)
}

function guardarStorage(elemento) {
    return localStorage.setItem('usuarios', JSON.stringify(elemento))
}

btnregistrar.addEventListener("click", (e) => {
    e.preventDefault()
    if (!nombre.value || !user.value || !email.value || !pass.value) {
        alert("Todos los campos son requeridos")
        return
    }
    if (!usuarios.some(usuario => usuario.email === email.value)) {
        let newUser = new usuario(nombre.value, user.value, email.value, pass.value);
        guardarUsuario(newUser)
        guardarStorage(usuarios)
        alert("Usuario registrado!")
    }
    else {
        alert("El email ya existe!")
    }
    form.reset();
})