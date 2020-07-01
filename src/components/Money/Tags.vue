<template>
  <div class="tags">
    <div class="new">
      <button>Add New Tag</button>
    </div>
    <ul class="current">
      <li>Cloth</li>
      <li>Food</li>
      <li>House</li>
      <li>Transport</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags',

  };
</script>

<style lang="scss" scoped>
  .tags {
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        background: #d9d9d9;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
      }
    }
    > .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>