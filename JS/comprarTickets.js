categorias = [
    {
        class: "borderColorE",
        nombre: "Estudiante",
        descuento: 80
    },
    {
        class: "borderColorT",
        nombre: "Trainee",
        descuento: 50
    },
    {
        class: "borderColorJ",
        nombre: "Junior",
        descuento: 15
    }
]

const precio = 200

const dibujarCategoria = () => {
    let contenedor = document.querySelector("#categoria")
    categorias.forEach(p => {
        let hijo = document.createElement("div")
        hijo.innerHTML =`<div class="ordenarCategorias ${p.class}">
                            <h3>${p.nombre}</h3>
                            <p>Tienen un descuento</p>
                            <p class="desc">${p.descuento}%</p>
                            <p>* presentar documentación</p>
                        </div>`
        contenedor.appendChild(hijo)
    });
}

dibujarCategoria();



const dibujarTotal = () =>{
    let contenedor = document.querySelector("#total")
        let hijo = document.createElement("div")
        hijo.classList.add ("totalTickets")
        hijo.innerHTML = `<p id="pagar" class="pagar">Total a Pagar: </p>`
        contenedor.appendChild(hijo)
}

dibujarTotal();


const form = document.querySelector("#form");

const cantidad = document.querySelector("#cantidad")

form.addEventListener("submit", event => {
    event.preventDefault ();
    const p = document.querySelector("#cat")
    const mensaje = document.querySelector("#pagar")
    mensaje.textContent = "Total a Pagar: " + (precio - (precio * ((p.value)/100))) * cantidad.value
});

function seleccionar() {
    const c = document.querySelector("#cantidad")
    document.getElementById(`resumen`).addEventListener(`click`, () => {
        if(c.value === "" || c.value === "0"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Recuerde ingresar la cantidad de tickets',
              })
        } else {
            const p = document.querySelector("#cat")
            const mensaje = document.querySelector("#pagar")
            mensaje.textContent = "Total a Pagar: " + (precio - (precio * ((p.value)/100))) * cantidad.value
        }  
    })
}


seleccionar(); 


function borrar() {
    document.getElementById(`borro`).addEventListener(`click`, () => {
        const mensaje = document.querySelector("#pagar")
        mensaje.textContent = "Total a Pagar: "
        const c = document.querySelector("#cantidad")
        c.value = ``
    })
}

borrar ();