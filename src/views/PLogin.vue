<template>
  <div>
    TODO
    <v-text-field v-model="textValue" type="text" />
    <button @click="convertToUpperCase">To UpperCase</button>
  </div>
</template>

<script>
export default {
  name: "ALogin",
  data() {
    return { text: "Hello" };
  },
  computed: {
    textValue: {
      get() {
        return this.text;
      },
      set(value) {
        this.$store.dispatch("CHANGE_TEXT", value);
      },
    },
  },
  methods: {
    convertToUpperCase() {
      this.textValue = this.textValue.toUpperCase();
    },
  },
};
</script>
