<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      Money
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      Labels
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      Statistics
    </router-link>
  </nav>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';

  export default {
    name: 'Nav',
    components: {Icon}
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  nav {
    padding: 2px 0;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    font-size: 12px;
    > .item {
      width: 33.3333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        width: 32px;
        height: 32px;
      }
    }
    > .item.selected{
      color: $color-highLight;
    }
  }
</style>