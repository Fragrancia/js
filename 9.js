
const metasSemana = [];


for (let i = 1; i <= 3; i++) {
    const meta = prompt(`Carlos, adicione a meta número ${i} para a semana:`);
    metasSemana.push(meta);
}

if (metasSemana[1] !== "exercício físico") {
    metasSemana[1] = "praticar esportes";
}

console.log("Lista de metas semanais atualizada:");
console.log(metasSemana);
