import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyTable from './preset/table.vue';
import MyTable1 from './preset/table-1.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  title: 'Table',
};

export const Default = () => ({
  components: { MyTable },
  template: '<my-table @click="action">Hello Button</my-table>',
  methods: { action: action('clicked') },
});
export const Table_medium = () => ({
  components: { MyTable1 },
  template: '<my-table1 @click="action">Hello Button</my-table1>',
  methods: { action: action('clicked') },
});
