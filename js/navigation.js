import { routes } from "./projetos.js";
import { restaurarCadastro } from "./storage.js";

const app = document.querySelector("#app");

function refreshAnimations() {
    if (window.AOS) {
        window.AOS.refreshHard();
    }
}

function closeMenu() {
    document.body.classList.remove("menu-open");

    const menuButton = document.querySelector("#menu-toggle");
    if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu de navegação");
    }
}

function renderContent(content) {
    if (!app) {
        return;
    }

    app.innerHTML = content;

    const form = app.querySelector("#cadastro-form");
    if (form) {
        restaurarCadastro(form);
    }

    refreshAnimations();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

async function navigate(url, addToHistory = true) {
    if (!app || !url) {
        return;
    }

    if (url.startsWith("#")) {
        const content = routes[url];

        if (!content) {
            console.error("Rota não encontrada:", url);
            return;
        }

        renderContent(content);

        if (addToHistory) {
            history.pushState({}, "", url);
        }

        closeMenu();
        return;
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Página não encontrada");
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const content = doc.querySelector("main");

        if (!content) {
            throw new Error("Conteúdo principal não encontrado");
        }

        renderContent(content.innerHTML);

        if (addToHistory) {
            history.pushState({}, "", url);
        }

        closeMenu();
    } catch (error) {
        console.error(error);
    }
}

export { navigate, closeMenu };
