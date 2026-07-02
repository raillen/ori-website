// Anti-FOUC: apply saved theme before first paint
(function() {
  var t = localStorage.getItem('sl-theme');
  if (!t || t === 'auto') {
    t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', t);
})();
