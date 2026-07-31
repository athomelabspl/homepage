import type { LandingLocale } from './breakup-chrome';
import { breakupQuizHref } from './breakup-chrome';

export interface LandingFaqItem {
  question: string;
  answer: string;
}

export interface LandingQuizCard {
  href: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface LandingCopy {
  locale: LandingLocale;
  title: string;
  description: string;
  heroHeading: string;
  heroSubtitle: string;
  androidCta: string;
  iosComingSoon: string;
  carouselLabel: string;
  prevScreen: string;
  nextScreen: string;
  chooseScreen: string;
  showScreen: (n: number) => string;
  statsLabel: string;
  stats: { value: string; label: string }[];
  quizzesHeading: string;
  quizzesIntro: string;
  quizEyebrow: string;
  takeQuiz: string;
  articlesHeading: string;
  faqHeading: string;
  faqItems: LandingFaqItem[];
  heroSlides: { src: string; alt: string }[];
  featuredQuizzes: LandingQuizCard[];
  showArticles: boolean;
}

const heroSlideSrcs = [
  '/breakup-reset/marketing/iphone-1.png',
  '/breakup-reset/marketing/iphone-2.png',
  '/breakup-reset/marketing/iphone-3.png',
  '/breakup-reset/marketing/iphone-4.png',
  '/breakup-reset/marketing/iphone-5.png',
] as const;

const quizImages = {
  friends: {
    src: '/breakup-reset/quiz/friends-with-ex-quiz-landing.png',
    width: 240,
    height: 162,
  },
  noContact: {
    src: '/breakup-reset/quiz/no-contact-quiz-landing.png',
    width: 300,
    height: 248,
  },
  readyToDate: {
    src: '/breakup-reset/quiz/ready-to-date-again-quiz-landing.png',
    width: 180,
    height: 296,
  },
} as const;

export function getBreakupLandingCopy(locale: LandingLocale): LandingCopy {
  if (locale === 'es') {
    return {
      locale,
      title: 'Inicio',
      description:
        'Ninguna ruptura se siente igual. Recibe apoyo que te entiende.',
      heroHeading: 'Estás en el lugar correcto.',
      heroSubtitle:
        'Ninguna ruptura se siente igual. Recibe apoyo que te entiende.',
      androidCta: 'Android',
      iosComingSoon: 'iOS (Próximamente)',
      carouselLabel: 'Pantallas de la app Breakup Reset',
      prevScreen: 'Pantalla anterior',
      nextScreen: 'Pantalla siguiente',
      chooseScreen: 'Elegir pantalla',
      showScreen: (n) => `Mostrar pantalla ${n}`,
      statsLabel: 'Destacados de la app',
      stats: [
        { value: '3', label: 'Retos al día' },
        { value: '4', label: 'Caminos de recuperación' },
        { value: '100%', label: 'A tu ritmo' },
      ],
      quizzesHeading: 'Tests gratis',
      quizzesIntro:
        'Cuando no sabes qué hacer a continuación, responde primero unas preguntas.',
      quizEyebrow: 'Test gratis',
      takeQuiz: 'Hacer el test →',
      articlesHeading: 'Artículos e ideas',
      faqHeading: 'Preguntas frecuentes',
      faqItems: [
        {
          question: '¿Cuánto tarda superar una ruptura?',
          answer:
            'No hay un plazo fijo. Algunos días pesan más que otros, y eso es normal.',
        },
        {
          question: '¿Breakup Reset es una app de terapia?',
          answer:
            'No. Es una herramienta de bienestar y autoayuda, no un tratamiento clínico ni terapia.',
        },
        {
          question: '¿Breakup Reset es gratis?',
          answer:
            'Sí. Todas las funciones son gratis. Puedes donar de forma opcional para apoyar la app.',
        },
      ],
      heroSlides: [
        {
          src: heroSlideSrcs[0],
          alt: 'Onboarding de Breakup Reset — notar cómo te sientes respecto a tu ex',
        },
        {
          src: heroSlideSrcs[1],
          alt: 'Vista previa de la app Breakup Reset 2',
        },
        {
          src: heroSlideSrcs[2],
          alt: 'Vista previa de la app Breakup Reset 3',
        },
        {
          src: heroSlideSrcs[3],
          alt: 'Vista previa de la app Breakup Reset 4',
        },
        {
          src: heroSlideSrcs[4],
          alt: 'Vista previa de la app Breakup Reset 5',
        },
      ],
      featuredQuizzes: [
        {
          href: breakupQuizHref('friends-with-ex-quiz', 'es'),
          title: '¿Puedo seguir siendo amigos con mi ex?',
          description:
            'Cuatro preguntas de sí o no. Mira si todavía hay apego, o si la amistad puede funcionar.',
          image: {
            ...quizImages.friends,
            alt: 'Dos siluetas de corazón superpuestas',
          },
        },
        {
          href: breakupQuizHref('should-i-do-no-contact-quiz', 'es'),
          title: '¿Debería hacer no contacto?',
          description:
            'Sirve si comparten hijos, una mascota o un alquiler — no solo rupturas limpias.',
          image: {
            ...quizImages.noContact,
            alt: 'Una barrera junto a un camino sinuoso',
          },
        },
        {
          href: breakupQuizHref('ready-to-date-again-quiz', 'es'),
          title: '¿Es buen momento para volver a salir?',
          description:
            'Sin trucos de plazos. Comprueba si quieres a alguien nuevo, o solo escapar de extrañar a tu ex.',
          image: {
            ...quizImages.readyToDate,
            alt: 'Silueta de una flor en un tallo',
          },
        },
      ],
      showArticles: false,
    };
  }

  if (locale === 'fr') {
    return {
      locale,
      title: 'Accueil',
      description:
        "Aucune rupture ne se ressemble. Recevez un accompagnement qui vous comprend.",
      heroHeading: 'Vous êtes au bon endroit.',
      heroSubtitle:
        "Aucune rupture ne se ressemble. Recevez un accompagnement qui vous comprend.",
      androidCta: 'Android',
      iosComingSoon: 'iOS (Bientôt disponible)',
      carouselLabel: "Écrans de l'application Breakup Reset",
      prevScreen: 'Écran précédent',
      nextScreen: 'Écran suivant',
      chooseScreen: 'Choisir un écran',
      showScreen: (n) => `Afficher l'écran ${n}`,
      statsLabel: "Points forts de l'application",
      stats: [
        { value: '3', label: 'Défis par jour' },
        { value: '4', label: 'Parcours de guérison' },
        { value: '100%', label: 'À votre rythme' },
      ],
      quizzesHeading: 'Tests gratuits',
      quizzesIntro:
        'Quand vous ne savez pas quoi faire, commencez par répondre à quelques questions.',
      quizEyebrow: 'Test gratuit',
      takeQuiz: 'Faire le test →',
      articlesHeading: 'Articles et ressources',
      faqHeading: 'Questions fréquentes',
      faqItems: [
        {
          question: "Combien de temps faut-il pour se remettre d'une rupture ?",
          answer:
            "Il n'y a pas de délai fixe. Certains jours pèsent plus que d'autres, et c'est normal.",
        },
        {
          question: 'Breakup Reset est-elle une application de thérapie ?',
          answer:
            "Non. C'est un outil de bien-être et d'entraide, pas un traitement clinique ni une thérapie.",
        },
        {
          question: 'Breakup Reset est-elle gratuite ?',
          answer:
            "Oui. Toutes les fonctionnalités sont gratuites. Vous pouvez faire un don facultatif pour soutenir l'application.",
        },
      ],
      heroSlides: [
        {
          src: heroSlideSrcs[0],
          alt: "Intégration de Breakup Reset — identifier ce que vous ressentez pour votre ex",
        },
        {
          src: heroSlideSrcs[1],
          alt: "Aperçu de l'application Breakup Reset 2",
        },
        {
          src: heroSlideSrcs[2],
          alt: "Aperçu de l'application Breakup Reset 3",
        },
        {
          src: heroSlideSrcs[3],
          alt: "Aperçu de l'application Breakup Reset 4",
        },
        {
          src: heroSlideSrcs[4],
          alt: "Aperçu de l'application Breakup Reset 5",
        },
      ],
      featuredQuizzes: [
        {
          href: breakupQuizHref('friends-with-ex-quiz', 'fr'),
          title: 'Peut-on rester amis avec son ex ?',
          description:
            "Quatre questions oui ou non. Voyez s'il reste de l'attachement, ou si l'amitié peut fonctionner.",
          image: {
            ...quizImages.friends,
            alt: 'Deux silhouettes de cœurs superposées',
          },
        },
        {
          href: breakupQuizHref('should-i-do-no-contact-quiz', 'fr'),
          title: 'Dois-je couper les ponts avec mon ex ?',
          description:
            'Utile si vous partagez des enfants, un animal ou un bail — pas seulement pour les ruptures nettes.',
          image: {
            ...quizImages.noContact,
            alt: "Une barrière à côté d'un chemin sinueux",
          },
        },
        {
          href: breakupQuizHref('ready-to-date-again-quiz', 'fr'),
          title: 'Est-ce le bon moment pour sortir de nouveau ?',
          description:
            "Sans calendrier magique. Voyez si vous avez envie de rencontrer quelqu'un, ou si vous voulez seulement fuir le manque de votre ex.",
          image: {
            ...quizImages.readyToDate,
            alt: 'Silhouette d\'une fleur sur sa tige',
          },
        },
      ],
      showArticles: false,
    };
  }

  if (locale === 'de') {
    return {
      locale,
      title: 'Start',
      description:
        'Keine Trennung fühlt sich gleich an. Hol dir Unterstützung, die dich versteht.',
      heroHeading: 'Du bist hier richtig.',
      heroSubtitle:
        'Keine Trennung fühlt sich gleich an. Hol dir Unterstützung, die dich versteht.',
      androidCta: 'Android',
      iosComingSoon: 'iOS (Bald verfügbar)',
      carouselLabel: 'Breakup Reset App-Bildschirme',
      prevScreen: 'Vorheriger Bildschirm',
      nextScreen: 'Nächster Bildschirm',
      chooseScreen: 'Bildschirm wählen',
      showScreen: (n) => `Bildschirm ${n} anzeigen`,
      statsLabel: 'App-Highlights',
      stats: [
        { value: '3', label: 'Challenges pro Tag' },
        { value: '4', label: 'Wege der Heilung' },
        { value: '100%', label: 'In deinem Tempo' },
      ],
      quizzesHeading: 'Kostenlose Tests',
      quizzesIntro:
        'Wenn du nicht weißt, was als Nächstes kommt, beantworte zuerst ein paar Fragen.',
      quizEyebrow: 'Kostenloser Test',
      takeQuiz: 'Test starten →',
      articlesHeading: 'Artikel & Impulse',
      faqHeading: 'Häufige Fragen',
      faqItems: [
        {
          question: 'Wie lange dauert es, eine Trennung zu verarbeiten?',
          answer:
            'Es gibt keinen festen Zeitplan. Manche Tage fühlen sich schwerer an als andere, und das ist normal.',
        },
        {
          question: 'Ist Breakup Reset eine Therapie-App?',
          answer:
            'Nein. Es ist ein Selbsthilfe-Tool fürs Wohlbefinden, keine klinische Behandlung oder Therapie.',
        },
        {
          question: 'Ist Breakup Reset kostenlos?',
          answer:
            'Ja. Alle Funktionen sind kostenlos. Du kannst optional spenden, um die App zu unterstützen.',
        },
      ],
      heroSlides: [
        {
          src: heroSlideSrcs[0],
          alt: 'Breakup Reset Onboarding — wahrnehmen, was du gerade fühlst',
        },
        {
          src: heroSlideSrcs[1],
          alt: 'Vorschau des Breakup Reset App-Bildschirms 2',
        },
        {
          src: heroSlideSrcs[2],
          alt: 'Vorschau des Breakup Reset App-Bildschirms 3',
        },
        {
          src: heroSlideSrcs[3],
          alt: 'Vorschau des Breakup Reset App-Bildschirms 4',
        },
        {
          src: heroSlideSrcs[4],
          alt: 'Vorschau des Breakup Reset App-Bildschirms 5',
        },
      ],
      featuredQuizzes: [
        {
          href: breakupQuizHref('friends-with-ex-quiz', 'de'),
          title: 'Können wir nach der Trennung befreundet bleiben?',
          description:
            'Vier Ja-Nein-Fragen. Finde heraus, ob noch Bindung da ist, oder ob Freundschaft funktionieren kann.',
          image: {
            ...quizImages.friends,
            alt: 'Zwei sich überschneidende Herz-Umrisse',
          },
        },
        {
          href: breakupQuizHref('should-i-do-no-contact-quiz', 'de'),
          title: 'Sollte ich Funkstille einlegen?',
          description:
            'Auch hilfreich, wenn ihr Kinder, ein Haustier oder eine Wohnung teilt — nicht nur bei sauberen Trennungen.',
          image: {
            ...quizImages.noContact,
            alt: 'Eine Schranke neben einem kurvigen Weg',
          },
        },
        {
          href: breakupQuizHref('ready-to-date-again-quiz', 'de'),
          title: 'Ist jetzt ein guter Zeitpunkt, um wieder zu daten?',
          description:
            'Ohne Zeitplan-Tricks. Finde heraus, ob du jemand Neues kennenlernen willst, oder nur der Sehnsucht nach deiner Ex-Beziehung entkommen willst.',
          image: {
            ...quizImages.readyToDate,
            alt: 'Der Umriss einer einzelnen Blume an ihrem Stiel',
          },
        },
      ],
      showArticles: false,
    };
  }

  if (locale === 'pl') {
    return {
      locale,
      title: 'Start',
      description:
        'Każde rozstanie przeżywa się inaczej. Odkryj program wsparcia oparty na Twojej sytuacji.',
      heroHeading: 'Jesteś we właściwym miejscu.',
      heroSubtitle:
        'Każde rozstanie przeżywa się inaczej. Odkryj program wsparcia oparty na Twojej sytuacji.',
      androidCta: 'Android',
      iosComingSoon: 'iOS (Wkrótce)',
      carouselLabel: 'Ekrany aplikacji Breakup Reset',
      prevScreen: 'Poprzedni ekran',
      nextScreen: 'Następny ekran',
      chooseScreen: 'Wybierz ekran',
      showScreen: (n) => `Pokaż ekran ${n}`,
      statsLabel: 'Najważniejsze funkcje aplikacji',
      stats: [
        { value: '3', label: 'Wyzwania dziennie' },
        { value: '4', label: 'Ścieżki powrotu do siebie' },
        { value: '100%', label: 'W Twoim tempie' },
      ],
      quizzesHeading: 'Darmowe testy',
      quizzesIntro:
        'Gdy nie wiesz, co dalej, zacznij od odpowiedzi na kilka pytań.',
      quizEyebrow: 'Darmowy test',
      takeQuiz: 'Zrób test →',
      articlesHeading: 'Artykuły i inspiracje',
      faqHeading: 'Częste pytania',
      faqItems: [
        {
          question: 'Ile czasu zajmuje dojście do siebie po rozstaniu?',
          answer:
            'Nie ma jednego, ustalonego czasu. Niektóre dni są cięższe niż inne i to jest normalne.',
        },
        {
          question: 'Czy Breakup Reset to aplikacja terapeutyczna?',
          answer:
            'Nie. To narzędzie do samopomocy i dbania o dobre samopoczucie, a nie do leczenia czy terapii.',
        },
        {
          question: 'Czy Breakup Reset jest darmowa?',
          answer:
            'Tak. Wszystkie funkcje są darmowe. Możesz opcjonalnie wesprzeć aplikację dobrowolną wpłatą.',
        },
      ],
      heroSlides: [
        {
          src: heroSlideSrcs[0],
          alt: 'Wprowadzenie do Breakup Reset — sprawdzenie, co czujesz wobec byłego partnera',
        },
        {
          src: heroSlideSrcs[1],
          alt: 'Podgląd aplikacji Breakup Reset 2',
        },
        {
          src: heroSlideSrcs[2],
          alt: 'Podgląd aplikacji Breakup Reset 3',
        },
        {
          src: heroSlideSrcs[3],
          alt: 'Podgląd aplikacji Breakup Reset 4',
        },
        {
          src: heroSlideSrcs[4],
          alt: 'Podgląd aplikacji Breakup Reset 5',
        },
      ],
      featuredQuizzes: [
        {
          href: breakupQuizHref('friends-with-ex-quiz', 'pl'),
          title: 'Czy mogę już przyjaźnić się z eks?',
          description:
            'Cztery pytania tak/nie. Sprawdź, czy wciąż coś czujesz, czy przyjaźń może się udać.',
          image: {
            ...quizImages.friends,
            alt: 'Dwie nakładające się sylwetki serc',
          },
        },
        {
          href: breakupQuizHref('should-i-do-no-contact-quiz', 'pl'),
          title: 'Czy muszę zerwać kontakt z eks?',
          description:
            'Przydatne też, gdy macie wspólne dzieci, zwierzę albo mieszkanie — nie tylko przy czystym rozstaniu.',
          image: {
            ...quizImages.noContact,
            alt: 'Szlaban obok krętej ścieżki',
          },
        },
        {
          href: breakupQuizHref('ready-to-date-again-quiz', 'pl'),
          title: 'Czy mogę już zacząć chodzić na randki?',
          description:
            'Sprawdź, czy naprawdę chcesz poznać kogoś nowego, czy wciąż uciekasz przed tęsknotą za eks.',
          image: {
            ...quizImages.readyToDate,
            alt: 'Kontur pojedynczego kwiatu na łodydze',
          },
        },
      ],
      showArticles: false,
    };
  }

  if (locale === 'pt') {
    return {
      locale,
      title: 'Início',
      description: 'Nenhum término é igual ao outro. Receba um apoio que entende você.',
      heroHeading: 'Você está no lugar certo.',
      heroSubtitle:
        'Nenhum término é igual ao outro. Receba um apoio que entende você.',
      androidCta: 'Android',
      iosComingSoon: 'iOS (Em breve)',
      carouselLabel: 'Telas do app Breakup Reset',
      prevScreen: 'Tela anterior',
      nextScreen: 'Próxima tela',
      chooseScreen: 'Escolher tela',
      showScreen: (n) => `Mostrar tela ${n}`,
      statsLabel: 'Destaques do app',
      stats: [
        { value: '3', label: 'Desafios por dia' },
        { value: '4', label: 'Caminhos de recuperação' },
        { value: '100%', label: 'No seu ritmo' },
      ],
      quizzesHeading: 'Testes grátis',
      quizzesIntro:
        'Quando você não sabe o que fazer, comece respondendo algumas perguntas.',
      quizEyebrow: 'Teste grátis',
      takeQuiz: 'Fazer o teste →',
      articlesHeading: 'Artigos e conteúdos',
      faqHeading: 'Perguntas frequentes',
      faqItems: [
        {
          question: 'Quanto tempo leva para superar um término?',
          answer:
            'Não existe um prazo fixo. Alguns dias pesam mais que outros, e isso é normal.',
        },
        {
          question: 'O Breakup Reset é um aplicativo de terapia?',
          answer:
            'Não. É uma ferramenta de autoajuda e bem-estar, não é tratamento clínico nem terapia.',
        },
        {
          question: 'O Breakup Reset é gratuito?',
          answer:
            'Sim. Todos os recursos são gratuitos. Você pode doar de forma opcional para apoiar o app.',
        },
      ],
      heroSlides: [
        {
          src: heroSlideSrcs[0],
          alt: 'Onboarding do Breakup Reset — percebendo o que você sente pelo seu ex',
        },
        {
          src: heroSlideSrcs[1],
          alt: 'Prévia do app Breakup Reset 2',
        },
        {
          src: heroSlideSrcs[2],
          alt: 'Prévia do app Breakup Reset 3',
        },
        {
          src: heroSlideSrcs[3],
          alt: 'Prévia do app Breakup Reset 4',
        },
        {
          src: heroSlideSrcs[4],
          alt: 'Prévia do app Breakup Reset 5',
        },
      ],
      featuredQuizzes: [
        {
          href: breakupQuizHref('friends-with-ex-quiz', 'pt'),
          title: 'Ainda dá pra ter amizade com o ex?',
          description:
            'Quatro perguntas de sim ou não. Veja se ainda existe apego, ou se a amizade pode funcionar.',
          image: {
            ...quizImages.friends,
            alt: 'Dois contornos de coração sobrepostos',
          },
        },
        {
          href: breakupQuizHref('should-i-do-no-contact-quiz', 'pt'),
          title: 'Devo cortar contato com o ex?',
          description:
            'Funciona mesmo se vocês tiverem filhos, um pet ou aluguel juntos — não só em términos limpos.',
          image: {
            ...quizImages.noContact,
            alt: 'Uma cancela ao lado de um caminho sinuoso',
          },
        },
        {
          href: breakupQuizHref('ready-to-date-again-quiz', 'pt'),
          title: 'É um bom momento para voltar a namorar?',
          description:
            'Sem regra de prazo. Veja se você quer conhecer alguém novo, ou só está fugindo da saudade do ex.',
          image: {
            ...quizImages.readyToDate,
            alt: 'Silhueta de uma única flor no caule',
          },
        },
      ],
      showArticles: false,
    };
  }

  return {
    locale,
    title: 'Home',
    description:
      'No two breakups feel the same. Get support that understands you.',
    heroHeading: "You're in the right place.",
    heroSubtitle:
      'No two breakups feel the same. Get support that understands you.',
    androidCta: 'Android',
    iosComingSoon: 'iOS (Coming Soon)',
    carouselLabel: 'Breakup Reset app screens',
    prevScreen: 'Previous screen',
    nextScreen: 'Next screen',
    chooseScreen: 'Choose screen',
    showScreen: (n) => `Show screen ${n}`,
    statsLabel: 'App highlights',
    stats: [
      { value: '3', label: 'Challenges a Day' },
      { value: '4', label: 'Recovery Paths' },
      { value: '100%', label: 'On Your Pace' },
    ],
    quizzesHeading: 'Free Quizzes',
    quizzesIntro:
      'When you’re unsure what to do next, answer a few questions first.',
    quizEyebrow: 'Free quiz',
    takeQuiz: 'Take the quiz →',
    articlesHeading: 'Articles & Insights',
    faqHeading: 'Frequently Asked Questions',
    faqItems: [
      {
        question: 'How long does it take to get over a breakup?',
        answer:
          'There is no fixed timeline. Some days feel heavier than others, and that is normal.',
      },
      {
        question: 'Is Breakup Reset a therapy app?',
        answer:
          'No. It is a self-help wellness tool, not clinical treatment or therapy.',
      },
      {
        question: 'Is Breakup Reset free?',
        answer:
          'Yes. Every feature is free. You can optionally donate to support the app.',
      },
    ],
    heroSlides: [
      {
        src: heroSlideSrcs[0],
        alt: 'Breakup Reset onboarding — noticing how you feel about your ex',
      },
      {
        src: heroSlideSrcs[1],
        alt: 'Breakup Reset app screen preview 2',
      },
      {
        src: heroSlideSrcs[2],
        alt: 'Breakup Reset app screen preview 3',
      },
      {
        src: heroSlideSrcs[3],
        alt: 'Breakup Reset app screen preview 4',
      },
      {
        src: heroSlideSrcs[4],
        alt: 'Breakup Reset app screen preview 5',
      },
    ],
    featuredQuizzes: [
      {
        href: breakupQuizHref('friends-with-ex-quiz', 'en'),
        title: 'Am I ready to be friends with my ex?',
        description:
          'Four yes-or-no questions. See whether you are still attached or actually ready.',
        image: {
          ...quizImages.friends,
          alt: 'Two overlapping heart outlines',
        },
      },
      {
        href: breakupQuizHref('should-i-do-no-contact-quiz', 'en'),
        title: 'Should I do no contact?',
        description:
          'Works if you share kids, a pet, or a lease — not just clean-break situations.',
        image: {
          ...quizImages.noContact,
          alt: 'A barrier gate beside a winding path',
        },
      },
      {
        href: breakupQuizHref('ready-to-date-again-quiz', 'en'),
        title: 'Am I ready to date again?',
        description:
          'No timeline gimmicks. Check if you want someone new, or just escape missing your ex.',
        image: {
          ...quizImages.readyToDate,
          alt: 'A single flower outline on a stem',
        },
      },
    ],
    showArticles: true,
  };
}
