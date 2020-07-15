import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[ ]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord (record: RecordItem) {
    const deepCloneRecord2: RecordItem = clone(record);
    deepCloneRecord2.createdAt = new Date();
    this.recordList?.push(deepCloneRecord2);
    recordStore.saveRecords();
  },
};

recordStore.fetchRecords();

export default recordStore;

