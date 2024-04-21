function animate() {
    const button = document.querySelector('.long-button');
    button.classList.add('animated', 'shake');
  
    setTimeout(() => {
      button.classList.remove('animated', 'shake');
      button.classList.add('animated', 'bounce');
    }, 1000);
  
    setTimeout(() => {
      button.classList.remove('animated', 'bounce');
      button.classList.add('animated', 'color-change');
    }, 2000);
  
    setTimeout(() => {
      button.classList.remove('animated', 'color-change');
      button.classList.add('animated', 'scale-up');
    }, 3000);
  
    setTimeout(() => {
      button.classList.remove('animated', 'scale-up');
    }, 4000);
  }
  