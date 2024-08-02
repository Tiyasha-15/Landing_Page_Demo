document.querySelectorAll('.point').forEach(point => {
  point.addEventListener('click', function() {
    const index = this.getAttribute('data-index');
    const container = document.querySelector('.scroll-element');
    const contentHeight = document.querySelector('.content').offsetHeight;
    container.style.top = `-${index * contentHeight}px`;
  });
});
