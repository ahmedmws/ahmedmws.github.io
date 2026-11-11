# Ahmed Haj Mawas — Portfolio site

Static site (no build step). Works on GitHub Pages.

## Files
- `index.html`    full site (contact + other platforms). For LinkedIn, CV, email, proposals outside Upwork/Fiverr.
- `showcase.html` clean version: no contact, no links to other platforms. The only version to consider for Upwork.
- `assets/js/content.js`  ALL text, links, gallery lists and the career log. Edit only this file.
- `assets/img/work/`  work photos (wNNN.jpg full size, wNNN_t.jpg thumbnail).

## Add a career update
Open `content.js`, add a line at the top of `updates` (see the existing ones). Add `en` and `ar` text.

## Add a photo
Save `w118.jpg` and `w118_t.jpg` (about 1100px and 520px wide) in `assets/img/work/`, then raise `gallery.total` to 119
and add 118 to the right category list.

## Fill the TODOs in content.js
Already filled. Any link left empty ("") is hidden automatically.

## Publish on GitHub Pages
1. New public repo, e.g. `Portfolio_2026`. Upload everything in this folder.
2. Settings → Pages → Deploy from branch → main → / (root).
3. Site opens at https://<username>.github.io/Portfolio_2026/
4. Arabic directly: add `?lang=ar` to the link.

## Privacy
Client names, logos and faces on the work photos are blurred. Photos in `gallery.exclude` are hidden.
Always blur a new photo before adding it.
