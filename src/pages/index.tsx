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
    description: 'From zero to your first published collection.',
    links: [
      {
        label: 'Take a tour of Uwazi',
        to: '/docs/tutorials/take-a-tour-of-uwazi',
      },
      {
        label: 'Build your first collection',
        to: '/docs/tutorials/build-your-first-collection',
      },
      {
        label: 'Publish your collection',
        to: '/docs/tutorials/publish-your-collection',
      },
    ],
    count: '6 lessons',
  },
  {
    number: '02',
    category: 'How-to guides',
    title: 'Get things done',
    description: 'Practical recipes for your daily tasks.',
    links: [
      {
        label: 'How to create and configure a template',
        to: '/docs/how-to/structuring-your-collection/create-and-configure-a-template',
      },
      {
        label: 'How to import entities from a CSV file',
        to: '/docs/how-to/working-with-content/csv-import',
      },
      {
        label: 'How to manage users and groups',
        to: '/docs/how-to/managing-your-instance/user-management',
      },
    ],
    count: '21 guides',
  },
  {
    number: '03',
    category: 'Reference',
    title: 'Look it up',
    description: 'Precise details for features and settings in Uwazi.',
    links: [
      {
        label: 'Collection settings',
        to: '/docs/reference/collection-settings',
      },
      {
        label: 'Multi-language support',
        to: '/docs/reference/multi-language-support',
      },
      {
        label: 'Property types',
        to: '/docs/reference/property-types',
      },
    ],
    count: '8 articles',
  },
  {
    number: '04',
    category: 'Explanation',
    title: 'Understand the why',
    description: 'The ideas and structure behind how Uwazi works.',
    links: [
      {
        label: "Understanding Uwazi's building blocks",
        to: '/docs/explanation/building-blocks',
      },
      {
        label: 'How permissions and sharing work',
        to: '/docs/explanation/permissions-and-sharing',
      },
      {
        label: 'Building pages with live data',
        to: '/docs/explanation/pages-and-visualizations',
      },
    ],
    count: '6 articles',
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
          <span className="uw-kicker">Uwazi · Help</span>
          <h1 className={styles.headline}>
            Everything you need to get Uwazi working for you.
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
