# KnowYourRights Belize

A Progressive Web App (PWA) providing plain-language guidance on Belizean legal rights for citizens during encounters with law enforcement and government authorities.

## Live App

Deployed at: `https://YOUR-USERNAME.github.io/knowyourrights-belize`

## Features

- 10 legal modules covering Traffic, Arrest, Drugs, Weapons, Domestic, Protest, Station, Juvenile, Immigration
- Liquid Glass UI with neon ambient design
- CAN / CANNOT / MUST / YOUR RIGHT colour-coded cards
- All cards reference actual Belizean statutes (laws.gov.bz)
- Plain-language content at Grade 7 reading level
- Private incident log (stored on-device)
- Emergency contacts with one-tap calling
- Full-text search across all rights
- PWA — installable on Android and iOS
- Works offline after first load

## Tech Stack

- React 18 (Create React App)
- React Router DOM v6
- No backend required — static deployment
- GitHub Pages (free hosting)
- GitHub Actions (automatic deployment)

## Deployment to GitHub Pages (Free)

### Step 1 — Create your repository
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create knowyourrights-belize --public --push
```

### Step 2 — Enable GitHub Pages
1. Go to your repo → Settings → Pages
2. Set **Source** to **GitHub Actions**
3. Push any commit to `main` to trigger the workflow

### Step 3 — Access your app
Your app will be live at:
`https://YOUR-USERNAME.github.io/knowyourrights-belize`

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## Legal Disclaimer

This application provides general legal information only. It does not constitute legal advice and does not create a lawyer-client relationship. All statutory content should be verified against current Belizean law at [laws.gov.bz](https://laws.gov.bz). For advice specific to your situation, consult a licensed Belizean attorney or contact Legal Aid Belize.

Content reviewed against laws current as of June 2026.

## Acts Referenced

- Constitution of Belize (Cap. 4)
- Criminal Code (Cap. 101)
- Misuse of Drugs Act (Cap. 103)
- Firearms Act (Cap. 143)
- Police Act (Cap. 138)
- Motor Vehicles & Road Traffic Act (Cap. 230)
- Domestic Violence Act (Cap. 179)
- Juvenile Offenders Act (Cap. 101A)
- Immigration Act (Cap. 156)
- Summary Jurisdiction (Offences) Act (Cap. 98)

## Recommended Partnerships

- Legal Aid Belize
- Belize Human Rights Commission
- University of Belize (Law Faculty)
- Independent Police Complaints Commission (IPCC)
