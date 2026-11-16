/* Efeitos da página: carrossel de conversas, animações de entrada e rolagem suave até a oferta.
   Tudo é melhoria progressiva: sem JavaScript, o conteúdo continua visível e os links funcionam.
   Com "movimento reduzido" ligado no aparelho, os efeitos ficam mais suaves em vez de sumirem
   (as entradas viram só fade e o carrossel continua, pausando ao toque). */
(function () {
  'use strict';
  var cancelaRolagem = function () {};

  /* ===================== Carrossel de conversas ===================== */
  function iniciaConversas() {
    var itens = Array.isArray(window.FEEDBACKS) ? window.FEEDBACKS : [];
    var grid = document.getElementById('fb-grid');
    var secao = document.getElementById('feedbacks');
    if (!grid || !secao || !itens.length) return;
    document.documentElement.classList.add('tem-feedback');

    var trilho = document.createElement('div');
    trilho.className = 'fb-track';
    var grupo = document.createElement('div');
    grupo.className = 'fb-group';

    itens.forEach(function (item, indice) {
      var card = document.createElement('article');
      card.className = 'fb';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Ler conversa de ' + (item.nome || 'cliente'));

      var citacao = document.createElement('blockquote');
      citacao.textContent = item.texto || '';

      if (item.imagem) {
        var img = document.createElement('img');
        img.className = 'print';
        img.alt = 'Conversa de ' + (item.nome || 'cliente');
        // O print só baixa quando a seção se aproxima (ver carregaPrints), para não disputar
        // banda com o topo da página. Largura/altura reservam o espaço e evitam pulos no layout.
        img.decoding = 'async';
        img.width = 600;
        img.height = 1066;
        img.setAttribute('data-src', item.imagem);
        card.appendChild(img);
        citacao.hidden = true;
      }
      card.appendChild(citacao);

      var autor = document.createElement('div');
      autor.className = 'fb-autor';
      var rotulo = document.createElement('div');
      var nome = document.createElement('b');
      nome.textContent = item.nome || '';
      var desc = document.createElement('small');
      desc.textContent = item.descricao || '';
      rotulo.appendChild(nome);
      rotulo.appendChild(desc);
      autor.appendChild(rotulo);
      card.appendChild(autor);
      grupo.appendChild(card);
    });

    trilho.appendChild(grupo);
    // Segunda cópia idêntica: a animação anda exatamente uma cópia (-50%) e recomeça sem salto visual.
    var copia = grupo.cloneNode(true);
    copia.setAttribute('aria-hidden', 'true');
    copia.querySelectorAll('.fb').forEach(function (card) { card.tabIndex = -1; });
    trilho.appendChild(copia);
    grid.replaceChildren(trilho);

    // Se um print falhar, mostra a transcrição no lugar (nas duas cópias).
    trilho.addEventListener('error', function (e) {
      var img = e.target;
      if (!img.classList || !img.classList.contains('print')) return;
      img.hidden = true;
      var citacao = img.parentNode.querySelector('blockquote');
      if (citacao && citacao.textContent) citacao.hidden = false;
    }, true);

    // Velocidade constante (~55 px/s), independente da largura da tela.
    var larguraAnterior = 0;
    function ajustaVelocidade() {
      var largura = grupo.getBoundingClientRect().width;
      if (largura < 1 || Math.abs(largura - larguraAnterior) < 1) return;
      larguraAnterior = largura;
      trilho.style.setProperty('--fb-duracao', (largura / 55).toFixed(1) + 's');
    }
    ajustaVelocidade();
    if ('ResizeObserver' in window) new ResizeObserver(ajustaVelocidade).observe(grupo);

    // Baixa todos os prints de uma vez (as duas cópias usam o mesmo arquivo, vindo do cache)
    // quando o visitante está a ~1,5 tela da seção, para já estarem prontos ao chegar.
    function carregaPrints() {
      trilho.querySelectorAll('img[data-src]').forEach(function (img) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
      });
    }
    if ('IntersectionObserver' in window) {
      var aproximacao = new IntersectionObserver(function (entradas) {
        if (!entradas[0].isIntersecting) return;
        aproximacao.disconnect();
        carregaPrints();
      }, { rootMargin: '150% 0px' });
      aproximacao.observe(grid);
    } else {
      carregaPrints();
    }

    // Só anda quando a seção está na tela (começa ao chegar nela).
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        secao.classList.toggle('fb-visivel', entradas[0].isIntersecting);
      }, { rootMargin: '100px 0px' }).observe(grid);
    } else {
      secao.classList.add('fb-visivel');
    }

    // Ampliar para leitura: pausa ao tocar, retoma ao fechar.
    var janela = null;
    var origem = null;
    function fecha() {
      if (!janela) return;
      janela.remove();
      janela = null;
      document.documentElement.classList.remove('fb-travado');
      secao.classList.remove('fb-lendo');
      if (origem && origem.tabIndex >= 0) origem.focus({ preventScroll: true });
    }
    function abre(card) {
      if (janela) return;
      var img = card.querySelector('img.print');
      if (!img || img.hidden) return;
      cancelaRolagem();
      secao.classList.add('fb-lendo');
      origem = card;

      janela = document.createElement('div');
      janela.className = 'fb-zoom';
      janela.setAttribute('role', 'dialog');
      janela.setAttribute('aria-modal', 'true');
      janela.setAttribute('aria-label', img.alt);
      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'fb-zoom-fechar';
      botao.textContent = '✕ Fechar';
      var grande = document.createElement('img');
      grande.src = img.currentSrc || img.src;
      grande.alt = img.alt;
      janela.appendChild(botao);
      janela.appendChild(grande);

      // Toque em qualquer lugar fecha; arrastar para ler a conversa longa não fecha.
      janela.addEventListener('click', fecha);
      janela.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') { e.preventDefault(); botao.focus(); }
      });
      document.documentElement.classList.add('fb-travado');
      document.body.appendChild(janela);
      botao.focus({ preventScroll: true });
    }
    trilho.addEventListener('click', function (e) {
      var card = e.target.closest('.fb');
      if (card) abre(card);
    });
    trilho.addEventListener('keydown', function (e) {
      var card = e.target.closest('.fb');
      if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); abre(card); }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecha(); });
  }

  /* ===================== Rolagem suave até a oferta ===================== */
  function iniciaRolagem() {
    var quadro = null;
    cancelaRolagem = function () {
      if (quadro !== null) cancelAnimationFrame(quadro);
      quadro = null;
    };
    // Qualquer gesto do visitante devolve o controle na hora.
    ['wheel', 'touchstart', 'pointerdown'].forEach(function (tipo) {
      window.addEventListener(tipo, cancelaRolagem, { passive: true });
    });
    window.addEventListener('keydown', function (e) {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Escape'].indexOf(e.key) >= 0) cancelaRolagem();
    });

    function suaviza(p) { return p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }

    document.addEventListener('click', function (e) {
      var ancora = e.target.closest('a[href^="#"]');
      if (!ancora || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var id = ancora.getAttribute('href').slice(1);
      var alvo = id && document.getElementById(id);
      if (!alvo) return;
      e.preventDefault();
      cancelaRolagem();

      var inicio = window.scrollY;
      // Respeita o scroll-margin-top do alvo e a altura real da barra fixa do timer
      // (que pode ocupar 2 linhas no celular quando o tempo acaba).
      var barra = document.getElementById('barra-oferta');
      var margem = Math.max(parseFloat(getComputedStyle(alvo).scrollMarginTop) || 8,
        barra ? barra.getBoundingClientRect().height + 16 : 0);
      function destino() {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        return Math.max(0, Math.min(max, alvo.getBoundingClientRect().top + window.scrollY - margem));
      }
      var distancia = Math.abs(destino() - inicio);
      if (distancia < 4) return;
      // Longe = mais tempo, para as seções passarem visíveis; com limite para não cansar.
      var duracao = Math.max(900, Math.min(4200, distancia * 0.45));
      var t0 = null;
      function passo(agora) {
        if (t0 === null) t0 = agora;
        var p = Math.min(1, (agora - t0) / duracao);
        // O destino é recalculado a cada quadro, caso imagens terminem de carregar no caminho.
        window.scrollTo(0, inicio + (destino() - inicio) * suaviza(p));
        quadro = p < 1 ? requestAnimationFrame(passo) : null;
      }
      quadro = requestAnimationFrame(passo);
    });
  }

  /* ===================== Animações de entrada ao rolar ===================== */
  function iniciaEntradas() {
    if (!('IntersectionObserver' in window)) return;
    var seletor = [
      'section .kicker', 'section h2', 'section .sub', '.frase-forte', '.passo-folha', '.seta-prog',
      '.checklist li', '.alivio', '.comp-card', '.problema', '.total-folhas',
      '.fb-ajuda', '.fb-grid', '.bonus-card', '.so-premium', '.opcao', '.tudo', '.plano',
      '.oferta .confianca', '.garantia', '.faq details', '.final p', '.final .cursiva', '.cta-box'
    ].join(',');
    var pendentes = [];

    function revela(el) {
      el.classList.remove('rv-pendente');
      el.classList.add('rv-in');
    }
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        revela(entrada.target);
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    try {
      var alturaTela = window.innerHeight;
      document.querySelectorAll(seletor).forEach(function (el) {
        // O que já está na tela ao abrir não pisca: aparece direto.
        if (el.getBoundingClientRect().top < alturaTela) return;
        var irmaos = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.matches(seletor); });
        el.style.setProperty('--atraso', Math.min(irmaos.indexOf(el), 4) * 0.1 + 's');
        el.classList.add('rv', 'rv-pendente');
        pendentes.push(el);
        observador.observe(el);
      });
    } catch (erro) {
      pendentes.forEach(revela);
      observador.disconnect();
      throw erro;
    }

    // Garantia: na rolagem rápida (ex.: CTA até a oferta) o observador pode pular itens que
    // passaram direto. Qualquer item que já ficou acima da tela é revelado, nunca fica invisível.
    var agendado = false;
    function varre() {
      agendado = false;
      pendentes = pendentes.filter(function (el) {
        if (!el.classList.contains('rv-pendente')) return false;
        if (el.getBoundingClientRect().bottom < 0) { revela(el); observador.unobserve(el); return false; }
        return true;
      });
      if (!pendentes.length) window.removeEventListener('scroll', aoRolar);
    }
    function aoRolar() { if (!agendado) { agendado = true; requestAnimationFrame(varre); } }
    window.addEventListener('scroll', aoRolar, { passive: true });
  }

  // Cada efeito inicia isolado: se um falhar, os outros funcionam e o conteúdo segue visível.
  [iniciaRolagem, iniciaConversas, iniciaEntradas].forEach(function (inicia) {
    try { inicia(); } catch (erro) { console.error('Efeito da página não iniciou:', erro); }
  });
})();
