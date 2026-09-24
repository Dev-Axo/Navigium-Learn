# Navigium Learn

Eine Lern-App für Latein: Vokabeltraining mit Spaced Repetition und ein
komplettes Arbeitspaket zu den Fabeln des Phaedrus — Übersetzung, Grammatik,
Interpretation und Probeklausur.

Läuft als **eine einzelne HTML-Datei**. Kein Server, kein Build-Tool im Browser,
keine externen Abhängigkeiten zur Laufzeit.

## Was drin ist

**Vokabeln**
- 1.032 Wörter aus Cursus, Lektion 1–36, plus 619 Vokabeln aus den Fabeln
- SM-2-Algorithmus wie bei Anki: Nochmal / Schwer / Gut / Einfach
- Auswahl nach Lektion, Fabel, Thema oder Wortart
- Lektionen als Sternenkarte — je besser du sie kannst, desto heller leuchten sie
- Richtung wählbar: Latein → Deutsch, Deutsch → Latein oder gemischt
- Eintippmodus mit toleranter Prüfung (Artikel, Makrons und Tippfehler werden verziehen)
- Blitzrunde: 60 Sekunden, Combo-Bonus, Rekordjagd
- Problemwörter werden automatisch gesammelt

**Phaedrus**
- 18 Fabeln mit Übersetzung Vers für Vers
- Vokabelhilfe per Tipp auf jedes Wort im Text
- Aufbau (Situation – Actio – Reactio – Ergebnis), Stilmittel, Interpretationsfragen mit Musterlösung
- Probeklausur mit 45-Minuten-Timer, Erwartungshorizont und Notenberechnung
- Wissens-Check: 15 Fragen zu Phaedrus, Äsop, Senar, Promythion und Epimythion

**Grammatik**
- 149 Aufgaben direkt am Fabeltext, die Stelle wird im Vers markiert
- Themen: Formen, Partizipien, Ablativus absolutus, AcI & NcI, Nebensätze & Konjunktiv, Kasusfunktionen, Stilmittel
- Jede Antwort wird erklärt, Fehler lassen sich gezielt wiederholen

**Fortschritt**
- Tagesziel, Serie, Aktivitätskalender, Fälligkeitsvorschau für 7 Tage
- Trefferquote pro Grammatikthema, Notenverlauf der Probeklausuren
- Countdown und Tagesplan für die nächste Klassenarbeit

## Klausur-Kandidaten

Elf Fabeln sind als **Klausur-Kandidat** markiert. Das Kriterium: 50–70 Wörter
Umfang und möglichst viele Vokabeln aus den Lektionen 26–30. Die Auswahl ist
nicht geraten, sondern gerechnet — die Skripte in `tools/` zählen jede Fabel
und gleichen den Wortschatz ab.

| Fabel | Wörter | Treffer L26–30 |
|---|---|---|
| IV,6 Pugna murium et mustelarum | 62 | 7 |
| I,28 Vulpes et aquila | 64 | 5 |
| I,15 Asinus ad senem pastorem | 57 | 4 |
| V,10 Canis vetulus et venator | 52 | 4 |
| I,19 Canis parturiens | 55 | 4 |
| I,27 Canis et thesaurus et vulturius | 62 | 4 |

## Loslegen

```bash
git clone <dein-repo-url>
cd navigium-learn
node build.js          # erzeugt index.html
open index.html        # fertig, einfach im Browser öffnen
```

Oder mit lokalem Server:

```bash
npm run serve          # http://localhost:8000
```

## Aufbau

```
build.js              Baut src/ zu einer einzelnen index.html zusammen
index.html            Das Ergebnis — diese Datei ist die App
src/
  index.html          Gerüst: HTML, CSS und die gesamte Logik
  data/
    words.js          1.032 Cursus-Vokabeln (siehe DATEN.md)
    fables.js         18 Fabeln mit Übersetzung, Analyse, Vokabeln
    gram.js           149 Grammatikaufgaben
tools/
  count_fables.py     Zählt Wörter pro Fabel
  match_vocab.py      Gleicht Fabelwortschatz gegen Lektionen ab
  coverage.py         Wie viel einer Fabel mit Cursus-Wortschatz abgedeckt ist
  verify_text.py      Prüft den lateinischen Text gegen die Quelle
  source_texts/       Transkribierte Fabeltexte als Prüfgrundlage
tests/
  smoke.py            Baut, prüft die Daten und klickt die App headless durch
```

## Tests

```bash
python3 tests/smoke.py
```

Geprüft wird: Anzahl der Vokabeln, jede Grammatikaufgabe zeigt auf einen
existierenden Vers, jede Markierung kommt im Verstext wirklich vor, jeder Vers
hat eine Übersetzung, jede Fabel hat Vokabeln. Danach wird die App headless
geöffnet und ein Lerndurchgang geklickt. Der Browsertest wird übersprungen,
wenn `playwright` nicht installiert ist.

## Speicherung

Der Lernstand liegt im `localStorage` des Browsers. Liegt die App auf einer
Plattform, die `window.claude` bereitstellt, wird der Stand zusätzlich mit dem
Benutzerkonto synchronisiert; fehlt diese Schnittstelle — etwa auf GitHub Pages
— fällt die App still auf `localStorage` zurück.

## Auf GitHub Pages veröffentlichen

`index.html` liegt im Wurzelverzeichnis, Pages funktioniert also ohne weitere
Einstellungen: Settings → Pages → Branch `main`, Ordner `/ (root)`.

**Vorher `DATEN.md` lesen.** Die Vokabelliste stammt aus einem
urheberrechtlich geschützten Lehrwerk — dieses Repository sollte privat bleiben,
solange sie enthalten ist.

## Lizenz

Code, Übersetzungen und Aufgaben: MIT (siehe `LICENSE`).
Vokabeldaten: siehe `DATEN.md`.
