<template>
  <div
    class="control"
    :class="[
      icon && 'has-icon',
      loading && 'is-loading',
      expanded && 'is-expanded',
      nogrow && 'is-nogrow',
      textaddon && 'is-textarea-addon',
      isValid && 'has-validation has-success',
      hasError && 'has-validation has-error',
      subcontrol && 'subcontrol',
    ]"
  >
    <slot></slot>
    <div v-if="icon" class="form-icon">
      <i
        v-if="isIconify"
        aria-hidden="true"
        class="iconify"
        :data-icon="icon"
      ></i>
      <i v-else aria-hidden="true" :class="icon"></i>
    </div>
    <div v-if="isValid" class="validation-icon is-success">
      <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
    </div>
    <div v-else-if="hasError" class="validation-icon is-error">
      <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
    </div>
    <slot name="extra"></slot>
  </div>
</template>

<script src="./v-control.ts" lang="ts"/>