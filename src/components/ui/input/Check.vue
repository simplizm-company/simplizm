<template>
    <label class="_check">
        <input type="checkbox" :value="val" v-model="checked" @change="onChange">
        <cut><slot></slot></cut>
    </label>
</template>

<script>
export default {
    props: ['value', 'val'],
    data () {
        return {
            checkedProxy: false
        }
    },
    computed: {
        checked: {
            get () {
                return this.value;
            },
            set (val) {
                this.checkedProxy = val;
            }
        }
    },
    methods: {
        onChange: function(e) {
            this.$emit('input', this.checkedProxy)
        }
    }
}
</script>

<style lang="scss">
$size: 16px;
._check {display: flex; position: relative; padding: 0 0 0 24px;
    &.textNull {padding-left: 0; width: $size; height: $size;}
    input {position: absolute; top: 5px; left: 0; width: 1px; height: 1px; opacity: 0; cursor: pointer;
        &:checked + ._cut:before {background-position-y: -$size;}
    }
    > ._cut {
        &:before {display: block; content: ''; position: absolute; top: 0.9ex; left: 0; width: $size; height: $size; margin-top: -($size / 2); background: url(~/static/images/common/checkbox.png) 0 0 no-repeat;}
    }
}
</style>
