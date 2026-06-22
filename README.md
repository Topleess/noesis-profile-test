# WHOAMI

Static WHOAMI personality passport prototype restored from the Codex workspace:

`/Users/niki911/Documents/Codex/2026-06-10/new-chat`

## Open locally

Open `index.html` in a browser.

The page uses plain HTML, CSS, and JavaScript. No build step is required.

## Main files

- `index.html` - general product overview
- `passport.html` - test flow and personal passport page
- `compatibility.html` - standalone compatibility page
- `partners.html` - partner dashboard prototype
- `styles.css` - visual design
- `app.js` - quiz, result, sharing, and report logic
- `compatibility.js` - two-profile compatibility calculation
- `partners.js` - referral link copy interaction
- `assets/` - visual assets used by the page

## Compatibility prototype

After a user completes the test, the result screen links to `compatibility.html`
with the current profile preloaded. The compatibility page can compare two profiles using:

- a full WHOAMI result link
- a raw `result=...` payload
- a short `NP-XXXXXX` code, if Supabase allows public read access for that profile

The page includes an informational growth-zones block and a dynamic pair report.
The prototype compares only profile scores and attachment signals. It does not expose another user's raw answers in the compatibility report.
