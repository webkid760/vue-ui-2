import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Alert from '../components/alert';
import '../components/index.css';

export default {
  title: 'Alert',
  component: Alert,
};

export const Main = () => ({
  components: { Alert },
  template: `<alert title="成功提示的文案" type="error"></alert>`
});


Main.story = {
  name: 'basic',
};


export const Sub = () => ({
  components: { Alert },
  template: `<Alert
    title="成功提示的文案"
    type="success" @click='action'>
  </Alert>`,
  methods: { action: action('clicked') },
});


Sub.story = {
  name: 'abc',
};
