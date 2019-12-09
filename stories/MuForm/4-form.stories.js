import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyForm from './form.vue';
import MyForm1 from '.form-1.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  title: 'Form',
};

export const Default = () => ({
  components: { MyForm },
  template: '<my-form @click="action">Hello Button</my-form>',
  methods: { action: action('clicked') },
});
export const Form_style = () => ({
  components: { MyForm1 },
  template: '<my-form1 @click="action">Hello Button</my-form1>',
  methods: { action: action('clicked') },
});

