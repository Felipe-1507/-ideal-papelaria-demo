(() => {
  'use strict';
  const items = [
    {id:'cadernos',name:'Cadernos & organização',description:'Uma página nova para suas ideias.',category:'escola',label:'NA ESCOLA',image:'cadernos.webp',alt:'Caderno de discos e itens de escrita divulgados pela Ideal'},
    {id:'estojos',name:'Estojos que acompanham',description:'Seu pequeno universo, bem guardado.',category:'organizacao',label:'NA SUA ROTINA',image:'estojos.webp',alt:'Estojos rosa e bege disponíveis nas publicações da Ideal'},
    {id:'fineliners',name:'Uma cor para cada ideia',description:'Canetas fineliners para criar.',category:'criatividade',label:'PARA CRIAR',image:'fineliners.webp',alt:'Conjunto de canetas fineliners coloridas divulgado pela Ideal'},
    {id:'mochilas',name:'Novos caminhos',description:'Mochilas para acompanhar a rotina.',category:'escola',label:'NA ESCOLA',image:'mochila.webp',alt:'Mochila xadrez verde divulgada pela Ideal'},
    {id:'canetas',name:'Detalhes que inspiram',description:'Canetas e acessórios em tons pastel.',category:'organizacao',label:'NA SUA ROTINA',image:'canetas-pastel.webp',alt:'Estojo azul e canetas pastel divulgados pela Ideal'},
    {id:'guache',name:'Criatividade em movimento',description:'Tintas e guache Acrilex.',category:'criatividade',label:'PARA CRIAR',image:'guache-acrilex.webp',alt:'Tintas e guache bastão da Acrilex divulgados pela Ideal'}
  ];
  const selected = new Set();
  const textarea = document.querySelector('#list-text');
  const interest = document.querySelector('#interest');
  const storageKey = 'ideal-lista-v1';
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (Array.isArray(saved.items)) saved.items.forEach(id => { if(items.some(p=>p.id===id)) selected.add(id); });
    if (typeof saved.text === 'string') textarea.value = saved.text.slice(0, 2000);
    if (typeof saved.interest === 'string') interest.value = saved.interest;
  } catch {}
  let currentFilter = 'todos';
  const icon = name => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify({items:[...selected],text:textarea.value,interest:interest.value})); } catch {} };
  const productGrid = document.querySelector('#products');
  function renderProducts() {
    const filtered = items.filter(p => currentFilter === 'todos' || p.category === currentFilter);
    productGrid.innerHTML = filtered.map(p => `<article class="product"><div class="product-image"><img src="assets/${p.image}" alt="${p.alt}" loading="lazy" width="700" height="700"><span class="product-category">${p.label}</span><button class="product-select" data-item="${p.id}" aria-pressed="${selected.has(p.id)}" aria-label="${selected.has(p.id)?'Remover':'Adicionar'} ${p.name} ${selected.has(p.id)?'da':'à'} minha lista">${icon(selected.has(p.id)?'check':'plus')}</button></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.description}</p></div><span>CONSULTAR</span></div></article>`).join('');
  }
  function renderList() {
    const products = items.filter(p => selected.has(p.id));
    document.querySelector('#selected-products').innerHTML = products.length
      ? products.map(p => `<div class="selected-item"><span class="item-name">${icon('check')}${p.name}</span><button type="button" class="remove-item" data-remove="${p.id}" aria-label="Remover ${p.name} da lista">${icon('close')}</button></div>`).join('')
      : '<p class="empty-list">Uma boa ideia começa com espaço em branco.<br>Adicione itens da vitrine ou escreva abaixo.</p>';
    document.querySelector('#floating-count').textContent = products.length;
    document.querySelector('#floating-list').hidden = !products.length;
    save();
  }
  let toastTimer;
  function toast(message) {
    const el = document.querySelector('#toast');
    el.textContent = message;
    el.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('visible'), 2400);
  }
  function setItem(id, removeOnly = false) {
    const item=items.find(p=>p.id===id); if(!item)return;
    if(selected.has(id)||removeOnly) { selected.delete(id); toast('Item removido da sua lista.'); }
    else { selected.add(id); toast('Boa escolha! Item adicionado à sua lista.'); document.querySelector('#form-error').hidden=true; }
    // Update the current button in place so keyboard focus stays on the chosen product.
    const button=productGrid.querySelector(`[data-item="${id}"]`);
    if(button) {const active=selected.has(id);button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',`${active?'Remover':'Adicionar'} ${item.name} ${active?'da':'à'} minha lista`);button.innerHTML=icon(active?'check':'plus');}
    renderList();
  }
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(b => {const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    renderProducts();
  }));
  productGrid.addEventListener('click', event => {const button=event.target.closest('[data-item]');if(button)setItem(button.dataset.item);});
  document.querySelector('#selected-products').addEventListener('click', event => {
    const button=event.target.closest('[data-remove]');
    if(button){setItem(button.dataset.remove,true);document.querySelector('#list-text').focus({preventScroll:true});}
  });
  textarea.addEventListener('input', () => {document.querySelector('#form-error').hidden=true;save();});
  interest.addEventListener('change',save);
  document.querySelector('#quote-form').addEventListener('submit', event => {
    event.preventDefault();
    const text=textarea.value.trim();
    if(!selected.size&&!text){document.querySelector('#form-error').hidden=false;textarea.focus();return;}
    const lines=['Olá, Ideal! Montei uma lista pelo site e gostaria de consultar opções, disponibilidade e valores.'];
    if(interest.value)lines.push(`\nÉ para: ${interest.value}.`);
    if(selected.size)lines.push('\nTenho interesse em:',...items.filter(p=>selected.has(p.id)).map(p=>`• ${p.name}`));
    if(text)lines.push('\nMinha lista e detalhes:',text);
    lines.push('\nPodem me ajudar?');
    const url='https://wa.me/5515998555587?text='+encodeURIComponent(lines.join('\n'));
    window.open(url,'_blank','noopener,noreferrer');
    toast('Sua lista está pronta. Revise e envie no WhatsApp.');
  });
  const menuButton=document.querySelector('.menu-toggle');
  const navigation=document.querySelector('#navigation');
  function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');navigation.classList.remove('open');}
  menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');navigation.classList.toggle('open',open);});
  navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
  document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
  const header=document.querySelector('.header');
  const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>30);
  window.addEventListener('scroll',updateHeader,{passive:true});
  updateHeader();renderProducts();renderList();
})();
