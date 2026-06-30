import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Read the Docs sets READTHEDOCS_CANONICAL_URL at build time. Deriving url and
// baseUrl from it keeps PR previews (served under a path) and the production
// custom domain (served at /) correct from one config.
const canonical = process.env.READTHEDOCS_CANONICAL_URL;

const config: Config = {
  title: 'Uwazi Docs',
  tagline:
    'Comprehensive documentation and resources for Uwazi following the Diátaxis framework',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: true,
  },

  // Set the production url of your site here
  url: canonical ? new URL(canonical).origin : 'https://docs.uwazi.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: canonical ? new URL(canonical).pathname : '/',

  // Read the Docs recommends trailing slashes so directory index.html files
  // resolve. onBrokenLinks: 'throw' guards against link regressions.
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'huridocs', // Usually your GitHub org/user name.
  projectName: 'uwazi-knowledge-hub', // Usually your repo name.

  onBrokenLinks: 'throw',

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Markdown configuration (v4-compatible)
  markdown: {
    mermaid: true,
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
          // Keep the API and Resources docs in source but out of the build
          // (no routes, no sitemap) until they are surfaced in the navigation.
          // Defaults are repeated because `exclude` replaces them.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'api/**',
            'resources/**',
            // Kept in source but out of the build until ready to surface.
            'reference/self-hosting.mdx',
          ],
        },
        // Blog (Product updates) kept in source but disabled until needed.
        blog: false,
        theme: {
          customCss: ['./src/css/fonts.css', './src/css/custom.css'],
        },
        pages: {
          // Keep the /start/* guided-path pages in source but exclude them from
          // the build (no routes, no sitemap) until a "Get started" entry point
          // links to them. Defaults are repeated because `exclude` replaces them.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'start/**',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DOCS',
      logo: {
        alt: 'Uwazi documentation portal',
        src: 'img/uwazi-logo.svg',
        srcDark: 'img/uwazi-logo-dark.svg',
        width: 96,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorials',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'howTo',
          position: 'left',
          label: 'How-to guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'reference',
          position: 'left',
          label: 'Reference',
        },
        {
          type: 'docSidebar',
          sidebarId: 'explanation',
          position: 'left',
          label: 'Explanation',
        },
        {
          href: 'https://github.com/huridocs/uwazi-knowledge-hub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        { label: 'Tutorials', to: '/docs/tutorials' },
        { label: 'How-to guides', to: '/docs/how-to' },
        { label: 'Reference', to: '/docs/reference' },
        { label: 'Explanation', to: '/docs/explanation' },
        { label: 'uwazi.io', href: 'https://www.uwazi.io' },
        {
          label: 'GitHub',
          href: 'https://github.com/huridocs/uwazi-knowledge-hub',
        },
      ],
      copyright: `© ${new Date().getFullYear()} Uwazi. Built by HURIDOCS (under the MIT License).<br />AI tools helped create this portal. A human reviewed, edited, and finalized all content, following HURIDOCS’ Internal AI Governance Policy and Framework.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
