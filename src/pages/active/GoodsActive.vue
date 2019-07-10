<template>
    <div>
        <img src="https://haitao.nosdn2.127.net/8v8Qd4gikpeGTMgcjingxuan_huodong111T170101801048_960_190.png?imageView&type=webp&thumbnail=960x190&quality=95" width="100%">
        <div class="goods-active"
            v-for="goods in goodsActiveResult.slice(1,3)"
                :key="goods.biMark"
        >
            <div><img :src="goods.imageUrl" width="100%"></div>
            <div class="swiper-container" id="swiper" 
                v-for="item in goods.itemList"
                :key="item.linkUrl"
                >   
                <div class="swiper-wrapper" id="center">
                    <div class="swiper-slide" id="two" >
                        <a href="#" >
                            <img :src="item.imgUrl">
                        </a>
                        <h4>
                            <p>{{item.description_1}}</p>
                            <p>{{item.description_2}}</p>
                        </h4>
                    </div>
                </div> 
            </div>
            <h5 class="more">
                <img src="https://haitao.nos.netease.com/d1e92de4-e260-4f05-a8ab-b9dd30f38073.png" alt="" width="80%">
                <p>查看更多</p>
            </h5>
        </div>

    </div>
</template>

<script>

export default {
    props:['goodsActiveResult','BS'],

    mounted(){
        // console.log(this.BS)

        // this.$nextTick(()=>{
        //     this.BS('.goodsList',{
        //         scrollX:true
        //     })
        // })
        
        this.$nextTick(()=>{
            new Swiper('#swiper',{
                slidesPerView : 3.5,
                autoplay:true
            }); 
        })
      

    }
    
   
    

}
</script>


<style lang="stylus" scoped>
@import '../../assets/styles/border.styl'
@import '../../assets/styles/ellipsis.styl'

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
            //适应内容最大宽度,
            width: max-content
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
                        font-size .15rem
                        color #333
                    p:nth-child(2)
                        font-size .11rem
                        padding-top .04rem
                        color #666
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
