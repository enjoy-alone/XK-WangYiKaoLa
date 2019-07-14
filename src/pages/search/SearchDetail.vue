<template>
    <div>
        <div class="srh">
            <div class="sweep">
                <router-link tag="i" to="/home" class="yo-ico" >&#xe660;</router-link>
            </div>
            <div class="search" >
                <i class="yo-ico">&#xe602;</i>
                &nbsp;
                <!-- <span>&nbsp;猫人内衣</span> -->
                <input type="search" 
                     id="ins"
                     @input="msgClick($event)" 
                     required="required" 
                     :placeholder=searchResult.keyInBox 
                     autocomplete="off" 
                     class="u-searchinput" 
                     name="key">
            </div>
            <div class="message">
                <span>搜索</span>
            </div>
        </div>

        <div class="hotSearch">
            <p>热门搜索</p>
            <ul>
                <li
                    v-for="item in searchResult.keyOutBox"
                    :key="item.index"
                >{{item.name}}</li>
            </ul>
        </div>

        <div class="list" :style="{'display': isShow }" >
            <p
                v-for="list in resultRT"
                :key="list.index"
                >
            {{list.levelOneKeyWords}}
            </p>
            <b @click="handleClick()">
                <img width="80%" src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/del.png?69cb737e-1&sv=449ce9ee" alt="">
            </b>
        </div>

    </div>
</template>

<script>
import http from "../../utils/http"

import { _debounce } from '../../utils/optimize'

export default {
    
    data(){
        return {
            searchResult:{},
            resultRT:{},
            isShow:'none'

        }
    },
    // /v250/suggest.html?t=1562854151273&key=a
    async mounted(){
        
        //搜索列表数据
        let searchResult = await http.get({
            url: "/h5/hotKey.html?t=1562850466985"
        }); 
        
        this.searchResult = searchResult.body.result
        // console.log(this.searchResult)

        

    },

    methods:{
        //实时搜索数据
        async msgClick(event){
            if(document.getElementById("ins").value){
                let resultRT = await http.get({
                    url:'/v250/suggest.html?t=1562854151273&key='+document.getElementById("ins").value
                })
                // console.log(resultRT.body.keywords)
                this.resultRT = resultRT.body.keywords
                this.isShow = "block"
            } else{
                this.isShow = "none"
            }  
        },

        handleClick(){
            this.isShow = "none"
            document.getElementById("ins").value = ''
        }

    },

  

}
</script>



<style lang="stylus" scoped>
.srh 
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
        i 
            font-size .18rem
    .search
        flex 1
        width 100%
        height .3rem
        background #ebebeb
        border-radius .1rem
        margin 0 .1rem
        display flex
        align-items center 
        i 
            font-size .16rem
            font-weight 900
            margin-left .1rem
        .u-searchinput
            border none
            background #ebebeb
            font-size .12rem
            margin-top .02rem
    .message
        display flex
        align-items center
        flex-direction column
        span
            font-size .14rem
            color #666

.hotSearch
    padding-top .1rem
    p
        padding-left .15rem
        font-size .14rem
        color #666
    ul 
        display flex  
        flex-wrap wrap 
        padding .08rem .25rem 0 .1rem
        li
            border 1px solid #dcdcdc
            border-radius .05rem
            padding .02rem .1rem
            font-size .13rem
            margin .04rem .04rem
        li:nth-of-type(1)
            display none
        li:nth-of-type(2)
            color #ff8587
            border 1px solid #ff8587

.list
    position absolute
    top .5rem
    background #fff
    width 100%
    p
        width 100%
        height .4rem
        line-height .4rem
        padding-left .1rem
        font-size .14rem 
        border-bottom 1px solid #ccc
    b
        font-weight normal
        position absolute
        right .6rem
        top -.38rem
        color #fff
        width .16rem
        height .16rem

</style>

