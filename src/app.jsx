import { useState, useEffect } from 'react';
import { Hero, Pain, Villain, MVP } from './sections.jsx';
import { Guides, Testimonials, Offer, About, ForWho, Guarantee, FAQ, Final, Footer, StickyBuy } from './sections2.jsx';

function App(){
  const [tweaks, setTweaks] = useState(window.TWEAK_DEFAULTS);
  const [editMode, setEditMode] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(()=>{
    const onMsg = (e)=>{
      if (e.data?.type === '__activate_edit_mode') setEditMode(true);
      if (e.data?.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return ()=>window.removeEventListener('message', onMsg);
  },[]);

  useEffect(()=>{
    const onScroll = ()=>setShowSticky(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, {passive:true});
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);

  useEffect(()=>{
    document.documentElement.style.setProperty('--red', tweaks.accent);
  },[tweaks.accent]);

  const setKey = (k, v) => {
    const next = {...tweaks, [k]: v};
    setTweaks(next);
    window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[k]: v}}, '*');
  };

  const onScrollToOffer = ()=>{
    const el = document.getElementById('offer');
    if (el) window.scrollTo({top: el.offsetTop - 70, behavior:'smooth'});
  };

  const onCheckout = ()=>{ window.open('https://pay.hotmart.com/R105442623Q', '_blank'); };

  return (
    <>
      <Hero onBuy={onScrollToOffer} headlineKey={tweaks.headline} />
      <Pain />
      <Villain />
      <MVP />
      <Guides />
      <Testimonials />
      <Offer onBuy={onCheckout} price={tweaks.price} showScarcity={tweaks.showScarcity} />
      <About />
      <ForWho />
      <Guarantee />
      <FAQ />
      <Final onBuy={onCheckout} />
      <Footer />
      <StickyBuy show={showSticky} onBuy={onCheckout} price={tweaks.price} />

      {editMode && (
        <div className="tweaks">
          <h4>Tweaks</h4>
          <div className="row">
            <span>Headline</span>
            <div className="group">
              {['A','B','C'].map(k=>(
                <button key={k} className={tweaks.headline===k?'active':''} onClick={()=>setKey('headline',k)}>{k}</button>
              ))}
            </div>
          </div>
          <div className="row">
            <span>Preço (R$)</span>
            <input value={tweaks.price} placeholder="ex: 47"
              onChange={e=>setKey('price', e.target.value)} style={{width:70}}/>
          </div>
          <div className="row">
            <span>Escassez</span>
            <button className={tweaks.showScarcity?'active':''} onClick={()=>setKey('showScarcity', !tweaks.showScarcity)}>
              {tweaks.showScarcity?'ON':'OFF'}
            </button>
          </div>
          <div className="row">
            <span>Cor de destaque</span>
            <div className="group">
              {['#E3192B','#FF5A1F','#0EA5E9','#22C55E'].map(c=>(
                <button key={c} onClick={()=>setKey('accent', c)}
                  style={{width:22,height:22,padding:0,background:c,borderColor:tweaks.accent===c?'#fff':'transparent'}}/>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
