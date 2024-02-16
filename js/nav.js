document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.querySelector(".open-menu");
  const mobileMenu = document.querySelector(".mobile");
  const openIcon = document.getElementById("open");
  const closeIcon = document.getElementById("close");

  openMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    const isMenuOpen = mobileMenu.classList.contains("open");
    const isClickInsideMenu = mobileMenu.contains(target);
    const isClickOnOpenMenu = openMenu.contains(target);

    if (!isClickInsideMenu && !isClickOnOpenMenu && isMenuOpen) {
      toggleMenu();
    }
  });

  function toggleMenu() {
    mobileMenu.classList.toggle("open");
    const isMenuOpen = mobileMenu.classList.contains("open");
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    openIcon.classList.toggle("hidden", isMenuOpen);
    closeIcon.classList.toggle("hidden", !isMenuOpen);
  }
});
