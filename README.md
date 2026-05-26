# AdSales Hub — Paramount Spain

Dashboard de inteligencia publicitaria para el mercado español. Construido como webapp estática, lista para desplegar en Vercel o GitHub Pages.

## Estructura

```
adsales-hub/
├── index.html          # Entry point
├── vercel.json         # Config Vercel
├── src/
│   ├── style.css       # Estilos (identidad Paramount)
│   ├── data.js         # Todos los datos del mercado español
│   ├── charts.js       # Utilidades Chart.js
│   ├── pages.js        # Renderizadores de cada sección
│   └── app.js          # Controlador de navegación y refresco
└── README.md
```

## Secciones

- **Homepage** — Resumen mercado publicitario español 2025
- **TV Lineal** — Inversión, cadenas, CPM por formato, top anunciantes
- **CTV** — Overview + detalle por tipología:
  - **SVOD** (Netflix Ads, Prime Video Ads)
  - **AVOD** (YouTube, Pluto TV, Tubi)
  - **BVOD** (Atresplayer, Mitele, RTVE Play)
  - **FAST** (Samsung TV Plus, LG Channels, Rakuten TV)
  - **PVOD** (Movistar+, Orange TV, Vodafone TV)
- **Digital** — Search, Social, Display, Vídeo
- **Radio & Audio** — Radio convencional y podcast

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio GitHub
2. Entra en [vercel.com](https://vercel.com) → New Project
3. Importa el repositorio
4. Framework Preset: **Other** (sitio estático)
5. Root Directory: `/` (la raíz del repo)
6. Deploy → obtendrás una URL pública

## Despliegue en GitHub Pages

1. Sube a GitHub
2. Settings → Pages → Source: `main` branch, folder `/`
3. La URL será `https://tuusuario.github.io/adsales-hub/`

## Fuentes de datos

- Infoadex (inversión publicitaria España)
- IAB Spain (digital)
- AIMC EGM (audiencias)
- Kantar Media (TV)
- Barlovento (cadenas TV)

Los datos son estimaciones basadas en informes públicos del sector para 2024–2025.
