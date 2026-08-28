export type HeroContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  support: string;
  cta: string;
};

export const heroes: Record<"a1" | "a2" | "a3", HeroContent> = {
  a1: {
    eyebrow: "VOCÊ ORA. SERVE. TENTA. E O PESO VOLTA.",
    title: "Você faz tudo certo na fé. Então por que",
    highlight: "continua voltando ao mesmo lugar?",
    support:
      "Você já orou, estudou, serviu e tentou de novo. Talvez não tenha faltado fé ou esforço, mas direção. Em até 90 minutos, o D7E usa 21 perguntas para localizar qual dos 7 E's merece atenção primeiro e mostra por onde começar nos próximos 7 dias.",
    cta: "Quero descobrir onde estou travado",
  },
  a2: {
    eyebrow: "CLAREZA ANTES DE MAIS CONTEÚDO",
    title: "Em até 90 minutos, descubra qual dos 7 E's",
    highlight: "precisa de atenção primeiro.",
    support:
      "Responda 21 perguntas, identifique qual dos 7 E's merece foco agora e saia com um exercício prático para começar ainda esta semana — sem tentar resolver tudo ao mesmo tempo e sem adivinhar por onde começar.",
    cta: "Quero fazer meu Raio-X",
  },
  a3: {
    eyebrow: "ANTES DA RESPOSTA, VEM O DIAGNÓSTICO",
    title: "Jesus não respondia todo mundo do mesmo jeito. Seu travamento também não pede",
    highlight: "uma resposta genérica.",
    support:
      "Você já ouviu conselhos valiosos. O que talvez tenha faltado foi descobrir qual serve para o ponto em que você está. Em até 90 minutos, o D7E usa 21 perguntas para localizar seu principal gargalo e indicar o primeiro passo para os próximos 7 dias.",
    cta: "Quero descobrir meu ponto de atenção",
  },
};
