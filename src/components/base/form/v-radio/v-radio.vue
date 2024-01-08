<template>
  <label
    class="radio"
    :class="[
      solid ? 'is-solid' : 'is-outlined',
      square && 'is-square',
      color && `is-${color}`,
    ]"
  >
    <input
      type="radio"
      :checked="checked"
      :value="value"
      :name="name"
      v-bind="$attrs"
      @change="change"
    />
    <span></span>
    {{ label || value }}
  </label>
</template>

<script src="./v-radio.ts" lang="ts"/>