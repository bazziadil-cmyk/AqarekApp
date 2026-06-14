(function() {
  var style = document.createElement('style');
  style.textContent = [
    '.page-transition {',
    '  animation: pageFadeIn 0.3s ease-out;',
    '}',
    '.page-fade-out {',
    '  animation: pageFadeOut 0.2s ease-in forwards;',
    '}',
    '@keyframes pageFadeIn {',
    '  from { opacity: 0; transform: translateY(8px); }',
    '  to { opacity: 1; transform: translateY(0); }',
    '}',
    '@keyframes pageFadeOut {',
    '  from { opacity: 1; transform: translateY(0); }',
    '  to { opacity: 0; transform: translateY(-4px); }',
    '}'
  ].join('\n');
  document.head.appendChild(style);
  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-transition');
    document.addEventListener('click', function(e) {
      var el = e.target.closest('a');
      if (!el) return;
      var href = el.getAttribute('href');
      if (!href || href === '#' || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
      if (el.getAttribute('target') === '_blank') return;
      e.preventDefault();
      document.body.classList.remove('page-transition');
      document.body.classList.add('page-fade-out');
      setTimeout(function() {
        window.location.href = href;
      }, 200);
    });
  });
})();
