<template>
  <div>
    <label class="notes">
      <span class="name">Note</span>
      <input type="text" :value="value"
             @input="onInput"
             placeholder="Type some notes here.">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';

    onInput(event: KeyboardEvent) {
      const input = event.target as HTMLButtonElement;
      this.value = input.value;
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    background: #f5f5f5;
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>