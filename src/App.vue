<template>
    <div class="layout">
        <!--div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">登录</a> |
                <a href="#">通知</a> |
                <a href="#">设置</a> 
            </div>
        </div-->
        <!--主体区域-->
        <div class="layout-content">
            <!--内容区域路由-->
            <router-view></router-view>
        </div>
        <div class="layout-copy">
            2017 &copy; 兴趣圈圈 京ICP备17048760号
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import 'styles/common.css';

.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-copy {
        position: relative;
        display: block;
        width: 100%;
        margin-bottom: 0px;
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 200px;
    }

// 控制所有导航的链接样式
a[href] {
    color: #fff;
    display: inline-block;
}
</style>
