import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './preset/button.vue';
import Mycard from './preset/card.vue';
import Myform from './preset/form.vue';

export default {
  title: 'a',
};

export const Button = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const Card = () => ({
  components: { Mycard },
  template: '<my-card @click="action">Hello Button</my-card>',
  methods: { action: action('clicked') },
});

export const Form = () => ({
  components: { Myform },
  template: '<my-form @click="action">Hello Button</my-form>',
  methods: { action: action('clicked') },
});
