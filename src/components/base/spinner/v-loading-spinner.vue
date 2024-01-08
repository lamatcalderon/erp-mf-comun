<template>
  
    <div v-if="active" class="loader-wrapper" style="text-align:center">
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{{ text }}</p>
    </div>
</template>

<script src="./v-loading-spinner.ts" lang="ts"/>
<style  lang="css" src="./v-loading-spinner.css" scoped />  