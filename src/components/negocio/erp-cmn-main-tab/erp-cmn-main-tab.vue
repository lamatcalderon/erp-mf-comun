<template>
  <div v-if="props.title" style="justify-content: center; text-align: center">
    <span class="stitle">{{ props.title }}</span>
  </div>
  <div class="background">
    <V-Buttons class="div-buttons">
      <template
        v-for="(item, vi) in props.items"
        :key="vi"
        :item="item"
        :vi="vi"
      >
        <div class="content-button">
          <V-Button
            :class="{ 'is-primary': index === vi, 'no-active': index != vi }"
            class="metodo-btn"
            raised
            rounded
            @click="index = vi"
          >
            {{ item.text }}
          </V-Button>
          <div
            :class="{ 'arrow-down': index === vi, 'd-none': index != vi }"
          ></div>
        </div>
      </template>
    </V-Buttons>
    <div v-for="(item, vi) in props.items" :key="vi" :item="item" :vi="vi">
      <slot v-if="index === vi" :name="index"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default { name: "MainTab" };
</script>
<script setup lang="ts">
import { ref } from "vue";
const index = ref(0);
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
@import "./main-tab.scss";
</style>
