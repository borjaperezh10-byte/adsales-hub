// ─── CHART UTILITIES ─────────────────────────────────────────────────────────

const CHART_INSTANCES = {};

function destroyChart(id) {
  if (CHART_INSTANCES[id]) {
    CHART_INSTANCES[id].destroy();
    delete CHART_INSTANCES[id];
  }
}

function destroyAllCharts() {
  Object.keys(CHART_INSTANCES).forEach(id => destroyChart(id));
}

const C = {
  blue: '#005FFF',
  navy: '#000A3C',
  coral: '#D85A30',
  teal: '#1D9E75',
  amber: '#BA7517',
  purple: '#7F77DD',
  pink: '#D4537E',
  gray: '#888780',
  green: '#639922',
};

function buildBarChart(id, labels, datasets, opts = {}) {
  destroyChart(id);
  const ctx = document.getElementById(id);
  if (!ctx) return;
  CHART_INSTANCES[id] = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: opts.beginAtZero !== false,
          min: opts.yMin,
          ticks: { callback: opts.yFmt || (v => v) },
          grid: { color: 'rgba(0,10,60,0.06)' },
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 }, color: '#4a5178' },
        },
      },
      ...opts.extra,
    },
  });
}

function buildHBarChart(id, labels, data, color, opts = {}) {
  destroyChart(id);
  const ctx = document.getElementById(id);
  if (!ctx) return;
  CHART_INSTANCES[id] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: opts.label || '',
        data,
        backgroundColor: Array.isArray(color) ? color : data.map((_, i) => color + (i === 0 ? 'ff' : 'cc')),
        borderRadius: 4,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { callback: opts.xFmt || (v => v), font: { size: 11 } }, grid: { color: 'rgba(0,10,60,0.06)' } },
        y: { ticks: { font: { size: 11 }, color: '#4a5178' }, grid: { display: false } },
      },
    },
  });
}

function buildDoughnutChart(id, labels, data, colors) {
  destroyChart(id);
  const ctx = document.getElementById(id);
  if (!ctx) return;
  CHART_INSTANCES[id] = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 2, borderColor: '#fff' }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      cutout: '60%',
    },
  });
}

function buildLineChart(id, labels, datasets, opts = {}) {
  destroyChart(id);
  const ctx = document.getElementById(id);
  if (!ctx) return;
  CHART_INSTANCES[id] = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          min: opts.yMin,
          max: opts.yMax,
          ticks: { callback: opts.yFmt || (v => v), font: { size: 11 } },
          grid: { color: 'rgba(0,10,60,0.06)' },
        },
        x: { grid: { display: false }, ticks: { font: { size: 11 }, color: '#4a5178' } },
      },
    },
  });
}

function buildStackedBarChart(id, labels, datasets, opts = {}) {
  destroyChart(id);
  const ctx = document.getElementById(id);
  if (!ctx) return;
  CHART_INSTANCES[id] = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { font: { size: 11 }, color: '#4a5178' } },
        y: { stacked: true, ticks: { callback: opts.yFmt || (v => v), font: { size: 11 } }, grid: { color: 'rgba(0,10,60,0.06)' } },
      },
    },
  });
}

function buildRangeBar(id, labels, mins, maxes, color, opts = {}) {
  destroyChart(id);
  const ctx = document.getElementById(id);
  if (!ctx) return;
  CHART_INSTANCES[id] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Min', data: mins, backgroundColor: color + '44', borderRadius: 4, stack: 'r' },
        { label: 'Range', data: maxes.map((v, i) => v - mins[i]), backgroundColor: color + 'cc', borderRadius: 0, stack: 'r' },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { stacked: true, ticks: { callback: opts.yFmt || (v => v), font: { size: 11 } }, grid: { color: 'rgba(0,10,60,0.06)' } },
        x: { grid: { display: false }, ticks: { font: { size: 11 }, color: '#4a5178' } },
      },
    },
  });
}

function legendHtml(labels, colors) {
  return labels.map((l, i) => `
    <span class="legend-item">
      <span class="legend-dot" style="background:${colors[i]}"></span>${l}
    </span>`).join('');
}
