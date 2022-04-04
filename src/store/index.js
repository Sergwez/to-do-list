import { createStore } from 'vuex'

export default createStore({
  state: {
    todoFilter: 'all',
    todoItems:[]
  },
  getters: {
    // получить фильтры
    getTodoFilter(state){
      return state.todoFilter
    },
    // получить все задания
    getAllItems(state){
      return state.todoItems
    },
    // получить только отфильтрованные задания
    getFilteredItems: (state) => (currentFilter) => {
      let items = state.todoItems
      if(currentFilter && currentFilter !== 'all'){
        return items.filter(item => {
          return item.status == currentFilter
        })
      }else{
        return items
      }
    },
  },
  mutations: {
    //записать данные в local storage
    writeToLocalStorage(state){
      localStorage.setItem('todoitems', JSON.stringify(state.todoItems));
      localStorage.setItem('todofilter', JSON.stringify(state.todoFilter));
    },
    //записать задания
    setTodoItems(state, todoItems){
      state.todoItems = todoItems
    },
    // записать фильтры
    setTodoFilter(state, todoFilter){
      state.todoFilter = todoFilter
    },
    //изменить статус
    changeStatus(state, item){
      let nemItem = item
      if(nemItem.status === 'completed'){
        nemItem.status = 'active'
      } else{
        nemItem.status = 'completed'
      }
      let arrIndex =  state.todoItems.findIndex(elem => elem.id === nemItem.id)
      state.todoItems[arrIndex] = {...nemItem}
    },
    //изменить фильтр
    changeFilter(state, newFilter){
      state.todoFilter = newFilter
    },
    // удалить выполненные задания
    clearCompleted(state){
      state.todoItems = state.todoItems.filter(elem => elem.status !== 'completed' )
    },
    // создать новое задание
    newItem(state, itemText){
      let newId = 0
      if(state.todoItems.length > 0){
        newId = state.todoItems.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1;
      }
      let newItem = {
        id: newId,
        text: itemText,
        status: 'active',
      }
      state.todoItems.push(newItem);
    }
  },
  actions: {
    firstLoad(ctx){
      // localStorage.clear()
      if(localStorage.getItem('todoitems')){
        const todoItems = JSON.parse(localStorage.getItem('todoitems'));
        ctx.commit('setTodoItems', todoItems);
      }
      if(localStorage.getItem('todofilter')){
        const todoFilter = JSON.parse(localStorage.getItem('todofilter'));
        ctx.commit('setTodoFilter', todoFilter)
      }

    }
  },
  modules: {
  }
})
