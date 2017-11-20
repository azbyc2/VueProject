//要把组件渲染到页面中，我们必须导入vue这个库
// 导入vue还得安装这个包 
// es6导入的Vue与我们在浏览器中导入的Vue有小区别：失去了浏览器模板编译功能，原因是：使用es6语法，vue知道使用了构建工具，使用构建工具，你应该使用vue-loader，使用了vue-loader他会在本地打包时把模板编译好，在浏览器中直接使用，可以提高性能，相比以往的方式性能会有提升。

// 导入第三方包
import Vue from 'Vue';
import VueRouter from 'vue-router';
import Common from '../component/common';
import MintUi from 'mint-ui';
import axios from 'axios';
import VuePreview from 'vue-preview';
import Filter from '../filter';
import { Lazyload } from 'mint-ui';
// 导入插件css
import 'mint-ui/lib/style.css';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import '../less/common.css'
// 手动启用vue插件,在以前VueRouter会自动调用use，但是我们使用了模块化之后，window下没有vue全局变量，就无法自动use
Vue.use(VueRouter);
Vue.use(MintUi);
Vue.use(Common);
Vue.use(Lazyload); 
Vue.use(VuePreview);
Vue.use(Filter);
// 导入根组件
import AppComponent from '../component/App.vue';


// 导入配置
import routerConfig from '../router';
import apiConfig from './api_config.js';

// 扩展实例成员
Vue.prototype.axios = axios;
Vue.prototype.api = apiConfig;

// // 注册日期格式化过滤器
// import moment from 'moment';
// Vue.filter('datafmt',function(input,fmtStr){
//     fmtStr = fmtStr?fmtStr:'YYYY-MM-DD';
//     return moment(input).format(fmtStr);
// })




new Vue({
    // 关联页面标签
    el: '#app',
    // 不需要写template 因为没有解析
    render(c) {
        // 这个函数需要们返回一个组件：把App组件渲染到el标签中
        return c(AppComponent);
    },
    router:new VueRouter(routerConfig)

})