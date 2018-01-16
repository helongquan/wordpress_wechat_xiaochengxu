/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 鸢尾花序  www.kelin601.com
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.kelin601.com All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.kelin601.com/blog"
var DOMAIN = "www.kelin601.com";
var MINAPPTYPE="1";//小程序的类型，如果是企业小程序请填：0 ，如果是个人小程序请填：1
var WEBSITENAME="鸢尾花序"; //网站名称
var ABOUTID = 6278; //wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT='10'; //每页文章数目
//var CATEGORIESID='all'  //显示全部的分类
var CATEGORIESID = '1,5,60,61,62,63,64,65,68';//指定显示的分类的id
var PAYTEMPPLATEID = 'hzKpxuPF2rw7O-qTElkeoE0lMwr0O4t9PJkLyt6v8rk';//赞赏消息模版id
var REPLAYTEMPPLATEID = 'IiAVoBWP34u1uwt801rI_Crgen7Xl2lvAGP67ofJLo8';//回复评论消息模版id
 //首页图标导航
 //参数说明：'name'为名称，'image'为图标路径，'redirectlink'为跳转的页面，'redirecttype'为跳转的类型，page为本小程序的页面，app为其他微信小程序
 //        'appid' 当redirecttype为app时，这个值为其他微信小程序的appid，如果redirecttype为page时，这个值设置为空。
var INDEXNAV = [
  { id: '1', name: '微店', image: '../../images/shop.png', redirectlink: 'pages/shelf/shelf', redirecttype: 'app', appid:'wx7dfe69a7d08c6ad9' },
    { id: '2', name: '服务', image: '../../images/ranking.png', redirectlink: '../hot/hot', redirecttype: 'page', appid: ''},
    { id: '3', name: '专题', image: '../../images/tar-topic.png', redirectlink: '../topic/topic', redirecttype: 'page', appid: ''},
    ]

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getAboutId: ABOUTID,
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getCategoriesID :CATEGORIESID,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getMinAppType:MINAPPTYPE
}