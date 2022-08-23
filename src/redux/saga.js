import {
  takeLatest,
  put,
  call,
  fork,
  all,
  take
} from "redux-saga/effects";
import {
  getDataSuccess,
  getDataError,
  getDataItemSuccess,
  getDataItemError,
  createTodoSuccess,
  createTodoError,
  updateTodoSuccess,
  updateTodoError,
  deleteTodoSuccess,
  deleteTodoError
} from "./actions";

import todosApi from '../api/todosApi'
import * as types from "./actionType";

export function* onGetDataApi(data) {
  const userID = data.payload
  try {
    const response = yield todosApi.getAll(userID);
    yield put(getDataSuccess(response.data));
  } catch (error) {
    yield put(getDataError(error));
  }
}

export function* onGetTodoItemApi(action) {
  try {
    const response = yield todosApi.getItem(action.payload);
    yield put(getDataItemSuccess(response));
  } catch (error) {
    yield put(getDataItemError(error));
  }
}

function* onCreateTodoApi({ payload }) {
  try {
    const response = yield todosApi.add(payload);
    yield put(createTodoSuccess(response));
  } catch (error) {
    yield put(createTodoError(error));
  }
}

function* onUpdateTodoApi({ payload: { id, data } }) {
  try {
    const response = yield todosApi.update(id, data)
    yield put(updateTodoSuccess(response));
  } catch (error) {
    yield put(updateTodoError(error));
  }
}

function* onDeleteTodo(id) {
  try {
    yield todosApi.delete(id);
    yield put(deleteTodoSuccess(id));

  } catch (error) {
    yield put(deleteTodoError(error));
  }
}

function* onDeleteTodoRequest() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_TODO_ITEM);
    yield call(onDeleteTodo, id);
  }
}

export function* onGetDataList() {
  yield takeLatest(types.GET_DATA_LIST, onGetDataApi);
}

export function* onGetDataItem() {
  yield takeLatest(types.GET_DATA_ITEM, onGetTodoItemApi);
}

export function* onCreateTodo() {
  yield takeLatest(types.CREATE_TODO_ITEM, onCreateTodoApi);
}

export function* onUpdateTodo() {
  yield takeLatest(types.UPDATE_TODO_ITEM, onUpdateTodoApi);
}

const useSagas = [
  fork(onGetDataList),
  fork(onGetDataItem),
  fork(onCreateTodo),
  fork(onUpdateTodo),
  fork(onDeleteTodoRequest),
];

export default function* rootSaga() {
  yield all([...useSagas]);
}
