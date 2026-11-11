const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// notas.forEach((nota) => somaNotas += nota)

notas.forEach(somaNotas)

function somaNotas (nota) {
    somaDasNotas += nota
}

const media = somaNotas / notas.length

console.log(`A média das notas é ${media}`);
