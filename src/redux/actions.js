import * as types from "./actionType";

// GET TODOS LIST
export const getDataList = () => ({
  type: types.GET_DATA_LIST
});

export const getDataSuccess = (todoList) => ({
  type: types.GET_DATA_SUCCESS,
  payload: todoList,
});

export const getDataError = (error) => ({
  type: types.GET_DATA_ERROR,
  payload: error,
});

// GET TODOS ITEM
export const getDataItem = (id) => ({
  type: types.GET_DATA_ITEM,
  payload: id
});

export const getDataItemSuccess = (todoItem) => ({
  type: types.GET_DATA_ITEM_SUCCESS,
  payload: todoItem,
});

export const getDataItemError = (error) => ({
  type: types.GET_DATA_ITEM_ERROR,
  payload: error,
});
//CREATE TODO ITEM
export const createTodoItem = (data) => ({
  type: types.CREATE_TODO_ITEM,
  payload: data,
});

export const createTodoSuccess = (data) => ({
  type: types.CREATE_TODO_SUCCESS,
  payload: data,
});

export const createTodoError = (error) => ({
  type: types.CREATE_TODO_ERROR,
  payload: error,
});

//UPDATE TODO ITEM
export const updateTodoItem = (data) => ({
  type: types.UPDATE_TODO_ITEM,
  payload: data,
});

export const updateTodoSuccess = (data) => ({
  type: types.UPDATE_TODO_SUCCESS,
  payload: data,
});

export const updateTodoError = (error) => ({
  type: types.UPDATE_TODO_ERROR,
  payload: error,
});

//DELETE TODO ITEM
export const deleteTodoItem = (id) => ({
  type: types.DELETE_TODO_ITEM,
  payload: id,
});

export const deleteTodoSuccess = (id) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: id
});

export const deleteTodoError = (error) => ({
  type: types.DELETE_TODO_ERROR,
  payload: error,
});