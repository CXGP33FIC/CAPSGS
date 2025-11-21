// Lightbox simple para páginas de producto
(function(){
  function createOverlay(){
    const ov=document.createElement('div');
    ov.className='lightbox-overlay';
    const img=document.createElement('img');
    img.className='lightbox-img';
    ov.appendChild(img);
    ov.addEventListener('click',close);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
    document.body.appendChild(ov);
    return {ov,img};
  }
  function open(src,alt){
    if(!state) state=createOverlay();
    state.img.src=src; state.img.alt=alt||'';
    state.ov.classList.add('open');
  }
  function close(){ if(state) state.ov.classList.remove('open'); }
  let state=null;

  function init(){
    // Marcar todas las imágenes de la página como lazy para reducir el consumo inicial de ancho de banda
    try{
      document.querySelectorAll('img').forEach(img=>{
        // No sobrescribimos si ya trae un valor explícito
        if(!img.getAttribute('loading')){
          img.setAttribute('loading','lazy');
        }
      });
    }catch(e){}

    const gallery=document.querySelector('.galeria');
    if(!gallery) return;
    gallery.querySelectorAll('img').forEach(img=>{
      img.addEventListener('click',function(e){
        e.preventDefault();
        open(img.src, img.alt);
      });
    });
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  }else{
    init();
  }
})();