<template>
    <div id="slider">
        <slick :options="sliderOption">
            <div class="slick-item">
                <img src="~/static/images/sample/friends_272x272_01.gif" alt="">
            </div>
            <div class="slick-item">
                <img src="~/static/images/sample/friends_272x272_02.gif" alt="">
            </div>
            <div class="slick-item">
                <img src="~/static/images/sample/friends_272x272_03.gif" alt="">
            </div>
            <div class="slick-item">
                <img src="~/static/images/sample/friends_272x272_04.gif" alt="">
            </div>
            <div class="slick-item">
                <img src="~/static/images/sample/friends_272x272_05.gif" alt="">
            </div>
        </slick>
    </div>
</template>

<script>
export default {
    data () {
        return {
            sliderOption: {
                dots: true
            }
        }
    }
}
</script>

<style lang="scss">
</style>
