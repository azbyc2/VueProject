// 该文件用与统一注册filter过滤器

import DateFilter from './date.js';

export default {
    // vue规定 暴露插件用install
    install(Vue){
        Vue.filter('Date',DateFilter)
    }

}