import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscrição confirmada | O Raio-X da Fé",
  description: "Veja os próximos passos para participar do workshop O Raio-X da Fé.",
};

const nextSteps = [
  ["01", "Acompanhe suas mensagens", "A data, o horário e o link do encontro serão enviados para o e-mail e o WhatsApp informados na inscrição."],
  ["02", "Reserve o momento do encontro", "Quando receber a confirmação, separe até 90 minutos em um ambiente tranquilo para responder às perguntas com atenção."],
  ["03", "Chegue com respostas honestas", "Você não precisa estudar nem preparar uma história. O D7E começa pela sua experiência atual e não exige exposição ao grupo."],
];

const included = [
  "Workshop online e ao vivo de até 90 minutos",
  "Questionário educacional D7E com 21 perguntas",
  "Mapa Visual dos 7 E's",
  "Exercício relacionado à área priorizada",
  "7 áudios pelo WhatsApp para apoiar a prática",
  "Replay disponível por 3 dias",
];

export default function ThankYouPage() {
  return (
    <main className="thank-page">
      <header className="thank-nav">
        <nav className="nav container">
          <a className="brand" href="/a1"><b>7E</b><span>O Raio-X da Fé</span></a>
          <a className="nav-cta" href="/a1">Voltar ao site</a>
        </nav>
      </header>

      <section className="thank-hero">
        <div className="thank-glow" />
        <div className="container thank-hero-grid">
          <div className="thank-copy">
            <div className="thank-check" aria-hidden="true">✓</div>
            <p className="eyebrow"><i /> Inscrição concluída</p>
            <h1>Seu Raio-X da Fé já começou.</h1>
            <p>Sua inscrição foi recebida. Agora, acompanhe o e-mail e o WhatsApp informados na compra. É por esses canais que você receberá as orientações para participar.</p>
            <div className="thank-alert"><strong>Importante</strong><span>Você não precisa realizar uma nova compra. Guarde o comprovante enviado pela Kiwify.</span></div>
          </div>

          <aside className="thank-summary">
            <p className="section-kicker">O que acontece agora</p>
            <h2>Três passos até o encontro.</h2>
            <ol>{nextSteps.map(([n, title, description]) => <li key={n}><span>{n}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
          </aside>
        </div>
      </section>

      <section className="thank-content">
        <div className="container thank-content-grid">
          <div>
            <p className="section-kicker">Sua inscrição inclui</p>
            <h2>Você vai receber tudo o que precisa para começar com clareza.</h2>
            <ul className="thank-included">{included.map((item) => <li key={item}><i aria-hidden="true">✓</i><span>{item}</span></li>)}</ul>
          </div>

          <aside className="thank-help">
            <span>Não encontrou a mensagem?</span>
            <h2>Faça estas verificações antes de se preocupar.</h2>
            <ol>
              <li>Confira as pastas de spam, lixo eletrônico e promoções.</li>
              <li>Procure pelo comprovante de pagamento enviado pela Kiwify.</li>
              <li>Confirme se o e-mail e o telefone usados na compra estão corretos.</li>
            </ol>
            <p>As informações do encontro serão enviadas pelos canais cadastrados na inscrição.</p>
          </aside>
        </div>
      </section>

      <section className="thank-close">
        <div className="container">
          <p className="eyebrow"><i /> Enquanto o encontro não chega</p>
          <h2>Você não precisa resolver tudo agora.</h2>
          <p>Apenas observe sua rotina com honestidade. No workshop, as 21 perguntas ajudarão a organizar essa percepção entre os 7 E&apos;s.</p>
          <a className="button" href="/a1">Voltar à página principal<span aria-hidden="true">→</span></a>
        </div>
      </section>

      <footer className="thank-footer">
        <div className="container footer-main"><div className="brand"><b>7E</b><span>O Raio-X da Fé</span></div><p>Com Jabez de Castro · Desenvolvimento espiritual com direção.</p></div>
        <div className="container disclaimer"><strong>Nota de responsabilidade:</strong> experiência educacional de autoconhecimento e desenvolvimento espiritual. Não oferece diagnóstico clínico e não substitui psicologia, psiquiatria, terapia ou atendimento médico.</div>
      </footer>
    </main>
  );
}
