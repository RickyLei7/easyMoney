<template>
  <div>
    <label class="notes">
      <span class="name">Note</span>
      <input type="text"
             v-model='value'
             placeholder="Type some notes here.">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';

    @Watch('value')
    onValueChanged(value: string){
      this.$emit('update:value', value)
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