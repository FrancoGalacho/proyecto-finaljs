const search = document.querySelector("#searchbox"),
buscar = document.querySelector("#form_buscar")
contenedor = document.querySelector("#productos"),
nombreUser = document.querySelector("#nombreUser")
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");


let carrito = [];

fetch("../data/data.json")
.then(res => res.json())
.then(datos => {
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
        
        
        function crearHTML(array) {
            contenedor.innerHTML = "";
            for (const producto of array) {
                let card = document.createElement("div");
                card.innerHTML = `
                <div class="md-card-bg mbsc-card">
                <img src="${producto.img}"/>
                <h2 class="md-card-title mbsc-align-center">${producto.nombre}</h2>
                <h5 class="md-card-subtitle mbsc-align-center mbsc-bold">$${producto.precio}</h5>
                </div>
                `
                contenedor.append(card);
                let comprar = document.createElement('button');
                comprar.innerText ="comprar";
                comprar.className= "comprar";
                
                contenedor.append(comprar);
            
                comprar.addEventListener(`click`, ()=>{
                    carrito.push({
                        id: producto.id,
                        nombre: producto.nombre,
                        precio: producto.precio,
                    });
                    
                carrito.forEach((producto)=>{
                    let carritoContent = document.createElement("div");
                    carritoContent.className= "modalCarrito";
                    carritoContent.innerHTML= ` <img src="${producto.img}"/>
                    <h3 >${producto.nombre}</h3>
                    <p>$${producto.precio}$</p>
                    `;
                
                modalContainer.append(carritoContent);
            
                        
           
            
        });
});

verCarrito.addEventListener("click",()=>{
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalboton = document.createElement("h1");
    modalboton.innerText = "tus productos";
    modalboton.className = "modal-header-button";

    modalHeader.append(modalboton);
    
    const totalPrecio = document.createElement("div");
    totalPrecio.className = "modal-content";
    totalPrecio.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalPrecio);
;
});


const total = carrito.reduce ((acc,el) => acc + el.precio, 0);

const totalPrecio = document.createElement("div");
totalPrecio.className = "modal-content";
totalPrecio.innerHTML = `total a pagar: ${total} $`;
modalContainer.append(totalPrecio);
};
        }



