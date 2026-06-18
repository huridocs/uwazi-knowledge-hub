import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Variant = 'card';

export interface FigureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  ratio?: string;
  variant?: Variant;
}

export default function Figure({
  src,
  alt,
  caption,
  ratio = '16/9',
  variant = 'card',
  ...rest
}: FigureProps): React.JSX.Element {
  return (
    <figure className={styles.figure}>
      <div
        className={clsx(styles.frame, styles[variant])}
        style={{ aspectRatio: ratio }}
      >
        <img className={styles.image} src={src} alt={alt} {...rest} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
