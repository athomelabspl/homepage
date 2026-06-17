# Breakup Reset — App features reference (content marketing)

**Purpose:** Factual feature inventory for website copy, blog articles, launch materials, and CTAs. Sourced from the mobile app repo (`../breakup/`) as of June 2026.

**Related docs**

| Doc | Use for |
|-----|---------|
| [BREAKUP_RESET_CONTENT_BRIEFS.md](./BREAKUP_RESET_CONTENT_BRIEFS.md) | Blog article outlines and SEO briefs |
| `../breakup/docs/CONTENT_MARKETING_BRIEF.md` | Brand voice, tone rules, article do/don't |
| `../breakup/docs/tone-of-voice.md` | In-app copy standards |
| [Google Play listing](https://play.google.com/store/apps/details?id=com.breakupreset) | Live store copy |

**When app and docs disagree, trust the app source files listed in § Source files.**

---

## Product snapshot

| Field | Detail |
|-------|--------|
| **Name** | Breakup Reset |
| **Publisher** | At Home Labs (`athomelabs.eu`, `athomelabs.studio@gmail.com`) |
| **Platforms** | iOS and Android (React Native / Expo) |
| **Package** | `com.breakupreset` (Android), `com.athomelabs.breakupreset` (iOS legacy ref) |
| **Price** | **Free.** All healing features free. Optional one-time “support the app” donations only. |
| **Ads** | None |
| **Languages** | English, Spanish, French, German, Portuguese, Polish |
| **Not** | Therapy, crisis line, coaching, social network, or paywalled recovery tools |

### Positioning (one paragraph)

Breakup Reset is a calm daily companion for life after a breakup: a short quiz personalizes your experience, then each day you get mood-aware support, three small challenges, optional journaling, and progress you can see without performing recovery for anyone. Built for low-bandwidth days when advice articles feel like too much.

### Core promise copy (from product)

- “You're in the right place.”
- “No two breakups feel the same. Get support that understands you.”
- “Small steps, big progress.”
- “Your healing journey”
- “One small step at a time.”

---

## App structure (tabs)

| Tab | Screen | What the user does |
|-----|--------|-------------------|
| **Today** | `ChecklistScreen` | Daily hub: greeting, Today's Pulse, 3 challenges, stats, optional no-contact card, **“Help me right now”** |
| **Progress** | `ProgressScreen` | Bamboo growth timeline, points, streaks, emotion history, challenge history |
| **Journal** | `JournalScreen` | Prompted or freestyle writing; saved affirmations; device-only storage |
| **Account** | `AccountScreen` | Profile, recovery type, language, notifications, no contact, donations, legal |

**Stack screens (not tabs):** Quiz, quiz results, no-contact onboarding, day-1 welcome, tutorial, personality detail, notification settings, journal entry detail, auth (register/login).

---

## Onboarding flow

1. **Welcome** (`WelcomeScreen.tsx`)
   - Headline + subtitle (above)
   - Benefits: daily challenges, recovery that fits how you feel, ~**2 minutes** to start
   - **Get started** → quiz
   - **Calm down first** → 3 guided breaths, then quiz
   - **Continue with your results** (returning guest who finished quiz)
   - **Log in**
   - Bamboo watermark (`BambooLogoSvg`, transparent, no circle ring)

2. **Quiz** (`QuizQuestionScreen.tsx`, `assets/data/recoveryQuiz.json`)
   - Step 1: your gender (Man / Woman / Non-binary / Skip)
   - Step 2: ex's gender (same options) — personalizes pronouns
   - Steps 3–10: **8 recovery questions** (scores four dimensions)
   - *Note:* `appConfig.json` still holds an older 5-question quiz; **live onboarding uses `recoveryQuiz.json`.*

3. **No contact (optional)** (`NoContactOnboardingScreen`)
   - Start today, started earlier (date picker), or skip

4. **Quiz results** (`QuizResultScreen`)
   - Primary (+ optional secondary) recovery type
   - Traits, strengths, difficulties, normalization copy, struggle-timing hints

5. **Account** — guests create account to save progress; quiz can be completed before auth

6. **Day 1 welcome** (`Day1WelcomeScreen`) — personality-specific micro-step; optional tutorial tour

7. **Daily gate** (`MainAppWithDailyWelcomeGate`)
   - Daily welcome message + emotion check-in (skipped on day 1)
   - Post-check-in **Relief** content on later days

---

## Recovery personality types

Quiz scores four dimensions and maps to types (`src/types/RecoveryPersonality.ts`). Users get a **primary** type and sometimes a **secondary** type.

**Not a clinical attachment assessment.** Say “attachment-inspired” in consumer copy.

| Type | Dimension | One-line pattern |
|------|-----------|------------------|
| **Reconnector** | `anxious` | Strong pull to reconnect, check in, or ruminate |
| **Guarded** | `avoidant` | Protects through distance; grief may arrive slowly |
| **Storm Rider** | `overwhelmed` | Big emotional swings; structure and grounding help |
| **Reset Builder** | `numb` | Flat or low motivation at first; gentle activation helps |

### Reconnector

- **Description:** Strong pull to reconnect or check in — heart seeking closure or reassurance. App focuses on emotional regulation, self-validation, and boundaries so energy can turn inward.
- **Strengths:** In touch with feelings; cares about connection; willing to work on yourself
- **Difficulties:** Resisting urge to reach out or check socials; sitting with uncertainty
- **Insight:** “You may revisit memories often — reflection helps but can trap you.”
- **Struggle timing:** Quiet moments and evenings may bring more rumination.
- **Visual:** Clay `#C67B5C`, heart motif

### Guarded

- **Description:** Tends to keep distance from heavy emotions — valid coping. App offers safe reflection and gradual tuning-in when ready.
- **Strengths:** Self-reliant; steady pace; thoughtful about when to open up
- **Difficulties:** Allowing yourself to feel; asking for support
- **Insight:** “You recover faster socially but risk emotional rebound.”
- **Struggle timing:** Urge to open up, then pull back again.
- **Visual:** Sage `#7A8C7A`, shield motif

### Storm Rider

- **Description:** Emotions can swing strongly in breakup grief. App focuses on stabilization, grounding, and structured daily tasks.
- **Strengths:** Not afraid of big feelings; resilient; willing to try tools
- **Difficulties:** Riding waves without overwhelm; keeping routine when mood is low
- **Insight:** “You'll likely feel okay during the day but struggle at night when stimulation drops.”
- **Struggle timing:** Nights and low-stimulation times often feel harder.
- **Visual:** Mauve `#8C6E7A`, wind/wave motif

### Reset Builder

- **Description:** May feel flat, detached, or low on motivation — system protecting you. App offers gentle activation, small wins, and sensory engagement.
- **Strengths:** Honest about feelings; doesn't force false positivity; small steps count
- **Difficulties:** Getting started when nothing appeals; feeling like yourself again
- **Insight:** “You may shut down at first, then feel waves of emotion as you process.”
- **Struggle timing:** When numbness fades, emotion can surprise you.
- **Visual:** Teal `#4A8C6E`, leaf/sprout motif

**Doc drift:** Older materials may say Heart Healer / Phoenix / Explorer. **Current names only:** Reconnector, Guarded, Storm Rider, Reset Builder.

---

## Today tab — daily loop

Typical session: **~10–15 minutes.** Header: “Your healing journey” / “Small steps, big progress.”

### 1. Daily welcome + emotion check-in

- **“How are you feeling right now?”** — one tap; skippable
- **Not shown on day 1**
- **Six moods + unknown:** Sad, Numb, Okay, Anxious, Angry, Missing {partner} (pronouns from quiz)
- Feeds: challenge ranking, Today's Pulse affirmation, relief screen, support hub order, progress emotion timeline

### 2. Today's Pulse (`YourPulseSlot.tsx`)

Label: **“Today's Pulse.”** One ambient card per day, e.g.:

| Slot | Content |
|------|---------|
| **Understanding you** | AI personality narrative (day 2+) |
| **Insight** | Daily insight |
| **Inspiration** | Daily affirmation (heart to favorite, reflect to journal) |
| **MY PEACE** | No-contact streak when tracking |

Affirmation selection: personality + emotion + tone preferences; stored in daily pack (no UI jump after load). Fallback: “You are worthy of love and healing.”

### 3. Daily challenges (3 per day)

| Rule | Detail |
|------|--------|
| **Count** | **3 per day** (`maxDailyChallenges: 3`) |
| **Pool** | 200+ active challenges (Supabase); offline fallback: 3 starters |
| **Selection** | Personality tags, journey day, completed one-time exclusions, repeat cooldown, user “don't show again,” adaptive selector |
| **Categories** | **rebuilding**, **self-care**, **discovery**, **distraction** |
| **Difficulty** | easy (10–15 pts), medium (15–25), hard (25–30); harder actions unlock over journey days |
| **Types** | One-time (e.g. block number, delete photos) vs repeatable (walk, treat yourself) |
| **Bonus** | +50 points when all 3 completed |
| **After complete** | Optional journal reflection; rate repeatable challenges 1–5 stars |

**Example challenge flavors:** walk, music break, declutter, social step, digital boundaries (unlock later).

**Completion copy:** “One more step done.” / “That counts.” / “Small step, real progress.”

**30-day framing:** UI shows “Day X of 30” as structure — **not** a promise to be “over it” in 30 days.

### 4. No-contact card (optional)

Shown on Today when user tracks no contact. See § No-contact tracker.

### 5. “Help me right now” (FAB)

Opens support hub. De-emphasized on day 1. See § Crisis / in-the-moment support.

---

## Journal

**Privacy angle (strong for marketing):** “Stored on your device only.” / “Your thoughts stay private.”

| Entry type | Description |
|------------|-------------|
| **Freestyle** | Blank page, no prompts |
| **Prompted** | Guided question from personality-filtered pool (`journalPrompts.json` + Supabase) |
| **Challenge** | Reflection linked to completed challenge |
| **Affirmation** | Reflection on saved inspiration |

**Prompt examples:** “Write 3 positive things that happened today.” / “What would you tell your past self right now?”

**Other UX**

- Optional mood per entry
- Edit history
- **Quick journal** (support hub): unsaved jot — “Whatever comes to mind. This is just for you — nothing is saved.”
- Relapse nudge: “We noticed this might be a hard moment. Want to write for 30 seconds?”

---

## No-contact tracker

| Aspect | Detail |
|--------|--------|
| **Optional** | Set in onboarding or Account; skip anytime |
| **Start** | Today, past date, or “Start No Contact” in Account |
| **Display** | “X days” / “Next: Y days” on Today; **MY PEACE** in Pulse |
| **Milestones** | **7, 14, 30, 60** days |
| **Reset** | “I had contact” — **“Reset your streak (no judgment)”** |
| **Framing** | Boundary for your peace, not punishment |
| **Sync** | `no_contact_start_date` in user progress (cloud when logged in) |

Timeline also celebrates no-contact at 7 and 14 days.

---

## “Help me right now” — in-the-moment support

**Entry:** Pill on Today — **“Help me right now”** / modal **“What helps right now?”**

Options (order varies by emotion and time of day):

| Option | What happens |
|--------|----------------|
| **Breathe** | Guided **4-1-5** breathing (4s in, 1s hold, 5s out). **5 breaths** in-app; **3** on welcome/registration |
| **Take 100 steps** | Gentle movement; step sensor or 2-minute walk fallback |
| **Write what you're feeling** | Quick journal modal |
| **Read reassurance** | Affirmation modal |
| **Distract me** | Easy challenge pick or distraction menu |

### Distraction menu (`DistractionFlow`)

- This or that (5 quick taps)
- One short poem
- A question about you (optional journal line)
- Doodle pad (not saved)
- Random fact

Copy: **“Something different”** — “Small breaks that are not about your ex. Pick one.”

**Not a crisis hotline.** Wellness disclaimer points to emergency services if urgent.

---

## Affirmations & inspiration

| Aspect | Detail |
|--------|--------|
| **Library** | Supabase → cache → bundled seed (`affirmations.json`, ~186 items) |
| **Today's Pulse** | One per day in daily pack; personality + emotion aware |
| **Types** | Affirmations and quotes |
| **Favorites** | Heart to save; syncs when logged in |
| **Journal** | Reflect on saved affirmation → journal entry |
| **Tone** | Validating, not toxic positivity |

---

## Progress tab

### Stats tracked

- Total points, day streak, days completed / **days showing up**
- Days no contact (if tracking)
- Challenge history (filterable by difficulty)
- Emotion check-in color timeline
- Recovery personality type

### Bamboo growth timeline

Milestones by **days with activity** (not perfection):

| Days showing up | Stage |
|-----------------|--------|
| Start | Seed of Change |
| 1 | Sprouting |
| 5 | First Growth |
| 9 | Nurturing |
| 14 | Thriving |
| 20 | Blooming |
| 28 | Full Bloom |

### Other timeline events

- First challenge, first full day (all 3 challenges)
- Streaks: **3, 7, 14, 30** days (+25 / +50 / +100 point bonuses)
- First journal entry, 10 journal entries
- No contact 7 / 14 days
- First 5-star challenge, three 5-star favorites
- First hearted inspiration

Copy: **“SMALL STEPS ADD UP”** — “Complete a challenge, write a note, or open the app. Every step counts.”

---

## Account & settings

| Feature | Detail |
|---------|--------|
| **Languages** | EN, ES, FR, DE, PT, PL |
| **Appearance** | System / Light / Dark |
| **Haptics** | On/off |
| **Notifications** | Achievements, reminders, motivational, re-engagement |
| **Movement** | Gentle step acknowledgements (no goals dashboard); can auto-complete walking challenges |
| **Gender** | User + ex gender for pronoun personalization |
| **Retake quiz** | From Account |
| **Tutorial** | Replay app tour |
| **Donations** | 4 optional tiers; restore purchases |
| **No contact** | Start / reset |
| **Delete account** | Permanent |
| **Legal** | Privacy policy + terms of service |
| **Sign in** | Email + Google |

### Donations copy

- “Breakup Reset is free because I know what it's like to go through a breakup.”
- “Every feature in this app is completely free. Supporting is entirely optional.”

---

## What to say in articles vs CTAs

### Safe feature mentions

- “Three small challenges a day matched to how you cope”
- “Optional no-contact tracking without shame if you slip”
- “Journal that stays on your device”
- “Breathing and distraction when a wave hits”
- “A short quiz so suggestions fit your pattern — not a diagnosis”
- “Free on [Google Play](https://play.google.com/store/apps/details?id=com.breakupreset)”

### Avoid

- “Therapy in your pocket” / “AI therapist”
- “Guaranteed healing in 30 days”
- “Beat your ex” / revenge framing
- Clinical attachment labels as diagnoses
- “Secure attachment type” (no such quiz outcome)
- Gamified hype (“crush no contact,” “level up your healing”)

### Wellness disclaimer (paraphrase)

Breakup Reset is a self-help wellness tool, not medical care, therapy, or crisis support. If you are in crisis, contact a professional or local emergency services.

---

## Copy bank (exact phrases worth reusing)

**Welcome & daily**

- You're in the right place.
- No two breakups feel the same. Get support that understands you.
- Small steps, big progress.
- Fresh start. Today counts.
- Day 1. This is where it starts.

**Emotion & support**

- How are you feeling right now?
- Help me right now
- What helps right now?
- Breathe with me
- {{count}} breaths · 4 in, 1 hold, 5 out
- Feel a little steadier?
- That counts.

**Challenges & progress**

- Today's Challenges
- One more step done.
- SMALL STEPS ADD UP

**No contact**

- Keeping no contact?
- MY PEACE
- Reset your streak (no judgment)

**Journal**

- Stored on your device only.
- Write whatever's on your mind. No prompts, no limits.

---

## Source files (app repo)

Verify details here before publishing:

```
breakup/
  app.json
  assets/config/appConfig.json
  assets/data/recoveryQuiz.json
  assets/data/journalPrompts.json
  assets/data/affirmations.json
  docs/CONTENT_MARKETING_BRIEF.md
  docs/CHALLENGES_SYSTEM.md
  docs/NO_CONTACT_TRACKING.md
  docs/tone-of-voice.md
  src/i18n/locales/en.json
  src/screens/auth/WelcomeScreen.tsx
  src/screens/ChecklistScreen.tsx
  src/screens/ProgressScreen.tsx
  src/screens/JournalScreen.tsx
  src/screens/AccountScreen.tsx
  src/screens/quiz/QuizQuestionScreen.tsx
  src/screens/quiz/NoContactOnboardingScreen.tsx
  src/screens/quiz/QuizResultScreen.tsx
  src/screens/day1/Day1WelcomeScreen.tsx
  src/types/RecoveryPersonality.ts
  src/types/Journal.ts
  src/components/pulse/YourPulseSlot.tsx
  src/components/DailyWelcomeAndEmotionOverlay.tsx
  src/components/common/BambooLogoSvg.tsx
  src/features/supportHub/SupportHub.tsx
  src/features/distraction/DistractionFlow.tsx
  src/components/support/BreathingFlowModal.tsx
  src/components/GrowthTimeline.tsx
  src/utils/noContactUtils.ts
  src/utils/timelineDerivation.ts
  src/utils/journalMoods.ts
  src/services/dailyPack/getOrCreateDailyPack.ts
  src/services/dailyPack/pulseAffirmationSelector.ts
```

---

## Changelog

| Date | Change |
|------|--------|
| 2026-06-11 | Initial version from app repo analysis for homepage content marketing |
