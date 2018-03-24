/**
 * Created by Jerry on 2018/2/16.
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  // 站点json数据树
  /*
    state: {
      gid: 编号
      name: 站点名称
      config: {站点配置}
      children: [// 站点内容
        {
          type: paragraph // 类型
          content: url || string //内容，放文字或者图片url
          config: {
            // 样式
            class: class样式,
            color: 字体颜色
          }
        }
      ]
    }
  */
  state: {
    gid: 1000,
    site: {
      name: 'awesome site',
      config: {},
      children: []
    },
    currentPage: {},
    widgets: [{
      name: '一段文字',
      icon: '',
      placeholder: {
        type: 'paragraph',
        content: {
          title: '标题',
          subTitle: '小标题',
          detail: '内容。。。'
        },
        config: {}
      }
    }]
  }
});

export default store
