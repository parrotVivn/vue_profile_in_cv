<template>
  <v-responsive>
    <v-sheet class="bg-transparent">
      <div>News</div>
    </v-sheet></v-responsive
  >
</template>

<script>
export default {
  props: {
    thisPage: String,
  },
  mounted() {
    console.log(this.thisPage);
  },
};
</script>

<style></style>
