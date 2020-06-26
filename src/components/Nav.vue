<template>
  <div class="nav">
    <router-link to="/money">Money</router-link>
    |
    <router-link to="/labels">Labels</router-link>
    |
    <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {

  }
</script>

<style lang="scss" scoped>
  .nav {border: 1px solid red;}
</style>