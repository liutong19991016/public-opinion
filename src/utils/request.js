import axios from 'axios';
import { Message, Modal } from 'view-design';
import store from '@/store';
import router from '@/router';
import qs from 'qs';

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 10000 // request timeout
});

service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  error => {
    console.log(error, '发送的bug');
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.state !== 1 && res.state !== '1') {
      if (res.state === 3) {
        return Modal.info({
          title: '重新登录',
          content: '为了保护您的信息安全，您需要重新登录才可以继续浏览',
          width: 500,
          onOk() {
            store.dispatch('user/logout');
            router.replace('/login');
          }
        });
      }
      Message.error({
        content: res.message,
        duration: 5
      });
      return Promise.reject(new Error(res.message));
    } else {
      return res;
    }
  },
  error => {
    Message.error({
      content: `服务器发生无法处理的异常：${error}，请稍后重试或及时联系技术支持`,
      closable: true,
      duration: 0
    });
    return Promise.reject(error);
  }
);

export default service;
