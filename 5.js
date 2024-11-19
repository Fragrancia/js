
const filmesFavoritos = ["American Pie", "365 dias", "PlayBoy"];


filmesFavoritos[0] = "De Carona com Ted";


if (filmesFavoritos[filmesFavoritos.length - 1] !== "PlayBoy") {
    filmesFavoritos.push("PlayBoy"); 
}


console.log("Lista de filmes favoritos atualizada:");
console.log(filmesFavoritos);
