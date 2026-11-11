const alunos = ['João', 'Ana', 'Caio', 'Lara']
const medias = [10, 6.5, 8, 7.5]

const lista = [alunos, medias]

function exibeNomeNota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista
        const indice = alunos.indexOf(aluno)
        const mediaAluno = medias[indice]
        console.log(`O nome do aluno é: ${aluno}. Sua média é: ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista!');
    }
}

exibeNomeNota('João')
exibeNomeNota('Kauã')