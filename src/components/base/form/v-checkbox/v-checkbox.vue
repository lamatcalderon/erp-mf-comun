<template>
  <label
      class="erp-vta-checkbox"
      :class="classes"
  >
    <input
        type="checkbox"
        :checked="checked"
        :value="value"
        v-bind="$attrs"
        @change="change"
    />
    <span></span>
    {{ label || value }}
  </label>
</template>
<script src="./v-checkbox.ts" lang="ts"/>