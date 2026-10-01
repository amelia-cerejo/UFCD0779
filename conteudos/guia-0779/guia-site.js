(() => {
  const topicByPage = {
    "index.html": "conceitos-gerais",
    "caracteristicas.html": "conceitos-gerais",
    "ferramentas.html": "ferramentas",
    "apresentacoes.html": "apresentacoes-graficas",
    "master.html": "dispositivos-padrao",
    "texto.html": "texto",
    "impressao.html": "impressao",
    "desenho.html": "objetos-graficos",
    "efeitos.html": "efeitos-especiais",
    "difusao.html": "difusao"
  };
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.body.dataset.page = "conteudo-estatico";
  document.body.dataset.topic = topicByPage[currentPage] || "conceitos-gerais";

  const menuButton = document.createElement("button");
  menuButton.className = "menu-toggle";
  menuButton.type = "button";
  menuButton.setAttribute("aria-label", "Abrir menu");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.innerHTML = "<span></span><span></span><span></span>";

  const menu = document.createElement("aside");
  menu.className = "sidebar";
  menu.setAttribute("aria-label", "Menu principal");
  menu.innerHTML = `
    <a class="brand" href="../../index.html#inicio"><span class="brand-mark">0779</span><span><strong>Apresentação Gráfica</strong></span></a>
    <nav class="side-nav">
      <a href="../../index.html#inicio">Início</a>
      <a href="../../index.html#objetivos">Objetivos</a>
      <a href="../../index.html#metodologia">Metodologia</a>
      <button class="nav-parent" type="button" aria-expanded="true" aria-controls="submenu-conteudos">Conteúdos <span class="nav-parent-arrow" aria-hidden="true">▾</span></button>
      <div class="submenu open" id="submenu-conteudos"></div>
      <button class="nav-parent" type="button" aria-expanded="false" aria-controls="submenu-atividades">Atividades <span class="nav-parent-arrow" aria-hidden="true">▾</span></button>
      <div class="submenu activity-submenu" id="submenu-atividades"></div>
      <button class="nav-parent" type="button" aria-expanded="false" aria-controls="submenu-avaliacao">Avaliação <span class="nav-parent-arrow" aria-hidden="true">▾</span></button>
      <div class="submenu evaluation-submenu" id="submenu-avaliacao"></div>
      <button class="nav-parent" type="button" aria-expanded="false" aria-controls="submenu-recursos">Recursos <span class="nav-parent-arrow" aria-hidden="true">▾</span></button>
      <div class="submenu resource-submenu" id="submenu-recursos"></div>
    </nav>`;
  document.body.prepend(menuButton, menu);

  const main = document.querySelector("main");
  if (main) {
    main.classList.add("page-shell");
  }

  const floatingActions = document.createElement("div");
  floatingActions.className = "floating-actions";
  floatingActions.setAttribute("aria-label", "Ações rápidas");
  floatingActions.innerHTML = `
    <a href="../../index.html#inicio" aria-label="Página inicial" title="Página inicial"><span class="float-icon icon-home" aria-hidden="true"></span></a>
    <button type="button" data-action="top" aria-label="Voltar ao topo" title="Voltar ao topo"><span class="float-icon icon-top" aria-hidden="true"></span></button>
    <button type="button" data-action="print" aria-label="Imprimir" title="Imprimir"><span class="float-icon icon-print" aria-hidden="true"></span></button>`;
  document.body.append(floatingActions);
})();
