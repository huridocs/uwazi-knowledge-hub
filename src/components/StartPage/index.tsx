import React from 'react';
import Layout from '@theme/Layout';
import GuidedPath, { type GuidedStep } from '@site/src/components/GuidedPath';
import DiataxisGrid, {
  type DiataxisCard,
} from '@site/src/components/DiataxisGrid';
import styles from './styles.module.css';

export interface StartPageData {
  audience: string;
  title: string;
  kicker: string;
  heading: string;
  subtitle: string;
  steps: GuidedStep[];
  goFurther: DiataxisCard[];
}

export default function StartPage({
  title,
  subtitle,
  kicker,
  heading,
  steps,
  goFurther,
}: StartPageData): React.JSX.Element {
  return (
    <Layout title={title} description={subtitle}>
      <main className={styles.wrap}>
        <span className="uw-kicker">{kicker}</span>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <GuidedPath steps={steps} />

        <hr className={styles.rule} />

        <span className="uw-kicker uw-kicker--muted">After the basics</span>
        <h2 className={styles.afterHeading}>
          When you&rsquo;re ready to go further
        </h2>
        <DiataxisGrid cards={goFurther} columns={4} />
      </main>
    </Layout>
  );
}
