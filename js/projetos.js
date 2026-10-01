const projetos = [
    {
        categoria: "inclusao",
        titulo: "Educação para Todos",
        descricao: "Este projeto visa fornecer recursos educacionais e apoio a crianças e jovens em situação de vulnerabilidade, garantindo acesso à educação de qualidade."
    },
    {
        categoria: "sustentabilidade",
        titulo: "Saúde e Bem-Estar",
        descricao: "Nosso objetivo é promover a saúde e o bem-estar da comunidade, oferecendo serviços de saúde, campanhas de conscientização e atividades físicas para todos."
    },
    {
        categoria: "suporte",
        titulo: "Suporte à Comunidade",
        descricao: "Este projeto busca fornecer suporte e assistência a famílias em situação de vulnerabilidade, oferecendo alimentos, roupas e recursos essenciais para uma vida digna."
    }
];

const templates = projetos.map((projeto, index) => {
    const numero = index + 1;

    return `
        <section aria-labelledby="projeto-${numero}-titulo">
            <span class="badge badge-${projeto.categoria}">${projeto.categoria}</span>
            <h2 id="projeto-${numero}-titulo">${projeto.titulo}</h2>
            <p>${projeto.descricao}</p>
        </section>
    `;
}).join("");

const routes = {
    "#projetos": `
        <section aria-labelledby="titulo-projetos">
            <h1 id="titulo-projetos">Nossos projetos</h1>
            <p>Conheça as iniciativas desenvolvidas pela ONG.</p>
        </section>
        ${templates}
    `,

    "#projeto1": `
        <section aria-labelledby="projeto1-titulo">
            <span class="badge badge-inclusao">Inclusão</span>
            <h1 id="projeto1-titulo">Educação para Todos</h1>
            <p>Este projeto visa fornecer recursos educacionais e apoio a crianças e jovens em situação de vulnerabilidade, garantindo acesso à educação de qualidade.</p>
        </section>
    `,

    "#projeto2": `
        <section aria-labelledby="projeto2-titulo">
            <span class="badge badge-sustentabilidade">Sustentabilidade</span>
            <h1 id="projeto2-titulo">Saúde e Bem-Estar</h1>
            <p>Nosso objetivo é promover a saúde e o bem-estar da comunidade, oferecendo serviços de saúde, campanhas de conscientização e atividades físicas para todos.</p>
        </section>
    `,

    "#projeto3": `
        <section aria-labelledby="projeto3-titulo">
            <span class="badge badge-suporte">Suporte</span>
            <h1 id="projeto3-titulo">Suporte à Comunidade</h1>
            <p>Este projeto busca fornecer suporte e assistência a famílias em situação de vulnerabilidade, oferecendo alimentos, roupas e recursos essenciais para uma vida digna.</p>
        </section>
    `,

    "#suporte": `
        <section aria-labelledby="suporte-titulo">
            <h1 id="suporte-titulo">Suporte</h1>
            <h2>Como podemos ajudar?</h2>
            <p>Nossa equipe está disponível para orientar e auxiliar pessoas que tenham dúvidas sobre nossos projetos e serviços.</p>
            <p>Entre em contato conosco para obter mais informações ou solicitar atendimento.</p>
        </section>
    `,

    "#sobre": `
        <section aria-labelledby="sobre-titulo">
            <h1 id="sobre-titulo">Sobre nós</h1>
            <h2>Tecnologia para todos</h2>
            <p>Somos uma organização dedicada à inclusão social, à educação e ao bem-estar da comunidade.</p>
            <p>Nosso objetivo é utilizar a tecnologia como ferramenta de transformação, ampliando o acesso à informação, à educação e a oportunidades.</p>
        </section>
    `
};

export { routes };
