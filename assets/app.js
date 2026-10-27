(function () {
  const homeGrid = document.querySelector('#form-grid');
  if (homeGrid) {
    homeGrid.innerHTML = Object.entries(CURRICULUM).map(([key, form], index) => `
      <article class="form-accordion-item" style="--accent:${form.accent};--delay:${index * 45}ms">
        <button class="form-summary" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="panel-${key}">
          <span class="form-number">${String(index + 1).padStart(2, '0')}</span>
          <span class="summary-title"><strong>${form.label}</strong><span><b>${form.name}</b><small>${form.chapters.length} 個章節 · 點擊展開</small></span></span>
          <span class="expand-icon" aria-hidden="true">＋</span>
        </button>
        <div class="form-panel" id="panel-${key}" ${index === 0 ? '' : 'hidden'}>
          <div class="panel-head"><p>${form.intro}</p><a href="forms/${key}.html">進入完整 ${form.label} 頁面 →</a></div>
          <div class="quick-chapters">
            ${form.chapters.map((ch, chapterIndex) => `
              <details class="quick-chapter ${ch[3] ? 'has-resource' : ''}" data-search="${escapeHTML([form.label, ch[0], ch[1], ...ch[2]].join(' '))}">
                <summary>
                  <span class="quick-index">${String(chapterIndex + 1).padStart(2, '0')}</span>
                  <span><strong>${ch[1]}</strong><small>${ch[0]}</small></span>
                  <span class="chapter-expand" aria-hidden="true">⌄</span>
                </summary>
                <div class="section-menu">
                  ${ch[2].map((section, sectionIndex) => {
                    const sectionCode = `${chapterIndex + 1}.${sectionIndex + 1}`;
                    return ch[3] && sectionIndex === 0
                      ? `<a class="section-row section-live" href="${ch[3]}"><span>${sectionCode}</span><b>${section}</b><em>互動程式 ↗</em></a>`
                      : `<div class="section-row"><span>${sectionCode}</span><b>${section}</b><em>準備中</em></div>`;
                  }).join('')}
                </div>
              </details>`).join('')}
          </div>
        </div>
      </article>`).join('');
    homeGrid.querySelectorAll('.form-summary').forEach(button => {
      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!open));
        document.querySelector(`#${button.getAttribute('aria-controls')}`).hidden = open;
      });
    });

    const globalSearch = document.querySelector('#global-search');
    globalSearch.addEventListener('input', () => {
      const query = globalSearch.value.trim().toLowerCase();
      homeGrid.querySelectorAll('.form-accordion-item').forEach((formItem, formIndex) => {
        let matches = 0;
        formItem.querySelectorAll('.quick-chapter').forEach(chapter => {
          const match = !query || chapter.dataset.search.toLowerCase().includes(query);
          chapter.hidden = !match;
          chapter.open = Boolean(query && match);
          if (match) matches++;
        });
        formItem.hidden = Boolean(query && matches === 0);
        const summary = formItem.querySelector('.form-summary');
        const panel = formItem.querySelector('.form-panel');
        const shouldOpen = query ? matches > 0 : formIndex === 0;
        summary.setAttribute('aria-expanded', String(shouldOpen));
        panel.hidden = !shouldOpen;
      });
    });
    return;
  }

  const level = document.body.dataset.level;
  const form = CURRICULUM[level];
  const shell = document.querySelector('#site-shell');
  if (!form || !shell) return;

  const navItems = Object.entries(CURRICULUM).map(([key, item]) => `
    <a href="${key}.html" class="level-link ${key === level ? 'active' : ''}" style="--accent:${item.accent}">
      <span>${item.label}</span><small>${item.name}</small>
    </a>`).join('');

  shell.innerHTML = `
    <aside class="sidebar" id="sidebar">
      <a class="brand sidebar-brand" href="../index.html">
        <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <span><strong>數學學習導航</strong><small>Math Learning Hub</small></span>
      </a>
      <nav aria-label="年級導覽">${navItems}</nav>
      <div class="sidebar-footer"><span class="status-dot"></span><span>1 個互動程式已上線</span></div>
    </aside>

    <div class="page-wrap">
      <header class="mobile-header">
        <button class="menu-button" id="menu-button" aria-controls="sidebar" aria-expanded="false">☰</button>
        <a href="../index.html">數學學習導航</a><span>${form.label}</span>
      </header>
      <main class="curriculum-main" style="--accent:${form.accent}">
        <nav class="breadcrumb"><a href="../index.html">首頁</a><span>/</span><span>${form.label}</span></nav>
        <section class="form-hero">
          <div><p class="eyebrow">${form.label} CURRICULUM</p><h1>${form.name}</h1><p>${form.intro}</p></div>
          <div class="chapter-total"><strong>${String(form.chapters.length).padStart(2, '0')}</strong><span>CHAPTERS<br>課本章節</span></div>
        </section>

        <section class="toolbar" aria-label="章節搜尋">
          <label class="search-box"><span aria-hidden="true">⌕</span><input id="chapter-search" type="search" placeholder="搜尋章節或知識點…" autocomplete="off"></label>
          <div class="legend"><span><i class="live"></i>已有資源</span><span><i></i>準備中</span></div>
        </section>

        <section class="chapter-list" id="chapter-list">
          ${form.chapters.map((ch, index) => chapterCard(ch, index, form.accent)).join('')}
        </section>
        <p class="empty-state" id="empty-state" hidden>找不到相符的章節或知識點。</p>
        <section class="roadmap-note"><span>＋</span><div><strong>為日後擴充而設</strong><p>每個章節可逐步加入互動程式、筆記、例題及練習，毋須重新改動整個網站結構。</p></div></section>
      </main>
      <footer class="page-footer"><span>數學學習導航</span><a href="../index.html">返回年級選擇 ↑</a></footer>
    </div>
    <button class="scrim" id="scrim" aria-label="關閉選單"></button>`;

  const search = document.querySelector('#chapter-search');
  const cards = [...document.querySelectorAll('.chapter-card')];
  const empty = document.querySelector('#empty-state');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const match = card.textContent.toLowerCase().includes(query);
      card.hidden = !match;
      if (match) shown++;
    });
    empty.hidden = shown !== 0;
  });

  const menu = document.querySelector('#menu-button');
  const scrim = document.querySelector('#scrim');
  const toggleMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
  };
  menu.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
  scrim.addEventListener('click', () => toggleMenu(false));

  function chapterCard(ch, index, accent) {
    const [en, zh, points, url] = ch;
    const searchable = [en, zh, ...points].join(' ');
    return `<article class="chapter-card ${url ? 'is-live' : ''}" data-search="${escapeHTML(searchable)}">
      <div class="chapter-index"><span>CH.</span><strong>${String(index + 1).padStart(2, '0')}</strong></div>
      <div class="chapter-content">
        <div class="chapter-heading">
          <div><p>${zh}</p><h2>${en}</h2></div>
          ${url ? '<span class="available-tag">● 已上線</span>' : '<span class="coming-tag">準備中</span>'}
        </div>
        <div class="knowledge-points">${points.map((p, sectionIndex) => `<span><b>${index + 1}.${sectionIndex + 1}</b>${p}</span>`).join('')}</div>
        ${url ? `<a class="chapter-button" href="${url}">進入 Chapter ${index + 1} 互動程式 <span>↗</span></a>` : '<p class="coming-copy">互動內容將逐步加入</p>'}
      </div>
    </article>`;
  }

  function escapeHTML(value) {
    return value.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }
})();
