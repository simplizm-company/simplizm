<template>
    <div id="wrap">
        <transition name="header">
            <common-header v-if="firstAppOpen"></common-header>
        </transition>
        <transition name="container">
            <article id="container" v-if="firstAppOpen">
                <nuxt/>
            </article>
        </transition>
    </div>
</template>

<script>
export default {
    computed: {
        firstAppOpen () {
            return this.$store.state.common.firstAppOpen;
        }
    },
    mounted () {
        this.$store.state.common.firstAppOpen = true;
    }
}
</script>


<style lang="scss">
#wrap {overflow: hidden; position: relative; min-width: $desktop; min-height: 100vh;
    @include desktop {min-width: auto;}
    #container {width: $desktop; margin: 0 auto; padding: 60px 30px 120px;
        @include desktop {width: 100%;}
        @include tablet {padding: 50px 25px 100px;}
        @include mobile {padding: 40px 20px 80px;}
    }
}
</style>
