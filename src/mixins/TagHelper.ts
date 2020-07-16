// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('Type a tag name please.');
    if (!name) {return window.alert('Type a tag name please.');}
    this.$store.commit('createTag', name);
  }
}

export default TagHelper
