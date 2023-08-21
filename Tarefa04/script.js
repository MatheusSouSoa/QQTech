const vinhos = [
    {
        id: "t",
        name: "Vinho Tinto",
        qtd: 0,
    },
    {
        id: "b",
        name: "Vinho Branco",
        qtd: 0,
    },
    {
        id: "r",
        name: "Vinho Rose",
        qtd: 0,
    },
];

let total = 0

function loadData() {
    const tr = document.querySelector("#vinhosTr")

    vinhos.forEach((vinho) => {
        tr.innerHTML += `
        <tr>
            <td>${vinho.name}</td>
            <td id="qtd${vinho.id.toUpperCase()}">${vinho.qtd}</td>
            <td class="actions">
                <div class="button" id="soma${vinho.id.toUpperCase()}" onclick="cadastrarVinho('${vinho.id}')">+</div>
                <div class="button" id="sub${vinho.id.toUpperCase()}" onclick="subtrairVinho('${vinho.id}')">-</div>
            </td>
        </tr>
        `;
    })
}

function cadastrarVinho(id) {
    let entrada = document.getElementById("entrada").value.toLowerCase();

    if(entrada){
        if(entrada == "f"){
            calcular(entrada)
        }
        else {
            aumentarVinho(entrada)
        }
    } 
    else if(id){
        aumentarVinho(id)
    }
    else {
        document.querySelector("#entrada").placeholder = "Informe um vinho"
    }
    document.querySelector("#entrada").value = "";
    document.querySelector("#entrada").focus();
}

function aumentarVinho (parametro) {
    let vinhoSelecionado = vinhos.find(
        (vinho) => vinho.id == parametro
    );

    if(!vinhoSelecionado){
        document.querySelector("#entrada").placeholder = "Vinho invalido"
        return
    }

    vinhoSelecionado.qtd++;

    let vinhoHTML = document.querySelector(
        `#qtd${vinhoSelecionado.id.toUpperCase()}`
    );

    total++

    vinhoHTML.textContent = vinhoSelecionado.qtd;
}

function subtrairVinho (parametro) {
    let vinhoSelecionado = vinhos.find(
        (vinho) => vinho.id == parametro
    );

    if(vinhoSelecionado.qtd > 0)
        vinhoSelecionado.qtd--;
    
    let vinhoHTML = document.querySelector(
        `#qtd${vinhoSelecionado.id.toUpperCase()}`
    );

    vinhoHTML.textContent = vinhoSelecionado.qtd;
}

function calcular() {

    let resposta = document.getElementById("img");

    if(total > 0) {
        resposta.innerHTML = ""
        vinhos.forEach(vinho => {
            let porcentagem = (vinho.qtd / total) * 100
            resposta.innerHTML += `<p class="porcentagens">Porcentagem de ${vinho.name}: ${porcentagem.toFixed(2)}%</p>`
        });
    }
}

loadData()