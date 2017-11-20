// 这里对外导出一个路由配置对象

import HomeComponent from '../component/home/home.vue';
import NewsListComponent from '../component/news/news_list.vue';
import NewsDetailComponent from '../component/news/news_detail.vue';
import PhotoListComponent from '../component/photo/photo_list.vue';
import PhotoDetailComponent from '../component/photo/photo_detail.vue';

export default {
    routes: [
        // 首页路由配置
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: HomeComponent
        },
        // 新闻列表配置
        {
            name: 'ne',
            path: '/news/list',
            component: NewsListComponent
        },
        {
            name: 'nd',
            path: '/news/detail/:id',
            component: NewsDetailComponent
        },
        // 图片分享区域
        {
            name: 'pl',
            path: '/photo/list',
            component: PhotoListComponent
        }, 
        {
            name:'pd',
            path:'/photo/detail/:id',
            component:PhotoDetailComponent
        }
    ]
};