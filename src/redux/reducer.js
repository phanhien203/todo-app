import * as types from "./actionType";
const initialState = {
  todoList: [],
  todoItem: {},
  loading: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
        loading: false,
      };
    case types.GET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.GET_DATA_ITEM:
      return {
        ...state,
        loading: true,
      };
    case types.GET_DATA_ITEM_SUCCESS:
      return {
        ...state,
        todoItem: action.payload,
        loading: false,
      };
    case types.GET_DATA_ITEM_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.CREATE_TODO_ITEM:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: [...state.todoList, action.payload]
      };
    case types.CREATE_TODO_ERROR:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_TODO_ITEM:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: state.todoList.map(
          item => item.id === action.payload.id ? action.payload : item
      )
      };
    case types.UPDATE_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.DELETE_TODO_ITEM:
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case types.DELETE_TODO_ERROR:
    default:
      return state;
  }
};

export default reducers;
