const UFCD = {
  code: "0779",
  title: "Utilitário de apresentação gráfica",
  hours: "25 horas",
  action: "26109",
  driveFolder: ""
};

const pendingLinks = {
  appsScriptUrl: window.UFCD0779_PENDING_LINKS?.appsScriptUrl || "",
  spreadsheetId: window.UFCD0779_PENDING_LINKS?.spreadsheetId || "",
  mentimeterEmbedUrl: window.UFCD0779_PENDING_LINKS?.mentimeterEmbedUrl || "https://www.mentimeter.com/app/presentation/al8dp9dgyeb4gv33qy4c6tezkvgoq63r/embed",
  mentimeterParticipationUrl: window.UFCD0779_PENDING_LINKS?.mentimeterUrl || "https://www.menti.com/al9tm8ir6gkm",
  glossaryUrl: /^https?:\/\//i.test(window.UFCD0779_PENDING_LINKS?.glossaryUrl || "") ? window.UFCD0779_PENDING_LINKS.glossaryUrl : "",
  individualTaskForumUrls: Array.isArray(window.UFCD0779_PENDING_LINKS?.individualTaskForumUrls)
    ? window.UFCD0779_PENDING_LINKS.individualTaskForumUrls.filter((url) => /^https?:\/\//i.test(url))
    : [],
  manualPdf: window.UFCD0779_PENDING_LINKS?.manualPdf || ""
};

const topics = [
  { id: "conceitos-gerais", title: "Conceitos gerais", cardTitle: "Conceitos gerais", intro: "Características, ferramentas e finalidade das apresentações gráficas.", url: "conteudos/guia-0779/index.html" },
  { id: "ferramentas", title: "Ferramentas", cardTitle: "Ferramentas", intro: "Conhecer o ambiente de trabalho e as ferramentas do apresentador gráfico.", url: "conteudos/guia-0779/ferramentas.html" },
  { id: "apresentacoes-graficas", title: "Apresentações gráficas", cardTitle: "Apresentações gráficas", intro: "Planear a mensagem, o público e a sequência de diapositivos.", url: "conteudos/guia-0779/apresentacoes.html" },
  { id: "dispositivos-padrao", title: "Dispositivos padrão (master)", menuTitle: "Padrão (master)", cardTitle: "Dispositivos padrão (master)", intro: "Criar um modelo coerente para a apresentação.", url: "conteudos/guia-0779/master.html" },
  { id: "texto", title: "Texto", cardTitle: "Inserção e formatação de texto", intro: "Organizar e formatar texto legível nos diapositivos.", url: "conteudos/guia-0779/texto.html" },
  { id: "impressao", title: "Impressão", cardTitle: "Opções de impressão", intro: "Preparar a apresentação e os folhetos para impressão ou PDF.", url: "conteudos/guia-0779/impressao.html" },
  { id: "objetos-graficos", title: "Texto, desenho e gráficos", menuTitle: "Desenho e gráficos", cardTitle: "Ferramentas de texto, desenho e gráficos", intro: "Inserir e organizar formas, imagens e gráficos para comunicar ideias.", url: "conteudos/guia-0779/desenho.html" },
  { id: "efeitos-especiais", title: "Efeitos especiais", cardTitle: "Efeitos especiais", intro: "Animação de textos e objetos, associação de sons e transições.", url: "conteudos/guia-0779/efeitos.html" },
  { id: "difusao", title: "Difusão de dispositivos", cardTitle: "Difusão de dispositivos", intro: "Apresentar, partilhar e difundir os diapositivos.", url: "conteudos/guia-0779/difusao.html" }
];

const contentLessons = {
  "ambiente-trabalho": {
    summary: "A folha de cálculo organiza dados em células e permite calcular, analisar e apresentar informação. Nesta etapa, o objetivo é dominar o ambiente de trabalho e introduzir dados de forma correta.",
    sections: [
      { title: "Livro, folhas e células", text: "Um ficheiro de Excel é um livro que pode conter várias folhas. Cada folha é organizada em linhas e colunas; a interseção forma uma célula identificada por um endereço, como B4.", points: ["Distinguir livro e folha.", "Identificar linhas, colunas, células e intervalos.", "Selecionar células adjacentes e não adjacentes."] },
      { title: "Introdução e edição de dados", text: "As células podem conter texto, números, datas, horas, percentagens e fórmulas. O tipo de dado influencia os cálculos e a apresentação.", points: ["Introduzir e corrigir dados.", "Usar preenchimento automático e séries.", "Evitar espaços ou símbolos que transformem números em texto."] },
      { title: "Organização do livro", text: "As folhas devem ter nomes claros e os ficheiros devem ser guardados na pasta e com a nomenclatura definidas.", points: ["Renomear, mover, copiar e eliminar folhas.", "Guardar regularmente.", "Confirmar a localização e o nome do ficheiro."] }
    ],
    practice: "Criar um livro, renomear folhas, introduzir diferentes tipos de dados, criar uma série e guardar o ficheiro com o nome indicado."
  },
  "formatacao-apresentacao": {
    summary: "A formatação deve tornar os dados mais claros sem alterar o seu valor. Uma folha profissional utiliza formatos consistentes e destaque apenas quando acrescenta significado.",
    sections: [
      { title: "Formatos numéricos", text: "O mesmo valor pode ser apresentado como número, moeda, percentagem, data ou hora. Alterar o formato não altera o valor armazenado.", points: ["Escolher o formato adequado ao conteúdo.", "Controlar casas decimais.", "Distinguir valor e apresentação."] },
      { title: "Alinhamento e aparência", text: "Tipo de letra, alinhamento, limites e preenchimento ajudam a distinguir títulos, cabeçalhos e dados.", points: ["Manter coerência visual.", "Garantir contraste e legibilidade.", "Evitar excesso de cores e efeitos."] },
      { title: "Formatação condicional", text: "A formatação condicional aplica formatos quando os dados cumprem regras definidas.", points: ["Criar regras simples.", "Rever o intervalo aplicado.", "Confirmar se o destaque ajuda a interpretar os dados."] }
    ],
    practice: "Formatar uma tabela com títulos, formatos numéricos e uma regra de formatação condicional."
  },
  "formulas-referencias": {
    summary: "As fórmulas começam por = e combinam valores, operadores e referências. As referências corretas permitem copiar fórmulas sem perder a lógica do cálculo.",
    sections: [
      { title: "Construção de fórmulas", text: "As fórmulas podem usar operadores aritméticos e parênteses. A prioridade das operações deve ser controlada para obter o resultado esperado.", points: ["Começar por =.", "Usar referências em vez de repetir valores.", "Testar a fórmula com dados conhecidos."] },
      { title: "Referências relativas, absolutas e mistas", text: "As referências relativas alteram-se quando a fórmula é copiada. As absolutas mantêm linha e coluna fixas; as mistas fixam apenas uma delas.", points: ["A1: relativa.", "$A$1: absoluta.", "$A1 ou A$1: mista."] },
      { title: "Erros e verificação", text: "Erros como #DIV/0!, #VALOR! ou #NOME? indicam problemas diferentes que devem ser analisados.", points: ["Ler a mensagem de erro.", "Confirmar referências e operadores.", "Comparar com um cálculo manual simples."] }
    ],
    practice: "Criar fórmulas, copiá-las e testar referências relativas, absolutas e mistas."
  },
  "funcoes-analise": {
    summary: "As funções simplificam cálculos e permitem resumir informação. A função deve ser escolhida de acordo com a pergunta que se pretende responder.",
    sections: [
      { title: "Funções de cálculo e resumo", text: "SOMA, MÉDIA, MÍNIMO e MÁXIMO permitem resumir conjuntos de valores.", points: ["Selecionar o intervalo correto.", "Interpretar o resultado.", "Verificar células vazias ou valores em texto."] },
      { title: "Contagem e decisão", text: "CONTAR e CONTAR.VAL distinguem diferentes tipos de conteúdo. A função SE devolve resultados diferentes consoante uma condição.", points: ["Definir a condição de forma clara.", "Usar texto entre aspas.", "Testar casos verdadeiros e falsos."] },
      { title: "Auditoria dos resultados", text: "Uma folha correta não depende apenas de fórmulas sem erros: os resultados têm de ser plausíveis e coerentes com os dados.", points: ["Comparar totais e subtotais.", "Procurar valores inesperados.", "Confirmar intervalos e critérios."] }
    ],
    practice: "Aplicar funções de soma, média, mínimo, máximo, contagem e decisão a um conjunto de dados."
  },
  "gestao-dados": {
    summary: "As listas bem organizadas permitem ordenar, filtrar, validar e representar dados de forma eficaz.",
    sections: [
      { title: "Listas, ordenação e filtros", text: "Uma lista deve ter cabeçalhos claros, uma linha por registo e uma coluna por campo. A ordenação reorganiza; o filtro mostra apenas os registos que cumprem critérios.", points: ["Evitar linhas e colunas vazias no interior da lista.", "Selecionar toda a tabela antes de ordenar.", "Remover filtros antes de validar a totalidade dos dados."] },
      { title: "Validação de dados", text: "A validação limita os valores permitidos e pode apresentar mensagens de entrada e alertas de erro.", points: ["Definir regras adequadas.", "Criar listas de opções quando fizer sentido.", "Testar entradas válidas e inválidas."] },
      { title: "Gráficos", text: "Os gráficos representam visualmente os dados e devem ser escolhidos de acordo com a comparação pretendida.", points: ["Selecionar apenas os dados necessários.", "Usar título e legendas claros.", "Evitar efeitos que dificultem a leitura."] }
    ],
    practice: "Organizar uma lista, ordenar e filtrar, aplicar validação e criar um gráfico adequado."
  },
  "impressao": {
    summary: "A configuração de página permite preparar a folha para impressão ou PDF, evitando cortes e páginas desnecessárias.",
    sections: [
      { title: "Área e disposição", text: "A área de impressão define o que será impresso. Orientação, margens e escala determinam a disposição na página.", points: ["Definir a área de impressão.", "Escolher Retrato ou Paisagem.", "Usar escala sem tornar o conteúdo ilegível."] },
      { title: "Cabeçalhos, rodapés e títulos", text: "Cabeçalhos e rodapés podem apresentar nome, data e número de página. Linhas ou colunas de títulos podem repetir-se em todas as páginas.", points: ["Inserir informação útil.", "Repetir cabeçalhos quando necessário.", "Confirmar que não existem páginas vazias."] },
      { title: "Pré-visualização", text: "A pré-visualização é obrigatória antes de imprimir ou exportar para PDF.", points: ["Percorrer todas as páginas.", "Verificar cortes e quebras.", "Confirmar legibilidade e sequência."] }
    ],
    practice: "Definir área de impressão, orientação, margens, escala, cabeçalho e rodapé; verificar todas as páginas."
  }
};


// Compatibilidade com as páginas HTML já existentes no site.
contentLessons["conceitos-gerais"] = contentLessons["ambiente-trabalho"];
contentLessons["ficheiros-folhas"] = contentLessons["ambiente-trabalho"];
contentLessons["celulas"] = contentLessons["ambiente-trabalho"];
contentLessons["formatacao-linhas-colunas"] = contentLessons["formatacao-apresentacao"];
contentLessons["formulas"] = contentLessons["formulas-referencias"];
contentLessons["funcoes"] = contentLessons["funcoes-analise"];
contentLessons["graficos"] = contentLessons["gestao-dados"];
contentLessons["listas-filtros"] = contentLessons["gestao-dados"];
contentLessons["desenho"] = {
  summary: "Os objetos gráficos podem apoiar a leitura e a comunicação dos dados quando são usados com moderação e intenção.",
  sections: [
    { title: "Inserir objetos", text: "É possível inserir formas, caixas de texto, imagens e ícones para complementar a informação apresentada na folha.", points: ["Escolher objetos com função clara.", "Evitar excesso de elementos decorativos.", "Manter consistência visual."] },
    { title: "Posicionar e dimensionar", text: "Os objetos devem ser redimensionados e posicionados sem esconder dados nem dificultar a utilização da folha.", points: ["Preservar proporções das imagens.", "Alinhar objetos relacionados.", "Confirmar a visualização e a impressão."] },
    { title: "Agrupar e organizar", text: "Objetos relacionados podem ser alinhados, distribuídos e agrupados para facilitar a movimentação e manter a composição estável.", points: ["Usar alinhamento e distribuição.", "Agrupar apenas elementos relacionados.", "Verificar a ordem dos objetos."] }
  ],
  practice: "Inserir uma forma, uma caixa de texto e uma imagem; alinhar os elementos, ajustar o tamanho e confirmar que não ocultam dados."
};

const contentMenuGroups = [
  {
    title: "Apresentador gráfico — conceitos gerais",
    theme: "representation",
    parentTopicId: "conceitos-gerais",
    children: [{ topicId: "ferramentas" }, { topicId: "apresentacoes-graficas" }]
  },
  {
    title: "Inserção e edição de documento modelo",
    theme: "representation",
    parentTopicId: "dispositivos-padrao",
    children: ["texto", "impressao", "objetos-graficos", "efeitos-especiais", "difusao"].map((topicId) => ({ topicId }))
  }
];

const DEFAULT_APPS_SCRIPT_WEB_APP_URL = "";
const DEFAULT_APPS_SCRIPT_SPREADSHEET_ID = "";
const APPS_SCRIPT_WEB_APP_URL = window.UFCD0779_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_WEB_APP_URL;
const APPS_SCRIPT_SPREADSHEET_ID = window.UFCD0779_SPREADSHEET_ID || DEFAULT_APPS_SCRIPT_SPREADSHEET_ID;

const activities = [
  { id: "controlo-teams", title: "Partilha de ecrã", menuTitle: "Partilha de ecrã", intro: "Tabela simples para acompanhar a participação prática nas sessões síncronas.", url: "atividades/controlo-teams.html" },
  { id: "mentimeter-inicial", title: "Mentimeter inicial", menuTitle: "Brainstorming", intro: "Participa na atividade introdutória sobre apresentações gráficas.", url: "atividades/mentimeter-inicial.html", focus: "Exploração inicial", duration: "", product: "Resposta registada no Mentimeter da UFCD 0779.", mentimeterUrl: pendingLinks.mentimeterEmbedUrl, participationUrl: pendingLinks.mentimeterParticipationUrl, qrCode: "assets/img/mentimeter_qr_code_0779.png", steps: [{ title: "Participar", text: "Abre a apresentação ou utiliza a ligação de participação e responde à pergunta apresentada no Mentimeter." }], evidence: ["Participação na atividade inicial"] },
  { id: "tarefas-grupo", title: "Glossário — Tarefas de Grupo", menuTitle: "Tarefas de Grupo", intro: "Glossário colaborativo de conceitos de apresentações gráficas, desenvolvido em cinco dias.", url: "atividades/tarefas-grupo.html", focus: "Glossário colaborativo", duration: "Cinco dias", product: "Termo, definição, finalidade e exemplo de utilização no PowerPoint.", steps: [{ title: "Identificar", text: "Consultar o conceito atribuído ao grupo em cada dia." }, { title: "Definir", text: "Escrever uma definição clara por palavras próprias." }, { title: "Exemplificar", text: "Indicar para que serve e apresentar um exemplo no PowerPoint." }, { title: "Publicar", text: "Rever e publicar a contribuição no Glossário do Moodle." }], evidence: ["Entrada no glossário", "Exemplo prático"] },
  { id: "tarefas-individuais", title: "Tarefas Individuais", intro: "Sete tarefas progressivas para criar apresentações e construir o e-portfólio da Ação 26109.", url: "atividades/tarefas-individuais.html", focus: "Apresentação gráfica e e-portfólio", duration: "Ao longo da UFCD", product: "Apresentações, evidências e reflexão organizadas no e-portfólio.", steps: [{ title: "Preparar", text: "Ler a tarefa e reunir as evidências na sua Drive." }, { title: "Criar", text: "Realizar o trabalho no PowerPoint e na aplicação do e-portfólio." }, { title: "Registar", text: "Publicar no fórum do Moodle apenas o registo pedido para cada TI." }, { title: "Rever", text: "Verificar ficheiros, ligações e partilha da pasta com a formadora." }], evidence: ["Apresentações PowerPoint", "E-portfólio", "Registos no fórum"] },
  { id: "projeto-final-apresentacao", title: "Projeto Final - Solução em Folha de Cálculo", menuTitle: "Projeto Final", intro: "Livro Excel funcional que integra organização, cálculos, análise, apresentação e preparação para impressão.", url: "atividades/projeto-final-apresentacao.html", focus: "Projeto individual", duration: "TI08 a TI12", product: "Livro Excel final, PDF, reflexão final e apresentação breve.", steps: [{ title: "Planear", text: "Escolher e estruturar o contexto do projeto." }, { title: "Construir", text: "Organizar dados e aplicar fórmulas, funções, formatação e análise." }, { title: "Rever", text: "Validar dados, cálculos, gráficos e impressão." }, { title: "Partilhar", text: "Guardar, apresentar e refletir sobre o resultado." }], evidence: ["XLSX final", "PDF final", "Reflexão final", "Apresentação individual"] },
];

const evaluations = [
  { id: "avaliacao-diagnostica", title: "Avaliação Diagnóstica", menuTitle: "Diagnóstica", intro: "Avaliação inicial dos conhecimentos sobre apresentações gráficas.", url: "avaliacoes/avaliacao-diagnostica.html", children: ["resultados-diagnostica"], embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0779/00-diagnostico.html", embedTitle: "Avaliação diagnóstica — UFCD 0779" },
  { id: "resultados-diagnostica", parentId: "avaliacao-diagnostica", title: "Resultados da Avaliação Diagnóstica", menuTitle: "Resultados", intro: "Leitura global das respostas recolhidas na avaliação diagnóstica.", url: "avaliacoes/resultados-diagnostica.html" },
  { id: "avaliacao-sumativa", title: "Avaliação Sumativa", menuTitle: "Sumativa", intro: "Avaliação final das aprendizagens da UFCD 0779.", url: "avaliacoes/avaliacao-sumativa.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0779/02-sumativa.html", embedTitle: "SUM_1" },
  { id: "autoavaliacao-final", title: "Autoavaliação Final", menuTitle: "Autoavaliação", intro: "Reflexão final sobre as competências desenvolvidas, comparável com a avaliação diagnóstica.", url: "avaliacoes/autoavaliacao-final.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0779/04-autoavaliacao-final.html", embedTitle: "AUTO_1" },
  { id: "avaliacao-entre-pares", title: "Avaliação Entre Pares", menuTitle: "Entre pares", intro: "Avaliação colaborativa da UFCD 0779.", url: "avaliacoes/avaliacao-entre-pares.html", embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-0779/03-entre-pares.html", embedTitle: "Avaliação colaborativa" },
  { id: "avaliacao-formacao", title: "Avaliação da Formação", menuTitle: "Formação", intro: "Feedback sobre a qualidade da formação.", url: "avaliacoes/avaliacao-formacao.html", embedUrl: "https://avaliacoes-formacao.netlify.app/avaliacao-formacao.html?codigo_ufcd=0779", embedTitle: "Avaliação da Qualidade da Formação" }
];

const legacyGroupTasks = [
  { title: "TG01 - Ambiente da folha de cálculo", topic: "Ambiente", url: "atividades/tarefas-grupo.html", intro: "Conceitos fundamentais do ambiente de trabalho.", words: [["Livro", "Grupo 1"], ["Folha", "Grupo 2"], ["Célula", "Grupo 3"], ["Intervalo", "Grupo 4"]] },
  { title: "TG02 - Introdução de dados", topic: "Dados", url: "atividades/tarefas-grupo.html", intro: "Tipos de dados e preenchimento.", words: [["Texto", "Grupo 1"], ["Número", "Grupo 2"], ["Data", "Grupo 3"], ["Série", "Grupo 4"]] },
  { title: "TG03 - Formatação", topic: "Formatação", url: "atividades/tarefas-grupo.html", intro: "Apresentação e leitura da informação.", words: [["Formato numérico", "Grupo 1"], ["Alinhamento", "Grupo 2"], ["Limite", "Grupo 3"], ["Preenchimento", "Grupo 4"]] },
  { title: "TG04 - Fórmulas", topic: "Fórmulas", url: "atividades/tarefas-grupo.html", intro: "Construção de cálculos.", words: [["Fórmula", "Grupo 1"], ["Operador", "Grupo 2"], ["Referência", "Grupo 3"], ["Precedência", "Grupo 4"]] },
  { title: "TG05 - Referências", topic: "Referências", url: "atividades/tarefas-grupo.html", intro: "Comportamento das referências ao copiar fórmulas.", words: [["Referência relativa", "Grupo 1"], ["Referência absoluta", "Grupo 2"], ["Referência mista", "Grupo 3"], ["Preenchimento automático", "Grupo 4"]] },
  { title: "TG06 - Funções", topic: "Funções", url: "atividades/tarefas-grupo.html", intro: "Funções de cálculo e resumo.", words: [["SOMA", "Grupo 1"], ["MÉDIA", "Grupo 2"], ["MÍNIMO", "Grupo 3"], ["MÁXIMO", "Grupo 4"]] },
  { title: "TG07 - Contagem e decisão", topic: "Análise", url: "atividades/tarefas-grupo.html", intro: "Funções de contagem e decisão.", words: [["CONTAR", "Grupo 1"], ["CONTAR.VAL", "Grupo 2"], ["SE", "Grupo 3"], ["Condição", "Grupo 4"]] },
  { title: "TG08 - Listas", topic: "Listas", url: "atividades/tarefas-grupo.html", intro: "Organização de dados em listas.", words: [["Registo", "Grupo 1"], ["Campo", "Grupo 2"], ["Cabeçalho", "Grupo 3"], ["Tabela", "Grupo 4"]] },
  { title: "TG09 - Ordenação e filtros", topic: "Gestão de dados", url: "atividades/tarefas-grupo.html", intro: "Seleção e reorganização da informação.", words: [["Ordenação", "Grupo 1"], ["Filtro", "Grupo 2"], ["Critério", "Grupo 3"], ["Filtro personalizado", "Grupo 4"]] },
  { title: "TG10 - Validação e gráficos", topic: "Análise visual", url: "atividades/tarefas-grupo.html", intro: "Controlo da introdução de dados e representação visual.", words: [["Validação de dados", "Grupo 1"], ["Lista pendente", "Grupo 2"], ["Gráfico", "Grupo 3"], ["Série de dados", "Grupo 4"]] },
  { title: "TG11 - Impressão", topic: "Impressão", url: "atividades/tarefas-grupo.html", intro: "Preparação da folha para impressão.", words: [["Área de impressão", "Grupo 1"], ["Escala", "Grupo 2"], ["Quebra de página", "Grupo 3"], ["Cabeçalho", "Grupo 4"]] },
  { title: "TG12 - Revisão entre pares", topic: "Qualidade", url: "atividades/tarefas-grupo.html", intro: "Revisão do projeto final de um colega.", words: [["Exatidão", "Grupo 1"], ["Consistência", "Grupo 2"], ["Legibilidade", "Grupo 3"], ["Verificação", "Grupo 4"]] }
];

const glossaryUrl = pendingLinks.glossaryUrl;
const individualTaskForumUrls = pendingLinks.individualTaskForumUrls;

const legacyIndividualTasks = [
  {
    "id": "tarefa-individual-1",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI1 - Criar e organizar um livro de Excel",
    "intro": "Criar um livro de Excel, organizar as folhas e aplicar procedimentos corretos de gravação e identificação.",
    "objective": "Criar um livro de Excel, organizar as folhas e aplicar procedimentos corretos de gravação e identificação.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro indicado e consultar o PDF da tarefa."
      },
      {
        "title": "Realizar",
        "text": "Abrir o Livro 1, organizar as folhas, alterar nomes e cores dos separadores e guardar a primeira versão."
      },
      {
        "title": "Verificar",
        "text": "Confirmar os dados, cálculos, resultados, apresentação e critérios indicados no PDF."
      },
      {
        "title": "Guardar",
        "text": "Guardar com o nome definido no enunciado, no computador e na pasta Tarefas individuais da Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI01.pdf",
    "workFiles": [
      {
        "number": "1",
        "title": "Livro 1 - Primeiros Passos",
        "expectedName": "UFCD0778_Livro1_Primeiros_Passos.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro1_Primeiros_Passos.xlsx",
        "available": true
      }
    ]
  },
  {
    "id": "tarefa-individual-2",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI2 - Introduzir, editar e preencher dados",
    "intro": "Introduzir e editar diferentes tipos de dados e utilizar preenchimento automático e séries.",
    "objective": "Introduzir e editar diferentes tipos de dados e utilizar preenchimento automático e séries.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro indicado e consultar o PDF da tarefa."
      },
      {
        "title": "Realizar",
        "text": "Abrir a versão concluída na TI01, criar uma nova cópia e realizar as propostas de introdução, edição e preenchimento de dados."
      },
      {
        "title": "Verificar",
        "text": "Confirmar os dados, cálculos, resultados, apresentação e critérios indicados no PDF."
      },
      {
        "title": "Guardar",
        "text": "Guardar com o nome definido no enunciado, no computador e na pasta Tarefas individuais da Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI02.pdf",
    "workFiles": [
      {
        "number": "1",
        "title": "Livro 1 - Primeiros Passos",
        "expectedName": "UFCD0778_Livro1_Primeiros_Passos.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro1_Primeiros_Passos.xlsx",
        "available": true
      }
    ]
  },
  {
    "id": "tarefa-individual-3",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI3 - Formatar células, linhas e colunas",
    "intro": "Aplicar formatos numéricos e visuais adequados e ajustar células, linhas e colunas.",
    "objective": "Aplicar formatos numéricos e visuais adequados e ajustar células, linhas e colunas.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro indicado e consultar o PDF da tarefa."
      },
      {
        "title": "Realizar",
        "text": "Abrir o Livro 2, aplicar os formatos indicados e guardar a primeira versão formatada."
      },
      {
        "title": "Verificar",
        "text": "Confirmar os dados, cálculos, resultados, apresentação e critérios indicados no PDF."
      },
      {
        "title": "Guardar",
        "text": "Guardar com o nome definido no enunciado, no computador e na pasta Tarefas individuais da Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI03.pdf",
    "workFiles": [
      {
        "number": "2",
        "title": "Livro 2 - Formatação e Apresentação",
        "expectedName": "UFCD0778_Livro2_Formatacao_Apresentacao.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro2_Formatacao_Apresentacao.xlsx",
        "available": true
      }
    ]
  },
  {
    "id": "tarefa-individual-4",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI4 - Organizar folhas e preparar para impressão",
    "intro": "Consolidar a apresentação do livro e preparar as folhas para impressão e exportação para PDF.",
    "objective": "Consolidar a apresentação do livro e preparar as folhas para impressão e exportação para PDF.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro indicado e consultar o PDF da tarefa."
      },
      {
        "title": "Realizar",
        "text": "Abrir a versão concluída na TI03, criar uma nova cópia, aplicar formatação condicional e configurar a impressão."
      },
      {
        "title": "Verificar",
        "text": "Confirmar os dados, cálculos, resultados, apresentação e critérios indicados no PDF."
      },
      {
        "title": "Guardar",
        "text": "Guardar com o nome definido no enunciado, no computador e na pasta Tarefas individuais da Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI04.pdf",
    "workFiles": [
      {
        "number": "2",
        "title": "Livro 2 - Formatação e Apresentação",
        "expectedName": "UFCD0778_Livro2_Formatacao_Apresentacao.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro2_Formatacao_Apresentacao.xlsx",
        "available": true
      }
    ]
  },
    {
    "id": "tarefa-individual-5",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI5 - Criar fórmulas e utilizar referências relativas",
    "intro": "Construir fórmulas corretas, compreender a ordem das operações e utilizar referências relativas em cálculos repetidos.",
    "objective": "Construir fórmulas corretas, compreender a ordem das operações e utilizar referências relativas em cálculos repetidos.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro-base Livro 3 — Fórmulas e referências e guardar uma cópia com o nome correto."
      },
      {
        "title": "Criar",
        "text": "Criar fórmulas com os operadores de adição, subtração, multiplicação, divisão e exponenciação, começando sempre pelo sinal de igual."
      },
      {
        "title": "Utilizar",
        "text": "Utilizar parênteses para controlar a ordem de cálculo."
      },
      {
        "title": "Construir",
        "text": "Construir os cálculos utilizando referências de células (não valores fixos)."
      },
      {
        "title": "Copiar",
        "text": "Copiar as fórmulas para linhas adjacentes e observar a alteração automática das referências relativas."
      },
      {
        "title": "Corrigir",
        "text": "Corrigir erros de introdução ou referências incorretas encontrados durante a verificação."
      },
      {
        "title": "Guardar",
        "text": "Guardar o livro no computador e na Google Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI05.pdf",
    "workFiles": [
      {
        "number": "3",
        "title": "Livro 3 - Fórmulas e Referências",
        "expectedName": "UFCD0778_Livro3_Formulas_Referencias.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro3_Formulas_Referencias.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Explicar, através de um exemplo da tarefa, o que acontece a uma referência relativa quando a fórmula é copiada."
  },
    {
    "id": "tarefa-individual-6",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI6 - Aplicar referências absolutas e mistas e corrigir erros",
    "intro": "Selecionar o tipo de referência adequado a cada cálculo e diagnosticar erros frequentes em fórmulas.",
    "objective": "Selecionar o tipo de referência adequado a cada cálculo e diagnosticar erros frequentes em fórmulas.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro concluído na TI5 e criar uma nova cópia com o nome correto."
      },
      {
        "title": "Completar",
        "text": "Completar os exercícios que exigem a fixação de uma célula através de uma referência absoluta ($A$1)."
      },
      {
        "title": "Criar",
        "text": "Criar fórmulas com referências mistas, fixando apenas a linha ou apenas a coluna, e copiá-las na matriz indicada."
      },
      {
        "title": "Resolver",
        "text": "Resolver o problema ##### alargando a coluna até o valor ficar visível."
      },
      {
        "title": "Localizar",
        "text": "Localizar e corrigir fórmulas com os erros #DIV/0!, #NOME?, #VALOR! e #REF!."
      },
      {
        "title": "Utilizar",
        "text": "Utilizar as ferramentas de auditoria para mostrar fórmulas e identificar precedentes ou dependentes."
      },
      {
        "title": "Guardar",
        "text": "Guardar a nova versão no computador e na Google Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI06.pdf",
    "workFiles": [
      {
        "number": "3",
        "title": "Livro 3 - Fórmulas e Referências",
        "expectedName": "UFCD0778_Livro3_Formulas_Referencias.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro3_Formulas_Referencias.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Apresentar um exemplo de referência absoluta e um de referência mista utilizados na tarefa e explicar por que foram necessários. Indicar também um erro de fórmula encontrado e como foi corrigido."
  },
    {
    "id": "tarefa-individual-7",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI7 - Aplicar funções estatísticas e de contagem",
    "intro": "Aplicar funções estatísticas e de contagem, escolhendo intervalos e argumentos adequados e interpretando os resultados obtidos.",
    "objective": "Aplicar funções estatísticas e de contagem, escolhendo intervalos e argumentos adequados e interpretando os resultados obtidos.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro-base Livro 4 — Funções e análise e guardar uma cópia com o nome correto."
      },
      {
        "title": "Aplicar",
        "text": "Aplicar as funções SOMA, MÉDIA, MÍNIMO e MÁXIMO nos intervalos indicados."
      },
      {
        "title": "Utilizar",
        "text": "Utilizar CONTAR para contar células com valores numéricos e CONTARA para contar células com qualquer tipo de conteúdo."
      },
      {
        "title": "Aplicar",
        "text": "Aplicar CONTAR.SE para contar registos que cumprem um critério específico."
      },
      {
        "title": "Utilizar",
        "text": "Utilizar o assistente de funções numa das propostas e escrever diretamente outra função na barra de fórmulas."
      },
      {
        "title": "Corrigir",
        "text": "Corrigir intervalos incompletos, argumentos inadequados e resultados incoerentes existentes na folha de diagnóstico."
      },
      {
        "title": "Guardar",
        "text": "Guardar o livro no computador e na Google Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI07.pdf",
    "workFiles": [
      {
        "number": "4",
        "title": "Livro 4 - Funções e Análise",
        "expectedName": "UFCD0778_Livro4_Funcoes_Analise.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro4_Funcoes_Analise.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Escolher duas funções utilizadas, explicar o que calculam e interpretar um dos resultados obtidos. Indicar também a diferença entre CONTAR e CONTARA."
  },
    {
    "id": "tarefa-individual-8",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI8 - Aplicar funções financeiras e iniciar o Projeto Final",
    "intro": "Utilizar as funções PGTO e VF em cenários concretos e iniciar a preparação dos dados do Projeto Final.",
    "objective": "Utilizar as funções PGTO e VF em cenários concretos e iniciar a preparação dos dados do Projeto Final.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro concluído na TI7 e criar uma nova cópia com o nome correto."
      },
      {
        "title": "Identificar",
        "text": "Identificar, em cada cenário, o capital, a taxa anual, o prazo e a periodicidade dos pagamentos."
      },
      {
        "title": "Converter",
        "text": "Converter corretamente a taxa anual para a periodicidade utilizada (ex.: taxa mensal = taxa anual ÷ 12)."
      },
      {
        "title": "Aplicar",
        "text": "Aplicar a função PGTO para calcular a prestação periódica de um empréstimo."
      },
      {
        "title": "Aplicar",
        "text": "Aplicar a função VF para simular o valor futuro de uma poupança com depósitos periódicos regulares."
      },
      {
        "title": "Criar",
        "text": "Criar três cenários comparando o efeito de alterar uma variável de cada vez (taxa, prazo ou capital)."
      },
      {
        "title": "Criar",
        "text": "Criar o ficheiro inicial do Projeto Final e começar a introduzir e organizar os dados de origem."
      },
      {
        "title": "Guardar",
        "text": "Guardar ambos os ficheiros no computador e na Google Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI08.pdf",
    "workFiles": [
      {
        "number": "4",
        "title": "Livro 4 - Funções e Análise",
        "expectedName": "UFCD0778_Livro4_Funcoes_Analise.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro4_Funcoes_Analise.xlsx",
        "available": true
      },
      {
        "number": "6",
        "title": "Projeto Final",
        "expectedName": "UFCD0778_Base_Projeto_Final.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Base_Projeto_Final.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Registar uma conclusão baseada nos cenários financeiros e indicar o cuidado necessário ao compatibilizar taxa e periodicidade. Descrever também o tema e os dados escolhidos para o Projeto Final."
  },
    {
    "id": "tarefa-individual-9",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI9 - Criar tabelas, ordenar e filtrar dados",
    "intro": "Estruturar uma lista como tabela formatada, garantir a qualidade dos dados e utilizar ordenação e filtros para responder a questões concretas.",
    "objective": "Estruturar uma lista como tabela formatada, garantir a qualidade dos dados e utilizar ordenação e filtros para responder a questões concretas.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro-base Livro 5 — Gestão e análise de dados e guardar uma cópia com o nome correto."
      },
      {
        "title": "Verificar",
        "text": "Verificar se a lista possui um único cabeçalho por coluna, registos completos e ausência de linhas vazias internas."
      },
      {
        "title": "Corrigir",
        "text": "Corrigir incoerências de escrita, datas, números e categorias indicadas no enunciado."
      },
      {
        "title": "Converter",
        "text": "Converter o intervalo numa tabela formatada (Inserir > Tabela) e atribuir-lhe um nome claro e sem espaços."
      },
      {
        "title": "Ativar",
        "text": "Ativar a linha de totais e escolher o tipo de cálculo adequado a cada coluna."
      },
      {
        "title": "Ordenar",
        "text": "Ordenar os dados por um critério simples e depois por dois ou mais níveis."
      },
      {
        "title": "Aplicar",
        "text": "Aplicar filtros de texto, número e data para responder às questões apresentadas."
      },
      {
        "title": "Limpar",
        "text": "Limpar os filtros no final e confirmar que todos os registos estão visíveis."
      },
      {
        "title": "Continuar",
        "text": "Continuar o Projeto Final, aplicando a estrutura de tabela formatada aos dados de origem."
      },
      {
        "title": "Guardar",
        "text": "Guardar ambos os ficheiros no computador e na Google Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI09.pdf",
    "workFiles": [
      {
        "number": "5",
        "title": "Livro 5 - Gestão e Análise de Dados",
        "expectedName": "UFCD0778_Livro5_Gestao_Analise_Dados.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro5_Gestao_Analise_Dados.xlsx",
        "available": true
      },
      {
        "number": "6",
        "title": "Projeto Final",
        "expectedName": "UFCD0778_Base_Projeto_Final.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Base_Projeto_Final.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Indicar uma questão respondida através da ordenação e outra através de filtros, apresentando os resultados encontrados."
  },
    {
    "id": "tarefa-individual-10",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI10 - Criar tabelas e gráficos dinâmicos com segmentações",
    "intro": "Resumir e explorar dados através de tabelas dinâmicas, gráficos dinâmicos e segmentações, garantindo a atualização correta da análise.",
    "objective": "Resumir e explorar dados através de tabelas dinâmicas, gráficos dinâmicos e segmentações, garantindo a atualização correta da análise.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o ficheiro concluído na TI9 e criar uma nova cópia com o nome correto."
      },
      {
        "title": "Criar",
        "text": "Criar uma tabela dinâmica numa nova folha e distribuir campos pelas áreas Filtros, Colunas, Linhas e Valores."
      },
      {
        "title": "Alterar",
        "text": "Alterar o tipo de resumo dos valores e o respetivo formato numérico quando necessário."
      },
      {
        "title": "Criar",
        "text": "Criar uma segunda tabela dinâmica com uma perspetiva de análise diferente."
      },
      {
        "title": "Agrupar",
        "text": "Agrupar datas por mês ou trimestre na tabela dinâmica."
      },
      {
        "title": "Criar",
        "text": "Criar um gráfico dinâmico associado à primeira tabela dinâmica."
      },
      {
        "title": "Inserir",
        "text": "Inserir pelo menos uma segmentação de dados e ligá-la às duas tabelas dinâmicas."
      },
      {
        "title": "Alterar",
        "text": "Alterar um registo na tabela de origem e atualizar as tabelas dinâmicas para demonstrar que a análise acompanha os dados."
      },
      {
        "title": "Continuar",
        "text": "Continuar o Projeto Final, criando a tabela dinâmica e o gráfico dinâmico com segmentações."
      },
      {
        "title": "Guardar",
        "text": "Guardar ambos os ficheiros no computador e na Google Drive."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI10.pdf",
    "workFiles": [
      {
        "number": "5",
        "title": "Livro 5 - Gestão e Análise de Dados",
        "expectedName": "UFCD0778_Livro5_Gestao_Analise_Dados.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Livro5_Gestao_Analise_Dados.xlsx",
        "available": true
      },
      {
        "number": "6",
        "title": "Projeto Final",
        "expectedName": "UFCD0778_Base_Projeto_Final.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Base_Projeto_Final.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Explicar a diferença entre filtrar diretamente a tabela de origem e utilizar uma segmentação numa tabela dinâmica, indicando uma vantagem de cada opção."
  },
    {
    "id": "tarefa-individual-11",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI11 - Concluir o Projeto Final e realizar a revisão entre pares",
    "intro": "Concluir a versão de desenvolvimento do Projeto Final e melhorá-la através de uma revisão entre pares estruturada.",
    "objective": "Concluir a versão de desenvolvimento do Projeto Final e melhorá-la através de uma revisão entre pares estruturada.",
    "steps": [
      {
        "title": "Abrir",
        "text": "Abrir o Projeto Final em desenvolvimento e guardar a versão de conclusão com o nome correto."
      },
      {
        "title": "Confirmar",
        "text": "Confirmar que o livro inclui: tabela formatada, fórmulas, funções estatísticas e financeiras (PGTO e VF), ordenação e filtros, tabela dinâmica, gráfico dinâmico, segmentações e folhas preparadas para impressão."
      },
      {
        "title": "Verificar",
        "text": "Verificar a coerência dos dados, os nomes das folhas, os títulos e os formatos numéricos."
      },
      {
        "title": "Atualizar",
        "text": "Atualizar as tabelas e gráficos dinâmicos e testar todas as segmentações."
      },
      {
        "title": "Trocar",
        "text": "Trocar o ficheiro com um/a colega para revisão e utilizar a grelha de análise fornecida pela formadora."
      },
      {
        "title": "Registar",
        "text": "Registar pelo menos três aspetos positivos e três melhorias necessárias no projeto do/a colega."
      },
      {
        "title": "Analisar",
        "text": "Analisar o feedback recebido e preparar as correções para a TI12."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI11.pdf",
    "workFiles": [
      {
        "number": "6",
        "title": "Projeto Final",
        "expectedName": "UFCD0778_Base_Projeto_Final.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Base_Projeto_Final.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Identificar o/a colega revisor/a, resumir o feedback recebido e indicar duas sugestões que serão aplicadas e uma que não será aplicada, justificando a decisão."
  },
    {
    "id": "tarefa-individual-12",
    "url": "atividades/tarefas-individuais.html",
    "title": "TI12 - Concluir, partilhar e refletir",
    "intro": "Aplicar as melhorias pertinentes, validar todas as funcionalidades, preparar as versões finais e apresentar os resultados do Projeto Final.",
    "objective": "Aplicar as melhorias pertinentes, validar todas as funcionalidades, preparar as versões finais e apresentar os resultados do Projeto Final.",
    "steps": [
      {
        "title": "Criar",
        "text": "Criar a versão final do projeto com o nome correto."
      },
      {
        "title": "Aplicar",
        "text": "Aplicar as correções pertinentes com base no feedback da revisão entre pares."
      },
      {
        "title": "Testar",
        "text": "Testar todas as fórmulas, funções, tabelas dinâmicas, gráficos e segmentações."
      },
      {
        "title": "Confirmar",
        "text": "Confirmar que as folhas destinadas à impressão têm área de impressão, orientação, margens, cabeçalho e rodapé adequados."
      },
      {
        "title": "Exportar",
        "text": "Exportar as folhas indicadas para PDF e verificar o conteúdo e a paginação."
      },
      {
        "title": "Preparar",
        "text": "Preparar uma apresentação de cerca de cinco minutos sobre o projeto."
      },
      {
        "title": "Escrever",
        "text": "Escrever uma reflexão individual final com 5 a 8 frases e entre 150 e 200 palavras."
      },
      {
        "title": "Guardar",
        "text": "Guardar XLSX e PDF finais na Drive, configurar a ligação do PDF como Leitor e publicar no Moodle."
      }
    ],
    "forumUrls": [],
    "pdfUrl": "assets/pdfs/TI12.pdf",
    "workFiles": [
      {
        "number": "6",
        "title": "Projeto Final",
        "expectedName": "UFCD0778_Base_Projeto_Final.xlsx",
        "excelUrl": "assets/ficheiros/Excel/UFCD0778_Base_Projeto_Final.xlsx",
        "available": true
      }
    ],
    "moodleRecord": "Publicar a ligação de leitura do PDF final, confirmar que foi testada e registar uma síntese das principais correções aplicadas após a revisão entre pares."
  }
];

const groupTasks = [
  { title: "Dia 1 — Conceitos gerais", day: 1, words: [["Apresentação gráfica", "Grupo 1"], ["Diapositivo", "Grupo 2"], ["Friso", "Grupo 3"], ["Separador", "Grupo 4"], ["Esquema de diapositivo", "Grupo 5"]] },
  { title: "Dia 2 — Tema e modelo", day: 2, words: [["Tema", "Grupo 1"], ["Modelo", "Grupo 2"], ["Diapositivo Mestre", "Grupo 3"], ["Caixa de texto", "Grupo 4"], ["Formatação de texto", "Grupo 5"]] },
  { title: "Dia 3 — Elementos gráficos", day: 3, words: [["Forma", "Grupo 1"], ["Imagem", "Grupo 2"], ["Gráfico", "Grupo 3"], ["Alinhamento", "Grupo 4"], ["Agrupamento", "Grupo 5"]] },
  { title: "Dia 4 — Efeitos especiais", day: 4, words: [["Animação", "Grupo 1"], ["Transição", "Grupo 2"], ["Som", "Grupo 3"], ["Efeito", "Grupo 4"], ["Temporização", "Grupo 5"]] },
  { title: "Dia 5 — Apresentar e partilhar", day: 5, words: [["Apresentação de diapositivos", "Grupo 1"], ["Notas do orador", "Grupo 2"], ["Folheto", "Grupo 3"], ["Exportação", "Grupo 4"], ["Partilha", "Grupo 5"]] }
];

const individualTasks = [
  {
    id: "ti01", code: "TI01", title: "TI01 — O meu e-portfólio começa aqui", pdfUrl: "assets/pdfs/TI01.pdf", forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=57096",
    objective: "Iniciar a organização do e-portfólio, registar as expectativas iniciais e aplicar os primeiros conceitos de apresentações gráficas.",
    steps: ["Aceder à aplicação do e-portfólio e criar ou completar a informação inicial.", "Personalizar a apresentação com nome, Ação 26109, breve apresentação pessoal e, se adequado, uma imagem.", "Registar as expectativas iniciais: aprendizagens esperadas, competências a desenvolver e utilização futura.", "Explorar as áreas da aplicação e identificar as secções para o percurso, trabalhos e aprendizagens.", "Criar no PowerPoint um diapositivo de apresentação do e-portfólio e guardar o ficheiro com um nome claro.", "Criar ou identificar na sua Drive a pasta do projeto do e-portfólio da Ação 26109 e partilhá-la com a formadora."],
    outcome: ["E-portfólio iniciado e informação inicial organizada.", "Expectativas registadas.", "Primeira apresentação gráfica criada e guardada."],
    moodleRecord: ["Confirmar que iniciou o e-portfólio.", "Indicar uma expectativa relativamente à Ação 26109.", "Referir uma competência ou conhecimento que gostaria de desenvolver."]
  },
  {
    id: "ti02", code: "TI02", title: "TI02 — Identidade visual do meu percurso", pdfUrl: "assets/pdfs/TI02.pdf", forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=57097",
    objective: "Aplicar temas, modelos, esquemas e formatação numa identidade visual coerente para o e-portfólio.",
    steps: ["Pensar na imagem que pretende transmitir no e-portfólio.", "Criar no PowerPoint uma proposta visual de 2 a 3 diapositivos.", "Usar tema adequado, letras legíveis, cores coerentes, esquemas diferentes e texto bem formatado.", "Incluir diapositivos de apresentação, de aprendizagem ou atividade e de evidência.", "Comparar os diapositivos e usar a proposta como referência para o e-portfólio."],
    outcome: ["Linha visual definida para as evidências e trabalhos do e-portfólio."],
    moodleRecord: ["Indicar o tema ou estilo visual escolhido.", "Referir uma decisão sobre cores, tipos de letra ou organização e justificar a escolha.", "Se adequado, acrescentar uma captura de ecrã de um diapositivo."]
  },
  {
    id: "ti03", code: "TI03", title: "TI03 — Uma aprendizagem em destaque", pdfUrl: "assets/pdfs/TI03.pdf", forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=57098",
    objective: "Utilizar texto, imagens, formas e outros elementos gráficos para apresentar uma evidência de aprendizagem.",
    steps: ["Escolher uma atividade ou trabalho de uma UFCD anterior da Ação 26109.", "Criar no PowerPoint um ou mais diapositivos sobre essa aprendizagem.", "Identificar a UFCD, o trabalho, uma imagem ou captura da evidência, o que foi feito e o que aprendeu.", "Aplicar formatação, imagens, formas, alinhamento e organização visual; usar gráficos ou tabelas quando adequado.", "Adicionar a evidência à área correspondente do e-portfólio."],
    outcome: ["Evidência que responde claramente: o que fiz, o que aprendi e que competência desenvolvi."],
    moodleRecord: ["Indicar a UFCD ou atividade escolhida.", "Explicar por que selecionou essa evidência.", "Referir a principal aprendizagem ou competência demonstrada."]
  },
  {
    id: "ti04", code: "TI04", title: "TI04 — Dar movimento à apresentação", pdfUrl: "assets/pdfs/TI04.pdf", forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=57099",
    objective: "Aplicar efeitos especiais e elementos dinâmicos de forma adequada numa apresentação gráfica.",
    steps: ["Escolher um trabalho ou aprendizagem a destacar no e-portfólio.", "Criar uma pequena apresentação gráfica sobre esse conteúdo.", "Aplicar com equilíbrio animações, transições, temporização e, se fizer sentido, som ou outro elemento multimédia.", "Testar a apresentação do início ao fim e confirmar que os efeitos ajudam a compreender a informação.", "Registar o trabalho no e-portfólio como evidência nova ou associada à atividade correspondente."],
    note: "O objetivo não é usar muitos efeitos: utilize apenas os que melhorem a comunicação.",
    moodleRecord: ["Indicar o tipo de animação, transição ou elemento multimédia utilizado e onde foi aplicado.", "Explicar de que forma melhorou — ou não — a apresentação."]
  },
  {
    id: "ti05", code: "TI05", title: "TI05 — Preparar, exportar e partilhar", pdfUrl: "assets/pdfs/TI05.pdf", forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=57100",
    objective: "Preparar uma apresentação para diferentes formas de utilização, divulgação e partilha.",
    steps: ["Escolher uma apresentação realizada nesta UFCD.", "Rever ortografia, organização, alinhamentos, legibilidade, imagens, animações e transições.", "Testar o modo de apresentação e explorar impressão, apresentação, exportação e partilha.", "Exportar a apresentação para um formato adequado à finalidade.", "Adicionar ou associar o resultado ao e-portfólio, identificado e com breve descrição."],
    outcome: ["Explicar o formato escolhido, a sua finalidade e como o trabalho pode ser consultado ou partilhado."],
    moodleRecord: ["Indicar o formato para o qual exportou a apresentação e a razão da escolha.", "Referir uma vantagem e, se existir, uma limitação dessa forma de partilha."]
  },
  {
    id: "ti06", code: "TI06", title: "TI06 — Rever e completar o meu e-portfólio", pdfUrl: "assets/pdfs/TI06.pdf", forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=57101",
    objective: "Consolidar o trabalho e completar a área da UFCD 0779 no e-portfólio.",
    steps: ["Rever o trabalho realizado e completar a página «UFCD 0779 — Utilitário de apresentação gráfica».", "Registar o que aprendeu, atividades realizadas e evidências selecionadas.", "Identificar dificuldades, estratégias para as ultrapassar e competências desenvolvidas.", "Escrever um pequeno balanço da UFCD.", "Verificar organização, textos, imagens, ligações, coerência visual e informação incompleta.", "Confirmar que as evidências estão na sua própria Drive e que a pasta do projeto está partilhada com a formadora."],
    moodleRecord: ["Indicar uma aprendizagem útil, uma dificuldade ultrapassada e uma competência em que evoluiu.", "Escolher a evidência que melhor representa o trabalho nesta UFCD e explicar porquê."]
  },
  {
    id: "ti-final", code: "TI FINAL", title: "TI FINAL — O meu percurso na Ação 26109", pdfUrl: "assets/pdfs/TIFinal.pdf", forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=57102",
    objective: "Refletir sobre o percurso na Ação 26109 — Ferramentas de Produtividade e Colaboração.",
    steps: ["Na área «Reflexão Final» do e-portfólio, descrever os conhecimentos e expectativas do início da formação.", "Identificar as aprendizagens e atividades mais importantes, dificuldades encontradas e formas de as ultrapassar.", "Refletir sobre as competências em que mais evoluiu, ferramentas aprendidas e aplicações futuras.", "Escolher uma evidência representativa do percurso e explicar porquê."],
    note: "A reflexão é pessoal e sintética; não é necessário descrever todas as atividades.",
    moodleRecord: ["Publicar uma breve mensagem de encerramento: aprendizagem mais importante, competência com maior evolução e ferramenta ou conhecimento que continuará a usar.", "Terminar com uma palavra ou pequena frase que represente o percurso na Ação 26109."],
    moodleNote: "Não é necessário repetir no fórum toda a reflexão do e-portfólio."
  }
];

const resources = [
  { id: "manual", title: "Manual de formação", intro: "Manual da UFCD 0779 — Utilitário de Apresentação Gráfica.", url: "recursos/manual.html", pdfUrl: pendingLinks.manualPdf },
  {
    id: "ficheiros-powerpoint", title: "Ficheiros PowerPoint",
    intro: "Apresentações para explorar o PowerPoint e acompanhar as demonstrações da UFCD 0779.",
    url: "recursos/ficheiros-powerpoint.html",
    downloadFiles: [
      { id: "bem-vindo-powerpoint", title: "Bem-vindo ao PowerPoint", description: "Apresentação introdutória para explorar o ambiente e as possibilidades do PowerPoint.", path: "assets/ficheiros/PowerPoint/Bem-vindo ao PowerPoint.pptx" },
      { id: "modelos-3d", title: "Apresentações com Modelos 3D", description: "Apresentação de apoio para explorar objetos e modelos 3D.", path: "assets/ficheiros/PowerPoint/Apresentações com Modelos 3D.pptx" },
    ]
  }
];
const mainMenuItems = [
  { key: "inicio", label: "Início" },
  { key: "objetivos", label: "Objetivos" },
  { key: "metodologia", label: "Metodologia" },
  { key: "conteudos", label: "Conteúdos" },
  { key: "atividades", label: "Atividades" },
  { key: "avaliacao", label: "Avaliação" },
  { key: "recursos", label: "Recursos" },
  { key: "eportfolio", label: "E-Portefólio" }
];

const siteVisibility = {
  menuPrincipal: Object.fromEntries(mainMenuItems.map((item) => [item.key, true])),
  conteudos: Object.fromEntries(topics.map((topic) => [topic.id, true])),
  atividades: Object.fromEntries(activities.map((activity) => [activity.id, activity.id !== "projeto-final-apresentacao"])),
  avaliacao: Object.fromEntries(evaluations.map((evaluation) => [evaluation.id, Boolean(evaluation.embedUrl)])),
  recursos: Object.fromEntries(resources.map((resource) => [resource.id, true])),
  ficheirosPowerPoint: Object.fromEntries(resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).map((file) => [file.id, true])),
  assistentesGpt: Object.fromEntries(resources.filter((resource) => resource.gptUrl).map((resource) => [resource.id, true])),
  tarefasGrupo: Object.fromEntries(groupTasks.map((task) => [task.title, true])),
  tarefasIndividuais: Object.fromEntries(individualTasks.flatMap((task) => [[task.id, true], [task.title, true]]))
};

const siteVisibilitySections = {
  menuPrincipal: true,
  conteudos: true,
  atividades: true,
  avaliacao: true,
  recursos: true,
  ficheirosPowerPoint: true,
  assistentesGpt: true,
  tarefasGrupo: true,
  tarefasIndividuais: true
};

const siteVisibilitySectionMeta = {
  menuPrincipal: { secao: "menu_principal", chave: "secao-menu-principal", titulo: "Menu principal", tipo: "secao", ordem: 1 },
  conteudos: { secao: "conteudos", chave: "secao-conteudos", titulo: "Conteúdos", tipo: "secao", ordem: 10 },
  atividades: { secao: "atividades", chave: "secao-atividades", titulo: "Atividades", tipo: "secao", ordem: 20 },
  avaliacao: { secao: "avaliacao", chave: "secao-avaliacao", titulo: "Avaliação", tipo: "secao", ordem: 30 },
  recursos: { secao: "recursos", chave: "secao-recursos", titulo: "Recursos", tipo: "secao", ordem: 40 },
  ficheirosPowerPoint: { secao: "ficheiros_powerpoint", chave: "secao-ficheiros-powerpoint", titulo: "Ficheiros PowerPoint", tipo: "secao", ordem: 45 },
  assistentesGpt: { secao: "assistentes_gpt", chave: "secao-assistentes-gpt", titulo: "Assistentes GPT", tipo: "secao", ordem: 48 },
  tarefasGrupo: { secao: "tarefas_grupo", chave: "secao-tarefas-grupo", titulo: "Tarefas de grupo", tipo: "secao", ordem: 50 },
  tarefasIndividuais: { secao: "tarefas_individuais", chave: "secao-tarefas-individuais", titulo: "Tarefas individuais", tipo: "secao", ordem: 60 }
};

const SITE_VISIBILITY_STORAGE_KEY = "ufcd0779-site-visibility-v1";
const SITE_VISIBILITY_REMOTE_CACHE_KEY = "ufcd0779-site-visibility-remote-cache-v1";
const SITE_LINKS_STORAGE_KEY = "ufcd0779-site-links-v1";
const APPS_SCRIPT_SPREADSHEET_GID = "1240441816";
const SITE_CONTROL_KEY_PREFIX = `ufcd-${UFCD.code}-`;
let siteControlItems = [];
let siteControlItemsBuilding = false;
let siteVisibilityRemoteLoading = null;
let siteVisibilityRemoteReady = !APPS_SCRIPT_WEB_APP_URL;
let siteVisibilityRemoteFresh = !APPS_SCRIPT_WEB_APP_URL;
let siteVisibilityRemoteAttempted = !APPS_SCRIPT_WEB_APP_URL;
let siteVisibilityRemoteItems = [];

function ocultarVisibilidadeControlada() {
  Object.keys(siteVisibilitySections).forEach((section) => { siteVisibilitySections[section] = false; });
  Object.values(siteVisibility).forEach((items) => {
    Object.keys(items).forEach((key) => { items[key] = false; });
  });
}

const siteLinks = {
  gammas: Object.fromEntries(topics.map((topic) => [topic.id, topic.gammaUrl || ""])),
  glossaryUrl,
  forums: {}
};

function obterTarefaGrupoPorChave(chave, titulo = "") {
  const valores = [chave, titulo].map((valor) => String(valor || ""));
  const limpos = valores.map((valor) => valor.replace(/^tarefa-grupo-/, ""));
  return groupTasks.find((task) =>
    valores.includes(task.title)
    || limpos.includes(task.title)
  );
}

function definirVisibilidadeTarefaGrupo(task, visivel) {
  if (!task) return false;
  siteVisibility.tarefasGrupo[task.title] = visivel;
  return true;
}

function tarefaGrupoVisivel(task) {
  if (!task || !siteVisibilityRemoteReady) return false;
  return siteVisibilitySections.tarefasGrupo !== false
    && siteVisibility.tarefasGrupo[task.title] !== false;
}

function obterTarefaIndividualPorChave(chave, titulo = "") {
  const valores = [chave, titulo].map((valor) => String(valor || ""));
  const limpos = valores.map((valor) => valor.replace(/^tarefa-individual-/, ""));
  return individualTasks.find((task) =>
    valores.includes(task.id)
    || limpos.includes(task.id)
    || valores.includes(task.title)
    || limpos.includes(task.title)
  );
}

function definirVisibilidadeTarefaIndividual(task, visivel) {
  if (!task) return false;
  siteVisibility.tarefasIndividuais[task.id] = visivel;
  siteVisibility.tarefasIndividuais[task.title] = visivel;
  return true;
}

function tarefaIndividualVisivel(task) {
  if (!task || !siteVisibilityRemoteReady) return false;
  return siteVisibilitySections.tarefasIndividuais !== false
    && siteVisibility.tarefasIndividuais[task.id] !== false
    && siteVisibility.tarefasIndividuais[task.title] !== false;
}
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes("/conteudos/guia-0779/")) return "../../";
  return path.includes("/conteudos/") || path.includes("/atividades/") || path.includes("/avaliacoes/") || path.includes("/recursos/") ? "../" : "";
}

function construirUrlEmbedAvaliacao(embedUrl) {
  if (/\/ufcd-0779\//.test(embedUrl) || /https:\/\/avaliacoes-formacao\.netlify\.app\/avaliacao-formacao\.html(?:\?|$)/.test(embedUrl)) return embedUrl;
  if (!embedUrl || !APPS_SCRIPT_SPREADSHEET_ID) return embedUrl;

  try {
    const url = new URL(embedUrl, window.location.href);
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    url.searchParams.set("spreadsheetId", APPS_SCRIPT_SPREADSHEET_ID);
    url.searchParams.set("gid", APPS_SCRIPT_SPREADSHEET_GID);
    url.searchParams.set("spreadsheet_gid", APPS_SCRIPT_SPREADSHEET_GID);
    return url.toString();
  } catch (error) {
    const separator = embedUrl.includes("?") ? "&" : "?";
    return `${embedUrl}${separator}spreadsheet_id=${encodeURIComponent(APPS_SCRIPT_SPREADSHEET_ID)}`;
  }
}

function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

function isSectionVisible(section) {
  return siteVisibilityRemoteReady && siteVisibilitySections[section] === true;
}

function isItemVisible(section, key) {
  return isSectionVisible(section) && siteVisibility[section]?.[key] === true;
}

function atualizarBotoesAvaliacaoPaginaInicial() {
  document.querySelectorAll("[data-evaluation-link]").forEach((link) => {
    link.hidden = !isItemVisible("avaliacao", link.dataset.evaluationLink);
  });
  document.querySelectorAll(".assessment-actions").forEach((actions) => {
    actions.hidden = !actions.querySelector("[data-evaluation-link]:not([hidden])");
  });
  document.querySelectorAll("#avaliacao .assessment-row").forEach((row) => {
    row.hidden = !row.querySelector(".assessment-actions [data-evaluation-link]:not([hidden])");
  });
}

function atualizarMenuPrincipal() {
  const keyBySubmenu = {
    "submenu-conteudos": "conteudos",
    "submenu-atividades": "atividades",
    "submenu-avaliacao": "avaliacao",
    "submenu-recursos": "recursos"
  };
  document.querySelectorAll(".side-nav").forEach((menu) => {
    menu.querySelectorAll('a[href*="index.html#"]').forEach((link) => {
      const key = link.getAttribute("href")?.split("#")[1];
      if (key in siteVisibility.menuPrincipal) link.hidden = !isItemVisible("menuPrincipal", key);
    });
    menu.querySelectorAll(".nav-parent").forEach((button) => {
      const submenuId = button.getAttribute("aria-controls");
      const key = keyBySubmenu[submenuId];
      if (!key) return;
      button.hidden = !isItemVisible("menuPrincipal", key);
      const submenu = document.getElementById(submenuId);
      if (submenu) submenu.hidden = button.hidden;
    });
  });
}

function atualizarSecoesPaginaInicial() {
  if (document.body.dataset.page !== "home") return;
  ["conteudos", "atividades", "avaliacao", "recursos"].forEach((section) => {
    const element = document.getElementById(section);
    if (element) element.hidden = !isSectionVisible(section);
  });
  document.querySelectorAll("#atividades [data-activity-id]").forEach((card) => {
    card.hidden = !isItemVisible("atividades", card.dataset.activityId);
  });
  document.querySelectorAll("#recursos [data-resource-id]").forEach((card) => {
    card.hidden = !isItemVisible("recursos", card.dataset.resourceId);
  });
}

function atualizarConteudosApresentacoes() {
  if (document.body.dataset.page !== "conteudos") return;
  document.querySelectorAll(".curriculum-card[id]").forEach((card) => {
    card.hidden = !isItemVisible("conteudos", card.id);
  });
  document.querySelectorAll(".content-grid").forEach((grid) => {
    const temItens = Boolean(grid.querySelector(".curriculum-card:not([hidden])"));
    grid.hidden = !temItens;
    if (grid.previousElementSibling?.tagName === "H2") grid.previousElementSibling.hidden = !temItens;
  });
}

function atualizarPortfolioIncorporado() {
  const frame = document.querySelector(".portfolio-embed-frame[data-src]");
  if (!frame) return;
  const visivel = isItemVisible("menuPrincipal", "eportfolio");
  frame.closest("main").hidden = !visivel;
  if (visivel && !frame.hasAttribute("src")) frame.src = frame.dataset.src;
  if (!visivel) frame.removeAttribute("src");
}

function renderPortfolioMenuLink() {
  document.querySelectorAll(".side-nav").forEach((menu) => {
    menu.querySelectorAll(".portfolio-site-link").forEach((link) => link.remove());

    if (!isItemVisible("menuPrincipal", "eportfolio")) return;

    const link = document.createElement("a");
    link.className = "portfolio-site-link";
    link.href = `${getBasePath()}e-portfolio.html`;
    link.textContent = "E-Portefólio";

    if (window.location.pathname.endsWith("/e-portfolio.html")) {
      link.classList.add("active");
    }

    menu.appendChild(link);
  });
}
function normalizarVisivel(value, fallback = true) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  const text = String(value || "").trim().toLowerCase();
  if (!text) return fallback;
  if (["true", "sim", "s", "1", "yes", "visivel", "visível"].includes(text)) return true;
  if (["false", "nao", "não", "n", "0", "no", "oculto"].includes(text)) return false;
  return fallback;
}

function obterChaveRemotaSite(chave) {
  const texto = String(chave || "");
  return texto.startsWith(SITE_CONTROL_KEY_PREFIX) ? texto : `${SITE_CONTROL_KEY_PREFIX}${texto}`;
}

function normalizarChaveRemotaSite(chave) {
  const texto = String(chave || "");
  if (texto.startsWith(SITE_CONTROL_KEY_PREFIX)) return texto.slice(SITE_CONTROL_KEY_PREFIX.length);
  if (/^ufcd-\d{4}-/i.test(texto)) return "";
  return texto;
}

function criarItemVisibilidade(secao, chave, titulo, url, tipo, nivel, visivel, ordem, options = {}) {
  const linkValue = options.linkValue || "";
  return {
    secao,
    chave,
    titulo,
    url: url || "",
    gammaUrl: linkValue,
    tipo,
    nivel,
    visivel: visivel !== false,
    ordem,
    linkValue,
    linkLabel: options.linkLabel || "",
    linkPlaceholder: options.linkPlaceholder || ""
  };
}

function obterConstituicaoVisibilidadeSite() {
  const itens = [];
  const adicionarSecao = (section) => {
    const meta = siteVisibilitySectionMeta[section];
    itens.push(criarItemVisibilidade(meta.secao, meta.chave, meta.titulo, "", meta.tipo, "secao", siteVisibilitySections[section], meta.ordem));
  };
  const adicionarItem = (section, key, titulo, url, tipo, ordem, options = {}) => {
    const meta = siteVisibilitySectionMeta[section];
    itens.push(criarItemVisibilidade(meta.secao, key, titulo, url, tipo, "item", siteVisibility[section]?.[key.replace(/^(menu|conteudo|atividade|avaliacao|recurso|ficheiro-powerpoint|assistente-gpt|tarefa-grupo|tarefa-individual)-/, "")], ordem, options));
  };

  adicionarSecao("menuPrincipal");
  mainMenuItems.forEach((item, index) => {
    const url = item.key === "inicio" ? "index.html#inicio" : item.key === "eportfolio" ? "e-portfolio.html" : `index.html#${item.key}`;
    adicionarItem("menuPrincipal", `menu-${item.key}`, item.label, url, "menu", 2 + index);
  });

  adicionarSecao("conteudos");
  topics.filter((topic) => topic.showInContents !== false).forEach((topic, index) => adicionarItem("conteudos", `conteudo-${topic.id}`, topic.cardTitle || topic.title, topic.url, "conteudo", 11 + index, {
    linkValue: obterGammaUrl(topic),
    linkLabel: "Gamma",
    linkPlaceholder: "https://...gamma.site/..."
  }));

  adicionarSecao("atividades");
  activities.forEach((activity, index) => adicionarItem("atividades", `atividade-${activity.id}`, activity.menuTitle || activity.title, activity.url, "atividade", 21 + index));

  adicionarSecao("avaliacao");
  evaluations.forEach((evaluation, index) => adicionarItem("avaliacao", `avaliacao-${evaluation.id}`, evaluation.menuTitle || evaluation.title, evaluation.url, "avaliacao", 31 + index));

  adicionarSecao("recursos");
  resources.forEach((resource, index) => adicionarItem("recursos", `recurso-${resource.id}`, resource.title, resource.url, "recurso", 41 + index));

  adicionarSecao("ficheirosPowerPoint");
  resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).forEach((file, index) => adicionarItem("ficheirosPowerPoint", `ficheiro-powerpoint-${file.id}`, file.title, file.path, "ficheiro_powerpoint", 45.1 + index));

  adicionarSecao("assistentesGpt");
  resources.filter((resource) => resource.gptUrl).forEach((resource, index) => adicionarItem("assistentesGpt", `assistente-gpt-${resource.id}`, resource.displayTitle || resource.title, resource.gptUrl, "assistente_gpt", 48.1 + index));

  adicionarSecao("tarefasGrupo");
  groupTasks.forEach((task, index) => adicionarItem("tarefasGrupo", `tarefa-grupo-${task.title}`, task.title, "atividades/tarefas-grupo.html", "tarefa_grupo", 51 + index, {
    linkValue: obterGlossarioUrl(),
    linkLabel: "Glossário",
    linkPlaceholder: "https://fad.iefp.pt/mod/glossary/view.php?id=..."
  }));

  adicionarSecao("tarefasIndividuais");
  individualTasks.forEach((task, index) => adicionarItem("tarefasIndividuais", `tarefa-individual-${task.id}`, task.title, "atividades/tarefas-individuais.html", "tarefa_individual", 61 + index, {
    linkValue: obterForumUrl(task),
    linkLabel: "Fórum",
    linkPlaceholder: "https://fad.iefp.pt/mod/forum/discuss.php?d=..."
  }));

  return itens;
}

function criarMapaVisibilidadePlano() {
  return Object.fromEntries(obterConstituicaoVisibilidadeSite().map((item) => [item.chave, item.visivel !== false]));
}

function obterItemControloPadrao() {
  siteControlItemsBuilding = true;
  try {
    return obterConstituicaoVisibilidadeSite();
  } finally {
    siteControlItemsBuilding = false;
  }
}

function normalizarItemControlo(item) {
  if (!item || typeof item !== "object") return null;
  const chaveOriginal = item.chave || item.key || "";
  const chave = normalizarChaveRemotaSite(chaveOriginal);
  if (!chave) return null;
  const linkValue = item.linkValue || item.gammaUrl || item.moodleUrl || item.urlMoodle || item.moodle || item.link || "";
  return {
    secao: item.secao || item.section || "",
    chave,
    titulo: item.titulo || item.title || "",
    url: item.url || "",
    gammaUrl: item.gammaUrl || "",
    tipo: item.tipo || item.type || "",
    nivel: item.nivel || item.level || "",
    visivel: normalizarVisivel(item.visivel ?? item.visible, true),
    ordem: Number(item.ordem || item.order || 0),
    linkValue: /^https?:\/\//i.test(String(linkValue)) ? String(linkValue) : "",
    linkLabel: item.linkLabel || "",
    linkPlaceholder: item.linkPlaceholder || ""
  };
}

function filtrarItensControloDaUfcdAtual(remoteItems = []) {
  const itens = Array.isArray(remoteItems) ? remoteItems : [];
  return itens.filter((item) => String(item?.chave || item?.key || "").startsWith(SITE_CONTROL_KEY_PREFIX));
}

function obterLinkItemControloRemoto(saved, fallback) {
  const explicitLink = saved?.linkValue || saved?.gammaUrl || saved?.moodleUrl || saved?.urlMoodle || saved?.moodle || saved?.link || "";
  if (/^https?:\/\//i.test(String(explicitLink))) return String(explicitLink);

  const savedUrl = String(saved?.url || "");
  const type = saved?.tipo || saved?.type || fallback?.tipo || fallback?.type || "";
  const usesUrlAsExternalLink = ["conteudo", "tarefa_grupo", "tarefa_individual", "avaliacao"].includes(type);
  if (usesUrlAsExternalLink && /^https?:\/\//i.test(savedUrl)) return savedUrl;

  return fallback?.linkValue || "";
}

function atualizarItensControloSite(remoteItems = []) {
  const savedByKey = new Map();
  filtrarItensControloDaUfcdAtual(remoteItems)
    .map(normalizarItemControlo)
    .filter(Boolean)
    .forEach((item) => {
      savedByKey.set(item.chave, item);
      if (item.tipo === "tarefa_grupo" || String(item.chave).startsWith("tarefa-grupo-")) {
        const task = obterTarefaGrupoPorChave(item.chave, item.titulo);
        if (task) {
          savedByKey.set(`tarefa-grupo-${task.title}`, item);
        }
      }
      if (item.tipo === "tarefa_individual" || String(item.chave).startsWith("tarefa-individual-")) {
        const task = obterTarefaIndividualPorChave(item.chave, item.titulo);
        if (task) {
          savedByKey.set(`tarefa-individual-${task.id}`, item);
          savedByKey.set(`tarefa-individual-${task.title}`, item);
        }
      }
    });

  siteControlItems = obterItemControloPadrao().map((item) => {
    const saved = savedByKey.get(item.chave);
    if (!saved) return item;
    return {
      ...item,
      url: saved.url || item.url,
      gammaUrl: saved.gammaUrl || item.gammaUrl || "",
      visivel: normalizarVisivel(saved.visivel, item.visivel),
      linkValue: obterLinkItemControloRemoto(saved, item)
    };
  });

  return siteControlItems;
}

function obterItensControloSite() {
  if (siteControlItemsBuilding) return siteControlItems;
  if (!siteControlItems.length) {
    siteControlItems = obterItemControloPadrao();
  }
  return siteControlItems;
}

function obterItemControlo(chave) {
  const chaveLocal = normalizarChaveRemotaSite(chave);
  return obterItensControloSite().find((item) => normalizarChaveRemotaSite(item.chave) === chaveLocal);
}

function obterLinkControlo(chave) {
  return obterItemControlo(chave)?.linkValue || "";
}

function obterSecaoIndexPorSubmenu() {
  return {
    "submenu-conteudos": "conteudos",
    "submenu-atividades": "atividades",
    "submenu-avaliacao": "avaliacao",
    "submenu-recursos": "recursos"
  };
}

function abrirSubmenuPrincipal(submenuId, options = {}) {
  const currentSubmenu = document.getElementById(submenuId);
  const shouldClose = options.toggle && currentSubmenu?.classList.contains("open");

  document.querySelectorAll(".nav-parent").forEach((button) => {
    const isTarget = button.getAttribute("aria-controls") === submenuId;
    button.setAttribute("aria-expanded", String(isTarget && !shouldClose));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId && !shouldClose);
  });
}

function abrirMenuPeloHashDoIndex() {
  if (document.body.dataset.page !== "home") return;

  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const submenuId = Object.entries(obterSecaoIndexPorSubmenu())
    .find(([, sectionId]) => sectionId === hash)?.[0];

  if (submenuId) abrirSubmenuPrincipal(submenuId);
}

function setupMenu() {
  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.remove("open");
  });

  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.addEventListener("click", () => {
      const submenuId = button.getAttribute("aria-controls");
      if (submenuId) abrirSubmenuPrincipal(submenuId, { toggle: true });
    });
  });

  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const fecharMenu = () => {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) return;
    if (sidebar?.contains(event.target) || toggle?.contains(event.target)) return;
    fecharMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
      fecharMenu();
    }
  });
}

function manterMenuAtivoAberto() {
  const topicId = document.body.dataset.topic || "";
  const activityId = document.body.dataset.activity || "";
  const resourceId = document.body.dataset.resource || "";
  let submenuId = "";
  let activeUrl = "";

  if (topicId) {
    const topic = topicById(topicId);
    submenuId = "submenu-conteudos";
    activeUrl = topic?.url || "";
  } else if (activityId) {
    const evaluation = evaluations.find((item) => item.id === activityId);
    const activity = activities.find((item) => item.id === activityId);
    submenuId = evaluation ? "submenu-avaliacao" : "submenu-atividades";
    activeUrl = (evaluation || activity)?.url || "";
  } else if (resourceId) {
    const resource = resources.find((item) => item.id === resourceId);
    submenuId = "submenu-recursos";
    activeUrl = resource?.url || "";
  }

  if (!submenuId) return;

  document.querySelectorAll(".nav-parent").forEach((button) => {
    const active = button.getAttribute("aria-controls") === submenuId;
    button.setAttribute("aria-expanded", String(active));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId);
  });

  if (activeUrl) {
    document.querySelectorAll(`#${submenuId} a`).forEach((link) => {
      link.classList.toggle("active", Boolean(link.getAttribute("href")?.endsWith(activeUrl)));
    });
  }

  if (topicId) {
    document.querySelectorAll("#submenu-conteudos button.submenu-heading").forEach((button) => {
      const children = button.nextElementSibling;
      const hasActiveTopic = Boolean(children?.querySelector(`a[href$="${activeUrl}"]`));
      button.setAttribute("aria-expanded", String(hasActiveTopic));
      if (children) children.hidden = !hasActiveTopic;
    });
  }
}

function renderContentMenus() {
  const menus = document.querySelectorAll("#submenu-conteudos");
  menus.forEach((menu) => {
    if (!isSectionVisible("conteudos")) {
      menu.innerHTML = "";
      return;
    }

    menu.innerHTML = contentMenuGroups.map((group) => {
      const visibleChildren = group.children
        .map((child) => topicById(child.topicId))
        .filter((topic) => topic && isItemVisible("conteudos", topic.id));

      const parentTopic = group.parentTopicId ? topicById(group.parentTopicId) : null;
      const parentVisible = parentTopic && isItemVisible("conteudos", parentTopic.id);

      if (parentTopic) {
        if (!parentVisible && !visibleChildren.length) return "";
        return `
      ${parentVisible ? `<a class="submenu-heading submenu-heading-${group.theme}" href="${getBasePath()}${parentTopic.url}">
        <span>${group.title}</span>
      </a>` : ""}
      ${visibleChildren.length ? `<div class="submenu-group-children content-child-links">
        ${visibleChildren.map((topic) => `<a href="${getBasePath()}${topic.url}">${topic.menuTitle || topic.title}</a>`).join("")}
      </div>` : ""}
    `;
      }
      if (!visibleChildren.length) return "";

      if (visibleChildren.length === 1) {
        const topic = visibleChildren[0];
        return `
      <a class="submenu-heading submenu-heading-${group.theme}" href="${getBasePath()}${topic.url}">
        <span>${group.title}</span>
      </a>
    `;
      }

      return `
      <button class="submenu-heading submenu-heading-${group.theme}" type="button" aria-expanded="false">
        <span>${group.title}</span>
        <b aria-hidden="true"></b>
      </button>
      <div class="submenu-group-children" hidden>
        ${visibleChildren.map((topic) => `<a href="${getBasePath()}${topic.url}">${topic.menuTitle || topic.title}</a>`).join("")}
      </div>
    `;
    }).join("");
  });

  document.querySelectorAll("button.submenu-heading").forEach((button) => {
    button.addEventListener("click", () => {
      const children = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll("button.submenu-heading").forEach((otherButton) => {
        if (otherButton === button) return;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherButton.nextElementSibling) otherButton.nextElementSibling.hidden = true;
      });
      button.setAttribute("aria-expanded", String(!expanded));
      if (children) children.hidden = expanded;
    });
  });
}

function renderActivityMenus() {
  document.querySelectorAll(".activity-submenu").forEach((menu) => {
    if (!isSectionVisible("atividades")) {
      menu.innerHTML = "";
      return;
    }

    const currentActivity = document.body.dataset.activity || "";
    menu.innerHTML = activities
      .filter((activity) => !activity.parentId && isItemVisible("atividades", activity.id))
      .map((activity) => {
        const children = activities.filter((child) => child.parentId === activity.id && isItemVisible("atividades", child.id));
        const isActive = currentActivity === activity.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${currentActivity === child.id ? "active" : ""}">${child.menuTitle || child.title}</a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${activity.url}" class="${isActive ? "active" : ""}">${activity.menuTitle || activity.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${activity.url}" class="${isActive ? "active" : ""}">${activity.menuTitle || activity.title}</a>
          <div class="submenu-group-children activity-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}
function renderEvaluationMenus() {
  document.querySelectorAll(".evaluation-submenu").forEach((menu) => {
    if (!isSectionVisible("avaliacao")) {
      menu.innerHTML = "";
      return;
    }

    const currentEvaluation = document.body.dataset.activity || "";
    menu.innerHTML = evaluations
      .filter((evaluation) => !evaluation.parentId && isItemVisible("avaliacao", evaluation.id))
      .map((evaluation) => {
        const children = evaluations.filter((child) => child.parentId === evaluation.id && isItemVisible("avaliacao", child.id));
        const isActive = currentEvaluation === evaluation.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${currentEvaluation === child.id ? "active" : ""}">${child.menuTitle || child.title}</a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>
          <div class="submenu-group-children evaluation-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function renderResourceMenus() {
  document.querySelectorAll(".resource-submenu").forEach((menu) => {
    if (!isSectionVisible("recursos")) {
      menu.innerHTML = "";
      return;
    }

    const currentResource = document.body.dataset.resource || "";
    menu.innerHTML = resources
      .filter((resource) => !resource.parentId && isItemVisible("recursos", resource.id))
      .map((resource) => {
        const children = resources.filter((child) => {
          if (child.parentId !== resource.id || !isItemVisible("recursos", child.id)) return false;
          if (child.gptUrl && !isItemVisible("assistentesGpt", child.id)) return false;
          return true;
        });
        const isActive = currentResource === resource.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${child.menuIcon ? "submenu-icon-link" : ""} ${currentResource === child.id ? "active" : ""}">
            ${child.menuIcon ? `<img src="${getBasePath()}${child.menuIcon}" alt="" aria-hidden="true">` : ""}
            <span>${child.menuTitle || child.title}</span>
          </a>
        `).join("");

        if (!children.length) {
          if (resource.gptUrl) {
            return `<a href="${resource.gptUrl}">${resource.title}</a>`;
          }
          return `<a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>
          <div class="submenu-group-children resource-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function renderHomeCards() {
  const grid = document.getElementById("home-content-grid");
  if (!grid) return;

  grid.innerHTML = topics.filter((topic) => topic.showInContents !== false && isItemVisible("conteudos", topic.id)).map((topic) => `
    <article class="content-card presentation-card">
      <a href="${topic.url}"><h3>${topic.cardTitle}</h3>
        <p>${topic.intro}</p>
      </a>
    </article>
  `).join("");
}

function renderConteudosIndex() {
  const grid = document.getElementById("conteudos-index-grid");
  if (!grid) return;

  grid.innerHTML = topics.filter((topic) => topic.showInContents !== false && isItemVisible("conteudos", topic.id)).map((topic) => `
    <article class="card">
      <h3><a href="${topic.url}">${topic.title}</a></h3>
      <p>${topic.intro}</p>
    </article>
  `).join("");
}

function setupFloatingActions() {
  document.querySelectorAll("[data-action='top']").forEach((button) => {
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });
  document.querySelectorAll("[data-action='print']").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
}

function setupModals() {
  const closeModal = (modal) => {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-modal-open]");
    if (opener) {
      const modal = document.getElementById(opener.dataset.modalOpen);
      if (!modal) return;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      modal.querySelector("[data-modal-close]")?.focus();
      return;
    }

    const modal = event.target.closest(".modal-backdrop");
    if (modal && (event.target === modal || event.target.closest("[data-modal-close]"))) {
      closeModal(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".modal-backdrop:not([hidden])").forEach(closeModal);
  });
}

function getControlState() {
  try {
    return JSON.parse(localStorage.getItem("ufcd0778-control-state")) || {};
  } catch {
    return {};
  }
}

function saveControlState(state) {
  localStorage.setItem("ufcd0778-control-state", JSON.stringify(state));
}

function limparEstadoLocalDoSite() {
  try {
    localStorage.removeItem(SITE_VISIBILITY_STORAGE_KEY);
    localStorage.removeItem(SITE_LINKS_STORAGE_KEY);
  } catch {
    // A Sheet continua a ser a fonte principal mesmo sem acesso ao localStorage.
  }
}
function carregarVisibilidadeDoSite() {
  try {
    aplicarVisibilidadeDoSite(JSON.parse(localStorage.getItem(SITE_VISIBILITY_STORAGE_KEY) || "{}"));
  } catch {
    // Mantém a configuração inicial quando o browser não permite ler localStorage.
  }
}

function guardarUltimaVisibilidadeRemotaDoSite(itens) {
  if (!Array.isArray(itens)) return;
  try {
    const itensDaUfcdAtual = filtrarItensControloDaUfcdAtual(itens);
    localStorage.setItem(SITE_VISIBILITY_REMOTE_CACHE_KEY, JSON.stringify({
      schemaVersion: 2,
      savedAt: new Date().toISOString(),
      itens: itensDaUfcdAtual
    }));
  } catch {
    // A página continua funcional mesmo sem cache local.
  }
}

function carregarUltimaVisibilidadeRemotaDoSite() {
  try {
    const cached = JSON.parse(localStorage.getItem(SITE_VISIBILITY_REMOTE_CACHE_KEY) || "{}");
    if (cached.schemaVersion !== 2) return false;
    const itensDaUfcd = filtrarItensControloDaUfcdAtual((Array.isArray(cached.itens) ? cached.itens : []).map((item) => ({
      ...item,
      chave: obterChaveRemotaSite(item.chave || item.key)
    })));
    if (!itensDaUfcd.length) return false;
    ocultarVisibilidadeControlada();
    aplicarItensVisibilidadeRemota(itensDaUfcd);
    siteVisibilityRemoteItems = itensDaUfcd;
    siteVisibilityRemoteReady = true;
    siteVisibilityRemoteAttempted = true;
    return true;
  } catch {
    return false;
  }
}

function aplicarVisibilidadeDoSite(saved) {
  Object.entries(saved || {}).forEach(([section, values]) => {
    if (section === "secoes" && values) {
      Object.entries(values).forEach(([key, value]) => {
        if (key in siteVisibilitySections && typeof value === "boolean") {
          siteVisibilitySections[key] = value;
        }
      });
      return;
    }

    if (!siteVisibility[section] || !values) return;
    Object.entries(values).forEach(([key, value]) => {
      if (key in siteVisibility[section] && typeof value === "boolean") {
        siteVisibility[section][key] = value;
      }
    });
  });
}

function aplicarLinkItemControlo(item) {
  if (!item || typeof item !== "object") return false;
  const chave = String(item.chave || item.key || "");
  const tipo = String(item.tipo || item.type || "").toLowerCase();
  const titulo = String(item.titulo || item.title || "");
  const valor = String(item.linkValue || item.link || item.gammaUrl || item.moodleUrl || item.urlMoodle || item.moodle || "");
  const urlExterno = valor || (/^https?:\/\//i.test(String(item.url || "")) ? String(item.url) : "");
  if (!urlExterno) return false;
  let alterou = false;

  if (tipo === "conteudo" || chave.startsWith("conteudo-")) {
    const topicId = chave.replace(/^conteudo-/, "");
    if (topicId in siteLinks.gammas && siteLinks.gammas[topicId] !== urlExterno) {
      siteLinks.gammas[topicId] = urlExterno;
      alterou = true;
    }
  }

  if (tipo === "tarefa_grupo" || chave.startsWith("tarefa-grupo-") || chave === "secao-tarefas-grupo") {
    const isGroupSection = chave === "secao-tarefas-grupo";
    const task = isGroupSection ? null : obterTarefaGrupoPorChave(chave, titulo);
    if (!isGroupSection && !task) return alterou;
    if (siteLinks.glossaryUrl !== urlExterno) {
      siteLinks.glossaryUrl = urlExterno;
      alterou = true;
    }
  }

  if (tipo === "tarefa_individual" || chave.startsWith("tarefa-individual-")) {
    const taskKey = chave.replace(/^tarefa-individual-/, "");
    const task = obterTarefaIndividualPorChave(taskKey, titulo);
    const keys = task ? [task.id, task.title] : [taskKey, titulo].filter(Boolean);
    keys.forEach((key) => {
      if (siteLinks.forums[key] !== urlExterno) {
        siteLinks.forums[key] = urlExterno;
        alterou = true;
      }
    });
  }

  return alterou;
}

function aplicarItemVisibilidadeRemota(item) {
  aplicarLinkItemControlo(item);
  if (!item || typeof item.visivel !== "boolean") return;

  const chave = String(item.chave || "");
  const metaEntry = Object.entries(siteVisibilitySectionMeta).find(([, meta]) => meta.chave === chave);
  if (metaEntry) {
    siteVisibilitySections[metaEntry[0]] = item.visivel;
    return;
  }

  const mappings = [
    { prefix: "menu-", section: "menuPrincipal" },
    { prefix: "conteudo-", section: "conteudos" },
    { prefix: "atividade-", section: "atividades" },
    { prefix: "avaliacao-", section: "avaliacao" },
    { prefix: "recurso-", section: "recursos" },
    { prefix: "ficheiro-powerpoint-", section: "ficheirosPowerPoint" },
    { prefix: "assistente-gpt-", section: "assistentesGpt" },
    { prefix: "tarefa-grupo-", section: "tarefasGrupo" },
    { prefix: "tarefa-individual-", section: "tarefasIndividuais" }
  ];

  const mapping = mappings.find((candidate) => chave.startsWith(candidate.prefix));
  if (!mapping) return;

  const key = chave.slice(mapping.prefix.length);
  if (mapping.section === "tarefasGrupo") {
    definirVisibilidadeTarefaGrupo(obterTarefaGrupoPorChave(key, item.titulo || item.title), item.visivel);
    return;
  }

  if (mapping.section === "tarefasIndividuais") {
    definirVisibilidadeTarefaIndividual(obterTarefaIndividualPorChave(key, item.titulo || item.title), item.visivel);
    return;
  }

  if (siteVisibility[mapping.section] && key in siteVisibility[mapping.section]) {
    siteVisibility[mapping.section][key] = item.visivel;
  }
}

function aplicarItensVisibilidadeRemota(itens) {
  if (!Array.isArray(itens)) return;
  const itensDaUfcdAtual = filtrarItensControloDaUfcdAtual(itens)
    .map(normalizarItemControlo)
    .filter(Boolean);
  atualizarItensControloSite(itensDaUfcdAtual);
  let linksAlterados = false;
  itensDaUfcdAtual.forEach((item) => {
    linksAlterados = aplicarLinkItemControlo(item) || linksAlterados;
    aplicarItemVisibilidadeRemota(item);
  });
  void linksAlterados;
}

function atualizarSuperficiesVisiveisDoSite() {
  renderPortfolioMenuLink();
  atualizarMenuPrincipal();
  atualizarBotoesAvaliacaoPaginaInicial();
  atualizarSecoesPaginaInicial();
  atualizarConteudosApresentacoes();
  atualizarPortfolioIncorporado();
  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  renderHomeCards();
  renderConteudosIndex();

  if (document.getElementById("topic-root")) {
    renderTopicPage();
  }

  if (document.getElementById("activity-root")) {
    renderActivityPage();
  }

  if (document.getElementById("resource-root")) {
    renderResourcePage();
  }

  manterMenuAtivoAberto();
  abrirMenuPeloHashDoIndex();
}

function guardarVisibilidadeDoSite() {
  try {
    localStorage.setItem(SITE_VISIBILITY_STORAGE_KEY, JSON.stringify({
      secoes: siteVisibilitySections,
      ...siteVisibility
    }));
  } catch {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
}

function carregarLinksDoSite() {
  try {
    const saved = JSON.parse(localStorage.getItem(SITE_LINKS_STORAGE_KEY) || "{}");
    aplicarLinksDoSite(saved);
  } catch {
    // Mantém os valores de base quando não é possível ler localStorage.
  }
}

function aplicarLinksDoSite(links) {
  if (!links || typeof links !== "object") return false;
  let alterou = false;

  const obterCampo = (item, nomes) => {
    if (!item || typeof item !== "object") return "";
    const entradas = Object.entries(item);
    const nomesNormalizados = nomes.map((nome) => nome.toLowerCase());
    const entrada = entradas.find(([key]) => nomesNormalizados.includes(key.toLowerCase()));
    return entrada ? entrada[1] : "";
  };
  const obterValorLink = (item) => {
    const valorExterno = obterCampo(item, ["gammaUrl", "linkValue", "moodleUrl", "urlMoodle", "moodle", "link", "href", "valor", "value", "ligacao", "ligação"]);
    if (valorExterno) return valorExterno;
    const url = String(obterCampo(item, ["url"]) || "");
    return /^https?:\/\//i.test(url) ? url : "";
  };
  const obterChaveLink = (item) => obterCampo(item, ["key", "chave", "id", "linkKey", "titulo", "title", "tarefa"]);
  const obterTipoLink = (item) => String(obterCampo(item, ["linkType", "tipo", "tipo_link", "secao", "seção", "categoria"])).toLowerCase();
  const guardarForum = (key, value) => {
    const novoValor = String(value || "");
    const task = obterTarefaIndividualPorChave(key);
    const chaves = task ? [task.id, task.title] : [key];
    chaves.filter(Boolean).forEach((chave) => {
      if (siteLinks.forums[chave] !== novoValor) {
        siteLinks.forums[chave] = novoValor;
        alterou = true;
      }
    });
  };

  if (Array.isArray(links)) {
    links.forEach((item) => {
      const tipo = obterTipoLink(item);
      const key = obterChaveLink(item);
      const value = obterValorLink(item);

      if (!value) return;

      if ((tipo.includes("gamma") || tipo.includes("conteudo")) && key in siteLinks.gammas) {
        const novoValor = String(value || "");
        if (siteLinks.gammas[key] !== novoValor) {
          siteLinks.gammas[key] = novoValor;
          alterou = true;
        }
      } else if (tipo.includes("gloss")) {
        const novoValor = String(value || "");
        if (siteLinks.glossaryUrl !== novoValor) {
          siteLinks.glossaryUrl = novoValor;
          alterou = true;
        }
      } else if (tipo.includes("forum") || tipo.includes("tarefa")) {
        guardarForum(key, value);
      }
    });

    return alterou;
  }

  if (Array.isArray(links.itens)) {
    alterou = aplicarLinksDoSite(links.itens) || alterou;
  }

  if (links.gammas && typeof links.gammas === "object") {
    Object.entries(links.gammas).forEach(([key, value]) => {
      if (key in siteLinks.gammas) {
        const novoValor = String(value || "");
        if (siteLinks.gammas[key] !== novoValor) {
          siteLinks.gammas[key] = novoValor;
          alterou = true;
        }
      }
    });
  }

  if (typeof links.glossaryUrl === "string" && siteLinks.glossaryUrl !== links.glossaryUrl) {
    siteLinks.glossaryUrl = links.glossaryUrl;
    alterou = true;
  }

  if (links.forums && typeof links.forums === "object") {
    Object.entries(links.forums).forEach(([key, value]) => {
      guardarForum(key, value);
    });
  }

  return alterou;
}

function guardarLinksDoSite() {
  try {
    localStorage.setItem(SITE_LINKS_STORAGE_KEY, JSON.stringify(siteLinks));
  } catch {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
}

function obterGammaUrl(topic) {
  return obterLinkControlo(`conteudo-${topic.id}`) || siteLinks.gammas[topic.id] || topic.gammaUrl || "";
}

function obterGlossarioUrl() {
  return obterLinkControlo("secao-tarefas-grupo")
    || groupTasks.map((task) => obterLinkControlo(`tarefa-grupo-${task.title}`)).find(Boolean)
    || siteLinks.glossaryUrl
    || glossaryUrl
    || "";
}

function obterUrlTopicoForum(valor) {
  const url = String(valor || "").trim();
  return /^https:\/\/fad\.iefp\.pt\/mod\/forum\/discuss\.php\?d=\d+/i.test(url) ? url : "";
}

function obterForumUrls(task) {
  const urls = [];
  const adicionar = (url) => {
    const normalizado = obterUrlTopicoForum(url);
    if (normalizado && !urls.includes(normalizado)) urls.push(normalizado);
  };

  adicionar(obterLinkControlo(`tarefa-individual-${task.id}`));
  adicionar(obterLinkControlo(`tarefa-individual-${task.title}`));
  adicionar(siteLinks.forums[task.id]);
  adicionar(siteLinks.forums[task.title]);
  adicionar(task.forumUrl);
  (task.forumUrls || []).forEach(adicionar);

  return urls;
}

function obterForumUrl(task) {
  return obterForumUrls(task)[0] || "";
}

window.addEventListener("storage", (event) => {
  if (APPS_SCRIPT_WEB_APP_URL && (event.key === SITE_VISIBILITY_STORAGE_KEY || event.key === SITE_LINKS_STORAGE_KEY)) return;
  if (!event.newValue) return;

  try {
    if (event.key === SITE_VISIBILITY_STORAGE_KEY) {
      aplicarVisibilidadeDoSite(JSON.parse(event.newValue));
      atualizarSuperficiesVisiveisDoSite();
    }

    if (event.key === SITE_LINKS_STORAGE_KEY && aplicarLinksDoSite(JSON.parse(event.newValue))) {
      atualizarSuperficiesVisiveisDoSite();
    }
  } catch {
    // Mantém o estado atual se a alteração recebida não puder ser lida.
  }
});

async function carregarVisibilidadeRemotaDoSite(options = {}) {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  if (siteVisibilityRemoteLoading && !options.force) return siteVisibilityRemoteLoading;

  siteVisibilityRemoteLoading = obterJsonAppsScript({
    acao: "visibilidade_site",
    ufcd: UFCD.code,
    prefixo: SITE_CONTROL_KEY_PREFIX,
    campos: "essenciais"
  }, { timeoutMs: 30000 })
    .then((dados) => {
      const itensDaUfcd = filtrarItensControloDaUfcdAtual(dados?.itens);
      if (dados?.sucesso && itensDaUfcd.length) {
        ocultarVisibilidadeControlada();
        aplicarItensVisibilidadeRemota(dados.itens);
        guardarUltimaVisibilidadeRemotaDoSite(dados.itens);
        limparEstadoLocalDoSite();
        siteVisibilityRemoteItems = itensDaUfcd;
        siteVisibilityRemoteReady = true;
        siteVisibilityRemoteFresh = true;
        return true;
      }
      siteVisibilityRemoteItems = [];
      siteVisibilityRemoteReady = false;
      siteVisibilityRemoteFresh = false;
      return false;
    })
    .catch(() => {
      siteVisibilityRemoteFresh = false;
      return false;
    })
    .finally(() => {
      siteVisibilityRemoteAttempted = true;
      siteVisibilityRemoteLoading = null;
    });

  return siteVisibilityRemoteLoading;
}

async function guardarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL || !siteVisibilityRemoteFresh) return false;

  try {
    const constituicao = obterConstituicaoVisibilidadeSite().map((item) => ({
      codigoUfcd: UFCD.code,
      ufcd: UFCD.code,
      secao: item.secao,
      chave: obterChaveRemotaSite(item.chave),
      titulo: item.titulo,
      url: item.url || "",
      gammaUrl: item.gammaUrl || item.linkValue || "",
      tipo: item.tipo,
      nivel: item.nivel,
      visivel: item.visivel !== false,
      ordem: item.ordem
    }));
    const dados = new URLSearchParams();
    dados.set("acao", "guardar_visibilidade_site");
    dados.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    dados.set("constituicao", JSON.stringify(constituicao));
    dados.set("visibilidade", JSON.stringify(Object.fromEntries(obterConstituicaoVisibilidadeSite().map((item) => [obterChaveRemotaSite(item.chave), item.visivel !== false]))));

    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: dados
    });
    return true;
  } catch {
    return false;
  }
}

function renderSiteVisibilityControls() {
  const renderOption = (section, item) => {
    const checked = siteVisibility[section][item.key] !== false ? "checked" : "";
    const linkField = item.linkType ? `
      <label class="site-control-link-field">
        <span>${escapeHtml(item.linkLabel || "Link")}</span>
        <input
          type="url"
          value="${escapeHtml(item.linkValue || "")}"
          placeholder="${escapeHtml(item.linkPlaceholder || "https://...")}"
          data-link-control
          data-link-type="${escapeHtml(item.linkType)}"
          ${item.linkKey ? `data-key="${escapeHtml(item.linkKey)}"` : ""}>
      </label>
    ` : "";

    if (linkField) {
      return `
        <div class="site-control-option-container">
          <label class="site-control-option">
            <input type="checkbox" data-visibility-control data-section="${section}" data-key="${escapeHtml(item.key)}" ${checked}>
            <span>${escapeHtml(item.label)}</span>
          </label>
          ${linkField}
        </div>
      `;
    }

    return `
      <label class="site-control-option">
        <input type="checkbox" data-visibility-control data-section="${section}" data-key="${escapeHtml(item.key)}" ${checked}>
        <span>${escapeHtml(item.label)}</span>
      </label>
    `;
  };

  const renderStandaloneLink = (item) => `
    <div class="site-control-option-container site-control-option-section">
      <label class="site-control-option">
        <span>${escapeHtml(item.label)}</span>
      </label>
      <label class="site-control-link-field">
        <span>${escapeHtml(item.linkLabel || "Link")}</span>
        <input
          type="url"
          value="${escapeHtml(item.linkValue || "")}"
          placeholder="${escapeHtml(item.linkPlaceholder || "https://...")}"
          data-link-control
          data-link-type="${escapeHtml(item.linkType)}"
          ${item.linkKey ? `data-key="${escapeHtml(item.linkKey)}"` : ""}>
      </label>
    </div>
  `;

  const renderGroup = (title, section, items, options = {}) => `
    <details class="site-control-group">
      <summary>
        <span>${title}</span>
        <small>${items.length} itens</small>
      </summary>
      ${options.before ? `<div class="site-control-group-body">${options.before}</div>` : ""}
      <div class="site-control-options">
        <label class="site-control-option">
          <input type="checkbox" data-visibility-section="${section}" ${siteVisibilitySections[section] === true ? "checked" : ""}>
          <span>Mostrar secção «${title}»</span>
        </label>
        ${items.map((item) => renderOption(section, item)).join("")}
      </div>
    </details>
  `;

  const contentItems = topics.filter((topic) => topic.showInContents !== false).map((topic) => ({
    key: topic.id,
    label: topic.cardTitle,
    linkType: "gamma",
    linkKey: topic.id,
    linkLabel: "Gamma",
    linkValue: obterGammaUrl(topic),
    linkPlaceholder: "https://...gamma.site/..."
  }));
  const menuItems = mainMenuItems.map((item) => ({ key: item.key, label: item.label }));
  const activityItems = activities.map((activity) => ({ key: activity.id, label: activity.menuTitle || activity.title }));
  const evaluationItems = evaluations.map((evaluation) => ({ key: evaluation.id, label: evaluation.menuTitle || evaluation.title }));
  const resourceItems = resources.map((resource) => ({ key: resource.id, label: resource.title }));
  const powerpointFileItems = resources.flatMap((resource) => [...(resource.videos || []), ...(resource.downloadFiles || [])]).map((file) => ({ key: file.id, label: file.title }));
  const gptItems = resources.filter((resource) => resource.gptUrl).map((resource) => ({ key: resource.id, label: resource.title }));
  const groupItems = groupTasks.map((task) => ({ key: task.title, label: task.title }));
  const glossaryField = renderStandaloneLink({
    label: "Glossário Moodle das tarefas de grupo",
    linkType: "glossary",
    linkLabel: "Glossário",
    linkValue: obterGlossarioUrl(),
    linkPlaceholder: "https://fad.iefp.pt/mod/glossary/view.php?id=..."
  });
  const individualItems = individualTasks.map((task) => ({
    key: task.id,
    label: task.title,
    linkType: "forum",
    linkKey: task.id,
    linkLabel: "Fórum",
    linkValue: obterForumUrl(task),
    linkPlaceholder: "https://fad.iefp.pt/mod/forum/discuss.php?d=..."
  }));
  return `
    <div class="card site-control-card">
      <div class="site-control-heading">
        <div>
          <p class="eyebrow">Disponibilização e ligações</p>
          <h2>Gestão de materiais</h2>
        </div>
        <div>
          <p>Ativa conteúdos/tarefas e associa os links externos usados durante a formação.</p>
        <button class="small-button" type="button" data-action="save-site-visibility" ${siteVisibilityRemoteFresh ? "" : "disabled"}>Guardar na Apps Script</button>
        </div>
      </div>
      <div class="site-control-grid">
        ${renderGroup("Menu principal", "menuPrincipal", menuItems)}
        ${renderGroup("Conteúdos", "conteudos", contentItems)}
        ${renderGroup("Atividades", "atividades", activityItems)}
        ${renderGroup("Avaliação", "avaliacao", evaluationItems)}
        ${renderGroup("Recursos", "recursos", resourceItems)}
        ${renderGroup("Ficheiros PowerPoint", "ficheirosPowerPoint", powerpointFileItems)}
        ${renderGroup("Assistentes GPT", "assistentesGpt", gptItems)}
        ${renderGroup("Tarefas de Grupo", "tarefasGrupo", groupItems, { before: glossaryField })}
        ${renderGroup("Tarefas Individuais", "tarefasIndividuais", individualItems)}
      </div>
      <div class="site-control-actions">
          <button class="small-button" type="button" data-action="save-site-visibility" ${siteVisibilityRemoteFresh ? "" : "disabled"}>Guardar na Apps Script</button>
      </div>
      <p class="teams-control-status" data-site-control-status>Alterações guardadas neste browser.</p>
    </div>
  `;
}

function atualizarControlosVisibilidadeDoSite(root) {
  root.querySelectorAll("[data-visibility-section], [data-visibility-control], [data-link-control]").forEach((input) => {
    input.disabled = !siteVisibilityRemoteFresh;
  });
  root.querySelectorAll("[data-visibility-section]").forEach((input) => {
    input.checked = siteVisibilitySections[input.dataset.visibilitySection] === true;
  });
  root.querySelectorAll('[data-action="save-site-visibility"]').forEach((button) => {
    button.disabled = !siteVisibilityRemoteFresh;
  });
  root.querySelectorAll("[data-visibility-control]").forEach((input) => {
    const section = input.dataset.section;
    const key = input.dataset.key;
    if (section === "tarefasGrupo") {
      const task = obterTarefaGrupoPorChave(key);
      input.checked = task ? tarefaGrupoVisivel(task) : siteVisibility[section]?.[key] !== false;
      return;
    }

    if (section === "tarefasIndividuais") {
      const task = obterTarefaIndividualPorChave(key);
      input.checked = task ? tarefaIndividualVisivel(task) : siteVisibility[section]?.[key] !== false;
      return;
    }

    if (siteVisibility[section] && key in siteVisibility[section]) {
      input.checked = siteVisibility[section][key] !== false;
    }
  });

  root.querySelectorAll("[data-link-control]").forEach((input) => {
    const type = input.dataset.linkType;
    const key = input.dataset.key;
    if (type === "gamma" && key in siteLinks.gammas) {
      input.value = siteLinks.gammas[key] || "";
    } else if (type === "glossary") {
      input.value = siteLinks.glossaryUrl || "";
    } else if (type === "forum" && key) {
      const task = obterTarefaIndividualPorChave(key);
      input.value = task ? obterForumUrl(task) : siteLinks.forums[key] || "";
    }
  });
}

function renderTeamsControl(root, options = {}) {
  const compact = Boolean(options.compact);
  const publicView = Boolean(options.publicView);

  root.innerHTML = `
    <section class="section task-page-section teams-control-section ${compact ? "compact-page-section" : ""}">
      <div class="section-inner">
        <details class="teams-page-accordion" open>
          <summary>
            <span class="teams-accordion-copy">
              <span class="eyebrow">Teams</span>
              <strong>Partilha de ecrã</strong>
              <small>Tabela simples para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.</small>
            </span>
          </summary>

          <div class="teams-accordion-body">
            <div class="teams-control-layout teams-control-layout-simple">
              <article class="card teams-summary-card">
                <p class="eyebrow">Resumo</p>
                <div class="teams-summary-grid">
                  <span><strong data-teams-total>0</strong><em>Total</em></span>
                  <span><strong data-teams-done>0</strong><em>Já partilharam</em></span>
                  <span><strong data-teams-missing>0</strong><em>Ainda sem partilha</em></span>
                </div>
                <p class="teams-config-note" data-teams-config-note></p>
                <p class="teams-control-status" data-teams-status></p>
              </article>
            </div>

            <div class="card teams-table-card">
              <div class="teams-table-heading">
                <div>
                  <p class="eyebrow">Mapa</p>
                  <h2>Formandos</h2>
                </div>
                ${publicView ? "" : `<label class="teams-toggle">
                  <input type="checkbox" data-action="teams-show-inactive">
                  <span>Mostrar desativados</span>
                </label>`}
              </div>
              <div class="teams-table-wrap">
                <table class="teams-control-table ${publicView ? "teams-public-table" : ""}">
                  <thead>
                    <tr>
                      <th>Nome do formando</th>
                      <th>N.º de partilhas</th>
                      <th>ltimo registo</th>
                      ${publicView ? "" : "<th>Estado</th>"}
                      ${publicView ? "" : "<th>Partilhas</th>"}
                    </tr>
                  </thead>
                  <tbody data-teams-table-body>
                    <tr><td colspan="${publicView ? "3" : "5"}">Ainda não existem formandos carregados.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </details>

        ${publicView ? "" : `
          <details class="teams-page-accordion site-control-accordion">
            <summary>
              <span class="teams-accordion-copy">
                <span class="eyebrow">Gestão de materiais</span>
                <strong>Gestão de materiais</strong>
                <small>Disponibiliza conteúdos, tarefas e ligações externas usadas na formação.</small>
              </span>
            </summary>
            <div class="teams-accordion-body">
              ${renderSiteVisibilityControls()}
            </div>
          </details>
        `}
      </div>
    </section>
  `;

  root.dataset.teamsPublicView = publicView ? "true" : "false";
  setupTeamsAccordions(root);
  setupTeamsControl(root);
}

function setupTeamsAccordions(root) {
  const accordions = [...root.querySelectorAll(".teams-page-accordion")];
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) return;
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.open = false;
        }
      });
    });
  });
}

async function setupTeamsControl(root) {
  const status = root.querySelector("[data-teams-status]");
  const configNote = root.querySelector("[data-teams-config-note]");
  const controlStatus = root.querySelector("[data-site-control-status]");

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (configNote) {
      configNote.textContent = "Ligação ao Apps Script ainda não configurada. A página está pronta, mas precisa do URL da Web App para carregar formandos e guardar partilhas.";
    }
    if (status) {
      status.textContent = "Configura o URL da Web App do Apps Script em APPS_SCRIPT_WEB_APP_URL.";
    }
  }

  atualizarControlosVisibilidadeDoSite(root);
  if (controlStatus) controlStatus.textContent = "A carregar visibilidade e ligações do site...";

  root.addEventListener("click", async (event) => {
    const saveVisibilityButton = event.target.closest('[data-action="save-site-visibility"]');
    if (saveVisibilityButton) {
      const controlStatus = root.querySelector("[data-site-control-status]");
      if (!siteVisibilityRemoteFresh) {
        if (controlStatus) controlStatus.textContent = "A configuração central não está disponível; nada foi enviado.";
        return;
      }
      const esperado = new Map(obterConstituicaoVisibilidadeSite().map((item) => [obterChaveRemotaSite(item.chave), item]));
      if (controlStatus) controlStatus.textContent = "A enviar constituição e ligações do site para a Apps Script...";
      const enviado = await guardarVisibilidadeRemotaDoSite();
      if (!enviado) {
        if (controlStatus) controlStatus.textContent = "Não foi possível enviar a configuração. Nada foi confirmado na Sheet.";
        return;
      }
      await aguardar(900);
      let carregado = await carregarVisibilidadeRemotaDoSite({ force: true });
      let remoto = new Map(siteVisibilityRemoteItems.map((item) => [String(item.chave), item]));
      let confirmado = carregado && [...esperado].every(([chave, item]) => remoto.has(chave)
        && normalizarVisivel(remoto.get(chave).visivel) === item.visivel);
      if (!confirmado) {
        await aguardar(1500);
        carregado = await carregarVisibilidadeRemotaDoSite({ force: true });
        remoto = new Map(siteVisibilityRemoteItems.map((item) => [String(item.chave), item]));
        confirmado = carregado && [...esperado].every(([chave, item]) => remoto.has(chave)
          && normalizarVisivel(remoto.get(chave).visivel) === item.visivel);
      }
      atualizarSuperficiesVisiveisDoSite();
      atualizarControlosVisibilidadeDoSite(root);
      if (controlStatus) {
        controlStatus.textContent = confirmado
          ? `Configuração confirmada na Sheet: ${esperado.size} itens da UFCD 0779.`
          : "O pedido foi enviado, mas a gravação não ficou confirmada na Sheet. Verifica antes de continuar.";
      }
      return;
    }

    const button = event.target.closest("[data-teams-action]");
    if (!button) return;
    await registarAcaoPartilhaEcra(root, button.dataset.nome || "", button.dataset.teamsAction || "incrementar");
  });

  root.addEventListener("change", (event) => {
    if (event.target.matches("[data-visibility-section]")) {
      const section = event.target.dataset.visibilitySection;
      if (section in siteVisibilitySections) {
        siteVisibilitySections[section] = event.target.checked;
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
      }
      return;
    }
    if (event.target.matches('[data-action="teams-show-inactive"]')) {
      root.dataset.showInactiveTeams = event.target.checked ? "true" : "false";
      carregarDadosTeams(root);
      return;
    }

    if (event.target.matches("[data-visibility-control]")) {
      const section = event.target.dataset.section;
      const key = event.target.dataset.key;
      if (section === "tarefasGrupo") {
        definirVisibilidadeTarefaGrupo(obterTarefaGrupoPorChave(key), event.target.checked);
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
      } else if (section === "tarefasIndividuais") {
        definirVisibilidadeTarefaIndividual(obterTarefaIndividualPorChave(key), event.target.checked);
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
      } else if (siteVisibility[section] && key in siteVisibility[section]) {
        siteVisibility[section][key] = event.target.checked;
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
      }
    }

    if (event.target.matches("[data-link-control]")) {
      const type = event.target.dataset.linkType;
      const key = event.target.dataset.key;
      const value = event.target.value.trim();
      let controlKey = "";

      if (type === "gamma" && key in siteLinks.gammas) {
        siteLinks.gammas[key] = value;
        controlKey = `conteudo-${key}`;
      } else if (type === "glossary") {
        siteLinks.glossaryUrl = value;
        controlKey = "secao-tarefas-grupo";
      } else if (type === "forum" && key) {
        siteLinks.forums[key] = value;
        const task = obterTarefaIndividualPorChave(key);
        controlKey = task ? `tarefa-individual-${task.id}` : key;
      }

      const controlItem = controlKey ? obterItemControlo(controlKey) : null;
      if (controlItem) {
        controlItem.linkValue = value;
        controlItem.gammaUrl = value;
      }

      const controlStatus = root.querySelector("[data-site-control-status]");
      if (controlStatus) controlStatus.textContent = "Ligação alterada neste ecrã. Usa Guardar para enviar para a Sheet.";
    }
  });

  // Ligar os comandos antes das consultas: os formandos não bloqueiam a gestão do site.
  void carregarDadosTeams(root);
  if (APPS_SCRIPT_WEB_APP_URL) {
    window.setInterval(() => carregarDadosTeams(root), 30000);
  }
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();
  atualizarControlosVisibilidadeDoSite(root);
  if (controlStatus) {
    controlStatus.textContent = visibilidadeRemotaOk
      ? "Visibilidade e ligações carregadas da configuração central."
      : "Não foi possível carregar a configuração central da UFCD 0779. A gravação está bloqueada para evitar alterações incorretas.";
  }
}

async function carregarDadosTeams(root) {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    preencherTabelaTeams(root, [], []);
    atualizarResumoTeams(root, [], []);
    return;
  }

  const status = root.querySelector("[data-teams-status]");

  try {
    const [formandos, registos] = await Promise.all([
      obterJsonAppsScript({ acao: "formandos" }),
      obterJsonAppsScript({ acao: "registos", questionario: "Partilha de ecrã" })
    ]);

    preencherTabelaTeams(root, formandos.formandos || [], registos.registos || []);
    atualizarResumoTeams(root, registos.registos || [], formandos.formandos || []);

    if (status) status.textContent = "Dados carregados.";
  } catch (erro) {
    if (status) status.textContent = "Não foi possível carregar dados do Apps Script.";
  }
}

function preencherTabelaTeams(root, formandos, registos) {
  const tbody = root.querySelector("[data-teams-table-body]");
  if (!tbody) return;

  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const publicView = root.dataset.teamsPublicView === "true";
  const mostrarDesativados = root.dataset.showInactiveTeams === "true";
  const nomesVisiveis = nomes.filter((nome) => mostrarDesativados || estado[nome]?.ativo !== false);
  const colspan = publicView ? 3 : 5;

  if (!nomesVisiveis.length) {
    tbody.innerHTML = `<tr><td colspan="${colspan}">Ainda não existem formandos carregados.</td></tr>`;
    return;
  }

  const maxPartilhas = Math.max(...nomesVisiveis.map((nome) => estado[nome]?.total || 0), 0);

  tbody.innerHTML = nomesVisiveis.map((nome) => {
    const dados = estado[nome] || { total: 0, ultimo: "", ativo: true };
    const ativo = dados.ativo !== false;
    const total = dados.total || 0;
    const percentagem = maxPartilhas > 0 ? Math.max((total / maxPartilhas) * 100, 6) : 0;
    const barClass = total === 0 ? "is-zero" : total === maxPartilhas ? "is-max" : "is-mid";
    return `
    <tr class="${ativo ? "" : "teams-row-inactive"}">
      <td>${escapeHtml(nome)}</td>
      <td>
        <div class="teams-share-meter ${barClass}" style="--share-level: ${percentagem}%">
          <strong>${total > 0 ? total : ""}</strong>
          <span aria-hidden="true"></span>
        </div>
      </td>
      <td>${escapeHtml(formatarDataTeams(dados.ultimo || ""))}</td>
      ${publicView ? "" : `
      <td>
        <div class="teams-state-actions">
          <button class="small-button teams-status-button teams-activate-button" type="button" data-teams-action="ativar" data-nome="${escapeHtml(nome)}" ${ativo ? "disabled" : ""}>Ativar</button>
          <button class="small-button teams-status-button teams-deactivate-button" type="button" data-teams-action="desativar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"}>Desativar</button>
        </div>
      </td>
      `}
      ${publicView ? "" : `<td>
        <div class="teams-actions">
          <button class="small-button teams-count-button teams-plus-button" type="button" data-teams-action="incrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Adicionar partilha de ${escapeHtml(nome)}">+</button>
          <button class="small-button teams-count-button teams-minus-button" type="button" data-teams-action="decrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Remover uma partilha de ${escapeHtml(nome)}">-</button>
        </div>
      </td>`}
    </tr>
  `;
  }).join("");
}

function atualizarResumoTeams(root, registos, formandos = []) {
  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const nomesAtivos = nomes.filter((nome) => estado[nome]?.ativo !== false);
  const apresentaram = nomesAtivos.filter((nome) => (estado[nome]?.total || 0) > 0);

  const total = nomesAtivos.length;
  const done = apresentaram.length;
  const missing = Math.max(total - done, 0);

  const totalEl = root.querySelector("[data-teams-total]");
  const doneEl = root.querySelector("[data-teams-done]");
  const missingEl = root.querySelector("[data-teams-missing]");

  if (totalEl) totalEl.textContent = String(total);
  if (doneEl) doneEl.textContent = String(done);
  if (missingEl) missingEl.textContent = String(missing);
}

function obterNomesTeams(formandos, registos) {
  const nomes = new Set(formandos.filter(Boolean));
  registos.forEach((registo) => {
    if (registo["Nome do formando"]) nomes.add(registo["Nome do formando"]);
  });
  return Array.from(nomes).sort((a, b) => a.localeCompare(b, "pt-PT"));
}

function normalizarAcaoTeams(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function calcularEstadoPartilhaTeams(registos) {
  return registos.reduce((acc, registo) => {
    const nome = registo["Nome do formando"];
    if (!nome) return acc;

    if (!acc[nome]) {
      acc[nome] = { total: 0, ultimo: "", ativo: true };
    }

    const acao = normalizarAcaoTeams(registo["Ação"] || registo.Acao || registo["Acção"] || registo["Partilha de ecrã"]);

    if (acao === "desativar" || acao === "desativado") {
      acc[nome].ativo = false;
    } else if (acao === "ativar" || acao === "ativo") {
      acc[nome].ativo = true;
    } else if (acao === "decrementar" || acao === "remover" || acao === "removida" || acao === "removido" || acao === "nao" || acao === "não" || acao === "-1") {
      acc[nome].total = Math.max((acc[nome].total || 0) - 1, 0);
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    } else if (acao === "" || acao === "sim" || acao === "incrementar" || acao === "+1") {
      acc[nome].total += 1;
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    }

    return acc;
  }, {});
}

async function registarAcaoPartilhaEcra(root, nome, acao) {
  const status = root.querySelector("[data-teams-status]");

  if (!nome) {
    if (status) status.textContent = "Não foi possível identificar o formando.";
    return;
  }

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (status) status.textContent = "Não foi possível guardar: falta configurar o URL do Apps Script.";
    return;
  }

  try {
    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        spreadsheet_id: APPS_SCRIPT_SPREADSHEET_ID,
        questionario: "Partilha de ecrã",
        respostas: {
          "Nome do formando": nome,
          "Data da reunião": new Date().toISOString().slice(0, 10),
          "Partilha de ecrã": obterValorPartilhaTeams(acao),
          "Ação": acao
        }
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });

    if (status) status.textContent = mensagemAcaoPartilhaTeams(nome, acao);
    await aguardar(1200);
    await carregarDadosTeams(root);
  } catch (erro) {
    if (status) status.textContent = "Não foi possível guardar a alteração.";
  }
}

function mensagemAcaoPartilhaTeams(nome, acao) {
  if (acao === "decrementar") return `Foi removida uma partilha de ${nome}.`;
  if (acao === "desativar") return `${nome} foi desativado da lista.`;
  if (acao === "ativar") return `${nome} voltou à lista ativa.`;
  return `Partilha registada para ${nome}.`;
}

function obterValorPartilhaTeams(acao) {
  if (acao === "decrementar") return "Removida";
  if (acao === "desativar") return "Desativar";
  if (acao === "ativar") return "Ativar";
  return "Sim";
}

function formatarDataTeams(valor) {
  const texto = String(valor || "").trim();
  if (!texto) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
    const [ano, mes, dia] = texto.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  const data = new Date(texto);
  if (!Number.isNaN(data.getTime())) {
    return data.toLocaleDateString("pt-PT");
  }

  return texto.split("T")[0] || texto;
}

function aguardar(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function obterJsonAppsScript(params, options = {}) {
  const url = new URL(APPS_SCRIPT_WEB_APP_URL);
  if (APPS_SCRIPT_SPREADSHEET_ID) {
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
  }
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });
  url.searchParams.set("_", String(Date.now()));
  return obterJsonp(url.toString(), options.timeoutMs);
}

function obterJsonp(url, timeoutMs = 30000) {
  return new Promise((resolve, reject) => {
    const callbackName = `ufcd0778Callback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const separator = url.includes("?") ? "&" : "?";
    const timeoutId = window.setTimeout(() => {
      delete window[callbackName];
      script.remove();
      reject(new Error("Tempo excedido ao carregar dados do Apps Script."));
    }, timeoutMs);

    window[callbackName] = (dados) => {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
      resolve(dados);
    };

    script.onerror = () => {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
      reject(new Error("Não foi possível carregar dados do Apps Script."));
    };

    script.src = `${url}${separator}callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getGammaEmbedUrl(url) {
  if (!url) return "";
  if (!url.includes("gamma.app/docs/")) return url;
  const id = url.split("-").pop();
  return `https://gamma.app/embed/${id}`;
}

function renderGammaContentPage(root, topic, embedUrl) {
  const frameUrl = getGammaEmbedUrl(embedUrl);
  document.body.classList.add("gamma-view");
  root.innerHTML = `
    <section class="gamma-section content-gamma-full" aria-label="${escapeHtml(topic.cardTitle || topic.title)}">
      <iframe
        class="external-frame full-page-frame gamma-content-frame"
        src="${escapeHtml(frameUrl)}"
        title="${escapeHtml(topic.cardTitle || topic.title)}"
        loading="lazy"
        allow="fullscreen"
        allowfullscreen>
      </iframe>
    </section>
  `;
}

function mostrarEstadoVisibilidade(root, tipo = "Conteúdo", section = "", key = "") {
  const ocultoPorDefeito = siteVisibilitySections[section] === false || siteVisibility[section]?.[key] === false;
  const mensagem = !siteVisibilityRemoteAttempted
    ? ocultoPorDefeito ? `${tipo} em preparação` : "A carregar a página…"
    : !siteVisibilityRemoteReady
      ? "Não foi possível confirmar a disponibilidade. Atualiza a página para tentar novamente."
      : `${tipo} não disponível`;
  root.innerHTML = `<section class="section task-page-section"><div class="section-inner"><h1>${mensagem}</h1></div></section>`;
}

function renderTopicPage() {
  const root = document.getElementById("topic-root");
  if (!root) return;

  const topic = topicById(document.body.dataset.topic) || topics[0];
  if (!isItemVisible("conteudos", topic.id)) {
    mostrarEstadoVisibilidade(root, "Conteúdo", "conteudos", topic.id);
    return;
  }
  const gammaUrl = obterGammaUrl(topic);
  const gammaDisponivel = Boolean(gammaUrl && isItemVisible("conteudos", topic.id));
  document.body.classList.toggle("gamma-view", gammaDisponivel);
  document.title = `UFCD 0778 | ${topic.title}`;
  document.querySelectorAll("#submenu-conteudos a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(topic.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (gammaDisponivel) {
    renderGammaContentPage(root, topic, gammaUrl);
    return;
  }

  const topicItems = Array.isArray(topic.items) && topic.items.length
    ? `
          <article class="card">
            <h2>Subconteúdos</h2>
            <ul class="clean-list">
              ${topic.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
    `
    : "";
  const lesson = contentLessons[topic.id];
  const lessonSections = lesson?.sections?.map((section, index) => `
          <article class="card">
            <p class="eyebrow">${String(index + 1).padStart(2, "0")}</p>
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.text)}</p>
            ${section.points?.length ? `
              <ul class="clean-list">
                ${section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
              </ul>
            ` : ""}
          </article>
  `).join("") || "";

  root.innerHTML = `
    <section class="hero content-hero no-image-hero compact-content-hero">
      <div class="hero-content">
        <h1>${topic.cardTitle}</h1>
        <p>${topic.intro}</p>
      </div>
    </section>

    <section class="section content-page-section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          ${topicItems}
          ${lesson ? `
            <article class="card">
              <p class="eyebrow">Enquadramento</p>
              <h2>O essencial</h2>
              <p>${escapeHtml(lesson.summary)}</p>
            </article>
            ${lessonSections}
          ` : `
            <article class="card">
              <h2>Enquadramento</h2>
              <p>${escapeHtml(topic.intro)}</p>
            </article>
          `}
          <article class="card activity-card">
            <p class="eyebrow">Atividade</p>
            <h2>Experimenta</h2>
            <p>${escapeHtml(lesson?.practice || "Aplica este conteúdo no ficheiro de trabalho e confirma o resultado.")}</p>
          </article>
          <article class="card">
            <p class="eyebrow">Síntese</p>
            <h2>Antes de avançar</h2>
            <p>Confirma se consegues identificar os comandos utilizados, explicar a sua finalidade e repetir o procedimento no teu ficheiro sem depender do exemplo.</p>
          </article>
        </div>
        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            ${topic.items?.length ? "<li>Subconteúdos</li>" : ""}
            <li>O essencial</li>
            ${lesson?.sections?.map((section) => `<li>${escapeHtml(section.title)}</li>`).join("") || ""}
            <li>Atividade</li>
            <li>Síntese</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderGroupTasks0779(root) {
  const dias = groupTasks.filter((task) => tarefaGrupoVisivel(task));
  root.innerHTML = `
    <section class="section task-page-section"><div class="section-inner">
      <div class="section-heading task-page-heading">
        <p class="eyebrow">Ação 26109 · UFCD 0779</p>
        <h1>Tarefas de Grupo — Glossário Colaborativo</h1>
        <p class="lead">Ao longo dos cinco dias, cada grupo contribui com um conceito diferente relacionado com apresentações gráficas.</p>
      </div>
      <article class="card activity-card">
        <h2>Como realizar a tarefa</h2>
        <p>Para o conceito atribuído ao grupo, registem o <strong>termo ou expressão</strong>, a <strong>definição</strong>, <strong>para que serve</strong> e um <strong>exemplo de utilização no PowerPoint</strong>.</p>
        <p>O glossário é desenvolvido ao longo dos cinco dias, com um conceito diferente por grupo em cada dia.</p>
        ${obterGlossarioUrl() ? `<div class="task-single-action"><a class="small-button orange" href="${escapeHtml(obterGlossarioUrl())}">Abrir glossário no Moodle</a></div>` : ""}
      </article>
      <div class="task-module-list">
        ${dias.map((task) => `
          <details class="task-module-card" ${task.day === 1 ? "open" : ""}>
            <summary><span class="task-module-copy"><strong>${escapeHtml(task.title)}</strong><small>Cinco conceitos — um por grupo</small></span><span class="task-module-mark" aria-hidden="true">${task.day}</span></summary>
            <div class="task-module-body">
              <div class="task-block"><strong>Conceitos atribuídos</strong>
                <div class="word-list">${task.words.map(([word, group]) => `<span><strong>${escapeHtml(group)}</strong> ${escapeHtml(word)}</span>`).join("")}</div>
              </div>
              <p><strong>Contributo de cada grupo:</strong> indicar o conceito, defini-lo, explicar a sua finalidade numa apresentação e dar um exemplo de utilização no PowerPoint.</p>
            </div>
          </details>`).join("") || '<p>Os conceitos de cada dia serão disponibilizados pela formadora.</p>'}
      </div>
    </div></section>`;
}

function renderIndividualTasks0779(root) {
  const tarefas = individualTasks.filter((task) => tarefaIndividualVisivel(task));
  root.innerHTML = `
    <section class="section task-page-section"><div class="section-inner">
      <div class="section-heading task-page-heading">
        <p class="eyebrow">Ação 26109 · UFCD 0779</p>
        <h1>Tarefas Individuais</h1>
        <p class="lead">Crie apresentações no PowerPoint e utilize os trabalhos produzidos para construir e enriquecer o seu e-portfólio.</p>
        <p>Os tópicos das TI estão no Moodle do IEFP. Se ainda não tiver uma sessão iniciada, o Moodle pedirá o login antes de apresentar o tópico, desde que tenha acesso à disciplina.</p>
      </div>
      <details class="task-overview-card" open>
        <summary><span class="task-module-copy"><strong>Organização das evidências e partilha</strong><small>A Drive de cada formando é o local de referência para os ficheiros do projeto.</small></span><span class="task-module-mark" aria-hidden="true">TI</span></summary>
        <div class="task-module-body">
          <ul class="moodle-like-list">
            <li>Guarde na sua própria Drive uma cópia de todas as evidências que pretende usar no e-portfólio, mesmo que já as tenha entregue à formadora.</li>
            <li>Crie ou identifique a pasta do projeto do e-portfólio da Ação 26109 e mantenha aí os ficheiros do projeto.</li>
            <li>Partilhe essa pasta com a formadora; não é necessário partilhar cada evidência individualmente, salvo indicação em contrário.</li>
          </ul>
          <div class="task-single-action"><a class="small-button orange" href="${getBasePath()}e-portfolio.html">Abrir página do e-portfólio</a></div>
        </div>
      </details>
      <div class="task-module-list individual-task-list">
        ${tarefas.map((task, index) => `
          <details class="task-module-card individual-task-card" ${index === 0 ? "open" : ""}>
            <summary><span class="task-module-copy"><strong>${escapeHtml(task.title)}</strong><small>${escapeHtml(task.objective)}</small></span><span class="task-module-mark" aria-hidden="true">${escapeHtml(task.code)}</span></summary>
            <div class="task-module-body">
              <div class="task-block"><strong>Objetivo</strong><p>${escapeHtml(task.objective)}</p></div>
              <div class="task-block"><strong>O que fazer</strong><ol class="moodle-like-list">${task.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol></div>
              ${task.outcome?.length ? `<div class="task-block"><strong>No final</strong><ul class="moodle-like-list">${task.outcome.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>` : ""}
              ${task.note ? `<aside class="task-note-box"><strong>Atenção</strong><p>${escapeHtml(task.note)}</p></aside>` : ""}
              <div class="embed-fallback resource-action-row align-right">
                <a class="small-button orange" href="${getBasePath()}${escapeHtml(task.pdfUrl)}">Abrir PDF da ${escapeHtml(task.code)}</a>
                ${obterForumUrl(task) ? `<a class="small-button moodle-button" href="${escapeHtml(obterForumUrl(task))}">Abrir tópico no Moodle</a>` : ""}
              </div>
            </div>
          </details>`).join("") || '<p>As tarefas serão disponibilizadas pela formadora.</p>'}
      </div>
    </div></section>`;
}

function renderActivityPage() {
  const root = document.getElementById("activity-root") || document.getElementById("evaluation-root");
  if (!root) return;

  const evaluationIds = {
    diagnostica: "avaliacao-diagnostica",
    "resultados-diagnostica": "resultados-diagnostica",
    sumativa: "avaliacao-sumativa",
    "entre-pares": "avaliacao-entre-pares",
    "autoavaliacao-final": "autoavaliacao-final",
    formacao: "avaliacao-formacao"
  };
  const activityId = document.body.dataset.activity;
  const evaluationId = evaluationIds[document.body.dataset.evaluation] || document.body.dataset.evaluation;
  const activity = activities.find((item) => item.id === activityId)
    || evaluations.find((item) => item.id === activityId)
    || evaluations.find((item) => item.id === evaluationId)
    || activities[0];
  const isEvaluation = evaluations.some((item) => item.id === activity.id);
  document.title = `UFCD 0779 | ${activity.title}`;

  if (!isItemVisible(isEvaluation ? "avaliacao" : "atividades", activity.id)) {
    mostrarEstadoVisibilidade(root, isEvaluation ? "Avaliação" : "Atividade", isEvaluation ? "avaliacao" : "atividades", activity.id);
    return;
  }

  const activeSubmenu = document.getElementById(isEvaluation ? "submenu-avaliacao" : "submenu-atividades");
  activeSubmenu?.querySelectorAll("a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(activity.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (activity.id === "controlo-teams") {
    renderTeamsControl(root, {
      compact: document.body.dataset.depth === "embed",
      publicView: document.body.dataset.depth !== "embed"
    });
    return;
  }

  if (activity.id === "tarefas-grupo") {
    renderGroupTasks0779(root);
    return;
  }
  if (activity.id === "tarefas-individuais") {
    renderIndividualTasks0779(root);
    return;
  }

  if (activity.id === "projeto-final-apresentacao") {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <h1>${activity.title}</h1>
            <p class="lead">Esta atividade da UFCD 0779 está em preparação.</p>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "resultados-diagnostica") {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <h1>Resultados da Avaliação Diagnóstica</h1>
            <p class="lead">Os resultados da UFCD 0779 serão apresentados aqui quando estiverem disponíveis.</p>
          </div>
        </div>
      </section>
    `;
    return;
    const strengths = [
      "Finalidade de uma folha de cálculo",
      "Diferença entre livro e folha",
      "Função MÉDIA",
      "Preparação para impressão",
      "Criação de gráficos"
    ];
    const reinforcementTopics = [
      ["Referências relativas, absolutas e mistas", "Uma das áreas com mais respostas incorretas."],
      ["CONTAR e CONTARA", "É necessário distinguir números de células preenchidas."],
      ["Alça de preenchimento e séries", "A ferramenta ainda não é reconhecida por todos."],
      ["Formatação numérica e moeda", "Importa distinguir formato e valor da célula."],
      ["Filtros e ordenação", "As bases existem, mas precisam de aplicação prática."],
      ["Agrupamento de objetos", "Tema ainda pouco seguro para parte da turma."]
    ];
    const expectations = [
      ["Ganhar autonomia", "Realizar tarefas correntes no Excel com menos apoio e maior segurança."],
      ["Dominar fórmulas", "Compreender operadores, referências e funções para obter resultados corretos."],
      ["Organizar dados", "Criar tabelas claras, ordenar, filtrar e validar informação de forma eficiente."],
      ["Analisar e comunicar", "Transformar dados em gráficos e resumos úteis para situações reais."],
      ["Trabalhar com rigor", "Confirmar cálculos, formatos e impressão antes de partilhar um ficheiro."]
    ];

    root.innerHTML = `
      <section class="section diagnostic-report">
        <div class="section-inner">
          <article class="card report-hero-card">
            <p class="eyebrow">Avaliação diagnóstica · UFCD 0778</p>
            <h1>Resultados da turma</h1>
            <p class="lead">Esta avaliação identifica o ponto de partida da turma em folha de cálculo. Não tem caráter classificativo: orienta os conteúdos, o ritmo e os exercícios a desenvolver ao longo da formação.</p>
          </article>

          <div class="report-metric-grid" aria-label="Indicadores globais">
            <article class="card report-metric-card"><span>Respostas</span><strong>13</strong><small>registadas</small></article>
            <article class="card report-metric-card"><span>Formandos</span><strong>14</strong><small>esperados na análise</small></article>
            <article class="card report-metric-card"><span>Participação</span><strong>93%</strong><small>taxa de resposta efetiva</small></article>
            <article class="card report-metric-card"><span>Autoperceção</span><strong>3,21</strong><small>média numa escala de 1 a 5</small></article>
          </div>

          <div class="diagnostic-chart-grid" aria-label="Gráficos dos resultados globais">
            <article class="card diagnostic-chart-card">
              <div>
                <p class="eyebrow">Participação</p>
                <h2>13 de 14 respostas</h2>
                <p>Uma participação muito elevada permite obter uma leitura representativa do ponto de partida da turma.</p>
              </div>
              <div class="diagnostic-donut" style="--chart-value: 93" role="img" aria-label="Taxa de participação: 93 por cento">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle class="donut-track" cx="60" cy="60" r="48"></circle>
                  <circle class="donut-value" cx="60" cy="60" r="48" pathLength="100"></circle>
                </svg>
                <span><strong>93%</strong><small>participação</small></span>
              </div>
            </article>

            <article class="card diagnostic-chart-card">
              <div>
                <p class="eyebrow">Autonomia percebida</p>
                <h2>3,21 numa escala de 1 a 5</h2>
                <p>A turma situa-se numa zona intermédia: já possui bases, mas espera ganhar confiança e trabalhar com menos ajuda.</p>
              </div>
              <div class="diagnostic-donut autonomy-chart" style="--chart-value: 64.2" role="img" aria-label="Autoperceção média: 3,21 em 5, equivalente a 64,2 por cento da escala">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle class="donut-track" cx="60" cy="60" r="48"></circle>
                  <circle class="donut-value" cx="60" cy="60" r="48" pathLength="100"></circle>
                </svg>
                <span><strong>3,21</strong><small>em 5</small></span>
              </div>
            </article>
          </div>

          <article class="card diagnostic-theme-chart">
            <div class="diagnostic-theme-heading">
              <div><p class="eyebrow">Mapa dos temas</p><h2>Onde estão as bases e as prioridades</h2></div>
              <p>Contagem das áreas destacadas no relatório — não representa uma classificação.</p>
            </div>
            <div class="theme-chart-row">
              <span>Bases identificadas</span>
              <div class="theme-chart-track"><i class="theme-chart-positive" style="--bar-value: 83.33%"></i></div>
              <strong>5 temas</strong>
            </div>
            <div class="theme-chart-row">
              <span>A reforçar</span>
              <div class="theme-chart-track"><i class="theme-chart-priority" style="--bar-value: 100%"></i></div>
              <strong>6 temas</strong>
            </div>
          </article>

          <article class="card report-section-card">
            <p class="eyebrow">Leitura global</p>
            <h2>Bases úteis, com necessidade de consolidação prática</h2>
            <p>A turma não parte do zero e revela conhecimentos iniciais positivos. A média de autoperceção de <strong>3,21 em 5</strong> indica que, em geral, os formandos conseguem realizar várias tarefas com alguma ajuda, mas ainda não com total autonomia e segurança.</p>
            <p>Existem níveis diferentes de experiência. Alguns formandos poderão avançar com maior autonomia; outros beneficiarão de demonstrações passo a passo, exercícios orientados e validação frequente dos resultados.</p>
          </article>

          <div class="report-two-columns">
            <article class="card report-section-card">
              <p class="eyebrow">Pontos fortes</p>
              <h2>Conhecimentos já presentes</h2>
              <div class="report-tag-list">
                ${strengths.map((item) => `<span>${item}</span>`).join("")}
              </div>
              <p>Muitos formandos já compreendem o papel da folha de cálculo no tratamento e apresentação de dados.</p>
            </article>

            <article class="card report-section-card">
              <p class="eyebrow">Prioridades</p>
              <h2>Temas a reforçar</h2>
              <ul class="clean-list task-prompt-list">
                ${reinforcementTopics.map(([topic, reason]) => `<li><strong>${topic}:</strong> ${reason}</li>`).join("")}
              </ul>
            </article>
          </div>

          <article class="card expectations-summary">
            <div class="expectations-intro">
              <p class="eyebrow">Resumo das expectativas</p>
              <h2>O que a turma procura alcançar</h2>
              <p>A leitura conjunta das respostas técnicas e da autoperceção aponta para uma expectativa central: passar de conhecimentos dispersos para uma utilização mais autónoma, segura e aplicada do Excel.</p>
            </div>
            <div class="expectations-grid">
              ${expectations.map(([title, text], index) => `
                <div class="expectation-item">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <div><strong>${title}</strong><p>${text}</p></div>
                </div>
              `).join("")}
            </div>
          </article>

          <article class="card report-callout report-section-card">
            <p class="eyebrow">Mensagem à turma</p>
            <h2>Um ponto de partida, não uma classificação</h2>
            <p>As dificuldades identificadas são normais numa fase inicial e serão trabalhadas com exercícios práticos, exemplos guiados e momentos de revisão. O mais importante é praticar regularmente, confirmar os resultados e ganhar confiança na resolução de tarefas reais.</p>
          </article>

        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "projeto-final-apresentacao") {
    const projectColumns = [
      ["Estrutura do livro", "Folha de apresentação, base de dados organizada como tabela e folhas de cálculo, análise e síntese claramente identificadas."],
      ["Cálculos e controlo", "Fórmulas, referências, funções, validação de dados e tratamento de erros adequados ao tema escolhido."],
      ["Análise e apresentação", "Ordenação, filtros, tabela dinâmica, gráfico dinâmico, segmentação de dados e preparação das folhas para impressão."],
      ["Revisão e entrega", "Revisão entre pares, melhorias justificadas, reflexão individual, apresentação breve e entrega dos ficheiros XLSX e PDF."]
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Projeto Final</p>
            <h1>Solução em Folha de Cálculo</h1>
            <p class="lead">Construir progressivamente um livro de cálculo funcional, claro e tecnicamente consistente, iniciado na TI08, desenvolvido nas TI09 e TI10, revisto na TI11 e concluído na TI12.</p>
          </div>

          <div class="activity-meta-grid">
            <article class="card activity-meta-card">
              <p class="eyebrow">Tema</p>
              <h3>Solução em Folha de Cálculo</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Extensão</p>
              <h3>estrutura e conteúdos definidos no enunciado</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Limite total</p>
              <h3>verificação global do livro</h3>
            </article>
          </div>

          <article class="card activity-card">
            <p class="eyebrow">Objetivo</p>
            <h2>Finalizar e apresentar um livro de cálculo funcional</h2>
            <p>O projeto final aplica as competências trabalhadas na UFCD: organização de dados, formatação, fórmulas, referências, funções, validação, ordenação, filtros, análise dinâmica, gráficos e preparação para impressão.</p>
            <p>A versão final deve existir em XLSX e PDF, com nomenclatura correta e ligação de leitura testada antes da publicação no Moodle.</p>
            <div class="presentation-strip">
              <span>Excel</span>
              <span>Livro funcional</span>
              <span>Revisão</span>
              <span>Análise de dados</span>
              <span>PDF</span>
              <span>Apresentação</span>
            </div>
          </article>

          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Enunciado final</strong>
                <small>Requisitos que orientam o desenvolvimento progressivo entre a TI08 e a TI12.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">PF</span>
            </summary>
            <div class="task-module-body">
              <ul class="moodle-like-list">
                <li>Folha inicial de apresentação do projeto, com título, identificação e explicação breve do objetivo do livro.</li>
                <li>Base de dados organizada e formatada como tabela, com campos coerentes e dados adequados ao tema escolhido.</li>
                <li>Fórmulas e funções com utilidade real, referências corretas, validação de dados e tratamento de erros quando aplicável.</li>
                <li>Ordenação, filtros e análise através de tabela dinâmica, gráfico dinâmico e segmentação de dados.</li>
                <li>Formatação consistente, gráficos legíveis e folhas preparadas para impressão e exportação para PDF.</li>
                <li>Revisão entre pares, reflexão individual final e apresentação individual até 5 minutos.</li>
              </ul>
              <div class="embed-fallback resource-action-row align-right">
                <span class="task-link-pending">Base de projeto da UFCD 0779 em preparação.</span>

              </div>
            </div>
          </details>

          <div class="task-module-list">
            ${projectColumns.map(([title, text], index) => `
              <details class="task-module-card" ${index === 0 ? "open" : ""}>
                <summary>
                  <span class="task-module-copy">
                    <strong>${title}</strong>
                    <small>${text}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">${index + 1}</span>
                </summary>
                <div class="task-module-body">
                  <p>${text}</p>
                </div>
              </details>
            `).join("")}
          </div>

          <div class="activity-output-grid">
            <article class="card">
              <p class="eyebrow">Entrega</p>
              <h3>Ficheiros finais</h3>
              <ul class="clean-list task-prompt-list">
                <li><strong>XLSX:</strong> 2026-MM_Projeto_Final_PrimeiroNome.xlsx</li>
                <li><strong>PDF:</strong> 2026-MM_Projeto_Final_PrimeiroNome.pdf</li>
                <li>Ambos guardados na pasta «Tarefas individuais» do computador e na Drive.</li>
                <li>PDF partilhado como «Qualquer pessoa com a ligação» e «Leitor».</li>
              </ul>
            </article>

            <article class="card">
              <p class="eyebrow">Moodle</p>
              <h3>Publicação final</h3>
              <p>Publicar a ligação de leitura para o PDF final, confirmar que foi testada sem sessão iniciada e registar as principais decisões relativas ao feedback recebido.</p>
            </article>
          </div>

          <article class="card activity-card">
            <p class="eyebrow">Verificação final</p>
            <h2>Confirmar antes de concluir</h2>
            <ul class="clean-list task-prompt-list">
              <li>Feedback entre pares analisado e correções pertinentes aplicadas.</li>
              <li>Fórmulas, referências, funções e validações testadas sem erros inesperados.</li>
              <li>Base de dados, tabelas dinâmicas, gráficos, filtros e segmentações atualizados.</li>
              <li>Formatação, legibilidade, acessibilidade e configuração de impressão verificadas.</li>
              <li>Reflexão final concluída e apresentação até 5 minutos preparada.</li>
              <li>XLSX e PDF abertos, verificados e guardados com a nomenclatura correta.</li>
            </ul>
          </article>

          <div class="embed-fallback resource-action-row align-right project-alternatives-link">
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-grupo") {
    const overviewItems = [
          "Usar o ficheiro prático indicado em cada tarefa e guardar o resultado na pasta definida.",
          "Respeitar rigorosamente o nome indicado em cada enunciado e utilizar apenas o primeiro nome.",
          "Guardar os ficheiros na estrutura definida pela formadora, mantendo a organização entre computador e Google Drive.",
          "Efetuar no Moodle o registo específico solicitado em cada tarefa.",
          "Confirmar, antes de concluir, se o ficheiro está completo, legível e funcional."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card">
            <summary>
              <span class="task-module-copy">
                <strong>Glossário colaborativo</strong>
                <small>Todos os dias se acrescentam novos termos, definições e exemplos para construir uma base comum de vocabulário técnico.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TG</span>
            </summary>
            <div class="task-module-body">
              <p>Nesta atividade vamos construir um glossário colaborativo ao longo da UFCD 0778, com início no segundo dia.</p>
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>

            </div>
          </details>

          <div class="task-module-list">
            ${groupTasks.filter((task) => tarefaGrupoVisivel(task)).map((task, index) => `
              <details class="task-module-card">
                <summary>
                  <span class="task-module-copy">
                    <strong>${task.title || task.topic}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">TG ${index + 1}</span>
                </summary>

                <div class="task-module-body">
                  <p>Tema associado: ${task.topic}.</p>
                  <p><strong>Instruções:</strong> cada grupo trabalha a palavra atribuída, escreve uma definição clara por palavras próprias, acrescenta um exemplo ligado ao folha de cálculo e revê a entrada antes da publicação.</p>
                  <p><strong>Evidência:</strong> entrada publicada no Glossário do Moodle com palavra, definição, exemplo e identificação do grupo.</p>
                  <p><strong>Publicação:</strong> Glossário do Moodle.</p>

                  <div class="task-block">
                    <strong>Palavras a trabalhar</strong>
                    <div class="word-list">
                      ${task.words.map(([word, group]) => `<span><strong>${word}</strong> ${group}</span>`).join("")}
                    </div>
                  </div>

                  <div class="embed-fallback resource-action-row align-right">
                    ${obterGlossarioUrl() ? `<a class="small-button orange" href="${obterGlossarioUrl()}" target="_top">Abrir glossário</a>` : `<span class="task-link-pending">Ligação ao Glossário a disponibilizar.</span>`}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-individuais") {
    const renderList = (items = [], className = "clean-list task-prompt-list") =>
      items.length ? `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";

    const getEssentialSteps = (task) => (task.steps || []).map((part) => {
      const instruction = part.text || part.items?.[0] || "Realiza o procedimento indicado no PDF da tarefa.";
      return `<strong>${part.title}:</strong> ${instruction}`;
    });
    const getTaskPdfUrl = (task) => task.pdfUrl ? `${getBasePath()}${task.pdfUrl}` : "";

    const renderTaskPdfButton = (task, label = "Ver instruções  PDF") => task.pdfUrl
      ? `<button class="small-button" type="button" data-modal-open="pdf-${task.id}">${label}</button>`
      : `<span class="task-link-pending">PDF brevemente disponível</span>`;

    const renderTaskPdfModal = (task) => {
      const pdfUrl = getTaskPdfUrl(task);
      return pdfUrl ? `
        <div class="modal-backdrop task-pdf-modal-backdrop" id="pdf-${task.id}" hidden>
          <div class="modal task-pdf-modal" role="dialog" aria-modal="true" aria-labelledby="pdf-${task.id}-title">
            <div class="task-pdf-modal-header">
              <h2 id="pdf-${task.id}-title">${task.title}</h2>
              <button class="modal-close task-pdf-close" type="button" data-modal-close aria-label="Fechar janela">&times;</button>
            </div>
            <div class="task-pdf-fallback" role="note">
              <strong>PDF da tarefa</strong>
              <p>Alguns browsers bloqueiam leitores PDF embutidos quando o site está dentro do Google Sites. Usa o botão abaixo para abrir o ficheiro na mesma janela.</p>
            </div>
            <div class="modal-actions">
              <a class="small-button orange" href="${pdfUrl}" target="_top">Abrir PDF</a>
            </div>
          </div>
        </div>
      ` : "";
    };

    const renderForumButtons = (task) => {
      const url = obterForumUrl(task);
      if (!url) return `<span class="task-link-pending">Liga\u00e7\u00e3o a confirmar pela formadora.</span>`;
      return `<a class="small-button moodle-button" href="${url}" target="_top">Abrir tarefa no Moodle</a>`;
    };




    const renderTaskFiles = (task) => {
      const files = (task.workFiles || []).filter((file) => file.excelUrl || file.available !== false);
      return files.map((file) => {
        const label = `${file.number ? `${file.number}  ` : ""}${file.title}`;
        return file.available && file.excelUrl && !file.excelUrl.startsWith("assets/ficheiros/Excel/")
          ? `<a class="small-button" href="${getBasePath()}${file.excelUrl}" target="_top" download>Descarregar ${label}</a>`
          : `<span class="task-link-pending">${label}: ficheiro brevemente disponível</span>`;
      }).join("");
    };

    const renderSimplifiedTask = (task) => `
      <div class="detailed-task-content simplified-task-content">
        <div class="task-block">
          <strong>Objetivo</strong>
          <p>${task.objective}</p>
        </div>

        <div class="task-block">
          <strong>O que fazer</strong>
          ${renderList(getEssentialSteps(task))}
        </div>

        ${task.moodleRecord ? `
          <div class="task-block task-moodle-record">
            <strong>Registo no Moodle</strong>
            <p>${task.moodleRecord}</p>
          </div>
        ` : ""}

        <aside class="task-note-box">
          <strong>Instruções completas</strong>
          <p>Consulta o PDF da tarefa para veres todos os passos, exemplos, ficheiros e critérios de verificação.</p>
        </aside>

        <div class="embed-fallback resource-action-row align-right">
          ${renderTaskPdfButton(task, "Abrir PDF da TI")}
          ${renderTaskFiles(task)}
          ${renderForumButtons(task)}
        </div>

        ${renderTaskPdfModal(task)}

      </div>
    `;

    const overviewItems = [
          "Usar o ficheiro prático indicado em cada tarefa e guardar o resultado na pasta definida.",
          "Respeitar rigorosamente o nome indicado em cada enunciado e utilizar apenas o primeiro nome.",
          "Guardar os ficheiros na estrutura definida pela formadora, mantendo a organização entre computador e Google Drive.",
          "Efetuar no Moodle o registo específico solicitado em cada tarefa.",
          "Confirmar, antes de concluir, se o ficheiro está completo, legível e funcional."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>Tarefas Individuais</h1>
            <p class="lead">Atividades práticas realizadas no Excel e organizadas na pasta partilhada da Google Drive.</p>
          </div>

          <details class="task-overview-card" open>
            <summary>
              <span class="task-module-copy">
                <strong>Como realizar as Tarefas Individuais</strong>
                <small>O site apresenta um resumo; as instruções completas de cada tarefa são disponibilizadas em PDF.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TI</span>
            </summary>
            <div class="task-module-body">
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
              <div class="embed-fallback resource-action-row align-right">
                <a class="small-button" href="${getBasePath()}assets/pdfs/TI00.pdf" target="_top">Abrir instruções gerais — TI00</a>
              </div>
            </div>
          </details>

          <div class="task-module-list individual-task-list">
            ${individualTasks.filter((task) => tarefaIndividualVisivel(task)).map((task, index) => `
              <details class="task-module-card individual-task-card" ${index === 0 ? "" : ""}>
                <summary>
                  <span class="task-module-copy">
                    <strong>${task.title}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">TI ${index + 1}</span>
                </summary>

                <div class="task-module-body">
                  ${task.locked ? `
                    <aside class="task-note-box locked-task-note">
                      <strong>Tarefa já realizada</strong>
                      <p>O conteúdo da TI 1 foi preservado e não deve ser alterado.</p>
                    </aside>
                    <div class="task-block">
                      <strong>Orientações</strong>
                      ${renderList(task.prompts)}
                    </div>
                    <div class="task-block">
                      <strong>Evidência</strong>
                      <p>${task.evidence}</p>
                    </div>
                    <div class="embed-fallback resource-action-row align-right">
                      ${renderTaskPdfButton(task)}
                      ${renderForumButtons(task)}
                    </div>
                    ${renderTaskPdfModal(task)}
                  ` : renderSimplifiedTask(task)}
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (!isEvaluation) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
          </div>

          <div class="activity-meta-grid">
            <article class="card activity-meta-card">
              <p class="eyebrow">Foco</p>
              <h3>${activity.focus}</h3>
            </article>
            ${activity.duration ? `<article class="card activity-meta-card">
              <p class="eyebrow">Duração</p>
              <h3>${activity.duration}</h3>
            </article>` : ""}
          </div>

          <details class="card group-task-card task-details-card">
            <summary>
              <span>
                <h3>${activity.id === "mentimeter-inicial" ? "Pergunta" : "Etapas da atividade"}</h3>
                <p>${activity.id === "mentimeter-inicial" ? activity.intro : "Consulta a sequência proposta para esta atividade diária."}</p>
              </span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </summary>
            <ol class="agenda-list">
              ${activity.steps.map((step) => `
                <li><strong>${step.title}</strong><span>${step.text}</span></li>
              `).join("")}
            </ol>
          </details>

          <div class="activity-output-grid">
            <article class="card activity-card">
              <p class="eyebrow">Produto esperado</p>
              <h3>Resultado da atividade</h3>
              <p>${activity.product}</p>
            </article>

            <article class="card">
              <p class="eyebrow">Evidências</p>
              <h3>Registos a guardar</h3>
              <ul class="clean-list">
                ${activity.evidence.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          </div>

          ${activity.mentimeterUrl ? `
            <section class="embedded-page-shell mentimeter-embed-block" aria-label="Mentimeter - ${activity.title}">
              <div class="embed-fallback">
                <a class="small-button" href="${activity.mentimeterUrl}">Abrir apresentação</a>
                ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Participar</a>` : ""}
                ${activity.qrCode ? `<button class="small-button" type="button" data-modal-open="mentimeter-qr-modal">Mostrar QR Code</button>` : ""}
              </div>
              <p class="resource-preview-note">Se a apresentação não aparecer na pré-visualização local, usa «Abrir apresentação» numa nova aba.</p>
              <div class="mentimeter-frame-wrap">
                <iframe
                  class="mentimeter-frame"
                  sandbox="allow-popups allow-scripts allow-same-origin allow-presentation"
                  allowfullscreen="true"
                  allowtransparency="true"
                  frameborder="0"
                  src="${activity.mentimeterUrl}"
                  title="Mentimeter — atividade inicial UFCD 0779"></iframe>
              </div>
              ${activity.qrCode ? `
                <div class="modal-backdrop qr-modal-backdrop" id="mentimeter-qr-modal" hidden>
                  <div class="modal qr-modal" role="dialog" aria-modal="true" aria-labelledby="mentimeter-qr-title">
                    <button class="modal-close" type="button" data-modal-close aria-label="Fechar janela">&times;</button>
                    <h2 id="mentimeter-qr-title">Participar no Mentimeter inicial</h2>
                    <p>Usa o QR Code para aceder à nuvem de palavras no telemóvel.</p>
                    <img src="${getBasePath()}${activity.qrCode}" alt="QR Code para participar no Mentimeter">
                    ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Abrir ligação de participação</a>` : ""}
                  </div>
                </div>
              ` : ""}
            </section>
          ` : ""}
        </div>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
        <div class="section-inner">
          ${isEvaluation && activity.embedUrl ? "" : `
            <div class="section-heading task-page-heading">
            ${isEvaluation ? `
            <h1>${activity.title}</h1>
            ` : `
            <p class="eyebrow">Atividades</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
            `}
          </div>
          `}
        ${activity.embedUrl ? `
          <article class="card embedded-evaluation-card">
            <div class="embedded-resource">
              <iframe
                class="external-frame evaluation-frame"
                src="${construirUrlEmbedAvaliacao(activity.embedUrl)}"
                width="100%"
                height="900"
                style="border:0;"
                loading="lazy"
                referrerpolicy="unsafe-url"
                title="${activity.embedTitle || activity.title}"></iframe>
            </div>
          </article>
        ` : `
          <article class="card group-task-card">
            <p class="eyebrow">A preparar</p>
            <h3>Espaço reservado</h3>
            <p>Esta página está pronta para receber instruções, critérios, ficheiros de apoio ou formulários associados à atividade.</p>
          </article>
        `}
      </div>
    </section>
  `;
}

function setupLazyExcelViewers(root = document) {
  const frames = [...root.querySelectorAll("iframe.excel-viewer-frame[data-src]")];
  if (!frames.length) return;

  const carregarFrame = (frame) => {
    if (!frame.dataset.src) return;
    frame.src = frame.dataset.src;
    frame.removeAttribute("data-src");
  };

  if (!("IntersectionObserver" in window)) {
    frames.forEach(carregarFrame);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      carregarFrame(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "400px 0px" });

  frames.forEach((frame) => observer.observe(frame));
}

function renderResourcePage() {
  const root = document.getElementById("resource-root");
  if (!root) return;

  const resource = resources.find((item) => item.id === document.body.dataset.resource) || resources[0];
  document.title = `UFCD 0779 | ${resource.title}`;
  if (!isItemVisible("recursos", resource.id)) {
    mostrarEstadoVisibilidade(root, "Recurso", "recursos", resource.id);
    return;
  }

  if (resource.gptUrl) {
    if (!isItemVisible("assistentesGpt", resource.id)) {
      root.innerHTML = `
        <section class="section task-page-section">
          <div class="section-inner">
            <article class="card group-task-card">
              <p class="eyebrow">Recurso</p>
              <h1>${resource.displayTitle || resource.title}</h1>
              <p>Este assistente ainda não está disponível.</p>
            </article>
          </div>
        </section>
      `;
      return;
    }

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1 class="resource-title-with-icon">
              <a href="${resource.gptUrl}">
                ${resource.menuIcon ? `<img src="${getBasePath()}${resource.menuIcon}" alt="" aria-hidden="true">` : ""}
                <span>${resource.displayTitle || resource.title}</span>
              </a>
            </h1>
            <p class="lead">${resource.intro}</p>
          </div>

          <div class="resource-list">
            <article class="card group-task-card">
              <p class="eyebrow">Como utilizar</p>
              <h3>Antes de abrir o assistente</h3>
              <ul class="clean-list task-prompt-list">
                <li>Identifica o conteúdo ou atividade em que estás a trabalhar.</li>
                <li>Escreve a tua dúvida de forma clara e concreta.</li>
                <li>Indica o que já tentaste fazer ou compreender.</li>
                <li>Pede explicações passo a passo sempre que precisares.</li>
              </ul>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Boas práticas</p>
              <h3>Usa como apoio à aprendizagem</h3>
              <p>O assistente deve ajudar a pensar, rever e melhorar respostas. Não deve substituir o teu trabalho: usa as sugestões para compreender melhor os procedimentos e depois constrói a tua própria resposta.</p>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Acesso</p>
              <h3>Abrir assistente</h3>
              <p>O assistente abre numa nova aba do navegador. Poderá ser necessário iniciar sessão no ChatGPT.</p>
              <div class="embed-fallback resource-action-row align-right">
                <a class="small-button" href="${resource.gptUrl}">Abrir assistente</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.id === "manual" && !resource.pdfUrl) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos · UFCD 0779</p>
            <h1>Manual de formação</h1>
            <p class="lead">Esta página fica reservada para o manual da UFCD 0779.</p>
          </div>
          <article class="card group-task-card">
            <h2>Manual em preparação</h2>
            <p>O PDF será apresentado aqui assim que estiver disponível. Ainda não existe um manual da 0779 associado a esta página.</p>
          </article>
        </div>
      </section>
    `;
    return;
  }

  if (resource.pdfUrl) {
    const pdfUrl = `${getBasePath()}${resource.pdfUrl}`;
    root.innerHTML = `
      <section class="pdf-reader-shell" aria-label="Leitor do manual em PDF">
        <iframe class="pdf-frame native-pdf-frame" src="${pdfUrl}#view=FitH" title="Manual de Formação da UFCD 0779"></iframe>
      </section>
    `;
    return;
  }

  if (resource.downloadFiles || resource.videos) {
    const visibleVideos = (resource.videos || []).filter((video) => isItemVisible("ficheirosPowerPoint", video.id));
    const visibleFiles = (resource.downloadFiles || []).filter((file) => isItemVisible("ficheirosPowerPoint", file.id));
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1>${resource.displayTitle || resource.title}</h1>
            <p class="lead">${resource.intro}</p>
          </div>

          ${visibleVideos.length ? `
            <div class="video-resource-list">
              ${visibleVideos.map((video) => {
                const videoUrl = `${getBasePath()}${video.path}`;
                return `
                  <article class="card video-resource-card">
                    <div>
                      <p class="eyebrow">Vídeo</p>
                      <h3>${video.title}</h3>
                      <p>${video.description}</p>
                    </div>
                    <video class="resource-video" controls preload="metadata">
                      <source src="${videoUrl}" type="video/mp4">
                      O teu navegador não permite reproduzir este vídeo.
                    </video>
                  </article>
                `;
              }).join("")}
            </div>
          ` : ""}

          <div class="download-resource-list">
            ${visibleFiles.length ? visibleFiles.map((file, index) => {
              const fileUrl = `${getBasePath()}${file.path}`;
              return `
                <article class="card download-resource-card">
                  <span class="download-resource-number">${index + 1}</span>
                  <div>
                    <h3>${file.title}</h3>
                    <p>${file.description}</p>
                  </div>
                  <a class="small-button" href="${fileUrl}" download>Descarregar ficheiro</a>
                  <p class="resource-preview-note">Para visualizar ou editar, descarrega e abre o PPTX no PowerPoint. A pré-visualização incorporada só poderá ser testada depois de os ficheiros estarem alojados num endereço público.</p>
                </article>
              `;
            }).join("") : `
              <article class="card group-task-card">
                <p class="eyebrow">Ficheiros</p>
                <h3>A disponibilizar</h3>
                <p>Os ficheiros serão disponibilizados gradualmente pelo formador.</p>
              </article>
            `}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.externalUrl) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1>${resource.displayTitle || resource.title}</h1>
            <p class="lead">${resource.intro}</p>
          </div>
          <article class="card group-task-card external-resource-card">
            <p class="eyebrow">Recurso incorporado</p>
            <h3>Ajuda oficial do Excel</h3>
            <p>A Microsoft pode bloquear a visualização dentro da página por política de segurança. Se a área abaixo não carregar, abre o recurso diretamente.</p>
            <div class="embed-fallback resource-action-row align-right">
              <a class="small-button" href="${resource.externalUrl}">Abrir suporte Microsoft Excel</a>
            </div>
          </article>
        </div>
      </section>
      <section class="embedded-page-shell resource-full-page-shell" aria-label="${resource.title}">
        <iframe class="external-frame full-page-frame resource-full-page-frame" src="${resource.externalUrl}" title="${resource.title}" loading="lazy"></iframe>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
      <div class="section-inner">
        <div class="section-heading task-page-heading">
          <p class="eyebrow">Recursos</p>
          <h1>${resource.displayTitle || resource.title}</h1>
          <p class="lead">${resource.intro}</p>
        </div>
        <article class="card group-task-card">
          <p class="eyebrow">A preparar</p>
          <h3>Espaço reservado</h3>
          <p>Este espaço ficará ligado aos materiais de apoio reais da UFCD 0778.</p>
        </article>
      </div>
    </section>
  `;
}

function renderStandaloneTeamsControlPage() {
  const root = document.getElementById("teams-control-root");
  if (!root) return;

  document.title = "UFCD 0779 | Controlo do site";
  renderTeamsControl(root, { compact: false, publicView: false });
}

async function inicializarVisibilidadeRemotaDoSite(options = {}) {
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite({ force: options.force });

  if (options.render !== false) {
    atualizarSuperficiesVisiveisDoSite();
  }

  const teamsRoot = document.getElementById("activity-root") || document.getElementById("teams-control-root");
  if (teamsRoot) {
    atualizarControlosVisibilidadeDoSite(teamsRoot);
  }

  if (!visibilidadeRemotaOk && options.retry !== false) {
    window.setTimeout(() => {
      void inicializarVisibilidadeRemotaDoSite({ force: true, retry: false });
    }, 15000);
  }
}

function inicializarSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    carregarVisibilidadeDoSite();
    carregarLinksDoSite();
  } else {
    if (!carregarUltimaVisibilidadeRemotaDoSite()) {
      const snapshot = filtrarItensControloDaUfcdAtual(window.UFCD0779_VISIBILITY_SNAPSHOT);
      if (snapshot.length) {
        ocultarVisibilidadeControlada();
        aplicarItensVisibilidadeRemota(snapshot);
        siteVisibilityRemoteItems = snapshot;
        siteVisibilityRemoteReady = true;
        siteVisibilityRemoteAttempted = true;
      }
    }
  }

  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  renderPortfolioMenuLink();
  atualizarMenuPrincipal();
  atualizarBotoesAvaliacaoPaginaInicial();
  atualizarSecoesPaginaInicial();
  atualizarConteudosApresentacoes();
  atualizarPortfolioIncorporado();
  setupMenu();
  setupFloatingActions();
  renderHomeCards();
  renderConteudosIndex();
  renderTopicPage();
  renderActivityPage();
  renderResourcePage();
  renderStandaloneTeamsControlPage();
  setupModals();
  manterMenuAtivoAberto();
  abrirMenuPeloHashDoIndex();

  if (APPS_SCRIPT_WEB_APP_URL) {
    void inicializarVisibilidadeRemotaDoSite();
  }
}
inicializarSite();
