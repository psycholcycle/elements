import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Tooltip from './index';
import Theme from '../theme';
import Button from '../button';

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <div>
      <Tooltip place="left" bg="indigo" title="hello from popover">
        <Button>Click me</Button>
      </Tooltip>
    </div>
  </Theme>
));

stories.add('hidden', () => (
  <Theme>
    <div>
      <Tooltip place="bottom" color="red" arrowColor="blue" bg="blue" title="hello from popover">
        <Button m={'500px'}>Click me</Button>
      </Tooltip>
    </div>
  </Theme>
));
