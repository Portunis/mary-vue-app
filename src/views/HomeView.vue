<template>
  <div class="home">Главная страница для всех</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useAuthUserStore } from "@/store/authUser";

export default defineComponent({
  name: "HomeView",
  methods: {
    ...mapActions(useAuthUserStore, {
      authGoogle: "authGoogle",
    }),
    googleAuth() {
      this.authGoogle();
    },
  },
});
</script>
