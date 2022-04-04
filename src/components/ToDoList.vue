<template>
  <div class="todolist">
    <div class="todolist__content">
      <NewItem />
      <ToDoItem />
      <ToDoAction />
    </div>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue';
import NewItem from '@/components/NewItem.vue';
import ToDoAction from '@/components/ToDoAction.vue';
import {mapActions, mapMutations, mapGetters} from 'vuex';

export default {
  components:{
    ToDoItem,
    NewItem,
    ToDoAction
  },
  name: 'ToDoList',
  watch: {
    filter() {
      this.writeToLocalStorage();
    },
    allItems: {
      handler(){
        this.writeToLocalStorage();
      },
      deep: true
    }
  },
  computed:{
    ...mapGetters({
      filter: 'getTodoFilter',
      allItems: 'getAllItems',
    })
  },
  methods:{
    ...mapActions({firstLoad: 'firstLoad'}),
    ...mapMutations({writeToLocalStorage: 'writeToLocalStorage'}),
  },
  mounted(){
    this.firstLoad();
  }
}
</script>

<style scoped lang="scss">
.todolist{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  &__content{
    padding: 5px;
    background: #eee;
    width: 680px;
  }
}
</style>
