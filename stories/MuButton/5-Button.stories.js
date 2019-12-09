import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MuButton from './button.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  title: 'Button',
};

export const Default = () => ({
  components: { MuButton },
  template: '<mu-button @click="action">Hello Button</mu-button>',
  methods: { action: action('clicked') },
});

