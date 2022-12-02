import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

let stories = storiesOf('Components/Tickets/Selector');
stories.add(
  'Default',
  () => {
    return {
      template: hbs`
        <Goods::Selector />
      `,
      context: {},
    };
  },
  {
    controls: { hideNoControlsWarning: true },
  }
);
