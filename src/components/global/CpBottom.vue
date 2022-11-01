<template>
  <v-responsive></v-responsive>
</template>
<script>
import { defineComponent } from "vue";

// Components
export default defineComponent({
  name: "CpBottom",
  props: {
    thisPage: String,
  },
  data() {
    return {
      type: {
        model: "medium",
        radius: "rounded",
      },
      weathers: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  mounted() {
    console.log(this.thisPage);
  },
});
</script>
