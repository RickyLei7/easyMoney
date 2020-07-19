<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type:{{type}}
      <br>
      interval: {{interval}}
    </div>
  </Layout>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';


  @Component({
    components: {Tabs, Types}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalList = [
      {text: 'Day', value: 'day'},
      {text: 'Week', value: 'Week'},
      {text: 'Month', value: 'month'}
    ];
    typeList = [
      {text: 'Expend', value: '-'},
      {text: 'Income', value: '+'}
    ];
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item {
    background: white;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
</style>
