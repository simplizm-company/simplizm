<template>
    <header id="header">
        <h1 class="logo"><nuxt-link to="/">SIMPLIZM</nuxt-link></h1>
        <button class="gnb-toggle" :class="{ active : gnbVisible }" @click="toggleGnbVisible"><div>전체메뉴</div></button>
        <transition name="gnb">
            <global-navigation v-if="gnbVisible"></global-navigation>
        </transition>
    </header>
</template>

<script>
export default {
    computed: {
        gnbVisible () {
            return this.$store.state.common.gnbVisible;
        }
    },
    methods: {
        toggleGnbVisible () {
            this.$store.state.common.gnbVisible = !this.$store.state.common.gnbVisible;
        }
    }
}
</script>

<style lang="scss">
#header {display: flex; justify-content: space-between; align-items: center; height: 80px; padding: 0; margin: 0 auto;
    .logo {font-family: NanumSquare; font-weight: 700; font-size: 32px; color: #000000;}
    .gnb-toggle {position: relative; z-index: 1001; width: 50px; height: 28px;
        &:before {display: block; content: ''; position: absolute; top: 0; left: 0; width: 50px; height: 4px; border: 1px solid #000000; background: #ffffff; transition: all 500ms;}
        div {position: absolute; top: 12px; left: 0; width: 100%; height: 4px; border: 1px solid #000000; background: #ffffff; text-indent: -9999em; transition: all 500ms;}
        &:after {display: block; content: ''; position: absolute; top: 24px; left: 0; width: 50px; height: 4px; border: 1px solid #000000; background: #ffffff; transition: all 500ms;}
        &.active {
            &:before {transform: rotate(45deg); top: 12px;}
            div {opacity: 0;}
            &:after {transform: rotate(-45deg); top: 12px;}
        }
    }
}
</style>
