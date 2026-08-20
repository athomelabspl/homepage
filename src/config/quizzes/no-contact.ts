import { getBreakupDownloadUrl, storePlacements } from '../../utils/storeLinks';
import type { QuizFaqItem, QuizLocale, QuizRelatedSection } from './shared';

export interface QuizConstraintOption {
  id: string;
  label: string;
}

export interface InlineQuizLink {
  before: string;
  linkText: string;
  href: string;
  after: string;
}

export interface NoContactQuizCopy {
  locale: QuizLocale;
  title: string;
  description: string;
  ogTitle: string;
  schemaName: string;
  schemaDescription: string;
  pagePath: string;
  pageUrl: string;
  downloadUrl: string;
  ogImage: { src: string; width: number; height: number; alt: string };
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
  constraintPanel: {
    eyebrow: string;
    heading: string;
    copy: string;
    helper: string;
  };
  constraints: QuizConstraintOption[];
  constraintTips: Record<string, string>;
  questionsPathA: string[];
  questionsPathB: string[];
  questionOf: (current: number, total: number) => string;
  answers: {
    groupLabel: (n: number) => string;
    yes: string;
    no: string;
  };
  results: {
    aMore: { imageAlt: string; heading: string; paragraphs: string[] };
    aOk: {
      imageAlt: string;
      heading: string;
      paragraphs: string[];
      friendQuizLink: InlineQuizLink;
    };
    bTighter: {
      imageAlt: string;
      heading: string;
      closingParagraphs: string[];
    };
    bOk: { imageAlt: string; heading: string; paragraphs: string[] };
  };
  cta: {
    headingPathA: string;
    headingPathB: string;
    copy: string;
    button: string;
  };
  announce: {
    pickConstraint: string;
    gotItFourQuestions: string;
    question: (n: number, total: number) => string;
    resultAMore: string;
    resultAOk: string;
    resultBTighter: string;
    resultBOk: string;
  };
  related: QuizRelatedSection;
}

const landingIllustration = {
  src: '/breakup-reset/quiz/no-contact-quiz-landing.png',
  width: 300,
  height: 248,
};

const resultImages = {
  moreDistance: {
    src: '/breakup-reset/quiz/friends-with-ex-quiz-result-not-ready.png',
    width: 512,
    height: 341,
    intrinsicWidth: 1024,
  },
  ok: {
    src: '/breakup-reset/quiz/friends-with-ex-quiz-result-ready.png',
    width: 512,
    height: 341,
    intrinsicWidth: 1024,
  },
};

export const noContactImages = { landingIllustration, resultImages };

export function getNoContactQuizCopy(locale: QuizLocale): NoContactQuizCopy {
  const pagePath = `/breakup-reset/blog/${locale}/should-i-do-no-contact-quiz/`;
  const pageUrl = `https://athomelabs.eu${pagePath}`;
  const downloadUrl = getBreakupDownloadUrl(storePlacements.quizNoContact);

  if (locale === 'es') {
    const title = '¿Debería hacer no contacto? Test gratis';
    return {
      locale,
      title,
      description:
        '¿No sabes si necesitas silencio total o solo límites más firmes? Cuatro preguntas rápidas, incluido si compartes hijos, una mascota o un alquiler.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Un test breve para saber si necesitas no contacto estricto, contacto limitado más firme, o simplemente menos contacto del que tienes ahora, incluidas rupturas con hijos, mascotas o asuntos compartidos.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/should-you-do-no-contact.jpg',
        width: 1200,
        height: 800,
        alt: 'Vista aérea de una persona parada en una bifurcación de un camino en el bosque',
      },
      faqItems: [
        {
          question: '¿Todo el mundo debería hacer no contacto después de una ruptura?',
          answer:
            'No. Para muchas personas, tener menos contacto ayuda. Si compartes hijos, un trabajo o un alquiler, el silencio total puede no ser realista. La meta suele ser tener menos contacto del que tienes ahora, con límites más claros sobre en qué momentos ese contacto debe darse.',
        },
        {
          question: '¿Puedo hacer no contacto si tenemos hijos?',
          answer:
            'No puedes desaparecer, pero sí puedes limitar el contacto a lo logístico. Horarios de recogida, escuela, salud. Que sea breve. No proceses la relación en el chat de crianza compartida.',
        },
        {
          question: '¿Y si compartimos una mascota?',
          answer:
            'La misma idea: entregas, visitas al veterinario, quién la tiene esta semana. No mensajes diarios con fotos para seguir cerca. Si la custodia compartida sigue reabriendo la herida, está bien replantear el arreglo.',
        },
        {
          question: '¿Revisar su Instagram cuenta como contacto?',
          answer:
            'Para la sanación, normalmente sí. Tu cuerpo suele reaccionar igual, ya sea que le escribas o que revises su perfil. "Técnicamente no le escribo" mientras revisas su perfil todos los días no es mucho de un descanso.',
        },
        {
          question: '¿El no contacto es solo un truco para recuperar a mi ex?',
          answer:
            'Así lo venden en internet muchas veces. La distancia ayuda más cuando la haces por tu propia recuperación, no como una táctica para que te extrañe.',
        },
        {
          question: '¿Y si ya le escribí?',
          answer:
            'Toma nota de qué lo provocó y sigue adelante. Un solo mensaje no significa que estés de vuelta en cero.',
        },
        {
          question: '¿Y si todavía vivimos juntos por ahora?',
          answer:
            'Elige "Vivienda o pertenencias" en el test. Limita las conversaciones a la logística de la mudanza hasta que alguien tenga un nuevo lugar. Son límites estrictos temporales, no para siempre.',
        },
        {
          question: 'No me siento a salvo cerca de mi ex. ¿Este test es suficiente?',
          answer:
            'No. Si no te sientes a salvo, la distancia no es opcional. Busca apoyo de alguien de confianza o de un profesional. Este test es para el punto medio incómodo, no para el peligro.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progreso del test',
        stepLabel: (n) => `Pregunta ${n}`,
      },
      landing: {
        heading: '¿Necesitas silencio total, o solo menos contacto del que tienes ahora?',
        illustrationAlt: 'Una barrera junto a un camino sinuoso',
        copy:
          'Todo el mundo dice "haz no contacto". Eso no siempre es realista. Si compartes hijos, un perro o un alquiler, quizás necesites contacto limitado: breve, práctico, sin hablar de la relación.',
        followCopy: 'Cuatro preguntas honestas de sí o no. No necesitas crear una cuenta.',
        startButton: 'Empezar el test',
      },
      constraintPanel: {
        eyebrow: 'Primero, tu situación',
        heading: '¿Qué te sigue uniendo a tu ex?',
        copy:
          'Elige la opción más parecida a tu caso. Esto solo cambia qué preguntas recibes, no si tus sentimientos cuentan.',
        helper:
          'Las amistades en común no cuentan como "tener que seguir en contacto". Si esa es tu principal razón, elige Nada práctico.',
      },
      constraints: [
        { id: 'none', label: 'Nada práctico' },
        { id: 'kids', label: 'Hijos o crianza compartida' },
        { id: 'pets', label: 'Una mascota en común' },
        { id: 'housing', label: 'Vivienda o pertenencias' },
        { id: 'work', label: 'Trabajo o estudios' },
        { id: 'other', label: 'Otros asuntos logísticos' },
      ],
      constraintTips: {
        kids: 'Limítalo a recogidas, escuela y salud. Breve y práctico. No proceses la ruptura en el chat de crianza compartida. Guarda eso para alguien de confianza o tu diario.',
        pets: 'Solo entregas y temas del veterinario. Evita los mensajes de "solo quería decirte que te extraña". Si cada intercambio te deja hecho polvo, la custodia compartida podría estar haciéndote más daño que bien. Que una sola persona se quede con la mascota, o que alguien de confianza se encargue de las entregas, también es una opción válida.',
        housing:
          'Acuerden horarios para recoger tus cosas. Nada de "podemos hablar de nosotros" mientras alguien todavía se está mudando.',
        work: 'Solo temas del trabajo. Nada de chats fuera de horario que en realidad sean sobre ustedes dos.',
        other: 'Dinero, temas legales, cuentas compartidas: solo hechos. Sin mensajes extra para llenar el silencio.',
      },
      questionsPathA: [
        'En la última semana, después de escribirle, llamarle o verle, ¿te sentiste mal durante horas, no solo unos minutos?',
        '¿Revisas sus redes sociales, relees mensajes viejos o le preguntas a amistades en común cómo está?',
        '¿Una parte de ti todavía espera que cambie de opinión o vuelva contigo?',
        'Cuando le escribes, ¿es porque de verdad necesitas algo, o porque extrañas la sensación de que te responda?',
      ],
      questionsPathB: [
        '¿Los mensajes prácticos (horarios de recogida, renta, entregas de la mascota, temas de trabajo) suelen terminar en conversaciones sobre la relación o en discusiones?',
        '¿Le escribes por temas logísticos más seguido de lo que realmente necesitas?',
        'Después de tener que contactarle, ¿repites la conversación en tu cabeza, revisas si respondió, o te sientes mal durante horas?',
        '¿Estás usando "tenemos que coordinar" como excusa para seguir emocionalmente cerca?',
      ],
      questionOf: (current, total) => `Pregunta ${current} de ${total}`,
      answers: {
        groupLabel: (n) => `Responder pregunta ${n}`,
        yes: 'Sí',
        no: 'No',
      },
      results: {
        aMore: {
          imageAlt: 'Un teléfono boca abajo sobre una manta marrón con textura, visto desde arriba',
          heading: 'Probablemente necesites más distancia ahora mismo.',
          paragraphs: [
            'El contacto, o el casi-contacto, te está costando caro. Eso es información útil, no un defecto de carácter.',
            'No tienes que anunciar nada ni dar un discurso. Silencia sus notificaciones. Deja de revisar su perfil. Suelta el teléfono cuando quieras "solo ver qué está haciendo".',
            'Si te equivocas y le escribes, anota qué lo provocó y sigue adelante. Un mensaje no borra tu progreso.',
            'La distancia funciona mejor cuando la haces por ti, no para que te extrañe.',
          ],
        },
        aOk: {
          imageAlt: 'Una ventana de madera abierta en una pared verde iluminada por el sol',
          heading: 'El no contacto estricto tal vez no sea necesario todavía.',
          paragraphs: [
            'Tus respuestas sugieren que el contacto no te está afectando tanto en este momento. Eso puede cambiar. Vuelve a revisar cómo te sientes dentro de una semana.',
            'Mira con honestidad por qué le escribes: costumbre, esperanza, o algo que de verdad necesitas.',
          ],
          friendQuizLink: {
            before: '¿Te preguntas por la amistad en su lugar? ',
            linkText: 'Haz nuestro test de amistad con tu ex',
            href: '/breakup-reset/blog/es/friends-with-ex-quiz/',
            after: '. Extrañar a alguien y tener espacio para la amistad no es lo mismo.',
          },
        },
        bTighter: {
          imageAlt: 'Un teléfono boca abajo sobre una manta marrón con textura, visto desde arriba',
          heading: 'Necesitas límites más firmes en el contacto que no puedes evitar.',
          closingParagraphs: [
            'No tienes que quedarte en silencio total. Necesitas menos contacto del que tienes ahora, con límites más claros de tema y momento.',
            'Responde cuando tengas que hacerlo. No cuando la soledad apriete.',
          ],
        },
        bOk: {
          imageAlt: 'Una ventana de madera abierta en una pared verde iluminada por el sol',
          heading: 'Tu contacto necesario parece bastante bajo control.',
          paragraphs: [
            'Todavía tienes que coordinar, y eso no significa que estés fallando en tu sanación. Esta es la versión más difícil de la distancia: funcional, no romántica.',
            'Mantén los mensajes prácticos. Si una conversación empieza a desviarse hacia la relación, ciérrala.',
            'Si las entregas o los chats de trabajo empiezan a dejarte mal durante horas, vuelve aquí y ajusta los límites. Puedes ir adaptándolo sobre la marcha.',
          ],
        },
      },
      cta: {
        headingPathA: '¿Intentando poner distancia entre tú y tu ex?',
        headingPathB: '¿Intentando que la logística no se convierta en dolor?',
        copy:
          'Breakup Reset te ayuda a llevar el control del no contacto, hacer check-ins contigo y mantener un diario privado. Es gratis.',
        button: 'Descargar Breakup Reset gratis',
      },
      announce: {
        pickConstraint: 'Elige qué te sigue uniendo a tu ex.',
        gotItFourQuestions: 'Entendido. Ahora, cuatro preguntas.',
        question: (n, total) => `Pregunta ${n} de ${total}`,
        resultAMore: 'Resultado: probablemente necesites más distancia ahora mismo.',
        resultAOk: 'Resultado: el no contacto estricto tal vez no sea necesario todavía.',
        resultBTighter: 'Resultado: necesitas límites más firmes en el contacto necesario.',
        resultBOk: 'Resultado: tu contacto necesario parece bastante bajo control.',
      },
      related: {
        heading: 'Más tests para ti',
        items: [
          {
            href: '/breakup-reset/blog/es/friends-with-ex-quiz/',
            title: '¿Puedo seguir siendo amigos con mi ex? Test gratis',
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
    const title = 'Dois-je couper les ponts avec mon ex ? Test gratuit';
    return {
      locale,
      title,
      description:
        "Vous ne savez pas si vous avez besoin de silence total ou juste de limites plus fermes ? Quatre questions rapides, même si vous partagez des enfants, un animal ou un bail.",
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        "Un test court pour savoir si vous avez besoin d'une coupure de contact totale, d'un contact limité plus strict, ou simplement de moins de contact qu'actuellement — y compris pour les ruptures avec enfants, animaux ou obligations partagées.",
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/should-you-do-no-contact.jpg',
        width: 1200,
        height: 800,
        alt: "Vue aérienne d'une personne debout à la bifurcation d'un chemin en forêt",
      },
      faqItems: [
        {
          question: 'Tout le monde devrait-il couper les ponts après une rupture ?',
          answer:
            "Non. Pour beaucoup de gens, avoir moins de contact aide. Si vous partagez des enfants, un travail ou un bail, le silence total peut ne pas être réaliste. Le but est souvent d'avoir moins de contact qu'actuellement, avec des limites plus claires sur quand ce contact doit avoir lieu.",
        },
        {
          question: 'Puis-je couper les ponts si nous avons des enfants ?',
          answer:
            "Vous ne pouvez pas disparaître, mais vous pouvez limiter le contact à la logistique. Horaires de garde, école, santé. Restez bref. Ne réglez pas vos comptes sur la relation dans le fil de discussion sur la coparentalité.",
        },
        {
          question: 'Et si nous avons un animal en commun ?',
          answer:
            "Même idée : échanges, visites chez le vétérinaire, qui l'a cette semaine. Pas de photos quotidiennes pour rester proches. Si la garde partagée rouvre sans cesse la blessure, il est correct de revoir l'arrangement.",
        },
        {
          question: 'Regarder son Instagram, est-ce considéré comme du contact ?',
          answer:
            "Pour la guérison, généralement oui. Votre corps réagit souvent de la même façon, que vous lui écriviez ou que vous consultiez son profil. « Techniquement je ne lui écris pas » tout en regardant son profil tous les jours n'est pas vraiment une pause.",
        },
        {
          question: "Couper les ponts n'est-il qu'une astuce pour récupérer mon ex ?",
          answer:
            "C'est comme ça que c'est vendu en ligne. La distance aide surtout quand vous la prenez pour votre propre guérison, pas comme une tactique pour lui manquer.",
        },
        {
          question: 'Et si je lui ai déjà écrit ?',
          answer:
            "Notez ce qui a déclenché ça et continuez d'avancer. Un seul message ne veut pas dire que vous repartez de zéro.",
        },
        {
          question: 'Et si nous vivons encore ensemble pour l’instant ?',
          answer:
            'Choisissez « Logement ou affaires » dans le test. Limitez les échanges à la logistique du déménagement jusqu’à ce que quelqu’un ait un nouveau logement. Ce sont des limites strictes temporaires, pas pour toujours.',
        },
        {
          question: 'Je ne me sens pas en sécurité près de mon ex. Ce test suffit-il ?',
          answer:
            "Non. Si vous ne vous sentez pas en sécurité, la distance n'est pas optionnelle. Cherchez le soutien d'une personne de confiance ou d'un professionnel. Ce test est pour la zone grise inconfortable, pas pour le danger.",
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progression du test',
        stepLabel: (n) => `Question ${n}`,
      },
      landing: {
        heading: "Avez-vous besoin de silence total, ou juste de moins de contact qu'actuellement ?",
        illustrationAlt: 'Une barrière à côté d’un chemin sinueux',
        copy:
          "Tout le monde dit « coupez les ponts ». Ce n'est pas toujours réaliste. Si vous partagez des enfants, un chien ou un bail, vous avez peut-être plutôt besoin d'un contact limité : bref, pratique, sans parler de la relation.",
        followCopy: 'Quatre questions honnêtes, oui ou non. Aucun compte requis.',
        startButton: 'Commencer le test',
      },
      constraintPanel: {
        eyebrow: "D'abord, votre situation",
        heading: "Qu'est-ce qui vous lie encore à votre ex ?",
        copy:
          "Choisissez l'option la plus proche de votre cas. Cela change seulement les questions posées, pas si vos sentiments comptent.",
        helper:
          'Les amis en commun ne comptent pas comme « devoir rester en contact ». Si c’est votre principale raison, choisissez Rien de pratique.',
      },
      constraints: [
        { id: 'none', label: 'Rien de pratique' },
        { id: 'kids', label: 'Enfants ou coparentalité' },
        { id: 'pets', label: 'Un animal en commun' },
        { id: 'housing', label: 'Logement ou affaires' },
        { id: 'work', label: 'Travail ou études' },
        { id: 'other', label: 'Autres questions logistiques' },
      ],
      constraintTips: {
        kids: "Limitez-vous aux gardes, à l'école et à la santé. Bref et pratique. Ne réglez pas la rupture dans le fil de coparentalité. Gardez ça pour un ami ou votre journal.",
        pets: 'Seulement les échanges et le vétérinaire. Évitez les messages du genre « je voulais juste dire qu’il/elle vous manque ». Si chaque échange vous laisse à plat, la garde partagée fait peut-être plus de mal que de bien. Qu’une seule personne garde l’animal, ou qu’un ami s’occupe des échanges, est aussi une option valable.',
        housing:
          'Convenez d’horaires pour récupérer vos affaires. Pas de « on peut parler de nous » tant que quelqu’un est encore en train de déménager.',
        work: 'Seulement les sujets professionnels. Pas de discussions hors horaires qui parlent en réalité de vous deux.',
        other: 'Argent, questions légales, comptes partagés : seulement les faits. Pas de messages en plus pour combler le silence.',
      },
      questionsPathA: [
        'La semaine dernière, après un message, un appel ou une rencontre avec cette personne, avez-vous ressenti un mal-être pendant des heures, pas juste quelques minutes ?',
        'Regardez-vous ses réseaux sociaux, relisez-vous d’anciens messages, ou demandez-vous à des amis en commun de ses nouvelles ?',
        'Une part de vous espère-t-elle encore que cette personne change d’avis ou revienne ?',
        'Quand vous lui écrivez, est-ce parce que vous avez vraiment besoin de quelque chose, ou parce que la sensation d’une réponse vous manque ?',
      ],
      questionsPathB: [
        'Les messages pratiques (horaires de garde, loyer, échanges pour l’animal, sujets professionnels) finissent-ils souvent par des discussions sur la relation ou des disputes ?',
        'Lui écrivez-vous pour des questions logistiques plus souvent que nécessaire ?',
        'Après avoir dû contacter cette personne, rejouez-vous la conversation dans votre tête, vérifiez-vous si elle a répondu, ou ressentez-vous un mal-être pendant des heures ?',
        'Utilisez-vous « on doit se coordonner » comme excuse pour rester émotionnellement proches ?',
      ],
      questionOf: (current, total) => `Question ${current} sur ${total}`,
      answers: {
        groupLabel: (n) => `Répondre à la question ${n}`,
        yes: 'Oui',
        no: 'Non',
      },
      results: {
        aMore: {
          imageAlt: 'Un téléphone posé écran contre une couverture marron texturée, vu du dessus',
          heading: 'Vous avez probablement besoin de plus de distance en ce moment.',
          paragraphs: [
            "Le contact, ou le presque-contact, vous coûte cher. C'est une information utile, pas un défaut de caractère.",
            'Vous n’avez rien à annoncer ni à justifier. Coupez ses notifications. Arrêtez de consulter son profil. Reposez le téléphone quand vous voulez « juste voir ce qu’elle devient ».',
            'Si vous craquez et lui écrivez, notez ce qui a déclenché ça et continuez d’avancer. Un message n’efface pas vos progrès.',
            'La distance fonctionne mieux quand vous la prenez pour vous, pas pour lui manquer.',
          ],
        },
        aOk: {
          imageAlt: 'Une fenêtre en bois ouverte sur un mur vert baigné de soleil',
          heading: "Couper les ponts strictement n'est peut-être pas encore nécessaire.",
          paragraphs: [
            'Vos réponses suggèrent que le contact ne vous affecte pas trop en ce moment. Cela peut changer. Refaites le point avec vous-même dans une semaine.',
            'Restez honnête sur la raison pour laquelle vous contactez cette personne : l’habitude, l’espoir, ou un vrai besoin.',
          ],
          friendQuizLink: {
            before: "Vous vous posez plutôt la question de l'amitié ? ",
            linkText: 'Faites notre test sur l’amitié avec un ex',
            href: '/breakup-reset/blog/fr/friends-with-ex-quiz/',
            after: 'Ressentir le manque de quelqu’un et avoir de la place pour l’amitié, ce n’est pas pareil.',
          },
        },
        bTighter: {
          imageAlt: 'Un téléphone posé écran contre une couverture marron texturée, vu du dessus',
          heading: 'Vous avez besoin de limites plus fermes sur le contact que vous ne pouvez pas éviter.',
          closingParagraphs: [
            "Vous n'avez pas besoin d'un silence total. Vous avez besoin de moins de contact qu'actuellement, avec des limites plus claires sur le sujet et le moment.",
            'Répondez quand vous devez le faire. Pas quand la solitude presse.',
          ],
        },
        bOk: {
          imageAlt: 'Une fenêtre en bois ouverte sur un mur vert baigné de soleil',
          heading: 'Votre contact nécessaire semble plutôt sous contrôle.',
          paragraphs: [
            "Vous devez encore vous coordonner, et cela ne veut pas dire que vous échouez dans votre guérison. C'est la version la plus difficile de la distance : fonctionnelle, pas romantique.",
            'Gardez les messages pratiques. Si une conversation commence à dériver vers la relation, arrêtez-la.',
            'Si les échanges ou les discussions professionnelles commencent à vous laisser mal pendant des heures, revenez ici et resserrez les limites. Vous pouvez ajuster au fur et à mesure.',
          ],
        },
      },
      cta: {
        headingPathA: 'Vous essayez de mettre de la distance entre vous et votre ex ?',
        headingPathB: 'Vous essayez d’éviter que la logistique ne se transforme en chagrin ?',
        copy:
          "Breakup Reset vous aide à suivre l'absence de contact, à faire le point avec vous-même et à tenir un journal privé. C'est gratuit.",
        button: 'Télécharger Breakup Reset gratuitement',
      },
      announce: {
        pickConstraint: 'Choisissez ce qui vous lie encore à votre ex.',
        gotItFourQuestions: 'Compris. Maintenant, quatre questions.',
        question: (n, total) => `Question ${n} sur ${total}`,
        resultAMore: 'Résultat : vous avez probablement besoin de plus de distance en ce moment.',
        resultAOk: "Résultat : couper les ponts strictement n'est peut-être pas encore nécessaire.",
        resultBTighter: 'Résultat : vous avez besoin de limites plus fermes sur le contact nécessaire.',
        resultBOk: 'Résultat : votre contact nécessaire semble plutôt sous contrôle.',
      },
      related: {
        heading: 'Plus de tests pour vous',
        items: [
          {
            href: '/breakup-reset/blog/fr/friends-with-ex-quiz/',
            title: 'Peut-on rester amis avec son ex ? Test gratuit',
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
    const title = 'Sollte ich Funkstille einlegen? Kostenloser Test';
    return {
      locale,
      title,
      description:
        'Bist du unsicher, ob du komplette Funkstille brauchst oder nur klarere Grenzen? Vier kurze Fragen, auch wenn ihr Kinder, ein Haustier oder eine gemeinsame Wohnung teilt.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Ein kurzer Test, der zeigt, ob du volle Funkstille, strengeren, aber begrenzten Kontakt, oder einfach weniger Kontakt als jetzt brauchst — auch bei Trennungen mit Kindern, Haustieren oder gemeinsamer Logistik.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/should-you-do-no-contact.jpg',
        width: 1200,
        height: 800,
        alt: 'Luftaufnahme einer Person, die an einer Weggabelung im Wald steht',
      },
      faqItems: [
        {
          question: 'Sollte jeder nach einer Trennung Funkstille einlegen?',
          answer:
            'Nein. Für viele Menschen hilft schon weniger Kontakt. Wenn ihr Kinder, einen Arbeitsplatz oder eine Wohnung teilt, ist völlige Stille vielleicht nicht realistisch. Das Ziel ist meist weniger Kontakt als jetzt, mit klareren Grenzen, wo Kontakt bleiben muss.',
        },
        {
          question: 'Kann ich Funkstille einlegen, wenn wir Kinder haben?',
          answer:
            'Du kannst nicht verschwinden, aber du kannst dich auf Organisatorisches beschränken. Abholzeiten, Schule, Gesundheit. Halte es kurz. Verarbeite die Beziehung nicht im Co-Elternschafts-Chat.',
        },
        {
          question: 'Was, wenn wir ein Haustier teilen?',
          answer:
            'Gleiches Prinzip: Übergaben, Tierarztbesuche, wer es diese Woche hat. Keine täglichen Foto-Updates, um nah zu bleiben. Wenn das geteilte Sorgerecht die Wunde immer wieder aufreißt, ist es okay, die Regelung zu überdenken.',
        },
        {
          question: 'Zählt es als Kontakt, ihr Instagram anzusehen?',
          answer:
            'Fürs Heilen meistens ja. Dein Körper reagiert oft gleich, egal ob du schreibst oder scrollst. "Technisch gesehen schreibe ich nicht", während du täglich ihr Profil checkst, ist keine echte Pause.',
        },
        {
          question: 'Ist Funkstille nur ein Trick, um meine Ex-Beziehung zurückzugewinnen?',
          answer:
            'So wird es online oft verkauft. Distanz hilft am meisten, wenn du sie für deine eigene Erholung nimmst, nicht als Taktik, um vermisst zu werden.',
        },
        {
          question: 'Was, wenn ich schon geschrieben habe?',
          answer: 'Notiere, was es ausgelöst hat, und mach weiter. Eine Nachricht bedeutet nicht, dass du wieder bei null bist.',
        },
        {
          question: 'Was, wenn wir vorerst noch zusammenwohnen?',
          answer:
            'Wähle im Test "Wohnen oder Besitz". Beschränke Gespräche auf die Umzugslogistik, bis jemand eine neue Wohnung hat. Das sind vorübergehende, strenge Grenzen, nicht für immer.',
        },
        {
          question: 'Ich fühle mich in der Nähe meiner Ex-Beziehung nicht sicher. Reicht dieser Test?',
          answer:
            'Nein. Wenn du dich nicht sicher fühlst, ist Distanz nicht optional. Hol dir Unterstützung von jemandem, dem du vertraust, oder von einer Fachperson. Dieser Test ist für die unklare Mitte gedacht, nicht für Gefahr.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Testfortschritt',
        stepLabel: (n) => `Frage ${n}`,
      },
      landing: {
        heading: 'Brauchst du komplette Stille, oder einfach weniger Kontakt als jetzt?',
        illustrationAlt: 'Eine Schranke neben einem kurvigen Weg',
        copy:
          'Alle sagen "leg Funkstille ein". Das ist nicht immer realistisch. Wenn ihr Kinder, einen Hund oder eine Wohnung teilt, brauchst du vielleicht stattdessen begrenzten Kontakt: kurz, sachlich, ohne Beziehungsgespräche.',
        followCopy: 'Vier ehrliche Ja-Nein-Fragen. Kein Konto nötig.',
        startButton: 'Test starten',
      },
      constraintPanel: {
        eyebrow: 'Zuerst: deine Situation',
        heading: 'Was verbindet dich noch mit deiner Ex-Beziehung?',
        copy: 'Wähle das, was am ehesten passt. Das ändert nur, welche Fragen du bekommst, nicht ob deine Gefühle zählen.',
        helper:
          'Gemeinsame Freunde zählen nicht als "in Kontakt bleiben müssen". Wenn das dein Hauptgrund ist, wähle Nichts Praktisches.',
      },
      constraints: [
        { id: 'none', label: 'Nichts Praktisches' },
        { id: 'kids', label: 'Kinder oder Co-Elternschaft' },
        { id: 'pets', label: 'Ein gemeinsames Haustier' },
        { id: 'housing', label: 'Wohnung oder Besitz' },
        { id: 'work', label: 'Arbeit oder Schule/Studium' },
        { id: 'other', label: 'Andere organisatorische Dinge' },
      ],
      constraintTips: {
        kids: 'Beschränke dich auf Abholzeiten, Schule und Gesundheit. Kurz und sachlich. Verarbeite die Trennung nicht im Co-Elternschafts-Chat. Heb dir das für eine Freundschaft oder dein Tagebuch auf.',
        pets: 'Nur Übergaben und Tierarzt-Themen. Lass Nachrichten wie "wollte nur sagen, dass sie dich vermisst" weg. Wenn jeder Wechsel dich fertigmacht, schadet das geteilte Sorgerecht vielleicht mehr, als es hilft. Dass eine Person das Tier behält, oder eine Freundschaft die Übergaben übernimmt, ist auch erlaubt.',
        housing: 'Einigt euch auf Zeiten, um Sachen abzuholen. Kein "können wir über uns reden", solange noch jemand auszieht.',
        work: 'Nur berufliche Themen. Kein Chat außerhalb der Arbeitszeit, der eigentlich um euch beide geht.',
        other: 'Geld, rechtliche Fragen, gemeinsame Rechnungen: nur Fakten. Keine zusätzlichen Nachrichten, um die Stille zu füllen.',
      },
      questionsPathA: [
        'Hast du dich in der letzten Woche, nachdem du geschrieben, angerufen oder diese Person gesehen hast, stundenlang schlecht gefühlt, nicht nur ein paar Minuten?',
        'Checkst du ihre Social-Media-Profile, liest alte Nachrichten noch mal, oder fragst gemeinsame Freunde, wie es ihr geht?',
        'Hofft ein Teil von dir insgeheim noch, dass sie ihre Meinung ändert oder zurückkommt?',
        'Wenn du dich meldest, ist es, weil du wirklich etwas brauchst, oder weil dir das Gefühl fehlt, dass sie antwortet?',
      ],
      questionsPathB: [
        'Enden praktische Nachrichten (Abholzeiten, Miete, Übergaben fürs Haustier, Arbeitsthemen) oft in Beziehungsgesprächen oder Streit?',
        'Schreibst du wegen Organisatorischem öfter, als du eigentlich musst?',
        'Spielst du das Gespräch danach im Kopf noch mal durch, checkst ständig auf eine Antwort, oder fühlst dich stundenlang schlecht, nachdem du sie kontaktieren musstest?',
        'Nutzt du "wir müssen uns abstimmen" als Grund, um emotional nah zu bleiben?',
      ],
      questionOf: (current, total) => `Frage ${current} von ${total}`,
      answers: {
        groupLabel: (n) => `Frage ${n} beantworten`,
        yes: 'Ja',
        no: 'Nein',
      },
      results: {
        aMore: {
          imageAlt: 'Ein Smartphone liegt mit dem Display nach unten auf einer texturierten braunen Decke, von oben gesehen',
          heading: 'Du brauchst gerade wahrscheinlich mehr Abstand.',
          paragraphs: [
            'Kontakt, oder Fast-Kontakt, kostet dich etwas. Das ist eine nützliche Erkenntnis, kein Charakterfehler.',
            'Du musst nichts ankündigen oder erklären. Stumm schalten. Hör auf, ihr Profil zu checken. Leg das Handy weg, wenn du "nur mal sehen willst, was sie macht".',
            'Wenn du doch schreibst, notiere, was es ausgelöst hat, und mach weiter. Eine Nachricht löscht deinen Fortschritt nicht.',
            'Distanz funktioniert am besten, wenn du sie für dich nimmst, nicht damit sie dich vermisst.',
          ],
        },
        aOk: {
          imageAlt: 'Ein hölzernes Fenster, weit geöffnet an einer sonnenbeschienenen grünen Wand',
          heading: 'Strikte Funkstille ist vielleicht noch nicht nötig.',
          paragraphs: [
            'Deine Antworten deuten darauf hin, dass Kontakt dich gerade nicht sehr belastet. Das kann sich ändern. Check in einer Woche noch mal bei dir selbst nach.',
            'Bleib ehrlich, warum du dich meldest: Gewohnheit, Hoffnung, oder etwas, das du wirklich brauchst.',
          ],
          friendQuizLink: {
            before: 'Fragst du dich eher wegen Freundschaft? ',
            linkText: 'Mach unseren Freundschaft-mit-Ex-Test',
            href: '/breakup-reset/blog/de/friends-with-ex-quiz/',
            after: 'Jemanden zu vermissen und bereit für Freundschaft zu sein, ist nicht dasselbe.',
          },
        },
        bTighter: {
          imageAlt: 'Ein Smartphone liegt mit dem Display nach unten auf einer texturierten braunen Decke, von oben gesehen',
          heading: 'Du brauchst festere Grenzen beim Kontakt, den du nicht vermeiden kannst.',
          closingParagraphs: [
            'Du musst nicht komplett verstummen. Du brauchst weniger Kontakt als jetzt, mit klareren Grenzen bei Thema und Zeitpunkt.',
            'Antworte, wenn du musst. Nicht, wenn die Einsamkeit drückt.',
          ],
        },
        bOk: {
          imageAlt: 'Ein hölzernes Fenster, weit geöffnet an einer sonnenbeschienenen grünen Wand',
          heading: 'Dein notwendiger Kontakt scheint größtenteils unter Kontrolle.',
          paragraphs: [
            'Du musst dich noch abstimmen, und das heißt nicht, dass du beim Heilen versagst. Das ist die schwerere Version von Distanz: funktional, nicht romantisch.',
            'Halte Nachrichten sachlich. Wenn ein Gespräch Richtung Beziehung abdriftet, beende es.',
            'Wenn Übergaben oder Arbeitschats dich stundenlang schlecht fühlen lassen, komm hierher zurück und zieh die Grenzen enger. Du kannst unterwegs anpassen.',
          ],
        },
      },
      cta: {
        headingPathA: 'Versuchst du, Abstand zwischen dir und deiner Ex-Beziehung zu schaffen?',
        headingPathB: 'Versuchst du, dass Organisatorisches nicht in Herzschmerz umschlägt?',
        copy:
          'Breakup Reset hilft dir, Funkstille im Blick zu behalten, mit dir selbst einzuchecken und ein privates Tagebuch zu führen. Kostenlos.',
        button: 'Breakup Reset kostenlos herunterladen',
      },
      announce: {
        pickConstraint: 'Wähle, was dich noch mit deiner Ex-Beziehung verbindet.',
        gotItFourQuestions: 'Verstanden. Jetzt vier Fragen.',
        question: (n, total) => `Frage ${n} von ${total}`,
        resultAMore: 'Ergebnis: Du brauchst gerade wahrscheinlich mehr Abstand.',
        resultAOk: 'Ergebnis: Strikte Funkstille ist vielleicht noch nicht nötig.',
        resultBTighter: 'Ergebnis: Du brauchst festere Grenzen beim notwendigen Kontakt.',
        resultBOk: 'Ergebnis: Dein notwendiger Kontakt scheint größtenteils unter Kontrolle.',
      },
      related: {
        heading: 'Weitere Tests für dich',
        items: [
          {
            href: '/breakup-reset/blog/de/friends-with-ex-quiz/',
            title: 'Können wir nach der Trennung befreundet bleiben? Kostenloser Test',
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
    const title = 'Czy muszę zerwać kontakt z eks? Darmowy test';
    return {
      locale,
      title,
      description:
        'Nie wiesz, czy potrzebujesz całkowitej ciszy, czy tylko mocniejszych granic? Cztery szybkie pytania, także jeśli macie wspólne dzieci, zwierzę albo mieszkanie.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Krótki test sprawdzający, czy potrzebujesz pełnego braku kontaktu, ściślejszego ograniczonego kontaktu, czy po prostu mniej kontaktu niż teraz — również przy rozstaniach z dziećmi, zwierzętami albo wspólnymi sprawami.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/should-you-do-no-contact.jpg',
        width: 1200,
        height: 800,
        alt: 'Widok z lotu ptaka na osobę stojącą na rozwidleniu leśnej ścieżki',
      },
      faqItems: [
        {
          question: 'Czy każdy powinien stosować zero kontaktu po rozstaniu?',
          answer:
            'Nie. Dla wielu osób wystarczy mniej kontaktu. Jeśli macie wspólne dzieci, pracę albo mieszkanie, pełna cisza może być nierealna. Celem zwykle jest mniej kontaktu niż teraz, z jaśniejszymi granicami tego, gdzie kontakt musi zostać.',
        },
        {
          question: 'Czy mogę stosować brak kontaktu, jeśli mamy dzieci?',
          answer:
            'Nie możesz zniknąć, ale możesz ograniczyć kontakt do spraw praktycznych. Odbiory, szkoła, zdrowie. Krótko. Nie przerabiaj związku na czacie o opiece nad dziećmi.',
        },
        {
          question: 'A co, jeśli mamy wspólne zwierzę?',
          answer:
            'Ta sama zasada: przekazania, wizyty u weterynarza, kto ma je w tym tygodniu. Bez codziennych zdjęć, żeby zostać blisko. Jeśli wspólna opieka wciąż otwiera ranę, można zmienić ustalenia.',
        },
        {
          question: 'Czy sprawdzanie jej Instagrama liczy się jako kontakt?',
          answer:
            'Dla procesu gojenia zwykle tak. Twoje ciało często reaguje tak samo, czy piszesz, czy przeglądasz profil. „Technicznie nie piszę" przy codziennym sprawdzaniu profilu to niewielki odpoczynek.',
        },
        {
          question: 'Czy brak kontaktu to tylko sztuczka, żeby odzyskać byłego partnera?',
          answer:
            'Tak to bywa sprzedawane w internecie. Dystans pomaga najbardziej, gdy robisz go dla własnego powrotu do siebie, a nie jako taktykę, żeby za Tobą tęsknił.',
        },
        {
          question: 'A jeśli już do niego napisałam/napisałem?',
          answer: 'Zanotuj, co to wywołało, i idź dalej. Jedna wiadomość nie oznacza, że zaczynasz od zera.',
        },
        {
          question: 'A jeśli na razie wciąż mieszkamy razem?',
          answer:
            'Wybierz w teście „Mieszkanie lub rzeczy". Ogranicz rozmowy do logistyki przeprowadzki, dopóki ktoś nie znajdzie nowego miejsca. To tymczasowe, ścisłe granice, nie na zawsze.',
        },
        {
          question: 'Nie czuję się bezpiecznie przy moim byłym partnerze. Czy ten test wystarczy?',
          answer:
            'Nie. Jeśli nie czujesz się bezpiecznie, dystans nie jest opcjonalny. Poszukaj wsparcia u kogoś zaufanego albo specjalisty. Ten test jest na trudny środek, nie na niebezpieczeństwo.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Postęp testu',
        stepLabel: (n) => `Pytanie ${n}`,
      },
      landing: {
        heading: 'Potrzebujesz pełnej ciszy, czy po prostu mniej kontaktu niż teraz?',
        illustrationAlt: 'Szlaban obok krętej ścieżki',
        copy:
          'Wszyscy mówią „zastosuj zero kontaktu”. To nie zawsze jest realne. Jeśli macie wspólne dzieci, psa albo mieszkanie, możesz zamiast tego potrzebować ograniczonego kontaktu: krótkiego, praktycznego, bez rozmów o związku.',
        followCopy: 'Cztery szczere pytania tak/nie. Konto nie jest potrzebne.',
        startButton: 'Zacznij test',
      },
      constraintPanel: {
        eyebrow: 'Najpierw Twoja sytuacja',
        heading: 'Co wciąż łączy Cię z byłym partnerem?',
        copy: 'Wybierz najbliższą opcję. To zmienia tylko to, jakie pytania dostaniesz, a nie to, czy Twoje uczucia się liczą.',
        helper:
          'Wspólni znajomi nie liczą się jako „konieczność bycia w kontakcie”. Jeśli to Twój główny powód, wybierz Nic praktycznego.',
      },
      constraints: [
        { id: 'none', label: 'Nic praktycznego' },
        { id: 'kids', label: 'Dzieci lub wspólna opieka' },
        { id: 'pets', label: 'Wspólne zwierzę' },
        { id: 'housing', label: 'Mieszkanie lub rzeczy' },
        { id: 'work', label: 'Praca lub szkoła' },
        { id: 'other', label: 'Inne sprawy logistyczne' },
      ],
      constraintTips: {
        kids: 'Ogranicz się do odbiorów, szkoły i zdrowia. Krótko i praktycznie. Nie przerabiaj rozstania na czacie o opiece nad dziećmi. Zostaw to na rozmowę z zaufaną osobą albo do dziennika.',
        pets: 'Tylko przekazania i sprawy weterynaryjne. Pomiń wiadomości typu „chciałam tylko powiedzieć, że tęskni”. Jeśli każda wymiana Cię wykańcza, wspólna opieka może szkodzić bardziej, niż pomagać. To, że jedna osoba zatrzyma zwierzę, albo że przekazaniami zajmie się zaufana osoba, też jest w porządku.',
        housing: 'Ustalcie godziny na odbiór rzeczy. Żadnego „możemy porozmawiać o nas”, dopóki ktoś się jeszcze wyprowadza.',
        work: 'Tylko sprawy zawodowe. Bez rozmów po godzinach, które tak naprawdę dotyczą was dwojga.',
        other: 'Pieniądze, sprawy prawne, wspólne rachunki — same fakty. Bez dodatkowych wiadomości, żeby wypełnić ciszę.',
      },
      questionsPathA: [
        'Czy kontakt z byłym partnerem w tym tygodniu — wiadomość, telefon czy spotkanie — zostawia Cię gorzej przez długie godziny, a nie tylko na kilka minut?',
        'Sprawdzasz jej media społecznościowe, wracasz do starych wiadomości albo pytasz wspólnych znajomych, co u niej słychać?',
        'Czy część Ciebie wciąż ma nadzieję, że zmieni zdanie i wróci?',
        'Kiedy się odzywasz, robisz to, bo naprawdę czegoś potrzebujesz, czy dlatego, że brakuje Ci tego, że odpisuje?',
      ],
      questionsPathB: [
        'Czy praktyczne wiadomości (godziny odbioru, czynsz, przekazania zwierzęcia, sprawy zawodowe) często kończą się rozmową o związku albo kłótnią?',
        'Piszesz do niej w sprawach logistycznych częściej, niż naprawdę musisz?',
        'Po konieczności skontaktowania się, odtwarzasz rozmowę w głowie, sprawdzasz, czy odpisała, albo czujesz się gorzej przez długie godziny?',
        'Używasz „musimy się dogadać” jako wymówki, żeby zostać emocjonalnie blisko?',
      ],
      questionOf: (current, total) => `Pytanie ${current} z ${total}`,
      answers: {
        groupLabel: (n) => `Odpowiedz na pytanie ${n}`,
        yes: 'Tak',
        no: 'Nie',
      },
      results: {
        aMore: {
          imageAlt: 'Telefon leżący ekranem w dół na fakturowanym brązowym kocu, widok z góry',
          heading: 'Prawdopodobnie potrzebujesz teraz więcej dystansu.',
          paragraphs: [
            'Kontakt, albo prawie-kontakt, sporo Cię kosztuje. To przydatna informacja, nie wada charakteru.',
            'Nie musisz niczego ogłaszać ani tłumaczyć się. Wycisz jej powiadomienia. Przestań sprawdzać jej profil. Odłóż telefon, gdy chcesz „tylko zobaczyć, co u niej”.',
            'Jeśli się poślizgniesz i napiszesz, zanotuj, co to wywołało, i idź dalej. Jedna wiadomość nie kasuje Twoich postępów.',
            'Dystans działa najlepiej, gdy robisz go dla siebie, a nie po to, żeby za Tobą tęskniła.',
          ],
        },
        aOk: {
          imageAlt: 'Drewniane okno otwarte na nasłonecznionej zielonej ścianie',
          heading: 'Ścisły brak kontaktu może nie być jeszcze konieczny.',
          paragraphs: [
            'Twoje odpowiedzi sugerują, że kontakt na razie mocno Cię nie rujnuje. To może się zmienić. Sprawdź, jak się czujesz, za tydzień.',
            'Bądź szczery/szczera co do powodu, dla którego się odzywasz: przyzwyczajenie, nadzieja czy coś, czego naprawdę potrzebujesz.',
          ],
          friendQuizLink: {
            before: 'Zastanawiasz się raczej nad przyjaźnią? ',
            linkText: 'Zrób nasz test o przyjaźni z eks',
            href: '/breakup-reset/blog/pl/friends-with-ex-quiz/',
            after: 'Tęsknota za kimś i gotowość na przyjaźń to nie to samo.',
          },
        },
        bTighter: {
          imageAlt: 'Telefon leżący ekranem w dół na fakturowanym brązowym kocu, widok z góry',
          heading: 'Potrzebujesz mocniejszych granic w kontakcie, którego nie da się uniknąć.',
          closingParagraphs: [
            'Nie musisz całkowicie zamilknąć. Potrzebujesz mniej kontaktu niż teraz, z jaśniejszymi granicami co do tematu i momentu.',
            'Odpisuj, kiedy musisz. Nie wtedy, gdy dopada Cię samotność.',
          ],
        },
        bOk: {
          imageAlt: 'Drewniane okno otwarte na nasłonecznionej zielonej ścianie',
          heading: 'Twój konieczny kontakt wygląda na dość dobrze opanowany.',
          paragraphs: [
            'Nadal musicie się dogadywać, i to nie znaczy, że zawodzisz w procesie dochodzenia do siebie. To trudniejsza wersja dystansu: funkcjonalna, nie romantyczna.',
            'Trzymaj wiadomości praktyczne. Jeśli rozmowa zaczyna schodzić w stronę związku, zamknij ją.',
            'Jeśli przekazania albo rozmowy o pracy zaczynają zostawiać Cię gorzej na długie godziny, wróć tutaj i zaostrz granice. Możesz dostosowywać to na bieżąco.',
          ],
        },
      },
      cta: {
        headingPathA: 'Próbujesz zbudować dystans między sobą a byłym partnerem?',
        headingPathB: 'Próbujesz nie dopuścić, żeby logistyka zamieniła się w ból?',
        copy:
          'Breakup Reset pomaga pilnować braku kontaktu, robić check-iny ze sobą i prowadzić prywatny dziennik. To za darmo.',
        button: 'Pobierz Breakup Reset za darmo',
      },
      announce: {
        pickConstraint: 'Wybierz, co wciąż łączy Cię z byłym partnerem.',
        gotItFourQuestions: 'Zrozumiano. Teraz cztery pytania.',
        question: (n, total) => `Pytanie ${n} z ${total}`,
        resultAMore: 'Wynik: prawdopodobnie potrzebujesz teraz więcej dystansu.',
        resultAOk: 'Wynik: ścisły brak kontaktu może nie być jeszcze konieczny.',
        resultBTighter: 'Wynik: potrzebujesz mocniejszych granic w koniecznym kontakcie.',
        resultBOk: 'Wynik: Twój konieczny kontakt wygląda na dość dobrze opanowany.',
      },
      related: {
        heading: 'Więcej testów dla Ciebie',
        items: [
          {
            href: '/breakup-reset/blog/pl/friends-with-ex-quiz/',
            title: 'Czy mogę już przyjaźnić się z eks? Darmowy test',
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
    const title = 'Devo cortar contato com o ex? Teste grátis';
    return {
      locale,
      title,
      description:
        'Não sabe se precisa de silêncio total ou só de limites mais firmes? Quatro perguntas rápidas, mesmo que vocês tenham filhos, um pet ou aluguel juntos.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Um teste rápido para saber se você precisa de contato zero completo, contato limitado mais rígido, ou só menos contato do que tem agora — incluindo términos com filhos, pets ou assuntos em comum.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/should-you-do-no-contact.jpg',
        width: 1200,
        height: 800,
        alt: 'Vista aérea de uma pessoa parada numa bifurcação de trilha na floresta',
      },
      faqItems: [
        {
          question: 'Todo mundo deveria cortar contato depois de um término?',
          answer:
            'Não. Para muita gente, menos contato já ajuda. Se vocês têm filhos, trabalho ou aluguel juntos, silêncio total pode não ser realista. O objetivo costuma ser ter menos contato do que agora, com limites mais claros de onde o contato precisa ficar.',
        },
        {
          question: 'Dá pra cortar contato se a gente tem filhos?',
          answer:
            'Você não pode sumir, mas pode manter o contato só no essencial. Horário de buscar, escola, saúde. Curto e direto. Não resolva questões do relacionamento no grupo de coparentalidade.',
        },
        {
          question: 'E se a gente tem um pet junto?',
          answer:
            'Mesma lógica: entregas, idas ao veterinário, quem fica com ele essa semana. Nada de fotos diárias só pra ficar por perto. Se a guarda compartilhada continua reabrindo a ferida, tudo bem repensar o arranjo.',
        },
        {
          question: 'Ver o Instagram dele conta como contato?',
          answer:
            'Para a cura, geralmente sim. Seu corpo costuma reagir do mesmo jeito, seja mandando mensagem ou só espiando o perfil. "Tecnicamente não mandei mensagem" enquanto checa o perfil todo dia não é bem uma pausa.',
        },
        {
          question: 'Cortar contato é só uma estratégia pra reconquistar meu ex?',
          answer:
            'É assim que costuma ser vendido por aí. A distância ajuda mais quando você faz isso pela sua própria recuperação, não como tática pra fazer ele sentir sua falta.',
        },
        {
          question: 'E se eu já mandei mensagem?',
          answer: 'Anote o que motivou isso e siga em frente. Uma mensagem não significa que você voltou à estaca zero.',
        },
        {
          question: 'E se a gente ainda mora junto por enquanto?',
          answer:
            'Escolha "Moradia ou pertences" no teste. Mantenha as conversas só na logística da mudança até alguém achar um novo lugar. São limites rígidos temporários, não pra sempre.',
        },
        {
          question: 'Não me sinto seguro perto do meu ex. Esse teste é suficiente?',
          answer:
            'Não. Se você não se sente seguro, distância não é opcional. Busque apoio de alguém de confiança ou de um profissional. Esse teste é para o meio-termo incômodo, não para o perigo.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progresso do teste',
        stepLabel: (n) => `Pergunta ${n}`,
      },
      landing: {
        heading: 'Você precisa de silêncio total, ou só de menos contato do que tem agora?',
        illustrationAlt: 'Uma cancela ao lado de um caminho sinuoso',
        copy:
          'Todo mundo fala "corte contato". Isso nem sempre é realista. Se vocês têm filhos, um cachorro ou aluguel juntos, talvez você precise de contato limitado: curto, prático, sem falar do relacionamento.',
        followCopy: 'Quatro perguntas sinceras de sim ou não. Sem precisar criar conta.',
        startButton: 'Começar o teste',
      },
      constraintPanel: {
        eyebrow: 'Primeiro, sua situação',
        heading: 'O que ainda te liga ao seu ex?',
        copy: 'Escolha a opção mais parecida com a sua. Isso só muda quais perguntas você recebe, não se os seus sentimentos importam.',
        helper:
          'Amigos em comum não contam como "ter que ficar em contato". Se esse for o seu principal motivo, escolha Nada prático.',
      },
      constraints: [
        { id: 'none', label: 'Nada prático' },
        { id: 'kids', label: 'Filhos ou coparentalidade' },
        { id: 'pets', label: 'Um pet em comum' },
        { id: 'housing', label: 'Moradia ou pertences' },
        { id: 'work', label: 'Trabalho ou estudos' },
        { id: 'other', label: 'Outros assuntos práticos' },
      ],
      constraintTips: {
        kids: 'Mantenha só em horários de busca, escola e saúde. Curto e prático. Não processe o término no grupo de coparentalidade. Guarde isso para um amigo ou seu diário.',
        pets: 'Só entregas e assuntos do veterinário. Evite mensagens tipo "só queria dizer que ele sente sua falta". Se toda troca te deixa arrasado, a guarda compartilhada pode estar fazendo mais mal do que bem. Uma pessoa ficar com o pet, ou alguém de confiança cuidar das entregas, também é uma opção válida.',
        housing: 'Combinem horários para pegar suas coisas. Nada de "podemos falar sobre nós" enquanto alguém ainda está se mudando.',
        work: 'Só assuntos de trabalho. Nada de conversa fora do horário que na verdade é sobre vocês dois.',
        other: 'Dinheiro, questões legais, contas em comum: só fatos. Sem mensagens extras para preencher o silêncio.',
      },
      questionsPathA: [
        'Na última semana, depois de mandar mensagem, ligar ou ver essa pessoa, você se sentiu mal por horas, não só por alguns minutos?',
        'Você fica checando as redes sociais dela, relendo mensagens antigas, ou perguntando pra amigos em comum como ela está?',
        'No fundo, alguma parte de você ainda espera que ela mude de ideia ou volte?',
        'Quando você manda mensagem, é porque realmente precisa de algo, ou porque sente falta da sensação de receber uma resposta?',
      ],
      questionsPathB: [
        'As mensagens práticas (horário de busca, aluguel, entrega do pet, assuntos de trabalho) costumam virar conversa sobre o relacionamento ou discussão?',
        'Você manda mensagem sobre logística com mais frequência do que realmente precisa?',
        'Depois de precisar entrar em contato, você fica repassando a conversa na cabeça, checando se ela respondeu, ou se sentindo mal por horas?',
        'Você usa "a gente precisa se organizar" como desculpa para continuar emocionalmente perto?',
      ],
      questionOf: (current, total) => `Pergunta ${current} de ${total}`,
      answers: {
        groupLabel: (n) => `Responder pergunta ${n}`,
        yes: 'Sim',
        no: 'Não',
      },
      results: {
        aMore: {
          imageAlt: 'Um celular virado de tela para baixo sobre uma manta marrom texturizada, visto de cima',
          heading: 'Você provavelmente precisa de mais distância agora.',
          paragraphs: [
            'O contato, ou o quase-contato, está te custando caro. Isso é uma informação útil, não um defeito de caráter.',
            'Você não precisa anunciar nada nem se justificar. Silencie as notificações dela. Pare de checar o perfil. Largue o celular quando quiser "só ver o que ela anda fazendo".',
            'Se você escorregar e mandar mensagem, anote o que motivou isso e siga em frente. Uma mensagem não apaga seu progresso.',
            'A distância funciona melhor quando você faz isso por você, não pra fazer ela sentir sua falta.',
          ],
        },
        aOk: {
          imageAlt: 'Uma janela de madeira aberta em uma parede verde iluminada pelo sol',
          heading: 'Contato zero rígido talvez ainda não seja necessário.',
          paragraphs: [
            'Suas respostas sugerem que o contato não está te destruindo agora. Isso pode mudar. Reavalie como você está se sentindo daqui a uma semana.',
            'Seja honesto sobre por que você está entrando em contato: hábito, esperança, ou algo que você realmente precisa.',
          ],
          friendQuizLink: {
            before: 'Está mais em dúvida sobre a amizade? ',
            linkText: 'Faça nosso teste de amizade com o ex',
            href: '/breakup-reset/blog/pt/friends-with-ex-quiz/',
            after: 'Sentir saudade de alguém e estar pronto para a amizade não é a mesma coisa.',
          },
        },
        bTighter: {
          imageAlt: 'Um celular virado de tela para baixo sobre uma manta marrom texturizada, visto de cima',
          heading: 'Você precisa de limites mais firmes no contato que não dá pra evitar.',
          closingParagraphs: [
            'Você não precisa ficar em silêncio total. Precisa de menos contato do que tem agora, com limites mais claros de assunto e momento.',
            'Responda quando precisar. Não quando a solidão apertar.',
          ],
        },
        bOk: {
          imageAlt: 'Uma janela de madeira aberta em uma parede verde iluminada pelo sol',
          heading: 'Seu contato necessário parece bem sob controle.',
          paragraphs: [
            'Vocês ainda precisam se organizar, e isso não significa que você está falhando na sua cura. Essa é a versão mais difícil da distância: funcional, não romântica.',
            'Mantenha as mensagens práticas. Se uma conversa começar a desviar para o relacionamento, encerre.',
            'Se as entregas ou conversas de trabalho começarem a te deixar mal por horas, volte aqui e aperte os limites. Você pode ir ajustando aos poucos.',
          ],
        },
      },
      cta: {
        headingPathA: 'Tentando criar distância entre você e seu ex?',
        headingPathB: 'Tentando não deixar a logística virar sofrimento?',
        copy:
          'O Breakup Reset te ajuda a acompanhar o contato zero, fazer check-ins com você mesmo e manter um diário privado. É de graça.',
        button: 'Baixar o Breakup Reset de graça',
      },
      announce: {
        pickConstraint: 'Escolha o que ainda te liga ao seu ex.',
        gotItFourQuestions: 'Entendido. Agora, quatro perguntas.',
        question: (n, total) => `Pergunta ${n} de ${total}`,
        resultAMore: 'Resultado: você provavelmente precisa de mais distância agora.',
        resultAOk: 'Resultado: contato zero rígido talvez ainda não seja necessário.',
        resultBTighter: 'Resultado: você precisa de limites mais firmes no contato necessário.',
        resultBOk: 'Resultado: seu contato necessário parece bem sob controle.',
      },
      related: {
        heading: 'Mais testes para você',
        items: [
          {
            href: '/breakup-reset/blog/pt/friends-with-ex-quiz/',
            title: 'Ainda dá pra ter amizade com o ex? Teste grátis',
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
    title: 'Should I Do No Contact? Free Quiz',
    description:
      'Not sure if you need full silence or just tighter boundaries? Four quick questions, including if you share kids, a pet, or a lease.',
    ogTitle: 'Should I Do No Contact? Free Quiz | Breakup Reset',
    schemaName: 'Should I Do No Contact? Free Quiz',
    schemaDescription:
      'A short quiz to see whether you need full no contact, tighter low contact, or less contact than you have now, including breakups with kids, pets, or shared logistics.',
    pagePath,
    pageUrl,
    downloadUrl,
    ogImage: {
      src: '/breakup-reset/blog/covers/should-you-do-no-contact.jpg',
      width: 1200,
      height: 800,
      alt: 'Aerial view of a person standing at a fork in a forest path',
    },
    faqItems: [
      {
        question: 'Should everyone do no contact after a breakup?',
        answer:
          'No. For a lot of people, less contact helps. If you share kids, a workplace, or a lease, full silence may not be realistic. The goal is usually less contact than you have now, with clearer boundaries where contact has to stay.',
      },
      {
        question: 'Can I do no contact if we have kids?',
        answer:
          'You cannot vanish, but you can do logistics-only contact. Pickup times, school, health. Keep it short. Do not work through the relationship in the co-parenting chat.',
      },
      {
        question: 'What if we share a pet?',
        answer:
          'Same idea: handoffs, vet visits, who has them this week. Not daily photo updates to stay close. If shared custody keeps reopening the wound, it is okay to rethink the arrangement.',
      },
      {
        question: 'Does checking their Instagram count as contact?',
        answer:
          'For healing, usually yes. Your body often reacts the same whether you text or scroll. "Technically not messaging" while checking their profile every day is not much of a break.',
      },
      {
        question: 'Is no contact just a trick to get my ex back?',
        answer:
          'That is how it gets sold online. Distance helps most when you are doing it for your own recovery, not as a tactic to make them miss you.',
      },
      {
        question: 'What if I already texted them?',
        answer:
          'Note what triggered it and keep going. One message does not mean you are back at zero.',
      },
      {
        question: 'What if we still live together for now?',
        answer:
          'Pick Housing or belongings in the quiz. Keep talk to move-out logistics until someone has a new place. It is temporary tight boundaries, not forever.',
      },
      {
        question: 'I do not feel safe around my ex. Is this quiz enough?',
        answer:
          'No. If you do not feel safe, distance is not optional. Get support from someone you trust or a professional. This quiz is for the messy middle, not danger.',
      },
    ],
    heading: 'Should I Do No Contact? Free Quiz',
    progress: {
      ariaLabel: 'Quiz progress',
      stepLabel: (n) => `Question ${n}`,
    },
    landing: {
      heading: 'Do you need full silence, or just less contact than you have now?',
      illustrationAlt: 'A barrier gate beside a winding path',
      copy:
        'Everyone says "go no contact." That is not always realistic. If you share kids, a dog, or a lease, you may need low contact instead: short, practical, no relationship talk.',
      followCopy: 'Four honest yes-or-no questions. No account needed.',
      startButton: 'Start the quiz',
    },
    constraintPanel: {
      eyebrow: 'First, your situation',
      heading: 'What still ties you to your ex?',
      copy: 'Pick the closest match. This only changes which questions you get, not whether your feelings count.',
      helper:
        'Mutual friends do not count as "having to stay in touch." If that is your main tie, pick Nothing practical.',
    },
    constraints: [
      { id: 'none', label: 'Nothing practical' },
      { id: 'kids', label: 'Kids or co-parenting' },
      { id: 'pets', label: 'A shared pet' },
      { id: 'housing', label: 'Housing or belongings' },
      { id: 'work', label: 'Work or school' },
      { id: 'other', label: 'Other logistics' },
    ],
    constraintTips: {
      kids: 'Keep it to pickups, school, and health. Brief and practical. Do not process the breakup in the co-parenting thread. Save that for a friend or your journal.',
      pets: 'Handoffs and vet stuff only. Skip the "just wanted to say they miss you" texts. If every swap leaves you gutted, shared custody might be hurting you more than helping. One person keeping the pet, or a friend handling handoffs, is allowed.',
      housing:
        'Agree times to grab your things. No "can we talk about us" while someone is still moving out.',
      work: 'Work scope only. No after-hours chat that is really about the two of you.',
      other: 'Money, legal, shared bills: facts only. No extra messages to fill the silence.',
    },
    questionsPathA: [
      'In the past week, after you texted, called, or saw them, did you feel worse for hours, not just a few minutes?',
      'Do you check their socials, reread old messages, or ask mutual friends how they are doing?',
      'Is part of you still hoping they will change their mind or come back?',
      'When you reach out, is it usually because you miss the feeling of them replying, not because you actually need something?',
    ],
    questionsPathB: [
      'Do practical messages (pickup times, rent, pet handoffs, work stuff) often turn into relationship talk or arguments?',
      'Do you message them about logistics more often than you really need to?',
      'After you have to contact them, do you replay the conversation, refresh for a reply, or feel worse for hours?',
      'Are you using "we have to coordinate" as a reason to stay emotionally close?',
    ],
    questionOf: (current, total) => `Question ${current} of ${total}`,
    answers: {
      groupLabel: (n) => `Answer question ${n}`,
      yes: 'Yes',
      no: 'No',
    },
    results: {
      aMore: {
        imageAlt: 'A smartphone lying face-down on a textured brown blanket, seen from above',
        heading: 'You probably need more distance right now.',
        paragraphs: [
          'Contact, or almost-contact, is costing you. That is useful information, not a character flaw.',
          'You do not have to announce anything or make a speech. Mute their notifications. Stop checking their profile. Put the phone down when you want to "just see what they are up to."',
          'If you slip and text them, note what set it off and keep going. One message does not erase your progress.',
          'Distance works best when you are doing it for you, not to make them miss you.',
        ],
      },
      aOk: {
        imageAlt: 'A wooden window swung open on a sunlit green wall',
        heading: 'Strict no contact might not be necessary yet.',
        paragraphs: [
          'Your answers suggest contact is not wrecking you right now. That can change. Check back in with yourself in a week.',
          'Stay honest about why you are reaching out: habit, hope, or something you actually need.',
        ],
        friendQuizLink: {
          before: 'Wondering about friendship instead? ',
          linkText: 'Take our friends-with-ex quiz',
          href: '/breakup-reset/blog/en/friends-with-ex-quiz/',
          after: '. Missing someone and being ready for friendship are not the same thing.',
        },
      },
      bTighter: {
        imageAlt: 'A smartphone lying face-down on a textured brown blanket, seen from above',
        heading: 'You need tighter boundaries on the contact you cannot avoid.',
        closingParagraphs: [
          'You do not have to go fully silent. You need less contact than you have now, with clearer limits on topic and timing.',
          'Reply when you have to. Not when you are lonely.',
        ],
      },
      bOk: {
        imageAlt: 'A wooden window swung open on a sunlit green wall',
        heading: 'Your necessary contact sounds mostly under control.',
        paragraphs: [
          'You still have to coordinate, and you are not failing at healing because of that. This is the harder version of distance: functional, not romantic.',
          'Keep messages practical. If a thread starts drifting into the relationship, close it.',
          'If handoffs or work chats start leaving you worse for hours, come back and tighten up. You can adjust as you go.',
        ],
      },
    },
    cta: {
      headingPathA: 'Trying to put space between you and your ex?',
      headingPathB: 'Trying to keep logistics from turning into heartbreak?',
      copy: 'Breakup Reset helps you track no-contact, check in with yourself, and keep a private journal. It is free.',
      button: 'Download Breakup Reset for Free',
    },
    announce: {
      pickConstraint: 'Pick what still ties you to your ex.',
      gotItFourQuestions: 'Got it. Four questions next.',
      question: (n, total) => `Question ${n} of ${total}`,
      resultAMore: 'Result: you probably need more distance right now.',
      resultAOk: 'Result: strict no contact might not be necessary yet.',
      resultBTighter: 'Result: you need tighter boundaries on necessary contact.',
      resultBOk: 'Result: your necessary contact sounds mostly under control.',
    },
    related: {
      heading: 'More to read',
      items: [
        {
          href: '/breakup-reset/blog/en/should-you-do-no-contact/',
          title: 'Should You Do No Contact? An Honest Guide for When You Are Not Sure',
        },
        {
          href: '/breakup-reset/blog/en/no-contact-after-breakup/',
          title: "No Contact After a Breakup: What It Does (and What It Doesn't)",
        },
        {
          href: '/breakup-reset/blog/en/keeping-no-contact-after-breakup/',
          title: 'Why Keeping No Contact Feels So Hard',
        },
        {
          href: '/breakup-reset/blog/en/friends-with-ex-quiz/',
          title: 'Am I Ready To Be Friends with My Ex? Free Quiz',
        },
      ],
      footerLabel: 'Back to blog',
      footerHref: '/breakup-reset/blog/en/',
    },
  };
}
