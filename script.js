window.onload = function() {
    const h1 = document.getElementById('funky-text');
    const text = h1.innerText.split('');
    h1.innerHTML = '';
    
    text.forEach(letter => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.transform = `rotate(${Math.random() * 10 - 5}deg) translateY(${Math.random() * 10 - 5}px)`;
      h1.appendChild(span);
    });
  };
  