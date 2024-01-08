<template>
  <div
    id="general-panel"
    :class="[activePanel === props.activePanelValue && 'is-active']"
    class="right-panel-wrapper"
  >
    <div class="panel-overlay">
      <div class="close-panel panel-close-x">
        <div class="container">
          <img
            src="/@src/assets/illustrations/apps/close.svg"
            alt="close"
            @click="activePanel = 'none'"
          />
        </div>
      </div>
    </div>
    <div class="right-panel">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "general-panel" };
</script>

<script setup lang="ts">
import { activePanel } from "../../../../states/estado-panel-activo";

const props = defineProps({
  activePanelValue: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
