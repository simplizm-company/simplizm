<script>
export default {
    props: ['tag'],
    data () {
        return {
            lineHeight: false,
            fontSize: false
        }
    },
    computed: {
        margin () {
            return (this.lineHeight - this.fontSize) / this.fontSize;
        }
    },
    render (createElement) {
        return createElement(
            this.tag ? this.tag : 'div',
            {
                class: '_cut'
            },
            [
                createElement('div', {
                    style: {
                        margin: `-${this.margin}ex 0`
                    }
                }, this.$slots.default)
            ]
        );
    },
    created () {
        this.$nextTick(() => {
            this.lineHeight = parseInt($(this.$el).css('line-height'));
            this.fontSize = parseInt($(this.$el).css('font-size'));
        });
    }
}
</script>

<style lang="scss">
._cut {display: flex;
    > div {display: flex; align-items: baseline;}
}
</style>
