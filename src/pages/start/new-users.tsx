import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../index.module.css';

type PathLink = { label: string; to: string };
type PathSection = { heading: string; links: PathLink[] };

const title = 'New to Uwazi';
const intro = 'Start here to learn the basics and find your way around.';
const sections: PathSection[] = [
  {
    heading: 'Start with a tutorial',
    links: [
      {
        label: 'Get started with Uwazi',
        to: '/tutorials/using-uwazi/get-started-with-uwazi',
      },
    ],
  },
  {
    heading: 'Understand the basics',
    links: [
      {
        label: 'How Uwazi models information',
        to: '/explanation/how-uwazi-models-information',
      },
    ],
  },
  {
    heading: 'Common tasks',
    links: [
      {
        label: 'Search and filter the Library',
        to: '/how-to/library-search-filters',
      },
      {
        label: 'Upload documents',
        to: '/how-to/documents-files',
      },
    ],
  },
];

export default function NewUsers(): React.JSX.Element {
  return (
    <Layout title={title} description={intro}>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{intro}</p>
          </header>

          <nav className={styles.navigation}>
            {sections.map(section => (
              <div key={section.heading} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.heading}</h2>
                <div className={styles.subsections}>
                  {section.links.map((link, index) => (
                    <span key={link.to} className={styles.subsection}>
                      <Link to={link.to} className={styles.footerLink}>
                        {link.label}
                      </Link>
                      {index < section.links.length - 1 && (
                        <span className={styles.separator}>•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </main>
    </Layout>
  );
}
