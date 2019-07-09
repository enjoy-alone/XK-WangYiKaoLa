<template>
    <div class="container">
        <header>
            <Search></Search>
        </header>
        <main>
            <div><Home :bs="bs"></Home></div>
        </main>
        <footer>
            <ul class="btm">
                <li class="active">
                    <i class="yo-ico" >&#xe64f;</i>
                    <b>首页</b>
                </li>
                <li>
                    <i class="yo-ico">&#xe602;</i>
                    <b>分类</b>
                </li>
                <li>
                    <i class="yo-ico">&#xe505;</i>
                    <b>种草社区</b>
                </li>
                <li>
                    <i class="yo-ico">&#xe63f;</i>
                    <b>购物车</b>
                </li>
                <li>
                    <i class="yo-ico">&#xe659;</i>
                    <b>我的考拉</b>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script >
//项目的主页面，所有的组件入口
import Home from './main/Home'
import Search from '../components/Search'
import Swiper from '../assets/swiper/js/swiper'

import BSroll from 'better-scroll'

export default {
    data(){
        return {
            bs:{

            }
       }
    },
    
    components:{
        Home,
        Search
    },
    mounted(){
        this.$nextTick(() => {
            let bScroll = new BSroll('main',{
                probeType:2,
                click:true,
                pullUpLoad: true
            })
            this.bs = bScroll
        })
    }

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'

.container
    height 100%
    display flex
    flex-direction column
    header
       height .5rem
       background #fff   
    main
        flex 1
        overflow-y scroll
    footer 
        height .45rem  
        background #fff
        position relative
        bottom 0
        b
            font-weight normal
            font-size .12rem
        .btm 
            height 100%
            display flex
            border_1px(1px 0 0 0)
            li 
                flex 1
                display flex
                flex-direction column
                align-items center
                height 100%
                i
                    font-size .18rem
            li.active
                color #E31436


</style>


