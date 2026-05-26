// ─── PAGE RENDERERS ──────────────────────────────────────────────────────────

function metricCardsHtml(metrics) {
  return `<div class="metrics-grid">${metrics.map(m => `
    <div class="metric-card">
      <div class="label">${m.label}</div>
      <div class="value">${m.value}</div>
      <div class="delta ${m.up ? 'delta-up' : m.up === false ? 'delta-down' : 'delta-neutral'}">${m.delta}</div>
    </div>`).join('')}</div>`;
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function renderHome() {
  const d = DATA.homepage;
  document.getElementById('content').innerHTML = `
    <div class="page-intro">
      <div class="page-intro-text">
        <h2>Mercado publicitario español — 2025</h2>
        <p>Datos consolidados de inversión, audiencias y KPIs de rendimiento para el mercado español. Fuentes: Infoadex, IAB Spain, AIMC, Kantar Media.</p>
      </div>
      <div class="page-intro-stat">
        <div class="big">17.400 M€</div>
        <div class="small">Inversión estimada 2025</div>
      </div>
    </div>

    ${metricCardsHtml(d.metrics)}

    <div class="section-header"><span class="section-title">Inversión y distribución</span></div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Inversión total por año</div>
        <div class="chart-sub">España 2019–2025 (M€)</div>
        <div class="legend" id="leg-inv-home"></div>
        <div style="position:relative;height:200px"><canvas id="c-inv-home" role="img" aria-label="Inversión publicitaria total en España 2019-2025">Tendencia creciente de 13.200M€ en 2019 a 17.400M€ en 2025e.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Cuota por medio</div>
        <div class="chart-sub">2025</div>
        <div class="legend" id="leg-medio-home"></div>
        <div style="position:relative;height:200px"><canvas id="c-medio-home" role="img" aria-label="Cuota de inversión por medio en España 2025">Digital 52%, TV 26%, Exterior 8%, Radio 7%, otros.</canvas></div>
      </div>
    </div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Crecimiento YoY por medio</div>
        <div class="chart-sub">%</div>
        <div style="position:relative;height:185px"><canvas id="c-grow-home" role="img" aria-label="Crecimiento año a año por medio en España">Digital y Exterior crecen; Prensa decrece.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Digital: desglose por formato</div>
        <div class="chart-sub">% s/total digital</div>
        <div class="legend" id="leg-dig-home"></div>
        <div style="position:relative;height:185px"><canvas id="c-dig-home" role="img" aria-label="Desglose de inversión digital por formato en España">Search 38%, Social 29%, Display 16%, Vídeo 13%, otros 4%.</canvas></div>
      </div>
    </div>`;

  setTimeout(() => {
    buildBarChart('c-inv-home', d.inversionAnual.labels,
      [{ label: 'M€', data: d.inversionAnual.data, backgroundColor: d.inversionAnual.data.map((_, i) => i === 6 ? C.blue : C.blue + '88'), borderRadius: 4 }],
      { yMin: 9000, yFmt: v => v.toLocaleString('es-ES') });
    document.getElementById('leg-inv-home').innerHTML = `<span class="legend-item"><span class="legend-dot" style="background:${C.blue}"></span>Total inversión (M€)</span>`;

    buildDoughnutChart('c-medio-home', d.cuotaPorMedio.labels, d.cuotaPorMedio.data, d.cuotaPorMedio.colors);
    document.getElementById('leg-medio-home').innerHTML = legendHtml(d.cuotaPorMedio.labels.slice(0, 4), d.cuotaPorMedio.colors.slice(0, 4));

    buildBarChart('c-grow-home', d.crecimientoYoY.labels,
      [{ label: '%', data: d.crecimientoYoY.data, backgroundColor: d.crecimientoYoY.data.map(v => v >= 0 ? C.teal + 'cc' : C.coral + 'cc'), borderRadius: 4 }],
      { yFmt: v => v + '%' });

    buildDoughnutChart('c-dig-home', d.digitalDesglose.labels, d.digitalDesglose.data, d.digitalDesglose.colors);
    document.getElementById('leg-dig-home').innerHTML = legendHtml(d.digitalDesglose.labels, d.digitalDesglose.colors);
  }, 80);
}

// ── TV LINEAL ─────────────────────────────────────────────────────────────────
function renderTV() {
  const d = DATA.tv;
  document.getElementById('content').innerHTML = `
    <div class="page-intro">
      <div class="page-intro-text">
        <h2>TV Lineal — España 2024</h2>
        <p>Inversión, audiencias, CPM por formato y principales anunciantes en televisión lineal. Fuentes: Infoadex, Kantar Media, Barlovento.</p>
      </div>
      <div class="page-intro-stat">
        <div class="big">1.980 M€</div>
        <div class="small">Inversión TV lineal 2024</div>
      </div>
    </div>

    ${metricCardsHtml(d.metrics)}

    <div class="section-header"><span class="section-title">Inversión y cuotas</span></div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Inversión histórica TV lineal</div>
        <div class="chart-sub">España 2019–2024 (M€)</div>
        <div style="position:relative;height:200px"><canvas id="c-tv-inv" role="img" aria-label="Inversión histórica TV lineal España 2019-2024">Tendencia bajista desde 2022.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Cuota por cadena</div>
        <div class="chart-sub">% s/total TV lineal 2024</div>
        <div class="legend" id="leg-tv-cadena"></div>
        <div style="position:relative;height:200px"><canvas id="c-tv-cadena" role="img" aria-label="Cuota por cadena TV lineal España 2024">Antena 3 lidera con 27%.</canvas></div>
      </div>
    </div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">CPM por formato publicitario</div>
        <div class="chart-sub">€ por mil impresiones</div>
        <div style="position:relative;height:200px"><canvas id="c-tv-cpm" role="img" aria-label="CPM por formato publicitario en TV España">Especiales 22€, estándar 7€.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Audiencia media por franja</div>
        <div class="chart-sub">% share medio</div>
        <div style="position:relative;height:200px"><canvas id="c-tv-franja" role="img" aria-label="Audiencia TV por franja horaria en España">Prime time lidera con 30%.</canvas></div>
      </div>
    </div>

    <div class="section-header"><span class="section-title">Top anunciantes TV lineal</span></div>
    <div class="plat-grid">
      ${d.top_anunciantes.map((a, i) => `
        <div class="plat-card${i === 0 ? ' featured' : ''}">
          <div class="plat-header">
            <span class="plat-name">${a.name}</span>
            <span class="plat-badge" style="background:#E6F1FB;color:#185FA5">${a.sector}</span>
          </div>
          <div class="plat-stat"><span class="plat-stat-label">Inversión est.</span><span class="plat-stat-val">${a.inv}</span></div>
          <div class="plat-stat"><span class="plat-stat-label">GRPs estimados</span><span class="plat-stat-val">${a.grps.toLocaleString('es-ES')}</span></div>
          <div class="plat-stat" style="border:none"><span class="plat-stat-label">Tendencia</span><span class="plat-stat-val ${a.trend === 'up' ? 'trend-up' : a.trend === 'down' ? 'trend-down' : 'trend-stable'}">${a.trend === 'up' ? '↑ Creciendo' : a.trend === 'down' ? '↓ Bajando' : '→ Estable'}</span></div>
        </div>`).join('')}
    </div>`;

  setTimeout(() => {
    buildLineChart('c-tv-inv', d.inversionHistorica.labels,
      [{ label: 'M€', data: d.inversionHistorica.data, borderColor: C.coral, backgroundColor: C.coral + '22', tension: 0.4, fill: true, pointBackgroundColor: C.coral, pointRadius: 4 }],
      { yMin: 1600, yFmt: v => v.toLocaleString('es-ES') });

    buildDoughnutChart('c-tv-cadena', d.cuotaPorCadena.labels, d.cuotaPorCadena.data, d.cuotaPorCadena.colors);
    document.getElementById('leg-tv-cadena').innerHTML = legendHtml(d.cuotaPorCadena.labels, d.cuotaPorCadena.colors);

    buildHBarChart('c-tv-cpm', d.cpmPorFormato.labels, d.cpmPorFormato.data, C.coral, { xFmt: v => v + '€' });

    buildBarChart('c-tv-franja', d.audienciaFranja.labels,
      [{ label: 'Share %', data: d.audienciaFranja.data, backgroundColor: C.navy + 'cc', borderRadius: 4 }],
      { yFmt: v => v + '%' });
  }, 80);
}

// ── CTV OVERVIEW ──────────────────────────────────────────────────────────────
function renderCTV(subpage) {
  if (subpage && DATA.tipos[subpage.toUpperCase()]) {
    renderCTVTipo(subpage.toUpperCase());
    return;
  }

  const d = DATA.ctv;
  document.getElementById('content').innerHTML = `
    <div class="page-intro">
      <div class="page-intro-text">
        <h2>CTV — Connected TV España 2024</h2>
        <p>Inversión, plataformas, CPM y cuotas del ecosistema CTV en España. El canal de mayor crecimiento del mercado publicitario nacional.</p>
      </div>
      <div class="page-intro-stat">
        <div class="big">420 M€</div>
        <div class="small">Inversión CTV 2024 · +44,8%</div>
      </div>
    </div>

    ${metricCardsHtml(d.metrics)}

    <div class="section-header"><span class="section-title">Evolución vs TV lineal</span></div>
    <div class="chart-card full" style="margin-bottom:14px">
      <div class="chart-title">Inversión TV lineal vs CTV</div>
      <div class="chart-sub">España 2020–2024 (M€) — barras apiladas</div>
      <div class="legend" id="leg-ctv-hist"></div>
      <div style="position:relative;height:230px"><canvas id="c-ctv-hist" role="img" aria-label="Inversión TV lineal vs CTV España 2020-2024">TV lineal se mantiene; CTV crece fuertemente.</canvas></div>
    </div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Cuota CTV s/total pantalla</div>
        <div class="chart-sub">% evolución 2020–2024</div>
        <div style="position:relative;height:185px"><canvas id="c-ctv-share" role="img" aria-label="Evolución cuota CTV sobre total pantalla España">De 3% en 2020 a 17% en 2024.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">CPM por tipología</div>
        <div class="chart-sub">€ vs TV lineal de referencia</div>
        <div style="position:relative;height:185px"><canvas id="c-ctv-cpm" role="img" aria-label="CPM por tipología CTV vs TV lineal España">BVOD 18€ lidera; TV lineal 7€ de base.</canvas></div>
      </div>
    </div>

    <div class="section-header"><span class="section-title">Distribución de inversión por tipología</span></div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Cuota de inversión 2024</div>
        <div class="chart-sub">% s/total CTV España</div>
        <div class="legend" id="leg-ctv-tipo"></div>
        <div style="position:relative;height:200px"><canvas id="c-ctv-tipo" role="img" aria-label="Cuota de inversión CTV por tipología España 2024">AVOD 38%, BVOD 27%, FAST 18%, SVOD 12%, PVOD 5%.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Inversión estimada por tipología</div>
        <div class="chart-sub">M€ 2024</div>
        <div style="position:relative;height:200px"><canvas id="c-ctv-tipoinv" role="img" aria-label="Inversión estimada por tipología CTV España 2024 en M€">AVOD 160M€, BVOD 113M€, FAST 76M€, SVOD 50M€, PVOD 21M€.</canvas></div>
      </div>
    </div>

    <div class="section-header"><span class="section-title">Explorar por tipología</span></div>
    <div class="tipo-tabs">
      ${Object.keys(DATA.tipos).map(k => `
        <div class="tipo-tab" style="border-color:${DATA.tipos[k].color}44" onclick="navigateSub('ctv','${k.toLowerCase()}')"
          onmouseover="this.style.borderColor='${DATA.tipos[k].color}';this.style.color='${DATA.tipos[k].color}'"
          onmouseout="this.style.borderColor='${DATA.tipos[k].color}44';this.style.color=''">
          ${k}
        </div>`).join('')}
    </div>`;

  setTimeout(() => {
    const h = d.inversionHistorica;
    buildStackedBarChart('c-ctv-hist', h.labels, [
      { label: 'TV lineal', data: h.tvLineal, backgroundColor: C.coral + 'bb', borderRadius: 4, stack: 's' },
      { label: 'CTV', data: h.ctv, backgroundColor: C.blue + 'cc', borderRadius: 4, stack: 's' },
    ], { yFmt: v => v.toLocaleString('es-ES') });
    document.getElementById('leg-ctv-hist').innerHTML = `
      <span class="legend-item"><span class="legend-dot" style="background:${C.coral}"></span>TV lineal</span>
      <span class="legend-item"><span class="legend-dot" style="background:${C.blue}"></span>CTV</span>`;

    buildLineChart('c-ctv-share', d.shareEvolucion.labels,
      [{ label: '%', data: d.shareEvolucion.data, borderColor: C.blue, backgroundColor: C.blue + '22', tension: 0.4, fill: true, pointBackgroundColor: C.blue, pointRadius: 5 }],
      { yMin: 0, yMax: 22, yFmt: v => v + '%' });

    buildBarChart('c-ctv-cpm', d.cpmPorTipo.labels,
      [{ label: '€', data: d.cpmPorTipo.data, backgroundColor: d.cpmPorTipo.colors, borderRadius: 4 }],
      { yFmt: v => v + '€', yMin: 0 });

    buildDoughnutChart('c-ctv-tipo', d.cuotaTipo.labels, d.cuotaTipo.data, d.cuotaTipo.colors);
    document.getElementById('leg-ctv-tipo').innerHTML = legendHtml(
      d.cuotaTipo.labels.map((l, i) => `${l} ${d.cuotaTipo.data[i]}%`), d.cuotaTipo.colors);

    buildBarChart('c-ctv-tipoinv', d.cuotaTipo.labels,
      [{ label: 'M€', data: [160, 113, 76, 50, 21], backgroundColor: d.cuotaTipo.colors, borderRadius: 4 }],
      { yFmt: v => v + 'M€' });
  }, 80);
}

// ── CTV TIPO DETAIL ───────────────────────────────────────────────────────────
function renderCTVTipo(tipo) {
  const t = DATA.tipos[tipo];
  const plats = t.plataformas;

  document.getElementById('content').innerHTML = `
    <div class="tipo-banner">
      <div class="tipo-banner-badge">${tipo}</div>
      <div class="tipo-banner-text">
        <div class="tipo-banner-title">${t.label} — España 2024</div>
        <div class="tipo-banner-desc">${t.desc}</div>
      </div>
    </div>

    <div class="tipo-tabs" style="margin-bottom:20px">
      ${Object.keys(DATA.tipos).map(k => `
        <div class="tipo-tab${k === tipo ? ' active' : ''}" 
          style="${k === tipo ? `background:${DATA.tipos[k].color};border-color:${DATA.tipos[k].color};color:#fff` : `border-color:${DATA.tipos[k].color}44`}"
          onclick="navigateSub('ctv','${k.toLowerCase()}')"
          ${k !== tipo ? `onmouseover="this.style.borderColor='${DATA.tipos[k].color}';this.style.color='${DATA.tipos[k].color}'" onmouseout="this.style.borderColor='${DATA.tipos[k].color}44';this.style.color=''"` : ''}>
          ${k}
        </div>`).join('')}
    </div>

    ${metricCardsHtml([
      { label: `Inversión total ${tipo}`, value: `${t.invTotal} M€`, delta: 'España 2024', up: true },
      { label: 'Plataformas activas', value: `${plats.length}`, delta: 'en España', up: true },
      { label: 'CPM medio segmento', value: `${Math.round(plats.reduce((a, p) => a + p.cpm, 0) / plats.length)} €`, delta: 'promedio', up: true },
      { label: 'Alcance líder', value: plats[0].alcance, delta: plats[0].name, up: true },
    ])}

    <div class="section-header"><span class="section-title">Plataformas del segmento</span></div>
    <div class="plat-grid">
      ${plats.map((p, i) => `
        <div class="plat-card${i === 0 ? ' featured' : ''}" style="${i === 0 ? `border-color:${t.color}55` : ''}">
          <div class="plat-card-accent" style="${i === 0 ? `background:${t.color}` : ''}"></div>
          <div class="plat-header">
            <span class="plat-name">${p.name}</span>
            <span class="plat-badge" style="background:${t.bg};color:${t.tc}">${tipo}</span>
          </div>
          <div class="plat-stat"><span class="plat-stat-label">Cuota s/${tipo}</span><span class="plat-stat-val" style="color:${t.color}">${p.cuota}%</span></div>
          <div class="plat-stat"><span class="plat-stat-label">Inversión est.</span><span class="plat-stat-val">${p.inv} M€</span></div>
          <div class="plat-stat"><span class="plat-stat-label">Alcance</span><span class="plat-stat-val">${p.alcance} hogares</span></div>
          <div class="plat-stat"><span class="plat-stat-label">CPM medio</span><span class="plat-stat-val">${p.cpm} €</span></div>
          <div class="plat-stat"><span class="plat-stat-label">Rango CPM</span><span class="plat-stat-val">${p.cpmMin}–${p.cpmMax} €</span></div>
          <div class="plat-stat" style="border:none"><span class="plat-stat-label">Usuarios</span><span class="plat-stat-val">${p.usuarios}</span></div>
          <div class="plat-note">${p.nota}</div>
        </div>`).join('')}
    </div>

    <div class="section-header"><span class="section-title">Comparativa dentro de ${tipo}</span></div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Cuota de inversión</div>
        <div class="chart-sub">% s/total ${tipo} · España 2024</div>
        <div class="legend" id="leg-tipo-cuota"></div>
        <div style="position:relative;height:200px"><canvas id="c-tipo-cuota" role="img" aria-label="Cuota de inversión por plataforma dentro de ${tipo}">Distribución de cuota.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Inversión estimada</div>
        <div class="chart-sub">M€ por plataforma</div>
        <div style="position:relative;height:200px"><canvas id="c-tipo-inv" role="img" aria-label="Inversión estimada por plataforma dentro de ${tipo}">Millones de euros.</canvas></div>
      </div>
    </div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">CPM medio por plataforma</div>
        <div class="chart-sub">€ por mil impresiones</div>
        <div style="position:relative;height:${Math.max(160, plats.length * 52 + 60)}px"><canvas id="c-tipo-cpm" role="img" aria-label="CPM medio por plataforma dentro de ${tipo}">Euros por mil impresiones.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Rango de CPM</div>
        <div class="chart-sub">Mínimo – máximo por plataforma</div>
        <div style="position:relative;height:${Math.max(160, plats.length * 52 + 60)}px"><canvas id="c-tipo-range" role="img" aria-label="Rango CPM mínimo y máximo por plataforma dentro de ${tipo}">Rango de CPM.</canvas></div>
      </div>
    </div>`;

  const shades = [t.color + 'ff', t.color + 'cc', t.color + '99', t.color + '66', t.color + '44'];

  setTimeout(() => {
    buildDoughnutChart('c-tipo-cuota', plats.map(p => p.name), plats.map(p => p.cuota), plats.map((_, i) => shades[i] || shades[shades.length - 1]));
    document.getElementById('leg-tipo-cuota').innerHTML = legendHtml(
      plats.map(p => `${p.name} ${p.cuota}%`),
      plats.map((_, i) => shades[i] || shades[shades.length - 1]));

    buildBarChart('c-tipo-inv', plats.map(p => p.name),
      [{ label: 'M€', data: plats.map(p => p.inv), backgroundColor: plats.map((_, i) => shades[i] || shades[shades.length - 1]), borderRadius: 4 }],
      { yFmt: v => v + 'M€' });

    buildHBarChart('c-tipo-cpm', plats.map(p => p.name), plats.map(p => p.cpm), t.color, { xFmt: v => v + '€' });

    buildRangeBar('c-tipo-range', plats.map(p => p.name), plats.map(p => p.cpmMin), plats.map(p => p.cpmMax), t.color, { yFmt: v => v + '€' });
  }, 80);
}

// ── DIGITAL ────────────────────────────────────────────────────────────────────
function renderDigital() {
  const d = DATA.digital;
  document.getElementById('content').innerHTML = `
    <div class="page-intro">
      <div class="page-intro-text">
        <h2>Digital — España 2025</h2>
        <p>Inversión digital por formato, CTR, ROAS y tendencias programáticas. Fuentes: IAB Spain, Kantar, eMarketer.</p>
      </div>
      <div class="page-intro-stat">
        <div class="big">9.048 M€</div>
        <div class="small">Inversión digital 2025e · +10,2%</div>
      </div>
    </div>

    ${metricCardsHtml(d.metrics)}

    <div class="section-header"><span class="section-title">Inversión y rendimiento</span></div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Inversión por formato digital</div>
        <div class="chart-sub">M€ España 2025e</div>
        <div class="legend" id="leg-dig-fmt"></div>
        <div style="position:relative;height:210px"><canvas id="c-dig-fmt" role="img" aria-label="Inversión digital por formato España 2025">Search lidera con 3.439M€.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">CTR medio por canal</div>
        <div class="chart-sub">%</div>
        <div style="position:relative;height:210px"><canvas id="c-dig-ctr" role="img" aria-label="CTR medio por canal digital España">Search 3,5% lidera.</canvas></div>
      </div>
    </div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">ROAS medio por canal</div>
        <div class="chart-sub">× retorno por euro invertido</div>
        <div style="position:relative;height:210px"><canvas id="c-dig-roas" role="img" aria-label="ROAS medio por canal digital España">Email 4,6x y Search 4,1x lideran.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Distribución por formato</div>
        <div class="chart-sub">% s/total digital 2025</div>
        <div class="legend" id="leg-dig-pie"></div>
        <div style="position:relative;height:210px"><canvas id="c-dig-pie" role="img" aria-label="Distribución inversión digital por formato España 2025">Search 38%, Social 29%, Display 16%, Video 13%, otros 4%.</canvas></div>
      </div>
    </div>`;

  setTimeout(() => {
    buildHBarChart('c-dig-fmt', d.inversionFormatos.labels, d.inversionFormatos.data, d.inversionFormatos.colors, { xFmt: v => v + 'M€' });
    document.getElementById('leg-dig-fmt').innerHTML = legendHtml(d.inversionFormatos.labels, d.inversionFormatos.colors);

    buildHBarChart('c-dig-ctr', d.ctrRoas.labels, d.ctrRoas.ctr, C.blue, { xFmt: v => v.toFixed(1) + '%' });
    buildHBarChart('c-dig-roas', ['Email', 'Search', 'Social', 'Vídeo', 'Display'], d.ctrRoas.roas, C.teal, { xFmt: v => v.toFixed(1) + 'x' });

    const pctData = [38, 29, 16, 13, 4];
    buildDoughnutChart('c-dig-pie', d.inversionFormatos.labels, pctData, d.inversionFormatos.colors);
    document.getElementById('leg-dig-pie').innerHTML = legendHtml(d.inversionFormatos.labels.map((l, i) => `${l} ${pctData[i]}%`), d.inversionFormatos.colors);
  }, 80);
}

// ── RADIO ──────────────────────────────────────────────────────────────────────
function renderRadio() {
  const d = DATA.radio;
  document.getElementById('content').innerHTML = `
    <div class="page-intro">
      <div class="page-intro-text">
        <h2>Radio y Audio digital — España 2024</h2>
        <p>Inversión en radio convencional, digital audio y podcast. Fuentes: Infoadex, AIMC EGM, IAB Spain.</p>
      </div>
      <div class="page-intro-stat">
        <div class="big">490 M€</div>
        <div class="small">Inversión radio 2024 · +4,1%</div>
      </div>
    </div>

    ${metricCardsHtml(d.metrics)}

    <div class="section-header"><span class="section-title">Evolución e distribución</span></div>
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Inversión radio histórica</div>
        <div class="chart-sub">España 2020–2024 (M€)</div>
        <div style="position:relative;height:210px"><canvas id="c-radio-inv" role="img" aria-label="Inversión radio España 2020-2024">Tendencia creciente de 380M€ a 490M€.</canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Cuota por cadena</div>
        <div class="chart-sub">% s/total radio 2024</div>
        <div class="legend" id="leg-radio-cadena"></div>
        <div style="position:relative;height:210px"><canvas id="c-radio-cadena" role="img" aria-label="Cuota de inversión por cadena de radio España 2024">Cadena SER lidera con 31%.</canvas></div>
      </div>
    </div>`;

  setTimeout(() => {
    buildLineChart('c-radio-inv', d.inversionHistorica.labels,
      [{ label: 'M€', data: d.inversionHistorica.data, borderColor: C.amber, backgroundColor: C.amber + '22', tension: 0.4, fill: true, pointBackgroundColor: C.amber, pointRadius: 4 }],
      { yMin: 320, yFmt: v => v + 'M€' });

    buildDoughnutChart('c-radio-cadena', d.cuotaCadenas.labels, d.cuotaCadenas.data, d.cuotaCadenas.colors);
    document.getElementById('leg-radio-cadena').innerHTML = legendHtml(
      d.cuotaCadenas.labels.map((l, i) => `${l} ${d.cuotaCadenas.data[i]}%`), d.cuotaCadenas.colors);
  }, 80);
}
