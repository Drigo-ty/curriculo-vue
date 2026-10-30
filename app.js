const { createApp } = Vue;

createApp({
  data() {
    return {
      perfil: {
        nome: "Marty McFly",
        cargo: "Consultor de Cronologia e Especialista em Performance Musical",
        resumo:
          'Jovem dinâmico, pontual (quando o capacitor de fluxo permite) e com vasta experiência em resolução de paradoxos temporais. Guitarrista talentoso com domínio de técnicas avançadas de shredding antes mesmo de serem inventadas. Experiente em lidar com figuras históricas, direção defensiva de veículos modificados e skate urbano. Nota: Não me chame de frangote.',
      },

      experiencias: [
        {
          periodo: "1985 – Presente",
          empresa: "The Pinheads",
          funcao: "Guitarrista Principal",
          descricao:
            'Composição e performance de Rock \'n\' Roll. Responsável pela audição da "Batalha das Bandas" (mesmo sendo considerado "barulhento demais" por alguns juízes).',
        },
        {
          periodo: "1955",
          empresa: "Baile Encanto sob o Mar",
          funcao: "Músico Substituto (Guitarra)",
          descricao:
            "Substituição emergencial do guitarrista Marvin Berry. Responsável pela introdução cultural do gênero Heavy Metal trinta anos antes do previsto.",
        },
        {
          periodo: "1885",
          empresa: "Consultoria de Segurança Hill Valley (Velho Oeste)",
          funcao: "Assistente de Ferreiro",
          descricao:
            'Auxílio técnico em engenharia ferroviária improvisada e mediação de conflitos com a gangue de Buford "Cachorro Louco" Tannen.',
        },
        {
          periodo: "1985",
          empresa: "Indústrias Biffco",
          funcao: "Sobrevivente Urbano",
          descricao:
            "Gestão de crises em ambientes distópicos e recuperação de artefatos esportivos (almanaques) para restauração da ordem cronológica.",
        },
      ],

      educacao: [
        {
          ano: "1986",
          instituicao: "Hill Valley High School",
          curso: "Ensino Médio Completo",
          descricao: "Foco em Artes e Música",
        },
        {
          ano: "1955",
          instituicao: "Cultural Hill Valley",
          curso: "Intercâmbio",
          descricao:
            "Estudos intensivos sobre dinâmicas sociais da década de 50 e etiqueta de lanchonetes.",
        },
        {
          ano: "1985",
          instituicao: "Engenharia Aplicada",
          curso: "Workshop",
          descricao:
            "Treinamento prático em sistemas de 1.21 Gigawatts e mecânica de DeLorean (sob mentoria do Dr. Emmett Brown).",
        },
        {
          ano: "2015",
          instituicao: "Mobilidade Urbana Futurista",
          curso: "Treinamento",
          descricao:
            "Curso intensivo de pilotagem de Hoverboard em superfícies sólidas (atenção: pranchas não funcionam na água sem potência extra).",
        },
      ],

      contatos: [
        { rotulo: "Endereço", valor: "Lyon Estates, Hill Valley, CA." },
        { rotulo: "E-mail", valor: "contato@delorean.com" },
        { rotulo: "Telefone", valor: "+55 (88) 9999 0000" },
      ],
    };
  },

  computed: {
    // Pega a primeira letra de cada nome: "Marty McFly" -> "MM"
    iniciais() {
      return this.perfil.nome
        .split(" ")
        .map((parte) => parte[0])
        .join("");
    },
    anoAtual() {
      return new Date().getFullYear();
    },
  },

  methods: {
    imprimir() {
      window.print();
    },
  },
}).mount("#app");