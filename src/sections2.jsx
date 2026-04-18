import { useState } from 'react';
import { Arrow } from './sections.jsx';
import { BookCover, GUIDES } from './covers.jsx';

const Guides = () => (
  <section id="guides">
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="eyebrow">O que vem dentro</div>
          <h2>3 guias.<br/>1 método.<br/><em className="italic-red">Zero enrolação.</em></h2>
        </div>
        <p className="lead">Conteúdo objetivo em PDF. Você lê no celular, no tablet ou no computador — no seu ritmo, na sua vida.</p>
      </div>
      <div className="guides-grid">
        {GUIDES.map((g,i)=>(
          <div className="guide" key={i}>
            <div className="guide-cover"><BookCover {...g}/></div>
            <div className="meta">{g.tag}</div>
            <h3>{g.headline}</h3>
            <p className="desc">{g.desc}</p>
            <ul>{g.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="section-head" style={{marginTop:80}}>
        <div>
          <div className="eyebrow">+ Bônus inclusos</div>
          <h2 style={{fontSize:'clamp(28px,3.4vw,44px)',maxWidth:'none'}}>Ferramentas prontas que aceleram a aplicação</h2>
        </div>
      </div>
      <div className="bonus-grid">
        <div className="bonus">
          <div className="num">B1</div>
          <div>
            <div className="kicker">Bônus 01 · Aula ao vivo</div>
            <h4>WhatsApp Máquina de Vendas</h4>
            <p>Aula completa ensinando como transformar seu WhatsApp em um canal de vendas consistente. Do primeiro contato ao fechamento — com roteiros, respostas prontas e rotina diária.</p>
          </div>
        </div>
        <div className="bonus">
          <div className="num">B2</div>
          <div>
            <div className="kicker">Bônus 02 · PDF complementar</div>
            <h4>PDF exclusivo da aula WhatsApp</h4>
            <p>O material de apoio da aula em PDF: scripts, atalhos e checklist para consultar durante o expediente — sem precisar reassistir tudo.</p>
          </div>
        </div>
        <div className="bonus">
          <div className="num">B3</div>
          <div>
            <div className="kicker">Bônus 03 · Atendimento individual</div>
            <h4>Call de Onboarding Individual</h4>
            <p>Uma call 1:1 para você mapear onde seu bike shop está hoje e sair com um plano de ação claro para os primeiros 30 dias do método.</p>
          </div>
        </div>
        <div className="bonus">
          <div className="num">B4</div>
          <div>
            <div className="kicker">Bônus 04 · Exercícios práticos</div>
            <h4>Exercícios práticos de ativação</h4>
            <p>Atividades diretas para você sair da leitura para a ação: exercícios práticos que traduzem cada guia em tarefas concretas para aplicar na sua loja.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testim">
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="eyebrow">Prova social</div>
          <h2>Bike shops que já<br/>aplicaram o método</h2>
        </div>
        <p className="lead">Resultados de lojistas que colocaram o Método MVP na prática nos seus próprios bike shops.</p>
      </div>
      <div className="testim-grid">
        {[
          {name:'Valdirene', quote:'Nós saímos de um faturamento de R$30 mil por mês para mais de R$100 mil por mês em apenas 6 meses e eu só tenho a agradecer ao Felipe por isso.'},
          {name:'Jefferson', quote:'Aqui estou impressionado de como as vendas estão crescendo, esse mês foi de ficar sem acreditar, meta superada, coloquei uma meta para vender 8 bikes e vendemos 12 bikes. Antes era quase 1 bike no máximo...'},
          {name:'Filipe',    quote:'Quando comecei faturava em média R$35.000, no primeiro mês já bati R$60.000, agora estou em R$71.500 e o mês nem acabou.'},
        ].map((t,i)=>(
          <div className="testim-card" key={i}>
            <div className="quote">{t.quote}</div>
            <div className="person">
              <div>
                <div style={{fontWeight:700,color:'var(--ink)',fontSize:14,fontFamily:'Barlow Condensed, sans-serif',textTransform:'uppercase',letterSpacing:'.05em'}}>{t.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Offer = ({ onBuy, price, showScarcity }) => {
  const finalPrice = price || '37';
  return (
  <section className="offer" id="offer">
    <div className="wrap">
      <div className="offer-card">
        {showScarcity && <div className="offer-scarcity">⚡ Preço de lançamento · valor sobe em breve</div>}
        <div className="eyebrow">A oferta completa</div>
        <h2 style={{marginTop:10}}>Tudo que você leva hoje</h2>
        <p className="offer-lead">3 guias em PDF + Calendário pronto + 4 bônus que aceleram o resultado. Pagamento único. Acesso vitalício.</p>
        <ul className="offer-list">
          <li><div className="label"><div className="ico">01</div>Pilar 1 — Marketing para Bike Shop</div><div className="val">R$ 47</div></li>
          <li><div className="label"><div className="ico">02</div>Pilar 2 — Vendas para Bike Shop</div><div className="val">R$ 67</div></li>
          <li><div className="label"><div className="ico">03</div>Pilar 3 — Processos para Bike Shop</div><div className="val">R$ 47</div></li>
          <li><div className="label"><div className="ico">04</div>Calendário 12 Campanhas Pronto</div><div className="val">R$ 37</div></li>
          <li><div className="label"><div className="ico" style={{background:'rgba(245,197,24,.12)',color:'var(--yellow)'}}>B1</div>🎁 Aula WhatsApp Máquina de Vendas</div><div className="val">R$ 97</div></li>
          <li><div className="label"><div className="ico" style={{background:'rgba(245,197,24,.12)',color:'var(--yellow)'}}>B2</div>🎁 PDF exclusivo da aula</div><div className="val">R$ 37</div></li>
          <li><div className="label"><div className="ico" style={{background:'rgba(245,197,24,.12)',color:'var(--yellow)'}}>B3</div>🎁 Call de Onboarding Individual</div><div className="val">R$ 297</div></li>
          <li><div className="label"><div className="ico" style={{background:'rgba(245,197,24,.12)',color:'var(--yellow)'}}>B4</div>🎁 Exercícios práticos de ativação</div><div className="val">R$ 47</div></li>
          <li className="total"><div className="label">Valor total se vendido separado</div><div className="val">R$ 676</div></li>
        </ul>
        <div className="offer-ratio">
          <div className="offer-ratio-bar"><span style={{width:'94%'}}></span></div>
          <div className="offer-ratio-text">Você leva <b>18×</b> o valor que investe hoje.</div>
        </div>
        <div className="offer-price">
          <div className="label">Você leva hoje por</div>
          <div className="value"><span className="small">R$</span>{finalPrice}</div>
          <div className="terms">PAGAMENTO ÚNICO · SEM ASSINATURA · ACESSO VITALÍCIO</div>
        </div>
        <button className="btn-primary big-cta" onClick={onBuy}>
          Quero destravar meu bike shop agora <Arrow/>
        </button>
        <div className="offer-trust">
          <span><span className="d"></span>Pagamento seguro · Hotmart</span>
          <span><span className="d"></span>Garantia de 7 dias</span>
          <span><span className="d"></span>Acesso imediato por e-mail</span>
        </div>
      </div>
    </div>
  </section>
  );
};

const About = () => (
  <section className="about">
    <div className="wrap">
      <div className="about-photo">
        <img src="assets/felipe.webp" alt="Felipe Marangoni" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'inherit'}} />
      </div>
      <div>
        <div className="eyebrow">Quem escreveu</div>
        <h2 style={{margin:'12px 0 24px'}}>Felipe Marangoni<br/><span className="italic-red">quase fechou a loja.</span></h2>
        <p>Com 1 ano e meio de loja aberta, conta bancária no limite, sem capital de giro. Um dia entrava dinheiro, no outro já estava usando o limite do cartão pra pagar boleto. Ele chegava cedo na loja, sozinho, e se perguntava se valia a pena continuar. <b>Conhecia bicicleta de cor — mas ninguém tinha ensinado a tocar um negócio.</b></p>
        <p>Ele decidiu ficar. E decidiu aprender o que ninguém ensinava nos cursos de mecânica. Estudou marketing, aprendeu a vender, montou processos. Criou o que hoje chama de <b>Método MVP</b> — o mesmo que está nesses 3 guias.</p>
        <div className="about-stats">
          <div className="about-stat"><div className="n">5/dia</div><div className="l">Bicicletas vendidas em média · jan/2025</div></div>
          <div className="about-stat"><div className="n">+100</div><div className="l">Lojistas auxiliados no último ano</div></div>
          <div className="about-stat"><div className="n">7 dígitos</div><div className="l">Faturamento em 2025</div></div>
        </div>
        <p style={{fontSize:15}}>Hoje, além de tocar a própria loja, Felipe acompanha outros lojistas de bike shop aplicando o mesmo método — com resultados em menos de 3 meses.</p>
      </div>
    </div>
  </section>
);

const ForWho = () => (
  <section>
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="eyebrow">Pra quem é</div>
          <h2>Isso é pra você<br/>(ou talvez não seja)</h2>
        </div>
        <p className="lead">Ler antes de comprar: esse material tem um público específico. Se você não é esse lojista, sem problema.</p>
      </div>
      <div className="forwho-grid">
        <div className="forwho-card yes">
          <h3>É pra você se…</h3>
          <ul>
            {['Você tem uma bike shop (física, híbrida ou online) e quer crescer','Sente que trabalha muito e sobra pouco','Quer atrair mais cliente sem depender de indicação','Quer vender melhor sem virar chato ou dar desconto','Quer parar de fazer tudo sozinho','Quer material prático, sem enrolação, direto ao ponto'].map((t,i)=>(
              <li key={i}><div className="ico">✓</div>{t}</li>
            ))}
          </ul>
        </div>
        <div className="forwho-card no">
          <h3>Não é pra você se…</h3>
          <ul>
            {['Você quer uma solução mágica sem aplicar nada','Já tem operação estruturada com time de marketing e processos consolidados','Busca curso teórico longo com certificado','Não quer ler 3 PDFs (mesmo que curtos e práticos)'].map((t,i)=>(
              <li key={i}><div className="ico">✕</div>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="guarantee">
    <div className="wrap">
      <div className="guarantee-card">
        <div className="guarantee-seal">
          <div style={{textAlign:'center'}}>
            <div className="days">7</div>
            <div className="lbl">Dias</div>
          </div>
        </div>
        <div>
          <div className="eyebrow">Garantia</div>
          <h3 style={{margin:'10px 0 12px'}}>Risco zero. Você decide depois de ler.</h3>
          <p>Se você ler o material e sentir que não valeu cada centavo, basta enviar um e-mail em até 7 dias após a compra.</p>
          <p><b>Devolvemos 100% do seu investimento</b>, sem perguntas e sem burocracia. Você não perde nada testando — o risco é completamente nosso.</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQS = [
  {q:'Como vou receber o material?',a:'Imediatamente após a compra, você recebe um e-mail com o link de acesso. É instantâneo — dá pra começar a ler em poucos minutos.'},
  {q:'É um curso ou é PDF?',a:'São 3 guias em formato PDF — conteúdo objetivo, direto ao ponto. Você lê no celular, tablet ou computador, no seu ritmo.'},
  {q:'E se eu não gostar?',a:'Você tem 7 dias de garantia total. Se não gostar, basta nos avisar e devolvemos o valor integral.'},
  {q:'Funciona pra loja física e online?',a:'Sim. Os 3 guias cobrem tanto loja física quanto estratégias para venda híbrida e online.'},
  {q:'Em quanto tempo começo a ver resultado?',a:'A maioria dos lojistas aplica o primeiro ajuste no mesmo dia da leitura. Os resultados em marketing e vendas costumam aparecer em 2 a 4 semanas.'},
  {q:'Preciso ter experiência com marketing digital?',a:'Não. Os guias foram escritos pensando em quem nunca fez nada na área. Tudo com passo a passo, sem jargão.'},
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section>
      <div className="wrap">
        <div className="section-head" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',alignItems:'center'}}>
          <div style={{textAlign:'center',width:'100%'}}>
            <div className="eyebrow" style={{justifyContent:'center'}}>FAQ · Dúvidas frequentes</div>
            <h2 style={{marginTop:12,maxWidth:'none'}}>Perguntas que <span className="italic-red">todo lojista</span> faz</h2>
          </div>
        </div>
        <div className="faq-list">
          {FAQS.map((f,i)=>(
            <div key={i} className={'faq-item'+(open===i?' open':'')}>
              <button className="faq-q" onClick={()=>setOpen(open===i?-1:i)}>
                <span>{f.q}</span><span className="plus">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Final = ({ onBuy }) => (
  <section className="final">
    <div className="wrap">
      <div className="eyebrow">Última parada</div>
      <h2>Chegou a hora de<br/><em>destravar</em> seu bike shop.</h2>
      <p className="lead">Toda semana sem Marketing, Vendas e Processos funcionando na sua loja é faturamento na mesa que você deixou passar.</p>
      <button className="btn-primary" onClick={onBuy}>Quero destravar meu bike shop <Arrow/></button>
      <div className="offer-trust" style={{marginTop:28}}>
        <span><span className="d"></span>Pagamento seguro</span>
        <span><span className="d"></span>Garantia de 7 dias</span>
        <span><span className="d"></span>Acesso imediato</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="wrap">
      <div>© 2026 DESTRAVA BIKE SHOP · FELIPE MARANGONI</div>
      <div>CONTATO@DESTRAVABIKESHOP.COM.BR</div>
    </div>
  </footer>
);

const StickyBuy = ({ show, onBuy, price }) => (
  <div className={'sticky-buy'+(show?' show':'')}>
    <div>
      <div className="t">Destrava Bike Shop · 3 guias</div>
      <div className="s">{price ? `R$ ${price} · ` : ''}ACESSO IMEDIATO · GARANTIA 7 DIAS</div>
    </div>
    <button className="btn-primary" onClick={onBuy}>Quero agora <Arrow/></button>
  </div>
);

export { Guides, Testimonials, Offer, About, ForWho, Guarantee, FAQ, Final, Footer, StickyBuy };
