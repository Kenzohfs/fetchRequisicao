const username = document.location.search.replace('?', '');

function usuario() {
    fetch('https://fake-github.herokuapp.com/api/search/' + username).then(function (resultado) {
        resultado.json().then(function (data) {
            const avatar = document.createElement("img")
            avatar.id = 'avatarImagem'
            avatar.src = data.avatar_url;

            const nome = document.createElement("h3")
            nome.id = 'nome'
            nome.innerText = data.name;

            const login = document.createElement("p")
            login.id = 'login'
            login.innerText = data.login;

            mostrarItems(avatar, nome, login);
        });
    }).catch(function (erro) {
        console.log('Erro: ', erro);
    });

    repos()
}

function repos() {
    fetch('https://fake-github.herokuapp.com/api/search/' + username + '/repos').then(function (resultado) {
        resultado.json().then(function (data) {
            tabelaRepositorios();
            data.forEach(function (e) {
                inserirRepositorioTabela(e);
            })
        });
    }).catch(function (erro) {
        console.log('Erro: ', erro);
    });
}

function mostrarItems(imagem, nome, login) {
    const divProfile = document.createElement("div");
    document.body.appendChild(divProfile);
    divProfile.appendChild(imagem);
    divProfile.appendChild(nome);
    divProfile.appendChild(login);
}

function tabelaRepositorios() {
    const tabela = document.createElement('table');
    const linhaHeader = document.createElement('tr');
    const colunaNome = document.createElement('th');
    const colunaLink = document.createElement('th');

    document.body.appendChild(tabela);
    tabela.appendChild(linhaHeader);
    linhaHeader.appendChild(colunaNome);
    linhaHeader.appendChild(colunaLink);

    colunaNome.innerText = 'Nome';
    colunaLink.innerText = 'Link';
}

function inserirRepositorioTabela(element) {
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaLink = document.createElement('td');
    const link = document.createElement('a');

    let tabela = document.querySelector('table');

    colunaNome.innerText = element.name;
    link.innerText = element.svn_url;
    link.href = element.svn_url;

    tabela.appendChild(linha);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaLink);
    colunaLink.appendChild(link);
}

// function homePage() {
//     const voltar = document.createElement("button");
//     document.body.appendChild(voltar);

//     voltar.id = 'voltarButton'
//     voltar.innerText = 'Voltar'
//     voltar.onclick = link;
// }

// function link() {
//     window.location.href = "../index.html"
// }

usuario();
// homePage();