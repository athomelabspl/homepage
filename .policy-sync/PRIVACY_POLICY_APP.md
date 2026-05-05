## 1. Informacje ogólne

- **Nazwa aplikacji**: Breakup Reset
- **Administrator danych**: CommunicateIT Agnieszka Twardosz, os. Piastów 5/41, 31-623 Kraków, NIP: 9512512357
- **Kontakt e-mail**: athomelabs.studio@gmail.com

Administrator jest Administratorem Twoich danych osobowych w zakresie danych, które podajesz dobrowolnie w aplikacji lub które są przetwarzane w trakcie korzystania z aplikacji.

Jeżeli Administrator wyznaczy Inspektora Ochrony Danych (IOD), dane kontaktowe IOD zostaną podane w aktualizacji niniejszej polityki. Na dzień wskazany w nagłówku dokumentu kontakt w sprawach danych osobowych odbywa się poprzez adres e-mail podany powyżej.

---

## 2. Jakie dane przetwarzamy (w skrócie)

Poniżej opisujemy kategorie danych oraz gdzie typowo są one przechowywane (**na serwerze** lub **lokalnie na urządzeniu**). W zależności od tego, z jakich funkcji korzystasz, część kategorii może Cię nie dotyczyć.

### 2.1 Dane konta i logowania

- adres e-mail
- dane uwierzytelniania (hasło w postaci niejawnej; dostawca uwierzytelniania przechowuje je w formie zaszyfrowanej/haszowanej)
- dane o logowaniach/sesjach (np. znaczniki czasu; w logach systemowych mogą pojawiać się także informacje techniczne typu IP i user agent)
- jeśli korzystasz z logowania zewnętrznego (np. Google): identyfikatory i dane profilu przekazywane przez dostawcę logowania w ramach OAuth

**Gdzie przechowujemy**: po stronie serwera (Supabase Auth).

### 2.2 Dane profilu w aplikacji i ustawienia

W zależności od tego, co uzupełnisz w aplikacji, mogą to być m.in.:

- nazwa/alias wyświetlany w aplikacji (jeśli podasz)
- język, strefa czasowa
- (opcjonalnie) dane dotyczące preferencji językowych i/lub wariantów językowych w aplikacji, w tym wybór `user_gender` / `ex_gender` (używane do personalizacji treści językowych)

**Gdzie przechowujemy**: po stronie serwera (profil i ustawienia) oraz częściowo lokalnie (cache ustawień/stanów).

### 2.3 Dane o postępach w programie

- punkty, streaki, daty aktywności i ukończonych dni
- ukończone wyzwania
- informacje, czy ukończono quiz i sam wynik/typ (np. typ osobowości oraz wynikowe składowe)

**Gdzie przechowujemy**: po stronie serwera (postęp i wynik quizu) oraz częściowo lokalnie (cache postępu/wyniku).

### 2.3A Historia codziennego check-inu emocji (lokalnie)

- etykieta emocji wybrana w codziennym check-inie (np. sad, numb, okay)
- znaczniki czasu oraz identyfikatory dni wykorzystywane do wyświetlania Twojej historii w aplikacji

**Gdzie przechowujemy**: lokalnie na Twoim urządzeniu (AsyncStorage). Ta historia służy do wyświetlania Twoich ostatnich dni w aplikacji i nie musi być zapisywana w Twoim koncie w backendzie.

### 2.4 Treści wrażliwe / treści wpisywane przez użytkownika (jeśli korzystasz z tych funkcji)

Aplikacja może przechowywać treści wpisywane przez Ciebie, w szczególności:

- notatki do ukończonych wyzwań (pole “notes”)
- wpisy dziennika/refleksje (mogą być przechowywane lokalnie na urządzeniu, zależnie od funkcji)

Wpisy tego typu mogą zawierać dane wrażliwe w potocznym sensie (np. opis relacji, emocji). Nie zachęcamy do wpisywania danych, których nie chcesz przechowywać.

**Gdzie przechowujemy**: notatki do wyzwań mogą być przechowywane na serwerze; dziennik/refleksje mogą być przechowywane lokalnie na urządzeniu (zależnie od funkcji).

### 2.5 Powiadomienia

Jeśli włączysz powiadomienia, przetwarzamy:

- token powiadomień push urządzenia (Expo push token)
- ustawienia i preferencje powiadomień (włącz/wyłącz, typy, godzina, strefa czasowa)

**Gdzie przechowujemy**: po stronie serwera (token i preferencje) oraz lokalnie na urządzeniu (lokalnie zaplanowane powiadomienia).

### 2.6 (Opcjonalnie) Dane o krokach / ruchu (uznanie spaceru)

Jeśli włączysz funkcję **łagodnych uznań ruchu** (np. komunikat w stylu „Dziś spacer był. To się liczy.”) aplikacja może odczytywać **liczbę kroków z urządzenia** (Motion & Fitness / Activity Recognition) w celu:

- **jednorazowego (raz dziennie) uznania ruchu** w aplikacji,
- **(opcjonalnie) automatycznego oznaczenia** wyzwania związanego ze spacerem/ruchiem jako ukończonego, jeśli aplikacja wykryje, że już chodziłeś(-aś) danego dnia.

**Co dokładnie przechowujemy**:

- preferencje tej funkcji (włącz/wyłącz, sposób dostarczenia: pop-up/push),
- **flaga „czy uznanie ruchu zostało już pokazane dziś”** (tzw. *once-per-day gating*),
- (opcjonalnie) flaga „czy automatyczne zastosowanie do wyzwań zostało już wykonane dziś”.

**Nie tworzymy** w aplikacji „panelu fitness” i co do zasady **nie zapisujemy historii kroków** w Twoim koncie w backendzie w ramach tej funkcji.

**Gdzie przechowujemy**: lokalnie na urządzeniu (AsyncStorage). Dane kroków są wykorzystywane do wyliczenia sygnału „ruch dziś” i nie muszą być wysyłane na serwer.

### 2.7 Dane analityczne (produktowe)

Aplikacja może zbierać dane analityczne dotyczące użycia aplikacji (np. zdarzenia, właściwości zdarzeń, wersja aplikacji, platforma, język, dni od instalacji), w celu rozwoju produktu i poprawy działania aplikacji. Wykorzystujemy do tego PostHog (szczegóły poniżej).

W analityce możemy uwzględniać **nieidentyfikujące sygnały użycia** jako właściwości zdarzeń (np. wybraną etykietę emocji w check-inie, taką jak „sad” lub „anxious”). Do analityki **nie wysyłamy treści dziennika** ani innych treści wpisywanych w polach tekstowych.

**Gdzie przetwarzamy**: u dostawcy analityki (PostHog).

### 2.8 Zakupy (dobrowolne wsparcie aplikacji)

Jeśli dokonasz zakupu “Support the App”, przetwarzamy informacje o uprawnieniu (entitlement) i statusie wsparcia poprzez RevenueCat oraz sklepy platformowe (Apple App Store / Google Play).

**Gdzie przetwarzamy**: u dostawcy płatności/subskrypcji (RevenueCat) oraz w sklepach platformowych; aplikacja może lokalnie cache’ować status wsparcia.

---

## 3. Cele przetwarzania

Przetwarzamy dane w następujących celach:

- **utworzenie i obsługa konta** (rejestracja, logowanie, reset hasła, zarządzanie sesją)
- **świadczenie funkcji aplikacji** (postęp, quiz, personalizacja treści, preferencje)
- **powiadomienia** (jeśli włączysz): przypomnienia i komunikaty o postępach/osiągnięciach
- **analityka produktowa**: rozumienie działania aplikacji i poprawa jakości (PostHog)
- **obsługa wsparcia finansowego aplikacji** (jeśli skorzystasz): weryfikacja uprawnień i statusu wsparcia (RevenueCat)
- **marketing / newsletter**: tylko jeśli **wyrazisz zgodę (opt-in)** i tylko w zakresie, w jakim dana funkcja jest uruchomiona

---

## 3A. Podstawy prawne przetwarzania (art. 6 RODO)

W zależności od celu przetwarzamy dane na podstawie:

- **art. 6 ust. 1 lit. b RODO (umowa / świadczenie usługi)**:
  - utworzenie i obsługa konta
  - świadczenie funkcji aplikacji (postęp, quiz, personalizacja w ramach działania aplikacji)
  - powiadomienia, jeżeli wynikają z ustawień i działania aplikacji (przy czym samo włączenie powiadomień na urządzeniu jest dobrowolne)
- **art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora)**:
  - zapewnienie bezpieczeństwa, zapobieganie nadużyciom, diagnostyka błędów, utrzymanie infrastruktury oraz dochodzenie/obrona roszczeń
  - podstawowa analityka działania aplikacji w zakresie niezbędnym do jej utrzymania i poprawy (jeżeli nie wymaga zgody w danej konfiguracji)
- **art. 6 ust. 1 lit. a RODO (zgoda)**:
  - marketing/newsletter (jeżeli uruchomione) – wyłącznie po Twoim dobrowolnym opt-in
  - analityka produktowa (jeżeli w danej konfiguracji wymaga zgody, np. ze względu na zakres danych lub transfer poza EOG)

Jeżeli przetwarzanie odbywa się na podstawie zgody, możesz ją cofnąć w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem zgody.

---

## 4. Gdzie i jak przechowujemy dane

### 4.1 Przechowywanie po stronie serwera (backend)

Korzystamy z Supabase jako zaplecza aplikacji (uwierzytelnianie, baza danych, funkcje serwerowe, powiadomienia).

Z audytu technicznego:

- Supabase projekt jest w regionie **`eu-central-1`**
- Supabase Storage (pliki) jest aktualnie puste (brak bucketów/obiektów w momencie audytu)

### 4.2 Przechowywanie na urządzeniu (lokalnie)

Aplikacja przechowuje część danych lokalnie na urządzeniu (AsyncStorage), np. postęp, wynik quizu oraz (w zależności od używanych funkcji) wpisy dziennika/refleksje i inne dane pomocnicze.

Jeśli włączysz funkcję łagodnych uznań ruchu (kroki), aplikacja przechowuje lokalnie **wyłącznie preferencje tej funkcji** oraz **dzienne flagi** zapobiegające powtarzaniu komunikatu więcej niż raz dziennie (bez potrzeby zapisywania historii kroków).

Mechanizm czyszczenia danych lokalnych przy usuwaniu konta jest zaimplementowany w aplikacji. W praktyce obejmuje on usuwanie m.in. lokalnych danych postępu, historii i treści zapisanych w pamięci aplikacji (zakres może się różnić w zależności od używanych funkcji i wersji aplikacji).

---

## 5. Komu udostępniamy dane (odbiorcy / podmioty przetwarzające)

W zależności od używanych funkcji, dane mogą być przetwarzane przez następujących dostawców:

### 5.1 Supabase (hosting backendu i bazy, uwierzytelnianie)

- Supabase przetwarza dane konta, sesji oraz dane aplikacyjne zapisane w bazie (np. postęp, profil, preferencje, notatki do wyzwań).

### 5.2 PostHog (analityka produktowa)

- PostHog przetwarza dane analityczne zdarzeń oraz właściwości zdarzeń.
- W aktualnej konfiguracji aplikacji ingestion analityki jest ustawiony na endpoint UE `https://eu.i.posthog.com`. W zależności od konfiguracji dostawcy przetwarzanie analityki może nadal wiązać się z przekazywaniem danych poza EOG.

### 5.3 Dostawcy płatności / sklepy

- Apple App Store / Google Play oraz RevenueCat w zakresie realizacji płatności i weryfikacji uprawnień.

### 5.4 Dostawcy powiadomień

- Expo/Apple/Google w zakresie technicznej realizacji powiadomień push (token urządzenia i doręczenie).

### 5.5 Upoważnione osoby

- Upoważnione osoby działające po stronie Administratora mogą mieć dostęp do danych w zakresie niezbędnym do utrzymania i rozwoju aplikacji.

---

## 6. Bezpieczeństwo

Stosujemy środki techniczne i organizacyjne adekwatne do ryzyk przetwarzania.

W oparciu o użyte technologie:

- transmisja danych do usług backendowych jest realizowana szyfrowanym kanałem (TLS/HTTPS)
- dane uwierzytelniania są przetwarzane przez Supabase Auth (hasła są przechowywane w formie niejawnej; po stronie Supabase widoczna jest kolumna `encrypted_password`)
- dostawcy infrastruktury mogą prowadzić logi techniczne (np. dla bezpieczeństwa i diagnostyki)

---

## 7. Retencja danych

Przechowujemy dane:

- **dane konta i profilowe**: przez czas utrzymywania konta, a następnie do czasu usunięcia konta lub skutecznego żądania usunięcia (z zastrzeżeniem wyjątków prawnych)
- **dane postępu i wyników w aplikacji**: przez czas utrzymywania konta lub do momentu usunięcia konta
- **powiadomienia**: token push i preferencje – do czasu wyłączenia powiadomień, wycofania zgody na powiadomienia w systemie operacyjnym lub usunięcia konta
- **dane marketingowe (jeśli uruchomione i jeśli wyrażono zgodę)**: do czasu cofnięcia zgody lub rezygnacji z komunikacji marketingowej, ewentualnie do czasu, gdy dane nie będą już potrzebne do celu, w którym zostały zebrane
- **logi techniczne i dane bezpieczeństwa**: przez okres niezbędny do zapewnienia bezpieczeństwa, wykrywania nadużyć i diagnostyki (okresy retencji mogą różnić się w zależności od dostawcy infrastruktury)

Jeżeli konkretne okresy retencji zostaną zdefiniowane (np. dla logów), Administrator wskaże je w aktualizacji polityki.

---

## 8. Twoje prawa

Przysługuje Ci prawo do:

- dostępu do danych
- sprostowania danych
- usunięcia danych
- ograniczenia przetwarzania
- przenoszenia danych
- wniesienia sprzeciwu (w zakresie przewidzianym przez prawo)

Masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.

### 8.1 Jak zrealizować swoje prawa

Aby zrealizować swoje prawa, skontaktuj się z Administratorem poprzez e-mail: **athomelabs.studio@gmail.com**.

Dla usprawnienia realizacji żądania opisz, o jakie prawo wnioskujesz (np. dostęp, usunięcie) i podaj identyfikator konta (np. e-mail użyty w aplikacji). Administrator może poprosić o dodatkowe informacje wyłącznie w zakresie niezbędnym do weryfikacji tożsamości.

---

## 8A. Profilowanie i zautomatyzowane podejmowanie decyzji (art. 22 RODO)

Aplikacja może wykorzystywać dane o korzystaniu z aplikacji oraz wyniki quizu do **personalizacji treści i rekomendacji** (np. dopasowanie treści do typu osobowości lub postępu).

Administrator **nie podejmuje** wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, które wywoływałyby skutki prawne lub w podobny sposób istotnie na Ciebie wpływały (w rozumieniu art. 22 RODO).

---

## 9. Przekazywanie danych poza EOG / do państw trzecich

W zależności od konfiguracji dostawców i tego, z jakich funkcji korzystasz:

- Supabase w audytowanej konfiguracji działa w regionie UE (`eu-central-1`).
- PostHog: ingestion analityki jest ustawiony na `https://eu.i.posthog.com`. W zależności od konfiguracji dostawcy i korzystania z funkcji przetwarzanie może nadal wiązać się z przekazywaniem danych poza EOG.
- Sklepy (Apple/Google) i dostawcy powiadomień mogą przetwarzać dane w różnych jurysdykcjach.

W przypadku transferów poza EOG stosuje się mechanizmy zgodności zapewniane przez dostawców (np. standardowe klauzule umowne), w zakresie w jakim są wymagane.

---

## 9A. Czy podanie danych jest obowiązkowe

- **Dane konta (e-mail, dane logowania)**: niezbędne do utworzenia i obsługi konta w aplikacji.
- **Dane profilu (np. alias, `user_gender`, `ex_gender`)**: co do zasady dobrowolne; brak może ograniczyć personalizację treści.
- **Powiadomienia**: dobrowolne; brak zgody w systemie operacyjnym oznacza brak powiadomień push.
- **Dane o krokach/ruchu (uznanie spaceru)**: dobrowolne; funkcja działa tylko po włączeniu jej w aplikacji i udzieleniu zgody w systemie operacyjnym. Możesz ją w każdej chwili wyłączyć.
- **Analityka**: jeżeli dostępne są ustawienia prywatności w aplikacji, możesz ograniczyć/wyłączyć analitykę (o ile nie jest ona niezbędna do zapewnienia bezpieczeństwa i działania aplikacji).

---

## 9B. Dane dzieci

Aplikacja nie jest kierowana do dzieci. Jeżeli Administrator poweźmie informację, że przetwarza dane dziecka bez podstawy prawnej, podejmie działania w celu ich usunięcia.

---

## 10. Kontakt

W sprawach dotyczących ochrony danych osobowych skontaktuj się z Administratorem:

- **E-mail**: athomelabs.studio@gmail.com

