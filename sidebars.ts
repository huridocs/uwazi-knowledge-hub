import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'tutorials/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      link: {
        type: 'doc',
        id: 'how-to/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'doc',
        id: 'reference/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Explanations',
      link: {
        type: 'doc',
        id: 'explanations/index',
      },
      items: [],
    },
  ],

  apiSidebar: ['api/index'],
};

export default sidebars;
