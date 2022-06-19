<template>
  <div class="container">
    <nav style="padding-left: 20px">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'List' }">List</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </nav>

    <router-view />

    <!-- 안내창 -->
    <transition name="fade">
      <ToastBox :message="toastMessage" v-if="toastShow" />
    </transition>
  </div>
</template>

<script>
import ToastBox from "@/components/ToastBox.vue";
import { useToast } from "@/composables/toast.js";

export default {
  components: {
    ToastBox,
  },
  setup() {
    const { toastMessage, toastShow, triggerToast } = useToast();

    return {
      toastMessage,
      toastShow,
      triggerToast,
    };
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  background-color: #8bbbf0;
  width: 100vw;
  height: 100vh;
}
#app {
  padding-top: 5%;
  width: 40vw;
}
.container {
  background-color: white;
  border-radius: 30px;
  min-height: 705px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.pagination {
  justify-content: center;
  margin: 0;
  padding: 5% 0;
}
</style>