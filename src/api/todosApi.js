import axiosClient from "./axiosClient";

const todosApi = {
  getAll() {
    const url = '/todos'
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10
      }
    })
  },

  getItem(id) {
    const url = `/todos/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/todos'
    return axiosClient.post(url, data )
  },

  update(id, data ) {
    const url = `/todos/${id}`
    return axiosClient.patch(url, data)
  },

  delete(id) {
    const url = `/todos/${id}`
    return axiosClient.delete(url)
  },
}

export default todosApi;