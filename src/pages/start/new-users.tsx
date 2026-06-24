import React from 'react';
import StartPage, { type StartPageData } from '@site/src/components/StartPage';

const data: StartPageData = {
  audience: 'New to Uwazi',
  title: 'New to Uwazi',
  kicker: 'Get started · New to Uwazi',
  heading: 'Your first hour with Uwazi',
  subtitle: 'Five short steps, in order. Each one builds on the last.',
  steps: [
    {
      title: 'Understand the basics',
      description:
        'How Uwazi organizes information — entities, templates, and libraries — in five minutes of reading.',
      minutes: '10 min',
      type: 'Concept',
      to: '/docs/explanation/building-blocks',
    },
    {
      title: 'Set up your collection',
      description:
        'Create your workspace and decide what kind of records you want to store.',
      minutes: '10 min',
      type: 'Tutorial',
      to: '/docs/tutorials',
    },
    {
      title: 'Add your first documents',
      description:
        'Upload files and turn them into searchable, organized entities.',
      minutes: '15 min',
      type: 'Tutorial',
      to: '/docs/tutorials',
    },
    {
      title: 'Design a template',
      description:
        'Define the fields and structure that describe each record in your collection.',
      minutes: '15 min',
      type: 'Tutorial',
      to: '/docs/reference/property-types',
    },
    {
      title: 'Publish your library',
      description:
        'Make your collection public and shareable — or keep it private to your team.',
      minutes: '10 min',
      type: 'Tutorial',
      to: '/docs/tutorials',
    },
  ],
  goFurther: [
    {
      category: 'Tutorials',
      title: 'Learn the basics',
      description: 'Step-by-step lessons beyond the first hour.',
      count: '6 lessons',
      countTo: '/docs/tutorials',
    },
    {
      category: 'How-to guides',
      title: 'Get things done',
      description: 'Recipes for everyday tasks once you are set up.',
      count: 'TBD guides',
      countTo: '/docs/how-to',
    },
    {
      category: 'Reference',
      title: 'Look it up',
      description: 'Precise details for every feature and setting.',
      count: '8 entries',
      countTo: '/docs/reference',
    },
    {
      category: 'Explanation',
      title: 'Understand the why',
      description: 'The ideas behind how Uwazi works.',
      count: '6 articles',
      countTo: '/docs/explanation',
    },
  ],
};

export default function NewUsers(): React.JSX.Element {
  return <StartPage {...data} />;
}
