<template>
  <div>
    <Layout class-prefix="layout">
      {{recordList}}
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';

  // // database update
  // const version = window.localStorage.getItem('version') || '0';
  // const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[ ]');
  // if (version < '0.0.2') {
  //   if (version === '0.0.1') {
  //     recordList.forEach(record => {
  //       record.createdAt = new Date(2020, 0, 0);
  //     });
  //     // save date
  //     window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  //   }
  // }
  // window.localStorage.setItem('version', '0.0.2');

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['Food', 'House', 'Transport'];
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[ ]');
    record: Record = {tags: [], notes: '', type: '-', amount: 0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      const deepCloneRecord2: Record = JSON.parse(JSON.stringify(this.record));
      deepCloneRecord2.createdAt = new Date();
      this.recordList.push(deepCloneRecord2);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
