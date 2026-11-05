
document.addEventListener('DOMContentLoaded',()=>{
  const pin=document.querySelector('#pin-input');
  const eye=[...document.querySelectorAll('button[title="Afficher le code"]')][0];
  if(pin&&eye) eye.addEventListener('click',()=>{pin.type=pin.type==='password'?'text':'password';eye.title=pin.type==='password'?'Afficher le code':'Masquer le code'});
  document.querySelectorAll('.naya-phone a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
  // The voice screen's example prompts populate the composer instead of remaining decorative.
  const composer=document.querySelector('input[placeholder*="Écrivez ou dictez"]');
  document.querySelectorAll('main button').forEach(btn=>{
    const t=btn.innerText||'';
    if(composer && (t.includes('J\\'ai vendu')||t.includes('Noter 2 500')||t.includes('Quel est le solde'))){
      btn.addEventListener('click',()=>{composer.value=t.replace(/[«»]/g,'').trim();composer.focus()});
    }
  });
  const loginForm=document.querySelector('form[data-purpose="sign-in-form"]');
  if(loginForm) loginForm.addEventListener('submit',e=>{e.preventDefault();location.href='dashboard.html'});
});
