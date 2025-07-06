import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function NotFound(): React.ReactElement {
  return (
    <Layout title="Page Not Found">
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.number}>404</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.homeButton}>
              Go Home
            </Link>
            <Link to="/docs" className={styles.docsButton}>
              Browse Docs
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
