
const listaCompras = [];


for (let i = 1; i <= 3; i++) {
    const item = prompt(`Adicione o item ${i} à sua lista de compras:`);
    listaCompras.push(item); 
}

if (listaCompras[listaCompras.length - 1] !== "leite") {
    listaCompras.push("leite");
}

console.log("Lista de compras atualizada:");
console.log(listaCompras);
