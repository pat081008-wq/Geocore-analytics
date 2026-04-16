# Geocore Analytics — MREC Iberico

A browser-based geochemical and geostatistical intelligence dashboard for drillhole data analysis. Runs entirely client-side — no server, no database, no installation required.

---

## Features

- **Multi-file import** — Collar, Survey, Assay and up to 3 interval files (CSV)
- **Single point-file import** — Pre-desurveyed XYZ centrepoint files (CSV or XLSX), with or without FROM/TO depth columns
- **Compositing & declustering** — Auto or manual composite intervals, cell declustering
- **Univariate statistics** — Histograms with mean/median lines, log-transform histograms for skewed distributions
- **Correlation matrix** — Pearson and Spearman rank correlations
- **Scatter plots** — Interactive pair plots for selected elements
- **Grade capping assessment** — Outlier detection and cap threshold recommendations
- **High-grade enrichment** — Association analysis between grades and geological domains
- **Pathfinder indicators** — Indicator elements correlated with target commodities
- **Assay column selection** — Choose which columns to analyse at import time
- **Missing grade handling** — Leave blank, treat as zero, or assign background median

---

## Deployment

This is a **static site** — it runs directly from the file system or any static host (GitHub Pages, Netlify, etc.).

### GitHub Pages (recommended)

1. Fork or upload this repository to your GitHub account
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your dashboard will be live at `https://yourusername.github.io/geocore-analytics/`

### Local use

Open `index.html` directly in a browser. Credentials will fall back to defaults if `credentials.js` cannot be fetched (this happens with `file://` URLs in some browsers — use a local server instead):

```bash
# Python 3
python -m http.server 8080
# Then open http://localhost:8080
```

---

## Managing User Access

Edit `credentials.js` to add, remove or change user passwords:

```js
const GEOCORE_USERS = {
  "admin":    "your-secure-password",
  "client1":  "client1-password",
  "client2":  "client2-password"
};
```

Each customer gets their own username and password. To revoke access, delete their line and commit the change.

> ⚠ **Security note:** This is browser-side authentication — suitable for controlling casual access to a static site, but not a substitute for server-side authentication. Do not store highly sensitive data in the credentials file on a public repository. Share actual passwords with customers via a private channel (email, WhatsApp, etc.).

---

## File Structure

```
geocore-analytics/
├── index.html          ← Main dashboard application (single file)
├── credentials.js      ← User credentials — edit to manage access
├── .gitignore
└── README.md
```

---

## Supported File Formats

| File | Format | Required Columns |
|------|--------|-----------------|
| Collar | CSV | Hole ID, X, Y, Z |
| Survey | CSV | Hole ID, Depth, Dip, Azimuth |
| Assay | CSV | Hole ID, From, To, + grade columns |
| Interval files | CSV | Hole ID, From, To, + attribute columns |
| Point file | CSV / XLSX | Hole ID, X, Y, Z (+ optional From/To) |

---

## Technical Notes

- Built with vanilla JavaScript, [Chart.js 4.4.1](https://www.chartjs.org/), and [Three.js r128](https://threejs.org/)
- XLSX parsing via [SheetJS](https://sheetjs.com/)
- All computation runs in the browser — no data leaves your machine
- Tested on Chrome, Firefox and Edge

---

*Developed for MREC Iberico — Mineral Resource Evaluation Consultants*
