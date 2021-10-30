(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[mobile-menu-open]'),
    closeMobileMenuBtn: document.querySelector('[mobile-menu-close]'),
    MobileMenu: document.querySelector('[mobile-menu]'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    refs.MobileMenu.classList.toggle('is-hidden');
  }
})();