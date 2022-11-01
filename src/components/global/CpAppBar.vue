<template>
  <v-app-bar></v-app-bar>
</template>
<script>
import { defineComponent } from "vue";

// Components
export default defineComponent({
  name: "CpAppBar",
  props: {
    thisPage: String,
  },
  data() {
    return {};
  },
  mounted() {},
});
</script>
<style lang="scss" scoped></style>
