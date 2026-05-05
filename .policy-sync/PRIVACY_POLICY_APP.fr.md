## 1. Informations générales

- **Nom de l’application** : Breakup Reset
- **Responsable du traitement** : CommunicateIT Agnieszka Twardosz, os. Piastów 5/41, 31-623 Kraków, NIP: 9512512357
- **E-mail de contact** : athomelabs.studio@gmail.com

Le Responsable du traitement est le responsable de vos données personnelles dans la mesure où vous les fournissez volontairement dans l’application ou qu’elles sont traitées lors de l’utilisation de l’application.

Si le Responsable du traitement désigne un Délégué à la protection des données (DPD), ses coordonnées seront indiquées dans une mise à jour de la présente politique. À la date indiquée dans l’en-tête du document, les questions relatives aux données personnelles sont traitées via l’adresse e-mail indiquée ci-dessus.

---

## 2. Quelles données traitons-nous (en bref)

Ci-dessous, nous décrivons les catégories de données et l’endroit où elles sont généralement conservées (**sur le serveur** ou **localement sur l’appareil**). Selon les fonctionnalités que vous utilisez, certaines catégories peuvent ne pas vous concerner.

### 2.1 Données de compte et de connexion

- adresse e-mail
- données d’authentification (mot de passe non en clair ; le fournisseur d’authentification le conserve sous forme chiffrée/hachée)
- données de connexion/session (p. ex. horodatages ; des informations techniques telles que l’adresse IP et l’agent utilisateur peuvent aussi apparaître dans les journaux système)
- si vous utilisez une connexion externe (p. ex. Google) : identifiants et données de profil transmis par le fournisseur de connexion dans le cadre d’OAuth

**Où conservons-nous** : côté serveur (Supabase Auth).

### 2.2 Données de profil et paramètres dans l’application

Selon ce que vous renseignez dans l’application, cela peut inclure notamment :

- nom/alias affiché dans l’application (si fourni)
- langue, fuseau horaire
- (optionnel) données liées aux préférences linguistiques et/ou aux variantes linguistiques dans l’application, y compris le choix de `user_gender` / `ex_gender` (utilisées pour personnaliser le contenu linguistique)

**Où conservons-nous** : côté serveur (profil et paramètres) et en partie localement (cache des paramètres/états).

### 2.3 Données de progression dans le programme

- points, séries (streaks), dates d’activité et jours complétés
- défis complétés
- information indiquant si le quiz a été terminé et le résultat/type (p. ex. type de personnalité et composantes du score)

**Où conservons-nous** : côté serveur (progression et résultat du quiz) et en partie localement (cache de progression/résultat).

### 2.3A Historique du check-in quotidien d’émotions (local)

- l’étiquette d’émotion quotidienne sélectionnée lors du check-in (p. ex. sad, numb, okay)
- horodatages et identifiants de jour utilisés pour afficher votre historique récent dans l’application

**Où conservons-nous** : localement sur votre appareil (AsyncStorage). Cet historique sert à afficher vos derniers jours dans l’application et n’a pas besoin d’être stocké dans votre compte backend.

### 2.4 Contenus sensibles / contenus saisis par l’utilisateur (si vous utilisez ces fonctionnalités)

L’application peut conserver des contenus saisis par vous, notamment :

- notes associées aux défis complétés (champ « notes »)
- entrées de journal/réflexions (peuvent être conservées localement sur l’appareil, selon la fonctionnalité)

De tels contenus peuvent contenir des informations sensibles au sens courant (p. ex. description de relations, d’émotions). Nous ne vous encourageons pas à saisir des données que vous ne souhaitez pas conserver.

**Où conservons-nous** : les notes de défis peuvent être conservées sur le serveur ; le journal/réflexions peut être conservé localement sur l’appareil (selon la fonctionnalité).

### 2.5 Notifications

Si vous activez les notifications, nous traitons :

- le jeton de notifications push de l’appareil (Expo push token)
- les paramètres et préférences de notifications (activer/désactiver, types, heure, fuseau horaire)

**Où conservons-nous** : côté serveur (jeton et préférences) et localement sur l’appareil (notifications planifiées localement).

### 2.6 (Optionnel) Données de pas / de mouvement (reconnaissance d’une marche)

Si vous activez la fonctionnalité de **reconnaissance douce de l’activité** (p. ex. un message du type « Aujourd’hui, il y a eu une marche. Ça compte. »), l’application peut lire le **nombre de pas de l’appareil** (Motion & Fitness / Activity Recognition) afin de :

- **reconnaître une fois par jour** l’activité dans l’application,
- **(optionnel) marquer automatiquement** comme complété un défi lié à la marche/au mouvement si l’application détecte que vous avez déjà marché ce jour-là.

**Ce que nous conservons exactement** :

- les préférences de cette fonctionnalité (activer/désactiver, mode de délivrance : pop-up/push),
- le **drapeau « si la reconnaissance d’activité a déjà été affichée aujourd’hui »** (dit *once-per-day gating*),
- (optionnel) le drapeau « si l’application automatique des défis a déjà été effectuée aujourd’hui ».

Nous ne créons **pas** de « tableau de bord fitness » dans l’application et, en règle générale, nous **n’enregistrons pas l’historique des pas** dans votre compte backend dans le cadre de cette fonctionnalité.

**Où conservons-nous** : localement sur l’appareil (AsyncStorage). Les données de pas servent à calculer le signal « activité aujourd’hui » et n’ont pas besoin d’être envoyées au serveur.

### 2.7 Données analytiques (analyse produit)

L’application peut collecter des données analytiques sur l’utilisation de l’application (p. ex. événements, propriétés d’événements, version de l’application, plateforme, langue, jours depuis l’installation) afin de développer le produit et d’améliorer le fonctionnement de l’application. Nous utilisons PostHog à cette fin (détails ci-dessous).

Nous pouvons inclure des **signaux d’usage non identifiants** comme propriétés d’événements dans l’analytique (p. ex. l’étiquette d’émotion quotidienne sélectionnée, telle que « sad » ou « anxious »). Nous n’envoyons **pas** le texte du journal ni d’autres contenus saisis en texte libre à l’analytique.

**Où traitons-nous** : chez le fournisseur d’analytique (PostHog).

### 2.8 Achats (soutien volontaire de l’application)

Si vous effectuez un achat « Support the App », nous traitons des informations sur le droit (entitlement) et le statut de soutien via RevenueCat ainsi que via les boutiques de plateforme (Apple App Store / Google Play).

**Où traitons-nous** : chez le fournisseur de paiement/abonnement (RevenueCat) et dans les boutiques de plateforme ; l’application peut mettre en cache localement le statut de soutien.

---

## 3. Finalités du traitement

Nous traitons les données aux fins suivantes :

- **création et gestion du compte** (inscription, connexion, réinitialisation du mot de passe, gestion de session)
- **fourniture des fonctionnalités de l’application** (progression, quiz, personnalisation des contenus, préférences)
- **notifications** (si activées) : rappels et messages relatifs à la progression/aux accomplissements
- **analyse produit** : compréhension du fonctionnement de l’application et amélioration de la qualité (PostHog)
- **gestion du soutien financier de l’application** (si utilisé) : vérification des droits et du statut de soutien (RevenueCat)
- **marketing / newsletter** : uniquement si vous **donnez votre consentement (opt-in)** et uniquement dans la mesure où la fonctionnalité est activée

---

## 3A. Bases juridiques du traitement (art. 6 RGPD)

Selon la finalité, nous traitons les données sur la base de :

- **art. 6, § 1, b RGPD (contrat / fourniture du service)** :
  - création et gestion du compte
  - fourniture des fonctionnalités de l’application (progression, quiz, personnalisation dans le cadre du fonctionnement de l’application)
  - notifications, lorsqu’elles résultent des paramètres et du fonctionnement de l’application (l’activation des notifications sur l’appareil est volontaire)
- **art. 6, § 1, f RGPD (intérêt légitime du Responsable du traitement)** :
  - sécurité, prévention des abus, diagnostic des erreurs, maintenance de l’infrastructure et exercice/défense de droits en justice
  - analyse de base du fonctionnement de l’application dans la mesure nécessaire à sa maintenance et à son amélioration (si une configuration donnée ne requiert pas le consentement)
- **art. 6, § 1, a RGPD (consentement)** :
  - marketing/newsletter (si activés) – uniquement après votre opt-in volontaire
  - analyse produit (si, dans une configuration donnée, le consentement est requis, p. ex. en raison de la portée des données ou de transferts hors EEE)

Lorsque le traitement repose sur le consentement, vous pouvez le retirer à tout moment, sans porter atteinte à la licéité du traitement effectué avant le retrait.

---

## 4. Où et comment nous conservons les données

### 4.1 Conservation côté serveur (backend)

Nous utilisons Supabase comme backend de l’application (authentification, base de données, fonctions serveur, notifications).

Selon l’audit technique :

- le projet Supabase est dans la région **`eu-central-1`**
- Supabase Storage (fichiers) est actuellement vide (aucun bucket/objet au moment de l’audit)

### 4.2 Conservation sur l’appareil (local)

L’application conserve certaines données localement sur l’appareil (AsyncStorage), p. ex. la progression, le résultat du quiz et (selon les fonctionnalités utilisées) des entrées de journal/réflexions et d’autres données auxiliaires.

Si vous activez la fonctionnalité de reconnaissance douce de l’activité (pas), l’application conserve localement **uniquement les préférences de cette fonctionnalité** ainsi que des **drapeaux quotidiens** empêchant l’affichage du message plus d’une fois par jour (sans nécessiter d’enregistrer l’historique des pas).

Le mécanisme de suppression des données locales lors de la suppression du compte est implémenté dans l’application. En pratique, il inclut notamment la suppression des données locales de progression, de l’historique et des contenus enregistrés dans la mémoire de l’application (le périmètre peut varier selon les fonctionnalités utilisées et la version de l’application).

---

## 5. À qui communiquons-nous les données (destinataires / sous-traitants)

Selon les fonctionnalités utilisées, les données peuvent être traitées par les prestataires suivants :

### 5.1 Supabase (hébergement du backend et de la base de données, authentification)

- Supabase traite les données de compte et de session ainsi que les données applicatives enregistrées dans la base de données (p. ex. progression, profil, préférences, notes de défis).

### 5.2 PostHog (analyse produit)

- PostHog traite les données d’événements analytiques ainsi que les propriétés d’événements.
- Dans la configuration actuelle de l’application, l’ingestion d’analytique est configurée sur l’endpoint UE `https://eu.i.posthog.com`. Selon la configuration du prestataire, le traitement analytique peut néanmoins impliquer des transferts en dehors de l’EEE.

### 5.3 Prestataires de paiement / boutiques

- Apple App Store / Google Play ainsi que RevenueCat dans le cadre des paiements et de la vérification des droits.

### 5.4 Prestataires de notifications

- Expo/Apple/Google dans le cadre technique de l’envoi des notifications push (jeton de l’appareil et délivrance).

### 5.5 Personnes autorisées

- Des personnes autorisées agissant pour le compte du Responsable du traitement peuvent avoir accès aux données dans la mesure nécessaire à la maintenance et au développement de l’application.

---

## 6. Sécurité

Nous mettons en œuvre des mesures techniques et organisationnelles adaptées aux risques du traitement.

Compte tenu des technologies utilisées :

- la transmission des données vers les services backend est effectuée via un canal chiffré (TLS/HTTPS)
- les données d’authentification sont traitées par Supabase Auth (les mots de passe ne sont pas stockés en clair ; côté Supabase, la colonne `encrypted_password` est visible)
- les prestataires d’infrastructure peuvent tenir des journaux techniques (p. ex. pour la sécurité et le diagnostic)

---

## 7. Durée de conservation

Nous conservons les données :

- **données de compte et de profil** : pendant la durée de maintien du compte, puis jusqu’à la suppression du compte ou la réalisation effective d’une demande de suppression (sous réserve d’exceptions légales)
- **données de progression et de résultats dans l’application** : pendant la durée de maintien du compte ou jusqu’à la suppression du compte
- **notifications** : jeton push et préférences – jusqu’à la désactivation des notifications, le retrait de l’autorisation de notifications dans le système d’exploitation ou la suppression du compte
- **données marketing (si activé et si consentement donné)** : jusqu’au retrait du consentement ou à la désinscription des communications marketing, ou jusqu’à ce que les données ne soient plus nécessaires à la finalité pour laquelle elles ont été collectées
- **journaux techniques et données de sécurité** : pendant la période nécessaire à la sécurité, à la détection des abus et au diagnostic (les durées peuvent varier selon le prestataire d’infrastructure)

Si des durées de conservation spécifiques sont définies (p. ex. pour les journaux), le Responsable du traitement les indiquera dans une mise à jour de la politique.

---

## 8. Vos droits

Vous disposez du droit de :

- accéder à vos données
- rectifier vos données
- effacer vos données
- limiter le traitement
- obtenir la portabilité des données
- vous opposer (dans les conditions prévues par la loi)

Vous avez le droit d’introduire une réclamation auprès du Président de l’autorité polonaise de protection des données personnelles (UODO).

### 8.1 Comment exercer vos droits

Pour exercer vos droits, contactez le Responsable du traitement par e-mail : **athomelabs.studio@gmail.com**.

Pour faciliter le traitement de votre demande, indiquez quel droit vous exercez (p. ex. accès, suppression) et fournissez l’identifiant de votre compte (p. ex. l’e-mail utilisé dans l’application). Le Responsable du traitement peut demander des informations supplémentaires uniquement dans la mesure nécessaire à la vérification de votre identité.

---

## 8A. Profilage et prise de décision automatisée (art. 22 RGPD)

L’application peut utiliser les données d’utilisation de l’application ainsi que les résultats du quiz pour **personnaliser les contenus et les recommandations** (p. ex. adapter les contenus au type de personnalité ou à la progression).

Le Responsable du traitement **ne prend pas** de décisions à votre égard fondées exclusivement sur un traitement automatisé produisant des effets juridiques vous concernant ou vous affectant de manière significative de façon similaire (au sens de l’art. 22 RGPD).

---

## 9. Transferts en dehors de l’EEE / vers des pays tiers

Selon la configuration des prestataires et les fonctionnalités que vous utilisez :

- Dans la configuration auditée, Supabase opère dans une région de l’UE (`eu-central-1`).
- PostHog : l’ingestion d’analytique est configurée sur `https://eu.i.posthog.com`. Selon la configuration du prestataire et votre utilisation des fonctionnalités, le traitement peut néanmoins impliquer des transferts en dehors de l’EEE.
- Les boutiques (Apple/Google) et les prestataires de notifications peuvent traiter les données dans différentes juridictions.

En cas de transferts hors EEE, les mécanismes de conformité fournis par les prestataires (p. ex. clauses contractuelles types) sont utilisés dans la mesure requise.

---

## 9A. Le fait de fournir des données est-il obligatoire

- **Données de compte (e-mail, données de connexion)** : nécessaires pour créer et gérer un compte dans l’application.
- **Données de profil (p. ex. alias, `user_gender`, `ex_gender`)** : en principe facultatives ; l’absence peut limiter la personnalisation des contenus.
- **Notifications** : facultatives ; l’absence d’autorisation dans le système d’exploitation signifie l’absence de notifications push.
- **Données de pas/mouvement (reconnaissance d’une marche)** : facultatives ; la fonctionnalité fonctionne uniquement si vous l’activez dans l’application et accordez l’autorisation dans le système d’exploitation. Vous pouvez la désactiver à tout moment.
- **Analytique** : si des paramètres de confidentialité sont disponibles dans l’application, vous pouvez limiter/désactiver l’analytique (dans la mesure où elle n’est pas nécessaire à la sécurité et au fonctionnement de l’application).

---

## 9B. Données des enfants

L’application n’est pas destinée aux enfants. Si le Responsable du traitement apprend qu’il traite des données d’un enfant sans base légale, il prendra des mesures pour les supprimer.

---

## 10. Contact

Pour toute question relative à la protection des données personnelles, contactez le Responsable du traitement :

- **E-mail** : athomelabs.studio@gmail.com

