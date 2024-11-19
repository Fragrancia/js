
const exerciciosSemana = ["corrida", "flexões", "abdominais"];


if (exerciciosSemana[exerciciosSemana.length - 1] !== "alongamento") {
    exerciciosSemana.push("alongamento");
}


console.log("Lista de exercícios atualizada:");
console.log(exerciciosSemana);
