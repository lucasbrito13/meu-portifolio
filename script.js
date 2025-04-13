document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
      {
        nome: "Projeto Contatos",
        url: "https://lucasbrito13.github.io/projeto-contatos/"
      },
      {
        nome: "Projeto Pizza",
        url: "https://lucasbrito13.github.io/projeto-pizza/"
      },
      {
        nome: "toYasmin2",
        url: "https://lucasbrito13.github.io/toYasmin2/"
      },
      {
        nome: "Cálculo de Gasto por Viagem",
        url: "https://lucasbrito13.github.io/Calculo-de-gasto-por-viagem/"
      }
    ];
  
    const galeria = document.getElementById("galeria");
  
    projetos.forEach(proj => {
      // Criar o container para o nome do projeto e o iframe
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("project-container");
  
      // Criar o nome do projeto
      const projectName = document.createElement("h3");
      projectName.textContent = proj.nome;
      projectContainer.appendChild(projectName);
  
      // Criar o iframe do projeto
      const iframe = document.createElement("iframe");
      iframe.src = proj.url;
      iframe.title = proj.nome;
      iframe.loading = "lazy";
      projectContainer.appendChild(iframe);
  
      // Adicionar o projeto na galeria
      galeria.appendChild(projectContainer);
    });
  });