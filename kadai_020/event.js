const btn = document.getElementById('btn');
const text = document.getElementById('text');
const body = document.getElementById('body');

btn.addEventListener('click', ()=> {
  const text2 = document.createElement('h2');
  text2.textContent = 'ボタンをクリックしました';
  document.querySelector('body').appendChild(text2);
  text.style.display = 'none';  
})

