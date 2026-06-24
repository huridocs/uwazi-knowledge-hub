import React from 'react';
import StartPage, { type StartPageData } from '@site/src/components/StartPage';

const data: StartPageData = {
  audience: 'Building with the API',
  title: 'Building with the API',
  kicker: 'Get started · Building with the API',
  heading: 'From an API token to your first integration',
  subtitle: 'Four stops, each with a code sample.',
  steps: [
    {
      title: 'Authenticate',
      description: 'Create a key and sign your requests.',
      minutes: '5 min',
      type: 'Reference',
      to: '/docs/api',
    },
    {
      title: 'Make your first call',
      description: 'Query the Library and read entities.',
      minutes: '10 min',
      type: 'Tutorial',
      to: '/docs/api',
    },
    {
      title: 'Write data',
      description: 'Create and update entities in code.',
      minutes: '15 min',
      type: 'How-to',
      to: '/docs/api',
    },
    {
      title: 'Automate',
      description: 'Batch jobs and scheduled tasks.',
      minutes: '10 min',
      type: 'How-to',
      to: '/docs/api',
      ongoing: true,
    },
  ],
  goFurther: [
    {
      category: 'API',
      title: 'API reference',
      description: 'Every endpoint, parameter and response.',
      count: 'API docs',
      countTo: '/docs/api',
    },
    {
      category: 'How-to guides',
      title: 'Integration recipes',
      description: 'Common automation patterns.',
      count: '24 guides',
      countTo: '/docs/how-to',
    },
    {
      category: 'Reference',
      title: 'Data model',
      description: 'Templates, entities and properties.',
      count: '60+ entries',
      countTo: '/docs/reference/property-types',
    },
    {
      category: 'Explanation',
      title: 'How Uwazi models data',
      description: 'The concepts behind the API.',
      count: '12 articles',
      countTo: '/docs/explanation/building-blocks',
    },
  ],
};

export default function Developers(): React.JSX.Element {
  return <StartPage {...data} />;
}
