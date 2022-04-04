<template>
  <div class="new-item">
    <input class="new-item__input" type="text" placeholder="Новая задача" v-model.trim="inputData" @keyup.enter="createItem()">
    <MdiIcon class="new-item__enter" :iconpath="mdiKeyboardReturn" iconcolor="gray" @click="createItem()"/>
  </div>
</template>

<script>
import { mdiKeyboardReturn  } from '@mdi/js';
import MdiIcon from '@/components/MdiIcon.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'NewItem',
  components: {
    MdiIcon
  },
  data(){
    return{
      mdiKeyboardReturn,
      inputData: ''
    }
  },
  methods:{
      ...mapMutations({
      newItem: 'newItem',
    }),
    createItem(){
      if(this.inputData.length !== 0){
        this.newItem(this.inputData);
        this.inputData = '';
      }
    }
  }

}
</script>

<style scoped lang="scss">
.new-item{
  padding: 5px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  &__input{
    height: 40px;
    border: 1px solid gray;
    width: 100%;
    box-sizing: border-box;
    padding-left: 8px;
    outline: none;

  }
  &__enter{
    position: absolute;
    padding: 4px 8px 0 0;
    cursor: pointer;
  }
}
</style>
