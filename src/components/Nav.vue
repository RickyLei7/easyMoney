<template>
  <div class="nav">
    <router-link to="/money">
      <svg>
        <use xlink:href="#labels"></use>
      </svg>
      Money
    </router-link>
    |
    <router-link to="/labels">Labels</router-link>
    |
    <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script lang="ts">
  import x from '@/assets/icons/labels.svg'

  console.log(x);

  export default {
    name: 'Nav'
  }
</script>

<style lang="scss" scoped>
  .nav {border: 1px solid red;}
</style>