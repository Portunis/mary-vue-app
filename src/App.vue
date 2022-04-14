<template>
  <component :is="layout">
    <template v-slot:content>
      <router-view />
    </template>
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useAuthUserStore } from "@/store/authUser";

export default defineComponent({
  name: "app",
  computed: {
    layout: function () {
      return this.$route.meta.layout || "default-layout";
    },
  },
  methods: {
    ...mapActions(useAuthUserStore, {
      getUser: "getUserAuth",
    }),
  },
  created() {
    this.getUser();
  },
});
</script>
<style lang="scss"></style>
