# Salwa Tanveer Choudhari — AI/ML Portfolio — Magenta Edition

A responsive, multi-page, static portfolio for Salwa Tanveer Choudhari, a second-year B.Tech CSE (AI/ML) student at JSPM University.

## Preview

Open `index.html` locally or deploy this **folder's contents** to a public GitHub repository. No build step or dependencies are required. Fonts are optional and downloaded from Google Fonts when online.

## GitHub Pages deployment

1. Create a public GitHub repository (for example `salwa-portfolio`).
2. Upload `index.html`, `about.html`, `projects.html`, `blogs.html`, `contact.html`, `resume.html`, `assets/` and this README to the repository's **root**.
3. Open **Settings → Pages → Build and deployment**. Set Source to **Deploy from a branch**, Branch to **main**, Folder to **/(root)** and save.
4. Open `https://YOUR-USERNAME.github.io/salwa-portfolio/` after successful deployment.

## Personalization checklist

- Confirm that Salwa was part of **Team VerdeX**, and confirm her individual responsibilities in each project before publishing claims about authorship.
- Change concept status to `implemented` only when code/demo/tests exist. No unverified model performance metrics have been added.
- The one-page resume PDF and editable Word document are included under `assets/resume/`, and linked from the Home, About, Resume and Contact pages.
- Add verified GitHub and LinkedIn profile links, as well as the self-introduction video to `contact.html`.
- Add internship role, responsibilities, and learning outcomes to `about.html`.
- Confirm spellings and education details.
- Replace research-note articles with Salwa's own writing/reflections and photographs if using them for a graded CIE activity.
- Optionally replace the abstract hero art with a photograph if Salwa approves.

## Source material interpreted

- `SIH2026(2) (2)(1).pdf`: SecureMailScope, SIH26159, VerdeX.
- `MailShield_AI_Simple_Explanation(1).pdf`: MailShield AI project explanation (related to SecureMailScope, not counted as a separate project).
- `MailShieldAIcomponent-Blockchainrole-Explanation(1).csv`: proposed blockchain evidence/audit roles.
- `SIH 2026 ppt(1).pptx`: EcoTrust AI greenwashing/sustainability concept.
- `sihppt2026 (2)(1).pdf` and `sihppt2026 (3)(1).pdf`: two versions of the same dark-web threat-actor research concept, SIH26151.

Project source files are not bundled for public distribution. Add them only with the team's consent.

## Newly added project: AI-Based Visual Defect Detection System

This is an **independent project plan**, separate from the three SIH Team VerdeX concepts. Its planned pipeline uses Anomalib / PatchCore (PyTorch), one MVTec AD category such as bottles, and a Streamlit interface for image upload, normal/defective prediction, anomaly scoring, heatmaps, inspection history, and downloadable reports. Salwa has **not yet implemented, trained or tested** it. The visual card is conceptual artwork, not an actual model output.

- Original framework: https://github.com/open-edge-platform/anomalib (Apache-2.0 per supplied brief). Credit original authors and preserve license notices.
- Check MVTec AD dataset terms independently before using or distributing it.
- Add an original repository URL, authentic screenshots and testing results only when they exist.

## Editing

All page content is in the respective `.html` file. Styles: `assets/css/style.css`. Small interactions (menu, filtering, reveal effects, copy-email): `assets/js/app.js`.

## Academic integrity

This is an initial design and copy draft. The three SIH entries describe proposals, and the visual-defect project is a separate planned application; none proves a completed implementation, competition results, or the student's personal contribution. Portfolio content should be reviewed and revised by Salwa before submission.

## Magenta theme + resume

The portfolio uses a bright magenta / rose / deep plum visual theme across all pages, project illustrations, and navigation. `resume.html` embeds the one-page PDF for desktop viewing and has direct download controls; the PDF and editable Word version are packaged under `assets/resume/`. Some mobile browsers do not render inline PDFs, so an Open PDF link is provided.

Files needed for GitHub Pages: upload **everything inside this folder**, not the ZIP file. Preserve the `assets` folder structure to keep the resume links working.
