import { navigate, closeMenu } from "./navigation.js";

import {
    validarFormulario,
    coletarDados
} from "./form.js";

import {
    salvarCadastro
} from "./storage.js";

// Inicialização opcional das animações.
if (window.AOS) {
    window.AOS.init({
        duration: 800,
        once: true
    });
}

// Navegação SPA.
document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (!link || link.target === "_blank") {
        return;
    }

    const href = link.getAttribute("href");

    if (!href || link.classList.contains("skip-link") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
    }

    event.preventDefault();
    navigate(href);
});

// Controle acessível do menu mobile.
const menuButton = document.querySelector("#menu-toggle");
const overlay = document.querySelector(".overlay");

function openMenu() {
    document.body.classList.add("menu-open");

    menuButton?.setAttribute("aria-expanded", "true");
    menuButton?.setAttribute("aria-label", "Fechar menu de navegação");

    const firstLink = document.querySelector("#main-nav a");
    firstLink?.focus();
}

menuButton?.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open");

    if (isOpen) {
        closeMenu();
        menuButton.focus();
    } else {
        openMenu();
    }
});

overlay?.addEventListener("click", () => {
    closeMenu();
    menuButton?.focus();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
        closeMenu();
        menuButton?.focus();
    }
});

// Evento de submit do formulário.
document.addEventListener("submit", (event) => {
    const form = event.target;

    if (form.id !== "cadastro-form") {
        return;
    }

    event.preventDefault();

    const formularioValido = validarFormulario(form);

    if (!formularioValido) {
        const primeiroErro = form.querySelector(".erro");
        primeiroErro?.focus();
        return;
    }

    const dados = coletarDados(form);
    salvarCadastro(dados);
});

function carregarRotaAtual() {
    const rotaAtual = window.location.hash || window.location.pathname.split("/").pop();

    if (rotaAtual) {
        navigate(rotaAtual, false);
    }
}

window.addEventListener("popstate", carregarRotaAtual);
window.addEventListener("hashchange", carregarRotaAtual);

carregarRotaAtual();
