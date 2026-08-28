export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  support: string;
  cta: string;
};

export const heroes: Record<"a1" | "a2" | "a3", HeroContent> = {
  a1: {
    eyebrow: "PARA QUEM SEGUE FIRME, MAS SENTE QUE ALGO NÃO MUDA",
    title: "Você continua buscando.",
    subtitle: "Mas o que sente ainda não acompanha o que acredita.",
    support:
      "No workshop ao vivo, você percorre 21 perguntas, organiza 7 áreas da vida cristã e define uma prioridade com uma prática para os próximos 7 dias, sem precisar se expor.",
    cta: "Quero definir por onde começar",
  },
  a2: {
    eyebrow: "CLAREZA ANTES DE MAIS UMA TENTATIVA",
    title: "Antes de tentar de novo,",
    subtitle: "use 21 perguntas para localizar onde começar.",
    support:
      "Em até 90 minutos, você percorre 7 áreas da vida cristã, define 1 prioridade e associa a ela uma prática para os próximos 7 dias.",
    cta: "Quero fazer meu Raio-X",
  },
  a3: {
    eyebrow: "MESMA SENSAÇÃO. PRIORIDADES DIFERENTES.",
    title: "Nem todo bloqueio vem do mesmo lugar.",
    subtitle: "Encontre a área que pede atenção primeiro.",
    support:
      "O D7E ajuda você a separar o que hoje parece tudo misturado. Com 21 perguntas, você organiza suas respostas entre os 7 E's e sai com uma prioridade e uma prática relacionada a ela.",
    cta: "Quero encontrar minha prioridade",
  },
};
