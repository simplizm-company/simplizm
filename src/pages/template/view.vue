<template>
    <div id="view">
        <div class="visual" :style="`background: ${background};`">
            view page 임니당
        </div>
        <div class="content">
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
            텍스트텍스트<br>
        </div>
    </div>
</template>

<script>
export default {
    transition: {
        name: 'null'
    },
    computed: {
        background () {
            return this.$route.query.bg;
        }
    },
    created () {
        // console.log(this.$route);
    }
}
</script>


<style lang="scss">
#view {padding: calc(80vh - 80px) 0 0;
    .visual {position: absolute; width: 100vw; height: 80vh; top: 0; right: 0; left: 0;}
    .content {padding: 0 80px 80px;}
}
</style>
