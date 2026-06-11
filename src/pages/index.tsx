// src/pages/index.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

interface NavigationSection {
  title: string;
  description: string;
  link: string;
  subsections?: string[];
}

const navigationSections: NavigationSection[] = [
  {
    title: 'Documentation',
    description:
      'Everything you need to learn, build, and understand our product',
    link: '/docs',
    subsections: ['Tutorials', 'How-to Guides', 'Reference', 'Explanation'],
  },
  {
    title: 'API',
    description:
      'Technical specifications and integration guides for developers',
    link: 'docs/api',
  },
  {
    title: 'Product Updates',
    description: 'Latest features, improvements, and release notes',
    link: '/blog',
  },
];

function NavigationSectionComponent({
  title,
  description,
  link,
  subsections,
}: NavigationSection) {
  return (
    <div className={styles.section}>
      <Link to={link} className={styles.sectionLink}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </Link>
      <p className={styles.sectionDescription}>{description}</p>
      {subsections && (
        <div className={styles.subsections}>
          {subsections.map((subsection, index) => (
            <span key={index} className={styles.subsection}>
              {subsection}
              {index < subsections.length - 1 && (
                <span className={styles.separator}>•</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Product documentation, API reference, and updates"
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>{siteConfig.title}</h1>
            <p className={styles.subtitle}>{siteConfig.tagline}</p>
          </header>

          <nav className={styles.navigation}>
            {navigationSections.map((section, index) => (
              <NavigationSectionComponent key={index} {...section} />
            ))}
          </nav>

          <footer className={styles.footer}>
            <p className={styles.footerText}>
              Need help?{' '}
              <Link to="/docs/tutorials" className={styles.footerLink}>
                Start with tutorials
              </Link>{' '}
              or{' '}
              <Link to="docs/api" className={styles.footerLink}>
                explore the API
              </Link>
            </p>
          </footer>
        </div>
      </main>
    </Layout>
  );
}
