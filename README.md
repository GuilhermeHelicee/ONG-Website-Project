# Projeto ONG

Site institucional de uma organização não governamental fictícia, desenvolvido como projeto acadêmico com foco em inclusão, acessibilidade, sustentabilidade e boas práticas de desenvolvimento front-end.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- AOS para animações visuais
- Git/GitHub para versionamento

## HTML — Estrutura semântica

### 1. Estrutura semântica
As páginas utilizam elementos semânticos do HTML5, como `header`, `nav`, `main`, `section`, `aside` e `footer`, facilitando a organização do conteúdo e sua interpretação por tecnologias assistivas.

### 2. Navegação e formulários
A navegação foi estruturada com links semânticos e menus organizados. O formulário de cadastro utiliza `fieldset`, `legend` e `label` associados aos respectivos campos.

### 3. Acessibilidade no HTML
Foram aplicadas práticas como hierarquia adequada de títulos, textos alternativos para imagens, link de salto para o conteúdo principal e atributos de acessibilidade nos elementos interativos.

## CSS — Estilo e responsividade

### 4. Design System e identidade visual
As cores, incluindo azul, amarelo, verde e vermelho, foram organizadas por meio de variáveis CSS. A paleta foi validada durante o desenvolvimento considerando contraste e legibilidade.

### 5. Layout e responsividade
O layout utiliza Grid, Flexbox e Media Queries seguindo a abordagem Desktop-first adotada durante o projeto, com adaptações para dispositivos menores.

### 6. Menu e componentes responsivos
O menu mobile utiliza navegação lateral, overlay e estados de interação. Foram adicionados indicadores de foco visíveis e suporte a navegação por teclado.

## JavaScript — Interatividade

### 7. Navegação SPA
A aplicação utiliza JavaScript para carregar o conteúdo principal dinamicamente, evitando recarregamentos completos durante a navegação. A History API é utilizada para manter o histórico das rotas.

### 8. Rotas e renderização dinâmica
Os projetos são organizados em arrays de objetos e renderizados com `map()`, template literals e `join()`. Rotas com hash permitem acessar projetos, suporte e informações sobre a ONG.

### 9. Interações e funcionalidades
O JavaScript controla o menu mobile, navegação por teclado, validação do formulário, mensagens de erro acessíveis e armazenamento local dos dados preenchidos.

## Acessibilidade

Foram realizadas melhorias relacionadas às diretrizes WCAG, incluindo:

- landmarks semânticos;
- hierarquia de títulos;
- textos alternativos;
- foco visível com `:focus-visible`;
- navegação por teclado;
- suporte à tecla `Esc` para fechamento do menu;
- `aria-expanded` e `aria-controls` no menu mobile;
- `aria-invalid` e `aria-describedby` na validação do formulário;
- respeito à preferência de redução de movimento;
- revisão das combinações de cores e contraste.

## Execução local

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no VS Code.
3. Execute o projeto utilizando um servidor local, como o Live Server.
4. Abra `HTMLs/index.html` pelo servidor local.

O uso de um servidor local é recomendado porque a navegação SPA utiliza `fetch()` para carregar os documentos HTML.

## Versionamento

O projeto segue uma organização baseada em GitFlow, com separação entre desenvolvimento, funcionalidades e versões estáveis. Os commits seguem a convenção de mensagens semânticas, como `feat`, `fix` e `docs`.

## Deploy

A aplicação é adequada para hospedagem estática, como GitHub Pages, por utilizar HTML, CSS e JavaScript no lado do cliente e não depender de servidor ou banco de dados para seu funcionamento principal.

## Status

Projeto em fase final de ajustes de acessibilidade, otimização e versionamento.
