import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Sidebar } from '../../src';

storiesOf('Sidebar', module)
  .add('Styleguide', () => (
    <Sidebar
      items={[
        {
          text: 'Getting started',
          iconCode: 464,
          children: [{ text: 'From CDN' }, { text: 'Installing from Github' }]
        },
        {
          text: 'Design',
          iconCode: 258,
          children: [{ text: 'Typography' },
            { text: 'Primary Colors' },
            { text: 'Secondary Colors' },
            { text: 'Background Colors' },
            { text: 'Status Colors' }
          ]
        },
        {
          text: 'Components',
          iconCode: 690,
          children: [
            { text: 'Alert' },
            { text: 'Buttons' },
            { text: 'Try Banner' }
          ]
        },
        {
          text: 'Email templates',
          iconCode: 778,
          children: [
            { text: 'Newsletter' },
            { text: 'Notifications' },
            { text: 'Notices' }
          ]
        },
        {
          text: 'Resources',
          iconCode: 733,
          children: [
            { text: 'Logos' },
            { text: 'Badges' },
            { text: 'Icons' }
          ]
        }
      ]}
    />
  ));