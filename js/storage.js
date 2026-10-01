function salvarCadastro(dados) {

    localStorage.setItem(
        "cadastro",
        JSON.stringify(dados)
    );

    console.log("Dados salvos:", dados);
}


function restaurarCadastro(form) {

    if (!form) {
        return;
    }

    const dadosSalvos = localStorage.getItem("cadastro");

    if (!dadosSalvos) {
        return;
    }

    const dados = JSON.parse(dadosSalvos);

    for (const campo of form.elements) {

        if (!campo.matches("input, select, textarea")) {
            continue;
        }

        if (!campo.name) {
            continue;
        }

        if (campo.type === "submit") {
            continue;
        }

        if (campo.type === "checkbox") {

            campo.checked = dados[campo.name] === true;

        } else if (dados[campo.name] !== undefined) {

            campo.value = dados[campo.name];
        }
    }

    console.log("Dados restaurados:", dados);
}


export {
    salvarCadastro,
    restaurarCadastro
};