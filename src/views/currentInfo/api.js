import request from '@/utils/request';

export function getGroup(data) {
  return request({
    url: '/Keyword/getGroup',
    method: 'post',
    data
  });
}

export function addGroup(data) {
  return request({
    url: '/Keyword/addGroup',
    method: 'post',
    data
  });
}

export function getKeywords(data) {
  return request({
    url: '/Keyword/getKeywords',
    method: 'post',
    data
  });
}