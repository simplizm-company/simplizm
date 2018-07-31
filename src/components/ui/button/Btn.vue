<script>
export default {
    props: {
        tag: {
            default: 'button'
        },
        href: {
            default: '#self'
        },
        to: {
            default: '/'
        },
        disabled: {
            default: false
        }
    },
    render (createElement) {
        return createElement(
            this.tag,
            {
                class: '_btn',
                attrs: {
                    href: this.tag === 'a' ? this.href : false,
                    to: this.tag === 'nuxt-link' ? this.to : false,
                    disabled: this.disabled
                },
                on: {
                    click: this.clickHandler
                }
            },
            this.$slots.default
        );
    },
    methods: {
        clickHandler () {
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss">
._btn {display: flex; width: 100%; border: none; border-radius: 0; align-items: center; justify-content: center; -webkit-appearance: none; cursor: pointer;
    &.w100 {width: 100px;}
    &.w150 {width: 150px;}
    &.w200 {width: 200px;}

    &.h100 {height: 100px; font-size: 32px;}
    &.h80 {height: 80px; font-size: 28px;}
    &.h60 {height: 60px; font-size: 24px;}
    &.h40 {height: 40px; font-size: 17px;}

    // color
    &.c1 {border: 1px solid #000000; background: #000000; color: #ffffff;}
    &.c2 {border: 1px solid #333333; background: #333333; color: #ffffff;}

    // empty
    &.e1 {border: 1px solid #000000; background: #ffffff; color: #000000;}

    // status
    &:disabled {border: 1px solid #f7f7f7; background: #f7f7f7; color: #cccccc; cursor: default;}
}

@media (min-width: 751px) {
    ._btn {
        &.pw200 {width: 200px;}
    }
}
</style>

