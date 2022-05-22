import request from '@/utils/request'

export default {
  pageRecords(page, size, sortName) {
    return request({
      url: '/sdks/selectByPage',
      method: 'get',
      params: { 'page': page, 'size': size, 'sortName':sortName }
    })
  },
  getCategoriesCount(num) {
    return request({
      url: '/sdks/groupQuery',
      method: 'get',
      params: { 'num': num}
    })
  },
  selectStaticApis(num) {
    return request({
      url: '/sdks/selectStaticApis',
      method: 'get',
      params: { 'num': num}
    })
  },
  searchLikeName(name,value,page,size,sortName) {
    console.log("名称",name)
    return request({
      url: '/sdks/searchLikeName',
      method: 'get',
      params:{'name': name,'value':value,'page':page,'size':size,'sortName':sortName}
    })
  },
  selectTag(num) {
    return request({
      url: '/sdks/selectTag',
      method: 'get',
      params:{'num': num}
    })
  }
}
