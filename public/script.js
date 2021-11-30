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
    { nome: "Otavio Matheus Neves", username: "otavionvs" }
];

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

    nameHeader.innerText = "Nome Completo";
    usernameHeader.innerText = "Usuário"
    button.innerText = "Github";

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
        const divBotaoRedirecionamento = document.createElement("td");

        colunaName.innerText = e.nome;
        colunaUsername.innerText = e.username;

        tabela.appendChild(linha);
        linha.appendChild(colunaName);
        linha.appendChild(colunaUsername);
        linha.appendChild(divBotaoRedirecionamento);
        divBotaoRedirecionamento.appendChild(criarBotao(e.username));
    });    

    botaoCadastro()
}

function criarBotao(username) {
    const botao = document.createElement("button")
    const link = document.createElement('a');

    botao.className = 'botaoRedirecionamento'

    link.innerText = 'Repositório'
    link.target = '_blank'
    link.href = './userPage/index.html?' + username

    botao.appendChild(link);

    return botao;
}

function botaoCadastro() {
    const divCadastrar = document.createElement('div');
    const button = document.createElement('button');

    button.id = 'botaoAtual';
    divCadastrar.id = 'divCadastrar';

    document.body.appendChild(divCadastrar);
    divCadastrar.appendChild(button);
    button.innerText = "Cadastrar pessoa"

    button.onclick = criarModal;
}

function criarModal() {
    let modalAtual = document.querySelector('#modal');
    let divCadastrar = document.querySelector('#divCadastrar');

    if (modalAtual) {
        modalAtual.remove();
    }
    
    let modal = document.createElement('div');

    modal.id = 'modal';

    divCadastrar.appendChild(modal);

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

    headerConteudoModal(header);
    inputModal(main);
    botaoModal(footer);
}

function headerConteudoModal(header) {
    const title = document.createElement('h3');

    title.innerText = 'Complete os campos:';
    title.style.margin = '0'

    header.appendChild(title);
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
    const botaoCancelarModal = document.createElement('button');

    botaoCancelarModal.innerText = 'Cancelar';
    botaoCadastrarModal.innerText = 'Cadastrar';

    botaoCadastrarModal.id = 'botaoCadastrarModal';
    botaoCancelarModal.id = 'botaoCancelarModal';

    botaoCadastrarModal.style.backgroundColor = 'aliceblue';
    botaoCancelarModal.style.backgroundColor = 'rgb(212, 113, 113)';

    footer.appendChild(botaoCadastrarModal);
    footer.appendChild(botaoCancelarModal);

    botaoCadastrarModal.onclick = getInputValues;
    botaoCancelarModal.onclick = cancelModal;
}

function getInputValues() {
    let nome = document.querySelector('#inputName');
    let username = document.querySelector('#inputUsername');

    if (nome.value == '' || username.value == '') {
        alertModal(1);
        return;
    }

    let values = {
        nome: nome.value,
        username: username.value
    };

    lista.push(values);

    modal.remove();

    alertModal(2);
    tabela(lista);
}

function cancelModal() {
    let modal = document.querySelector("#modal");
    let nome = document.querySelector('#inputName');
    let username = document.querySelector('#inputUsername');

    nome.value = '';
    username.value = '';
    
    modal.remove();
}

function alertModal(codigo) {
    const alert = document.createElement('div');
    alert.className = 'alert';

    if (codigo == 1) {
        document.body.appendChild(alert);
        alert.innerText = 'Todos os campos devem estar preenchidos!';
        alert.style.backgroundColor = 'red'
        alert.style.border = '2px solid rgb(141, 15, 15)';
    } else {
        document.body.appendChild(alert);
        alert.style.backgroundColor = 'rgb(20, 161, 20)';
        alert.style.border = '2px solid green';
        alert.innerText = 'Cadastrado!'
    }

    setTimeout(function () { document.body.removeChild(alert) }, 3000);  
}

function filterDiv() {
    const filterDiv = document.createElement("div");

    filterDiv.id = "filterDiv";

    document.body.appendChild(filterDiv)

    filterDiv.appendChild(filterInput());
    filterDiv.appendChild(botaoFilter());
}

function filterInput() {
    const inputFilter = document.createElement('input');
    inputFilter.id = 'inputFilter';

    inputFilter.placeholder = 'Pesquisar nome ou usuário...';

    return inputFilter;
}

function botaoFilter() {
    const divBotaoFilter = document.createElement('div');
    const pesquisarFilter = document.createElement('button');
    const limparFilter = document.createElement('button');

    divBotaoFilter.id = 'divBotaoFilter'
    pesquisarFilter.id = "pesquisarFilter";
    limparFilter.id = "limparFilter";

    pesquisarFilter.innerText = 'Pesquisar';
    limparFilter.innerText = 'Limpar';

    pesquisarFilter.style.backgroundColor = 'rgb(59, 59, 221)';
    limparFilter.style.backgroundColor = 'rgb(190, 64, 64)';

    divBotaoFilter.appendChild(pesquisarFilter);
    divBotaoFilter.appendChild(limparFilter);

    pesquisarFilter.onclick = searchFilter;
    limparFilter.onclick = cleanFilter;

    return divBotaoFilter;
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

filterDiv();
tabela(lista);