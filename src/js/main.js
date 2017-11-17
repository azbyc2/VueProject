//要把组件渲染到页面中，我们必须导入vue这个库
// 导入vue还得安装这个包 
// es6导入的Vue与我们在浏览器中导入的Vue有小区别：失去了浏览器模板编译功能，原因是：使用es6语法，vue知道使用了构建工具，使用构建工具，你应该使用vue-loader，使用了vue-loader他会在本地打包时把模板编译好，在浏览器中直接使用，可以提高性能，相比以往的方式性能会有提升。

// 导入第三方包
import Vue from 'Vue';
import VueRouter from 'vue-router'

// 手动启用vue插件,在以前VueRouter会自动调用use，但是我们使用了模块化之后，window下没有vue全局变量，就无法自动use
Vue.use(VueRouter);

// 导入我们编写的组件
import App from '../component/App.vue';
import Home from '../component/home/home.vue'
import News from '../component/news/news.vue'
import Photo from '../component/photo/photo.vue'


new Vue({
    // 关联页面标签
    el: '#app',
    // 不需要写template 因为没有解析
    render(c) {
        // 这个函数需要们返回一个组件：把App组件渲染到el标签中
        return c(App);
    },
    router: new VueRouter({
        routes: [{
                path: '/',
                component: Home
            },
            {
                path: '/news',
                component: News
            },
            {
                path: '/photo',
                component: Photo
            }
        ]
    })

})