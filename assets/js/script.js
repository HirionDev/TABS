// Selecionar todos os botões de aba
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => tabClicked(tab));
});

function tabClicked(selectedTab) {
  const tabContainer = selectedTab.closest(".container");

  // Remover a classe 'active' de todos os botões de aba no mesmo contêiner
  const tabsInContainer = tabContainer.querySelectorAll(".tab-btn");
  tabsInContainer.forEach((tab) => tab.classList.remove("active"));

  // Adicionar a classe 'active' ao botão de aba clicado
  selectedTab.classList.add("active");

  // Remover a classe 'show' de todos os conteúdos no mesmo contêiner
  const contentsInContainer = tabContainer.querySelectorAll(".content");
  contentsInContainer.forEach((content) => content.classList.remove("show"));

  // Obter o ID do conteúdo correspondente ao botão de aba clicado
  const contentId = selectedTab.getAttribute("content-id");
  const content = tabContainer.querySelector(`#${contentId}`);

  // Adicionar a classe 'show' ao conteúdo correspondente
  content.classList.add("show");
}

// Ativar a aba inicialmente ativa em cada contêiner
const initialActiveTabs = document.querySelectorAll(".tab-btn.active");
initialActiveTabs.forEach((tab) => tabClicked(tab));
