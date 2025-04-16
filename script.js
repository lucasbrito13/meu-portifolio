const projetos = [
    {
        nome: "Pokedex",
        link: "https://lucasbrito13.github.io/projeto-pokedex/",
        descricao: "Repositório do projeto 'Pokedex', desenvolvido no bootcamp Coding The Future Banco PAN - Desenvolvimento Frontend com Angular da DIO. Utiliza JavaScript e a PokeAPI para exibir informações detalhadas de todos os Pokémon de forma dinâmica e interativa."
    },
    {
        nome: "Redes Sociais",
        link: "https://lucasbrito13.github.io/projeto-social/",
        descricao: "Projeto feito apenas com HTML5, demonstrando o uso das tags img e links, com layout adaptado para mostrar como minhas redes sociais apareceriam na tela de um celular."
    },
    {
        nome: "Tela de Login",
        link: "https://lucasbrito13.github.io/projeto-login/",
        descricao: "Projeto de tela de login responsiva e moderna, desenvolvido com HTML5 e CSS3, oferecendo uma interface limpa e adaptável a diferentes tamanhos de tela."
    },
    {
        nome: "Memory Game",
        link: "https://lucasbrito13.github.io/projeto-memoria/",
        descricao: "Memory Game desenvolvido com JavaScript, utilizando cache para salvar o nome do usuário e registrar o tempo final de jogo. Ao final, uma mensagem personalizada é exibida com o nome e o tempo total para completar o jogo"
    },
    {
        nome: "Snake Game",
        link: "https://lucasbrito13.github.io/projeto-snake/",
        descricao: "Jogo da cobrinha (Snake) desenvolvido com HTML, CSS e JavaScript, oferecendo uma experiência clássica e interativa com controles simples e design funcional."
    },
    {
        nome: "Pizzaria",
        link: "https://lucasbrito13.github.io/projeto-pizza/",
        descricao: "Landing page responsiva para uma pizzaria, criada com HTML, CSS e JavaScript, com design atrativo e funcionalidade para destacar o cardápio e facilitar o contato com os clientes."
    },
    {
        nome: "Entre em contato",
        link: "https://lucasbrito13.github.io/projeto-contatos/",
        descricao: "Página de contato simples para uma empresa fictícia, desenvolvida com HTML, CSS e JavaScript. Permite que os usuários enviem mensagens de forma intuitiva, com design responsivo e interação básica através de validação de formulário."
    },
    {
        nome: "Cálculo de Gasto por Viagem",
        link: "https://lucasbrito13.github.io/Calculo-de-gasto-por-viagem/",
        descricao: "Programa simples para calcular o valor gasto com combustível em uma viagem, considerando distância, consumo do veículo e preço do combustível."
    },
    {
        nome: "Para Yasmin.2",
        link: "https://lucasbrito13.github.io/toYasmin2/",
        descricao: "Projeto interativo utilizando a biblioteca SwiperJS, permitindo a criação de carrosséis de imagens e conteúdo dinâmico com transições suaves e personalizáveis."
    },
  ];
  
  const container = document.getElementById("projects-container");
  
  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.className = "project";
    card.innerHTML = `
      <iframe src="${projeto.link}"></iframe>
      <h3>${projeto.nome}</h3>
      <p class="descricao">${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;
    container.appendChild(card);
  });
  