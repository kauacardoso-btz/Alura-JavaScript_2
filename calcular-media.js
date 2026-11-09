let notas = [10, 6.5, 8, 7.5]

notas.push(7)

const media = (notas.reduce((acc, nota) => {
    return acc += nota
})) / 4

console.log(media.toFixed(2));
