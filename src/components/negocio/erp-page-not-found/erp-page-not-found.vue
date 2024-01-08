<template>
  <div :class="prefijo">
    <div class="content-404">
      <div class="mensaje-404">
        <div class="number-404">4</div>
        <div class="circle-404">
          <img :src="icono"/>
        </div>
        <div class="number-404">4</div>
      </div>
      <div class="back-404">
        <span class="title-404">Vaya, no hemos podido encontrar la pagina que buscas.</span>
        <button class="btn-back-404" @click="goBack">Regresar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./erp-page-not-found.ts" />