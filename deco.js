/* Decoração infantil: panda mascote, brinquedos e material escolar animados no fundo.
   Só visual: não muda nenhum texto, botão ou link da página.
   Desenhos próprios em SVG (sem imagens para baixar), estilo fofinho + detalhes em pixel. */
(function () {
  var T = "#1f2a44"; // contorno (mesma cor do texto da página)

  // ---------- Desenhos ----------
  var D = {
    lapis:
      '<svg viewBox="0 0 120 40"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<rect x="18" y="8" width="70" height="24" rx="3" fill="#ffd54a"/>' +
      '<path d="M18 16h70M18 24h70" stroke="#e8b923" stroke-width="2"/>' +
      '<rect x="4" y="8" width="16" height="24" rx="6" fill="#ff8fab"/>' +
      '<rect x="16" y="8" width="7" height="24" fill="#c9d1de"/>' +
      '<path d="M88 8l26 12-26 12z" fill="#f6d5a8"/>' +
      '<path d="M106 16.3l8 3.7-8 3.7z" fill="' + T + '"/></g></svg>',

    caderno:
      '<svg viewBox="0 0 90 110"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<rect x="12" y="6" width="72" height="98" rx="8" fill="#7cc6ff"/>' +
      '<rect x="26" y="20" width="48" height="26" rx="5" fill="#fff"/>' +
      '<path d="M33 30h34M33 37h24" stroke="#f08a8a" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M40 70l6 12 13 1-10 9 3 13-12-7-12 7 3-13-10-9 13-1z" fill="#ffd54a" transform="translate(5 -12) scale(.85)"/>' +
      '<g fill="#fff"><rect x="4" y="16" width="16" height="7" rx="3.5"/><rect x="4" y="38" width="16" height="7" rx="3.5"/><rect x="4" y="60" width="16" height="7" rx="3.5"/><rect x="4" y="82" width="16" height="7" rx="3.5"/></g></g></svg>',

    giz:
      '<svg viewBox="0 0 120 34"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<rect x="6" y="6" width="84" height="22" rx="5" fill="#7c5cff"/>' +
      '<path d="M26 6v22M70 6v22" stroke="#5a3fd6" stroke-width="3"/>' +
      '<path d="M90 8l22 7v4l-22 7z" fill="#9d84ff"/></g></svg>',

    bloco:
      '<svg viewBox="0 0 100 100"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<path d="M20 30l30-16 34 14v46L50 90 16 74z" fill="#ff9f43"/>' +
      '<path d="M16 30l34 14 34-16M50 44v46" fill="none"/>' +
      '<path d="M16 30l34 14v46L16 74z" fill="#ffb86b"/>' +
      '<path d="M50 14l34 14-34 16-34-14z" fill="#ffd08f"/></g>' +
      '<text x="33" y="76" font-family="Nunito,Arial,sans-serif" font-weight="900" font-size="28" fill="' + T + '" text-anchor="middle" transform="skewY(22) translate(0 -14)">A</text>' +
      '<text x="67" y="76" font-family="Nunito,Arial,sans-serif" font-weight="900" font-size="26" fill="' + T + '" text-anchor="middle" transform="skewY(-22) translate(0 30)">B</text></svg>',

    bola:
      '<svg viewBox="0 0 100 100"><g stroke="' + T + '" stroke-width="3">' +
      '<circle cx="50" cy="50" r="42" fill="#fff"/>' +
      '<path d="M50 8a42 42 0 0 1 36 21L50 50z" fill="#ff7aa2"/>' +
      '<path d="M86 71a42 42 0 0 1-36 21V50z" fill="#ffd54a"/>' +
      '<path d="M14 71a42 42 0 0 1 0-42l36 21z" fill="#4fc3f7"/>' +
      '<circle cx="50" cy="50" r="7" fill="#fff"/></g></svg>',

    foguete:
      '<svg viewBox="0 0 80 120"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<path d="M30 96c-2 10 4 18 10 22 6-4 12-12 10-22z" fill="#ff9f43"/>' +
      '<path d="M22 70L8 92h20zM58 70l14 22H52z" fill="#e0473b"/>' +
      '<path d="M40 4c18 14 22 40 16 92H24C18 44 22 18 40 4z" fill="#fff"/>' +
      '<circle cx="40" cy="46" r="10" fill="#7cc6ff"/>' +
      '<path d="M28 20c8-6 16-6 24 0" fill="none" stroke="#e0473b" stroke-width="5"/></g></svg>',

    aviao:
      '<svg viewBox="0 0 110 80"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<path d="M4 38L104 6 70 74 48 52z" fill="#fff"/>' +
      '<path d="M104 6L48 52l-6 22 12-16" fill="#dfe8f7"/></g></svg>',

    ursinho:
      '<svg viewBox="0 0 100 110"><g stroke="' + T + '" stroke-width="3">' +
      '<circle cx="24" cy="22" r="13" fill="#c98b5a"/><circle cx="76" cy="22" r="13" fill="#c98b5a"/>' +
      '<circle cx="24" cy="22" r="6" fill="#f2c9a0" stroke="none"/><circle cx="76" cy="22" r="6" fill="#f2c9a0" stroke="none"/>' +
      '<ellipse cx="50" cy="86" rx="30" ry="22" fill="#c98b5a"/>' +
      '<circle cx="50" cy="44" r="30" fill="#c98b5a"/>' +
      '<ellipse cx="50" cy="54" rx="13" ry="10" fill="#f2c9a0"/></g>' +
      '<circle cx="39" cy="40" r="4" fill="' + T + '"/><circle cx="61" cy="40" r="4" fill="' + T + '"/>' +
      '<ellipse cx="50" cy="50" rx="5" ry="3.5" fill="' + T + '"/>' +
      '<path d="M45 57q5 5 10 0" fill="none" stroke="' + T + '" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M42 82l8 4 8-4-8 10z" fill="#ff7aa2" stroke="' + T + '" stroke-width="2.5" stroke-linejoin="round"/></svg>',

    arcoiris:
      '<svg viewBox="0 0 220 120"><g fill="none" stroke-width="12">' +
      '<path d="M20 112a90 90 0 0 1 180 0" stroke="#ff6b6b"/>' +
      '<path d="M32 112a78 78 0 0 1 156 0" stroke="#ffa94d"/>' +
      '<path d="M44 112a66 66 0 0 1 132 0" stroke="#ffd43b"/>' +
      '<path d="M56 112a54 54 0 0 1 108 0" stroke="#69db7c"/>' +
      '<path d="M68 112a42 42 0 0 1 84 0" stroke="#4dabf7"/>' +
      '<path d="M80 112a30 30 0 0 1 60 0" stroke="#9775fa"/></g>' +
      '<g fill="#fff" stroke="#cfe3f5" stroke-width="2.5">' +
      '<path d="M2 116c0-10 8-16 16-14 2-10 16-12 22-4 8-2 16 4 14 18z"/>' +
      '<path d="M166 116c0-10 8-16 16-14 2-10 16-12 22-4 8-2 16 4 14 18z"/></g></svg>',

    nuvemFofa:
      '<svg viewBox="0 0 130 70"><path d="M14 62c-12 0-14-20 2-22 0-16 20-24 32-12 6-18 34-20 42-2 14-6 30 4 26 20 12 2 12 16 0 16z" ' +
      'fill="#fff" stroke="#cfe3f5" stroke-width="3" stroke-linejoin="round"/></svg>',

    cadernoAberto:
      '<svg viewBox="0 0 120 80"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<path d="M60 14C44 6 22 6 6 12v60c16-6 38-6 54 2z" fill="#fff"/>' +
      '<path d="M60 14c16-8 38-8 54-2v60c-16-6-38-6-54 2z" fill="#fff"/>' +
      '<path d="M60 14v60" /></g>' +
      '<g stroke="#9cc4ee" stroke-width="2"><path d="M14 28c12-3 26-3 38 1M14 40c12-3 26-3 38 1M14 52c12-3 26-3 38 1"/>' +
      '<path d="M68 29c12-4 26-4 38-1M68 41c12-4 26-4 38-1M68 53c12-4 26-4 38-1"/></g>' +
      '<path d="M16 34c4-8 8 8 12 0s8 8 12 0" fill="none" stroke="#e0473b" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M70 35c3-6 6 6 9 0s6 6 9 0 6 6 9 0" fill="none" stroke="#2f6fd6" stroke-width="2.5" stroke-linecap="round"/></svg>',

    sol:
      '<svg viewBox="0 0 140 140"><g class="sol-raios" stroke="#ffb300" stroke-width="7" stroke-linecap="round">' +
      '<path d="M70 6v16M70 118v16M6 70h16M118 70h16M24.7 24.7l11.3 11.3M104 104l11.3 11.3M24.7 115.3L36 104M104 36l11.3-11.3"/></g>' +
      '<circle cx="70" cy="70" r="38" fill="#ffd43b" stroke="#f59f00" stroke-width="4"/>' +
      '<circle cx="56" cy="64" r="5" fill="' + T + '"/><circle cx="84" cy="64" r="5" fill="' + T + '"/>' +
      '<circle cx="57.5" cy="62.5" r="1.8" fill="#fff"/><circle cx="85.5" cy="62.5" r="1.8" fill="#fff"/>' +
      '<circle cx="48" cy="78" r="6" fill="#ff8a65" opacity=".6"/><circle cx="92" cy="78" r="6" fill="#ff8a65" opacity=".6"/>' +
      '<path d="M58 80q12 12 24 0" fill="none" stroke="' + T + '" stroke-width="4" stroke-linecap="round"/></svg>',

    pipa:
      '<svg viewBox="0 0 110 150"><g stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
      '<path d="M55 4L100 46 55 96 10 46z" fill="#ff8a3d"/>' +
      '<path d="M55 4L100 46H55zM55 96L10 46h45z" fill="#ff6b6b"/>' +
      '<path d="M55 4v92M10 46h90" fill="none" stroke-width="2"/></g>' +
      '<path d="M55 96c-10 12 10 18 0 30s10 18 0 22" fill="none" stroke="' + T + '" stroke-width="2"/>' +
      '<g fill="#ffd43b" stroke="' + T + '" stroke-width="2"><path d="M48 108l7 4-7 4zM62 124l-7 4 7 4z"/></g></svg>',

    arvore:
      '<svg viewBox="0 0 120 150"><path d="M52 92h16l4 54H48z" fill="#b07a4f" stroke="' + T + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M60 8c22 0 36 16 34 32 16 8 18 34 0 44-6 16-30 20-40 10-18 6-38-6-36-24-14-10-8-34 8-38 0-16 14-24 34-24z" fill="#69c56b" stroke="' + T + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<g fill="#8fdc7f"><circle cx="44" cy="36" r="10"/><circle cx="74" cy="58" r="8"/><circle cx="40" cy="70" r="6"/></g>' +
      '<g fill="#ff6b6b" stroke="' + T + '" stroke-width="2"><circle cx="70" cy="30" r="5"/><circle cx="34" cy="54" r="5"/><circle cx="84" cy="78" r="5"/></g></svg>',

    arbusto:
      '<svg viewBox="0 0 140 70"><path d="M6 66c-6-16 6-28 20-24 2-18 26-24 38-10 10-14 36-12 40 6 16-4 32 10 28 28z" fill="#5cb85c" stroke="' + T + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<g fill="#86d27a"><circle cx="40" cy="44" r="8"/><circle cx="88" cy="40" r="7"/></g>' +
      '<g fill="#fff" stroke="' + T + '" stroke-width="1.5"><circle cx="62" cy="50" r="4"/><circle cx="110" cy="54" r="4"/></g>' +
      '<g fill="#ffd43b"><circle cx="62" cy="50" r="1.6"/><circle cx="110" cy="54" r="1.6"/></g></svg>',

    // Detalhes em pixel (8 bits)
    estrela:
      '<svg viewBox="0 0 11 11" shape-rendering="crispEdges"><g fill="#ffd54a">' +
      '<rect x="5" y="0" width="1" height="11"/><rect x="4" y="2" width="3" height="7"/>' +
      '<rect x="0" y="4" width="11" height="2"/><rect x="1" y="3" width="9" height="4"/>' +
      '<rect x="3" y="7" width="2" height="3"/><rect x="6" y="7" width="2" height="3"/></g>' +
      '<rect x="4" y="3" width="1" height="1" fill="#fff"/></svg>',

    coracao:
      '<svg viewBox="0 0 9 8" shape-rendering="crispEdges"><g fill="#ff7aa2">' +
      '<rect x="1" y="0" width="2" height="1"/><rect x="6" y="0" width="2" height="1"/>' +
      '<rect x="0" y="1" width="9" height="3"/><rect x="1" y="4" width="7" height="1"/>' +
      '<rect x="2" y="5" width="5" height="1"/><rect x="3" y="6" width="3" height="1"/><rect x="4" y="7" width="1" height="1"/></g>' +
      '<rect x="1" y="1" width="1" height="1" fill="#fff"/></svg>',

    nuvem:
      '<svg viewBox="0 0 16 8" shape-rendering="crispEdges"><g fill="#fff">' +
      '<rect x="4" y="0" width="4" height="1"/><rect x="3" y="1" width="6" height="1"/><rect x="9" y="2" width="4" height="1"/>' +
      '<rect x="1" y="3" width="13" height="1"/><rect x="0" y="4" width="16" height="3"/><rect x="1" y="7" width="14" height="1"/>' +
      '<rect x="2" y="1" width="8" height="3"/><rect x="8" y="2" width="6" height="2"/></g></svg>'
  };

  // Panda (desenho próprio, estilo cartoon: cabeça grande, olhos brilhantes, em pé). braco = braço que acena.
  var P = "#2e3448"; // preto do panda (um pouco azulado, mais fofo)
  function cabeca(cx, cy) {
    // cabeça + orelhas + rosto, centrada em (cx, cy)
    function x(v) { return cx + v; } function y(v) { return cy + v; }
    return '<g stroke="' + T + '" stroke-width="4">' +
      '<circle cx="' + x(-46) + '" cy="' + y(-40) + '" r="19" fill="' + P + '"/>' +
      '<circle cx="' + x(46) + '" cy="' + y(-40) + '" r="19" fill="' + P + '"/>' +
      '<ellipse cx="' + cx + '" cy="' + cy + '" rx="60" ry="52" fill="#fff"/></g>' +
      '<ellipse cx="' + cx + '" cy="' + y(34) + '" rx="40" ry="12" fill="#eef0f6"/>' +
      '<ellipse cx="' + x(-26) + '" cy="' + y(4) + '" rx="19" ry="16" fill="' + P + '" transform="rotate(-12 ' + x(-26) + ' ' + y(4) + ')"/>' +
      '<ellipse cx="' + x(26) + '" cy="' + y(4) + '" rx="19" ry="16" fill="' + P + '" transform="rotate(12 ' + x(26) + ' ' + y(4) + ')"/>' +
      '<g class="panda-olhos">' +
      '<circle cx="' + x(-23) + '" cy="' + y(4) + '" r="9" fill="#0f1424"/><circle cx="' + x(23) + '" cy="' + y(4) + '" r="9" fill="#0f1424"/>' +
      '<circle cx="' + x(-20) + '" cy="' + y(0) + '" r="3.6" fill="#fff"/><circle cx="' + x(26) + '" cy="' + y(0) + '" r="3.6" fill="#fff"/>' +
      '<circle cx="' + x(-26) + '" cy="' + y(8) + '" r="1.6" fill="#fff"/><circle cx="' + x(20) + '" cy="' + y(8) + '" r="1.6" fill="#fff"/></g>' +
      '<circle cx="' + x(-40) + '" cy="' + y(24) + '" r="7" fill="#ff9fb8" opacity=".55"/>' +
      '<circle cx="' + x(40) + '" cy="' + y(24) + '" r="7" fill="#ff9fb8" opacity=".55"/>' +
      '<path d="M' + x(-8) + ' ' + y(17) + 'q8-4 16 0q-1 7-8 8q-7-1-8-8z" fill="#0f1424"/>' +
      '<path d="M' + x(-9) + ' ' + y(28) + 'q4.5 5 9 0q4.5 5 9 0" fill="none" stroke="#0f1424" stroke-width="3" stroke-linecap="round"/>';
  }

  var PANDA =
    '<svg viewBox="0 0 160 210" class="panda-svg"><g stroke="' + T + '" stroke-width="4" stroke-linejoin="round">' +
    // pernas
    '<rect x="50" y="168" width="26" height="38" rx="12" fill="' + P + '"/>' +
    '<rect x="84" y="168" width="26" height="38" rx="12" fill="' + P + '"/>' +
    // braço esquerdo (parado, segurando o lápis)
    '<rect x="32" y="118" width="22" height="50" rx="11" fill="' + P + '" transform="rotate(14 43 122)"/>' +
    // braço direito acenando
    '<g class="panda-braco"><rect x="104" y="74" width="22" height="50" rx="11" fill="' + P + '" transform="rotate(32 115 122)"/></g>' +
    // corpo: ombros pretos + barriga branca
    '<ellipse cx="80" cy="148" rx="36" ry="34" fill="#fff"/>' +
    '<path d="M46 136c4-18 18-26 34-26s30 8 34 26c-10-6-22-8-34-8s-24 2-34 8z" fill="' + P + '"/></g>' +
    '<ellipse cx="80" cy="166" rx="20" ry="9" fill="#eef0f6"/>' +
    // lápis na mão esquerda
    '<g transform="rotate(-25 40 170)" stroke="' + T + '" stroke-width="3" stroke-linejoin="round">' +
    '<rect x="22" y="164" width="44" height="10" rx="2" fill="#ffd54a"/>' +
    '<path d="M66 164l12 5-12 5z" fill="#f6d5a8"/><rect x="16" y="164" width="8" height="10" rx="3" fill="#ff8fab"/></g>' +
    '<circle cx="36" cy="170" r="10" fill="' + P + '" stroke="' + T + '" stroke-width="3"/>' +
    cabeca(80, 62) + '</svg>';

  // Só a cabeça e as mãozinhas, para o panda que espia pela lateral da tela
  var PANDA_ESPIA =
    '<svg viewBox="0 0 140 130">' + cabeca(70, 64) +
    '<g stroke="' + T + '" stroke-width="3.5"><ellipse cx="28" cy="116" rx="15" ry="11" fill="' + P + '"/>' +
    '<ellipse cx="112" cy="116" rx="15" ry="11" fill="' + P + '"/></g></svg>';

  // ---------- Onde fica cada enfeite ----------
  // [desenho, posição, largura (px no celular), animação, atraso (s), giro (graus)]
  // Ficam nos cantos e margens das seções, longe do meio onde estão os textos.
  var LUGARES = {
    topo: [
      ["sol", "top:4px;right:-14px", 72, "sol", 0, 0],
      ["nuvemFofa", "top:8px;left:-22px", 60, "nuvem", 0, 0],
      ["pipa", "top:44%;left:-10px", 34, "pipa", 0, -10],
      ["nuvemFofa", "top:52%;right:-34px", 54, "nuvem", 3, 0],
      ["arvore", "bottom:6px;left:-14px", 56, "fixo", 0, 0],
      ["arbusto", "bottom:0;right:-12px", 64, "fixo", 0, 0],
      ["estrela", "top:24px;right:34%", 16, "pisca", .4, 0]
    ],
    produto: [
      ["caderno", "top:16px;left:3%", 40, "flutua", .3, -12],
      ["arcoiris", "top:14px;right:-18px", 60, "fixo", 0, 0],
      ["giz", "bottom:22px;right:2%", 56, "flutua", 1.6, 20],
      ["cadernoAberto", "top:46%;left:-22px", 52, "flutua", 2.4, 12],
      ["coracao", "bottom:30px;left:5%", 18, "pisca", 2.6, 0]
    ],
    dor: [
      ["aviao", "top:16px;right:4%", 46, "voa", 0, 0],
      ["nuvemFofa", "top:12px;left:-14px", 48, "nuvem", 1, 0],
      ["estrela", "bottom:24px;left:5%", 18, "pisca", 1.4, 0]
    ],
    contraste: [
      ["ursinho", "top:14px;left:3%", 44, "balanca", .5, 0],
      ["lapis", "top:24px;right:-10px", 58, "flutua", 1.8, 25],
      ["bola", "bottom:20px;left:4%", 34, "quica", .8, 0],
      ["arbusto", "bottom:0;right:-14px", 60, "fixo", 0, 0]
    ],
    feedbacks: [
      ["coracao", "top:18px;left:5%", 22, "pisca", 0, 0],
      ["coracao", "top:44px;right:7%", 16, "pisca", 1.3, 0],
      ["arcoiris", "bottom:12px;right:-20px", 64, "fixo", 0, 0]
    ],
    bonus: [
      ["foguete", "top:14px;right:4%", 34, "decola", 0, 12],
      ["bloco", "top:16px;left:3%", 42, "flutua", 1, -8],
      ["cadernoAberto", "bottom:26px;left:3%", 50, "flutua", 1.7, -8],
      ["bola", "bottom:16px;right:4%", 34, "quica", .4, 0]
    ],
    oferta: [
      ["estrela", "top:18px;left:5%", 22, "pisca", 0, 0],
      ["estrela", "top:46px;right:6%", 16, "pisca", 1.1, 0],
      ["arcoiris", "top:10px;right:18%", 54, "fixo", 0, 0]
    ],
    faq: [
      ["caderno", "top:14px;right:4%", 36, "flutua", .5, 10],
      ["nuvemFofa", "top:16px;left:-16px", 50, "nuvem", 0, 0],
      ["giz", "bottom:18px;left:2%", 52, "flutua", 1.5, -15],
      ["arvore", "bottom:0;right:-12px", 50, "fixo", 0, 0]
    ],
    final: [
      ["ursinho", "top:14px;right:4%", 40, "balanca", 0, 0],
      ["arcoiris", "top:16px;left:-16px", 60, "fixo", 0, 0],
      ["coracao", "bottom:22px;right:8%", 20, "pisca", .8, 0],
      ["estrela", "bottom:18px;left:10%", 18, "pisca", 1.9, 0]
    ]
  };

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }

  // Enfeites de fundo em cada seção
  var camadas = [];
  Object.keys(LUGARES).forEach(function (id) {
    var sec = document.getElementById(id);
    if (!sec) return;
    var camada = el("div", "deco");
    camada.setAttribute("aria-hidden", "true");
    LUGARES[id].forEach(function (c) {
      var item = el("span", "deco-item deco-" + c[3], D[c[0]]);
      item.style.cssText = c[1] + ";--w:" + c[2] + "px;--atraso:" + c[4] + "s;--giro:" + c[5] + "deg";
      camada.appendChild(item);
    });
    sec.classList.add("tem-deco");
    sec.insertBefore(camada, sec.firstChild);
    camadas.push(sec);
  });

  // Panda mascote no topo, acenando, com balãozinho
  var visual = document.querySelector(".hero-visual");
  if (visual) {
    var mascote = el("div", "panda-mascote",
      '<span class="panda-balao">Oi! Bora treinar a letrinha?</span>' + PANDA);
    mascote.setAttribute("aria-hidden", "true");
    visual.appendChild(mascote);
  }

  // Panda pequeno que espia pela lateral e some, enquanto a pessoa rola a página
  var espia = el("div", "panda-espia", '<span class="espia-coracao">' + D.coracao + "</span>" + PANDA_ESPIA);
  espia.setAttribute("aria-hidden", "true");
  document.body.appendChild(espia);

  // Pandas (e um ursinho) que sobem da beirada de algumas partes quando a pessoa chega nelas
  var SOBE = [
    ["produto", "ps-dir", PANDA_ESPIA],
    ["contraste", "ps-esq ps-urso", D.ursinho],
    ["bonus", "ps-esq", PANDA_ESPIA],
    ["faq", "ps-dir", PANDA_ESPIA],
    ["final", "ps-esq", PANDA_ESPIA]
  ];
  SOBE.forEach(function (c) {
    var camada = document.querySelector("#" + c[0] + " > .deco");
    if (camada) camada.appendChild(el("span", "panda-sobe " + c[1], c[2]));
  });

  // Panda espiando por trás do plano Premium, na oferta
  var premium = document.querySelector(".plano-premium");
  if (premium) {
    var pp = el("span", "panda-plano", '<span class="espia-coracao">' + D.coracao + "</span>" + PANDA_ESPIA);
    pp.setAttribute("aria-hidden", "true");
    premium.appendChild(pp);
  }

  var parado = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (parado) return;
  document.documentElement.classList.add("movimento");

  // Animações só rodam na seção que está na tela (economiza bateria no celular)
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle("deco-on", e.isIntersecting); });
    }, { rootMargin: "100px 0px" });
    camadas.forEach(function (s) { io.observe(s); });
    if (premium) io.observe(premium);
  } else {
    camadas.forEach(function (s) { s.classList.add("deco-on"); });
    if (premium) premium.classList.add("deco-on");
  }

  // Espiadinha: depois de sair do topo, aparece por ~3s a cada ~10s, alternando o lado.
  // Não aparece com o pop-up de oferta aberto.
  var hero = document.getElementById("topo");
  var lado = 0;
  function espiar() {
    var passouTopo = hero && hero.getBoundingClientRect().bottom < 0;
    var modal = document.querySelector(".modal.on");
    if (passouTopo && !modal && !document.hidden) {
      espia.classList.toggle("dir", lado % 2 === 1);
      espia.style.top = (34 + (lado * 17) % 30) + "vh";
      lado++;
      espia.classList.add("aparece");
      setTimeout(function () { espia.classList.remove("aparece"); }, 3200);
    }
  }
  setTimeout(function () { espiar(); setInterval(espiar, 10000); }, 3000);
})();
