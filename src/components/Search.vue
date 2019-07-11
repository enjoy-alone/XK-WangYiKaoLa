<template>
    <div id="search" :style="`display:${hidden}  `">
            <div class="sweep">
                <i class="yo-ico">&#xe649;</i>
                <b>扫一扫</b>
            </div>
            <router-link tag="div" to="/searchdetail" class="search">
                <i class="yo-ico">&#xe602;</i>
                <span>&nbsp;猫人内衣</span>
            </router-link>
            <div class="message">
                <i class="yo-ico">&#xe665;</i>
                <b>消息</b>
            </div>
    </div>
</template>

<script>
export default {
    props:['hidden'],
    mounted(){
        // console.log(this.hidden)

    }
   
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
#search 
    height .45rem
    display flex
    padding 0 .1rem
    line-height 1.1
    align-items center
    border_1px(0 0 1px 0)
    b
        font-weight normal
    .sweep
        display flex
        flex-direction column
        align-items center
        color #E31436
        i 
            font-size .19rem
        b
            font-size .1rem
    .search
        flex 1
        width 100%
        height .3rem
        border 2px solid #E31436
        border-radius .3rem
        margin 0 .1rem
        display flex
        align-items center 
        i 
            font-size .16rem
            font-weight 900
            margin-left .1rem
            color red
        b
            font-size .08rem
            color #727273 
    .message
        display flex
        align-items center
        flex-direction column
        color #E31436
        i 
            font-size .2rem
        b
            font-size .08rem
</style>

