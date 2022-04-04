<template>
  <div class="todo-action">
    <div class="todo-action__counter">
      Осталось: {{filteredItems('active').length}}
    </div>
    <div class="todo-action__filters">
      <ToDoBtn class="todo-action__btn" @click="changeFilter('all')" :active='filter === "all"'>Все</ToDoBtn>
      <ToDoBtn class="todo-action__btn" @click="changeFilter('active')" :active='filter === "active"'>Активные</ToDoBtn>
      <ToDoBtn class="todo-action__btn" @click="changeFilter('completed')" :active='filter === "completed"'>Выполненные</ToDoBtn>
    </div>
    <div class="todo-action__clear">
      <ToDoBtn class="todo-action__btn" @click="clearCompleted()" :active='true' :disable='isDisabled'>Очистить выполненные</ToDoBtn>
    </div>
  </div>
</template>

<script>
import ToDoBtn from '@/components/ToDoBtn.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'NewItem',
  components:{
    ToDoBtn
  },
  data(){
    return{
      disableClear: true
    }
  },
  computed:{
    ...mapGetters({
      filter: 'getTodoFilter',
      allItems: 'getAllItems',
      filteredItems: 'getFilteredItems'
    }),
    isDisabled(){
      if(this.allItems.length > 0){
        return !this.allItems.find(elem => elem.status === 'completed');
      }else{
        return true;
      }
    }
  },
  methods:{
    ...mapMutations({
      setFilter: 'changeFilter',
      clearCompleted: 'clearCompleted'
    }),
    changeFilter(newValue){
      this.setFilter(newValue)
    },
  }
}
</script>

<style scoped lang="scss">
.todo-action{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 10px;
  padding: 0 5px;
  &__filters{
    display: flex;
    flex-direction: row;
    justify-content: center;

  }
  &__btn{
    margin: 0 5px;
  }
}
</style>
