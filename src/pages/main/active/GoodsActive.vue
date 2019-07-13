<template>
    <div>
        <div class="goods-active"
            v-for="goods in goodsActiveResult"
                :key="goods.index"
        >
            <div class="bg" v-if="goods.imageUrl">
                <img :src="goods.imageUrl" width="100%">
            </div>
            <div class="swiper-container" id="swiper" v-if="goods.biMark" >   
                
                <div class="swiper-wrapper" >
                    <div 
                        v-for="item in goods.itemList"
                        :key="item.biMark"
                        class="swiper-slide"
                        id="two"
                    >
                        <a href="#" >
                            <img :src="item.imgUrl || item.logoUrl">
                        </a>
                        <h4>
                            <p>{{item.description_1 || item.name}}</p>
                            <p>{{item.description_2 || item.introduce}}</p>
                        </h4>
                    </div>
        
                    <h5 class="more">
                        <img src="https://haitao.nos.netease.com/d1e92de4-e260-4f05-a8ab-b9dd30f38073.png" alt="" width="80%">
                        <p>查看更多</p>
                    </h5>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
import Bsroll from 'better-scroll'

export default {
    props:['goodsActiveResult','BS'],

    mounted(){
        // console.log(this.BS)
 
        
            this.$nextTick(()=>{
                setTimeout(()=>{
                    let bbs = new Bsroll('#swiper',{
                        scrollX:true,
                        scrollY:false,
                        scrollbar: {
                            fade: true,
                            interactive: false // 1.8.0 新增
                        }
                    })
                },5000)
            })
        
        
        // this.$nextTick(()=>{
        //     setTimeout(()=>{
        //         new Swiper('#swiper',{
        //             slidesPerView : 3.5,
        //             autoplay:true
        //         }); 
        //     },5000)
        // })
      

    }
    

}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'

.goods-active
    position relative
    bakcground pink
    overflow hidden
    #swiper
        position relative
        background #fff
        top -.2rem
        left .15rem
        .swiper-wrapper
            display flex
            //适应内容最大宽度,
            width  max-content
            padding-right .4rem
            overflow-x scroll 
            #two
                width 1.1rem
                border 1px solid #ececec
                box-shadow 0 0.026667rem 0.08rem 0 #f2f2f2
                text-align center
                overflow hidden
                a 
                    display inline-block
                    width 100%
                    height 1rem
                    img 
                        width 100%
                        height 100%       
                h4
                    text-align center
                    line-height 1   
                    padding .05rem 0rem .1rem 0rem
                    border-top 1px solid #ececec
                    font-family normal
                    font-weight normal
                    p:nth-child(1)
                        font-size .14rem
                        color #333
                        overflow hidden
                        text-overflow ellipsis 
                        white-space nowrap
                    p:nth-child(2)
                        font-size .11rem
                        padding-top .04rem
                        color #666
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
            .more
                width 1rem
                border 1px solid #ececec
                box-shadow 0 0.026667rem 0.08rem 0 #f2f2f2
                text-align center
                color #696969
                font-family normal
                font-weight normal
                img 
                    margin-top .3rem
                    margin-bottom  .1rem
                
</style>
