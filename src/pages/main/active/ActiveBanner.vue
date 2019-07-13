<template>
    <div>
        <!-- 小横幅 -->
        <div class="n-image"><img :src="resultHome[1].imageUrl" alt=""></div>
        
        <!-- 菜单板块 -->
        <ul class="m-slide">
            <li
                v-for="item in resultHome[2].itemList"
                :key="item.index"
            >
            
            <img :src="item.imgUrl" alt="">
            </li>
        </ul>

        <!-- 新人专享 -->
        <div width="100%" height="1.2rem" >
            <img :src="resultHome[3].imageUrl" alt="" width="100%" height="100%">
        </div>

        <div class="new-active">
            <span><img :src="resultHome[4].itemList[0].imageUrl" alt="" width="100%" height="100%"></span>
            <span>
                <img :src="resultHome[4].itemList[1].imageUrl" alt="" width="100%" height="50%">
                <img :src="resultHome[4].itemList[2].imageUrl" alt="" width="100%" height="50%">
            </span>
        </div>

        <!-- 商品大logo -->
        <div   width="100%">
            <img src="https://haitao.nosdn1.127.net/TIXNA7QlO3mCB1Tr960T18070101405_960_97.png?imageView&type=webp&thumbnail=960x97&quality=95" alt="" width="100%" height="100%">
        </div>


    </div>
</template>


<script>
export default {
    props:['resultHome'],

}
</script>


<style lang="stylus" scoped>
.n-image
    height .22rem
    width 100%
    img 
      width 100%
      height 100%
.m-slide
    background #fff
    display flex
    flex-wrap wrap
    height 1.8rem
    li 
        width 20%
        height 50%
        display flex
        img 
            width 100%
            height 100%

.new-active
    width 100%
    display flex
    span:nth-of-type(1)
        display inline-block
        height 100%
        width 50%
    span:nth-of-type(2)
        display inline-block
        height 100%
        width 50%


</style>


