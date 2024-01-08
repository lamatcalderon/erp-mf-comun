<template>
  <span :key="icon">
    <i
      v-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :data-icon="icon"
    ></i>
    <i v-else aria-hidden="true" :class="icon"></i>
  </span>
</template>

<script src="./v-icon.ts" lang="ts"/>