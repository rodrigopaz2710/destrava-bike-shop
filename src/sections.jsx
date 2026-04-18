import { BookCover, GUIDES } from './covers.jsx';

const Arrow = () => <svg className="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const Nav = ({ onBuy }) =>
<nav className="nav">
    <div className="wrap nav-inner">
      <a href="#top" className="nav-logo">
        <img src="assets/logo-destrava.webp" alt="Destrava Bike Shop" width="120" height="120" />
        <span>Destrava<span className="dot">.</span></span>
      </a>
      <button className="nav-cta" onClick={onBuy}>Garantir acesso</button>
    </div>
  </nav>;


const HEADLINES = {
  A: {
    tag: <>A promessa direta</>,
    h1: <><span className="strike">SEU BIKE SHOP</span><span className="strike">pode vender mais</span><span className="strike italic-red">esse mês.</span></>,
    sub: <>E você vai descobrir como em <b>menos de uma tarde de leitura.</b> O Método MVP revela os 3 pilares que separam as bike shops que crescem das que sobrevivem — e como aplicar cada um, na prática, ainda essa semana.</>
  },
  B: {
    tag: <>A estatística</>,
    h1: <><span className="strike">A maioria</span><span className="strike">das bike shops</span><span className="strike italic-red">fecha em 5 anos.</span></>,
    sub: <>As que ficam de pé fazem <b>3 coisas</b> que as outras ignoram. Descubra o Método MVP — e aplique na sua loja ainda essa semana.</>
  },
  C: {
    tag: <>O problema primeiro</>,
    h1: <><span className="strike">Trabalha muito.</span><span className="strike italic-red">Sobra pouco.</span><span className="strike">Por quê?</span></>,
    sub: <>O problema não é o mercado. É o que <b>ninguém te ensinou</b> sobre marketing, vendas e processos numa bike shop.</>
  }
};

const Hero = ({ onBuy, headlineKey }) => {
  const h = HEADLINES[headlineKey] || HEADLINES.A;
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-tag"><span className="pulse"></span> MÉTODO MVP · EDIÇÃO 2026</div>
          <h1>{h.h1}</h1>
          <p className="hero-sub">{h.sub}</p>
          <ul className="bullets">
            <li><span className="chk">✓</span>Sem precisar virar influencer ou aparecer todo dia</li>
            <li><span className="chk">✓</span>Sem precisar disputar no preço</li>
            <li><span className="chk">✓</span>Sem precisar de equipe grande ou sistema caro</li>
          </ul>
          <div className="cta-row">
            <button className="btn-primary" onClick={onBuy}>
              Quero destravar meu bike shop <Arrow />
            </button>
            <span className="cta-note">🔒 ACESSO IMEDIATO · VITALÍCIO</span>
          </div>
        </div>
        <div className="stack">
          <div className="book b1"><BookCover {...GUIDES[2]} /></div>
          <div className="book b2"><BookCover {...GUIDES[0]} /></div>
          <div className="book b3"><BookCover {...GUIDES[1]} /></div>
          <div className="stack-label">3 guias</div>
        </div>
      </div>
    </header>);

};

const Pain = () =>
<section className="pain">
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="eyebrow">O diagnóstico</div>
          <h2>Você reconhece algum desses cenários?</h2>
        </div>
        <p className="lead">Três cenas que se repetem em quase toda bike shop antes do Método MVP entrar em cena.</p>
      </div>
      <div className="pain-cards">
        <div className="pain-card">
          <span className="ghost">01</span>
          <span className="tag">No Marketing</span>
          <h3>Você é invisível pra quem ainda não te conhece</h3>
          <p>Tenta postar, mas não sabe o quê. Ou não posta, ou posta e não vê resultado. A loja tem clientes fiéis — mas ninguém novo entra.</p>
        </div>
        <div className="pain-card">
          <span className="ghost">02</span>
          <span className="tag">Nas Vendas</span>
          <h3>O cliente olha, pergunta o preço e vai embora</h3>
          <p>Ou diz "vou pensar" e some. Você sente que perdeu a venda, mas não sabe o que falar diferente. No fim do mês, a conta não fecha.</p>
        </div>
        <div className="pain-card">
          <span className="ghost">03</span>
          <span className="tag">Nos Processos</span>
          <h3>Se você sair um dia, a loja trava</h3>
          <p>Abre cedo, fecha tarde, resolve tudo. Funcionários sem clareza. Estoque some. Você trabalha <i>dentro</i> da loja — não <i>no</i> negócio.</p>
        </div>
      </div>
      <div className="pain-close">
        <p><b>Isso não é problema de mercado.</b> O ciclismo nunca esteve tão em alta.</p>
        <p>O problema é que ninguém te ensinou a tocar uma bike shop como negócio. Não é culpa sua — é uma lacuna. <b>E é exatamente essa lacuna que o Destrava Bike Shop fecha.</b></p>
      </div>
    </div>
  </section>;


const Villain = () =>
<section className="villain">
    <div className="wrap">
      <div className="villain-visual">
        <div className="word">Bom técnico<br /><span className="b">≠</span> bom empresário</div>
      </div>
      <div>
        <div className="eyebrow">A armadilha silenciosa</div>
        <h2 style={{ marginTop: 12, marginBottom: 24 }}>Por que lojas com bom produto e bom atendimento <span className="italic-red">não crescem</span></h2>
        <p>Existe uma armadilha silenciosa que mantém as bike shops travadas.</p>
        <p>Não é falta de produto bom. Não é preço alto. Não é a internet.</p>
        <div className="pull">É a ilusão de que bom técnico é igual a bom empresário.</div>
        <p>O mecânico excelente que abriu uma loja por amor ao ciclismo — mas nunca aprendeu a vender, atrair cliente novo, montar processo mínimo. <b>Vive de indicação. Quando a indicação para, para o faturamento.</b></p>
        <p>Algumas lojas na sua cidade estão crescendo. Não porque o produto é melhor — mas porque descobriram que <b>bike shop é negócio, e negócio tem método.</b></p>
      </div>
    </div>
  </section>;


const MVP = () =>
<section className="mvp">
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="eyebrow">O método</div>
          <h2>Apresentando<br />o Método <em className="italic-red">MVP</em></h2>
        </div>
        <p className="lead">O passo a passo que bike shops de sucesso já aplicam — e que agora você vai ter nas mãos.</p>
      </div>
      <div className="mvp-grid">
        <div className="mvp-col">
          <div className="mvp-letter">M</div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Marketing</div>
          <h3>Que atrai cliente<br />sem depender<br />de indicação</h3>
          <p>Não precisa virar influencer nem dançar no TikTok. Você precisa de uma presença estratégica que posiciona sua loja como <b>a referência local em ciclismo</b>.</p>
          <ul>
            <li>Calendário de 12 meses de ofertas</li>
            <li>Estratégia de Reels que funciona pra bike shop</li>
            <li>Parcerias locais que trazem cliente novo todo mês</li>
          </ul>
        </div>
        <div className="mvp-col">
          <div className="mvp-letter">V</div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Vendas</div>
          <h3>Que fecham<br />sem precisar<br />de desconto</h3>
          <p>A maioria das vendas perdidas não é por preço — é por falta de técnica. Aqui você aprende <b>o que falar e quando falar</b>.</p>
          <ul>
            <li>7 gatilhos mentais que ativam a decisão</li>
            <li>Upsell e cross-sell de jeito natural</li>
            <li>Scripts de WhatsApp que convertem o "vou pensar"</li>
          </ul>
        </div>
        <div className="mvp-col">
          <div className="mvp-letter">P</div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Processos</div>
          <h3>Que fazem<br />a loja funcionar<br />sem você</h3>
          <p>Uma loja que depende só de você não é um negócio — é um emprego caro. Aqui você monta a <b>operação que roda sozinha</b>.</p>
          <ul>
            <li>Como contratar certo</li>
            <li>Controle de estoque no Bling</li>
            <li>Cultura de loja com responsabilidade</li>
          </ul>
        </div>
      </div>
      <div className="mvp-rule">Os 3 pilares, juntos, formam o <b>MVP</b> que transforma uma bike shop num negócio real.</div>
    </div>
  </section>;


export { Arrow, Nav, Hero, Pain, Villain, MVP };
