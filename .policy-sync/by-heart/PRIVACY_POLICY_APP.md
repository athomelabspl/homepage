## 1. General information

- **App name**: By Heart
- **Data controller**: CommunicateIT Agnieszka Twardosz, os. Piastów 5/41, 31-623 Kraków, NIP: 9512512357
- **Contact e-mail**: athomelabs.studio@gmail.com

The Controller is the controller of your personal data with regard to the data you provide voluntarily in the app or that is processed while you use the app.

---

## 2. What data we process

By Heart is a private, single-player app. One person uses it — your partner does not create an account, does not sign in, and does not see anything inside the app. Any information about your partner (preferences, dates, notes) is entered by you and used only to power the suggestions shown to you.

### 2.1 Account and login data

- e-mail address
- authentication data: password (in non-plain form), or, if you sign in with Google or Apple, the identifier and profile data those providers share under OAuth/Sign in with Apple
- session data (e.g., timestamps; infrastructure logs may include technical information such as IP address and user agent)

**Where we store it**: on the server side, with Supabase Auth. By Heart uses Supabase **only** for authentication — no profile, vault, or daily-log content is sent to our servers.

### 2.2 Your profile, vault, and daily logs (local only)

Everything else you enter in the app is stored **locally on your device**, in a local database (SQLite), and is not transmitted to our servers as of the date of this policy. Depending on what you use, this includes:

- what you tell the app about your partner: preferences, what tends to help or make things worse, notable dates (birthday, anniversary), gift/date ideas, and similar notes (the "vault")
- your daily check-ins (how things feel that day)
- suggested and completed daily actions, and any custom actions or quests you create
- app settings, such as whether App Lock or Discrete Mode is enabled

Because this data lives only on your device, we cannot access, back up, or recover it on your behalf — if you lose your device or delete the app without exporting your data, it is gone. Deleting your account (see §4) also deletes this local data from the device you delete it on.

### 2.3 Analytics data

We use PostHog for product analytics on the mobile app (this is not active on web). This may include event data such as which screens you view and how often you open the app, together with basic technical information (app version, platform). We do not send vault content, notes, or other free-text you enter to analytics.

**Where we process it**: with our analytics provider, PostHog.

### 2.4 Purchases

By Heart does not currently process in-app purchases or subscriptions. If that changes, this policy will be updated to describe what is collected and by which provider before the feature is enabled.

---

## 3. Purposes of processing

We process data for the following purposes:

- **creating and operating your account** (registration, sign-in, session management, password reset)
- **providing the app's features**, including the daily suggestion, your vault, check-ins, and reminders — most of this happens entirely on your device
- **product analytics**: understanding how the app is used so we can improve it
- **security and abuse prevention**

---

## 4. Data retention and deletion

- **Account data** (Supabase): kept for as long as your account exists.
- **Local data** (profile, vault, daily logs): kept on your device for as long as the app is installed and you have not deleted your account.

You can delete your account at any time from the app's Account screen. Deleting your account:

1. removes your account and all associated rows from our backend (Supabase), including the cascading deletion of the `auth.users` record itself; and
2. wipes the local data on the device you deleted it from — your local database rows, any attachments, scheduled notifications, and app settings.

If you request deletion by e-mail instead of through the app, we will delete your backend account; local data on any device you no longer have access to cannot be remotely wiped, since it never reaches our servers in the first place.

---

## 5. Who we share data with

- **Supabase** (authentication and backend hosting): processes your account and session data.
- **PostHog** (product analytics): processes analytics event data, as described in §2.3.
- **Apple / Google**: process Sign in with Apple / Google sign-in data if you use those options, and handle app distribution through the App Store / Google Play.
- **Authorized persons** acting on behalf of the Controller may access data to the extent necessary to operate and maintain the app.

---

## 6. Security

We apply technical and organizational measures appropriate to the risk. Data sent to our backend is transmitted over an encrypted connection (TLS/HTTPS). Where the app offers App Lock (biometric or PIN), enabling it adds a further layer of protection for local data on your device — we recommend using it if you share your device with others.

---

## 7. Your rights

For data we hold about you (account data on our servers), you have the right to access, rectify, erase, restrict, or port it, and to object to processing to the extent provided by law. Contact us at **athomelabs.studio@gmail.com** to exercise these rights; local data can be exported or erased directly from the app.

You have the right to lodge a complaint with the President of the Personal Data Protection Office (UODO) in Poland, or with your local supervisory authority.

---

## 8. Children's data

The app is not directed at children and requires users to be at least 18 years old.

---

## 9. Changes to this policy

We may update this policy as the app changes — for example, before introducing purchases, cloud sync of your vault and logs, or a new analytics provider. We will update the "Last updated" date when we do.

---

## 10. Contact

For personal data protection matters, contact the Controller at **athomelabs.studio@gmail.com**.
