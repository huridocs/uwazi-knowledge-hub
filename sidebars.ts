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
  tutorials: [
    'tutorials/index',
    {
      type: 'category',
      label: 'Using Uwazi',
      link: {
        type: 'generated-index',
        title: 'Using Uwazi tutorials',
        description: 'Learn how to start using Uwazi.',
      },
      items: [
        'tutorials/take-a-tour-of-uwazi',
        'tutorials/find-what-you-need',
        'tutorials/add-and-connect-an-entity',
      ],
    },
    {
      type: 'category',
      label: 'Setting up Uwazi',
      link: {
        type: 'generated-index',
        title: 'Setting up Uwazi tutorials',
        description: 'Learn how to set up your Uwazi instance.',
      },
      items: [
        'tutorials/build-your-first-collection',
        'tutorials/set-up-your-team',
        'tutorials/publish-your-collection',
      ],
    },
  ],
  howTo: [
    'how-to/index',
    {
      type: 'category',
      label: 'Structuring your collection',
      link: {
        type: 'generated-index',
        title: 'Structuring your collection',
        description: 'How-to guides on how to structure your collection',
      },
      items: [
        'how-to/structuring-your-collection/create-and-configure-a-template',
        'how-to/structuring-your-collection/create-and-manage-a-thesaurus',
        'how-to/structuring-your-collection/link-a-thesaurus-to-a-template',
        'how-to/structuring-your-collection/relationship-properties',
        'how-to/structuring-your-collection/manage-filters',
      ],
    },
    {
      type: 'category',
      label: 'Translating your collection',
      link: {
        type: 'generated-index',
        title: 'Translating your collection',
        description: 'How-to guides on how to translate your collection',
      },
      items: [
        'how-to/translating-your-collection/manage-languages',
        'how-to/translating-your-collection/translate-collection-contents',
        'how-to/translating-your-collection/translate-the-user-interface',
      ],
    },
    {
      type: 'category',
      label: 'Working with content',
      link: {
        type: 'generated-index',
        title: 'Working with content',
        description:
          'How-to guides on how to work with content within your collection',
      },
      items: ['how-to/working-with-content/search-filter-and-sort-the-library'],
    },
  ],
  reference: [
    'reference/index',
    'reference/collection-settings',
    'reference/user-role-permissions',
    'reference/multi-language-support',
    'reference/property-types',
    'reference/csv-import',
    'reference/page-visualization-components',
    'reference/self-hosting',
    'reference/glossary',
  ],
  explanation: [
    'explanation/index',
    'explanation/building-blocks',
    'explanation/library-and-search',
    'explanation/permissions-and-sharing',
    'explanation/multilingual-content',
    'explanation/pages-and-visualizations',
    'explanation/ml-extraction',
  ],
  // apiSidebar and resources are intentionally omitted: their docs are excluded
  // from the build (see docs.exclude) until surfaced in the navigation.
};

export default sidebars;
