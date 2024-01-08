<template>
  <progress
    class="progress"
    :class="[size && `is-${size}`, color && `is-${color}`]"
    :value="value"
    :max="max"
  >
    {{ value ? `${(value / max) * 100}%` : "" }}
  </progress>
</template>

<script src="./v-progress.ts" lang="ts"/>