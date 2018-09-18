<template>
    <cut tag="h1" class="_page-title">
        <slot></slot>
    </cut>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
._page-title {margin: 0 0 100px; font-weight: 700; font-size: 60px; color: #000000; justify-content: center;
    @include mobile {margin: 0 0 50px;}
}
</style>
