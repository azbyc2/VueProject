const domain = 'http://vue.studyit.io/api'; 

export default {
    // 获取轮播图接口
    getLunbo:`${domain}/getlunbo`,
    // 新闻相关接口
    getNL:`${domain}/getnewslist`,
    getND:`${domain}/getnew/`,//该接口后面需要id

    // 图片相关接口
    getPL:`${domain}/getimages/`,
    getPC:`${domain}/getimgcategory`,
    getPS:`${domain}/getthumimages/`,
    getPD:`${domain}/getimageInfo/`,
    // 商品相关接口
    // 评论相关接口
    postRV:`${domain}/postcomment/`,
    getRV:`${domain}/getcomments/`,

}