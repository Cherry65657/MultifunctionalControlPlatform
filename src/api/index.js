import request from '@/utils/request'

// 查询菜单列表
export function listncov() {
  return request({
    url: 'https://m.sm.cn/api/rest?format=json&method=Huoshenshan.ncov2022&type=latest&news_type=ncp&uc_param_str=dsdnfrpfbivesscpgimibtbmnijblauputogpintnwktprchmt',
    method: 'get',
    // params: query
  })
}

// 查询菜单详细
export function city2xy(cityname) {
  return request({
    url: 'http://restapi.amap.com/v3/geocode/geo?key=b769f1f21fbf297e7fb7e1c61603b838&address=' + cityname,
    method: 'get'
  })
}
