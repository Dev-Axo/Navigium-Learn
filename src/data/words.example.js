/**
 * BEISPIELDATEN — 20 Vokabeln als Platzhalter.
 *
 * Diese Datei zeigt das erwartete Format und macht das Repository
 * lauffähig, ohne die vollständige Lehrwerks-Wortliste auszuliefern.
 *
 * So verwenden (für ein öffentliches Repository):
 *   1. "src/data/words.js" in .gitignore eintragen
 *   2. Diese Datei zu words.js kopieren:  cp src/data/words.example.js src/data/words.js
 *   3. Die eigene vollständige Liste bleibt lokal und wird nicht gepusht
 *
 * Feldbedeutung:
 *   id  eindeutig, Schema "<Lektion>-<Nummer>"
 *   l   Lektionsnummer (1-36)
 *   la  lateinische Grundform
 *   f   Stammformen bzw. Genusangabe
 *   de  deutsche Bedeutung
 *   p   Wortart: Verben | Substantive | Adjektive | Pronomen | Kleine Wörter | Wendungen
 *   t   Themen (frei, kann leer bleiben)
 */
const WORDS = [
{"id":"1-1","l":1,"la":"esse","f":"sum, fuī","de":"sein","p":"Verben","t":[]},
{"id":"1-2","l":1,"la":"venīre","f":"veniō, vēnī, ventum","de":"kommen","p":"Verben","t":[]},
{"id":"1-3","l":1,"la":"porta","f":"ae f","de":"das Tor, die Tür","p":"Substantive","t":["Natur & Orte"]},
{"id":"1-4","l":1,"la":"amīcus","f":"ī m","de":"der Freund","p":"Substantive","t":["Familie & Menschen"]},
{"id":"1-5","l":1,"la":"nōn","f":"","de":"nicht","p":"Kleine Wörter","t":[]},
{"id":"2-1","l":2,"la":"servus","f":"ī m","de":"der Sklave; der Diener","p":"Substantive","t":["Familie & Menschen"]},
{"id":"2-2","l":2,"la":"timēre","f":"timeō, timuī","de":"fürchten, Angst haben","p":"Verben","t":["Gefühle & Charakter"]},
{"id":"2-3","l":2,"la":"equus","f":"ī m","de":"das Pferd","p":"Substantive","t":["Natur & Orte"]},
{"id":"3-1","l":3,"la":"rogāre","f":"rogō","de":"fragen; bitten","p":"Verben","t":["Sprechen & Denken"]},
{"id":"3-2","l":3,"la":"perīculum","f":"ī n","de":"die Gefahr","p":"Substantive","t":[]},
{"id":"3-3","l":3,"la":"audīre","f":"audiō, audīvī, audītum","de":"hören","p":"Verben","t":["Sprechen & Denken"]},
{"id":"4-1","l":4,"la":"homō","f":"hominis m","de":"der Mensch","p":"Substantive","t":["Familie & Menschen"]},
{"id":"4-2","l":4,"la":"vidēre","f":"videō, vīdī, vīsum","de":"sehen","p":"Verben","t":["Körper & Gesundheit"]},
{"id":"4-3","l":4,"la":"rēx","f":"rēgis m","de":"der König","p":"Substantive","t":["Staat, Politik & Recht"]},
{"id":"5-1","l":5,"la":"dīcere","f":"dīcō, dīxī, dictum","de":"sagen; sprechen","p":"Verben","t":["Sprechen & Denken"]},
{"id":"5-2","l":5,"la":"nox","f":"noctis f","de":"die Nacht","p":"Substantive","t":["Zeit & Zahlen"]},
{"id":"5-3","l":5,"la":"petere","f":"petō, petīvī, petītum","de":"bitten; angreifen; aufsuchen","p":"Verben","t":[]},
{"id":"6-1","l":6,"la":"nāvis","f":"is f","de":"das Schiff","p":"Substantive","t":["Natur & Orte"]},
{"id":"6-2","l":6,"la":"magnus","f":"a, um","de":"groß(artig); bedeutend","p":"Adjektive","t":[]},
{"id":"6-3","l":6,"la":"pūgnāre","f":"pūgnō","de":"kämpfen","p":"Verben","t":["Krieg & Militär"]}
];
