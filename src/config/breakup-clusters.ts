export const BREAKUP_CLUSTERS = [
  'no-contact',
  'attachment',
  'grief-functioning',
  'readiness',
  'situational',
  'product',
] as const;

export type BreakupCluster = (typeof BREAKUP_CLUSTERS)[number];

export type BreakupPostRole = 'pillar' | 'satellite' | 'commercial';

export const CLUSTER_META: Record<
  BreakupCluster,
  {
    title: string;
    description: string;
    pillarKey?: string;
    quizHref?: string;
    quizLabel?: string;
  }
> = {
  'no-contact': {
    title: 'No contact & boundaries',
    description:
      'What no contact is, when it helps, how long to keep it, and what to do when full distance is not possible.',
    pillarKey: 'no-contact-after-breakup',
    quizHref: '/breakup-reset/blog/en/should-i-do-no-contact-quiz/',
    quizLabel: 'Should I do no contact? Quiz',
  },
  attachment: {
    title: 'Attachment after a breakup',
    description:
      'How anxious and avoidant attachment shape breakup grief, reaching, shutdown, and what actually helps.',
    pillarKey: 'anxious-attachment-after-breakup',
  },
  'grief-functioning': {
    title: 'Grief, numbness & getting through the day',
    description:
      'First-week recovery, waves of grief, functioning when you feel stuck, and practical coping that does not make things worse.',
    pillarKey: 'what-to-do-after-a-breakup',
  },
  readiness: {
    title: 'Dating & friendship readiness',
    description:
      'When you are ready to date again, whether friendship with an ex can work, and how to handle them moving on first.',
    pillarKey: 'am-i-ready-to-date-after-a-breakup',
    quizHref: '/breakup-reset/blog/en/ready-to-date-again-quiz/',
    quizLabel: 'Am I ready to date again? Quiz',
  },
  situational: {
    title: 'Hard situations',
    description:
      'Living together after a breakup, infidelity, and other situations that change how recovery works.',
  },
  product: {
    title: 'Breakup Reset app',
    description:
      'How the Breakup Reset app supports daily recovery, no contact, and small steps after a breakup.',
    pillarKey: 'breakup-reset-app',
  },
};

export function topicHubPath(cluster: BreakupCluster, locale = 'en'): string {
  return `/breakup-reset/blog/${locale}/topics/${cluster}/`;
}
