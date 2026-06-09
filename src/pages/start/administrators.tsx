import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../index.module.css';

type PathLink = { label: string; to: string };
type PathSection = { heading: string; links: PathLink[] };

const title = 'Administering an Uwazi instance';
const intro = 'Start here to learn how to best configure your instance.';
const sections: PathSection[] = [
  {
    heading: 'Start with a tutorial',
    links: [
      {
        label: 'Build your first collection',
        to: '/tutorials/setting-up-uwazi/build-first-collection',
      },
    ],
  },
  {
    heading: 'Understand the basics',
    links: [
      {
        label: 'Permissions and sharing',
        to: '/explanation/permissions-sharing',
      },
    ],
  },
  {
    heading: 'Common tasks',
    links: [
      {
        label: ' Account & security',
        to: '/how-to/account-security',
      },
      {
        label: 'Collection settings',
        to: '/how-to/collection-settings',
      },
    ],
  },
];

export default function Administrators(): React.JSX.Element {
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
