<template>
  <button class="todo-btn" :class="active ? 'active' : ''" :disabled="disable">
    <slot>Кнопка</slot>
  </button>
</template>

<script>
export default {
  name: 'ToDoBtn',
  props:{
    active: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .todo-btn{
    padding: 5px 8px;
    border: none;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    transition: .3s;
    &:disabled{
      opacity: .4;
    }
    &.active{
      background: teal;
      color: #fff;
    }
  }
</style>

