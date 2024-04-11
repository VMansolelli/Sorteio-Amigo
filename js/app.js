let nomesAmigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    if (nome == '') {
        alert ("Preecher nome do amigo");
    } else {
        adicionarAmigoLista(nome);
    }
    limparCampos();
    atualizarLista();
}

function limparCampos() {
    document.getElementById('nome-amigo').value = '';
}

function adicionarAmigoLista(nome) {
    if (nomesAmigos.includes(nome)) {
        alert("Esse amigo ja foi incluido");
    } else {
        nomesAmigos.push(nome);
        let listaAmigos = document.getElementById('lista-amigos');
        listaAmigos.innerHTML = nomesAmigos.join(' - ');
    }
    
}

function reiniciar() {
    limparCampos();
    nomesAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}

function sortear() {
    limparListaSorteio();
    if (nomesAmigos.length < 3) {
        alert ("Adicionar mais amigos");
    } else {
        embaralha(nomesAmigos);
        let listaSorteio = document.getElementById('lista-sorteio');
        for(let i = 0;i<nomesAmigos.length;i++) {
            if (i == nomesAmigos.length-1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + (`${nomesAmigos[i]} -> ${nomesAmigos[0]} <br>`);
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + (`${nomesAmigos[i]} -> ${nomesAmigos[i+1]} <br>`);
            }
        }
    }
    
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function limparListaSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function limparListaNomes() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
}

function atualizarLista() {
    limparListaNomes();
    let lista = document.getElementById('lista-amigos');

    for (let i = 0; i < nomesAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = nomesAmigos[i];
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });
        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
} 

function excluirAmigo(index) {
    nomesAmigos.splice(index, 1);
    atualizarLista();
    sortear();
}