import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyCard from './preset/card.vue';
import MyCard1 from './preset/card-1.vue';
import MyCard2 from './preset/card-2.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  title: 'Card',
};

export const Default = () => ({
  components: { MyCard },
  template: '<my-card @click="action">Hello Button</my-card>',
  methods: { action: action('clicked') },
});
export const Card_Medium = () => ({
  components: { MyCard1 },
  template: '<my-card1 @click="action">Hello Button</my-card1>',
  methods: { action: action('clicked') },
});
export const Card_Large = () => ({
  components: { MyCard2 },
  template: '<my-card2 @click="action">Hello Button</my-card2>',
  methods: { action: action('clicked') },
});
