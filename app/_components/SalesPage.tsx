import type { HeroContent } from "@/app/_data/heroes";

const checkoutUrl = "https://pay.kiwify.com.br/JcPYHLN";

const steps = [
  ["01", "Reconhecer o ciclo", "Entenda por que buscar, sentir alívio e voltar ao mesmo ponto não significa que sua fé seja falsa."],
  ["02", "Organizar os 7 E's", "Separe áreas que hoje aparecem misturadas para enxergar o que realmente pede atenção."],
  ["03", "Responder às 21 perguntas", "Faça o Diagnóstico D7E com calma, sem respostas certas ou erradas e sem precisar se expor."],
  ["04", "Definir por onde começar", "Escolha qual dos 7 E's merece prioridade agora, em vez de tentar mudar tudo de uma vez."],
  ["05", "Levar a clareza para a semana", "Escolha um exercício ligado às suas respostas e pratique durante os próximos 7 dias."],
];

const sevenEs = [
  ["01", "Entregar", "Perceber o que você ainda tenta sustentar ou controlar sozinho."],
  ["02", "Esvaziar", "Criar espaço ao reconhecer pesos, excessos e ruídos acumulados."],
  ["03", "Eliminar", "Observar padrões que mantêm você voltando às mesmas respostas."],
  ["04", "Expandir", "Enxergar novas possibilidades de resposta, relação e escolha."],
  ["05", "Enraizar", "Transformar entendimento em fundamento para a vida cotidiana."],
  ["06", "Expressar", "Fazer a fé aparecer de forma coerente nas escolhas e relações."],
  ["07", "Evidenciar", "Reconhecer sinais concretos do que está sendo integrado."],
];

const faqs = [
  ["Para quem é este workshop?", "Para cristãos que continuam buscando, mas sentem que alguma área da vida não acompanha aquilo em que acreditam e querem um ponto de partida mais claro."],
  ["Preciso ter muito conhecimento bíblico?", "Não. A condução é clara e prática. O ponto de partida são as suas respostas e a sua experiência atual."],
  ["Preciso contar algo pessoal para o grupo?", "Não. Você poderá responder ao D7E de forma reservada. A proposta não exige exposição pública da sua história."],
  ["O Raio-X da Fé é uma terapia?", "Não. É uma experiência educacional de autoconhecimento e desenvolvimento espiritual. Não oferece diagnóstico clínico e não substitui acompanhamento psicológico, psiquiátrico, terapêutico ou médico."],
  ["Vou resolver todos os meus problemas em 90 minutos?", "Não. A proposta responsável é mais específica: organizar o que parece confuso, localizar um ponto de atenção e iniciar uma prática coerente com ele."],
  ["E se eu não puder assistir ao vivo?", "O replay ficará disponível por 3 dias, conforme as orientações enviadas após a inscrição."],
  ["Como recebo o link e as informações do encontro?", "As orientações de acesso serão enviadas pelos canais informados no momento da inscrição."],
  ["Como funcionam os 7 áudios?", "Você receberá uma sequência de áudios curtos pelo WhatsApp para acompanhar a prática dos 7 dias após o workshop."],
  ["Como as 21 perguntas levam ao exercício?", "Você organiza suas respostas nos 7 E's, escolhe uma área prioritária e recebe a orientação do exercício relacionado a ela para praticar durante 7 dias."],
  ["E se minhas respostas não mostrarem uma prioridade óbvia?", "A condução do workshop ajuda você a comparar as áreas com calma. O D7E não impõe um rótulo; ele organiza a reflexão para que você possa escolher um começo coerente."],
  ["Por que isso é diferente de uma pregação ou devocional?", "O workshop não substitui nenhum dos dois. Sua função é diferente: em vez de acrescentar mais conteúdo, ele usa suas respostas para organizar onde concentrar a prática primeiro."],
  ["Posso participar se já faço terapia ou acompanhamento médico?", "Sim. O workshop não se destina a substituir nem orientar mudanças nesses cuidados. Em caso de sofrimento emocional, mantenha o acompanhamento de profissionais habilitados."],
  ["Como funciona a garantia?", "Você terá 7 dias para avaliar a compra e poderá solicitar o reembolso dentro desse prazo, conforme as condições informadas no checkout."],
];

function CTA({ children }: { children: string }) {
  return (
    <a className="button" href={checkoutUrl} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true">→</span>
    </a>
  );
}

export function SalesPage({ hero }: { hero: HeroContent }) {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav container">
          <a className="brand" href="#inicio"><b>7E</b><span>O Raio-X da Fé</span></a>
          <a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Garantir meu acesso</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><i /> {hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <h2 className="hero-subtitle">{hero.subtitle}</h2>
            <p className="hero-lead">{hero.support}</p>
            <CTA>{hero.cta}</CTA>
            <div className="micro-proof"><span>Ao vivo, até 90 min</span><i /><span>21 perguntas</span><i /><span>Garantia de 7 dias</span></div>
          </div>
          <figure className="hero-visual">
            <div className="visual-frame"><img src="/jabez-headline.png" alt="Jabez de Castro, criador do Método 7E" width="1086" height="1448" /></div>
            <figcaption><span>Antes de tentar de novo,</span><strong>faça o Raio-X.</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>Até 90 min</strong><span>workshop ao vivo</span></div>
          <div><strong>21</strong><span>perguntas guiadas</span></div>
          <div><strong>7</strong><span>áreas observadas</span></div>
          <div><strong>1</strong><span>ponto de partida</span></div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container narrow">
          <p className="section-kicker">Quando a fé não alcança o que você sente</p>
          <h2>Você segue firme por fora. Por dentro, a mesma pergunta continua.</h2>
          <div className="problem-grid">
            <div>
              <p>Você ora, lê a Bíblia, serve e tenta fazer o que acredita ser certo. Por alguns dias, parece que agora vai.</p>
              <p>Então a rotina aperta. O medo volta. A irritação aparece. A mente se enche outra vez.</p>
              <p>E, junto com o peso, vem a culpa: “se eu tenho fé, por que ainda me sinto assim?”</p>
            </div>
            <aside className="insight-card"><strong>Um ponto para considerar</strong><p>Quando tudo parece urgente, até quem é disciplinado se cansa tentando mudar tudo ao mesmo tempo.</p></aside>
          </div>
        </div>
      </section>

      <section className="section diagnosis-section">
        <div className="container">
          <div className="split-heading">
            <div>
              <p className="section-kicker light">Como o D7E transforma reflexão em ação</p>
              <h2>21 perguntas. 7 E&apos;s. 1 prioridade para a semana.</h2>
            </div>
            <p>Você responde às 21 perguntas, organiza suas respostas nos 7 E&apos;s e escolhe uma prioridade. A partir dela, leva um exercício específico para praticar nos 7 dias seguintes.</p>
          </div>
          <div className="diagnosis-flow">
            <article><span>21 PERGUNTAS</span><h3>Responder</h3><p>Observe sua experiência atual com honestidade e sem respostas certas ou erradas.</p></article>
            <b aria-hidden="true">→</b>
            <article><span>7 E&apos;S</span><h3>Organizar</h3><p>Reúna suas respostas para comparar áreas que hoje parecem misturadas.</p></article>
            <b aria-hidden="true">→</b>
            <article><span>1 PRIORIDADE</span><h3>Praticar</h3><p>Escolha uma área e leve o exercício correspondente para os próximos 7 dias.</p></article>
          </div>
        </div>
      </section>

      <section className="section workshop-section">
        <div className="container workshop-grid">
          <div className="sticky-copy">
            <p className="section-kicker">O que acontece no encontro</p>
            <h2>Da confusão a uma prioridade prática para a semana.</h2>
            <p>O Raio-X da Fé é o workshop. Nele, você aplica o D7E, um questionário educacional baseado no Método 7E, e termina o encontro com uma área priorizada e um exercício para os próximos 7 dias.</p>
            <CTA>Quero definir por onde começar</CTA>
          </div>
          <ol className="workshop-list">{steps.map(([n, t, d]) => <li key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section seven-section">
        <div className="container">
          <div className="centered">
            <p className="section-kicker">O Método 7E</p>
            <h2>Sete áreas para organizar o que hoje parece uma coisa só.</h2>
            <p>As 21 perguntas mostram como cada E aparece na sua rotina. Você observa todos, escolhe uma prioridade e recebe o exercício correspondente para os próximos 7 dias.</p>
          </div>
          <div className="seven-grid">{sevenEs.map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <figure className="about-photo">
            <img src="/jabez-apresentacao.png" alt="Retrato de apresentação de Jabez de Castro" width="1104" height="1400" />
            <figcaption><strong>Jabez de Castro</strong><span>Pastor, autor e criador do Método 7E</span></figcaption>
          </figure>
          <div className="about-copy">
            <p className="section-kicker light">Quem conduz o workshop</p>
            <h2>Conhecer as respostas não elimina a necessidade de saber por onde começar.</h2>
            <p>Filho de pastor, Jabez cresceu dentro da igreja, afastou-se por aproximadamente dez anos e, mais tarde, retornou ao ambiente ministerial.</p>
            <p>Ao longo de mais de 15 anos de vivência pastoral, entre pregação, liderança, aconselhamento e serviço, percebeu algo difícil de admitir: era possível saber orientar outras pessoas e ainda não conseguir organizar o que acontecia dentro de si.</p>
            <p>Da experiência vivida, do estudo e da atuação pastoral nasceu o Método 7E da Vida Cristã Integrada, base do Diagnóstico D7E apresentado neste workshop.</p>
            <div className="credentials"><span><strong>15+ anos</strong> de vivência ministerial</span><span><strong>Autor</strong> de 07 Lições Ocultas no Evangelho de Jesus</span></div>
          </div>
        </div>
      </section>

      <section className="section offer-section">
        <div className="container offer-grid">
          <div className="offer-copy">
            <p className="section-kicker">Seu acesso inclui</p>
            <h2>Clareza no encontro. Apoio para começar na semana.</h2>
            <ul className="offer-list">
              <li>Workshop ao vivo de até 90 minutos</li>
              <li>Diagnóstico D7E com 21 perguntas</li>
              <li>Definição de uma área prioritária</li>
              <li>Exercício prático ligado às suas respostas</li>
              <li>Mapa Visual dos 7 E&apos;s</li>
              <li>7 áudios diários pelo WhatsApp</li>
              <li>Capítulo bônus do livro</li>
              <li>Replay disponível por 3 dias</li>
            </ul>
          </div>
          <aside className="price-card">
            <p>Acesso completo</p>
            <div className="price"><small>R$</small><strong>47</strong></div>
            <span>Pagamento único</span>
            <CTA>Garantir meu acesso por R$47</CTA>
            <ul><li>Workshop e questionário educacional D7E</li><li>Materiais e sequência de 7 áudios</li><li>Garantia de 7 dias</li></ul>
            <small>Evento online · Data, horário e link enviados após a inscrição · Pagamento processado pela Kiwify</small>
          </aside>
        </div>
      </section>

      <section className="guarantee-section">
        <div className="container guarantee-card">
          <div className="guarantee-badge"><strong>7</strong><span>dias</span></div>
          <div>
            <p className="section-kicker">Decida com tranquilidade</p>
            <h2>Você não precisa comprar no escuro.</h2>
            <p>Você terá 7 dias para avaliar sua compra. Se, dentro desse prazo e conforme as condições informadas no checkout, entender que a experiência não é para você, poderá solicitar o reembolso.</p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div><p className="section-kicker">Perguntas frequentes</p><h2>Entre sabendo exatamente o que esperar.</h2></div>
          <div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <p className="eyebrow"><i /> Seu próximo passo não precisa ser mais esforço</p>
          <h2>Defina onde começar antes de tentar tudo outra vez.</h2>
          <p>21 perguntas. 7 áreas. Um ponto de partida para os próximos 7 dias.</p>
          <CTA>Quero fazer O Raio-X da Fé</CTA>
        </div>
      </section>

      <footer>
        <div className="container footer-main"><div className="brand"><b>7E</b><span>O Raio-X da Fé</span></div><p>Com Jabez de Castro · Desenvolvimento espiritual com direção.</p></div>
        <div className="container disclaimer"><strong>Nota de responsabilidade:</strong> experiência educacional de autoconhecimento e desenvolvimento espiritual. Não oferece diagnóstico clínico e não substitui psicologia, psiquiatria, terapia ou atendimento médico.</div>
      </footer>
      <a className="mobile-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Garantir meu acesso · R$47</a>
    </main>
  );
}
