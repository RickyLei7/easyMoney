import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],

  create(record: RecordItem){
    const deepCloneRecord2: RecordItem = clone(record);
    deepCloneRecord2.createdAt = new Date();
    this.data.push(deepCloneRecord2);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[ ]') as RecordItem[];
    return this.data;

  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordListModel;