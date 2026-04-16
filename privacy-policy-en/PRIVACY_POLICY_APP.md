## 1. General information

- **App name**: Breakup Reset
- **Data controller**: CommunicateIT Agnieszka Twardosz, os. Piastów 5/41, 31-623 Kraków, NIP: 9512512357
- **Contact e-mail**: athomelabs.studio@gmail.com

The Controller is the controller of your personal data with regard to the data you provide voluntarily in the app or that is processed while you use the app.

If the Controller appoints a Data Protection Officer (DPO), the DPO’s contact details will be provided in an update to this policy. As of the date indicated in the document header, personal data matters are handled via the e-mail address provided above.

---

## 2. What data we process (in brief)

Below we describe the categories of data and where they are typically stored (**on the server** or **locally on the device**). Depending on which features you use, some categories may not apply to you.

### 2.1 Account and login data

- e-mail address
- authentication data (password in non-plain form; the authentication provider stores it in encrypted/hashed form)
- login/session data (e.g., timestamps; system logs may also include technical information such as IP address and user agent)
- if you use external login (e.g., Google): identifiers and profile data provided by the login provider under OAuth

**Where we store it**: on the server side (Supabase Auth).

### 2.2 In-app profile data and settings

Depending on what you fill in within the app, this may include, among others:

- display name/alias in the app (if provided)
- language, time zone
- (optional) data relating to language preferences and/or language variants in the app, including the choice of `user_gender` / `ex_gender` (used to personalize language content)

**Where we store it**: on the server side (profile and settings) and partly locally (settings/state cache).

### 2.3 Program progress data

- points, streaks, activity dates and completed days
- completed challenges
- whether the quiz was completed and the result/type itself (e.g., personality type and component scores)

**Where we store it**: on the server side (progress and quiz result) and partly locally (progress/result cache).

### 2.4 Sensitive content / user-entered content (if you use these features)

The app may store content entered by you, in particular:

- notes to completed challenges (the “notes” field)
- journal entries/reflections (may be stored locally on the device, depending on the feature)

Entries of this kind may contain sensitive information in a colloquial sense (e.g., descriptions of relationships, emotions). We do not encourage entering data you do not want to store.

**Where we store it**: challenge notes may be stored on the server; journal/reflection entries may be stored locally on the device (depending on the feature).

### 2.5 Notifications

If you enable notifications, we process:

- the device push notification token (Expo push token)
- notification settings and preferences (on/off, types, time, time zone)

**Where we store it**: on the server side (token and preferences) and locally on the device (locally scheduled notifications).

### 2.6 (Optional) Steps / movement data (acknowledging a walk)

If you enable the **gentle movement acknowledgements** feature (e.g., a message like “You walked today. That counts.”), the app may read the **number of steps from your device** (Motion & Fitness / Activity Recognition) in order to:

- **acknowledge movement once per day** in the app,
- **(optional) automatically mark** a walk/movement-related challenge as completed if the app detects you have already walked that day.

**What exactly we store**:

- this feature’s preferences (on/off, delivery method: pop-up/push),
- the **flag “whether the movement acknowledgement has already been shown today”** (so-called *once-per-day gating*),
- (optional) the flag “whether automatic application to challenges has already been executed today”.

We do **not** create a “fitness dashboard” in the app and, as a rule, we **do not store step history** in your backend account as part of this feature.

**Where we store it**: locally on the device (AsyncStorage). Step data is used to compute the “movement today” signal and does not need to be sent to the server.

### 2.7 Analytics data (product analytics)

The app may collect analytics data about app usage (e.g., events, event properties, app version, platform, language, days since install) to develop the product and improve app performance. We use PostHog for this (details below).

**Where we process it**: with the analytics provider (PostHog).

### 2.8 Purchases (voluntary support of the app)

If you make a “Support the App” purchase, we process information about your entitlement and support status via RevenueCat and the platform stores (Apple App Store / Google Play).

**Where we process it**: with the payment/subscription provider (RevenueCat) and in the platform stores; the app may cache support status locally.

---

## 3. Purposes of processing

We process data for the following purposes:

- **creating and operating an account** (registration, login, password reset, session management)
- **providing app features** (progress, quiz, content personalization, preferences)
- **notifications** (if enabled): reminders and messages about progress/achievements
- **product analytics**: understanding how the app works and improving quality (PostHog)
- **handling financial support of the app** (if you use it): verifying entitlements and support status (RevenueCat)
- **marketing / newsletter**: only if you **give consent (opt-in)** and only to the extent the feature is enabled

---

## 3A. Legal bases for processing (Art. 6 GDPR)

Depending on the purpose, we process data on the basis of:

- **Art. 6(1)(b) GDPR (contract / provision of a service)**:
  - creating and operating an account
  - providing app features (progress, quiz, personalization within app operation)
  - notifications, if they result from the app’s settings and operation (while enabling notifications on the device itself is voluntary)
- **Art. 6(1)(f) GDPR (legitimate interests of the Controller)**:
  - ensuring security, preventing abuse, error diagnostics, infrastructure maintenance, and pursuing/defending claims
  - basic app performance analytics necessary to maintain and improve the app (if it does not require consent in a given configuration)
- **Art. 6(1)(a) GDPR (consent)**:
  - marketing/newsletter (if enabled) – only after your voluntary opt-in
  - product analytics (if, in a given configuration, consent is required, e.g., due to the scope of data or transfers outside the EEA)

If processing is based on consent, you can withdraw it at any time, without affecting the lawfulness of processing carried out before withdrawal.

---

## 4. Where and how we store data

### 4.1 Server-side storage (backend)

We use Supabase as the app’s backend (authentication, database, server functions, notifications).

From the technical audit:

- the Supabase project is in region **`eu-central-1`**
- Supabase Storage (files) is currently empty (no buckets/objects at the time of the audit)

### 4.2 On-device storage (local)

The app stores some data locally on the device (AsyncStorage), e.g., progress, quiz result, and (depending on the features used) journal/reflection entries and other supporting data.

If you enable the gentle movement acknowledgements feature (steps), the app stores locally **only this feature’s preferences** and **daily flags** preventing the message from being shown more than once per day (without the need to store step history).

The mechanism for clearing local data when deleting an account is implemented in the app. In practice, it includes deleting, among other things, local progress data, history, and content saved in the app’s memory (the scope may vary depending on features used and app version).

---

## 5. Who we share data with (recipients / processors)

Depending on the features used, data may be processed by the following providers:

### 5.1 Supabase (backend and database hosting, authentication)

- Supabase processes account and session data as well as app data stored in the database (e.g., progress, profile, preferences, challenge notes).

### 5.2 PostHog (product analytics)

- PostHog processes analytics event data and event properties.
- From the audit: the app uses the ingest endpoint `https://us.i.posthog.com` (which may mean transfers to the USA depending on the PostHog account/region configuration).

### 5.3 Payment providers / stores

- Apple App Store / Google Play and RevenueCat for payments and entitlement verification.

### 5.4 Notification providers

- Expo/Apple/Google for the technical delivery of push notifications (device token and delivery).

### 5.5 Authorized persons

- Authorized persons acting on behalf of the Controller may have access to data to the extent necessary to maintain and develop the app.

---

## 6. Security

We apply technical and organizational measures adequate to the processing risks.

Based on the technologies used:

- data transmission to backend services is carried out via an encrypted channel (TLS/HTTPS)
- authentication data is processed by Supabase Auth (passwords are stored in non-plain form; on the Supabase side, the `encrypted_password` column is visible)
- infrastructure providers may maintain technical logs (e.g., for security and diagnostics)

---

## 7. Data retention

We store data:

- **account and profile data**: for as long as the account is maintained, and then until the account is deleted or a valid deletion request is fulfilled (subject to legal exceptions)
- **progress and in-app results data**: for as long as the account is maintained or until the account is deleted
- **notifications**: push token and preferences – until notifications are disabled, notification consent is withdrawn in the operating system, or the account is deleted
- **marketing data (if enabled and if consent was given)**: until consent is withdrawn or marketing communications are unsubscribed from, or until the data is no longer needed for the purpose for which it was collected
- **technical logs and security data**: for the period necessary to ensure security, detect abuse, and perform diagnostics (retention periods may vary depending on the infrastructure provider)

If specific retention periods are defined (e.g., for logs), the Controller will indicate them in an update to the policy.

---

## 8. Your rights

You have the right to:

- access your data
- rectify your data
- erase your data
- restrict processing
- data portability
- object (to the extent provided by law)

You have the right to lodge a complaint with the President of the Personal Data Protection Office (UODO) in Poland.

### 8.1 How to exercise your rights

To exercise your rights, contact the Controller via e-mail: **athomelabs.studio@gmail.com**.

To facilitate handling your request, describe which right you are invoking (e.g., access, deletion) and provide your account identifier (e.g., the e-mail used in the app). The Controller may request additional information only to the extent necessary to verify identity.

---

## 8A. Profiling and automated decision-making (Art. 22 GDPR)

The app may use app usage data and quiz results to **personalize content and recommendations** (e.g., tailoring content to personality type or progress).

The Controller **does not make** decisions about you based solely on automated processing that would produce legal effects concerning you or similarly significantly affect you (within the meaning of Art. 22 GDPR).

---

## 9. Transfers outside the EEA / to third countries

Depending on provider configurations and which features you use:

- In the audited configuration, Supabase operates in an EU region (`eu-central-1`).
- PostHog: the app uses the ingest endpoint `https://us.i.posthog.com`, which may involve transfers outside the EEA.
- Stores (Apple/Google) and notification providers may process data in various jurisdictions.

Where transfers outside the EEA occur, compliance mechanisms provided by suppliers are used (e.g., standard contractual clauses), to the extent required.

---

## 9A. Whether providing data is mandatory

- **Account data (e-mail, login data)**: necessary to create and operate an account in the app.
- **Profile data (e.g., alias, `user_gender`, `ex_gender`)**: generally voluntary; omission may limit personalization.
- **Notifications**: voluntary; lack of consent in the operating system means no push notifications.
- **Steps/movement data (walk acknowledgement)**: voluntary; the feature works only if enabled in the app and permission is granted in the operating system. You can disable it at any time.
- **Analytics**: if privacy settings are available in the app, you can limit/disable analytics (provided it is not necessary to ensure the security and operation of the app).

---

## 9B. Children’s data

The app is not directed at children. If the Controller becomes aware that it processes a child’s data without a legal basis, it will take steps to delete it.

---

## 10. Contact

For personal data protection matters, contact the Controller:

- **E-mail**: athomelabs.studio@gmail.com

