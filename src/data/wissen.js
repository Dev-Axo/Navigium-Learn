/**
 * Grammatik-Wissen: eine Seite pro Thema.
 * Abschnittstypen: p (Absätze), table, tips (Eselsbrücken), ex (Beispiele aus den Fabeln),
 * steps (Schritt für Schritt), list (typische Fehler).
 * ex-Einträge: [Fabel-ID, Versindex (0-basiert), markierte Stelle, Erklärung]
 * Auszeichnung im Text: **fett**, _lateinisch_
 */
const GWISSEN=[
{id:"part",t:"Partizipien",sub:"PPP · PPA · PFA",quiz:"Partizipien",
 kurz:"Ein Partizip ist ein Verb, das sich wie ein Adjektiv verhält: Es hat eine Zeit und ein Genus verbi, wird aber dekliniert und passt sich einem Bezugswort an.",
 s:[
 {h:"Die drei Partizipien",table:{head:["","Bildung","Zeitverhältnis","Genus verbi","Beispiel"],rows:[
   ["PPA","Präsensstamm + _-ns, -ntis_","gleichzeitig","aktiv","_vocans_ – rufend"],
   ["PPP","4. Stammform + _-us, -a, -um_","vorzeitig","passiv","_vocatus_ – gerufen"],
   ["PFA","PPP-Stamm + _-urus, -ura, -urum_","nachzeitig","aktiv","_vocaturus_ – einer, der rufen wird"]]}},
 {h:"Formen in allen Konjugationen",table:{head:["","a-Konj.","e-Konj.","kons. Konj.","i-Konj.","gem. Konj."],rows:[
   ["PPA","_amans_","_monens_","_legens_","_audiens_","_capiens_"],
   ["PPP","_amatus_","_monitus_","_lectus_","_auditus_","_captus_"],
   ["PFA","_amaturus_","_moniturus_","_lecturus_","_auditurus_","_capturus_"]]},
  note:"Das PPA wird wie ein einendiges Adjektiv der 3. Deklination gebeugt (wie _ingens_): _amans, amantis, amanti, amantem, amante_. Das PPP und das PFA gehen nach der a-/o-Deklination (wie _bonus, -a, -um_)."},
 {h:"Eselsbrücken",tips:[
   "**Der Name ist schon die Regel:** Partizip **P**räsens **A**ktiv → gleichzeitig und aktiv. Partizip **P**erfekt **P**assiv → vorher und passiv. Partizip **F**utur **A**ktiv → nachher und aktiv.",
   "**-nt- = jetzt.** Siehst du ein _-nt-_ im Wortinneren (_amantem, legentibus_), passiert es gerade – PPA, gleichzeitig.",
   "**-urus = Uhr.** Beim PFA schaut jemand auf die Uhr: Es kommt erst noch. _moriturus_ – einer, der sterben wird.",
   "**Wer die Stammformen kann, hat das PPP geschenkt.** Die 4. Stammform ist das PPP: _capio, cepi, **captum**_ → _captus, -a, -um_."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f15",2,"effodiens","PPA von _effodere_, gleichzeitig: „ein Hund, der gerade Knochen ausgräbt“."],
   ["f9",0,"victi","PPP von _vincere_, vorzeitig und passiv: „die Mäuse, die besiegt worden waren“."],
   ["f11",7,"impositurum","PFA von _imponere_ im AcI, nachzeitig: „dass der Sieger auflegen werde“."],
   ["f18",3,"trahens","PPA von _trahere_: „den letzten Atemzug tuend“ – passiert gleichzeitig mit dem Daliegen."]]},
 {h:"Fünf Wege, ein Partizip zu übersetzen",steps:[
   "**Wörtlich:** _vir vocatus_ – der gerufene Mann. Klingt oft steif, ist aber nie falsch.",
   "**Relativsatz:** der Mann, der gerufen worden war.",
   "**Adverbialsatz:** nachdem / während / weil / obwohl / indem der Mann gerufen worden war. Die Sinnrichtung ergibt sich aus dem Zusammenhang.",
   "**Beiordnung:** Der Mann wurde gerufen und … – besonders elegant bei PPP.",
   "**Präpositionalausdruck:** nach dem Ruf, trotz des Rufes – für geübte Übersetzer."]},
 {h:"Typische Fehler",list:[
   "PPP aktiv übersetzen: _victus_ heißt „besiegt“, nicht „siegend“. Ausnahme: Deponentien (siehe Verbformen).",
   "Das Zeitverhältnis vergessen: Ein PPP braucht fast immer „nachdem … hatte/war“.",
   "_amantis_ für einen Genitiv von _amans_ halten und den Satz umbauen – es ist nur das PPA im Genitiv."]}
 ]},

{id:"pc",t:"Participium coniunctum",sub:"PC – das verbundene Partizip",quiz:"Partizipien",
 kurz:"Beim PC hängt ein Partizip an einem Satzglied, meist dem Subjekt oder Objekt, und stimmt mit ihm in Kasus, Numerus und Genus überein. Es ersetzt einen ganzen Nebensatz.",
 s:[
 {h:"Worum es geht",p:["_Coniunctum_ heißt „verbunden“: Das Partizip ist mit einem Bezugswort verbunden, das eine eigene Aufgabe im Satz hat. In _Canis carnem ferens flumen transit_ ist _canis_ Subjekt, und _ferens_ sagt zusätzlich, was der Hund dabei tut.",
   "Zwischen Bezugswort und Partizip steht oft eine ganze Wortgruppe. Diese **Partizipialklammer** gehört vollständig zum Partizip: _canis **carnem per flumen** ferens_."]},
 {h:"Sinnrichtungen",table:{head:["Sinnrichtung","Konjunktion","Beispiel"],rows:[
   ["temporal","als, während, nachdem","Nachdem er besiegt worden war, …"],
   ["kausal","weil, da","Weil er vom Durst getrieben war, …"],
   ["konzessiv","obwohl","Obwohl er gewarnt worden war, … (Signal oft: _tamen_)"],
   ["modal","indem, wobei","Indem er den Schnabel hineinsteckte, …"],
   ["konditional","wenn","Wenn er gerufen wird, …"]]}},
 {h:"Eselsbrücken",tips:[
   "**KNG-Zwillinge:** Partizip und Bezugswort stimmen in **K**asus, **N**umerus und **G**enus überein. Nicht das nächste Wort ist das Bezugswort, sondern das passende.",
   "**Das PC ist ein Anhänger:** Es hängt an einem Satzglied wie ein Anhänger am Auto. Nimmst du den Anhänger weg, fährt das Auto (der Satz) trotzdem.",
   "**Klammer auf, Klammer zu:** Alles zwischen Bezugswort und Partizip gehört zum Partizip und wird im Nebensatz mitübersetzt."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f7",4,"victus","Bezugswort ist der Wolf (Subjekt): „von großem Schmerz überwältigt“ – kausal."],
   ["f10",4,"persecuta","Bezugswort _mater_: „nachdem die Mutter ihn verfolgt hatte“ – Deponens, deshalb aktiv."],
   ["f16",1,"postulans","Bezugswort _praedator_: „indem er einen Anteil forderte“ – modal."],
   ["f17",3,"citatus testis","Bezugswort _lupus_: „der Wolf, als Zeuge herbeigerufen“ – temporal."],
   ["f18",2,"Defectus annis et desertus viribus","Zwei PPP am selben Bezugswort _leo_: „weil er geschwächt und verlassen war“."]]},
 {h:"So gehst du vor",steps:[
   "Partizip finden: Endung _-ns/-nt-_, _-tus/-sus_, _-urus_.",
   "Bezugswort suchen: Welches Wort passt in Kasus, Numerus und Genus?",
   "Klammer bestimmen: Was steht zwischen Bezugswort und Partizip?",
   "Zeitverhältnis festlegen: PPA gleichzeitig, PPP vorzeitig, PFA nachzeitig.",
   "Erst den Hauptsatz ohne Partizip übersetzen, dann das Partizip als Nebensatz einbauen und die passende Sinnrichtung wählen."]},
 {h:"Typische Fehler",list:[
   "Das Bezugswort nach der Nähe wählen statt nach KNG.",
   "Die Klammer zerreißen und Wörter daraus dem Hauptsatz zuschlagen.",
   "PC und Ablativus absolutus verwechseln: Steht das Bezugswort im Ablativ und hat es keine Aufgabe im Hauptsatz, ist es ein Abl. abs."]}
 ]},

{id:"ablabs",t:"Ablativus absolutus",sub:"der losgelöste Ablativ",quiz:"Ablativus absolutus",
 kurz:"Ein Nomen im Ablativ plus ein Partizip im Ablativ, die zusammen einen eigenen kleinen Satz bilden. Sie gehören grammatisch nicht zum Hauptsatz – deshalb „absolut“, also losgelöst.",
 s:[
 {h:"Bildung",table:{head:["Art","Bildung","Beispiel","Übersetzung"],rows:[
   ["mit PPA","Nomen + PPA im Ablativ","_sole oriente_","während die Sonne aufgeht"],
   ["mit PPP","Nomen + PPP im Ablativ","_urbe capta_","nachdem die Stadt eingenommen worden war"],
   ["nominal","Nomen + Nomen/Adjektiv","_Cicerone consule_","als Cicero Konsul war"]]},
  note:"Endungen im Ablativ: PPA _-nte_ (Pl. _-ntibus_), PPP _-o, -a_ (Pl. _-is_)."},
 {h:"PC oder Ablativus absolutus?",table:{head:["","Participium coniunctum","Ablativus absolutus"],rows:[
   ["Kasus","jeder Kasus","nur Ablativ"],
   ["Bezugswort","hat eine Aufgabe im Hauptsatz","gehört nicht zum Hauptsatz"],
   ["Probe","Streichen macht den Satz unvollständig","Streichen lässt einen vollständigen Satz übrig"]]}},
 {h:"Eselsbrücken",tips:[
   "**Absolutus = losgelöst.** Schneide den Abl. abs. mit der Schere aus: Der Rest ist immer noch ein vollständiger Satz.",
   "**Zwei Ablative, die zusammenpassen und keiner will zum Verb** – das ist ein Abl. abs.",
   "**PPP → nachdem, PPA → während.** Das deckt die meisten Klausurstellen ab.",
   "**Passiv raus!** _hostibus victis_ klingt als „nachdem die Feinde besiegt worden waren“ steif. Besser aktiv: „nachdem er die Feinde besiegt hatte“ oder „nach dem Sieg über die Feinde“."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f8",5,"partibus factis","PPP: „nachdem die Teile gemacht worden waren“ – eleganter: „nach der Teilung“."],
   ["f16",5,"feroque viso","PPP: „als er das wilde Tier gesehen hatte“ – der Wanderer ist das logische Subjekt."],
   ["f16",8,"diviso tergore","PPP: „nachdem er das Fleisch geteilt hatte“."],
   ["f13",7,"Hoc quoque consumpto","PPP: „als auch diese Frist verbraucht war“."],
   ["f12",2,"annis ingravantibus","PPA, gleichzeitig: „während die Jahre schwerer wurden“ – hier kausal: „weil das Alter ihn drückte“."]]},
 {h:"So gehst du vor",steps:[
   "Nomen + Partizip im Ablativ finden, die in KNG zusammenpassen.",
   "Probe: Hat das Nomen eine Aufgabe im Hauptsatz? Wenn nein → Abl. abs.",
   "Das Nomen wird im Deutschen zum Subjekt des Nebensatzes, das Partizip zum Prädikat.",
   "Zeitverhältnis und Sinnrichtung wählen; bei PPP möglichst aktiv übersetzen."]},
 {h:"Typische Fehler",list:[
   "Den Abl. abs. als „mit …“ übersetzen: _urbe capta_ ist nicht „mit der eroberten Stadt“.",
   "Das Zeitverhältnis beim PPP vergessen: „Die Stadt erobert, …“ reicht nicht.",
   "Den nominalen Abl. abs. übersehen, weil kein Partizip dasteht: _me invito_ – gegen meinen Willen."]}
 ]},

{id:"aci",t:"AcI & NcI",sub:"Akkusativ bzw. Nominativ mit Infinitiv",quiz:"AcI & NcI",
 kurz:"Nach Verben des Sagens, Denkens und Wahrnehmens steht im Lateinischen kein dass-Satz, sondern ein Akkusativ mit Infinitiv. Im Deutschen machst du daraus einen dass-Satz.",
 s:[
 {h:"So funktioniert der AcI",p:["_Lupus dicit agnum aquam turbare._ – Der Wolf sagt, **dass das Lamm** das Wasser **trübt**.",
   "Der Akkusativ (_agnum_) wird im Deutschen zum **Subjekt**, der Infinitiv (_turbare_) zum **Prädikat** des dass-Satzes."]},
 {h:"Wann steht ein AcI?",table:{head:["Verbgruppe","Beispiele"],rows:[
   ["Sagen","_dicere, narrare, negare, respondere, affirmare_"],
   ["Denken, Glauben, Wissen","_putare, credere, scire, sperare, intellegere_"],
   ["Wahrnehmen","_videre, audire, sentire, cognoscere_"],
   ["Gefühle","_gaudere, dolere, mirari_"],
   ["Wollen, Befehlen","_iubere, vetare, velle, sinere, cogere_"],
   ["Unpersönliche Ausdrücke","_constat, apparet, necesse est, oportet_"]]}},
 {h:"Der Infinitiv verrät das Zeitverhältnis",table:{head:["Infinitiv","aktiv","passiv","Zeitverhältnis"],rows:[
   ["Präsens","_amare, legere_","_amari, legi_","gleichzeitig"],
   ["Perfekt","_amavisse, legisse_","_amatum esse, lectum esse_","vorzeitig"],
   ["Futur","_amaturum esse, lecturum esse_","(_amatum iri_ – selten)","nachzeitig"]]},
  note:"Achtung bei der kons. Konjugation: Der Infinitiv Präsens Passiv endet nur auf _-i_: _legi_ – gelesen werden."},
 {h:"se oder eum?",p:["_Canis dicit **se** venisse._ – Der Hund sagt, dass **er (selbst)** gekommen sei.",
   "_Canis dicit **eum** venisse._ – Der Hund sagt, dass **er (ein anderer)** gekommen sei.",
   "_se_ zeigt also zurück auf das Subjekt des übergeordneten Satzes."]},
 {h:"Der NcI",p:["Steht das Verb des Sagens im **Passiv**, rutscht die Person in den Nominativ: _Homerus caecus fuisse **dicitur**._ – Homer **soll** blind gewesen sein. / Man sagt, dass Homer blind war.",
   "Typische Auslöser: _dicitur, fertur, traditur, putatur, iubetur_ und _videtur_ („er scheint“)."]},
 {h:"Eselsbrücken",tips:[
   "**Akkusativ wird Chef.** Im dass-Satz ist der Akkusativ plötzlich das Subjekt.",
   "**SAGEN – DENKEN – SEHEN – FÜHLEN:** Steht eines davon, such nach Akkusativ + Infinitiv.",
   "**Infinitiv-Tempus = Uhrzeit:** Präsens jetzt, Perfekt vorher, Futur nachher.",
   "**se = selbst, eum = ein anderer.**",
   "**NcI = Gerüchteküche:** _dicitur, fertur, traditur_ – „er soll …“."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f2",3,"aliamque praedam ab altero ferri putans","AcI nach _putans_: „weil er glaubte, dass eine andere Beute von einem anderen getragen werde“."],
   ["f3",0,"se laudari gaudet","AcI nach _gaudet_ mit Inf. Präs. Passiv: „wer sich freut, gelobt zu werden“."],
   ["f18",7,"vidit ferum","AcI nach _vidit_: „als er sah, dass das Raubtier ungestraft verletzt wurde“ (_laedi_ steht im nächsten Vers)."],
   ["f6",2,"vulpes dicitur","NcI: „Der Fuchs soll den Storch eingeladen haben“ (_invitasse_ im nächsten Vers)."],
   ["f15",8,"fertur locutus","NcI mit Deponens: „er soll gesagt haben“."],
   ["f18",11,"bis videor mori","NcI bei _videri_: „es ist mir, als stürbe ich zweimal“."]]},
 {h:"Typische Fehler",list:[
   "Den Akkusativ als Objekt übersetzen: „Er sagt das Lamm …“.",
   "Das Zeitverhältnis ignorieren: _dixit eum venisse_ – er sagte, dass er gekommen **sei**.",
   "_legi_ für das Perfekt „ich habe gelesen“ halten, obwohl es im AcI der Infinitiv Präsens Passiv ist."]}
 ]},

{id:"konjform",t:"Konjunktiv: Bildung",sub:"Präsens · Imperfekt · Perfekt · Plusquamperfekt",quiz:"Konjunktiv",
 kurz:"Der Konjunktiv ist der Modus der Möglichkeit, des Wunsches und der Abhängigkeit. Es gibt vier Tempora, und jedes hat ein klares Erkennungszeichen.",
 s:[
 {h:"Überblick (3. Person Singular)",table:{head:["Tempus","Kennzeichen","a-Konj.","kons. Konj.","esse"],rows:[
   ["Präsens","a → _e_, sonst _+a_","_amet_","_legat_","_sit_"],
   ["Imperfekt","Infinitiv + Endung","_amaret_","_legeret_","_esset_"],
   ["Perfekt","Perfektstamm + _-eri-_","_amaverit_","_legerit_","_fuerit_"],
   ["Plusquamperfekt","Inf. Perfekt + Endung","_amavisset_","_legisset_","_fuisset_"]]}},
 {h:"Konjunktiv Präsens",table:{head:["","a-Konj.","e-Konj.","kons. Konj.","i-Konj.","esse","posse"],rows:[
   ["1. Sg.","_amem_","_moneam_","_legam_","_audiam_","_sim_","_possim_"],
   ["2. Sg.","_ames_","_moneas_","_legas_","_audias_","_sis_","_possis_"],
   ["3. Sg.","_amet_","_moneat_","_legat_","_audiat_","_sit_","_possit_"],
   ["1. Pl.","_amemus_","_moneamus_","_legamus_","_audiamus_","_simus_","_possimus_"],
   ["2. Pl.","_ametis_","_moneatis_","_legatis_","_audiatis_","_sitis_","_possitis_"],
   ["3. Pl.","_ament_","_moneant_","_legant_","_audiant_","_sint_","_possint_"]]},
  note:"Passiv: _amer, ameris, ametur, amemur, amemini, amentur_ – gleiche Kennvokale, passive Endungen."},
 {h:"Konjunktiv Imperfekt",table:{head:["","a-Konj.","kons. Konj.","esse","ferre","ire"],rows:[
   ["1. Sg.","_amarem_","_legerem_","_essem_","_ferrem_","_irem_"],
   ["3. Sg.","_amaret_","_legeret_","_esset_","_ferret_","_iret_"],
   ["3. Pl.","_amarent_","_legerent_","_essent_","_ferrent_","_irent_"]]},
  note:"Passiv: _amarer, amareris, amaretur …_ Nebenform: _foret_ = _esset_."},
 {h:"Konjunktiv Perfekt und Plusquamperfekt",table:{head:["","Konj. Perfekt","Konj. Plusquamperfekt"],rows:[
   ["aktiv","_amaverim, amaveris, amaverit …_","_amavissem, amavisses, amavisset …_"],
   ["passiv","_amatus sim, sis, sit …_","_amatus essem, esses, esset …_"],
   ["esse","_fuerim, fueris, fuerit …_","_fuissem, fuisses, fuisset …_"]]},
  note:"Der Konj. Perfekt sieht fast aus wie das Futur II. Unterschied nur in der 1. Sg.: _amaverim_ (Konj.) gegen _amavero_ (Fut. II)."},
 {h:"Eselsbrücken",tips:[
   "**Präsens – Vokaltausch:** Wer ein _a_ hat, will ein _e_ (_amat → amet_). Alle anderen wollen ein _a_ (_monet → moneat, legit → legat, audit → audiat_).",
   "**Imperfekt – der Infinitiv steckt drin:** _ama**re**-t, esse-t, fer**re**-t_. Siehst du den ganzen Infinitiv im Verb, ist es Konj. Imperfekt.",
   "**Plusquamperfekt – „-isse-“ ist längst vorbei:** _amav**isse**t, fu**isse**t, red**isse**s_.",
   "**Perfekt – das „-eri-“:** _amav**eri**t, fu**eri**t_.",
   "**Kurzformen:** Fehlt mitten im Wort ein _-vi-_, steckt trotzdem die Langform dahinter: _rogasset = rogavisset, revocasset = revocavisset_.",
   "**Achtung Doppelgänger:** _legam_ ist Konj. Präsens **und** Futur I. Erst die 2. Person trennt: _legas_ (Konj.) gegen _leges_ (Futur)."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f2",1,"ferret","Konj. Imperfekt: der Infinitiv _ferre_ + _-t_."],
   ["f11",9,"serviam","Konj. Präsens, i-Konj.: _servi-a-m_."],
   ["f11",9,"portem","Konj. Präsens, a-Konj.: _portat → portet_, hier 1. Sg. _portem_."],
   ["f6",6,"revocasset","Konj. Plusquamperfekt, Kurzform von _revocavisset_."],
   ["f7",11,"abstuleris","Konj. Perfekt von _auferre_: Perfektstamm _abstul-_ + _-eri-s_."],
   ["f3",7,"foret","Nebenform von _esset_, Konj. Imperfekt."]]},
 {h:"Typische Fehler",list:[
   "_legat_ (Konj. Präs.) mit _leget_ (Futur I) verwechseln.",
   "_amaverit_ automatisch als Futur II lesen – im Nebensatz mit _cum_ oder in der indirekten Frage ist es Konj. Perfekt.",
   "_audiam_ als Futur übersetzen, obwohl ein _ut_ davorsteht."]}
 ]},

{id:"konjuse",t:"Konjunktiv: Verwendung",sub:"Hauptsatz · Bedingungssätze · Zeitenfolge",quiz:"Konjunktiv",
 kurz:"Im Hauptsatz drückt der Konjunktiv Wünsche, Aufforderungen und Möglichkeiten aus. In Bedingungssätzen zeigt er, ob etwas möglich oder unwirklich ist. Und in Nebensätzen folgt er einer festen Zeitenfolge.",
 s:[
 {h:"Konjunktiv im Hauptsatz",table:{head:["Name","Form","Beispiel","Übersetzung"],rows:[
   ["Hortativ","1. Pl. Konj. Präs.","_Gaudeamus!_","Lasst uns fröhlich sein!"],
   ["Iussiv","3. Pers. Konj. Präs.","_Veniat!_","Er soll kommen!"],
   ["Prohibitiv","_ne_ + Konj. Perf.","_Ne timueris!_","Fürchte dich nicht!"],
   ["Optativ (erfüllbar)","_utinam_ + Konj. Präs.","_Utinam veniat!_","Hoffentlich kommt er!"],
   ["Optativ (unerfüllbar)","_utinam_ + Konj. Impf./Plqpf.","_Utinam adesset!_","Wenn er doch da wäre!"],
   ["Deliberativ","Frage im Konj.","_Quid faciam?_","Was soll ich tun?"],
   ["Potentialis","Konj. Präs./Perf.","_Dicat aliquis …_","Es könnte jemand sagen …"]]}},
 {h:"Bedingungssätze",table:{head:["Art","si-Satz","Hauptsatz","Deutsch"],rows:[
   ["Realis","Indikativ","Indikativ","Wenn er kommt, freue ich mich."],
   ["Potentialis","Konj. Präs./Perf.","Konj. Präs./Perf.","Wenn er kommen sollte, würde ich mich freuen."],
   ["Irrealis der Gegenwart","Konj. Imperfekt","Konj. Imperfekt","Wenn er käme, würde ich mich freuen (er kommt aber nicht)."],
   ["Irrealis der Vergangenheit","Konj. Plusquamperfekt","Konj. Plusquamperfekt","Wenn er gekommen wäre, hätte ich mich gefreut."]]}},
 {h:"Die Zeitenfolge (Consecutio temporum)",table:{head:["übergeordneter Satz","gleichzeitig","vorzeitig","nachzeitig"],rows:[
   ["Haupttempus (Präsens, Futur)","Konj. Präsens","Konj. Perfekt","_-urus sim_"],
   ["Nebentempus (Imperfekt, Perfekt, Plqpf.)","Konj. Imperfekt","Konj. Plusquamperfekt","_-urus essem_"]]},
  note:"Beispiel: _Rogo, quid facias_ – ich frage, was du tust. _Rogavi, quid faceres_ – ich fragte, was du tatest. _Rogavi, quid fecisses_ – ich fragte, was du getan hattest."},
 {h:"Eselsbrücken",tips:[
   "**Irrealis: ein Schritt zurück.** Latein nimmt für die Gegenwart das Imperfekt und für die Vergangenheit das Plusquamperfekt.",
   "**IMPerfekt = IMmer noch nicht wahr** (jetzt). **PLUSquamperfekt = PLUS einen Schritt zurück** (damals).",
   "**Zeitenfolge als Aufzug:** Steht der Hauptsatz im Präsens-Stockwerk, bleibt der Nebensatz dort (Konj. Präs./Perf.). Steht er in der Vergangenheit, fährt der Nebensatz mit (Konj. Impf./Plqpf.).",
   "**Klein = gleichzeitig, groß = vorzeitig:** Präsens und Imperfekt sind die „kleinen“ Tempora, Perfekt und Plusquamperfekt die „großen“.",
   "**Hortativ = Hurra, lasst uns!** Die 1. Person Plural im Konjunktiv ruft zum Mitmachen auf."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f3",7,"Si vocem haberes, nulla prior ales foret","Irrealis der Gegenwart: „Wenn du eine Stimme hättest, wäre kein Vogel besser.“ – der Rabe hat angeblich keine."],
   ["f14",3,"si quis pretii cupidus vidisset tui","Irrealis der Vergangenheit, Hauptsatz _redisses_ im nächsten Vers: „Hätte dich jemand gesehen, wärst du zurückgekehrt.“"],
   ["f16",2,"Darem inquit nisi soleres","Irrealis der Gegenwart: „Ich gäbe ihn dir, wenn du nicht gewohnt wärst, dir selbst zu nehmen.“"],
   ["f5",4,"an bove esset latior","Zeitenfolge: _interrogavit_ ist Nebentempus → Konj. Imperfekt für Gleichzeitigkeit."],
   ["f11",8,"quid refert mea","Zeitenfolge: _refert_ ist Präsens → im nächsten Vers _cui serviam_ im Konj. Präsens."]]},
 {h:"Typische Fehler",list:[
   "Den Irrealis der Gegenwart als Vergangenheit übersetzen, nur weil ein Imperfekt dasteht.",
   "Den Konjunktiv im Nebensatz immer als deutschen Konjunktiv übersetzen: _rogavi, quid faceres_ heißt „was du tatest“, nicht „was du tätest“.",
   "_ne timueris_ als „dass du nicht gefürchtet hast“ lesen – es ist ein Verbot: „Fürchte dich nicht!“"]}
 ]},

{id:"neben",t:"Nebensätze",sub:"Konjunktionen, Modus, Sinnrichtung",quiz:"Nebensätze",
 kurz:"Welche Konjunktion mit welchem Modus steht, entscheidet über die Übersetzung. Die meisten Klausurfehler passieren bei _cum_ und _ut_.",
 s:[
 {h:"Die wichtigsten Konjunktionen",table:{head:["Konjunktion","Modus","Bedeutung"],rows:[
   ["_cum_","Indikativ","als (plötzlich), (immer) wenn, (damals) als"],
   ["_cum_","Konjunktiv","als/nachdem · da/weil · obwohl · während"],
   ["_ut_","Indikativ","wie · als, sobald"],
   ["_ut_","Konjunktiv","dass · damit · sodass"],
   ["_ne_","Konjunktiv","damit nicht · dass nicht · (nach Fürchten) dass"],
   ["_dum_","Indikativ Präsens","während"],
   ["_dum_","Konjunktiv","bis · wenn nur"],
   ["_quod, quia, quoniam_","Indikativ","weil"],
   ["_postquam, ubi (primum)_","Indikativ Perfekt","nachdem · sobald"],
   ["_si / nisi_","beide","wenn / wenn nicht"],
   ["_quamquam_","Indikativ","obwohl"],
   ["_quamvis_","Konjunktiv","wie sehr auch · obwohl"]]}},
 {h:"Indirekte Fragen",p:["Hängt eine Frage von einem Verb des Fragens, Wissens oder Sagens ab, steht sie **immer im Konjunktiv**: _Rogat, quis veniat._ – Er fragt, wer kommt.",
   "Einleitungswörter: _quis, quid, cur, ubi, unde, quo, quomodo_ und für Ja/Nein-Fragen _num, -ne, an_ – „ob“.",
   "Im Deutschen darfst du meist den Indikativ nehmen."]},
 {h:"Relativsätze mit Konjunktiv",p:["Ein Relativsatz im Konjunktiv hat einen **Nebensinn**: kausal („der ja …“), final („der … soll“) oder konsekutiv („so dass er …“).",
   "Ein **relativer Satzanschluss** steht am Satzanfang und bezieht sich auf den vorigen Satz: _Quam tangere ut non potuit_ – Als er **diese** nicht berühren konnte …"]},
 {h:"Eselsbrücken",tips:[
   "**ut mit Indikativ – „wie“, ut mit Konjunktiv – „will was“:** dass, damit, sodass.",
   "**cum mit Konjunktiv kann alles:** als, nachdem, weil, obwohl. Den Ausschlag gibt der Zusammenhang. Steht im Hauptsatz _tamen_, heißt es „obwohl“.",
   "**Sodass-Signale im Hauptsatz:** _tam, ita, sic, tantus, talis, adeo_ → das _ut_ danach ist konsekutiv.",
   "**Verkehrte Welt beim Fürchten:** _timeo, ne veniat_ – ich fürchte, **dass** er kommt. _timeo, ut veniat_ – ich fürchte, dass er **nicht** kommt.",
   "**Indirekte Frage = immer Konjunktiv.** Keine Ausnahme."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f4",2,"ut non potuit","_ut_ + Indikativ: „als er nicht konnte“ – kein dass-Satz!"],
   ["f10",3,"ut carperent","_ut_ + Konjunktiv, final: „damit die Küken sie verzehrten“."],
   ["f13",3,"ut fetum","Begehrsatz nach _rogasset_: „sie bat, dass sie ihren Wurf … dürfe“."],
   ["f11",5,"ne possent capi","_ne_ + Konjunktiv: „damit sie nicht gefangen werden könnten“."],
   ["f14",1,"dum quaerit","_dum_ + Indikativ Präsens: „während er suchte“."],
   ["f7",10,"quae","Relativsatz im Konjunktiv (_abstuleris, postules_) mit kausalem Nebensinn: „die du ja … davongetragen hast“."]]},
 {h:"Typische Fehler",list:[
   "Jedes _ut_ mit „dass“ übersetzen, auch wenn ein Indikativ folgt.",
   "Beim _cum_ mit Konjunktiv immer „als“ nehmen, obwohl ein _tamen_ auf „obwohl“ hindeutet.",
   "Die indirekte Frage als Relativsatz übersetzen: _nescio, quis veniat_ heißt „ich weiß nicht, wer kommt“."]}
 ]},

{id:"kasus",t:"Kasusfunktionen",sub:"Genitiv · Dativ · Ablativ",quiz:"Kasusfunktionen",
 kurz:"Die Endung sagt dir den Kasus – aber erst die Funktion sagt dir, wie du übersetzt. Besonders der Ablativ hat viele Gesichter.",
 s:[
 {h:"Ablativ",table:{head:["Funktion","Frage","Beispiel","Übersetzung"],rows:[
   ["instrumenti (Mittel)","Womit? Wodurch?","_gladio pugnare_","mit dem Schwert kämpfen"],
   ["causae (Grund)","Warum?","_fame perire_","vor Hunger sterben"],
   ["modi (Art und Weise)","Wie?","_magno cum clamore_","mit großem Geschrei"],
   ["comparationis (Vergleich)","als wer?","_bove latior_","breiter als das Rind"],
   ["separativus (Trennung)","Wovon?","_periculo liberare_","von der Gefahr befreien"],
   ["loci (Ort)","Wo?","_terra marique_","zu Wasser und zu Lande"],
   ["temporis (Zeit)","Wann?","_prima luce_","bei Tagesanbruch"],
   ["auctoris (Urheber)","Von wem?","_a superis datur_","wird von den Göttern gegeben"],
   ["qualitatis (Eigenschaft)","Was für einer?","_vir magna virtute_","ein Mann von großer Tapferkeit"]]}},
 {h:"Genitiv",table:{head:["Funktion","Beispiel","Übersetzung"],rows:[
   ["possessivus (Besitz)","_domus patris_","das Haus des Vaters"],
   ["subiectivus","_amor matris_ (die Mutter liebt)","die Liebe der Mutter"],
   ["obiectivus","_amor patriae_ (man liebt die Heimat)","die Liebe zur Heimat"],
   ["partitivus (Teil)","_pars militum, nihil novi_","ein Teil der Soldaten, nichts Neues"],
   ["qualitatis (Eigenschaft)","_cervus vasti corporis_","ein Hirsch von gewaltigem Körper"],
   ["bei Adjektiven und Verben","_cupidus pretii, oblitus cibi_","begierig nach dem Wert, das Futter vergessend"]]}},
 {h:"Dativ",table:{head:["Funktion","Beispiel","Übersetzung"],rows:[
   ["Objekt","_mihi dedit_","er gab mir"],
   ["possessivus (Besitzer)","_mihi est liber_","ich habe ein Buch"],
   ["commodi (Vorteil)","_tibi laboro_","ich arbeite für dich"],
   ["finalis (Zweck)","_auxilio venire_","zu Hilfe kommen"],
   ["bei Verben mit Dativ","_parcere, nocere, favere, servire, studere_","jemanden schonen, jemandem schaden …"]]}},
 {h:"Eselsbrücken",tips:[
   "**Der Ablativ ist der W-Fragen-König:** Womit? Warum? Wie? Wo? Wann? Wovon? Von wem? Jede Frage ist eine Funktion.",
   "**Ding ohne Präposition = Mittel, Person mit a/ab = Urheber:** _gladio_ – mit dem Schwert; _a lupo_ – vom Wolf.",
   "**Nach einem Komparativ heißt der Ablativ „als“:** _bove latior_ – breiter als das Rind.",
   "**Gen. obiectivus oder subiectivus? Mach ein Verb draus:** _amor patris_ – liebt der Vater (subjektiv) oder wird der Vater geliebt (objektiv)?",
   "**„Mir ist“ = „ich habe“:** _mihi est_ – Dativus possessivus."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f1",1,"siti","Ablativus causae: „vom Durst getrieben“."],
   ["f1",14,"fictis causis","Ablativus instrumenti: „mit erfundenen Gründen“."],
   ["f5",4,"bove","Ablativus comparationis nach _latior_: „breiter als das Rind“."],
   ["f17",8,"a superis","Ablativus auctoris beim Passiv: „von den Göttern“."],
   ["f8",4,"vasti corporis","Genitivus qualitatis: „ein Hirsch von gewaltigem Körper“."],
   ["f5",2,"tantae magnitudinis","Genitivus obiectivus: „Neid auf so große Größe“."],
   ["f10",1,"docili quia patet sollertiae","Dativ bei _patet_: „der Klugheit steht die Rache offen“."]]},
 {h:"Typische Fehler",list:[
   "Jeden Ablativ mit „mit“ übersetzen.",
   "Den Ablativus comparationis übersehen und _bove_ als „mit dem Rind“ lesen.",
   "Den Dativus possessivus wörtlich übersetzen: „Mir ist ein Buch“ statt „Ich habe ein Buch“."]}
 ]},

{id:"formen",t:"Verbformen & Deponentien",sub:"Tempuszeichen · Passiv · Kurzformen",quiz:"Formen",
 kurz:"Jedes Tempus hat ein Erkennungszeichen. Wer die Zeichen kennt, kann auch unbekannte Verben sicher bestimmen.",
 s:[
 {h:"Tempuszeichen im Indikativ",table:{head:["Tempus","Kennzeichen","a-Konj.","kons. Konj."],rows:[
   ["Präsens","–","_amat_","_legit_"],
   ["Imperfekt","_-ba-_","_amabat_","_legebat_"],
   ["Futur I","_-bi-_ (a/e) · _-a-/-e-_ (kons./i)","_amabit_","_legam, leget_"],
   ["Perfekt","Perfektstamm","_amavit_","_legit_ (langes ē)"],
   ["Plusquamperfekt","_-era-_","_amaverat_","_legerat_"],
   ["Futur II","_-eri-_ (1. Sg. _-ero_)","_amaverit_","_legerit_"]]}},
 {h:"Passiv",table:{head:["","Endungen / Bildung","Beispiel"],rows:[
   ["Präsensstamm","_-r, -ris, -tur, -mur, -mini, -ntur_","_amatur_ – er wird geliebt"],
   ["Perfekt Passiv","PPP + _sum_","_amatus est_ – er ist geliebt worden"],
   ["Plqpf. Passiv","PPP + _eram_","_amatus erat_ – er war geliebt worden"],
   ["Futur II Passiv","PPP + _ero_","_amatus erit_"]]}},
 {h:"Deponentien",p:["Deponentien haben **passive Formen, aber aktive Bedeutung**: _loquitur_ – er spricht. _locutus est_ – er hat gesprochen.",
   "Wichtige Deponentien aus den Fabeln: _loqui, sequi, pati, mori, queri, imitari, indignari, oblivisci, nasci, persequi_.",
   "**Wichtig fürs Partizip:** Das PPP eines Deponens ist aktiv – _locutus_ heißt „nachdem er gesprochen hatte“.",
   "Semideponentien sind nur im Perfekt passiv: _audere – ausus sum, gaudere – gavisus sum, solere – solitus sum_."]},
 {h:"Kurzformen",table:{head:["Kurzform","Langform","Form"],rows:[
   ["_negarunt_","_negaverunt_","3. Pl. Perfekt"],
   ["_invitasse_","_invitavisse_","Infinitiv Perfekt"],
   ["_rogasset_","_rogavisset_","Konj. Plusquamperfekt"],
   ["_ligarant, violarat_","_ligaverant, violaverat_","Plusquamperfekt"],
   ["_fuere, haesere_","_fuerunt, haeserunt_","3. Pl. Perfekt"]]}},
 {h:"Eselsbrücken",tips:[
   "**Futur: „bo-bi-bu“ bei a und e, „a-e-e“ beim Rest.** _amabo, amabis, amabunt_ – aber _legam, leges, leget_.",
   "**Deponere = ablegen:** Das Deponens hat seine aktiven Formen abgelegt, nicht aber seine aktive Bedeutung.",
   "**-ere am Perfektstamm ist kein Infinitiv:** _haesere_ = _haeserunt_. Der Infinitiv wäre _haerere_.",
   "**Fehlt ein v?** Taucht mitten im Verb _-asse-, -arunt, -arat_ auf, ist ein _-vi-/-ve-_ ausgefallen.",
   "**Plusquamperfekt = -era- = „war“:** _amaverat_ – er hatte geliebt."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f1",0,"venerant","Plusquamperfekt: Perfektstamm _ven-_ + _-erant_."],
   ["f1",6,"quereris","Deponens _queri_: passive Form, aktive Bedeutung – „du beklagst dich“."],
   ["f8",8,"sequetur","Futur I des Deponens _sequi_: kons. Konjugation, Kennvokal _-e-_."],
   ["f8",9,"tetigerit","Futur II im si-Satz, vorzeitig zum Futur _afficietur_."],
   ["f5",5,"negarunt","Kurzform von _negaverunt_."],
   ["f9",6,"haesere","3. Pl. Perfekt, Nebenform von _haeserunt_."]]},
 {h:"Typische Fehler",list:[
   "_leget_ als Präsens lesen – es ist Futur I der kons. Konjugation.",
   "Ein Deponens passiv übersetzen: _loquitur_ heißt nicht „er wird gesprochen“.",
   "_legit_ immer als Präsens nehmen – mit langem _ē_ ist es Perfekt. Der Zusammenhang entscheidet."]}
 ]},

{id:"stil",t:"Stilmittel",sub:"erkennen, benennen, deuten",quiz:"Stilmittel",
 kurz:"In der Interpretation zählt nicht nur der Name des Stilmittels. Punkte gibt es für Begriff, Textstelle und Wirkung.",
 s:[
 {h:"Die wichtigsten Stilmittel",table:{head:["Stilmittel","Was passiert","Beispiel aus den Fabeln"],rows:[
   ["Alliteration","gleicher Anlaut","_veritatis viribus_ (Lupus et agnus)"],
   ["Anapher","Wiederholung am Anfang","_quia … quia … quia_ (Vacca et capella)"],
   ["Antithese","Gegensatz","_superior – inferior_ (Lupus et agnus)"],
   ["Chiasmus","Überkreuzstellung (A-B-B-A)","_aviditas dives et pauper pudor_ (Iuvencus)"],
   ["Parallelismus","gleicher Satzbau","_et quem tenebat … nec quem petebat_ (Canis)"],
   ["Hyperbaton","Sperrung zusammengehöriger Wörter","_tuarum … pennarum_ (Vulpes et corvus)"],
   ["Klimax","Steigerung","_inflavit – maiore nisu – validius_ (Rana)"],
   ["Ellipse","Auslassung","_longeque inferior agnus_ – _stabat_ fehlt"],
   ["Metapher","bildlicher Ausdruck","_latro_ für den Wolf"],
   ["Personifikation / Metonymie","Eigenschaft statt Person","_decepta aviditas, sola improbitas_"],
   ["Periphrase","Umschreibung","_laniger_ für das Lamm, _bidens_ für das Schaf"],
   ["Hyperbel","Übertreibung","_tartareo specu_ (Pugna murium)"],
   ["Rhetorische Frage","Frage ohne echte Antwort","_num binas … putas?_ (Asinus)"],
   ["Apostrophe","direkte Anrede","_O qui tuarum, corve, …_ (Vulpes et corvus)"],
   ["Präsens historicum","Präsens in einer Erzählung","_lacerat_ (Lupus et agnus)"],
   ["Paradoxon","scheinbarer Widerspruch","Verhungern neben dem Goldschatz (Canis et thesaurus)"]]}},
 {h:"Eselsbrücken",tips:[
   "**BTW – Begriff, Textstelle, Wirkung.** Ohne Wirkung gibt es in der Klausur kaum Punkte.",
   "**Chiasmus = griechisches Chi (X):** Die Wörter stehen über Kreuz.",
   "**Hyperbaton = Hinüberschreiten:** Das Adjektiv springt über andere Wörter hinweg zu seinem Substantiv.",
   "**Anapher = an den Anfang.**",
   "**Klimax = Leiter** (griechisch): Stufe für Stufe höher. Geht es abwärts, heißt es Antiklimax.",
   "**Ellipse = Lücke:** Etwas fehlt, und du ergänzt es aus dem Zusammenhang."]},
 {h:"Beispiele aus den Fabeln",ex:[
   ["f1",1,"Superior stabat lupus","Antithese mit V. 3 (_inferior agnus_): Das Machtgefälle wird räumlich sichtbar."],
   ["f16",11,"aviditas dives et pauper pudor","Chiasmus: Gier–reich / arm–Scham prallen über Kreuz aufeinander."],
   ["f3",5,"tuarum, corve, pennarum","Apostrophe und Hyperbaton: übertriebene, kunstvolle Schmeichelei."],
   ["f8",6,"quia","Anapher mit V. 8 und 9: klingt nach Begründung, ist aber reine Macht."],
   ["f9",8,"tartareo specu","Hyperbel: Der Bauch des Wiesels wird zur Unterwelt."]]},
 {h:"So schreibst du einen Stilmittel-Satz",steps:[
   "Begriff nennen: „In V. 12 liegt ein Chiasmus vor …“",
   "Textstelle zitieren: „… (_aviditas dives et pauper pudor_).“",
   "Wirkung erklären: „Die Überkreuzstellung lässt Gier und Scham direkt aufeinanderprallen und betont so den Gegensatz der Lehre.“"]},
 {h:"Typische Fehler",list:[
   "Nur den Namen nennen, ohne Zitat und Wirkung.",
   "Jede Wiederholung „Anapher“ nennen – die Anapher steht am Anfang von Satzgliedern.",
   "Hyperbaton und Chiasmus verwechseln: Beim Hyperbaton wird ein Paar getrennt, beim Chiasmus werden zwei Paare gekreuzt."]}
 ]}
];
