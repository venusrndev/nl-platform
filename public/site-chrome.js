// Site header and footer behaviour on the static pages (7 Oct 2026), matching
// src/components/Navbar.jsx: an in-page target scrolls smoothly, otherwise the
// /#id link loads that homepage section; the menu button opens the drawer.
(function () {
  var toggle = document.querySelector('[data-nlm-toggle]');
  var drawer = document.getElementById('nlm-drawer');

  function setOpen(open) {
    if (!toggle || !drawer) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.hidden = !open;
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }

  document.querySelectorAll('[data-nlm-anchor]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').replace(/^\/?#/, '');
      var el = document.getElementById(id);
      setOpen(false);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', '#' + id);
    });
  });
})();
