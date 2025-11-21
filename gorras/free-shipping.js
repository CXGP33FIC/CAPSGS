// Barra de progreso para envío gratis: meta = 3 gorras
(function(){
  const GOAL = 3;

  function getCount(){
    try{
      const cart = JSON.parse(localStorage.getItem('g5_cart')||'[]');
      return Array.isArray(cart) ? cart.reduce((a,b)=>a + (Number(b.qty)||0), 0) : 0;
    }catch(e){ return 0; }
  }

  function renderBar(){
    const bar = document.getElementById('free-shipping-bar');
    if(!bar) return;
    const fill = document.getElementById('fsb-progress-fill');
    const text = document.getElementById('fsb-text');
    const count = getCount();
    const remaining = Math.max(GOAL - count, 0);
    const pct = Math.min(100, Math.round((count/GOAL)*100));
    if(fill) fill.style.width = pct + '%';
    if(text){
      if(remaining > 0){
        text.textContent = `Agrega ${remaining} gorra${remaining===1?'':'s'} más para envío gratis`;
        bar.classList.remove('complete');
      }else{
        text.textContent = '¡Envío gratis asegurado!';
        bar.classList.add('complete');
      }
    }
  }

  function init(){
    renderBar();
    // Observa cambios en el contador visual del carrito
    const cartCountEl = document.getElementById('cartCount');
    if(cartCountEl){
      const mo = new MutationObserver(()=>renderBar());
      mo.observe(cartCountEl, {childList:true, characterData:true, subtree:true});
    }
    // Reacciona a acciones comunes de carrito
    document.addEventListener('click', (e)=>{
      if(
        e.target.closest('.add-cart') ||
        e.target.closest('[data-act="inc"]') ||
        e.target.closest('[data-act="dec"]') ||
        e.target.closest('[data-act="del"]')
      ){
        setTimeout(renderBar, 40);
      }
    });
    // Exponer API por si se quiere actualizar manualmente
    window.updateFreeShippingBar = renderBar;
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }
})();