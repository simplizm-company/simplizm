<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
if (typeof window !== 'undefined') {
    const slick = require('slick-carousel')
}

export default {
    props: {
        options: {
            type: Object,
            default: function() {
                return {};
            },
        },
    },
    mounted: function() {
        this.create();
    },
    destroyed: function() {
        $(this.$el).slick('unslick');
    },
    methods: {
        create: function() {
            const $slick = $(this.$el);

            $slick.on('afterChange', this.onAfterChange);
            $slick.on('beforeChange', this.onBeforeChange);
            $slick.on('breakpoint', this.onBreakpoint);
            $slick.on('destroy', this.onDestroy);
            $slick.on('edge', this.onEdge);
            $slick.on('init', this.onInit);
            $slick.on('reInit', this.onReInit);
            $slick.on('setPosition', this.onSetPosition);
            $slick.on('swipe', this.onSwipe);
            $slick.on('lazyLoaded', this.onLazyLoaded);
            $slick.on('lazyLoadError', this.onLazyLoadError);

            $slick.slick(this.options);
        },

        destroy: function() {
            const $slick = $(this.$el);

            $slick.off('afterChange', this.onAfterChange);
            $slick.off('beforeChange', this.onBeforeChange);
            $slick.off('breakpoint', this.onBreakpoint);
            $slick.off('destroy', this.onDestroy);
            $slick.off('edge', this.onEdge);
            $slick.off('init', this.onInit);
            $slick.off('reInit', this.onReInit);
            $slick.off('setPosition', this.onSetPosition);
            $slick.off('swipe', this.onSwipe);
            $slick.off('lazyLoaded', this.onLazyLoaded);
            $slick.off('lazyLoadError', this.onLazyLoadError);
            $(this.$el).slick('unslick');
        },

        reSlick: function() {
            this.destroy();
            this.create();
        },

        next: function() {
            $(this.$el).slick('slickNext');
        },

        prev: function() {
            $(this.$el).slick('slickPrev');
        },

        pause: function() {
            $(this.$el).slick('slickPause');
        },

        play: function() {
            $(this.$el).slick('slickPlay');
        },

        goTo: function(index, dontAnimate) {
            $(this.$el).slick('slickGoTo', index, dontAnimate);
        },

        currentSlide: function() {
            return $(this.$el).slick('slickCurrentSlide');
        },

        add: function(element, index, addBefore) {
            $(this.$el).slick('slickAdd', element, index, addBefore);
        },

        remove: function(index, removeBefore) {
            $(this.$el).slick('slickRemove', index, removeBefore);
        },

        filter: function(filterData) {
            $(this.$el).slick('slickFilter', filterData);
        },

        unfilter: function() {
            $(this.$el).slick('slickUnfilter');
        },

        getOption: function(option) {
            $(this.$el).slick('slickGetOption', option);
        },

        setOption: function(option, value, refresh) {
            $(this.$el).slick('slickSetOption', option, value, refresh);
        },

        setPosition: function() {
            $(this.$el).slick('setPosition');
        },

        // Events
        onAfterChange: function(event, slick, currentSlide) {
            this.$emit('afterChange', event, slick, currentSlide);
        },

        onBeforeChange: function(event, slick, currentSlide, nextSlide) {
            this.$emit('beforeChange', event, slick, currentSlide, nextSlide);
        },

        onBreakpoint: function(event, slick, breakpoint) {
            this.$emit('breakpoint', event, slick, breakpoint);
        },

        onDestroy: function(event, slick) {
            this.$emit('destroy', event, slick);
        },

        onEdge: function(event, slick, direction) {
            this.$emit('edge', event, slick, direction);
        },

        onInit: function(event, slick) {
            this.$emit('init', event, slick);
        },

        onReInit: function(event, slick) {
            this.$emit('reInit', event, slick);
        },

        onSetPosition: function(event, slick) {
            this.$emit('setPosition', event, slick);
        },

        onSwipe: function(event, slick, direction) {
            this.$emit('swipe', event, slick, direction);
        },

        onLazyLoaded: function(event, slick, image, imageSource) {
            this.$emit('lazyLoaded', event, slick, image, imageSource);
        },

        onLazyLoadError: function(event, slick, image, imageSource) {
            this.$emit('lazyLoadError', event, slick, image, imageSource);
        },
    },
};
</script>

<style lang="scss">
.slick-slider {position: relative; display: block; box-sizing: border-box; -webkit-touch-callout: none; user-select: none; touch-action: pan-y; -webkit-tap-highlight-color: transparent;}
.slick-list {position: relative; overflow: hidden; display: block; margin: 0; padding: 0;
    &:focus {outline: none;}
    &.dragging {cursor: pointer; cursor: hand;}
}
.slick-slider .slick-track,
.slick-slider .slick-list {transform: translate3d(0, 0, 0);}
.slick-track {position: relative; left: 0; top: 0; display: block; margin-left: auto; margin-right: auto;
    &:before,
    &:after {content: ''; display: table;}
    &:after {clear: both;}
    .slick-loading & {visibility: hidden;}
}
.slick-slide {display: none; float: left; height: 100%; min-height: 1px;
    [dir="rtl"] & {float: right;}
    img {display: block;}
    &.slick-loading img {display: none;}
    &.dragging img {pointer-events: none;}
    .slick-initialized & {display: block;}
    .slick-loading & {visibility: hidden;}
    .slick-vertical & {display: block; height: auto; border: 1px solid transparent;}
}
.slick-arrow.slick-hidden {display: none;}
</style>


