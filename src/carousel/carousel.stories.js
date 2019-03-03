import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, select, color, boolean } from '@storybook/addon-knobs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './index';
import Theme from '../theme';
import Block from '../block';
import Button from '../button';
import Image from '../image';
import Flex from '../flex';

const stories = storiesOf('Carousel', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Carousel dots height={'400px'} bg={'black'}>
      <Image
        src="https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg"
        variant="fluid"
        height="400px"
      />
      <Image
        src="https://photojournal.jpl.nasa.gov/jpeg/PIA18182.jpg"
        variant="fluid"
        height="400px"
      />
      <Image
        src="https://www.jpl.nasa.gov/images/cassini/20160408/PIA11141-16.jpg"
        variant="fluid"
        height="400px"
      />
    </Carousel>
  </Theme>
));
stories.add('with props', () => (
  <Theme>
    <Carousel
      dots={boolean('dots', true, 'Core')}
      height={'400px'}
      bg={'black'}
      p={text('p', '', 'Core')}
      pt={text('pt', '', 'Core')}
      pr={text('pr', '', 'Core')}
      pb={text('pb', '', 'Core')}
      pl={text('pl', '', 'Core')}
      px={text('px', '', 'Core')}
      py={text('py', '', 'Core')}
      m={text('m', '', 'Core')}
      mt={text('mt', '', 'Core')}
      mr={text('mr', '', 'Core')}
      mb={text('mb', '', 'Core')}
      ml={text('ml', '', 'Core')}
      mx={text('mx', '', 'Core')}
      my={text('my', '', 'Core')}
      bg={color('bg', 'white', 'Core')}
      display={select(
        'display',
        {
          block: 'block',
          inline: 'inline',
          'inline-block': 'inline-block',
          none: 'none',
        },
        'block',
        'Layout',
      )}
      size={text('size', '', 'Layout')}
      width={text('width', '', 'Layout')}
      minWidth={text('minWidth', '', 'Layout')}
      maxWidth={text('maxWidth', '', 'Layout')}
      height={text('height', '', 'Layout')}
      minHeight={text('minHeight', '', 'Layout')}
      maxHeight={text('maxHeight', '', 'Layout')}>
      <Image
        src="https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg"
        variant="fluid"
        height="400px"
      />
      <Image
        src="https://photojournal.jpl.nasa.gov/jpeg/PIA18182.jpg"
        variant="fluid"
        height="400px"
      />
      <Image
        src="https://www.jpl.nasa.gov/images/cassini/20160408/PIA11141-16.jpg"
        variant="fluid"
        height="400px"
      />
    </Carousel>
  </Theme>
));
