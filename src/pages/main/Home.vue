<template>

  <div class="banner">

    <!-- 轮播图 -->
    <div class="swiper-container  swiper-no-swiping">
      <div  class="swiper-wrapper">
          <banner 
            v-for="bannerlist in resultBanner"
            :key="bannerlist.biMark"
            :bannerlist="bannerlist"
          ></banner>
      </div>
    </div>
    <div class="swiper-pagination" id="pagination"></div>


    <!-- 活动板块 -->
    <active-board :resultHome="resultHome"></active-board>  


    <!-- 今日必抢商品 -->
    <!-- <now-goods :nowGoodsResult="nowGoodsResult"></now-goods> -->

    <!-- 活动商品模块 -->
    <goods-active :goodsActiveResult="goodsActiveResult"  :BS="BS"></goods-active>


    <!-- 为你推荐 -->
    <goods-list :forYouResult="forYouResult"></goods-list>


  </div>
      
</template>

<script>
import http from "../../utils/http";
import Banner from "../../components/Banner";
import ActiveBoard from '../active/ActiveBanner'
// import NowGoods from '../active/NowGoods'
import GoodsActive from '../active/GoodsActive'
import GoodsList from '../goodsList/GoodsList'

import {Indicator,Toast} from 'mint-ui'
import _ from 'lodash'


export default {
  props:['bs'],


  components: {
    Banner,
    ActiveBoard,
    GoodsActive,
    GoodsList
    
  },


  data() {
    return {
      // 轮播图
      resultBanner:this.resultBanner,
      //首页中心板块
      resultHome:this.resultHome,

      //今日必抢
      // nowGoodsResult:this.nowGoodsResult,

      //活动商品模块
      goodsActiveResult:this.goodsActiveResult,

      //为你推荐
      forYouResult:this.forYouResult,

      BS:{
        
        }
    }
  },



  async mounted() {
    this.BS = this.bs

    Indicator.open({
      text: '亲，马上来~~~',
      spinnerType: 'triple-bounce'
    });

    //主页大板块数据
    let result = await http.get({
      url: "/home/index.html?t=1561961646751&pageNo=1"
    });

    //轮播图数据
    this.resultBanner = result.data.home[0].bannerList

    //主页活动板块数据
    let resultHome =  Array.from(result.data.home)
    this.resultHome = resultHome
    // console.log(resultHome)



    //今日必抢商品
    // this.$nextTick(async ()=>{
    //   let nowGoodsResult = await http.get({
    //     url: "/home/index.html?t=1562052350657&pageNo=2"
    //   }); 
    //   this.nowGoodsResult = nowGoodsResult.data.home
    // })
    // console.log(this.nowGoodsResult)


   

    //商品活动模块
    let goodsActiveResult = await http.get({
      url: "/home/index.html?t=1562052350657&pageNo=3"
    }); 
    this.goodsActiveResult = goodsActiveResult.data.home


   
    
    // console.log(this.goodsActiveResult)


    //为你推荐模块
    let forYouResult = await http.get({
      url: "/home/index.html?t=1562052350657&pageNo=4"
    }); 
    
    this.forYouResult = forYouResult.data.home[1].globalGoodsItemList
    // console.log(this.forYouResult)

    Indicator.close()  

    
    let page=5

    this.$nextTick(async()=>{
      this.bs.on("pullingUp",async()=>{
        if(page <= 10) {
            Indicator.open()  
            let twoForYouResult = await http.get({
              url: "/home/index.html?t=1562052350657&pageNo="+page
            }); 
            this.forYouResult = [...this.forYouResult,...twoForYouResult.data.home[0].globalGoodsItemList]
            page++
            Indicator.close()
            this.bs.refresh()
            this.bs.finishPullUp()
        }else{
          this.bs.finishPullUp()
          Toast({
            message: '到底了~',
            position: 'bottom',
            duration: 2000
          });
        }
        
      })
    })
    
    



   
  },

 
};
</script>


<style lang="stylus" scoped>
.banner
  position relative
  .swiper-container 
    height 2.07rem
    overflow hidden
    width 100%
    height 100%
    img 
      width 100%
      height 100%
  #pagination 
    position absolute
    top 1.5rem
    left 0.15rem
    width 0.32rem
    height 0.35rem
    line-height 0.48rem
    color #fff
    white-space nowrap
    display flex
    -webkit-box-align center
    align-items center
    background url('data:image/png;base64,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') no-repeat center
    background-size 100%

  





</style>

