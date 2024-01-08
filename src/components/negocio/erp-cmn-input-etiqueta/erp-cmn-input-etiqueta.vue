<template>
<div class="form">
      <input
        type="text"
        class="input bradius form__input"
        :placeholder="placeholder"
        @input="textoIngresado($event.target.value)"
      />
      <label v-if="etiqueta" class="form__label">{{ etiqueta }}</label>
</div>
    
</template>

<script lang="ts" src="./erp-cmn-input-etiqueta.ts"></script>
<style src="./erp-cmn-input-etiqueta.scss" lang="scss"/>
