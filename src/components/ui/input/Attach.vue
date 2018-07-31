<template>
    <div class="_attach">
        <input type="file">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
._attach {position: relative; cursor: pointer;
    input[type=file] {position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;}
}
</style>
