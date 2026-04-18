// Book cover component — recreates the visual style of the PDFs
const BookCover = ({ variant = 'red', num = '01', pillar = 'Marketing', title, sub }) => {
  const isIvory = variant === 'ivory';
  return (
    <div className={`cover ${variant}`}>
      <div className="cover-head">
        <span>E-BOOK OFICIAL</span>
        <span>VOL 0{num} / 03</span>
      </div>
      <div className="cover-spine"></div>
      <div className="cover-kicker">PILAR {num} · {pillar}</div>
      <div style={{marginTop:'auto'}}>
        <div className="cover-num">{num}</div>
        <div className="cover-title">{title}</div>
        <div className="cover-sub">{sub}</div>
      </div>
      <div className="cover-foot">
        <span>FELIPE MARANGONI</span>
        <span>EDIÇÃO 2026</span>
      </div>
      <div className="cover-wheel"></div>
      <svg className="cover-bolt" width="32" height="48" viewBox="0 0 32 48" fill="none">
        <path d="M18 0L0 28h12L10 48l22-30H18L20 0z" fill="currentColor"/>
      </svg>
    </div>
  );
};

const GUIDES = [
  {
    num:'01',
    pillar:'Marketing',
    variant:'red',
    title:<>Como<br/>atrair<br/>clientes.</>,
    sub:'O método prático de conteúdo, ofertas e redes sociais que tira uma bike shop do invisível.',
    tag:'PILAR 01 · MARKETING',
    headline:'Marketing para Bike Shop',
    desc:'Tudo que você precisa para atrair cliente novo — sem precisar de agência.',
    bullets:[
      'Como usar o Instagram de um jeito que funciona para lojas de bicicleta',
      'A estrutura de Reels que gera curiosidade e traz cliente até a loja',
      'Calendário de 12 meses: o que promover em cada época do ano',
      'Como fazer parcerias com academias, condomínios e empresas locais',
      'Template de conteúdo para nunca travar quando não tiver ideia',
    ],
  },
  {
    num:'02',
    pillar:'Vendas',
    variant:'black',
    title:<>Como<br/>vender<br/>mais.</>,
    sub:'Técnicas, gatilhos mentais e scripts que transformam visita em venda — sem descontar.',
    tag:'PILAR 02 · VENDAS',
    headline:'Vendas para Bike Shop',
    desc:'As técnicas que transformam visita em venda — e venda em cliente fiel.',
    bullets:[
      'Os 7 gatilhos mentais que qualquer vendedor pode usar sem soar forçado',
      'Upsell e cross-sell naturais para acessórios, manutenção e serviços',
      'Scripts de WhatsApp para cada situação: orçamento, "vou pensar", desconto',
      'Como responder as 5 objeções mais comuns sem perder a venda',
      'A abordagem para o cliente que entra "só olhando"',
    ],
  },
  {
    num:'03',
    pillar:'Processos',
    variant:'ivory',
    title:<>A loja<br/>que roda<br/>sem você.</>,
    sub:'Manual de operação, contratações e estoque para sua loja parar de depender só de você.',
    tag:'PILAR 03 · PROCESSOS',
    headline:'Processos para Bike Shop',
    desc:'O manual de operação que sua loja precisa para parar de depender só de você.',
    bullets:[
      'Como contratar o funcionário certo: o que perguntar, observar e testar',
      'Controle de estoque no Bling: configuração, alertas e reposição',
      'Padrão de atendimento que qualquer funcionário consegue seguir',
      'Os processos mínimos para clareza sobre o que entra, sai e sobra',
      'Como criar uma cultura onde as pessoas se responsabilizam',
    ],
  },
];

export { BookCover, GUIDES };
