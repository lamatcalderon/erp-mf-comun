<template>
  <div
    class="field"
    :class="[
      addons && 'has-addons',
      textaddon && 'has-textarea-addon',
      grouped && 'is-grouped',
      grouped && multiline && 'is-grouped-multiline',
      horizontal && 'is-horizontal',
    ]"
  >
    <template v-if="typeof label === 'string' && horizontal">
      <div class="field-label is-normal">
        <label class="label">{{ label }}</label>
      </div>
      <div class="field-body">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="typeof label === 'string'">
      <label class="label">
        {{ label }}
      </label>

      <slot></slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script src="./v-field.ts" lang="ts"/>