# Herkunft der Daten

Dieses Projekt enthält Inhalte aus drei Quellen mit unterschiedlichem Rechtsstatus.
Bitte vor einer Veröffentlichung lesen.

## 1. Lateinischer Fabeltext — gemeinfrei

`src/data/fables.js` enthält den lateinischen Text von 18 Fabeln des Phaedrus
(ca. 15 v. Chr. – ca. 50 n. Chr.). Antike Texte sind gemeinfrei und dürfen frei
verwendet werden.

Textgrundlage: The Latin Library (thelatinlibrary.com), Bücher I–V.
Der übernommene Text wurde mit `tools/verify_text.py` wortwörtlich gegen die
Quelldateien in `tools/source_texts/` geprüft.

## 2. Übersetzungen, Interpretationen, Aufgaben — eigenes Werk

Die deutschen Übersetzungen Vers für Vers, die Aufbau- und Stilmittelanalysen,
die Interpretationsfragen mit Musterlösungen und die 149 Grammatikaufgaben
sind für dieses Projekt neu verfasst worden. Sie stehen unter der MIT-Lizenz
(siehe `LICENSE`).

## 3. Vokabelliste Cursus — urheberrechtlich geschützt

`src/data/words.js` enthält 1.032 Vokabeln mit Stammformen und deutschen
Bedeutungen, geordnet nach den Lektionen 1–36 des Lehrwerks **Cursus** (C.C. Buchner
/ Oldenbourg). Diese Zusammenstellung stammt aus einem urheberrechtlich
geschützten Schulbuch.

**Das ist der Grund, dieses Repository privat zu halten.**

Eine Wortliste samt Auswahl, Reihenfolge, Lektionszuordnung und deutschen
Bedeutungen ist eine geschützte Zusammenstellung — auch wenn einzelne
Vokabelgleichungen wie *canis = der Hund* für sich genommen niemandem gehören.
Für den privaten Gebrauch beim Lernen ist das unproblematisch. Eine
Veröffentlichung im Netz ist etwas anderes.

### Wenn das Repository öffentlich werden soll

Eine dieser Varianten wählen:

1. **Vokabeldaten herausnehmen.** `src/data/words.js` in `.gitignore` aufnehmen
   und stattdessen `src/data/words.example.js` mit etwa 20 Beispielwörtern
   ausliefern. Der Code läuft dann, die Lehrwerksdaten bleiben lokal. Das ist die
   sauberste Lösung.
2. **Eigene Wortliste aufbauen**, etwa aus einem gemeinfreien lateinischen
   Grundwortschatz, und die Lektionszuordnung selbst vergeben.
3. **Beim Verlag anfragen.** Für ein nicht-kommerzielles Schulprojekt bekommt man
   manchmal eine Genehmigung.

Der Phaedrus-Teil der App — 18 Fabeln, Übersetzungen, Grammatik, Probeklausur —
ist von dieser Einschränkung nicht betroffen und könnte jederzeit öffentlich stehen.
