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
#wrap {overflow: hidden; position: relative; max-width: 1020px; min-height: 100vh; margin: 0 auto; padding: 10px;
    @include desktop {min-width: auto;}
}
</style>
