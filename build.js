#!/usr/bin/env node
/**
 * Baut die App: src/index.html + src/data/*.js  ->  index.html (eine Datei)
 * Die fertige Datei ist komplett eigenständig und braucht keinen Server.
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const OUT = path.join(__dirname, 'index.html');

const parts = {
  __WORDS__:  'words.js',
  __FABLES__: 'fables.js',
  __GRAM__:   'gram.js',
};

let html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');

for (const [token, file] of Object.entries(parts)) {
  if (!html.includes(token)) {
    console.error(`FEHLER: Platzhalter ${token} fehlt in src/index.html`);
    process.exit(1);
  }
  html = html.replace(token, fs.readFileSync(path.join(SRC, 'data', file), 'utf8'));
}

// Syntaxprüfung des eingebetteten Skripts, bevor geschrieben wird
const script = html.split('<script>')[1].split('</script>')[0];
try {
  new Function(script);
} catch (e) {
  console.error('FEHLER: JavaScript-Syntaxfehler im Build:', e.message);
  process.exit(1);
}

fs.writeFileSync(OUT, html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`index.html gebaut (${kb} KB)`);
