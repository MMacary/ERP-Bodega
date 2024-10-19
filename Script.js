//Scrip.js

// Simulando la carga de artículos desde la base de datos
const articulos = [
    { id: "articulo_1", nombre: "Producto A", descripcion: "Descripción del Producto A", precio: 100, stock: 50 },
    { id: "articulo_2", nombre: "Producto B", descripcion: "Descripción del Producto B", precio: 200, stock: 30 },
];

function cargarArticulos() {
    const tbody = document.querySelector('#articulos tbody');
    articulos.forEach(articulo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${articulo.id}</td>
            <td>${articulo.nombre}</td>
            <td>${articulo.descripcion}</td>
            <td>${articulo.precio}</td>
            <td>${articulo.stock}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', cargarArticulos);