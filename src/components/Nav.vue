<template>
  <div>
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

</style>