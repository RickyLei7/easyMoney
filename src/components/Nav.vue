<template>
  <div class="nav">
    <router-link to="/money">
    <Icon name="money"/>
      Money
    </router-link>
    |
    <router-link to="/labels">
      <Icon name="labels"/>
      Labels
    </router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"/>
      Statistics
    </router-link>
  </div>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';
  export default {
    name: 'Nav',
    components: {Icon}
  };
</script>

<style lang="scss" scoped>
  .nav {border: 1px solid red;}
</style>