import React from 'react';
import { useLocation } from '@docusaurus/router';
import DocCardList from '@theme/DocCardList';
import { useCurrentSidebarSiblings } from '@docusaurus/plugin-content-docs/client';

const stripSlash = (path: string): string => path.replace(/\/$/, '');

/**
 * Auto-generated card grid for a docs section index page. Renders a DocCardList
 * of the current sidebar level's siblings, excluding the index page itself.
 * Works on any section index (tutorials, how-to, reference, explanation).
 */
export default function SectionCards(): React.JSX.Element {
  const { pathname } = useLocation();
  const here = stripSlash(pathname);
  const items = useCurrentSidebarSiblings().filter(
    item => !(item.type === 'link' && stripSlash(item.href) === here)
  );
  return <DocCardList items={items} />;
}
