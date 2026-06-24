import React from 'react';
import StartPage, { type StartPageData } from '@site/src/components/StartPage';

const data: StartPageData = {
  audience: 'Administering a collection',
  title: 'Administering a collection',
  kicker: 'Get started · Administering a collection',
  heading: 'Run a well-organized collection',
  subtitle: 'Five stops to a structured, secure, maintainable instance.',
  steps: [
    {
      title: 'Set up your team',
      description: 'Invite users, assign roles and groups.',
      minutes: '10 min',
      type: 'How-to',
      to: '/docs/reference/user-role-permissions',
    },
    {
      title: 'Shape your data',
      description: 'Design templates, properties and thesauri.',
      minutes: '15 min',
      type: 'Reference',
      to: '/docs/reference/property-types',
    },
    {
      title: 'Control access',
      description: 'Set public, shared and private permissions.',
      minutes: '10 min',
      type: 'How-to',
      to: '/docs/explanation/permissions-and-sharing',
    },
    {
      title: 'Bring in content',
      description: 'Bulk import via CSV and connect entities.',
      minutes: '10 min',
      type: 'Reference',
      to: '/docs/reference/csv-import',
    },
    {
      title: 'Keep it healthy',
      description: 'Backups, languages, and routine upkeep.',
      minutes: 'ongoing',
      type: 'Reference',
      to: '/docs/reference',
      ongoing: true,
    },
  ],
  goFurther: [
    {
      category: 'Tutorials',
      title: 'Setting up Uwazi',
      description: 'Guided setup for new administrators.',
      count: 'Tutorials',
      countTo: '/docs/tutorials',
    },
    {
      category: 'How-to guides',
      title: 'Get things done',
      description: 'Recipes for everyday admin tasks.',
      count: '24 guides',
      countTo: '/docs/how-to',
    },
    {
      category: 'Reference',
      title: 'Settings & roles',
      description: 'Collection settings and permissions detail.',
      count: '60+ entries',
      countTo: '/docs/reference/collection-settings',
    },
    {
      category: 'Explanation',
      title: 'How it fits together',
      description: 'The model behind permissions and sharing.',
      count: '12 articles',
      countTo: '/docs/explanation',
    },
  ],
};

export default function Administrators(): React.JSX.Element {
  return <StartPage {...data} />;
}
