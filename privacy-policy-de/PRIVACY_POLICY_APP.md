## 1. Allgemeine Informationen

- **Name der App**: Breakup Reset
- **Verantwortlicher**: CommunicateIT Agnieszka Twardosz, os. Piastów 5/41, 31-623 Kraków, NIP: 9512512357
- **Kontakt-E-Mail**: athomelabs.studio@gmail.com

Der Verantwortliche ist Verantwortlicher für Ihre personenbezogenen Daten in Bezug auf die Daten, die Sie freiwillig in der App angeben, oder die im Rahmen der Nutzung der App verarbeitet werden.

Sofern der Verantwortliche eine*n Datenschutzbeauftragte*n (DSB) benennt, werden die Kontaktdaten des DSB in einer Aktualisierung dieser Richtlinie angegeben. Zum im Dokumentkopf genannten Zeitpunkt erfolgt die Kontaktaufnahme in Angelegenheiten personenbezogener Daten über die oben angegebene E-Mail-Adresse.

---

## 2. Welche Daten wir verarbeiten (kurz)

Nachfolgend beschreiben wir Datenkategorien sowie den typischen Speicherort (**auf dem Server** oder **lokal auf dem Gerät**). Je nach genutzten Funktionen können einzelne Kategorien für Sie nicht relevant sein.

### 2.1 Kontodaten und Login

- E-Mail-Adresse
- Authentifizierungsdaten (Passwort nicht im Klartext; der Authentifizierungsanbieter speichert es verschlüsselt/gehasht)
- Login-/Sitzungsdaten (z. B. Zeitstempel; in Systemlogs können auch technische Informationen wie IP-Adresse und User Agent erscheinen)
- bei Nutzung eines externen Logins (z. B. Google): Kennungen und Profildaten, die der Login-Anbieter im Rahmen von OAuth übermittelt

**Wo wir speichern**: serverseitig (Supabase Auth).

### 2.2 In-App-Profil und Einstellungen

Je nachdem, was Sie in der App ausfüllen, kann dies u. a. umfassen:

- in der App angezeigter Name/Alias (falls angegeben)
- Sprache, Zeitzone
- (optional) Daten zu Sprachpräferenzen und/oder Sprachvarianten in der App, einschließlich der Auswahl `user_gender` / `ex_gender` (zur Personalisierung sprachlicher Inhalte)

**Wo wir speichern**: serverseitig (Profil und Einstellungen) sowie teilweise lokal (Cache von Einstellungen/Zuständen).

### 2.3 Daten zum Programmfortschritt

- Punkte, Streaks, Aktivitätsdaten und abgeschlossene Tage
- abgeschlossene Challenges
- Information, ob das Quiz abgeschlossen wurde, sowie Ergebnis/Typ (z. B. Persönlichkeitstyp und Ergebnisbestandteile)

**Wo wir speichern**: serverseitig (Fortschritt und Quizergebnis) sowie teilweise lokal (Cache von Fortschritt/Ergebnis).

### 2.4 Sensible Inhalte / vom Nutzer eingegebene Inhalte (wenn Sie diese Funktionen nutzen)

Die App kann von Ihnen eingegebene Inhalte speichern, insbesondere:

- Notizen zu abgeschlossenen Challenges (Feld „notes“)
- Tagebucheinträge/Reflexionen (je nach Funktion ggf. lokal auf dem Gerät gespeichert)

Solche Einträge können im umgangssprachlichen Sinne sensible Informationen enthalten (z. B. Beschreibungen von Beziehungen, Emotionen). Wir empfehlen nicht, Daten einzugeben, die Sie nicht speichern möchten.

**Wo wir speichern**: Notizen zu Challenges können auf dem Server gespeichert werden; Tagebuch/Reflexionen können lokal auf dem Gerät gespeichert werden (je nach Funktion).

### 2.5 Benachrichtigungen

Wenn Sie Benachrichtigungen aktivieren, verarbeiten wir:

- Push-Token des Geräts (Expo Push Token)
- Einstellungen und Präferenzen für Benachrichtigungen (Ein/Aus, Typen, Uhrzeit, Zeitzone)

**Wo wir speichern**: serverseitig (Token und Präferenzen) sowie lokal auf dem Gerät (lokal geplante Benachrichtigungen).

### 2.6 (Optional) Schritte-/Bewegungsdaten (Anerkennung eines Spaziergangs)

Wenn Sie die Funktion **sanfter Bewegungsanerkennungen** aktivieren (z. B. eine Nachricht wie „Heute war ein Spaziergang. Das zählt.“), kann die App die **Schrittanzahl vom Gerät** (Motion & Fitness / Activity Recognition) auslesen, um:

- **einmal täglich Bewegung** in der App anzuerkennen,
- **(optional) automatisch** eine Challenge zum Thema Spaziergang/Bewegung als abgeschlossen zu markieren, wenn die App erkennt, dass Sie an diesem Tag bereits gegangen sind.

**Was genau wir speichern**:

- Präferenzen dieser Funktion (Ein/Aus, Auslieferungsart: Pop-up/Push),
- das **Flag „ob die Bewegungsanerkennung heute bereits angezeigt wurde“** (sog. *once-per-day gating*),
- (optional) das Flag „ob die automatische Anwendung auf Challenges heute bereits ausgeführt wurde“.

Wir erstellen in der App **kein** „Fitness-Dashboard“ und speichern im Rahmen dieser Funktion grundsätzlich **keine Schritt-Historie** in Ihrem Backend-Konto.

**Wo wir speichern**: lokal auf dem Gerät (AsyncStorage). Schrittdaten werden zur Berechnung des Signals „Bewegung heute“ verwendet und müssen nicht an den Server gesendet werden.

### 2.7 Analysedaten (Produktanalyse)

Die App kann Analysedaten zur App-Nutzung erfassen (z. B. Events, Event-Eigenschaften, App-Version, Plattform, Sprache, Tage seit Installation), um das Produkt weiterzuentwickeln und die App zu verbessern. Dafür nutzen wir PostHog (Details unten).

**Wo wir verarbeiten**: beim Analytik-Anbieter (PostHog).

### 2.8 Käufe (freiwillige Unterstützung der App)

Wenn Sie „Support the App“ kaufen, verarbeiten wir Informationen zur Berechtigung (Entitlement) und zum Unterstützungsstatus über RevenueCat sowie über die Plattform-Stores (Apple App Store / Google Play).

**Wo wir verarbeiten**: beim Zahlungs-/Aboanbieter (RevenueCat) sowie in den Plattform-Stores; die App kann den Unterstützungsstatus lokal zwischenspeichern.

---

## 3. Zwecke der Verarbeitung

Wir verarbeiten Daten zu folgenden Zwecken:

- **Erstellung und Betrieb eines Kontos** (Registrierung, Login, Passwort-Reset, Sitzungsverwaltung)
- **Bereitstellung von App-Funktionen** (Fortschritt, Quiz, Personalisierung von Inhalten, Präferenzen)
- **Benachrichtigungen** (falls aktiviert): Erinnerungen und Mitteilungen zu Fortschritt/Erfolgen
- **Produktanalyse**: Verständnis der App-Nutzung und Qualitätsverbesserung (PostHog)
- **Abwicklung der finanziellen Unterstützung der App** (falls genutzt): Prüfung von Berechtigungen und Unterstützungsstatus (RevenueCat)
- **Marketing / Newsletter**: nur, wenn Sie **einwilligen (Opt-in)** und nur im Umfang, in dem die Funktion aktiviert ist

---

## 3A. Rechtsgrundlagen der Verarbeitung (Art. 6 DSGVO)

Je nach Zweck verarbeiten wir Daten auf Grundlage von:

- **Art. 6 Abs. 1 lit. b DSGVO (Vertrag / Leistungserbringung)**:
  - Erstellung und Betrieb eines Kontos
  - Bereitstellung von App-Funktionen (Fortschritt, Quiz, Personalisierung im Rahmen des App-Betriebs)
  - Benachrichtigungen, sofern sie sich aus den Einstellungen und dem Betrieb der App ergeben (die Aktivierung von Benachrichtigungen auf dem Gerät ist freiwillig)
- **Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse des Verantwortlichen)**:
  - Gewährleistung der Sicherheit, Verhinderung von Missbrauch, Fehlerdiagnose, Betrieb der Infrastruktur sowie Geltendmachung/Abwehr von Ansprüchen
  - grundlegende Analyse der App-Funktionsweise im erforderlichen Umfang zur Aufrechterhaltung und Verbesserung (sofern in einer bestimmten Konfiguration keine Einwilligung erforderlich ist)
- **Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)**:
  - Marketing/Newsletter (falls aktiviert) – ausschließlich nach Ihrem freiwilligen Opt-in
  - Produktanalyse (falls in einer bestimmten Konfiguration eine Einwilligung erforderlich ist, z. B. aufgrund des Datenumfangs oder einer Übermittlung außerhalb des EWR)

Sofern die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit widerrufen, ohne dass dies die Rechtmäßigkeit der Verarbeitung bis zum Widerruf berührt.

---

## 4. Wo und wie wir Daten speichern

### 4.1 Serverseitige Speicherung (Backend)

Wir nutzen Supabase als Backend der App (Authentifizierung, Datenbank, Serverfunktionen, Benachrichtigungen).

Aus dem technischen Audit:

- das Supabase-Projekt befindet sich in der Region **`eu-central-1`**
- Supabase Storage (Dateien) ist derzeit leer (keine Buckets/Objekte zum Zeitpunkt des Audits)

### 4.2 Speicherung auf dem Gerät (lokal)

Die App speichert bestimmte Daten lokal auf dem Gerät (AsyncStorage), z. B. Fortschritt, Quizergebnis sowie (je nach genutzten Funktionen) Tagebuch-/Reflexionseinträge und weitere Hilfsdaten.

Wenn Sie die Funktion der sanften Bewegungsanerkennungen (Schritte) aktivieren, speichert die App lokal **ausschließlich die Präferenzen dieser Funktion** sowie **tägliche Flags**, die verhindern, dass die Mitteilung mehr als einmal pro Tag angezeigt wird (ohne die Notwendigkeit, eine Schritt-Historie zu speichern).

Ein Mechanismus zum Löschen lokaler Daten beim Löschen des Kontos ist in der App implementiert. In der Praxis umfasst dies u. a. das Löschen lokaler Fortschrittsdaten, der Historie sowie in der App gespeicherter Inhalte (der Umfang kann je nach genutzten Funktionen und App-Version variieren).

---

## 5. An wen wir Daten weitergeben (Empfänger / Auftragsverarbeiter)

Je nach genutzten Funktionen können Daten von folgenden Anbietern verarbeitet werden:

### 5.1 Supabase (Hosting von Backend und Datenbank, Authentifizierung)

- Supabase verarbeitet Konto- und Sitzungsdaten sowie in der Datenbank gespeicherte App-Daten (z. B. Fortschritt, Profil, Präferenzen, Notizen zu Challenges).

### 5.2 PostHog (Produktanalyse)

- PostHog verarbeitet Analysedaten zu Events sowie Event-Eigenschaften.
- Aus dem Audit: In der App ist der Ingest-Endpoint `https://us.i.posthog.com` eingestellt (was je nach Konfiguration des PostHog-Kontos/der Region eine Übermittlung in die USA bedeuten kann).

### 5.3 Zahlungsanbieter / Stores

- Apple App Store / Google Play sowie RevenueCat im Rahmen der Zahlungsabwicklung und Berechtigungsprüfung.

### 5.4 Benachrichtigungsanbieter

- Expo/Apple/Google im Rahmen der technischen Zustellung von Push-Benachrichtigungen (Geräte-Token und Zustellung).

### 5.5 Autorisierte Personen

- Autorisierte Personen auf Seiten des Verantwortlichen können Zugriff auf Daten haben, soweit dies für Betrieb und Weiterentwicklung der App erforderlich ist.

---

## 6. Sicherheit

Wir setzen technische und organisatorische Maßnahmen ein, die den Risiken der Verarbeitung angemessen sind.

Auf Basis der eingesetzten Technologien:

- die Datenübertragung zu Backend-Diensten erfolgt über einen verschlüsselten Kanal (TLS/HTTPS)
- Authentifizierungsdaten werden von Supabase Auth verarbeitet (Passwörter werden nicht im Klartext gespeichert; auf Supabase-Seite ist die Spalte `encrypted_password` sichtbar)
- Infrastruktur-Anbieter können technische Logs führen (z. B. für Sicherheit und Diagnose)

---

## 7. Speicherdauer

Wir speichern Daten:

- **Konto- und Profildaten**: für die Dauer der Kontoführung und anschließend bis zur Löschung des Kontos oder bis zur wirksamen Umsetzung eines Löschverlangens (vorbehaltlich gesetzlicher Ausnahmen)
- **Fortschritts- und Ergebnisdaten in der App**: für die Dauer der Kontoführung oder bis zur Löschung des Kontos
- **Benachrichtigungen**: Push-Token und Präferenzen – bis zur Deaktivierung der Benachrichtigungen, bis zum Widerruf der Benachrichtigungsberechtigung im Betriebssystem oder bis zur Löschung des Kontos
- **Marketingdaten (falls aktiviert und bei erteilter Einwilligung)**: bis zum Widerruf der Einwilligung oder Abmeldung von Marketingkommunikation bzw. bis die Daten für den Zweck, zu dem sie erhoben wurden, nicht mehr erforderlich sind
- **technische Logs und Sicherheitsdaten**: für den Zeitraum, der zur Gewährleistung der Sicherheit, zur Missbrauchserkennung und zur Diagnose erforderlich ist (Speicherfristen können je nach Infrastruktur-Anbieter variieren)

Sofern konkrete Speicherfristen definiert werden (z. B. für Logs), wird der Verantwortliche diese in einer Aktualisierung der Richtlinie angeben.

---

## 8. Ihre Rechte

Ihnen steht das Recht zu auf:

- Auskunft
- Berichtigung
- Löschung
- Einschränkung der Verarbeitung
- Datenübertragbarkeit
- Widerspruch (im gesetzlich vorgesehenen Umfang)

Sie haben das Recht, eine Beschwerde beim Präsidenten der polnischen Datenschutzbehörde (UODO) einzureichen.

### 8.1 Wie Sie Ihre Rechte ausüben

Um Ihre Rechte auszuüben, kontaktieren Sie den Verantwortlichen per E-Mail: **athomelabs.studio@gmail.com**.

Zur schnelleren Bearbeitung beschreiben Sie bitte, welches Recht Sie geltend machen (z. B. Auskunft, Löschung) und geben Sie Ihren Konto-Identifikator an (z. B. die in der App verwendete E-Mail-Adresse). Der Verantwortliche kann zusätzliche Informationen nur insoweit anfordern, wie dies zur Identitätsprüfung erforderlich ist.

---

## 8A. Profiling und automatisierte Entscheidungsfindung (Art. 22 DSGVO)

Die App kann Nutzungsdaten sowie Quizergebnisse zur **Personalisierung von Inhalten und Empfehlungen** verwenden (z. B. Anpassung der Inhalte an Persönlichkeitstyp oder Fortschritt).

Der Verantwortliche trifft **keine** Entscheidungen Ihnen gegenüber, die ausschließlich auf automatisierter Verarbeitung beruhen und Ihnen gegenüber rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich beeinträchtigen würden (im Sinne von Art. 22 DSGVO).

---

## 9. Datenübermittlung außerhalb des EWR / in Drittländer

Je nach Konfiguration der Anbieter und den von Ihnen genutzten Funktionen:

- Supabase arbeitet in der auditierten Konfiguration in einer EU-Region (`eu-central-1`).
- PostHog: In der App ist der Ingest-Endpoint `https://us.i.posthog.com` eingestellt, was mit einer Übermittlung außerhalb des EWR verbunden sein kann.
- Stores (Apple/Google) und Benachrichtigungsanbieter können Daten in unterschiedlichen Jurisdiktionen verarbeiten.

Bei Übermittlungen außerhalb des EWR kommen von den Anbietern bereitgestellte Compliance-Mechanismen (z. B. Standardvertragsklauseln) zum Einsatz, soweit erforderlich.

---

## 9A. Ist die Bereitstellung von Daten verpflichtend

- **Kontodaten (E-Mail, Login-Daten)**: erforderlich zur Erstellung und zum Betrieb eines Kontos in der App.
- **Profildaten (z. B. Alias, `user_gender`, `ex_gender`)**: grundsätzlich freiwillig; fehlende Angaben können die Personalisierung einschränken.
- **Benachrichtigungen**: freiwillig; fehlende Zustimmung im Betriebssystem bedeutet keine Push-Benachrichtigungen.
- **Schritte-/Bewegungsdaten (Anerkennung eines Spaziergangs)**: freiwillig; die Funktion wirkt nur nach Aktivierung in der App und Erteilung der Berechtigung im Betriebssystem. Sie können sie jederzeit deaktivieren.
- **Analytik**: sofern Datenschutzeinstellungen in der App verfügbar sind, können Sie Analytik einschränken/deaktivieren (sofern sie nicht zur Gewährleistung von Sicherheit und Betrieb der App erforderlich ist).

---

## 9B. Daten von Kindern

Die App richtet sich nicht an Kinder. Wenn der Verantwortliche Kenntnis davon erlangt, dass er Daten eines Kindes ohne Rechtsgrundlage verarbeitet, wird er Maßnahmen zu deren Löschung ergreifen.

---

## 10. Kontakt

Bei Fragen zum Schutz personenbezogener Daten kontaktieren Sie den Verantwortlichen:

- **E-Mail**: athomelabs.studio@gmail.com

