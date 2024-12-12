<template>
  <div>
    <svg
      ref="infoIcon"
      class="info-icon"
      @click="toggleTooltip"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M 12 2 C 6.4919555 2 2 6.4919596 2 12 C 2 17.50804 6.4919555 22 12 22 C 17.508045 22 22 17.50804 22 12 C 22 6.4919596 17.508045 2 12 2 z M 12 4.5 C 16.156945 4.5 19.5 7.8430575 19.5 12 C 19.5 16.156943 16.156945 19.5 12 19.5 C 7.8430549 19.5 4.5 16.156943 4.5 12 C 4.5 7.8430575 7.8430549 4.5 12 4.5 z M 12 7 A 1.25 1.25 0 0 0 12 9.5 A 1.25 1.25 0 0 0 12 7 z M 11.982422 10.992188 A 1.2011201 1.2011201 0 0 0 10.798828 12.210938 L 10.798828 16.810547 A 1.201172 1.201172 0 1 0 13.201172 16.810547 L 13.201172 12.210938 A 1.2011201 1.2011201 0 0 0 11.982422 10.992188 z"
      />
    </svg>
    <div v-if="showTooltip" ref="tooltip" class="tooltip">
      <p>
        This widget links directly to your public profile so that you can easily
        share your impact with your customers. Turn it off here if you do not
        want the badge to link to it.
      </p>
      <a href="#" class="color">View Public Profile</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  setup() {
    const showTooltip = ref(false);
    const infoIcon = ref<SVGSVGElement | null>(null);
    const tooltip = ref<HTMLDivElement | null>(null);

    const toggleTooltip = () => {
      showTooltip.value = !showTooltip.value;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltip.value &&
        !tooltip.value.contains(event.target as Node) &&
        infoIcon.value &&
        !infoIcon.value.contains(event.target as Node)
      ) {
        showTooltip.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      showTooltip,
      toggleTooltip,
      infoIcon,
      tooltip,
    };
  },
});
</script>

<style scoped>
.info-icon {
  cursor: pointer;
  width: 16px;
  height: 16px;
  fill: #3b755f;
  margin-left: 4px;
  margin-top: -4px;
}

.tooltip {
  position: absolute;
  top: 25px;
  left: -50px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  color: #212121;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  line-height: 1.5;
  z-index: 1;
}

.tooltip a {
  color: #3b755f;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 700;
}

.tooltip a:hover {
  text-decoration: none;
}
</style>
