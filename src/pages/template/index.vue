<template>
    <div id="template">
        <nav id="tnb">
            <ul>
                <li><nuxt-link to="/template/button">button</nuxt-link></li>
                <li><nuxt-link to="/template/input">input</nuxt-link></li>
                <li><nuxt-link to="/template/signup">signup</nuxt-link></li>
                <li><nuxt-link to="/template/icons">icons</nuxt-link></li>
                <li><nuxt-link to="/template/text">text</nuxt-link></li>
                <li><nuxt-link to="/template/flex">flex</nuxt-link></li>
                <li><nuxt-link to="/template/tableList">tableList</nuxt-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    layout: 'template',
    computed: {
        windowScrollTop () {
            return this.$store.state.window.scrollTop;
        },
        windowWidth () {
            return this.$store.state.window.width;
        }
    },
    watch: {
        windowScrollTop () {
            console.log('scroll watch', this.windowScrollTop);
        },
        windowWidth () {
            console.log('resize window');
        }
    }
}
</script>

<style lang="scss" scoped>
#tnb {padding: 100px;}
#tnb ul li {margin: 15px 0 0;}
#tnb ul li:first-child {margin-top: 0;}
#tnb ul li a {display: block; font-weight: 700; font-size: 17px;}
</style>
