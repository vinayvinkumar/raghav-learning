# Raghav Learning

Live app: <https://vinayvinkumar.github.io/raghav-learning/>

On iPhone or iPad, open the live app's [installation page](https://vinayvinkumar.github.io/raghav-learning/install.html) directly in Safari, select **Share**, choose
**Add to Home Screen**, and confirm **Add**. The installed app opens in its own
window and keeps the core learning activities available after they have loaded
once online.

The installation page displays the existing Learning artwork without loading
lesson code or saved progress. Apple icons and the manifest use relative
paths so installation works at the GitHub Pages project path as well as
locally. PNG icons are opaque, and conventional Apple filenames provide
fallbacks. The offline shell is version 8; activation replaces older Learning
caches while keeping saved progress and unrelated caches. Native home-screen
appearance still needs a device check.

The dependency-free learning app and worksheet library from the original DPS
folder are consolidated here. One **English Lessons** tab contains a single
**Learn** step with two clear subsections: **Sounds & Letter Teams** and
**Ending Word Families**. The journey turns the reference pages in `english/`
into interactive long-vowel, `ck` word-family, sentence, audio, practice,
A-or-An, mixed-up revision, and quiz activities. It also covers short and long
`oo`, `oi`, `oy`, `ou`, and `ow` as in cow, plus beginning `sh`, ending `sh`,
`ph`, beginning and ending `ch`, `th`, and `wh` consonant digraphs. The existing
long-O `ow` lesson stays separate from the cow sound. The latest digraph
worksheet adds 31 words and eight reading sentences to the same reading cards,
audio, practice, mixed quiz, and revision activities. Pictures remain hidden
until the learner chooses to reveal them, and existing browser progress is
preserved.

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

The app has its own workflow at `.github/workflows/deploy-pages.yml` in the
dedicated public Learning repository. For releases, use a separate checkout of
that repository and copy only the reviewed browser files and Pages scripts.
Do not push from `apps/learning-hub`: Git commands there now operate on the
private Cockpit monorepo. Run the source privacy check on the public release
files before committing. The workflow deploys the generated artifact when
the dedicated repository's `main` branch changes.

The deployed address appears in the workflow summary and normally follows
`https://<github-user>.github.io/<repository>/`. All local asset references are
relative, so both a project Pages path and a custom domain work without source
changes.

GitHub Pages is public. It publishes only the interactive app files: the local
Node authentication server, source reference images, worksheet generator, and
worksheet archive are not included in the hosted artifact.
