let banco = []

function getBanco() {
    if (localStorage.getItem('info') != null) {
        banco = JSON.parse(localStorage.getItem('info'))
        console.log(banco)
    }
}
function setBanco() {
    localStorage.setItem('info', JSON.stringify(banco))
}

getBanco()

// CREATE

function cria() {
    const nome = document.getElementById('nome').value
    const salario = document.getElementById('salario').value
    const idade = document.getElementById('idade').value
    const tamanho = document.getElementById('tamanhope').value

    banco.push({nome, salario, idade, tamanho})
    setBanco()
    ler()
}

document.getElementById('salvar').addEventListener('click', cria)

// READ

function ler() {
    const arquivos = document.getElementById('dedos')
    while (arquivos.firstChild) {
        arquivos.removeChild(arquivos.lastChild);
    }
    for (let i = 0; i < banco.length; i++) {
        let rolo = document.createElement('div')
        rolo.innerHTML = `
        <div id='div${i}'>
            nome: ${banco[i].nome},
            salario: ${banco[i].salario},
            idade: ${banco[i].idade},
            tamanho: ${banco[i].tamanho}
            <button id='editar' data-index='${i}'>editar</button>
            <button id='deletar' data-index='${i}'>deletar</button>
        </div>
        `
        document.getElementById('dedos').appendChild(rolo)
    }
}

// UPDATE

function update(event) {
    const nome = document.getElementById('nome').value
    const salario = document.getElementById('salario').value
    const idade = document.getElementById('idade').value
    const tamanho = document.getElementById('tamanhope').value
    
    banco[event.target.dataset.index] = {nome, salario, idade, tamanho}
    setBanco()
    ler()
}

// DELETE

function deleter(event) {
    banco.splice(event.target.dataset.index, 1)
    setBanco()
    ler()
}

// DISAMBIGUATION

function umbigo(event) {
    const eve = event
    if (event.target.id == 'editar') {
        update(eve)
    } else if (event.target.id == 'deletar') {
        deleter(eve)
    }
}

ler()
document.getElementById('dedos').addEventListener('click', umbigo)