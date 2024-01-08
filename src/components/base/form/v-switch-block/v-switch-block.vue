<template>
<div :class="[label && 'switch-block', thin && label && 'thin-switch-block']">
    <template v-if="thin">
      <label
        :for="blockSwitchId"
        class="thin-switch"
        :class="[color && `is-${color}`]"
      >
        <input
          :id="blockSwitchId"
          :checked="modelValue"
          class="input"
          type="checkbox"
          v-bind="$attrs"
          @change="emit('update:modelValue', !modelValue)"
        />
        <div class="slider"></div>
      </label>
    </template>
    <template v-else>
      <label
        :for="blockSwitchId"
        class="form-switch"
        :class="[color && `is-${color}`]"
      >
        <input
          :id="blockSwitchId"
          :checked="modelValue"
          type="checkbox"
          class="is-switch"
          v-bind="$attrs"
          @change="emit('update:modelValue', !modelValue)"
        />
        <i aria-hidden="true"></i>
      </label>
    </template>

    <div v-if="label" class="text">
      <label :for="blockSwitchId">
        <span>{{ label }}</span>
      </label>
    </div>
  </div>
</template>

<script src="./v-switch-block.ts" lang="ts"/>