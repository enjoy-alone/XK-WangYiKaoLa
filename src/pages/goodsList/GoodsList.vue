<template>
    <div>
        <img src="https://haitao.nosdn1.127.net/61556274-32ef-44bf-84af-b3d4485ac157.png" width="100%">
        <div class="goods-list"
            >
            <ul>
                <li v-for="goods in forYouResult"
                :key="goods.goodsId">
                    <a href="javascript:;">
                        <img :src="goods.imageUrl" width="100%">
                    </a>
                    <div>
                        <p>{{goods.title}}</p>
                        <p><span>￥</span><span>{{goods.currentPrice}}</span></p>
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
export default {
    props:['forYouResult']
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/ellipsis.styl'
.goods-list
    background #f2f2f2
    display flex
    ul
        display flex
        flex-wrap wrap
        box-sizing border-box
        li
            width 47%
            background #fff 
            margin .055rem
            div
                padding 0 .05rem
                p:nth-child(1)
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-size: 14px;
                    line-height: 18px;
                    color: #333;
                p:nth-child(2)
                    font-size: 16px;
                    color: red;
                    font-weight bold
                    text-size-adjust: 100%;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);     

</style>

