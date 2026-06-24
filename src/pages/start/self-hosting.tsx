import React from 'react';
import StartPage, { type StartPageData } from '@site/src/components/StartPage';

const data: StartPageData = {
  audience: 'Self-hosting Uwazi',
  title: 'Self-hosting Uwazi',
  kicker: 'Get started · Self-hosting Uwazi',
  heading: 'From a bare server to a live instance',
  subtitle: 'Four stops with copy-paste commands.',
  steps: [
    {
      title: 'Check prerequisites',
      description: 'Docker, a domain, and minimum resources.',
      minutes: '10 min',
      type: 'Reference',
      to: '/docs/reference/self-hosting',
    },
    {
      title: 'Install the stack',
      description: 'Run Uwazi with Docker Compose.',
      minutes: '20 min',
      type: 'How-to',
      to: '/docs/reference/self-hosting',
    },
    {
      title: 'Configure & secure',
      description: 'Environment, TLS certificates, email.',
      minutes: '15 min',
      type: 'Reference',
      to: '/docs/reference/self-hosting',
    },
    {
      title: 'Maintain & upgrade',
      description: 'Backups, monitoring, version updates.',
      minutes: 'ongoing',
      type: 'Reference',
      to: '/docs/reference/self-hosting',
    },
  ],
  goFurther: [
    {
      category: 'Reference',
      title: 'Self-hosting',
      description: 'The full self-hosting reference.',
      count: 'Reference',
      countTo: '/docs/reference/self-hosting',
    },
    {
      category: 'How-to guides',
      title: 'Operations',
      description: 'Backups, upgrades and maintenance recipes.',
      count: '24 guides',
      countTo: '/docs/how-to',
    },
    {
      category: 'Explanation',
      title: 'Architecture',
      description: 'How the Uwazi stack is put together.',
      count: '12 articles',
      countTo: '/docs/explanation',
    },
    {
      category: 'API',
      title: 'Build with the API',
      description: 'Automate your self-hosted instance.',
      count: 'API docs',
      countTo: '/docs/api',
    },
  ],
};

export default function SelfHosting(): React.JSX.Element {
  return <StartPage {...data} />;
}
