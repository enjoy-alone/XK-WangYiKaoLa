<template>
    <div id="search">
        <div class="sweep">
            <i class="yo-ico">&#xe649;</i>
            <b>扫一扫</b>
        </div>
        <div class="search">
            <i class="yo-ico">&#xe602;</i>
            <span>飞利浦剃须刀</span>
        </div>
        <div class="message">
            <i class="yo-ico">&#xe665;</i>
            <b>消息</b>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
#search 
    height 100%
    display flex
    padding 0 .1rem
    line-height 1.1
    align-items center
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

