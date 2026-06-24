import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface DocLink {
  label: string;
  to: string;
}

export interface DiataxisCard {
  number?: string;
  category: string;
  title: string;
  description: string;
  links?: DocLink[];
  count?: string;
  countTo?: string;
  to?: string;
}

export default function DiataxisGrid({
  cards,
  columns,
  headingLevel = 3,
}: {
  cards: DiataxisCard[];
  columns: 2 | 4;
  headingLevel?: 2 | 3;
}): React.JSX.Element {
  const Title = `h${headingLevel}` as 'h2' | 'h3';
  return (
    <div
      className={`${styles.grid} ${columns === 2 ? styles.cols2 : styles.cols4}`}
    >
      {cards.map(card => (
        <div key={card.title} className={styles.card}>
          <div className={styles.top}>
            {card.number && <span className={styles.num}>{card.number}</span>}
            {card.category}
          </div>
          {card.to ? (
            <Link
              to={card.to}
              className={styles.title}
              style={{ display: 'block' }}
            >
              {card.title}
            </Link>
          ) : (
            <Title className={styles.title}>{card.title}</Title>
          )}
          <p className={styles.desc}>{card.description}</p>
          {card.links && card.links.length > 0 && (
            <>
              <hr className={styles.hr} />
              {card.links.map(l => (
                <Link key={l.to} to={l.to} className={styles.link}>
                  {l.label}
                </Link>
              ))}
            </>
          )}
          {card.count &&
            (card.countTo ? (
              <Link to={card.countTo} className={styles.count}>
                {card.count} →
              </Link>
            ) : (
              <div className={styles.count}>{card.count}</div>
            ))}
        </div>
      ))}
    </div>
  );
}
