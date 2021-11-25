const username = document.location.search.replace('?', '');

fetch('https://fake-github.herokuapp.com/api/' + username).then(function (resultado) {
    resultado.json().then(function (data) {
        const avatar = document.createElement("img")
        avatar.src = data.avatar_url;

        const nome = document.createElement("p")
        nome.innerText = data.name;

        const login = document.createElement("p")
        login.innerText = data.login;

        mostrarItems(avatar, nome, login);
    });
}).catch(function (erro) {
    console.log('Erro: ', erro);
});

fetch('https://fake-github.herokuapp.com/api/' + username + '/repos').then(function (resultado) {
    resultado.json().then(function (data) {
        data.forEach(get)
    });
}).catch(function (erro) {
    console.log('Erro: ', erro);
});

function mostrarItems(imagem, nome, login) {
    document.body.appendChild(imagem);
    document.body.appendChild(nome);
    document.body.appendChild(login);

}

function tabelaRepositorios() {
    const tabela = document.createElement('table');
    const linhaHeader = document.createElement('tr');
    const colunaNome = document.createElement('th');
    const colunaLink = document.createElement('th');

}