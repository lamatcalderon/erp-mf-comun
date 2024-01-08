<template>
  <div class="select-form">
    <select
      :id="id"
      class="select-form__input select-icon"
      :style="{
        background: `url(${icono}) no-repeat right center`,
      }"
      @change="seleccionar"
    >
    </select>
  </div>
</template>

<script src="./erp-cmn-desplegable-etiqueta.ts" lang="ts"/>
<style src="./erp-cmn-desplegable-etiqueta.scss" lang="scss"/>