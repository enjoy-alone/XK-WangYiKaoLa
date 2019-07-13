<template>
    <div id="detail">
        <!-- 头部 -->
        <div  class="headers">
            <router-link tag="i" to="/home" class="yo-ico" >&#xe660;</router-link>
            <p>
                <span class="active" >商品</span>
                <span>评价</span>
                <span>推荐</span>
                <span>详情</span>
            </p>
            <router-link tag="i" to="/home" class="yo-ico" >&#xe64f;</router-link>
        </div>

        <!-- 轮播图 -->
        <div class="detail">
            <div>aaa</div>
        
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
            <div>11111111</div>
        </div>

        <footer>
            <ul>
                <li>
                    <i>
                        <img src="../../../public/store.png" alt="" width="5%" >
                    </i>
                    <b>店铺</b>
                </li>
                <li>
                    <i>
                        <img src="https://haitao.nos.netease.com/9e90efe2-46cc-4125-b373-8e7008d5878e_39_47.png" alt="" width="100%">
                    </i>
                    <b>客服</b>
                </li>
                <li>
                    <i class="yo-ico">&#xe63f;</i>
                    <b>购物车</b>
                </li>
                <li>
                    <span>加入购物车</span>
                </li>
                <li>
                    <span>立即购买</span>
                </li>
            </ul>
                
        </footer>
    </div>
</template>



<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'

#detail
    height 100%
    display flex
    flex-direction column
    .headers
        display flex
        height .42rem
        line-height .45rem
        border_1px(0 0 1px 0)
        padding 0 .1rem
        position relative
        top 0

        i:nth-of-type(1)
            font-size .14rem 
            margin-right .25rem
        p
            flex 1
            display flex
            text-align  center
            font-size .13rem
            span 
                width 25%
            .active
                border-bottom 1px solid red
        i:nth-of-type(2) 
            font-size .17rem
            margin-left .25rem
            color red
    .detail
        height 100%
        overflow-y scroll

    footer 
        display flex
        height .45rem 
        flex-direction row
        background pink
        ul
            width 100%
            height 100%
            display flex
            li
                display flex 
                flex-direction column  
            // li:nth-of-type(1)


</style>

