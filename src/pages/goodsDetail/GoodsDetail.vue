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
        

       <!-- 详情页面 -->
        <div class="goodsdetail">

             <!-- 轮播图 -->
            <div class="banners" >
                <div  class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img width="100%" src="https://pop.nosdn.127.net/cab7e6aa-6c25-4151-b867-26331f91aa40?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img width="100%" src="https://pop.nosdn.127.net/03c3d052-fb8c-4960-99a8-fa486c5bdc7d?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img width="100%" src="https://pop.nosdn.127.net/71263a31-c155-4d9c-b14c-84f31794dc03?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img width="100%" src="https://pop.nosdn.127.net/75764e56-372c-4933-a656-40b691e6def9?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
                        </div>
                    </div>
                    <div id="pag" class="swiper-pagination"></div>
                </div>
            </div>

            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>没有数据......</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>
            <p>嗯................</p>


           
        </div>

        <footer>
            <ul>
                <li>
                    <i>
                        <img src="../../../public/store.png"  >
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
                    <!-- <i class="yo-ico">&#xe63f;</i> -->
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563100075630&di=06e90e15b04c86d7817a886531be0f34&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F33%2F45%2F581123470fdcd_610.jpg" alt="">
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


<script>
import Swiper from 'swiper'

export default {
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                disableOnInteraction: false,
                delay:3000
            },//可选选项，自动滑动
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}
</script>



<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
@import '~@/assets/swiper/css/swiper.min.css'

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

    .goodsdetail
        flex 1
        overflow-y scroll
        .banners
            padding 0 .25rem
            img 
                width 100%
                height 3rem

    footer 
        display flex
        height .55rem 
        flex-direction row
        border_1px(1px 0 0 0 )
        position fixed
        bottom 0
        background #fff
        ul
            width 100%
            height 100%
            display flex
            li
                display flex 
                flex-direction column  
                text-align center
                b
                    color #666
                    font-size .09rem
                    margin-top .03rem
            li:nth-of-type(1)
                width 13%
                margin-top .08rem
                img     
                    width 42%
            li:nth-of-type(2)
                width 13%
                margin-top .08rem
                img     
                    width 35.8%
            li:nth-of-type(3)
                width 13%
                margin-top .08rem
                img 
                    width 43%
                    margin-left .1rem
                b
                    margin-top .05rem
            li:nth-of-type(4)
                width 30.5%
                background #404040
                color #fff
                align-items center 
                justify-content center
            li:nth-of-type(5)
                width 30.5%
                background-image linear-gradient(225deg,#ff3163 15%,red 85%)
                color #fff
                justify-content center
                

</style>

