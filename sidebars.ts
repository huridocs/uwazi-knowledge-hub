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
      ],
    },
  ],
  howTo: ['how-to/index'],
  reference: ['reference/index'],
  explanation: ['explanation/index'],
  apiSidebar: ['api/index'],
  resources: ['resources/index'],
};

export default sidebars;
