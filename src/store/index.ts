import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag []
  },
  mutations: {
    fetchRecords(state) {
     return state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[ ]') as RecordItem[];
    },
    createRecord(state, record) {
      const deepCloneRecord2: RecordItem = clone(record);
      deepCloneRecord2.createdAt = new Date();
      state.recordList.push(deepCloneRecord2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[ ]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('Tag duplicated');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags')
      window.alert('Add tag success');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.tagList));
    }
  }
})
export default store;
