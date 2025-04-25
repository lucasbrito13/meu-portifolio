
const projetos = [
    {
      nome: "Pokedex",
      link: "https://lucasbrito13.github.io/projeto-pokedex/",
      descricao: "Desenvolvido no bootcamp Coding The Future Banco PAN utilizando JavaScript e PokeAPI para exibir informações detalhadas de todos os Pokémon de forma dinâmica e interativa.",
      destaque: "Destaques: Integração com API externa (PokeAPI), manipulação de dados JSON, exibição interativa dos dados utilizando JavaScript, responsividade e design adaptável.",
      tecnologias: "Tecnologias: JavaScript, API, HTML5, CSS3"
        
    },
    {
      nome: "Redes Sociais",
      link: "https://lucasbrito13.github.io/projeto-social/",
      descricao: "Projeto feito apenas com HTML5, demonstrando o uso das tags img e links, com layout adaptado para mostrar como minhas redes sociais apareceriam na tela de um celular.",
      destaque: "Destaques: Design adaptável para diferentes dispositivos, uso de tags img e link para criação de layout mobile.",
      tecnologias: "Tecnologias: HTML5, CSS3"
    },
    {
      nome: "Tela de Login",
      link: "https://lucasbrito13.github.io/projeto-login/",
      descricao: "Projeto de tela de login responsiva e moderna, desenvolvido com HTML5 e CSS3, oferecendo uma interface limpa e adaptável a diferentes tamanhos de tela.",
      destaque: "Destaques: Validação de campos, animações suaves em CSS, design responsivo.",
      tecnologias: "Tecnologias: HTML5, CSS3, JavaScript"
    },
    {
      nome: "Memory Game",
      link: "https://lucasbrito13.github.io/projeto-memoria/",
      descricao: "ogo de memória desenvolvido com JavaScript, utilizando localStorage para salvar o nome do usuário e registrar o tempo final do jogo. Ao final, uma mensagem personalizada é exibida com o nome e o tempo total que levou para completar o jogo",
      destaque: "Destaques: Manipulação do DOM, armazenamento de dados no localStorage, interatividade personalizada com o usuário.",
      tecnologias: "Tecnologias: JavaScript, HTML5, CSS3"
    },
    {
      nome: "Pizzaria",
      link: "https://lucasbrito13.github.io/projeto-pizza/",
      descricao: "Landing page responsiva para uma pizzaria, criada com HTML, CSS e JavaScript, com design atrativo e funcionalidade para destacar o cardápio e facilitar o contato com os clientes.",
      destaque: "Destaques: Design atrativo, funcionalidade para destacar o cardápio, área de contatos.",
      tecnologias: "Tecnologias: JavaScript, API, HTML5, CSS3"
    },
    {
      nome: "Entre em contato",
      link: "https://lucasbrito13.github.io/projeto-contatos/",
      descricao: "Página de contato simples para uma empresa fictícia, desenvolvida com HTML, CSS e JavaScript. Permite que os usuários enviem mensagens de forma intuitiva, com design responsivo e interação básica através de validação de formulário.",
      destaque: "Destaques: Validação de formulário, design responsivo, interação básica através de JavaScript.",
      tecnologias: "Tecnologias: HTML5, CSS3, JavaScript"
    },
    {
      nome: "Cálculo de Gasto por Viagem",
      link: "https://lucasbrito13.github.io/Calculo-de-gasto-por-viagem/",
      descricao: "Programa simples para calcular o valor gasto com combustível em uma viagem, considerando distância, consumo do veículo e preço do combustível.",
      destaque: "Destaques: Cálculos dinâmicos com JavaScript, interface simples e intuitiva.",
      tecnologias: "Tecnologias: JavaScript, HTML5, CSS3"
    },
    {
      nome: "Para Yasmin.2",
      link: "https://lucasbrito13.github.io/toYasmin2/",
      descricao: "Projeto interativo utilizando a biblioteca SwiperJS, permitindo a criação de carrosséis de imagens e conteúdo dinâmico com transições suaves e personalizáveis.",
      destaque: "Destaques: Criação de carrosséis interativos com transições suaves, personalização de conteúdo dinâmico.",
      tecnologias: "Tecnologias: SwiperJS, JavaScript, HTML5, CSS3"
    },
  ];
  
  const container = document.getElementById("projects-container");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("project");

  card.innerHTML = `
    <iframe src="${projeto.link}"></iframe>
    <h3>${projeto.nome}</h3>
    <div class="descricao">
      <p>${projeto.descricao}</p>
      <p>${projeto.destaque}</p>
      <p>${projeto.tecnologias}</p>
    </div>
    <a href="${projeto.link}" target="_blank">Ver Projeto</a>
  `;

  container.appendChild(card);
});