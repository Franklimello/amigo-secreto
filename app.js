// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        input.value = ''; // Limpa o campo de entrada
        atualizarListaAmigos();
    } else {
        alert('Por favor, digite um nome!');
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista existente

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Embaralha a lista de amigos
    const amigosEmbaralhados = [...amigos].sort(() => Math.random() - 0.5);
    const sorteios = {};

    // Realiza o sorteio
    amigos.forEach((amigo, index) => {
        // A pessoa não pode sortear a si mesma
        sorteios[amigo] = amigosEmbaralhados[(index + 1) % amigosEmbaralhados.length];
    });

    // Exibe o resultado
    for (const [amigo, sorteado] of Object.entries(sorteios)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} sorteou ${sorteado}`;
        resultado.appendChild(li);
    }
}
