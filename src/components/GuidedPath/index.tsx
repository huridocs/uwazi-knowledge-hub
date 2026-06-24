import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface GuidedStep {
  title: string;
  description: string;
  minutes: string;
  type: string;
  to: string;
  ongoing?: boolean;
}

export default function GuidedPath({
  steps,
}: {
  steps: GuidedStep[];
}): React.JSX.Element {
  return (
    <div className={styles.tl}>
      {steps.map((step, i) => (
        <div key={step.title} className={styles.step}>
          <div
            className={`${styles.badge} ${step.ongoing ? styles.badgeOngoing : ''}`}
          >
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className={styles.card}>
            <Link to={step.to} className={styles.start}>
              Start →
            </Link>
            <h4 className={styles.title}>{step.title}</h4>
            <p className={styles.desc}>{step.description}</p>
            <div className={styles.meta}>
              {step.minutes} <span>·</span>{' '}
              <span className={styles.tag}>{step.type}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
