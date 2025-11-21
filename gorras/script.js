// Lógica del acordeón FAQ
document.addEventListener('DOMContentLoaded', () => {
  // Marcar todas las imágenes como lazy si no lo están explícitamente.
  try{
    document.querySelectorAll('img').forEach(img => {
      if(!img.getAttribute('loading')){
        img.setAttribute('loading','lazy');
      }
    });
  }catch(e){}
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(btn => {
    const panel = btn.nextElementSibling;
    // Asegura estado inicial
    if(panel) panel.hidden = btn.getAttribute('aria-expanded') !== 'true';

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Si quieres abrir solo uno a la vez, descomenta estas líneas:
      // document.querySelectorAll('.accordion-header[aria-expanded="true"]').forEach(openBtn => {
      //   if(openBtn !== btn){
      //     openBtn.setAttribute('aria-expanded','false');
      //     openBtn.nextElementSibling.hidden = true;
      //   }
      // });

      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if(panel) panel.hidden = expanded;
    });
  });
  // Búsqueda minimal por título
  const searchWrap = document.getElementById('searchWrap');
  const searchToggle = document.getElementById('searchToggle');
  const searchInput = document.getElementById('searchInput');
  const cards = Array.from(document.querySelectorAll('.grid .card'));

  if(searchToggle){
    searchToggle.addEventListener('click', () => {
      searchWrap.classList.toggle('active');
      if(searchWrap.classList.contains('active')){
        searchInput.focus();
      }
    });
  }
  if(searchInput){
    const filter = () => {
      const q = (searchInput.value || '').toLowerCase().trim();
      cards.forEach(card => {
        const title = (card.dataset.title || card.querySelector('.title')?.textContent || '').toLowerCase();
        card.style.display = title.includes(q) ? '' : 'none';
      });
    };
    searchInput.addEventListener('input', filter);
    filter();
  }
});