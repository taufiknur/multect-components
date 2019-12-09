import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyModal from './preset/modal.vue';
import MyModal1 from './preset/modal-1.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  title: 'Modal Dialog',
};

export const Default = () => ({
  components: { MyModal },
  template: '<my-modal @click="action">Hello Button</my-modal>',
  methods: { action: action('clicked') },
});
export const Modal_With_Input = () => ({
  components: { MyModal1 },
  template: '<my-modal1 @click="action">Hello Button</my-modal1>',
  methods: { action: action('clicked') },
});
