function mensagemErro(campo) {
    if (campo.validity.valueMissing) {
        return "Este campo é obrigatório.";
    }

    if (campo.validity.typeMismatch) {
        return "Digite uma informação em formato válido.";
    }

    if (campo.validity.patternMismatch) {
        switch (campo.id) {
            case "CPF":
                return "Digite o CPF no formato 000.000.000-00.";
            case "telefone":
                return "Digite o telefone no formato 00-00000-0000.";
            case "CEP":
                return "Digite o CEP no formato 00000-000.";
            case "cidade-estado":
                return "Digite a cidade seguida da UF. Exemplo: São Paulo/SP.";
            default:
                return "O formato informado é inválido.";
        }
    }

    return "Verifique a informação inserida.";
}

function validarFormulario(form) {
    const campos = form.elements;
    let formularioValido = true;

    for (const campo of campos) {
        if (!campo.matches("input, select, textarea") || campo.type === "submit") {
            continue;
        }

        let mensagem = document.getElementById(`${campo.id}-erro`);

        if (campo.checkValidity()) {
            campo.classList.remove("erro");
            campo.classList.add("valido");
            campo.setAttribute("aria-invalid", "false");

            if (mensagem) {
                mensagem.remove();
            }

            campo.removeAttribute("aria-describedby");
        } else {
            formularioValido = false;
            campo.classList.remove("valido");
            campo.classList.add("erro");
            campo.setAttribute("aria-invalid", "true");

            if (!mensagem) {
                mensagem = document.createElement("span");
                mensagem.id = `${campo.id}-erro`;
                mensagem.classList.add("mensagem-erro");
                mensagem.setAttribute("role", "alert");
                campo.insertAdjacentElement("afterend", mensagem);
            }

            mensagem.textContent = mensagemErro(campo);
            campo.setAttribute("aria-describedby", mensagem.id);
        }
    }

    return formularioValido;
}

function coletarDados(form) {
    const dados = {};

    for (const campo of form.elements) {
        if (!campo.matches("input, select, textarea") || campo.type === "submit") {
            continue;
        }

        if (campo.type === "checkbox") {
            dados[campo.name] = campo.checked;
        } else {
            dados[campo.name] = campo.value;
        }
    }

    return dados;
}

export {
    validarFormulario,
    coletarDados
};
