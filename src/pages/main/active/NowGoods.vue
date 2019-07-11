<template>
    <div>
        <img :src="nowGoodsResult[0].imageUrl" width="100%" >
        <div 
            v-for="goods in nowGoodsResult[1].wellChosenActivityModuleItemList"
            :key="goods.biMark"
        >

            <div v-if="goods.startTime">暂时不写</div>


        </div>
    </div>
</template>

<script>

export default {
    props:['nowGoodsResult']
}
</script>

<style lang="stylus" scoped>

</style>

