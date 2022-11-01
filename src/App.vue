<template>
  <v-card class="mx-auto">
    <v-layout>
      <cp-app-bar />
      <cp-nav />
      <v-main>
        <v-container fluid>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    componentkey: 0,
    thisPage: "",
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
    ],
  }),
  setup() {},
  methods: {
    updateComponentKey() {
      this.componentkey++;
    },
    _findLocation(_path) {
      const router = this.$router.getRoutes();
      const result = router.find((route) => route.path === _path);
      return result.path;
    },
  },
  created() {
    this.thisPage = this._findLocation(window.location.pathname);
  },
  watch: {
    componentkey: {
      handler() {
        this.thisPage = this._findLocation(window.location.pathname);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./styles/index.scss";

* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
</style>
