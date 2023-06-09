const productos = [
    { nombre: "producto1", precio: 20 },
    { nombre: "producto2", precio: 50 },
    { nombre: "prodcuto3", preci: 70 },
    { nombre: "producto4", precio: 100 },
];
let carrito = []

let seleccion = prompt("Bienvenido, desea seleccionar los productos de su preferencia")
while (seleccion != "si" && seleccion != "no") {
    alert("Seleccione si o no")
    seleccion = prompt("Bienvenido, desea seleccionar los productos de su preferencia")
}
if (selecc == "si") {
    alert("Nuestra lista de productos")
    let todoslosProductos = todoslosProductos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no") {
    altert("Gracias por venir, vuelva pronto")
}
while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "producto1" || producto == "producto2" || producto == "producto3" || producto == "producto4") {
        switch (producto) {
            case "producto1":
                precio = 20
                break;
            case "producto2":
                precio = 50
                break;
            case "producto3":
                precio = 70
                break;
            case "producto4":
                precio = 100
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))
        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("No contamos con ese producto en este momento")
    }
    seleccion = prompt("desea seguir comprando")
    while (seleccion === "no") {
        alert("Gracias por elegirnos")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades}, Total a pagar${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`Total a pagar: ${total}`)