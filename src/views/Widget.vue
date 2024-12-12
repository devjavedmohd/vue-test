<template>
  <div class="widgets-view">
    <h1 class="heading">Per product widgets</h1>
    <div class="v-separator"></div>
    <div class="widget-container">
      <WidgetCard
        v-for="widget in widgets"
        :key="widget.id"
        :widget="widget"
        @update-widget="updateWidget"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import WidgetCard from "../components/WidgetCard.vue";

export default defineComponent({
  components: { WidgetCard },
  setup() {
    const store = useStore();
    const widgets = computed(() => store.getters.widgets);

    onMounted(() => {
      store.dispatch("fetchWidgets");
    });

    const updateWidget = (id: number, key: string, value: any) => {
      store.commit("updateWidget", { id, key, value });
    };

    return { widgets, updateWidget };
  },
});
</script>

<style>
.heading {
  color: #212121;
  text-align: center;
  font-family: Cabin;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 12px;
}
.v-separator {
  width: 100%;
  height: 2px;
  background: #b0b0b0;
}
.widget-container {
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .widget-container {
    flex-direction: column;
    width: 100%;
    padding: 24px;
    margin-top: 0px;
  }
}
</style>
