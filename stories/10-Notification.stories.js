import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyNotification from "./preset/notification.vue";
import MyModal1 from "./preset/modal-1.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  title: "Notification"
};

export const Default = () => ({
  components: { MyNotification },
  template: '<my-notification @click="action">Hello Button</my-notification>',
  methods: { action: action("clicked") }
});
