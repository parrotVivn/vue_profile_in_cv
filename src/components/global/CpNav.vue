<template>
  <v-navigation-drawer theme="dark" permanent>
    <h3 class="font-weight-medium text-center">Dashboard Table</h3>
    <!-- <v-list color="transparent">
      <v-list-item>
        <v-btn outlined class="m-2 cursor-grab" color="primary" block>
          Accept
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn outlined class="m-2" color="primary" block> Accept </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn outlined class="m-2" color="primary" block> Accept </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn outlined class="m-2" color="primary" block> Accept </v-btn>
      </v-list-item>
    </v-list> -->
    <div class="col-md-3">
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        :move="onMove"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" :name="'flip-list'">
          <li
            class="list-group-item"
            v-for="element in list"
            :key="element.order"
          >
            <v-btn
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
              >Pin</v-btn
            >
            {{ element.name }}
            <span class="badge">{{ element.order }}</span>
          </li>
        </transition-group>
      </draggable>
    </div>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { defineComponent } from "vue";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];
export default defineComponent({
  name: "CpNav",
  props: {
    thisPage: String,
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      isDragging: false,
    };
  },
  mounted() {
    console.log(this.thisPage);
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
  },
});
</script>
<style lang="scss" scoped>
.cursor-grab {
  cursor: -webkit-grab;
  cursor: grab;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
