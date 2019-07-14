<template>

    <div class="swiper-slide">
        <img :src="bannerlist.imgUrl" width="100%" height="100%"> 
    </div>

</template>


<script>

export default {

    props:['bannerlist'],

    mounted(){

        //swiper轮播图
        new Swiper ('.swiper-container', {
        autoplay: {
            disableOnInteraction: false,
            delay:3000
        },//可选选项，自动滑动
        loop: true, // 循环模式选项
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function(swiper, current, total) {
                return current + " / " + total;
                }
            }
        })
        
    },



}
</script>

