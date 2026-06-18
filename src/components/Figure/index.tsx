import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Variant = 'card' | 'paper';

export interface FigureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  /**
   * Fixed aspect-ratio for the card, e.g. "16/9". When omitted (default), the
   * card height follows the image, so screenshots fit with equal padding and
   * never crop. Set this only when you want a uniform fixed-height band.
   */
  ratio?: string;
  variant?: Variant;
}

export default function Figure({
  src,
  alt,
  caption,
  ratio,
  variant = 'card',
  ...rest
}: FigureProps): React.JSX.Element {
  return (
    <figure className={styles.figure}>
      <div
        className={clsx(styles.frame, styles[variant])}
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        <img className={styles.image} src={src} alt={alt} {...rest} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
