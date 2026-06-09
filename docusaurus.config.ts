import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Knowledge Hub',
  tagline:
    'Comprehensive documentation and resources for Uwazi following the Diátaxis framework',
  //favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: true,
  },

  // Set the production url of your site here
  url: 'https://knowledge-hub.uwazi.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'huridocs', // Usually your GitHub org/user name.
  projectName: 'uwazi-knowledge-hub', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Markdown configuration (v4-compatible)
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/huridocs/uwazi-knowledge-hub/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/huridocs/uwazi-knowledge-hub/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: ':uwazi Knowledge Hub',
      //logo: {
      //  alt: 'Uwazi Logo',
      //  src: 'img/logo.svg',
      //},
      items: [
        {
          type: 'dropdown',
          label: 'Get started',
          position: 'left',
          items: [
            { label: 'New to Uwazi', to: '/start/new-users' },
            {
              label: 'Administering a collection',
              to: '/start/administrators',
            },
            { label: 'Self-hosting Uwazi', to: '/start/self-hosting' },
            { label: 'Building with the API', to: '/start/developers' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorials',
              label: 'Tutorials',
            },
            {
              type: 'docSidebar',
              sidebarId: 'howTo',
              label: 'How-to guides',
            },
            {
              type: 'docSidebar',
              sidebarId: 'reference',
              label: 'Reference',
            },
            {
              type: 'docSidebar',
              sidebarId: 'explanation',
              label: 'Explanation',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resources',
          position: 'left',
          label: 'Resources',
        },
        { to: '/blog', label: 'Product updates', position: 'left' },
        {
          href: 'https://github.com/huridocs/uwazi-knowledge-hub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/tutorials',
            },
            {
              label: 'How-to Guides',
              to: '/docs/how-to',
            },
            {
              label: 'Reference',
              to: '/docs/reference',
            },
            {
              label: 'Explanations',
              to: '/docs/explanations',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support',
              href: '#',
            },
            {
              label: 'Feedback',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/huridocs/uwazi-knowledge-hub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HURIDOCS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
