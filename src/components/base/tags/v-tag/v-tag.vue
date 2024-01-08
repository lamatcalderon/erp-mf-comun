<template>
  <small
    class="tag"
    :class="[
      color && 'is-' + color,
      rounded && 'is-rounded',
      curved && 'is-curved',
      outlined && 'is-outlined',
      elevated && 'is-elevated',
      remove && 'is-delete',
    ]"
    >{{ label }}</small
  >
</template>

<script src="./v-tag.ts" lang="ts"/>