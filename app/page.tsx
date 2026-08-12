const checkoutUrl = "https://pay.kiwify.com.br/JcPYHLN";

const steps = [
  ["01", "Entender o ciclo", "Reconheça por que esforço, alívio temporário, recaída e culpa podem se repetir."],
  ["02", "Conhecer os 7 E's", "Organize dimensões que normalmente aparecem misturadas na sua vida."],
  ["03", "Responder ao D7E", "Use 21 perguntas para localizar o ponto que pede atenção primeiro."],
  ["04", "Ler o resultado", "Entenda por que começar pelo gargalo traz mais direção."],
  ["05", "Começar o exercício", "Saia com uma prática ligada ao seu resultado para esta semana."],
];

const sevenEs = [
  ["01", "Entregar", "Reconhecer o que você ainda tenta controlar sozinho."],
  ["02", "Esvaziar", "Abrir espaço, reduzindo pesos e ruídos acumulados."],
  ["03", "Eliminar", "Identificar padrões que alimentam ciclos repetidos."],
  ["04", "Expandir", "Enxergar novas possibilidades de resposta e ação."],
  ["05", "Enraizar", "Transformar entendimento em fundamento diário."],
  ["06", "Expressar", "Fazer a fé aparecer nas escolhas e relações."],
  ["07", "Evidenciar", "Observar sinais concretos do que está sendo integrado."],
];

const faqs = [
  ["Preciso ter muito conhecimento bíblico?", "Não. O workshop foi pensado para ser claro e aplicável. O ponto de partida é sua experiência real."],
  ["O Raio-X é uma terapia?", "Não. É uma ferramenta educacional de autoconhecimento e desenvolvimento espiritual. Não substitui acompanhamento profissional."],
  ["Vou resolver todos os meus problemas em 90 minutos?", "Não. A proposta é identificar qual dos 7 E's merece atenção primeiro e iniciar um exercício prático."],
  ["E se eu não puder assistir ao vivo?", "O replay ficará disponível por 3 dias, conforme as orientações enviadas após a inscrição."],
];

function CTA({ children }: { children: string }) {
  return <a className="button" href={checkoutUrl} target="_blank" rel="noreferrer">{children}<span>→</span></a>;
}

export default function Home() {
  return <main>
    <header className="nav-shell"><nav className="nav container"><a className="brand" href="#inicio"><b>7E</b><span>O Raio-X da Fé</span></a><a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Garantir meu acesso</a></nav></header>

    <section className="hero" id="inicio"><div className="hero-glow" /><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow"><i /> Workshop ao vivo · Até 90 minutos</p><h1>Você faz tudo certo na fé. Mesmo assim, <em>algo não encaixa.</em></h1><p className="hero-lead">Talvez não tenha faltado esforço — tenha faltado descobrir qual ponto merece atenção primeiro. Faça o Diagnóstico D7E e saia com um primeiro passo claro para os próximos 7 dias.</p><CTA>Quero descobrir onde estou travado</CTA><div className="micro-proof"><span>21 perguntas</span><i /><span>Diagnóstico D7E</span><i /><span>Exercício prático</span></div></div>
      <figure className="hero-visual"><div className="visual-frame"><img src="/hero-metodo-7e.webp" alt="Sete etapas iluminadas do Método 7E" width="1600" height="900" /></div><figcaption><span>Antes de tratar,</span><strong>faça o Raio-X.</strong></figcaption></figure>
    </div></section>

    <section className="stats"><div className="container stats-grid"><div><strong>21</strong><span>perguntas</span></div><div><strong>7</strong><span>dimensões</span></div><div><strong>1</strong><span>ponto de atenção</span></div><div><strong>7 dias</strong><span>de prática guiada</span></div></div></section>

    <section className="section problem-section"><div className="container narrow"><p className="section-kicker">O conflito que quase ninguém vê</p><h2>Você não parou de buscar. Só está cansado de voltar ao mesmo lugar.</h2><div className="problem-grid"><div><p>Você vai ao culto. Sente. Anota. Decide que agora será diferente.</p><p>Então a rotina aperta. A ansiedade volta. A irritação aparece. O cansaço pesa.</p><p>Por fora, você continua firme. Por dentro, algo não acompanha aquilo em que acredita.</p></div><blockquote><span>“</span>Eu faço tudo que um cristão deveria fazer. Então por que continuo me sentindo assim?</blockquote></div></div></section>

    <section className="section diagnosis-section"><div className="container"><div className="split-heading"><div><p className="section-kicker light">Uma nova forma de começar</p><h2>Talvez não tenha faltado fé. Talvez tenha faltado diagnóstico.</h2></div><p>O problema não é receber uma resposta valiosa. É aplicar a mesma resposta em pontos diferentes, sem descobrir onde o travamento realmente começa.</p></div><div className="diagnosis-flow"><article><span>01</span><h3>Examinar</h3><p>21 perguntas nos 7 E's.</p></article><b>→</b><article><span>02</span><h3>Localizar</h3><p>Um ponto de atenção.</p></article><b>→</b><article><span>03</span><h3>Começar</h3><p>Um exercício prático.</p></article></div></div></section>

    <section className="section workshop-section"><div className="container workshop-grid"><div className="sticky-copy"><p className="section-kicker">O que é O Raio-X da Fé</p><h2>Clareza antes de mais conteúdo.</h2><p>Um workshop ao vivo para cristãos que desejam entender por que sua fé parece funcionar melhor por fora do que por dentro.</p><CTA>Quero fazer meu diagnóstico</CTA></div><ol className="workshop-list">{steps.map(([n,t,d]) => <li key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol></div></section>

    <section className="section seven-section"><div className="container"><div className="centered"><p className="section-kicker">O Método 7E</p><h2>Você não precisa trabalhar tudo ao mesmo tempo.</h2><p>Precisa descobrir qual dimensão vem primeiro.</p></div><div className="seven-grid">{sevenEs.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="section about-section"><div className="container about-grid"><figure className="about-photo"><img src="/jabez-de-castro.webp" alt="Retrato de Jabez de Castro" width="512" height="512" /><figcaption><strong>Jabez de Castro</strong><span>Pastor, autor e criador do Método 7E</span></figcaption></figure><div className="about-copy"><p className="section-kicker light">Quem vai conduzir você</p><h2>“A virada não foi um raio. Foi um diagnóstico.”</h2><p>Filho de pastor, Jabez conhece a igreja por dentro. Depois de aproximadamente dez anos afastado, retornou ao ambiente ministerial, pregando, aconselhando, liderando e servindo.</p><p>Mesmo assim, percebeu um conflito difícil de admitir: sua fé parecia funcionar melhor para ajudar outras pessoas do que para organizar o que acontecia dentro dele.</p><p>Da experiência pastoral e da pesquisa nasceu o Método 7E da Vida Cristã Integrada.</p><div className="credentials"><span><strong>15+ anos</strong> de vivência ministerial</span><span><strong>Autor</strong> de 07 Lições Ocultas</span></div></div></div></section>

    <section className="section offer-section"><div className="container offer-grid"><div className="offer-copy"><p className="section-kicker">Tudo o que você recebe</p><h2>Saia do “algo está errado” e saiba onde começar.</h2><ul className="offer-list"><li>Workshop ao vivo de até 90 minutos</li><li>Diagnóstico D7E com 21 perguntas</li><li>Mapa Visual dos 7 E's</li><li>7 áudios diários pelo WhatsApp</li><li>Capítulo bônus do livro</li><li>Replay por 3 dias</li></ul></div><aside className="price-card"><p>Acesso completo</p><div className="price"><small>R$</small><strong>47</strong></div><span>Pagamento único</span><CTA>Quero garantir meu acesso</CTA><ul><li>Diagnóstico e exercício prático</li><li>Materiais e bônus</li><li>Garantia de 7 dias</li></ul><small>Compra segura · Acesso após a inscrição</small></aside></div></section>

    <section className="guarantee-section"><div className="container guarantee-card"><div className="guarantee-badge"><strong>7</strong><span>dias</span></div><div><p className="section-kicker">Sua decisão protegida</p><h2>Experimente com tranquilidade.</h2><p>Você terá 7 dias de garantia. Se, dentro desse prazo e conforme as condições da compra, entender que a experiência não é para você, poderá solicitar o reembolso.</p></div></div></section>

    <section className="section faq-section"><div className="container faq-grid"><div><p className="section-kicker">Perguntas frequentes</p><h2>O que você precisa saber antes de entrar.</h2></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="final-cta"><div className="container"><p className="eyebrow"><i /> O próximo passo pode ser mais simples</p><h2>Você não precisa provar que tem mais fé.</h2><p>Precisa descobrir onde concentrar o próximo passo.</p><CTA>Quero descobrir onde estou travado</CTA></div></section>

    <footer><div className="container footer-main"><div className="brand"><b>7E</b><span>O Raio-X da Fé</span></div><p>Com Jabez de Castro · Desenvolvimento espiritual com direção.</p></div><div className="container disclaimer"><strong>Nota de responsabilidade:</strong> experiência educacional de autoconhecimento e desenvolvimento espiritual. Não oferece diagnóstico clínico e não substitui psicologia, psiquiatria, terapia ou atendimento médico.</div></footer>
    <a className="mobile-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Garantir meu acesso · R$47</a>
  </main>;
}
