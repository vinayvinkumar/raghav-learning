# Raghav Learning

Live app: <https://vinayvinkumar.github.io/raghav-learning/>

On iPhone or iPad, open the live app in Safari, select **Share**, choose
**Add to Home Screen**, and confirm **Add**. The installed app opens in its own
window and keeps the core learning activities available after they have loaded
once online.

The dependency-free learning app and worksheet library from the original DPS
folder are consolidated here. One **English Lessons** tab now combines the
English Sound Adventure and the ending-sound Word Families lesson. The journey
turns the reference pages in `english/` into interactive long-vowel, `ck`
word-family, sentence, audio, practice, A-or-An, mixed-up revision, and quiz
activities. It also covers short and long `oo`, `oi`, `oy`, and `ou` vowel
digraphs plus beginning `sh`, ending `sh`, and `ph` consonant digraphs from the
latest reference pages. Progress is saved in the browser.

```bash
npm run dev
```

Open `http://localhost:5176`. No build step is required. The root cockpit
launcher starts this server automatically.

## GitHub Pages

The same `index.html`, `english-module.css`, and `english-module.js` files are
used locally and on GitHub Pages. The Pages build only copies those browser
files into an ignored `dist/` directory; it does not maintain a second version
of the application.

Build and verify the Pages artifact locally:

```bash
npm --workspace @vinay/learning-hub run build
npm --workspace @vinay/learning-hub run preview:pages
```

Then open `http://127.0.0.1:4176`. The normal authenticated local server remains
available through `npm run dev` and the cockpit at `http://localhost:5176`.

The app has its own workflow at `.github/workflows/deploy-pages.yml`. Keeping
Learning Hub in a dedicated public GitHub repository means the rest of the
cockpit does not need to be published. The workflow deploys the generated
artifact whenever the app changes on the `main` branch. To enable it:

1. Push the `apps/learning-hub` folder to GitHub with `main` as its default
   branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Open **Actions → Deploy Learning Hub to GitHub Pages** and run the workflow,
   or push another Learning Hub change to `main`.

The deployed address appears in the workflow summary and normally follows
`https://<github-user>.github.io/<repository>/`. All local asset references are
relative, so both a project Pages path and a custom domain work without source
changes.

GitHub Pages is public. It publishes only the interactive app files: the local
Node authentication server, source reference images, worksheet generator, and
worksheet archive are not included in the hosted artifact.
