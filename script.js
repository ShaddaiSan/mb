// M Taquito — comportamiento compartido del sitio

// Traducción de textos creados por script (i18n.js define window.MT)
function t(es, vars) {
  if (window.MT) return window.MT.t(es, vars);
  var s = es;
  if (vars) Object.keys(vars).forEach(function (k) { s = s.replace("{" + k + "}", vars[k]); });
  return s;
}

document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Resaltar el enlace de la página activa
  var currentPage = document.body.getAttribute("data-page");
  if (currentPage) {
    document.querySelectorAll(".nav-links a").forEach(function (link) {
      if (link.getAttribute("data-page") === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  // Formulario de reservas: demo sin backend real
  var form = document.getElementById("reserva-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var confirm = document.getElementById("reserva-confirm");
      var nombre = document.getElementById("nombre").value.trim() || t("amig@");
      if (confirm) {
        confirm.textContent = t(
          "¡Gracias, {name}! Tu solicitud de reserva fue registrada. Te confirmaremos por teléfono o correo en las próximas horas.",
          { name: nombre }
        );
        confirm.classList.add("is-visible");
        confirm.setAttribute("tabindex", "-1");
        confirm.focus();
      }
      form.reset();
    });
  }
});

// Visor de fotos: galería y menú
document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("lightbox");
  if (!box || typeof box.showModal !== "function") return;
  var img = box.querySelector("img");
  var title = box.querySelector(".lightbox-title");
  var desc = box.querySelector(".lightbox-desc");
  var price = box.querySelector(".lightbox-price");

  function ownText(el) {
    var t = "";
    el.childNodes.forEach(function (n) { if (n.nodeType === 3) t += n.textContent; });
    return t.trim();
  }

  function open(src, alt, info) {
    img.src = src;
    img.alt = alt;
    if (title) {
      title.textContent = info.title || "";
      desc.textContent = info.desc || "";
      price.textContent = info.price || "";
      box.classList.toggle("has-info", !!(info.title || info.desc));
    }
    box.showModal();
  }

  // Galería
  document.querySelectorAll(".gallery-photo button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pic = btn.querySelector("img");
      open(btn.getAttribute("data-full"), pic.alt, { title: pic.alt });
    });
  });

  // Etiqueta accesible de las fotos ampliables (se recalcula al cambiar de idioma)
  function labelPhoto(pic) {
    pic.setAttribute("aria-label", t("Ver más grande") + ": " + pic.alt);
  }
  document.addEventListener("mtq-lang", function () {
    document.querySelectorAll(".menu-item .photo, .menu-banner").forEach(labelPhoto);
  });

  // Menú: foto de un platillo
  document.querySelectorAll(".menu-item .photo").forEach(function (pic) {
    var item = pic.closest(".menu-item");
    var d = item.querySelector(".desc");
    var p = item.querySelector(".price");
    var go = function () {
      open(pic.src, pic.alt, {
        title: ownText(item.querySelector(".name")),
        desc: d ? d.textContent.trim() : "",
        price: p ? p.textContent.trim() : ""
      });
    };
    pic.setAttribute("tabindex", "0");
    pic.setAttribute("role", "button");
    labelPhoto(pic);
    pic.addEventListener("click", go);
    pic.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
  });

  // Menú: foto de categoría (usa el título y la nota de la sección)
  document.querySelectorAll(".menu-banner").forEach(function (pic) {
    var h2 = pic.closest(".menu-category").querySelector("h2");
    var note = h2.querySelector("span");
    var go = function () {
      open(pic.src, pic.alt, {
        title: ownText(h2),
        desc: note ? note.textContent.replace(/^\s*—\s*/, "").trim() : ""
      });
    };
    pic.setAttribute("tabindex", "0");
    pic.setAttribute("role", "button");
    labelPhoto(pic);
    pic.addEventListener("click", go);
    pic.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
  });

  // Cerrar al tocar fuera de la foto o del texto
  box.addEventListener("click", function (e) {
    if (e.target === box || e.target.tagName === "IMG") box.close();
  });
});

// Menú: barra de categorías (sticky) con resaltado automático
document.addEventListener("DOMContentLoaded", function () {
  var bar = document.querySelector(".menu-nav");
  if (!bar) return;
  var list = bar.querySelector(".menu-nav-list");
  var links = Array.prototype.slice.call(bar.querySelectorAll("a[href^='#']"));
  var sections = links.map(function (a) {
    return document.getElementById(a.getAttribute("href").slice(1));
  });
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var current = null;
  var lockUntil = 0;
  var ticking = false;

  // La altura real de la barra define cuánto margen dejar al llegar a un título
  function measure() {
    document.documentElement.style.setProperty("--menubar-h", bar.offsetHeight + "px");
  }

  // Solo se mueve la barra horizontal, nunca la página
  function centerInBar(link) {
    var max = list.scrollWidth - list.clientWidth;
    if (max <= 0) return;
    var left = link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, Math.min(max, left)), behavior: reduce.matches ? "auto" : "smooth" });
  }

  function setActive(i) {
    if (i === current) return;
    current = i;
    links.forEach(function (a, n) {
      if (n === i) { a.setAttribute("aria-current", "true"); } else { a.removeAttribute("aria-current"); }
    });
    if (i >= 0) centerInBar(links[i]);
  }

  function update() {
    ticking = false;
    if (Date.now() < lockUntil) return;
    // Línea de lectura bajo la barra: el título al que se llega queda por encima de ella
    // y el de la sección siguiente (aun siendo corta) queda por debajo
    var line = bar.offsetHeight + 100;
    var idx = -1;
    sections.forEach(function (s, n) {
      if (s && s.getBoundingClientRect().top <= line) idx = n;
    });
    var atEnd = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2;
    if (atEnd) idx = sections.length - 1;
    setActive(idx);
  }

  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }

  // Al pulsar una categoría se resalta de inmediato y no parpadea por las intermedias
  links.forEach(function (a, n) {
    a.addEventListener("click", function () {
      setActive(n);
      lockUntil = Date.now() + (reduce.matches ? 100 : 1000);
      window.setTimeout(update, reduce.matches ? 120 : 1050);
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { measure(); onScroll(); });
  measure();
  update();
});
