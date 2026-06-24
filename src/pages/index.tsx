import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DiataxisGrid, {
  type DiataxisCard,
} from '@site/src/components/DiataxisGrid';
import styles from './index.module.css';

const cards: DiataxisCard[] = [
  {
    number: '01',
    category: 'Tutorials',
    title: 'Learn the basics',
    description:
      'Step-by-step lessons that take you from zero to your first published collection.',
    links: [
      { label: 'Build your first collection', to: '/docs/tutorials' },
      { label: 'Publish a public library', to: '/docs/tutorials' },
      { label: 'Create a document template', to: '/docs/tutorials' },
    ],
    count: '8 lessons',
  },
  {
    number: '02',
    category: 'How-to guides',
    title: 'Get things done',
    description: 'Practical recipes for the tasks you handle day to day.',
    links: [
      { label: 'Upload & organize documents', to: '/docs/how-to' },
      { label: 'Set user permissions', to: '/docs/how-to' },
      { label: 'Translate your collection', to: '/docs/how-to' },
    ],
    count: '24 guides',
  },
  {
    number: '03',
    category: 'Reference',
    title: 'Look it up',
    description:
      'Precise details for every feature, field, and setting in Uwazi.',
    links: [
      { label: 'Templates & properties', to: '/docs/reference/property-types' },
      { label: 'Search filters', to: '/docs/reference' },
      {
        label: 'User roles & access',
        to: '/docs/reference/user-role-permissions',
      },
    ],
    count: '60+ entries',
  },
  {
    number: '04',
    category: 'Explanation',
    title: 'Understand the why',
    description:
      'The ideas and structure behind how Uwazi organizes information.',
    links: [
      { label: 'What is an entity?', to: '/docs/explanation/building-blocks' },
      {
        label: 'Public vs. private libraries',
        to: '/docs/explanation/permissions-and-sharing',
      },
      {
        label: 'Thesauri & classification',
        to: '/docs/explanation/building-blocks',
      },
    ],
    count: '12 articles',
  },
];

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation, guides and reference for Uwazi."
    >
      <main className={styles.wrap}>
        <div className={styles.hero}>
          <span className="uw-kicker">Uwazi · Documentation</span>
          <h1 className={styles.headline}>
            Everything you need to <em>publish</em> and <em>defend</em> your
            document collections.
          </h1>
          <p className={styles.subtitle}>
            Tutorials, guides, and reference for the open-source platform human
            rights organizations use to organize and share evidence.
          </p>
        </div>
        <hr className={styles.rule} />
        <span className="uw-kicker uw-kicker--muted">
          Browse the documentation
        </span>
        <div className={styles.gridWrap}>
          <DiataxisGrid cards={cards} columns={2} headingLevel={2} />
        </div>
      </main>
    </Layout>
  );
}
