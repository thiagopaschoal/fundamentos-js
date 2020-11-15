const fs = require('fs')
const path = require('path')

const lerArquivo = (path) => {
    if (path) {
        return new Promise((resolve, reject) => {
            try {
                const data = fs.readFileSync(path, 'utf8');
                resolve(data);
              } catch (err) {
                reject(err);
              }
        })
    }
    return null;
}


const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)