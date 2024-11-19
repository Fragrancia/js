
const LimpezaDaPorcaDaAna = [];


for (let i = 1; i <= 4; i++) {
    const tarefa = prompt(`Ana, adicione a porra da tarefa com numero ${i}:`);
    LimpezaDaPorcaDaAna.push(tarefa);
}

LimpezaDaPorcaDaAna.splice(2, 1); 


LimpezaDaPorcaDaAna[1] = "limpar o banheiro sua porca";

console.log("Lista de tarefas de limpeza atualizada:");
console.log(LimpezaDaPorcaDaAna);
