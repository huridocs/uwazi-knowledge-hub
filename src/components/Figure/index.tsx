import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Variant = 'card' | 'paper';

export interface FigureProps extends Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'children'
> {
  /** Image source. Omit when passing custom content via `children`. */
  src?: string;
  /** Alt text. Required when `src` is set; ignored for `children`. */
  alt?: string;
  caption?: React.ReactNode;
  /**
   * Fixed aspect-ratio for the card, e.g. "16/9". When omitted (default), the
   * card height follows the image, so screenshots fit with equal padding and
   * never crop. Set this only when you want a uniform fixed-height band.
   */
  ratio?: string;
  variant?: Variant;
  /**
   * Arbitrary content to frame instead of an image, such as a Mermaid diagram.
   * When provided, `src` is ignored.
   */
  children?: React.ReactNode;
}

export default function Figure({
  src,
  alt,
  caption,
  ratio,
  variant = 'card',
  children,
  ...rest
}: FigureProps): React.JSX.Element {
  return (
    <figure className={styles.figure}>
      <div
        className={clsx(styles.frame, styles[variant])}
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        {children ?? (
          <img className={styles.image} src={src} alt={alt} {...rest} />
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
