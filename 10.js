
const numeros = [4, 7, 2, 9, 7, 3, 7, 8, 1, 6];


const numeroPutao = parseInt(prompt("Digite um número para verificar se existe no vetor:"));


const indices = [];


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroPutao) {
        indices.push(i); 
    }
}


if (indices.length > 0) {
    console.log(`O número ${numeroPutao} foi encontrado nos índices: ${indices.join(', ')}`);
} else {
    console.log(`O número ${numeroPutao} não foi encontrado no vetor.`);
}
