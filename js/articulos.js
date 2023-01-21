const search = document.querySelector("#searchbox"),
    buscar = document.querySelector("#form_buscar")
contenedor = document.querySelector("#productos"),
    nombreUser = document.querySelector("#nombreUser")

    

fetch("../data/data.json")
.then(res=>res.json())
.then(datos=>{
    crearHTML(datos);
})

buscar.addEventListener("submit", (e) => {
    e.preventDefault();
    if (search.value) {
        let filtrado = productos.filter(el => el.nombre.includes(search.value.toLowerCase()));
        crearHTML(filtrado)
        buscar.reset()
    }
})



// function filtrarproductos(filtro) {
//     let filtrado = productos.filter((el) => {
//         return el.nombre.includes(filtro);

//     });
//     return filtrado;
// }

function crearHTML (array){
    contenedor.innerHTML = "";
    for (const producto of array) {
        contenedor.innerHTML += `
        <div class="card " style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top tarjeta" alt="...">
  <div class="card-body">
    <h2 class="card-title">${producto.nombre}</h2>
    <h5 class="md-card-subtitle mbsc-align-center mbsc-bold">$${producto.precio}</h5>
    <a class="btn btn-primary btn-comprar"   >Comprar</a>
  </div>
</div>`
        
    }
}


const input = document.querySelectorAll('btn-comprar');
console.log (input);



