<template>
    <div class="input-text">
        <input :type="type" class="input">
        <div v-if="placeholder" class="placeholder">{{ placeholder }}</div>
    </div>
</template>

<script>
export default {
    props: ['type', 'placeholder'],
    created () {
        console.log(this.$refs);
    },
    methods: {
        mouseenter () {
            console.log('enter');
        }
    }
}
</script>

<style lang="scss" scoped>
.input-text {
    position: relative;

    .placeholder {
        position: absolute; top: 0; left: 11px; line-height: 40px; transition: all 300ms;
    }
    
    .input:focus {
        border-color: #22c504;

        & + .placeholder {
            top: -40px;
        }
    }
}
</style>
