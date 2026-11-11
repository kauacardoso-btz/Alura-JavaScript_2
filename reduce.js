const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcularMedia(notas) {
    return notas.reduce((acc, nota) => acc += nota) / notas.length
}

const mediaJS = calcularMedia(salaJS)
const mediaJava = calcularMedia(salaJava)
const mediaPython = calcularMedia(salaPython)

console.log(mediaJS, mediaJava, mediaPython);
