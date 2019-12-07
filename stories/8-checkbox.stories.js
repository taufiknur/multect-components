import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyCheckbox from './preset/checkbox.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  title: 'Checkbox',
};

export const Default = () => ({
  components: { MyCheckbox },
  template: '<my-checkbox @click="action">Hello Button</my-checkbox>',
  methods: { action: action('clicked') },
});
