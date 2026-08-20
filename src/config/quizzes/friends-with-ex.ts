import { getBreakupDownloadUrl, storePlacements } from '../../utils/storeLinks';
import type { QuizFaqItem, QuizLocale, QuizRelatedSection } from './shared';

export interface FriendsWithExQuizCopy {
  locale: QuizLocale;
  title: string;
  description: string;
  ogTitle: string;
  schemaName: string;
  schemaDescription: string;
  pagePath: string;
  pageUrl: string;
  downloadUrl: string;
  faqItems: QuizFaqItem[];
  heading: string;
  progress: {
    ariaLabel: string;
    stepLabel: (n: number) => string;
  };
  landing: {
    heading: string;
    illustrationAlt: string;
    copy: string;
    followCopy: string;
    startButton: string;
  };
  questions: string[];
  questionOf: (current: number, total: number) => string;
  answers: {
    groupLabel: (n: number) => string;
    yes: string;
    no: string;
  };
  results: {
    notReady: { imageAlt: string; heading: string; paragraphs: string[] };
    ready: { imageAlt: string; heading: string; paragraphs: string[] };
  };
  cta: {
    heading: string;
    copy: string;
    button: string;
  };
  announce: {
    start: (total: number) => string;
    question: (n: number, total: number) => string;
    notReady: string;
    ready: string;
  };
  related: QuizRelatedSection;
}

const forkIllustration = {
  src: '/breakup-reset/quiz/friends-with-ex-quiz-landing.png',
  width: 240,
  height: 162,
};

const resultImages = {
  notReady: {
    src: '/breakup-reset/quiz/friends-with-ex-quiz-result-not-ready.png',
    width: 512,
    height: 341,
    intrinsicWidth: 1024,
  },
  ready: {
    src: '/breakup-reset/quiz/friends-with-ex-quiz-result-ready.png',
    width: 512,
    height: 341,
    intrinsicWidth: 1024,
  },
};

export const friendsWithExImages = { forkIllustration, resultImages };

export function getFriendsWithExQuizCopy(locale: QuizLocale): FriendsWithExQuizCopy {
  const pagePath = `/breakup-reset/blog/${locale}/friends-with-ex-quiz/`;
  const pageUrl = `https://athomelabs.eu${pagePath}`;
  const downloadUrl = getBreakupDownloadUrl(storePlacements.quizFriendsWithEx);

  if (locale === 'es') {
    const title = '¿Puedo seguir siendo amigos con mi ex? Test gratis';
    return {
      locale,
      title,
      description:
        '¿Piensas en seguir siendo amigos después de una ruptura? Haz este test rápido para saber si la amistad puede funcionar, o si solo extrañas a esa persona.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Un test de cuatro preguntas para saber si la amistad con tu ex puede funcionar, o si todavía hay apego a la relación.',
      pagePath,
      pageUrl,
      downloadUrl,
      faqItems: [
        {
          question: '¿Puedo seguir siendo amigos con mi ex?',
          answer:
            'A veces, pero solo después de que el apego romántico haya desaparecido. Si el contacto todavía te acelera el corazón, te da esperanzas de volver, o te hace sentir enojo por la ruptura, la amistad suele prolongar el dolor en lugar de ayudarte a sanar.',
        },
        {
          question: '¿Cómo sé si la amistad con mi ex puede funcionar?',
          answer:
            'Suele ser buen momento cuando puedes escuchar que está saliendo con alguien nuevo sin sentir un golpe emocional fuerte, cuando ya no esperas una disculpa y cuando no estás esperando en secreto que la amistad lleve a una reconciliación.',
        },
        {
          question: '¿Por qué es tan difícil seguir siendo amigos después de una ruptura?',
          answer:
            'Las rupturas no apagan el apego de un día para otro. Tu sistema nervioso puede seguir tratando a tu ex como una fuente de consuelo y seguridad. El contacto platónico antes de que ese vínculo se afloje puede mantenerte en un ciclo de ansiedad, cavilaciones y falsas esperanzas.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progreso del test',
        stepLabel: (n) => `Pregunta ${n}`,
      },
      landing: {
        heading: '¿De verdad puede funcionar la amistad, o solo extrañas a esa persona?',
        illustrationAlt: 'Dos siluetas de corazones superpuestos',
        copy: 'Puedes extrañar a alguien y aun así no tener espacio para la amistad.',
        followCopy:
          'Responde estas 4 preguntas con honestidad y descubre en qué punto estás realmente.',
        startButton: 'Empezar el test',
      },
      questions: [
        'Si su nombre apareciera ahora mismo en la pantalla de tu teléfono, ¿se te aceleraría el corazón o se te encogería el estómago al instante?',
        'En el fondo, ¿una parte de ti espera que, si sigues en su vida, tarde o temprano se dé cuenta de que quiere volver contigo?',
        'Si mañana te dijera que está saliendo felizmente con alguien nuevo, ¿te causaría dolor físico o emocional?',
        '¿Todavía sientes enojo por cómo terminó todo, o te sorprendes esperando en secreto una disculpa?',
      ],
      questionOf: (current, total) => `Pregunta ${current} de ${total}`,
      answers: {
        groupLabel: (n) => `Responder pregunta ${n}`,
        yes: 'Sí',
        no: 'No',
      },
      results: {
        notReady: {
          imageAlt: 'Un teléfono boca abajo sobre una manta marrón con textura, visto desde arriba',
          heading: 'Todavía no es buen momento para la amistad.',
          paragraphs: [
            'Todavía hay apego, y eso es completamente normal. No estás haciendo nada mal.',
            'Lo que quieres ahora mismo probablemente no es amistad. Es la cercanía que solían tener. Seguir siendo amigos mientras todavía te duele suele mantener la herida abierta.',
            'Tomar distancia no significa rendirte con esa persona. Es darte espacio para sanar.',
          ],
        },
        ready: {
          imageAlt: 'Una ventana de madera abierta en una pared verde iluminada por el sol',
          heading: 'Puede que sí haya espacio para la amistad.',
          paragraphs: [
            'Parece que ya superaste el lado romántico de esta conexión.',
            'No estás esperando una disculpa, ni con la esperanza de volver, ni te preparas cada vez que piensas en su futuro.',
            'Si quieres acercarte desde la amistad, probablemente estés en un lugar más estable para hacerlo. Solo mantén tus límites claros.',
          ],
        },
      },
      cta: {
        heading: '¿Todavía no puedes soltar la idea de "solo ser amigos"?',
        copy:
          'Breakup Reset te ayuda a llevar el control del no contacto, hacer check-ins contigo y mantener un diario privado. Es gratis.',
        button: 'Descargar Breakup Reset gratis',
      },
      announce: {
        start: (total) => `Pregunta 1 de ${total}`,
        question: (n, total) => `Pregunta ${n} de ${total}`,
        notReady: 'Resultado: todavía no es buen momento para la amistad.',
        ready: 'Resultado: puede que sí haya espacio para la amistad.',
      },
      related: {
        heading: 'Más tests para ti',
        items: [
          {
            href: '/breakup-reset/blog/es/should-i-do-no-contact-quiz/',
            title: '¿Debería hacer no contacto? Test gratis',
          },
          {
            href: '/breakup-reset/blog/es/ready-to-date-again-quiz/',
            title: '¿Es buen momento para volver a salir con alguien? Test gratis',
          },
        ],
        footerLabel: 'Descargar Breakup Reset gratis',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'fr') {
    const title = 'Peut-on rester amis avec son ex ? Test gratuit';
    return {
      locale,
      title,
      description:
        "Vous vous demandez si l'amitié avec votre ex est encore possible après une rupture ? Faites ce test rapide pour savoir si l'amitié peut fonctionner, ou si vous ressentez simplement le manque de cette personne.",
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        "Un test en quatre questions pour savoir si l'amitié avec votre ex peut fonctionner, ou s'il reste de l'attachement à la relation.",
      pagePath,
      pageUrl,
      downloadUrl,
      faqItems: [
        {
          question: 'Peut-on rester amis avec son ex ?',
          answer:
            "Parfois, mais seulement une fois que l'attachement amoureux a disparu. Si le contact vous fait encore accélérer le cœur, vous donne l'espoir de vous remettre ensemble, ou réveille de la colère à propos de la rupture, l'amitié a tendance à prolonger la douleur plutôt qu'à vous aider à guérir.",
        },
        {
          question: "Comment savoir si l'amitié avec mon ex peut fonctionner ?",
          answer:
            "C'est en général le bon moment quand vous pouvez apprendre que cette personne voit quelqu'un de nouveau sans ressentir un coup émotionnel fort, que vous n'attendez plus d'excuses, et que vous n'espérez pas secrètement que l'amitié mène à une réconciliation.",
        },
        {
          question: 'Pourquoi est-ce si difficile de rester amis après une rupture ?',
          answer:
            "Une rupture ne coupe pas l'attachement du jour au lendemain. Votre système nerveux peut continuer à voir votre ex comme une source de réconfort et de sécurité. Le contact amical avant que ce lien se relâche peut vous maintenir dans une boucle d'anxiété, de ruminations et de faux espoirs.",
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progression du test',
        stepLabel: (n) => `Question ${n}`,
      },
      landing: {
        heading:
          "L'amitié peut-elle vraiment fonctionner, ou ressentez-vous simplement le manque de cette personne ?",
        illustrationAlt: 'Deux silhouettes de cœurs superposées',
        copy: "On peut ressentir le manque de quelqu'un sans avoir de la place pour l'amitié.",
        followCopy:
          'Répondez à ces 4 questions honnêtement et voyez où vous en êtes vraiment.',
        startButton: 'Commencer le test',
      },
      questions: [
        "Si le nom de votre ex apparaissait maintenant sur l'écran de votre téléphone, votre cœur s'emballerait-il, ou votre estomac se nouerait-il aussitôt ?",
        "Au fond de vous, une petite part espère-t-elle qu'en restant dans sa vie, cette personne finira par réaliser qu'elle veut revenir avec vous ?",
        'Si cette personne vous annonçait demain qu’elle sort déjà, heureuse, avec quelqu’un de nouveau, cela vous causerait-il une douleur physique ou émotionnelle ?',
        'Ressentez-vous encore de la colère à propos de la façon dont tout s’est terminé, ou vous surprenez-vous à attendre secrètement des excuses ?',
      ],
      questionOf: (current, total) => `Question ${current} sur ${total}`,
      answers: {
        groupLabel: (n) => `Répondre à la question ${n}`,
        yes: 'Oui',
        no: 'Non',
      },
      results: {
        notReady: {
          imageAlt: 'Un téléphone posé écran contre une couverture marron texturée, vu du dessus',
          heading: "Ce n'est pas encore le bon moment pour l'amitié.",
          paragraphs: [
            "Il reste de l'attachement, et c'est tout à fait normal. Vous ne faites rien de mal.",
            "Ce que vous voulez en ce moment n'est probablement pas de l'amitié. C'est la proximité que vous aviez avant. Rester amis alors que vous souffrez encore entretient souvent la blessure.",
            'Prendre de la distance ne veut pas dire abandonner cette personne. C’est vous donner de l’espace pour guérir.',
          ],
        },
        ready: {
          imageAlt: 'Une fenêtre en bois ouverte sur un mur vert baigné de soleil',
          heading: "Il y a peut-être vraiment de la place pour l'amitié.",
          paragraphs: [
            "On dirait que vous avez dépassé le côté amoureux de cette connexion.",
            "Vous n'attendez pas d'excuses, vous n'espérez pas revenir ensemble, et vous ne vous préparez pas à chaque fois que vous pensez à son avenir.",
            'Si vous voulez renouer en tant qu’ami, vous êtes probablement dans un endroit plus stable pour le faire. Gardez juste vos limites claires.',
          ],
        },
      },
      cta: {
        heading: 'Vous n’arrivez pas à lâcher l’idée de « rester juste amis » ?',
        copy:
          "Breakup Reset vous aide à suivre l'absence de contact, à faire le point avec vous-même et à tenir un journal privé. C'est gratuit.",
        button: 'Télécharger Breakup Reset gratuitement',
      },
      announce: {
        start: (total) => `Question 1 sur ${total}`,
        question: (n, total) => `Question ${n} sur ${total}`,
        notReady: "Résultat : ce n'est pas encore le bon moment pour l'amitié.",
        ready: "Résultat : il y a peut-être vraiment de la place pour l'amitié.",
      },
      related: {
        heading: 'Plus de tests pour vous',
        items: [
          {
            href: '/breakup-reset/blog/fr/should-i-do-no-contact-quiz/',
            title: 'Dois-je couper les ponts avec mon ex ? Test gratuit',
          },
          {
            href: '/breakup-reset/blog/fr/ready-to-date-again-quiz/',
            title: 'Est-ce le bon moment pour sortir de nouveau ? Test gratuit',
          },
        ],
        footerLabel: 'Télécharger Breakup Reset gratuitement',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'de') {
    const title = 'Können wir nach der Trennung befreundet bleiben? Kostenloser Test';
    return {
      locale,
      title,
      description:
        'Denkst du darüber nach, mit deiner Ex-Beziehung befreundet zu bleiben? Mach diesen kurzen Test, um herauszufinden, ob Freundschaft wirklich funktionieren kann, oder ob du diese Person nur vermisst.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Ein Test mit vier Fragen, der zeigt, ob Freundschaft mit deiner Ex-Beziehung funktionieren kann, oder ob noch Bindung an die Beziehung besteht.',
      pagePath,
      pageUrl,
      downloadUrl,
      faqItems: [
        {
          question: 'Können wir nach der Trennung befreundet bleiben?',
          answer:
            'Manchmal, aber erst wenn die romantische Bindung verblasst ist. Wenn Kontakt noch dein Herz schneller schlagen lässt, Hoffnung auf ein Zurück weckt, oder Wut über die Trennung hochholt, verlängert Freundschaft meist den Schmerz, statt beim Heilen zu helfen.',
        },
        {
          question: 'Woran erkenne ich, ob Freundschaft mit meiner Ex-Beziehung funktionieren kann?',
          answer:
            'Meist ist es so weit, wenn du hören kannst, dass diese Person jemand Neues datet, ohne einen scharfen emotionalen Stich zu spüren, wenn du nicht mehr auf eine Entschuldigung wartest und nicht heimlich hoffst, dass Freundschaft zur Versöhnung führt.',
        },
        {
          question: 'Warum fühlt sich Freundschaft nach einer Trennung so schwer an?',
          answer:
            'Trennungen schalten Bindung nicht über Nacht ab. Dein Nervensystem behandelt deine Ex-Beziehung vielleicht weiter als Quelle von Trost und Sicherheit. Freundschaftlicher Kontakt, bevor sich dieses Band gelöst hat, kann dich in einer Schleife aus Angst, Grübeln und falscher Hoffnung festhalten.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Testfortschritt',
        stepLabel: (n) => `Frage ${n}`,
      },
      landing: {
        heading: 'Kann Freundschaft wirklich funktionieren, oder vermisst du diese Person nur?',
        illustrationAlt: 'Zwei sich überschneidende Herz-Umrisse',
        copy: 'Man kann jemanden vermissen und trotzdem noch keinen Platz für Freundschaft haben.',
        followCopy:
          'Beantworte diese 4 Fragen ehrlich und finde heraus, wo du wirklich stehst.',
        startButton: 'Test starten',
      },
      questions: [
        'Wenn der Name dieser Person gerade jetzt auf deinem Handy-Display aufleuchten würde, würde dein Herz sofort schneller schlagen oder sich dein Magen zusammenziehen?',
        'Hofft insgeheim ein kleiner Teil von dir, dass diese Person, wenn du weiter in ihrem Leben bleibst, irgendwann merkt, dass sie dich zurückwill?',
        'Wenn dir diese Person morgen erzählen würde, dass sie glücklich mit jemand Neuem zusammen ist, würde dich das körperlich oder emotional schmerzen?',
        'Bist du noch wütend darüber, wie alles zu Ende gegangen ist, oder ertappst du dich dabei, heimlich auf eine Entschuldigung zu warten?',
      ],
      questionOf: (current, total) => `Frage ${current} von ${total}`,
      answers: {
        groupLabel: (n) => `Frage ${n} beantworten`,
        yes: 'Ja',
        no: 'Nein',
      },
      results: {
        notReady: {
          imageAlt: 'Ein Smartphone liegt mit dem Display nach unten auf einer texturierten braunen Decke, von oben gesehen',
          heading: 'Für Freundschaft ist es noch nicht so weit.',
          paragraphs: [
            'Es ist noch Bindung da, und das ist völlig normal. Du machst nichts falsch.',
            'Was du gerade wirklich willst, ist wahrscheinlich keine Freundschaft. Es ist die Nähe, die ihr früher hattet. Befreundet zu bleiben, während es noch wehtut, hält die Wunde meist offen.',
            'Abstand zu nehmen heißt nicht, diese Person aufzugeben. Es bedeutet, dir Raum zum Heilen zu geben.',
          ],
        },
        ready: {
          imageAlt: 'Ein hölzernes Fenster, weit geöffnet an einer sonnenbeschienenen grünen Wand',
          heading: 'Vielleicht ist tatsächlich Platz für Freundschaft.',
          paragraphs: [
            'Es klingt, als hättest du die romantische Seite dieser Verbindung hinter dir gelassen.',
            'Du wartest nicht auf eine Entschuldigung, hoffst nicht auf ein Zurück, und wappnest dich nicht jedes Mal, wenn du an die Zukunft dieser Person denkst.',
            'Wenn du dich als Freund oder Freundin melden willst, bist du wahrscheinlich stabil genug dafür. Halte einfach deine Grenzen klar.',
          ],
        },
      },
      cta: {
        heading: 'Kommst du von der Idee "einfach Freunde sein" nicht los?',
        copy:
          'Breakup Reset hilft dir, Funkstille im Blick zu behalten, mit dir selbst einzuchecken und ein privates Tagebuch zu führen. Kostenlos.',
        button: 'Breakup Reset kostenlos herunterladen',
      },
      announce: {
        start: (total) => `Frage 1 von ${total}`,
        question: (n, total) => `Frage ${n} von ${total}`,
        notReady: 'Ergebnis: Für Freundschaft ist es noch nicht so weit.',
        ready: 'Ergebnis: Vielleicht ist tatsächlich Platz für Freundschaft.',
      },
      related: {
        heading: 'Weitere Tests für dich',
        items: [
          {
            href: '/breakup-reset/blog/de/should-i-do-no-contact-quiz/',
            title: 'Sollte ich Funkstille einlegen? Kostenloser Test',
          },
          {
            href: '/breakup-reset/blog/de/ready-to-date-again-quiz/',
            title: 'Ist jetzt ein guter Zeitpunkt, um wieder zu daten? Kostenloser Test',
          },
        ],
        footerLabel: 'Breakup Reset kostenlos herunterladen',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'pl') {
    const title = 'Czy mogę już przyjaźnić się z eks? Darmowy test';
    return {
      locale,
      title,
      description:
        'Zastanawiasz się, czy po rozstaniu przyjaźń z byłym partnerem ma sens? Zrób ten szybki test, żeby sprawdzić, czy przyjaźń może się udać, czy po prostu tęsknisz za tą osobą.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Test złożony z czterech pytań, sprawdzający, czy przyjaźń z byłym partnerem może się udać, czy nadal jest w Tobie przywiązanie do związku.',
      pagePath,
      pageUrl,
      downloadUrl,
      faqItems: [
        {
          question: 'Czy mogę już przyjaźnić się z eks?',
          answer:
            'Czasem tak, ale dopiero gdy zniknie romantyczne przywiązanie. Jeśli kontakt wciąż przyspiesza Ci puls, daje nadzieję na powrót albo budzi złość związaną z rozstaniem, przyjaźń zwykle przedłuża ból zamiast pomagać w gojeniu.',
        },
        {
          question: 'Skąd wiem, że przyjaźń z eks może się udać?',
          answer:
            'Zwykle jest to dobry moment, gdy możesz usłyszeć, że ta osoba spotyka się z kimś nowym, bez ostrego emocjonalnego ciosu, nie czekasz już na przeprosiny i po cichu nie liczysz na to, że przyjaźń doprowadzi do powrotu.',
        },
        {
          question: 'Dlaczego pozostanie przyjaciółmi po rozstaniu bywa tak trudne?',
          answer:
            'Rozstanie nie wyłącza przywiązania z dnia na dzień. Twój układ nerwowy może dalej traktować byłego partnera jako źródło ukojenia i bezpieczeństwa. Koleżeński kontakt, zanim ta więź się poluzuje, może utrzymywać Cię w pętli lęku, rozpamiętywania i złudnych nadziei.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Postęp testu',
        stepLabel: (n) => `Pytanie ${n}`,
      },
      landing: {
        heading: 'Czy przyjaźń z eks naprawdę może się udać, czy Twoja tęsknota wciąż stoi na drodze?',
        illustrationAlt: 'Dwie nakładające się sylwetki serc',
        copy: 'Można za kimś tęsknić i wciąż nie mieć w sobie miejsca na przyjaźń.',
        followCopy: 'Odpowiedz szczerze na te 4 pytania i zobacz, gdzie naprawdę jesteś.',
        startButton: 'Zacznij test',
      },
      questions: [
        'Gdyby imię tej osoby pojawiło się teraz na ekranie Twojego telefonu, czy Twoje serce od razu przyspieszyłoby, a żołądek by się ścisnął?',
        'Czy w głębi duszy część Ciebie ma nadzieję, że jeśli zostaniesz w życiu eks, to w końcu zrozumie, że chce do Ciebie wrócić?',
        'Gdyby jutro okazało się, że eks spotyka się z kimś nowym, czy sprawiłoby Ci to fizyczny lub emocjonalny ból?',
        'Czy nadal czujesz złość z powodu tego, jak skończył się Wasz związek, albo łapiesz się na tym, że po cichu czekasz na przeprosiny?',
      ],
      questionOf: (current, total) => `Pytanie ${current} z ${total}`,
      answers: {
        groupLabel: (n) => `Odpowiedz na pytanie ${n}`,
        yes: 'Tak',
        no: 'Nie',
      },
      results: {
        notReady: {
          imageAlt: 'Telefon leżący ekranem w dół na fakturowanym brązowym kocu, widok z góry',
          heading: 'To jeszcze nie jest dobry moment na przyjaźń.',
          paragraphs: [
            'Wciąż jest w Tobie przywiązanie i to zupełnie normalne. Nie robisz nic złego.',
            'To, czego teraz naprawdę chcesz, to prawdopodobnie nie przyjaźń. To bliskość, którą kiedyś mieliście. Pozostawanie przyjaciółmi, gdy wciąż boli, zwykle utrzymuje ranę otwartą.',
            'Wzięcie dystansu nie oznacza rezygnacji z tej osoby. To danie sobie przestrzeni na gojenie się.',
          ],
        },
        ready: {
          imageAlt: 'Drewniane okno otwarte na nasłonecznionej zielonej ścianie',
          heading: 'Może faktycznie jest miejsce na przyjaźń.',
          paragraphs: [
            'Wygląda na to, że masz już za sobą romantyczną stronę tej relacji.',
            'Nie czekasz na przeprosiny, nie liczysz na powrót i nie napinasz się za każdym razem, gdy myślisz o jej przyszłości.',
            'Jeśli chcesz odezwać się z pozycji przyjaźni, prawdopodobnie jesteś na tyle stabilny/stabilna, żeby to zrobić. Po prostu trzymaj jasne granice.',
          ],
        },
      },
      cta: {
        heading: 'Nadal nie możesz odpuścić myśli o „byciu tylko przyjaciółmi”?',
        copy:
          'Breakup Reset pomaga pilnować braku kontaktu, robić check-iny ze sobą i prowadzić prywatny dziennik. To za darmo.',
        button: 'Pobierz Breakup Reset za darmo',
      },
      announce: {
        start: (total) => `Pytanie 1 z ${total}`,
        question: (n, total) => `Pytanie ${n} z ${total}`,
        notReady: 'Wynik: to jeszcze nie jest dobry moment na przyjaźń.',
        ready: 'Wynik: może faktycznie jest miejsce na przyjaźń.',
      },
      related: {
        heading: 'Więcej testów dla Ciebie',
        items: [
          {
            href: '/breakup-reset/blog/pl/should-i-do-no-contact-quiz/',
            title: 'Czy muszę zerwać kontakt z eks? Darmowy test',
          },
          {
            href: '/breakup-reset/blog/pl/ready-to-date-again-quiz/',
            title: 'Czy mogę już zacząć chodzić na randki? Darmowy test',
          },
        ],
        footerLabel: 'Pobierz Breakup Reset za darmo',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'pt') {
    const title = 'Ainda dá pra ter amizade com o ex? Teste grátis';
    return {
      locale,
      title,
      description:
        'Está pensando em continuar amigo do seu ex depois do término? Faça esse teste rápido para descobrir se a amizade pode funcionar de verdade, ou se você só está com saudade dessa pessoa.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Um teste de quatro perguntas para descobrir se a amizade com o ex pode funcionar, ou se ainda existe apego ao relacionamento.',
      pagePath,
      pageUrl,
      downloadUrl,
      faqItems: [
        {
          question: 'Dá pra continuar amigo do ex?',
          answer:
            'Às vezes, mas só depois que o apego romântico tiver passado. Se o contato ainda acelera seu coração, te dá esperança de voltar, ou traz raiva sobre o término, a amizade costuma prolongar a dor em vez de ajudar a curar.',
        },
        {
          question: 'Como saber se estou pronto para ser amigo do meu ex?',
          answer:
            'Geralmente é um bom momento quando você consegue saber que essa pessoa está namorando alguém novo sem sentir um baque forte, quando você já não espera um pedido de desculpas e quando não fica torcendo em segredo para a amizade virar reconciliação.',
        },
        {
          question: 'Por que é tão difícil continuar amigos depois de um término?',
          answer:
            'O término não desliga o apego da noite para o dia. Seu sistema nervoso pode continuar tratando o ex como fonte de conforto e segurança. O contato de amizade antes desse vínculo afrouxar pode te manter num ciclo de ansiedade, ruminação e falsas esperanças.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progresso do teste',
        stepLabel: (n) => `Pergunta ${n}`,
      },
      landing: {
        heading: 'Será que a amizade pode mesmo funcionar, ou você só está com saudade dessa pessoa?',
        illustrationAlt: 'Dois contornos de coração sobrepostos',
        copy: 'Dá pra sentir saudade de alguém e ainda assim não ter espaço para a amizade.',
        followCopy: 'Responda essas 4 perguntas com sinceridade e veja onde você realmente está.',
        startButton: 'Começar o teste',
      },
      questions: [
        'Se o nome dessa pessoa aparecesse agora na tela do seu celular, seu coração dispararia ou seu estômago embrulharia na hora?',
        'No fundo, alguma parte de você ainda espera que, continuando na vida dessa pessoa, ela vai perceber que quer voltar com você?',
        'Se essa pessoa te contasse amanhã que está namorando alguém novo e feliz, isso te causaria dor física ou emocional?',
        'Você ainda sente raiva de como tudo terminou, ou se pega esperando em segredo por um pedido de desculpas?',
      ],
      questionOf: (current, total) => `Pergunta ${current} de ${total}`,
      answers: {
        groupLabel: (n) => `Responder pergunta ${n}`,
        yes: 'Sim',
        no: 'Não',
      },
      results: {
        notReady: {
          imageAlt: 'Um celular virado de tela para baixo sobre uma manta marrom texturizada, visto de cima',
          heading: 'Ainda não é a hora de virar amigos.',
          paragraphs: [
            'Ainda existe apego, e isso é completamente normal. Você não está fazendo nada errado.',
            'O que você quer agora provavelmente não é amizade. É a proximidade que vocês tinham antes. Continuar amigos enquanto ainda dói costuma manter a ferida aberta.',
            'Se afastar não significa desistir dessa pessoa. É se dar espaço para se curar.',
          ],
        },
        ready: {
          imageAlt: 'Uma janela de madeira aberta em uma parede verde iluminada pelo sol',
          heading: 'Pode ser que você esteja mesmo pronto para a amizade.',
          paragraphs: [
            'Parece que você já superou o lado romântico dessa conexão.',
            'Você não está esperando um pedido de desculpas, nem torcendo para voltar, nem se preparando toda vez que pensa no futuro dessa pessoa.',
            'Se você quiser se aproximar como amigo, provavelmente está num lugar mais estável para isso. Só mantenha seus limites claros.',
          ],
        },
      },
      cta: {
        heading: 'Ainda não consegue soltar a ideia de "só ficar na amizade"?',
        copy:
          'O Breakup Reset te ajuda a acompanhar o contato zero, fazer check-ins com você mesmo e manter um diário privado. É de graça.',
        button: 'Baixar o Breakup Reset de graça',
      },
      announce: {
        start: (total) => `Pergunta 1 de ${total}`,
        question: (n, total) => `Pergunta ${n} de ${total}`,
        notReady: 'Resultado: ainda não é a hora de virar amigos.',
        ready: 'Resultado: pode ser que você esteja mesmo pronto para a amizade.',
      },
      related: {
        heading: 'Mais testes para você',
        items: [
          {
            href: '/breakup-reset/blog/pt/should-i-do-no-contact-quiz/',
            title: 'Devo cortar contato com o ex? Teste grátis',
          },
          {
            href: '/breakup-reset/blog/pt/ready-to-date-again-quiz/',
            title: 'É um bom momento para voltar a namorar? Teste grátis',
          },
        ],
        footerLabel: 'Baixar o Breakup Reset de graça',
        footerHref: downloadUrl,
      },
    };
  }

  return {
    locale,
    title: 'Am I Ready To Be Friends with My Ex? Free Quiz',
    description:
      'Thinking about staying friends after a breakup? Take this quick quiz to see if you are actually ready, or just missing them.',
    ogTitle: 'Am I Ready To Be Friends with My Ex? Free Quiz | Breakup Reset',
    schemaName: 'Am I Ready To Be Friends with My Ex? Free Quiz',
    schemaDescription:
      'A four-question quiz to see whether you are ready for friendship with an ex, or still attached to the relationship.',
    pagePath,
    pageUrl,
    downloadUrl,
    faqItems: [
      {
        question: 'Can I be friends with my ex?',
        answer:
          'Sometimes, but only after romantic attachment has faded. If contact still spikes your heart rate, stirs hope of getting back together, or brings up anger about the breakup, friendship will usually prolong the pain rather than help you heal.',
      },
      {
        question: 'How do I know if I am ready to be friends with my ex?',
        answer:
          'You are likely ready when you can hear about them dating someone new without a sharp emotional hit, you are not waiting for an apology, and you are not secretly hoping friendship will lead to reconciliation.',
      },
      {
        question: 'Why does staying friends after a breakup feel so hard?',
        answer:
          "Breakups do not switch off attachment overnight. Your nervous system may still treat your ex as a source of comfort and safety. Platonic contact before that bond loosens can keep you in a loop of anxiety, rumination, and false hope.",
      },
    ],
    heading: 'Am I Ready To Be Friends with My Ex? Free Quiz',
    progress: {
      ariaLabel: 'Quiz progress',
      stepLabel: (n) => `Question ${n}`,
    },
    landing: {
      heading: 'Are you actually ready to be friends, or are you just missing them?',
      illustrationAlt: 'Two overlapping heart outlines',
      copy: 'You can miss someone and still not be ready for friendship.',
      followCopy: 'Answer these 4 questions honestly and see where you actually stand.',
      startButton: 'Start the quiz',
    },
    questions: [
      'If their name popped up on your phone screen right now, would your heart rate instantly spike or your stomach drop?',
      'Deep down, is a tiny part of you hoping that staying in their life will eventually make them realize they want you back?',
      'If they told you tomorrow that they are happily dating someone new, would it cause you physical or emotional pain?',
      'Do you still feel angry about how things ended, or find yourself secretly waiting for an apology?',
    ],
    questionOf: (current, total) => `Question ${current} of ${total}`,
    answers: {
      groupLabel: (n) => `Answer question ${n}`,
      yes: 'Yes',
      no: 'No',
    },
    results: {
      notReady: {
        imageAlt: 'A smartphone lying face-down on a textured brown blanket, seen from above',
        heading: "You aren't ready to be friends yet.",
        paragraphs: [
          "You're still attached, and that's completely normal. You're not doing anything wrong.",
          "What you want right now probably isn't friendship. It's the closeness you used to have. Staying friends while you're still hurt usually keeps the wound open.",
          "Space isn't giving up on them. It's giving yourself room to heal.",
        ],
      },
      ready: {
        imageAlt: 'A wooden window swung open on a sunlit green wall',
        heading: 'You might actually be ready.',
        paragraphs: [
          "It sounds like you've moved past the romantic side of this connection.",
          "You're not waiting for an apology, hoping you'll get back together, or bracing yourself every time you think about their future.",
          "If you want to reach out as a friend, you're probably in a steadier place to do that. Just keep your boundaries clear.",
        ],
      },
    },
    cta: {
      heading: 'Still stuck on the idea of "just being friends"?',
      copy:
        "Breakup Reset helps you track no-contact, check in with yourself, and keep a private journal. It's free.",
      button: 'Download Breakup Reset for Free',
    },
    announce: {
      start: (total) => `Question 1 of ${total}`,
      question: (n, total) => `Question ${n} of ${total}`,
      notReady: 'Result: you are not ready to be friends yet.',
      ready: 'Result: you might actually be ready to be friends.',
    },
    related: {
      heading: 'More to read',
      items: [
        {
          href: '/breakup-reset/blog/en/can-you-be-friends-with-your-ex/',
          title: 'Can You Be Friends with Your Ex? What Actually Determines It',
        },
        {
          href: '/breakup-reset/blog/en/anxious-attachment-after-breakup/',
          title: "Anxious Attachment after a Breakup: Why You Can't Stop Reaching for Them",
        },
        {
          href: '/breakup-reset/blog/en/no-contact-after-breakup/',
          title: "No Contact After a Breakup: What It Does (and What It Doesn't)",
        },
        {
          href: '/breakup-reset/blog/en/should-you-do-no-contact/',
          title: 'Should You Do No Contact? An Honest Guide for When You Are Not Sure',
        },
      ],
      footerLabel: 'Back to blog',
      footerHref: '/breakup-reset/blog/en/',
    },
  };
}
