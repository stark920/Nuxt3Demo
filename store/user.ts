import { defineStore } from 'pinia';

export const useDemoStore = defineStore('demo', {
  state: () => {
    return {
      title: 'Demo'
    };
  },
  actions: {
    //
  }
});
