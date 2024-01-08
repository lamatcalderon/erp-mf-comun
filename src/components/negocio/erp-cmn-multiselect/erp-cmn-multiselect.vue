<template>
  <div :id="id" :class="`${PREFIJO}`">
      <div :class="`${PREFIJO}-contenido is-${size} flex-between`" @click="abrir">
          <span :class="`${PREFIJO}-display flex-c`"></span>
          <div :class="`${PREFIJO}-opciones flex-c`">
              <img :class="`${PREFIJO}-cerrar ml-2 mr-1`" cls-ele="1" :src="`${PATH_RESOURCES_IMAGES}/src/assets/erp-mf-comun/icons/cross.svg`" alt="clear" width="10" @click="limpiar"/>
              <img :class="`${PREFIJO}-icon`" :src="`${PATH_RESOURCES_IMAGES}/src/assets/erp-mf-comun/icons/select-icon.svg`" alt="dropdown"/>
          </div>
      </div>
      {{isOpen}}
      <div :class="`${PREFIJO}-elementos`">
          <ul :class="`${PREFIJO}-lista`"></ul>
      </div>
  </div>
</template>

<script src="./erp-cmn-multiselect.ts" lang="ts"/>
<style src="./erp-cmn-multiselect.scss" lang="scss"/>