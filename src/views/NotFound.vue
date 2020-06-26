<template>
  <div>
    <div>
      Page Not Found 404, Please confirm the address is correct.
    </div>
    <div>
      <router-link to="/">Return Home Page</router-link>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NotFound extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>