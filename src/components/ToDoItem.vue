<template>
  <div class="todo-item" v-for="item in items(filter)" :key="item.id" @click="changeStatus(item)">
    <MdiIcon class="todo-item__check" :iconpath="mdiCheck" :class="item.status" :iconcolor="item.status === 'completed' ? 'green': 'gray'"/>
    <div class="todo-item__text">{{item.text}}</div>
  </div>
  <div class="todo-item__empty" v-if="items(filter).length === 0">
    Ничего не найдено!
  </div>
</template>

<script>
import { mdiCheck } from '@mdi/js';
import MdiIcon from '@/components/MdiIcon.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ToDoItem',
  components: {
    MdiIcon
  },
  data(){
    return{
      mdiCheck,
    }
  },
  computed: {
    ...mapGetters({
      items: 'getFilteredItems',
      filter: 'getTodoFilter'
    })
  },
  methods:{
    ...mapMutations({
      changeStatus : 'changeStatus'
      })
  }
}
</script>

<style scoped lang="scss">
.todo-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 2px;
  cursor: pointer;
  &__text{
    margin-left: 8px;
    text-align: left;
  }
  &:hover>.todo-item__check{
    opacity: 1;
  }
  &__check{
    width: 24px;
    border: 1px solid green;
    border-radius: 50%;
    &.active{
      opacity: .2;
      border: 1px solid gray;
    }
  }
  &__empty{
    margin: 15px 0;
  }
}
</style>
