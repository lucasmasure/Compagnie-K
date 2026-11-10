/*
 * Logo Compagnie K — version corrigée de https://imgur.com/tPme9rS
 * Le cadre, les textes et les bandeaux sont redessinés en vectoriel (net à toute taille,
 * parfaitement centré, sans marges ni liseré blanc). L'emblème central est repris du
 * fichier imgur, recadré dans son disque et recontrasté via un filtre SVG.
 * Utilisation : <span class="ck-logo"></span> n'importe où dans la page.
 */
(function () {
  var SRC = "https://i.imgur.com/tPme9rS.png";
  var n = 0;

  function build() {
    var id = "ck" + (n++);
    return (
      '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo Compagnie K — Survivre ou mourir">' +
      "<defs>" +
      '<clipPath id="' + id + 'f"><circle cx="200" cy="200" r="180"/></clipPath>' +
      '<clipPath id="' + id + 'e"><circle cx="200" cy="200" r="89.5"/></clipPath>' +
      '<path id="' + id + 't" d="M70,200 A130,130 0 0 1 330,200"/>' +
      '<path id="' + id + 'b" d="M42,200 A158,158 0 0 0 358,200"/>' +
      // Emblème gris acier éclairci, fond rouge ravivé
      '<filter id="' + id + 'c" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="' +
      "1.4 1.25 0 0 0  0 2.55 0 0 0  0 0 2.4 0 0  0 0 0 1 0" +
      '"/></filter>' +
      "</defs>" +
      // Couronne extérieure
      '<circle cx="200" cy="200" r="197" fill="#3a3d44"/>' +
      '<circle cx="200" cy="200" r="189" fill="none" stroke="#a3141b" stroke-width="5"/>' +
      '<circle cx="200" cy="200" r="180" fill="#1b191f"/>' +
      '<circle cx="200" cy="200" r="110" fill="none" stroke="#3a3d44" stroke-width="5"/>' +
      // Bandeau horizontal avec les deux croix
      '<g clip-path="url(#' + id + 'f)">' +
      '<rect x="0" y="176" width="400" height="48" fill="#7a0c11"/>' +
      '<path d="M0,176H400M0,224H400" stroke="#3a3d44" stroke-width="4"/>' +
      "</g>" +
      '<path d="M52,190l20,20M72,190l-20,20M328,190l20,20M348,190l-20,20" stroke="#1b191f" stroke-width="6" stroke-linecap="round"/>' +
      // Disque central + emblème (le « K » sert de secours si imgur ne répond pas)
      '<circle cx="200" cy="200" r="98" fill="#3a3d44"/>' +
      '<circle cx="200" cy="200" r="90" fill="#920000"/>' +
      '<text x="200" y="234" text-anchor="middle" font-family="\'Russo One\',sans-serif" font-size="96" fill="#9a9ca3">K</text>' +
      '<g clip-path="url(#' + id + 'e)"><image href="' + SRC + '" x="-71.4" y="-60.5" width="545" height="521" filter="url(#' + id + 'c)"/></g>' +
      // Textes
      '<text font-family="\'Russo One\',sans-serif" font-size="33" fill="#fff" letter-spacing="2"><textPath href="#' + id + 't" startOffset="50%" text-anchor="middle">COMPAGNIE K</textPath></text>' +
      '<text font-family="\'Rajdhani\',sans-serif" font-weight="700" font-size="21" fill="#e2353c" letter-spacing="5"><textPath href="#' + id + 'b" startOffset="50%" text-anchor="middle">SURVIVRE OU MOURIR</textPath></text>' +
      "</svg>"
    );
  }

  document.querySelectorAll(".ck-logo").forEach(function (el) {
    el.innerHTML = build();
  });

  // Décor des pages intérieures : champ de bataille nocturne dessiné en CSS/SVG,
  // inspiré de l'accueil (orage, incendies, ruines, braises) sans reprendre l'image
  if (!document.body.classList.contains("home")) {
    var bg = document.createElement("div");
    bg.className = "page-bg";
    bg.setAttribute("aria-hidden", "true");
    bg.innerHTML =
      '<div class="pb-clouds"></div>' +
      '<div class="pb-flash"></div>' +
      '<div class="pb-glow"></div>' +
      '<svg class="pb-ruins" viewBox="0 0 1600 300" preserveAspectRatio="xMidYMax slice">' +
      '<path class="far" d="M0 300V210l40-5 20-25 15 5 5-45h15l3-20h6l2 30 24 10 30 35 40-5 30-20 10-50 8-2 4-23h6l4 35 18 5 20 40 60 10 40-20 20 7 10-62 6-2 2-28h8l2 32 22 3 10 45 60 20 60-10 40 20 60-15 20-45 6-4 4-26h12l2-30h6l2 34 18 4 5 42 45 25 80-10 50 20 50-15 20-50 10-2 4-28h12l2 35 32 15 20 35 60 5 40-20 30 5 10-60 10-5 4-40h8l2 38 26 12 10 45 60 20 60-7 40 17 40-25 20-35 10-3 4-22h6l4 40 26 20 30 10v130z"/>' +
      '<path class="near" d="M0 300v-50l60-15 50 10 40-20 40 15 70-10 40 18 60-12 60 14 60-18 60 12 60-16 60 18 60-8 60 14 60-18 60 12 60-16 60 18 60-12 60 14 60-18 60 12 60-14 60 18 60-12 60 14 60-12 40 6v56z"/>' +
      "</svg>" +
      '<div class="pb-embers"></div>' +
      '<div class="pb-shade"></div>';
    document.body.insertBefore(bg, document.body.firstChild);

    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var box = bg.querySelector(".pb-embers");
      var count = innerWidth < 600 ? 10 : 22;
      for (var i = 0; i < count; i++) {
        var e = document.createElement("span");
        var size = 1.5 + Math.random() * 2.5;
        e.className = "ember";
        e.style.left = (Math.random() * 100) + "%";
        e.style.width = e.style.height = size + "px";
        e.style.setProperty("--dx", (Math.random() * 140 - 70) + "px");
        e.style.animationDuration = (12 + Math.random() * 14) + "s";
        e.style.animationDelay = (-Math.random() * 26) + "s";
        box.appendChild(e);
      }
    }
  }

  // Curseur de visée rouge (souris uniquement, le tactile garde son comportement normal)
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var dot = document.createElement("div");
    var ring = document.createElement("div");
    dot.className = "ck-cursor ck-cursor-dot";
    ring.className = "ck-cursor ck-cursor-ring";
    ring.innerHTML =
      '<svg viewBox="0 0 40 40" aria-hidden="true">' +
      '<circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="15.4 5"/>' +
      '<path d="M20 1v8M20 31v8M1 20h8M31 20h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
      "</svg>";
    document.body.appendChild(ring);
    document.body.appendChild(dot);
    document.documentElement.classList.add("ck-cursor-on");

    var mx = -100, my = -100, rx = mx, ry = my, seen = false;
    var INTERACTIVE = "a, button, [role='button'], summary, label, input, select, textarea";

    addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (!seen) { rx = mx; ry = my; seen = true; }
      dot.style.transform = "translate3d(" + mx + "px," + my + "px,0)";
      document.documentElement.classList.remove("ck-cursor-out");
    }, { passive: true });
    addEventListener("mouseover", function (e) {
      ring.classList.toggle("is-hover", !!(e.target.closest && e.target.closest(INTERACTIVE)));
    }, { passive: true });
    document.addEventListener("mouseleave", function () { document.documentElement.classList.add("ck-cursor-out"); });
    addEventListener("mousedown", function () { ring.classList.add("is-down"); });
    addEventListener("mouseup", function () { ring.classList.remove("is-down"); });

    (function follow() {
      // l'anneau suit le point avec un léger retard, comme une lunette qui se recale
      var k = reduce ? 1 : 0.22;
      rx += (mx - rx) * k; ry += (my - ry) * k;
      ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
      requestAnimationFrame(follow);
    })();
  }

  // Menu mobile
  var btn = document.querySelector(".nav-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", open);
    });
  }
})();
