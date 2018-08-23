import axios from 'axios'

let instace = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
})

// 获取主题的信息

export function getTopics(data = {}) {
  let defaults = {
    page: 1,
    tab: '',
    limit: 40
  }
  Object.assign(defaults, data);
  return instace.get('/topics', { params: defaults });
}

// 获取详情 根据id
export function getTopicById(id='') {
  return instace.get(`/topic/${id}`);
}

export default {
  install(vue){
    vue.prototype.$api = {
      getTopics,
      getTopicById
    }
  }
}
