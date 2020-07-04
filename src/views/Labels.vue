<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>food</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>house</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>transport</span>
        <Icon name="right"/>
      </li>
    </ol>

    <div class="createTag-wrapper">
      <button class="createTag">
        New Tag
      </button>
    </div>
  </Layout>

</template>

<script lang="ts">
  export default {
    name: 'Labels',
  };
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > li {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      svg {
        width: 240px;
        height: 24px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .createTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }

</style>

