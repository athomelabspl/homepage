import { getBreakupDownloadUrl, storePlacements } from '../../utils/storeLinks';
import type { QuizFaqItem, QuizLocale, QuizRelatedSection } from './shared';

export interface QuizConstraintOption {
  id: string;
  label: string;
}

export interface ReadyToDateQuizCopy {
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
  question4ByConstraint: Record<string, string>;
  questionsShared: string[];
  questionOf: (current: number, total: number) => string;
  answers: {
    groupLabel: (n: number) => string;
    yes: string;
    no: string;
  };
  results: {
    slowDown: {
      imageAlt: string;
      heading: string;
      introParagraphs: string[];
      closingParagraph: string;
    };
    goSlow: {
      heading: string;
      introParagraphs: string[];
      closingParagraph: string;
    };
    ready: { imageAlt: string; heading: string; paragraphs: string[] };
  };
  slowDownTips: Record<string, string>;
  goSlowFreshTip: string;
  cta: {
    tierSlowDown: string;
    tierGoSlow: string;
    tierReady: string;
    copy: string;
    button: string;
  };
  announce: {
    pickWhereAreYou: string;
    gotItFourQuestions: string;
    question: (n: number, total: number) => string;
    resultSlowDown: string;
    resultGoSlow: string;
    resultReady: string;
  };
  related: QuizRelatedSection;
}

const landingIllustration = {
  src: '/breakup-reset/quiz/ready-to-date-again-quiz-landing.png',
  width: 180,
  height: 296,
};

const resultImages = {
  slowDown: {
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

export const readyToDateImages = { landingIllustration, resultImages };

export function getReadyToDateQuizCopy(locale: QuizLocale): ReadyToDateQuizCopy {
  const pagePath = `/breakup-reset/blog/${locale}/ready-to-date-again-quiz/`;
  const pageUrl = `https://athomelabs.eu${pagePath}`;
  const downloadUrl = getBreakupDownloadUrl(storePlacements.quizReadyToDate);

  if (locale === 'es') {
    const title = '¿Es buen momento para volver a salir con alguien? Test gratis';
    return {
      locale,
      title,
      description:
        'Sin la regla de los tres meses. Cuatro preguntas rápidas para saber si quieres conocer a alguien nuevo, o solo escapar de extrañar a tu ex. Funciona si todavía tienes esperanzas, compartes la crianza, o ya conociste a alguien.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Un test breve para saber si quieres conocer a alguien nuevo o si sobre todo estás tratando de no sentir lo que sientes por tu ex. Incluye rupturas en las que todavía tienes esperanzas, compartes la crianza, o ya conociste a alguien.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/getting-over-a-breakup.jpg',
        width: 1200,
        height: 800,
        alt: 'Una persona sentada sola en una banca mirando hacia una avenida bordeada de robles',
      },
      faqItems: [
        {
          question: '¿Existe un tiempo correcto para esperar antes de volver a salir con alguien?',
          answer:
            'No hay un número que funcione para todos. Algunas personas necesitan meses. Otras se sienten bien antes. Lo que importa más es por qué quieres salir con alguien: curiosidad por conocer a alguien nuevo, o escapar de extrañar a tu ex.',
        },
        {
          question: '¿Las relaciones de rebote siempre son mala idea?',
          answer:
            'No siempre. Para algunas personas, volver a salir les ayuda a sentirse ellas mismas y a pensar menos en su ex. Para otras, es una forma de evitar un duelo que las alcanza después. Este test trata de identificar en cuál de esos grupos podrías estar ahora mismo.',
        },
        {
          question: '¿Puedo salir con alguien si todavía extraño a mi ex?',
          answer:
            'Extrañar a alguien no significa automáticamente que debas parar. Significa prestar atención a si ese extrañar todavía guía tus decisiones: a quién le das like, con quién comparas, si esperas que te vean.',
        },
        {
          question: '¿Y si todavía tengo esperanzas de que volvamos?',
          answer:
            'Esa esperanza es humana. Salir con alguien mientras la sostienes suele mantenerte en pausa. Puedes querer que vuelva y aun así elegir esperar antes de volver a salir hasta que sepas lo que quieres por tu cuenta.',
        },
        {
          question: '¿Puedo salir con alguien mientras comparto la crianza o sigo en contacto con mi ex?',
          answer:
            'Sí. Mucha gente lo hace. Ayuda mantener la logística separada del romance, y hablar con honestidad con las nuevas parejas cuando llegue el momento. No necesitas que tu ex desaparezca por completo de tu vida. Sí necesitas que deje de ser el protagonista en tu cabeza.',
        },
        {
          question: 'Ya estoy saliendo con alguien. ¿Debería hacer este test?',
          answer:
            'Sí. La pregunta justa es si estás actuando con honestidad contigo y con esa persona sobre cuánto de tu corazón sigue en otro lado.',
        },
        {
          question: '¿Y si me sentía bien hasta que supe que mi ex está saliendo con alguien?',
          answer:
            'Eso puede doler incluso cuando te está yendo bien. Un mal día no borra el progreso. Si te destroza por días y cambia todas tus decisiones, vale la pena prestarle atención.',
        },
        {
          question: 'No me siento a salvo cerca de mi ex. ¿Este test es suficiente?',
          answer:
            'No. Si no te sientes a salvo, enfócate en el apoyo de personas de confianza o de un profesional. Este test es para el punto medio incómodo, no para el peligro.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progreso del test',
        stepLabel: (n) => `Pregunta ${n}`,
      },
      landing: {
        heading: '¿Quieres conocer a alguien nuevo, o solo te pesa la soledad?',
        illustrationAlt: 'El contorno de una sola flor en su tallo',
        copy:
          'No existe un calendario perfecto. Algunas personas necesitan una pausa larga. Otras están bien antes. Lo que importa es si quieres conocer a alguien nuevo, o dejar de sentir lo que sientes por tu ex.',
        followCopy: 'Cuatro preguntas honestas de sí o no. No necesitas crear una cuenta.',
        startButton: 'Empezar el test',
      },
      constraintPanel: {
        eyebrow: 'Primero, tu situación',
        heading: '¿En qué momento estás ahora mismo?',
        copy: 'Elige la opción más parecida a tu caso.',
        helper:
          'No hay una respuesta perfecta. Elige lo que sientas más cierto hoy. Puedes repetir el test el próximo mes.',
      },
      constraints: [
        { id: 'hope', label: 'Todavía tengo la esperanza de que volvamos' },
        { id: 'fresh', label: 'Terminó hace poco y todavía se siente muy reciente' },
        { id: 'contact', label: 'Todavía tenemos que estar en contacto (hijos, trabajo, etc.)' },
        { id: 'new', label: 'Ya estoy hablando con alguien o saliendo con alguien' },
        { id: 'steady', label: 'Ha pasado un tiempo y estoy explorando' },
      ],
      question4ByConstraint: {
        hope: '¿Sales con alguien en parte para darle celos a tu ex, o para demostrar que ya lo dejaste atrás?',
        fresh:
          '¿Sales con alguien sobre todo porque el silencio y el duelo se sienten insoportables, no porque quieras conocer a alguien?',
        contact:
          'En las primeras citas, ¿terminas hablando de tu ex o de la ruptura más de lo que querías?',
        new: 'Si esta nueva persona te preguntara qué sientes todavía por tu ex, ¿te daría pánico o querrías huir?',
        steady:
          '¿Sales con alguien sobre todo porque te pesa la soledad, no porque tengas curiosidad por conocer a alguien nuevo?',
      },
      questionsShared: [
        '¿Esperas que alguien nuevo haga que dejes de extrañar a tu ex?',
        '¿Todavía comparas a las personas que conoces con tu ex?',
        'Si supieras que tu ex está saliendo con alguien nuevo, ¿te arruinaría todo el día?',
      ],
      questionOf: (current, total) => `Pregunta ${current} de ${total}`,
      answers: {
        groupLabel: (n) => `Responder pregunta ${n}`,
        yes: 'Sí',
        no: 'No',
      },
      results: {
        slowDown: {
          imageAlt: 'Un teléfono boca abajo sobre una manta marrón con textura, visto desde arriba',
          heading: 'Tal vez quieras ir más despacio por ahora.',
          introParagraphs: [
            'Querer cercanía después de una ruptura es normal. Esto no es un veredicto sobre tu valor.',
            'Ahora mismo, salir con alguien podría ser una forma de evitar los sentimientos difíciles, no una forma de conocer a alguien. Eso puede sentirse bien por un tiempo y aun así dejarte a medias después.',
            "No tienes que estar 'superado' de tu ex. La pregunta es si tu ex sigue siendo la razón principal por la que estás buscando pareja.",
          ],
          closingParagraph:
            'Si puedes, crea un poco más de distancia con tu ex. Escribe lo que realmente quieres de salir con alguien. Puedes repetir este test en unas semanas.',
        },
        goSlow: {
          heading: 'Señales mixtas. Si sales con alguien, mantenlo sin presión.',
          introParagraphs: [
            'Todavía queda algo de apego hacia tu ex. Eso no significa automáticamente que debas parar.',
            'Un café está bien. Planear toda una relación en la segunda cita es demasiado. Nota si sientes curiosidad por la persona que tienes en frente, no solo alivio de que alguien te preste atención.',
            'Una ola de tristeza después de una buena cita no significa que hayas fallado. Significa que eres una persona.',
          ],
          closingParagraph:
            'Después de cada cita, pregúntate: ¿quería compañía, o quería distracción? No hay una respuesta incorrecta. Solo quieres saber la verdad.',
        },
        ready: {
          imageAlt: 'Una ventana de madera abierta en una pared verde iluminada por el sol',
          heading: 'Puede que estés en un lugar más estable para salir con alguien.',
          paragraphs: [
            'Esto no es permiso para apresurarte, y no es una promesa de que salir con alguien se sienta fácil.',
            'Estar en un buen momento es una dirección, no una meta final. Todavía puedes tener días malos, canciones que te afecten mal, o un martes cualquiera que duela.',
            'Habla con honestidad si algo reaviva sentimientos antiguos. No le debes a nadie una actuación de que ya sanaste.',
            'Sal con alguien de una forma justa para ti y para la otra persona. La curiosidad es buena señal. El rescate no.',
          ],
        },
      },
      slowDownTips: {
        hope: 'Salir con alguien mientras una parte de ti todavía espera una reconciliación suele mantenerte en el limbo. Doloroso, no patético.',
        fresh:
          'Cuando todo todavía está muy reciente, tiene sentido querer reemplazar esa sensación. Eso no siempre significa que sea buen momento.',
        contact:
          'Puedes salir con alguien mientras compartes la crianza o coordinas cosas. Es más difícil si todavía estás viviendo emocionalmente en la relación anterior.',
        new: 'Quizás te debes a ti, y a esta persona, una conversación honesta sobre dónde sigue estando tu corazón.',
        steady:
          'Tus respuestas sugieren que tu ex todavía ocupa mucho espacio. Más tiempo a solas podría ayudarte antes de invertir en alguien nuevo.',
      },
      goSlowFreshTip:
        'Las noticias sobre tu ex probablemente todavía duelan. Es normal tan pronto. Solo nota si salir con alguien te está ayudando a sanar o a evitar.',
      cta: {
        tierSlowDown: '¿No sabes todavía qué buscas al salir con alguien?',
        tierGoSlow: '¿Intentando salir con alguien sin perderte en el proceso?',
        tierReady: '¿Quieres mantener la honestidad contigo mientras sales con alguien?',
        copy: 'Breakup Reset te ayuda a hacer check-ins contigo y mantener un diario privado. Es gratis.',
        button: 'Descargar Breakup Reset gratis',
      },
      announce: {
        pickWhereAreYou: 'Elige en qué momento estás ahora mismo.',
        gotItFourQuestions: 'Entendido. Ahora, cuatro preguntas.',
        question: (n, total) => `Pregunta ${n} de ${total}`,
        resultSlowDown: 'Resultado: tal vez quieras ir más despacio por ahora.',
        resultGoSlow: 'Resultado: señales mixtas. Si sales con alguien, ve despacio.',
        resultReady: 'Resultado: puede que estés en un lugar más estable para salir con alguien.',
      },
      related: {
        heading: 'Más tests para ti',
        items: [
          {
            href: '/breakup-reset/blog/es/friends-with-ex-quiz/',
            title: '¿Puedo seguir siendo amigos con mi ex? Test gratis',
          },
          {
            href: '/breakup-reset/blog/es/should-i-do-no-contact-quiz/',
            title: '¿Debería hacer no contacto? Test gratis',
          },
        ],
        footerLabel: 'Descargar Breakup Reset gratis',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'fr') {
    const title = 'Est-ce le bon moment pour sortir de nouveau ? Test gratuit';
    return {
      locale,
      title,
      description:
        "Pas de règle des trois mois. Quatre questions rapides pour savoir si vous avez envie de rencontrer quelqu'un de nouveau, ou si vous voulez juste fuir le manque de votre ex. Fonctionne même si vous gardez espoir, si vous partagez la coparentalité, ou si vous avez déjà rencontré quelqu'un.",
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        "Un test court pour savoir si vous avez envie de rencontrer quelqu'un de nouveau ou si vous essayez surtout de ne plus ressentir ce que vous ressentez pour votre ex. Inclut les ruptures où vous gardez espoir, partagez la coparentalité, ou avez déjà rencontré quelqu'un.",
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/getting-over-a-breakup.jpg',
        width: 1200,
        height: 800,
        alt: "Une personne assise seule sur un banc, le regard perdu au bout d'une avenue bordée de chênes",
      },
      faqItems: [
        {
          question: "Existe-t-il un temps d'attente idéal avant de sortir de nouveau avec quelqu'un ?",
          answer:
            "Aucun chiffre ne convient à tout le monde. Certaines personnes ont besoin de mois. D'autres se sentent bien plus tôt. Ce qui compte le plus, c'est pourquoi vous voulez sortir avec quelqu'un : la curiosité de rencontrer une nouvelle personne, ou fuir le manque de votre ex.",
        },
        {
          question: 'Les relations de rebond sont-elles toujours une mauvaise idée ?',
          answer:
            "Pas toujours. Pour certaines personnes, ressortir aide à se retrouver et à moins penser à leur ex. Pour d'autres, c'est une façon d'éviter un deuil qui les rattrape plus tard. Ce test cherche à identifier dans quel groupe vous êtes en ce moment.",
        },
        {
          question: 'Puis-je sortir avec quelqu’un si je ressens encore le manque de mon ex ?',
          answer:
            'Ressentir le manque de quelqu’un ne veut pas automatiquement dire qu’il faut arrêter. Cela veut dire faire attention à si ce manque guide encore vos choix : qui vous likez, à qui vous comparez, si vous espérez qu’on vous remarque.',
        },
        {
          question: 'Et si j’espère encore qu’on se remette ensemble ?',
          answer:
            'Cet espoir est humain. Sortir avec quelqu’un en le gardant vous maintient souvent en suspens. Vous pouvez vouloir que cette personne revienne et choisir quand même de mettre les rencontres en pause jusqu’à savoir ce que vous voulez par vous-même.',
        },
        {
          question: 'Puis-je sortir avec quelqu’un tout en partageant la coparentalité ou en restant en contact avec mon ex ?',
          answer:
            "Oui. Beaucoup de gens le font. Cela aide de garder la logistique séparée de la romance, et d'être honnête avec les nouveaux partenaires au bon moment. Vous n'avez pas besoin que votre ex disparaisse complètement de votre vie. Vous avez besoin que cette personne ne soit plus le sujet principal dans votre tête.",
        },
        {
          question: 'Je fréquente déjà quelqu’un. Devrais-je faire ce test ?',
          answer:
            "Oui. La bonne question est de savoir si vous êtes honnête avec vous-même et avec cette personne sur la part de votre cœur qui est encore ailleurs.",
        },
        {
          question: 'Et si j’allais bien jusqu’à apprendre que mon ex sort avec quelqu’un ?',
          answer:
            "Cela peut faire mal même quand tout va bien pour vous. Une mauvaise journée n'efface pas les progrès. Si cela vous détruit pendant plusieurs jours et change toutes vos décisions, ça vaut la peine d'y prêter attention.",
        },
        {
          question: 'Je ne me sens pas en sécurité près de mon ex. Ce test est-il suffisant ?',
          answer:
            "Non. Si vous ne vous sentez pas en sécurité, misez sur le soutien de personnes de confiance ou d'un professionnel. Ce test est pour la zone grise inconfortable, pas pour le danger.",
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progression du test',
        stepLabel: (n) => `Question ${n}`,
      },
      landing: {
        heading: "Avez-vous envie de rencontrer quelqu'un de nouveau, ou est-ce juste le poids de la solitude ?",
        illustrationAlt: "Le contour d'une seule fleur sur sa tige",
        copy:
          "Il n'existe pas de calendrier parfait. Certaines personnes ont besoin d'une longue pause. D'autres se sentent bien plus tôt. Ce qui compte, c'est si vous voulez rencontrer quelqu'un de nouveau, ou arrêter de ressentir ce que vous ressentez pour votre ex.",
        followCopy: 'Quatre questions honnêtes, oui ou non. Aucun compte requis.',
        startButton: 'Commencer le test',
      },
      constraintPanel: {
        eyebrow: "D'abord, votre situation",
        heading: 'Où en êtes-vous en ce moment ?',
        copy: "Choisissez l'option la plus proche de votre cas.",
        helper:
          "Il n'y a pas de réponse parfaite. Choisissez ce qui vous semble vrai aujourd'hui. Vous pourrez refaire ce test le mois prochain.",
      },
      constraints: [
        { id: 'hope', label: "J'espère encore qu'on se remette ensemble" },
        { id: 'fresh', label: "C'est récent et ça fait encore très mal" },
        { id: 'contact', label: 'On doit encore rester en contact (enfants, travail, etc.)' },
        { id: 'new', label: "Je parle déjà à quelqu'un ou je sors avec quelqu'un" },
        { id: 'steady', label: "Ça fait un moment et j'explore" },
      ],
      question4ByConstraint: {
        hope: 'Sortez-vous avec quelqu’un en partie pour provoquer de la jalousie chez votre ex, ou pour montrer que vous avez tourné la page ?',
        fresh: "Sortez-vous avec quelqu'un surtout parce que le silence et le deuil sont insupportables, pas parce que vous avez envie de rencontrer quelqu'un ?",
        contact: 'Lors des premiers rendez-vous, finissez-vous par parler de votre ex ou de la rupture plus que vous ne le vouliez ?',
        new: 'Si cette nouvelle personne vous demandait ce que vous ressentez encore pour votre ex, paniqueriez-vous ou auriez-vous envie de fuir ?',
        steady: "Sortez-vous avec quelqu'un surtout parce que la solitude pèse, plutôt que par curiosité de rencontrer quelqu'un de nouveau ?",
      },
      questionsShared: [
        "Espérez-vous que quelqu'un de nouveau vous fasse arrêter de ressentir le manque de votre ex ?",
        'Comparez-vous encore les personnes que vous rencontrez à votre ex ?',
        'Si vous appreniez que votre ex fréquente quelqu’un de nouveau, cela gâcherait-il toute votre journée ?',
      ],
      questionOf: (current, total) => `Question ${current} sur ${total}`,
      answers: {
        groupLabel: (n) => `Répondre à la question ${n}`,
        yes: 'Oui',
        no: 'Non',
      },
      results: {
        slowDown: {
          imageAlt: 'Un téléphone posé écran contre une couverture marron texturée, vu du dessus',
          heading: 'Vous voudrez peut-être ralentir pour l’instant.',
          introParagraphs: [
            "Vouloir de la proximité après une rupture est normal. Ce n'est pas un jugement sur votre valeur.",
            "En ce moment, sortir avec quelqu'un pourrait être une façon d'éviter les sentiments difficiles, pas une façon de rencontrer quelqu'un. Cela peut faire du bien un moment et vous laisser quand même bloqué plus tard.",
            "Vous n'avez pas besoin d'avoir tourné la page avec votre ex. La question est de savoir si votre ex reste la principale raison pour laquelle vous cherchez quelqu'un.",
          ],
          closingParagraph:
            "Si vous le pouvez, créez un peu plus de distance avec votre ex. Notez ce que vous voulez vraiment en sortant avec quelqu'un. Vous pourrez refaire ce test dans quelques semaines.",
        },
        goSlow: {
          heading: "Signaux mitigés. Si vous sortez avec quelqu'un, restez sans pression.",
          introParagraphs: [
            "Il reste un peu d'attachement envers votre ex. Cela ne veut pas automatiquement dire qu'il faut arrêter.",
            "Un café, c'est très bien. Planifier toute une relation dès le deuxième rendez-vous, c'est beaucoup. Remarquez si vous ressentez de la curiosité pour la personne en face de vous, pas seulement du soulagement que quelqu'un vous prête attention.",
            "Une vague de tristesse après un bon rendez-vous ne veut pas dire que vous avez échoué. Ça veut dire que vous êtes un être humain.",
          ],
          closingParagraph:
            "Après chaque rendez-vous, demandez-vous : vouliez-vous de la compagnie, ou vouliez-vous une distraction ? Il n'y a pas de mauvaise réponse. Vous voulez juste connaître la vérité.",
        },
        ready: {
          imageAlt: 'Une fenêtre en bois ouverte sur un mur vert baigné de soleil',
          heading: 'Vous êtes peut-être dans un endroit plus stable pour sortir avec quelqu’un.',
          paragraphs: [
            "Ce n'est pas une permission de vous précipiter, ni une promesse que sortir avec quelqu'un sera facile.",
            "Être au bon moment est une direction, pas une ligne d'arrivée. Vous pouvez encore avoir de mauvais jours, des chansons qui font mal, ou un mardi ordinaire qui blesse.",
            "Restez honnête si quelque chose ravive d'anciens sentiments. Vous ne devez à personne de jouer la comédie de la guérison.",
            "Sortez avec quelqu'un d'une manière juste pour vous et pour l'autre personne. La curiosité est bon signe. Le sauvetage, non.",
          ],
        },
      },
      slowDownTips: {
        hope: "Sortir avec quelqu'un alors qu'une part de vous espère encore une réconciliation vous maintient souvent dans les limbes. Douloureux, pas pathétique.",
        fresh: "Quand tout est encore très récent, vouloir remplacer cette sensation est compréhensible. Cela ne veut pas toujours dire que c'est le bon moment.",
        contact: "Vous pouvez sortir avec quelqu'un tout en partageant la coparentalité ou en coordonnant des choses. C'est plus difficile si vous vivez encore émotionnellement dans l'ancienne relation.",
        new: 'Vous devez peut-être, à vous-même et à cette personne, une conversation honnête sur où en est vraiment votre cœur.',
        steady: 'Vos réponses suggèrent que votre ex occupe encore beaucoup de place. Plus de temps en solo pourrait aider avant d’investir dans quelqu’un de nouveau.',
      },
      goSlowFreshTip:
        "Les nouvelles au sujet de votre ex vous feront probablement encore mal. C'est normal si peu de temps après. Remarquez juste si sortir avec quelqu'un vous aide à guérir ou à éviter.",
      cta: {
        tierSlowDown: "Vous ne savez pas encore ce que vous cherchez en sortant avec quelqu'un ?",
        tierGoSlow: "Vous essayez de sortir avec quelqu'un sans vous perdre en chemin ?",
        tierReady: "Vous voulez rester honnête avec vous-même en sortant avec quelqu'un ?",
        copy: "Breakup Reset vous aide à faire le point avec vous-même et à tenir un journal privé. C'est gratuit.",
        button: 'Télécharger Breakup Reset gratuitement',
      },
      announce: {
        pickWhereAreYou: 'Choisissez où vous en êtes en ce moment.',
        gotItFourQuestions: 'Compris. Maintenant, quatre questions.',
        question: (n, total) => `Question ${n} sur ${total}`,
        resultSlowDown: 'Résultat : vous voudrez peut-être ralentir pour l’instant.',
        resultGoSlow: "Résultat : signaux mitigés. Si vous sortez avec quelqu'un, allez doucement.",
        resultReady: "Résultat : vous êtes peut-être dans un endroit plus stable pour sortir avec quelqu'un.",
      },
      related: {
        heading: 'Plus de tests pour vous',
        items: [
          {
            href: '/breakup-reset/blog/fr/friends-with-ex-quiz/',
            title: 'Peut-on rester amis avec son ex ? Test gratuit',
          },
          {
            href: '/breakup-reset/blog/fr/should-i-do-no-contact-quiz/',
            title: 'Dois-je couper les ponts avec mon ex ? Test gratuit',
          },
        ],
        footerLabel: 'Télécharger Breakup Reset gratuitement',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'de') {
    const title = 'Ist jetzt ein guter Zeitpunkt, um wieder zu daten? Kostenloser Test';
    return {
      locale,
      title,
      description:
        'Keine Drei-Monats-Regel. Vier kurze Fragen, um herauszufinden, ob du jemand Neues kennenlernen willst, oder nur der Sehnsucht nach deiner Ex-Beziehung entkommen willst. Funktioniert auch, wenn du noch Hoffnung hast, gemeinsam Kinder erziehst, oder schon jemanden kennengelernt hast.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Ein kurzer Test, der zeigt, ob du jemand Neues kennenlernen willst, oder hauptsächlich versuchst, deine Gefühle für deine Ex-Beziehung nicht zu spüren. Enthält Trennungen, bei denen du noch Hoffnung hast, gemeinsam Kinder erziehst, oder schon jemanden kennengelernt hast.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/getting-over-a-breakup.jpg',
        width: 1200,
        height: 800,
        alt: 'Eine Person sitzt allein auf einer Bank und blickt eine von Eichen gesäumte Allee entlang',
      },
      faqItems: [
        {
          question: 'Gibt es eine richtige Wartezeit, bevor man wieder daten sollte?',
          answer:
            'Keine Zahl passt für alle. Manche Menschen brauchen Monate. Manche fühlen sich schneller bereit. Wichtiger ist, warum du daten willst: Neugier auf jemand Neues, oder Flucht vor der Sehnsucht nach deiner Ex-Beziehung.',
        },
        {
          question: 'Sind Übergangsbeziehungen immer eine schlechte Idee?',
          answer:
            'Nicht immer. Manchen Menschen hilft es, wieder zu daten, um sich selbst zu spüren und weniger an die Ex-Beziehung zu denken. Für andere ist es ein Weg, Trauer zu vermeiden, die später wieder einholt. Dieser Test soll zeigen, in welcher Gruppe du gerade eher bist.',
        },
        {
          question: 'Kann ich daten, wenn ich meine Ex-Beziehung noch vermisse?',
          answer:
            'Jemanden zu vermissen heißt nicht automatisch, dass du aufhören musst. Es heißt, darauf zu achten, ob dieses Vermissen noch deine Entscheidungen lenkt: wen du swipest, mit wem du vergleichst, ob du dich gesehen fühlen willst.',
        },
        {
          question: 'Was, wenn ich noch hoffe, dass wir wieder zusammenkommen?',
          answer:
            'Diese Hoffnung ist menschlich. Zu daten, während du daran festhältst, hält dich oft in der Schwebe. Du kannst dir diese Person zurückwünschen und trotzdem entscheiden, mit dem Daten zu pausieren, bis du für dich selbst weißt, was du willst.',
        },
        {
          question: 'Kann ich daten, während ich gemeinsam Kinder erziehe oder mit meiner Ex-Beziehung in Kontakt bleibe?',
          answer:
            'Ja. Viele Menschen tun das. Es hilft, Organisatorisches von der Romantik getrennt zu halten und mit neuen Partnern zum richtigen Zeitpunkt ehrlich zu sein. Deine Ex-Beziehung muss nicht komplett aus deinem Leben verschwinden. Sie sollte nur nicht mehr die Hauptrolle in deinem Kopf spielen.',
        },
        {
          question: 'Ich date schon jemanden. Sollte ich diesen Test trotzdem machen?',
          answer:
            'Ja. Die faire Frage ist, ob du zu dir selbst und zu dieser Person ehrlich bist, wie viel von deinem Herzen noch woanders ist.',
        },
        {
          question: 'Was, wenn es mir gut ging, bis ich gehört habe, dass meine Ex-Beziehung schon jemanden datet?',
          answer:
            'Das kann wehtun, auch wenn es dir eigentlich gut geht. Ein schlechter Tag löscht keinen Fortschritt. Wenn es dich tagelang aus der Bahn wirft und jede Entscheidung verändert, lohnt es sich, genauer hinzuschauen.',
        },
        {
          question: 'Ich fühle mich in der Nähe meiner Ex-Beziehung nicht sicher. Reicht dieser Test?',
          answer:
            'Nein. Wenn du dich nicht sicher fühlst, konzentriere dich auf Unterstützung von Menschen, denen du vertraust, oder von einer Fachperson. Dieser Test ist für die unklare Mitte gedacht, nicht für Gefahr.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Testfortschritt',
        stepLabel: (n) => `Frage ${n}`,
      },
      landing: {
        heading: 'Hast du Lust, jemand Neues kennenzulernen, oder drückt einfach die Einsamkeit?',
        illustrationAlt: 'Der Umriss einer einzelnen Blume an ihrem Stiel',
        copy:
          'Es gibt keinen perfekten Zeitplan. Manche Menschen brauchen eine lange Pause. Manche fühlen sich schneller bereit. Wichtig ist, ob du jemand Neues kennenlernen willst, oder aufhören willst, das zu fühlen, was du für deine Ex-Beziehung fühlst.',
        followCopy: 'Vier ehrliche Ja-Nein-Fragen. Kein Konto nötig.',
        startButton: 'Test starten',
      },
      constraintPanel: {
        eyebrow: 'Zuerst: deine Situation',
        heading: 'Wo stehst du gerade?',
        copy: 'Wähle das, was am ehesten passt.',
        helper: 'Keine perfekte Antwort. Wähle, was sich heute richtig anfühlt. Du kannst den Test nächsten Monat wiederholen.',
      },
      constraints: [
        { id: 'hope', label: 'Ich hoffe noch, dass wir wieder zusammenkommen' },
        { id: 'fresh', label: 'Es ist erst kürzlich passiert und fühlt sich noch roh an' },
        { id: 'contact', label: 'Wir müssen weiter in Kontakt bleiben (Kinder, Arbeit usw.)' },
        { id: 'new', label: 'Ich rede schon mit jemandem oder date schon jemanden' },
        { id: 'steady', label: 'Es ist eine Weile her und ich erkunde gerade' },
      ],
      question4ByConstraint: {
        hope: 'Datest du teilweise, um Eifersucht bei deiner Ex-Beziehung auszulösen, oder um zu zeigen, dass du darüber hinweg bist?',
        fresh: 'Datest du hauptsächlich, weil die Stille und die Trauer unerträglich sind, nicht weil du jemanden kennenlernen willst?',
        contact: 'Redet ihr bei frühen Dates öfter über deine Ex-Beziehung oder die Trennung, als du eigentlich wolltest?',
        new: 'Würdest du in Panik geraten oder weglaufen wollen, wenn diese neue Person dich fragen würde, wie du dich noch über deine Ex-Beziehung fühlst?',
        steady: 'Datest du hauptsächlich, weil du das Alleinsein hasst, nicht weil du neugierig auf jemand Neues bist?',
      },
      questionsShared: [
        'Hoffst du, dass jemand Neues dich aufhören lässt, deine Ex-Beziehung zu vermissen?',
        'Vergleichst du Menschen, die du triffst, noch mit deiner Ex-Beziehung?',
        'Würde es deinen ganzen Tag ruinieren, wenn du erfahren würdest, dass deine Ex-Beziehung jemand Neues datet?',
      ],
      questionOf: (current, total) => `Frage ${current} von ${total}`,
      answers: {
        groupLabel: (n) => `Frage ${n} beantworten`,
        yes: 'Ja',
        no: 'Nein',
      },
      results: {
        slowDown: {
          imageAlt: 'Ein Smartphone liegt mit dem Display nach unten auf einer texturierten braunen Decke, von oben gesehen',
          heading: 'Du willst vielleicht erst mal langsamer machen.',
          introParagraphs: [
            'Nähe nach einer Trennung zu wollen ist normal. Das ist kein Urteil über deinen Wert.',
            'Gerade jetzt könnte Daten ein Weg sein, den schwierigen Gefühlen auszuweichen, nicht jemanden kennenzulernen. Das kann sich eine Weile gut anfühlen und dich später trotzdem feststecken lassen.',
            'Du musst nicht über deine Ex-Beziehung "hinweg" sein. Die Frage ist, ob sie noch der Hauptgrund ist, warum du swipest.',
          ],
          closingParagraph:
            'Wenn du kannst, schaffe etwas mehr Abstand zu deiner Ex-Beziehung. Schreib auf, was du dir vom Daten wirklich wünschst. Du kannst diesen Test in ein paar Wochen wiederholen.',
        },
        goSlow: {
          heading: 'Gemischte Signale. Wenn du datest, halte es locker.',
          introParagraphs: [
            'Es ist noch etwas Bindung an deine Ex-Beziehung da. Das heißt nicht automatisch, dass du aufhören musst.',
            'Ein Kaffee ist völlig okay. Beim zweiten Date schon eine ganze Beziehung zu planen, ist zu viel. Achte darauf, ob du neugierig auf die Person vor dir bist, nicht nur erleichtert, dass dir jemand Aufmerksamkeit schenkt.',
            'Ein trauriger Moment nach einem schönen Date heißt nicht, dass du versagt hast. Es heißt, dass du ein Mensch bist.',
          ],
          closingParagraph:
            'Frag dich nach jedem Date: Wolltest du Gesellschaft, oder wolltest du Ablenkung? Es gibt keine falsche Antwort. Du willst nur die Wahrheit wissen.',
        },
        ready: {
          imageAlt: 'Ein hölzernes Fenster, weit geöffnet an einer sonnenbeschienenen grünen Wand',
          heading: 'Du bist vielleicht an einem stabileren Punkt zum Daten.',
          paragraphs: [
            'Das ist keine Erlaubnis, etwas zu überstürzen, und kein Versprechen, dass Daten sich leicht anfühlt.',
            'Bereitschaft ist eine Richtung, keine Ziellinie. Du kannst trotzdem schlechte Tage haben, Lieder, die falsch treffen, oder einen zufälligen Dienstag, der wehtut.',
            'Bleib ehrlich, wenn etwas alte Gefühle wieder hochholt. Du schuldest niemandem die Vorstellung, geheilt zu sein.',
            'Date auf eine Art, die fair ist — für dich und die andere Person. Neugier ist ein gutes Zeichen. Retten-Wollen nicht.',
          ],
        },
      },
      slowDownTips: {
        hope: 'Zu daten, während ein Teil von dir noch auf ein Comeback hofft, hält dich meist in der Schwebe. Schmerzhaft, nicht erbärmlich.',
        fresh: 'Wenn alles noch ganz frisch ist, ergibt der Wunsch, das Gefühl zu ersetzen, Sinn. Das heißt nicht immer, dass du bereit bist.',
        contact: 'Du kannst daten, während du gemeinsam Kinder erziehst oder dich abstimmst. Es ist schwerer, wenn du emotional noch in der alten Beziehung lebst.',
        new: 'Du schuldest dir selbst und dieser Person vielleicht ein ehrliches Gespräch darüber, wo dein Herz noch hängt.',
        steady: 'Deine Antworten deuten darauf hin, dass deine Ex-Beziehung noch viel Raum einnimmt. Mehr Zeit für dich allein könnte helfen, bevor du in jemand Neues investierst.',
      },
      goSlowFreshTip:
        'Nachrichten über deine Ex-Beziehung würden dich wahrscheinlich noch stechen. Das ist so kurz danach normal. Achte einfach darauf, ob Daten dir beim Heilen hilft oder beim Vermeiden.',
      cta: {
        tierSlowDown: 'Weißt du noch nicht, was du dir vom Daten wünschst?',
        tierGoSlow: 'Versuchst du zu daten, ohne dich dabei zu verlieren?',
        tierReady: 'Willst du dir selbst gegenüber ehrlich bleiben, während du datest?',
        copy: 'Breakup Reset hilft dir, mit dir selbst einzuchecken und ein privates Tagebuch zu führen. Kostenlos.',
        button: 'Breakup Reset kostenlos herunterladen',
      },
      announce: {
        pickWhereAreYou: 'Wähle, wo du gerade stehst.',
        gotItFourQuestions: 'Verstanden. Jetzt vier Fragen.',
        question: (n, total) => `Frage ${n} von ${total}`,
        resultSlowDown: 'Ergebnis: Du willst vielleicht erst mal langsamer machen.',
        resultGoSlow: 'Ergebnis: Gemischte Signale. Wenn du datest, geh es langsam an.',
        resultReady: 'Ergebnis: Du bist vielleicht an einem stabileren Punkt zum Daten.',
      },
      related: {
        heading: 'Weitere Tests für dich',
        items: [
          {
            href: '/breakup-reset/blog/de/friends-with-ex-quiz/',
            title: 'Können wir nach der Trennung befreundet bleiben? Kostenloser Test',
          },
          {
            href: '/breakup-reset/blog/de/should-i-do-no-contact-quiz/',
            title: 'Sollte ich Funkstille einlegen? Kostenloser Test',
          },
        ],
        footerLabel: 'Breakup Reset kostenlos herunterladen',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'pl') {
    const title = 'Czy mogę już zacząć chodzić na randki? Darmowy test';
    return {
      locale,
      title,
      description:
        'Sprawdź, czy naprawdę chcesz poznać kogoś nowego, czy wciąż uciekasz przed tęsknotą za eks. Cztery szybkie pytania — działa też, jeśli wciąż masz nadzieję, dzielicie opiekę nad dziećmi, albo już kogoś poznałaś/poznałeś.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Krótki test sprawdzający, czy chcesz poznać kogoś nowego, czy głównie starasz się nie czuć tego, co czujesz do byłego partnera. Obejmuje rozstania, w których wciąż masz nadzieję, dzielicie opiekę nad dziećmi, albo już kogoś poznałaś/poznałeś.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/getting-over-a-breakup.jpg',
        width: 1200,
        height: 800,
        alt: 'Osoba siedząca samotnie na ławce, patrząca w głąb alei wysadzanej dębami',
      },
      faqItems: [
        {
          question: 'Czy istnieje właściwy czas oczekiwania przed powrotem do randkowania?',
          answer:
            'Żadna liczba nie pasuje do wszystkich. Niektórzy potrzebują miesięcy. Inni czują się gotowi szybciej. Ważniejsze jest to, dlaczego chcesz randkować: ciekawość poznania kogoś nowego, czy ucieczka przed tęsknotą za byłym partnerem.',
        },
        {
          question: 'Czy związki na odbicie zawsze są złym pomysłem?',
          answer:
            'Nie zawsze. Niektórym osobom randkowanie pomaga poczuć się sobą i mniej myśleć o byłym partnerze. Dla innych to sposób na uniknięcie żałoby, która i tak dogoni ich później. Ten test ma pokazać, w której grupie możesz być teraz.',
        },
        {
          question: 'Czy mogę randkować, jeśli wciąż tęsknię za byłym partnerem?',
          answer:
            'Tęsknota za kimś nie oznacza automatycznie, że trzeba przestać. Oznacza zwrócenie uwagi na to, czy ta tęsknota wciąż kieruje Twoimi wyborami: kogo polubiasz, z kim porównujesz, czy liczysz na to, że ktoś Cię zauważy.',
        },
        {
          question: 'A jeśli wciąż mam nadzieję, że wrócimy do siebie?',
          answer:
            'Ta nadzieja jest ludzka. Randkowanie, gdy się jej trzymasz, zwykle trzyma Cię w zawieszeniu. Możesz chcieć, żeby wrócił/wróciła, i mimo to wybrać wstrzymanie się z randkowaniem, aż sam/sama będziesz wiedzieć, czego chcesz.',
        },
        {
          question: 'Czy mogę randkować, dzieląc opiekę nad dziećmi albo utrzymując kontakt z byłym partnerem?',
          answer:
            'Tak. Wiele osób tak robi. Pomaga oddzielenie spraw logistycznych od romansu i bycie szczerym z nowymi partnerami we właściwym momencie. Nie musisz całkowicie usuwać byłego partnera z życia. Musisz sprawić, żeby przestał być głównym bohaterem w Twojej głowie.',
        },
        {
          question: 'Już się z kimś spotykam. Czy powinienem/powinnam zrobić ten test?',
          answer:
            'Tak. Uczciwe pytanie brzmi, czy jesteś szczery/szczera wobec siebie i tej osoby co do tego, ile z Twojego serca wciąż jest gdzie indziej.',
        },
        {
          question: 'A jeśli czułam się dobrze, dopóki nie dowiedziałam się, że mój były partner kogoś poznał?',
          answer:
            'To może zaboleć, nawet gdy dobrze sobie radzisz. Jeden zły dzień nie kasuje postępów. Jeśli rujnuje Ci to kilka dni i zmienia każdą decyzję, warto to zauważyć.',
        },
        {
          question: 'Nie czuję się bezpiecznie przy moim byłym partnerze. Czy ten test wystarczy?',
          answer:
            'Nie. Jeśli nie czujesz się bezpiecznie, skup się na wsparciu zaufanych osób albo specjalisty. Ten test jest na trudny środek, nie na niebezpieczeństwo.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Postęp testu',
        stepLabel: (n) => `Pytanie ${n}`,
      },
      landing: {
        heading: 'Masz ochotę poznać kogoś nowego, czy po prostu dopada Cię samotność?',
        illustrationAlt: 'Kontur pojedynczego kwiatu na łodydze',
        copy:
          'Nie ma idealnego harmonogramu. Niektórzy potrzebują długiej przerwy. Inni czują się dobrze szybciej. Liczy się to, czy chcesz poznać kogoś nowego, czy przestać czuć to, co czujesz do byłego partnera.',
        followCopy: 'Cztery szczere pytania tak/nie. Konto nie jest potrzebne.',
        startButton: 'Zacznij test',
      },
      constraintPanel: {
        eyebrow: 'Najpierw Twoja sytuacja',
        heading: 'W jakim miejscu jesteś teraz?',
        copy: 'Wybierz najbliższą opcję.',
        helper: 'Nie ma idealnej odpowiedzi. Wybierz to, co czujesz jako prawdziwe dzisiaj. Test możesz powtórzyć za miesiąc.',
      },
      constraints: [
        { id: 'hope', label: 'Wciąż mam nadzieję, że do siebie wrócimy' },
        { id: 'fresh', label: 'To się skończyło niedawno i wciąż bardzo boli' },
        { id: 'contact', label: 'Wciąż musimy być w kontakcie (dzieci, praca itd.)' },
        { id: 'new', label: 'Już z kimś rozmawiam albo się spotykam' },
        { id: 'steady', label: 'Minęło trochę czasu i teraz eksploruję' },
      ],
      question4ByConstraint: {
        hope: 'Czy randkujesz częściowo po to, żeby wzbudzić zazdrość u byłego partnera, albo pokazać, że ruszasz dalej?',
        fresh: 'Czy randkujesz głównie dlatego, że cisza i żałoba są nie do zniesienia, a nie dlatego, że chcesz kogoś poznać?',
        contact: 'Na pierwszych randkach czy rozmowa schodzi na byłego partnera albo rozstanie częściej, niż planujesz?',
        new: 'Gdyby ta nowa osoba zapytała, co wciąż czujesz do byłego partnera, ogarnęłaby Cię panika albo chęć ucieczki?',
        steady: 'Czy randkujesz głównie dlatego, że nienawidzisz samotności, a nie z ciekawości poznania kogoś nowego?',
      },
      questionsShared: [
        'Czy liczysz na to, że ktoś nowy sprawi, że przestaniesz tęsknić za byłym partnerem?',
        'Czy wciąż porównujesz osoby, które poznajesz, do byłego partnera?',
        'Czy wiadomość, że Twój były partner kogoś poznał, zrujnowałaby Ci cały dzień?',
      ],
      questionOf: (current, total) => `Pytanie ${current} z ${total}`,
      answers: {
        groupLabel: (n) => `Odpowiedz na pytanie ${n}`,
        yes: 'Tak',
        no: 'Nie',
      },
      results: {
        slowDown: {
          imageAlt: 'Telefon leżący ekranem w dół na fakturowanym brązowym kocu, widok z góry',
          heading: 'Może warto teraz zwolnić.',
          introParagraphs: [
            'Chęć bliskości po rozstaniu jest normalna. To nie jest wyrok na Twoją wartość.',
            'W tej chwili randkowanie może być sposobem na omijanie trudnych uczuć, a nie na poznanie kogoś. Przez chwilę może być przyjemnie, a mimo to później zostawić Cię w martwym punkcie.',
            'Nie musisz mieć rozstania „za sobą”. Pytanie brzmi, czy Twój były partner wciąż jest głównym powodem, dla którego przeglądasz profile.',
          ],
          closingParagraph:
            'Jeśli możesz, stwórz trochę więcej dystansu do byłego partnera. Zapisz, czego naprawdę chcesz od randkowania. Test możesz powtórzyć za kilka tygodni.',
        },
        goSlow: {
          heading: 'Mieszane sygnały. Jeśli randkujesz, rób to bez presji.',
          introParagraphs: [
            'Wciąż jest w Tobie trochę przywiązania do byłego partnera. To nie znaczy automatycznie, że trzeba przestać.',
            'Kawa to żaden problem. Planowanie całego związku na drugiej randce to już za dużo. Zwróć uwagę, czy czujesz ciekawość wobec osoby naprzeciwko, a nie tylko ulgę, że ktoś poświęca Ci uwagę.',
            'Fala smutku po udanej randce nie oznacza porażki. Oznacza, że jesteś człowiekiem.',
          ],
          closingParagraph:
            'Po każdej randce zapytaj siebie: chciałaś/chciałeś towarzystwa, czy raczej rozproszenia? Nie ma złej odpowiedzi. Chcesz tylko poznać prawdę.',
        },
        ready: {
          imageAlt: 'Drewniane okno otwarte na nasłonecznionej zielonej ścianie',
          heading: 'Może jesteś w bardziej stabilnym miejscu, żeby randkować.',
          paragraphs: [
            'To nie jest pozwolenie na pośpiech i nie obietnica, że randkowanie będzie łatwe.',
            'Gotowość to kierunek, nie linia mety. Wciąż możesz mieć gorsze dni, piosenki, które uderzają nie tak, albo zwykły wtorek, który boli.',
            'Bądź szczery/szczera, jeśli coś ożywia stare uczucia. Nikomu nie jesteś winna/winien udawania, że już wszystko przepracowałaś/przepracowałeś.',
            'Randkuj w sposób uczciwy wobec siebie i drugiej osoby. Ciekawość to dobry znak. Ratowanie kogoś — nie.',
          ],
        },
      },
      slowDownTips: {
        hope: 'Randkowanie, gdy część Ciebie wciąż liczy na powrót, zwykle trzyma Cię w zawieszeniu. Bolesne, nie żałosne.',
        fresh: 'Gdy wszystko jest wciąż bardzo świeże, chęć zastąpienia tego uczucia ma sens. Nie zawsze oznacza to, że jesteś gotowy/gotowa.',
        contact: 'Możesz randkować, dzieląc opiekę nad dziećmi albo się koordynując. Trudniej jest, jeśli wciąż emocjonalnie żyjesz w starym związku.',
        new: 'Być może jesteś winna/winien sobie i tej osobie szczerej rozmowy o tym, gdzie wciąż jest Twoje serce.',
        steady: 'Twoje odpowiedzi sugerują, że były partner nadal zajmuje dużo miejsca. Więcej czasu dla siebie mogłoby pomóc, zanim zainwestujesz w kogoś nowego.',
      },
      goSlowFreshTip:
        'Wiadomości o byłym partnerze prawdopodobnie wciąż bolą. To normalne tak krótko po rozstaniu. Zwróć tylko uwagę, czy randkowanie pomaga Ci się goić, czy raczej unikać.',
      cta: {
        tierSlowDown: 'Jeszcze nie wiesz, czego szukasz w randkowaniu?',
        tierGoSlow: 'Próbujesz randkować, nie gubiąc siebie po drodze?',
        tierReady: 'Chcesz zostać szczery/szczera wobec siebie podczas randkowania?',
        copy: 'Breakup Reset pomaga robić check-iny ze sobą i prowadzić prywatny dziennik. To za darmo.',
        button: 'Pobierz Breakup Reset za darmo',
      },
      announce: {
        pickWhereAreYou: 'Wybierz, w jakim miejscu jesteś teraz.',
        gotItFourQuestions: 'Zrozumiano. Teraz cztery pytania.',
        question: (n, total) => `Pytanie ${n} z ${total}`,
        resultSlowDown: 'Wynik: może warto teraz zwolnić.',
        resultGoSlow: 'Wynik: mieszane sygnały. Jeśli randkujesz, rób to powoli.',
        resultReady: 'Wynik: może jesteś w bardziej stabilnym miejscu, żeby randkować.',
      },
      related: {
        heading: 'Więcej testów dla Ciebie',
        items: [
          {
            href: '/breakup-reset/blog/pl/friends-with-ex-quiz/',
            title: 'Czy mogę już przyjaźnić się z eks? Darmowy test',
          },
          {
            href: '/breakup-reset/blog/pl/should-i-do-no-contact-quiz/',
            title: 'Czy muszę zerwać kontakt z eks? Darmowy test',
          },
        ],
        footerLabel: 'Pobierz Breakup Reset za darmo',
        footerHref: downloadUrl,
      },
    };
  }

  if (locale === 'pt') {
    const title = 'É um bom momento para voltar a namorar? Teste grátis';
    return {
      locale,
      title,
      description:
        'Sem regra dos três meses. Quatro perguntas rápidas para saber se você quer conhecer alguém novo, ou só está fugindo da saudade do seu ex. Funciona mesmo se você ainda tem esperança, divide a criação dos filhos, ou já conheceu alguém.',
      ogTitle: `${title} | Breakup Reset`,
      schemaName: title,
      schemaDescription:
        'Um teste rápido para saber se você quer conhecer alguém novo ou está principalmente tentando não sentir o que sente pelo ex. Inclui términos em que você ainda tem esperança, divide a criação dos filhos, ou já conheceu alguém.',
      pagePath,
      pageUrl,
      downloadUrl,
      ogImage: {
        src: '/breakup-reset/blog/covers/getting-over-a-breakup.jpg',
        width: 1200,
        height: 800,
        alt: 'Uma pessoa sentada sozinha em um banco, olhando para uma avenida cheia de árvores',
      },
      faqItems: [
        {
          question: 'Existe um tempo certo para esperar antes de voltar a namorar?',
          answer:
            'Nenhum número funciona pra todo mundo. Algumas pessoas precisam de meses. Outras se sentem bem antes. O que importa mais é por que você quer namorar: curiosidade de conhecer alguém novo, ou fuga da saudade do seu ex.',
        },
        {
          question: 'Relacionamentos de rebote são sempre uma má ideia?',
          answer:
            'Nem sempre. Para algumas pessoas, voltar a namorar ajuda a se sentir bem consigo mesma e pensar menos no ex. Para outras, é um jeito de evitar um luto que aparece depois. Esse teste tenta identificar em qual desses grupos você pode estar agora.',
        },
        {
          question: 'Posso namorar se ainda sinto saudade do meu ex?',
          answer:
            'Sentir saudade de alguém não significa automaticamente que você deve parar. Significa prestar atenção se essa saudade ainda guia suas escolhas: em quem você dá match, com quem você compara, se você está esperando ser notado.',
        },
        {
          question: 'E se eu ainda tenho esperança de voltarmos?',
          answer:
            'Essa esperança é humana. Namorar enquanto segura essa esperança costuma te deixar em suspenso. Você pode querer que essa pessoa volte e mesmo assim escolher pausar os encontros até saber o que você quer por conta própria.',
        },
        {
          question: 'Posso namorar enquanto divido a criação dos filhos ou continuo em contato com meu ex?',
          answer:
            'Sim. Muita gente faz isso. Ajuda manter a logística separada do romance, e ser transparente com os novos parceiros na hora certa. Você não precisa tirar seu ex completamente da sua vida. Precisa é que essa pessoa pare de ser o assunto principal na sua cabeça.',
        },
        {
          question: 'Já estou namorando alguém. Devo fazer esse teste?',
          answer:
            'Sim. A pergunta justa é se você está sendo honesto consigo mesmo e com essa pessoa sobre quanto do seu coração ainda está em outro lugar.',
        },
        {
          question: 'E se eu estava bem até descobrir que meu ex está namorando alguém?',
          answer:
            'Isso pode doer mesmo quando você está indo bem. Um dia ruim não apaga o progresso. Se isso te destrói por dias e muda todas as suas decisões, vale a pena prestar atenção nisso.',
        },
        {
          question: 'Não me sinto seguro perto do meu ex. Esse teste é suficiente?',
          answer:
            'Não. Se você não se sente seguro, foque no apoio de pessoas de confiança ou de um profissional. Esse teste é para o meio-termo incômodo, não para o perigo.',
        },
      ],
      heading: title,
      progress: {
        ariaLabel: 'Progresso do teste',
        stepLabel: (n) => `Pergunta ${n}`,
      },
      landing: {
        heading: 'Você quer conhecer alguém novo, ou é só o peso da solidão?',
        illustrationAlt: 'Silhueta de uma única flor no caule',
        copy:
          'Não existe um cronograma perfeito. Algumas pessoas precisam de uma pausa longa. Outras ficam bem antes. O que importa é se você quer conhecer alguém novo, ou parar de sentir o que sente pelo seu ex.',
        followCopy: 'Quatro perguntas sinceras de sim ou não. Sem precisar criar conta.',
        startButton: 'Começar o teste',
      },
      constraintPanel: {
        eyebrow: 'Primeiro, sua situação',
        heading: 'Em que momento você está agora?',
        copy: 'Escolha a opção mais parecida com a sua.',
        helper: 'Não existe resposta perfeita. Escolha o que parece mais verdadeiro hoje. Você pode refazer esse teste no mês que vem.',
      },
      constraints: [
        { id: 'hope', label: 'Ainda tenho esperança de que a gente volte' },
        { id: 'fresh', label: 'Terminou recentemente e ainda dói muito' },
        { id: 'contact', label: 'Ainda precisamos ficar em contato (filhos, trabalho, etc.)' },
        { id: 'new', label: 'Já estou conversando ou saindo com alguém' },
        { id: 'steady', label: 'Já faz um tempo e estou explorando' },
      ],
      question4ByConstraint: {
        hope: 'Você está namorando em parte para deixar seu ex com ciúmes, ou para mostrar que já virou a página?',
        fresh: 'Você está namorando principalmente porque o silêncio e o luto ficam insuportáveis, e não porque quer conhecer alguém?',
        contact: 'Nos primeiros encontros, você acaba falando do seu ex ou do término mais do que gostaria?',
        new: 'Se essa pessoa nova perguntasse o que você ainda sente pelo seu ex, você entraria em pânico ou teria vontade de fugir?',
        steady: 'Você está namorando principalmente porque odeia ficar sozinho, e não porque tem curiosidade de conhecer alguém novo?',
      },
      questionsShared: [
        'Você espera que alguém novo faça você parar de sentir saudade do seu ex?',
        'Você ainda compara as pessoas que conhece com o seu ex?',
        'Se você descobrisse que seu ex está namorando alguém novo, isso estragaria o seu dia inteiro?',
      ],
      questionOf: (current, total) => `Pergunta ${current} de ${total}`,
      answers: {
        groupLabel: (n) => `Responder pergunta ${n}`,
        yes: 'Sim',
        no: 'Não',
      },
      results: {
        slowDown: {
          imageAlt: 'Um celular virado de tela para baixo sobre uma manta marrom texturizada, visto de cima',
          heading: 'Talvez seja melhor desacelerar por enquanto.',
          introParagraphs: [
            'Querer proximidade depois de um término é normal. Isso não é um veredito sobre o seu valor.',
            'Agora, namorar pode ser um jeito de pular os sentimentos difíceis, não de conhecer alguém. Isso pode parecer bom por um tempo e mesmo assim te deixar travado depois.',
            'Você não precisa estar "superado" em relação ao seu ex. A questão é se ele ainda é o principal motivo para você estar dando match em alguém.',
          ],
          closingParagraph:
            'Se puder, crie um pouco mais de distância do seu ex. Anote o que você realmente quer ao namorar. Você pode refazer esse teste daqui a algumas semanas.',
        },
        goSlow: {
          heading: 'Sinais mistos. Se for namorar, mantenha sem pressão.',
          introParagraphs: [
            'Ainda existe algum apego ao seu ex. Isso não significa automaticamente que você deve parar.',
            'Um café tudo bem. Planejar um relacionamento inteiro no segundo encontro já é demais. Perceba se você sente curiosidade pela pessoa à sua frente, não só alívio por alguém estar prestando atenção em você.',
            'Uma onda de tristeza depois de um encontro bom não significa que você falhou. Significa que você é humano.',
          ],
          closingParagraph:
            'Depois de cada encontro, pergunte a si mesmo: você queria companhia, ou queria distração? Não existe resposta errada. Você só quer saber a verdade.',
        },
        ready: {
          imageAlt: 'Uma janela de madeira aberta em uma parede verde iluminada pelo sol',
          heading: 'Pode ser que você esteja num lugar mais estável para namorar.',
          paragraphs: [
            'Isso não é permissão para se apressar, e não é uma promessa de que namorar vai ser fácil.',
            'Estar pronto é uma direção, não uma linha de chegada. Você ainda pode ter dias ruins, músicas que mexem com você, ou uma terça-feira qualquer que dói.',
            'Continue honesto se algo reacender sentimentos antigos. Você não deve a ninguém a atuação de estar curado.',
            'Namore de um jeito justo com você e com a outra pessoa. Curiosidade é um bom sinal. Salvamento não é.',
          ],
        },
      },
      slowDownTips: {
        hope: 'Namorar enquanto parte de você ainda espera uma reconciliação costuma te deixar em suspenso. Dolorido, não patético.',
        fresh: 'Quando tudo ainda está muito recente, faz sentido querer substituir essa sensação. Isso nem sempre significa que você está pronto.',
        contact: 'Dá pra namorar enquanto você divide a criação dos filhos ou se organiza com o ex. É mais difícil se você ainda estiver vivendo emocionalmente no relacionamento antigo.',
        new: 'Talvez você deva a si mesmo e a essa pessoa uma conversa honesta sobre onde seu coração ainda está.',
        steady: 'Suas respostas sugerem que seu ex ainda ocupa bastante espaço. Mais tempo sozinho pode ajudar antes de você investir em alguém novo.',
      },
      goSlowFreshTip:
        'Notícias sobre seu ex provavelmente ainda doem. Isso é esperado tão cedo. Só perceba se namorar está te ajudando a curar ou a evitar.',
      cta: {
        tierSlowDown: 'Ainda não sabe o que quer do namoro?',
        tierGoSlow: 'Tentando namorar sem se perder no processo?',
        tierReady: 'Quer continuar honesto consigo mesmo enquanto namora?',
        copy: 'O Breakup Reset te ajuda a fazer check-ins com você mesmo e manter um diário privado. É de graça.',
        button: 'Baixar o Breakup Reset de graça',
      },
      announce: {
        pickWhereAreYou: 'Escolha em que momento você está agora.',
        gotItFourQuestions: 'Entendido. Agora, quatro perguntas.',
        question: (n, total) => `Pergunta ${n} de ${total}`,
        resultSlowDown: 'Resultado: talvez seja melhor desacelerar por enquanto.',
        resultGoSlow: 'Resultado: sinais mistos. Se for namorar, vá devagar.',
        resultReady: 'Resultado: pode ser que você esteja num lugar mais estável para namorar.',
      },
      related: {
        heading: 'Mais testes para você',
        items: [
          {
            href: '/breakup-reset/blog/pt/friends-with-ex-quiz/',
            title: 'Ainda dá pra ter amizade com o ex? Teste grátis',
          },
          {
            href: '/breakup-reset/blog/pt/should-i-do-no-contact-quiz/',
            title: 'Devo cortar contato com o ex? Teste grátis',
          },
        ],
        footerLabel: 'Baixar o Breakup Reset de graça',
        footerHref: downloadUrl,
      },
    };
  }

  return {
    locale,
    title: 'Am I Ready to Date Again? Free Quiz',
    description:
      'No three-month rule. Four quick questions to see if you want to date someone new, or just escape missing your ex. Works if you still hope, co-parent, or already met someone.',
    ogTitle: 'Am I Ready to Date Again? Free Quiz | Breakup Reset',
    schemaName: 'Am I Ready to Date Again? Free Quiz',
    schemaDescription:
      'A short quiz to see whether you want to date someone new or are still mainly trying not to feel your ex. Includes breakups where you still hope, co-parent, or already met someone.',
    pagePath,
    pageUrl,
    downloadUrl,
    ogImage: {
      src: '/breakup-reset/blog/covers/getting-over-a-breakup.jpg',
      width: 1200,
      height: 800,
      alt: 'Person sitting alone on a bench looking down an oak-lined avenue',
    },
    faqItems: [
      {
        question: 'Is there a right amount of time to wait before dating again?',
        answer:
          'No single number works for everyone. Some people need months. Some feel okay sooner. What matters more is why you want to date: curiosity about someone new, or escape from missing your ex.',
      },
      {
        question: 'Are rebound relationships always a bad idea?',
        answer:
          'Not always. For some people, dating again helps them feel like themselves and think about their ex less. For others, it is a way to avoid grief that catches up later. This quiz is about which camp you might be in right now.',
      },
      {
        question: 'Can I date if I still miss my ex?',
        answer:
          'Missing someone does not automatically mean stop. It means paying attention to whether missing them is still steering your choices: who you swipe on, what you compare, whether you are hoping to be seen.',
      },
      {
        question: 'What if I still hope we get back together?',
        answer:
          'That hope is human. Dating while holding onto it often keeps you suspended. You can want them back and still choose to pause dating until you know what you want on your own.',
      },
      {
        question: 'Can I date while co-parenting or staying in touch with my ex?',
        answer:
          'Yes. Many people do. It helps to keep logistics separate from romance, and to be upfront with new partners when the time is right. You do not need your ex fully out of your life. You do need them not to be the main story in your head.',
      },
      {
        question: 'I am already seeing someone. Should I take this quiz?',
        answer:
          'Yes. The fair question is whether you are being honest with yourself and with them about how much of your heart is still elsewhere.',
      },
      {
        question: 'What if I felt fine until I heard my ex is dating?',
        answer:
          'That can hurt even when you are doing well. One bad day does not erase progress. If it wrecks you for days and changes every decision, that is worth noticing.',
      },
      {
        question: 'I do not feel safe around my ex. Is this quiz enough?',
        answer:
          'No. If you do not feel safe, focus on support from people you trust or a professional. This quiz is for the messy middle, not danger.',
      },
    ],
    heading: 'Am I Ready to Date Again? Free Quiz',
    progress: {
      ariaLabel: 'Quiz progress',
      stepLabel: (n) => `Question ${n}`,
    },
    landing: {
      heading: 'Ready to date again, or just tired of being alone?',
      illustrationAlt: 'A single flower outline on a stem',
      copy:
        'There is no perfect timeline. Some people need a long pause. Some people are okay sooner. What matters is whether you want to meet someone new, or stop feeling what you feel about your ex.',
      followCopy: 'Four honest yes-or-no questions. No account needed.',
      startButton: 'Start the quiz',
    },
    constraintPanel: {
      eyebrow: 'First, your situation',
      heading: 'Where are you at right now?',
      copy: 'Pick the closest match.',
      helper: 'No perfect answer. Pick what feels true today. You can retake this next month.',
    },
    constraints: [
      { id: 'hope', label: 'I still hope we might get back together' },
      { id: 'fresh', label: 'It ended recently and still feels raw' },
      { id: 'contact', label: 'We still have to stay in touch (kids, work, etc.)' },
      { id: 'new', label: "I'm already talking to or dating someone" },
      { id: 'steady', label: "It's been a while and I'm exploring" },
    ],
    question4ByConstraint: {
      hope: 'Are you dating partly to make your ex jealous, or to show you have moved on?',
      fresh:
        'Are you dating mostly because the quiet and grief feel unbearable, not because you want to meet someone?',
      contact:
        'On early dates, do you end up talking about your ex or the breakup more than you meant to?',
      new: 'If this new person asked how you still feel about your ex, would you panic or want to run?',
      steady:
        'Are you dating mostly because you hate being alone, not because you are curious about someone new?',
    },
    questionsShared: [
      'Are you hoping someone new will make you stop missing your ex?',
      'Do you still compare people you meet to your ex?',
      'If you found out your ex is seeing someone new, would it ruin your whole day?',
    ],
    questionOf: (current, total) => `Question ${current} of ${total}`,
    answers: {
      groupLabel: (n) => `Answer question ${n}`,
      yes: 'Yes',
      no: 'No',
    },
    results: {
      slowDown: {
        imageAlt: 'A smartphone lying face-down on a textured brown blanket, seen from above',
        heading: 'You might want to slow down for now.',
        introParagraphs: [
          'Wanting closeness after a breakup is normal. This is not a verdict on your worth.',
          'Right now, dating might be a way to skip the hard feelings, not a way to meet someone. That can feel good for a while and still leave you stuck later.',
          'You do not have to be "over" your ex. The question is whether they are still the main reason you are swiping.',
        ],
        closingParagraph:
          'If you can, create a little more space from your ex. Write down what you actually want from dating. You can retake this in a few weeks.',
      },
      goSlow: {
        heading: 'Mixed signals. If you date, keep it low pressure.',
        introParagraphs: [
          'Some attachment to your ex is still there. That does not automatically mean stop.',
          'Coffee is fine. A whole relationship plot on date two is a lot. Notice if you feel curious about the person in front of you, not just relieved someone is paying attention.',
          'A sad wave after a good date does not mean you failed. It means you are human.',
        ],
        closingParagraph:
          'After each date, ask yourself: did I want company, or did I want distraction? There is no wrong answer. You just want to know the truth.',
      },
      ready: {
        imageAlt: 'A wooden window swung open on a sunlit green wall',
        heading: 'You might be in a steadier place to date.',
        paragraphs: [
          'This is not permission to rush, and it is not a promise dating will feel easy.',
          'Readiness is a direction, not a finish line. You can still have bad days, songs that hit wrong, or a random Tuesday that hurts.',
          'Stay honest if something spikes old feelings again. You do not owe anyone a performance of being healed.',
          'Date in a way that is fair to you and the other person. Curiosity is a good sign. Rescue is not.',
        ],
      },
    },
    slowDownTips: {
      hope: 'Dating while part of you still hopes for reunion usually keeps you in limbo. Painful, not pathetic.',
      fresh:
        'When everything is still raw, wanting to replace the feeling makes sense. It does not always mean you are ready.',
      contact:
        'You can date while you co-parent or coordinate. It is harder if you are still emotionally living in the old relationship.',
      new: 'You might owe yourself and this person an honest conversation about where your heart still is.',
      steady:
        'Your answers suggest your ex is still taking up a lot of space. More time on your own might help before you invest in someone new.',
    },
    goSlowFreshTip:
      'News about your ex would probably still sting. That is expected this soon. Just notice if dating is helping you heal or helping you avoid.',
    cta: {
      tierSlowDown: 'Not sure what you want from dating yet?',
      tierGoSlow: 'Trying to date without losing yourself in the process?',
      tierReady: 'Want to stay honest with yourself while you date?',
      copy: 'Breakup Reset helps you check in with yourself and keep a private journal. It is free.',
      button: 'Download Breakup Reset for Free',
    },
    announce: {
      pickWhereAreYou: 'Pick where you are at right now.',
      gotItFourQuestions: 'Got it. Four questions next.',
      question: (n, total) => `Question ${n} of ${total}`,
      resultSlowDown: 'Result: you might want to slow down for now.',
      resultGoSlow: 'Result: mixed signals. If you date, go slow.',
      resultReady: 'Result: you might be in a steadier place to date.',
    },
    related: {
      heading: 'More to read',
      items: [
        {
          href: '/breakup-reset/blog/en/am-i-ready-to-date-after-a-breakup/',
          title: 'Am I Ready to Date After a Breakup? What Research Actually Says',
        },
        {
          href: '/breakup-reset/blog/en/getting-over-a-breakup/',
          title: 'Getting over a Breakup: What the Research Actually Says',
        },
        {
          href: '/breakup-reset/blog/en/getting-over-someone-you-still-love/',
          title: 'Getting over Someone You Still Love',
        },
        {
          href: '/breakup-reset/blog/en/getting-over-long-term-relationship/',
          title: 'Getting over a Long-Term Relationship',
        },
        {
          href: '/breakup-reset/blog/en/friends-with-ex-quiz/',
          title: 'Am I Ready To Be Friends with My Ex? Free Quiz',
        },
        {
          href: '/breakup-reset/blog/en/should-i-do-no-contact-quiz/',
          title: 'Should I Do No Contact? Free Quiz',
        },
      ],
      footerLabel: 'Back to blog',
      footerHref: '/breakup-reset/blog/en/',
    },
  };
}
