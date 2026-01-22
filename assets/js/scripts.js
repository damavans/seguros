(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    // Cerrar menú al clickear un link
    nav.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  // Swap de imagen en sección socio (desktop)
(function () {
  const items = Array.from(document.querySelectorAll("[data-socio-item]"));
  const imgs = Array.from(document.querySelectorAll("[data-socio-img]"));

  if (!items.length || !imgs.length) return;

  const setActive = (idx) => {
    imgs.forEach((img) => img.classList.remove("is-active"));
    const target = imgs.find((img) => img.getAttribute("data-socio-img") === String(idx));
    if (target) target.classList.add("is-active");
  };

  // Default
  setActive(0);

  items.forEach((item) => {
    const idx = item.getAttribute("data-socio-item");

    // Hover
    item.addEventListener("mouseenter", () => setActive(idx));

    // Teclado / accesibilidad
    item.addEventListener("focus", () => setActive(idx));

    // Touch fallback (tap)
    item.addEventListener("click", () => setActive(idx));
  });
})();


  // Offset por header sticky
  const header = document.querySelector("[data-header]");
  const headerH = header ? header.offsetHeight : 78;

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
