const lista = [
    { nome: "Bruno Henrique Verbinnen de Carvalho", username: "brunohvc" },
    { nome: "Vytor Augusto Rosa", username: "K43RU" },
    { nome: "João Henrique Meirles da Silva", username: "nihilth" },
    { nome: "Otavio Augusto dos Santos", username: "SantOtavio" },
    { nome: "Camilly de Souza Pessotti", username: "camillyPessotti" },
    { nome: "Thiago Marins Braga", username: "ThiagoBrag" },
    { nome: "Ester Girelli", username: "Esterzinha12" },
    { nome: "Gustavo Rebelatto Zapella", username: "rebelattogustavo" },
    { nome: "Henrique Cole Fernandes", username: "HenriqueCole" },
    { nome: "Kenzo Hideaky Ferreira Sato", username: "Kenzohfs" },
    { nome: "Vinícius Bonatti Benner", username: "viniciusz1" },
    { nome: "Leonardo Heitor Poglia", username: "leopoglia" },
    { nome: "Felipe Mielke Vieira", username: "FelipeMielkeVieira" },
    { nome: "Eduarda Bolgenhagen De Campos", username: "eduardabolgenhagen" },
    { nome: "Matheus Franzener Hohmann", username: "MatheusFranzener" },
    { nome: "Leonardo Giuseppe de Souza Rafaelli", username: "LeonardoRafaelli" },
    { nome: "Diego Planinscheck", username: "frst157" },
    { nome: "Camilly Vitoria da Rocha Goltz", username: "VitoriaCamilly" },
    { nome: "Bruna Alves Mafra", username: "BMafra" },
    { nome: "Otavio Matheus Neves", username: "otavionvs" },
];

console.log("Deploy has been sucesso");

function tabela(listaParameter) {
    let tabelaAtual = document.querySelector('table');

    if (tabelaAtual) {
        tabelaAtual.remove();
    }

    const tabela = document.createElement("table");

    document.body.appendChild(tabela);

    headerTabela(tabela, listaParameter);
}

function headerTabela(tabela, listaParameter) {
    const linhaHeader = document.createElement('tr')
    const nameHeader = document.createElement('th');
    const usernameHeader = document.createElement('th');
    const button = document.createElement('th');

    nameHeader.innerText = "Fullname";
    usernameHeader.innerText = "Username"
    button.innerText = "Redirecionamento";

    linhaHeader.appendChild(nameHeader);
    linhaHeader.appendChild(usernameHeader);
    linhaHeader.appendChild(button);

    tabela.appendChild(linhaHeader);

    colocarRegistors(tabela, listaParameter);
}

function colocarRegistors(tabela, listaParameter) {
    listaParameter.forEach(function (e) {
        const linha = document.createElement("tr");
        const colunaName = document.createElement("td");
        const colunaUsername = document.createElement("td");
        const botaoRedirecionamento = document.createElement("td");

        colunaName.innerText = e.nome;
        colunaUsername.innerText = e.username;

        tabela.appendChild(linha);
        linha.appendChild(colunaName);
        linha.appendChild(colunaUsername);
        linha.appendChild(botaoRedirecionamento);
        botaoRedirecionamento.appendChild(criarBotao(e.username));
    });

    botaoCadastro()
}

function criarBotao(username) {
    const botao = document.createElement("button")
    const link = document.createElement('a');

    link.innerText = 'Repositorio'
    link.href = './userPage/index.html?' + username

    botao.appendChild(link);

    return botao;
}

function botaoCadastro() {
    let botaoAtual = document.getElementById('botaoAtual');

    if (botaoAtual) {
        botaoAtual.remove();
    }

    const button = document.createElement('button');

    button.id = 'botaoAtual'

    document.body.appendChild(button);
    button.innerText = "Cadastrar pessoa"

    button.onclick = criarModal;
}

function criarModal() {
    const fundo = document.createElement('div');
    const modal = document.createElement('div');

    fundo.id = "fundo"
    modal.id = 'modal';

    fundo.style.background = 'gray';
    fundo.style.opacity = '0.4';

    document.body.appendChild(fundo);
    document.body.appendChild(modal);

    conteudoModal(modal);
}

function conteudoModal(modal) {
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');

    header.id = 'headerModal';
    main.id = 'mainModal';
    footer.id = 'footerModal';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    inputModal(main);
    botaoModal(footer);
}

function inputModal(main) {
    let inputName = document.createElement('input');
    let inputUsername = document.createElement('input');

    inputName.id = 'inputName'
    inputUsername.id = 'inputUsername'

    inputName.placeholder = 'Digite o nome';
    inputUsername.placeholder = 'Digite o usuário';

    main.appendChild(inputName);
    main.appendChild(inputUsername);
}

function botaoModal(footer) {
    const botaoCadastrarModal = document.createElement('button');

    botaoCadastrarModal.innerText = 'Cadastrar';

    footer.appendChild(botaoCadastrarModal);

    botaoCadastrarModal.onclick = getInputValues;
}

function getInputValues() {
    let nome = document.querySelector('#inputName')
    let username = document.querySelector('#inputUsername')

    let obj = {
        nome: nome.value,
        username: username.value
    };

    lista.push(obj);

    modal.remove();
    fundo.remove();

    tabela(lista);
}

function filterInput() {
    const inputFilter = document.createElement('input');
    inputFilter.id = 'inputFilter';

    inputFilter.placeholder = 'Pesquisar nome ou usuário...';

    document.body.appendChild(inputFilter);

    botaoFilter();
}

function botaoFilter() {
    const pesquisarFilter = document.createElement('button');
    const limparFilter = document.createElement('button');

    pesquisarFilter.innerText = 'Pesquisar';
    limparFilter.innerText = 'Limpar';

    document.body.appendChild(pesquisarFilter);
    document.body.appendChild(limparFilter);

    pesquisarFilter.onclick = searchFilter;
    limparFilter.onclick = cleanFilter;
}

function searchFilter() {
    let inputFilterValue = document.querySelector('#inputFilter').value;

    const listaFiltrada = lista.filter(function (element) {
        return element.nome.toLowerCase().indexOf(inputFilterValue.toLowerCase()) > -1 || element.username.toLowerCase().indexOf(inputFilterValue.toLowerCase()) > -1;
    });

    tabela(listaFiltrada)
}

function cleanFilter() {
    let inputFilterValue = document.querySelector('#inputFilter');
    inputFilterValue.value = '';

    tabela(lista);
}

filterInput()
tabela(lista);