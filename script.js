// M Taquito — comportamiento compartido del sitio

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
      var nombre = document.getElementById("nombre").value.trim() || "amig@";
      if (confirm) {
        confirm.textContent =
          "¡Gracias, " + nombre + "! Tu solicitud de reserva fue registrada. " +
          "Te confirmaremos por teléfono o correo en las próximas horas.";
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
    pic.setAttribute("aria-label", "Ver más grande: " + pic.alt);
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
    pic.setAttribute("aria-label", "Ver más grande: " + pic.alt);
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
