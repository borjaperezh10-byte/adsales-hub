// ─── APP CONTROLLER ──────────────────────────────────────────────────────────

let currentPage = 'home';
let currentSub = null;

const PAGE_META = {
  home:    { title: 'Homepage',       breadcrumb: 'Resumen del mercado publicitario español' },
  tv:      { title: 'TV Lineal',      breadcrumb: 'Inversión, audiencias y CPM · TV convencional' },
  ctv:     { title: 'CTV',            breadcrumb: 'Connected TV · inversión y plataformas' },
  digital: { title: 'Digital',        breadcrumb: 'Search, Social, Display, Vídeo online' },
  radio:   { title: 'Radio & Audio',  breadcrumb: 'Radio convencional y audio digital' },
};

const TIPO_LABELS = {
  SVOD: 'SVOD con publicidad',
  AVOD: 'AVOD',
  BVOD: 'BVOD',
  FAST: 'FAST',
  PVOD: 'PVOD / Pay TV VOD',
};

function navigate(page) {
  destroyAllCharts();
  currentPage = page;
  currentSub = null;

  // Nav items active state
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });

  // CTV subnav visibility
  const subnav = document.getElementById('ctv-subnav');
  subnav.classList.toggle('open', page === 'ctv');

  // Clear sub-item active
  document.querySelectorAll('.nav-sub-item').forEach(el => el.classList.remove('active'));

  // Update header
  const meta = PAGE_META[page] || { title: page, breadcrumb: '' };
  document.getElementById('page-title').textContent = meta.title;
  document.getElementById('page-breadcrumb').textContent = meta.breadcrumb;

  // Render
  switch (page) {
    case 'home':    renderHome(); break;
    case 'tv':      renderTV(); break;
    case 'ctv':     renderCTV(null); break;
    case 'digital': renderDigital(); break;
    case 'radio':   renderRadio(); break;
  }
}

function navigateSub(page, sub) {
  destroyAllCharts();
  currentPage = page;
  currentSub = sub;

  // Parent nav active
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });

  // Subnav open
  const subnav = document.getElementById('ctv-subnav');
  subnav.classList.add('open');

  // Sub item active
  document.querySelectorAll('.nav-sub-item').forEach(el => {
    el.classList.toggle('active', el.dataset.sub === sub);
  });

  const tipo = sub.toUpperCase();
  const tipoLabel = TIPO_LABELS[tipo] || tipo;

  document.getElementById('page-title').textContent = tipo;
  document.getElementById('page-breadcrumb').textContent = `${tipoLabel} · plataformas y métricas España 2024`;

  renderCTVTipo(tipo);
}

function updateTimestamp() {
  const now = DATA.lastUpdate || new Date();
  const timeStr = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  const full = `${dateStr} · ${timeStr}`;
  document.getElementById('last-update-text').textContent = full;
  document.getElementById('sidebar-last-update').textContent = full;
}

function refreshData() {
  const btn = document.getElementById('refresh-btn');
  const icon = document.getElementById('refresh-icon');
  btn.classList.add('loading');
  icon.classList.add('spinning');

  setTimeout(() => {
    simulateDataRefresh();
    updateTimestamp();

    // Re-render current page
    destroyAllCharts();
    if (currentSub) {
      navigateSub(currentPage, currentSub);
    } else {
      navigate(currentPage);
    }

    btn.classList.remove('loading');
    icon.classList.remove('spinning');
  }, 900);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateTimestamp();
  navigate('home');
});
