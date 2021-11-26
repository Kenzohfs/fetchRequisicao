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

function tabela() {
    let tabelaAtual = document.querySelector('table');
    
    if (tabelaAtual) {
        tabelaAtual.remove();
    }

    const tabela = document.createElement("table");

    document.body.appendChild(tabela);

    headerTabela(tabela);
}

function headerTabela(tabela) {
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

    colocarRegistors(tabela);
}

function colocarRegistors(tabela) {
    lista.forEach(function (e) {
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

tabela();

function botaoCadastro() {
    const button = document.createElement('button');

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

let inputName 
let inputUsername 


function inputModal(main) {
    inputName = document.createElement('input');
    inputUsername = document.createElement('input');

    inputName.id = 'inputName'
    inputName.id = 'inputUsername'

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
    let obj = {
        nome: inputName.value,
        username: inputUsername.value
    };

    lista.push(obj);

    modal.remove();
    fundo.remove();

    tabela();
}