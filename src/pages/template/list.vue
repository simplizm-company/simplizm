<template>
    <div id="list">
        <ul>
            <li v-for="(list, index) in lists" :key="index" @click="delayRouter($event, list)">
                <div class="image" :style="`background: ${list.bg};`">
                    <img :src="list.img" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            lists: [
                {
                    url: '/template/view',
                    img: require('~/static/images/sample/friends_272x272_01.gif'),
                    bg: '#ffeded'
                },
                {
                    url: '/template/view',
                    img: require('~/static/images/sample/friends_272x272_02.gif'),
                    bg: '#05b29f'
                },
                {
                    url: '/template/view',
                    img: require('~/static/images/sample/friends_272x272_03.gif'),
                    bg: '#516371'
                },
                {
                    url: '/template/view',
                    img: require('~/static/images/sample/friends_272x272_04.gif'),
                    bg: '#ffd100'
                },
                {
                    url: '/template/view',
                    img: require('~/static/images/sample/friends_272x272_05.gif'),
                    bg: '#a4c9dc'
                },
            ]
        }
    },
    methods: {
        delayRouter ($event, list) {
            let $list = $($event.target).closest('li');
            let $image = $list.find('.image');
            $list.addClass('push');
            $image.css({
                'top': $image.offset().top - $(window).scrollTop(),
                'left': $image.offset().left - $(window).scrollLeft(),
                'position': 'fixed',
                'transition': 'all 900ms'
            });
            setTimeout(() => {
                $image.css({
                    'top': 0,
                    'left': 0,
                    'width': '100vw',
                    'height': '80vh'
                });
            }, 100);
            setTimeout(() => {
                this.$router.push({
                    query: {
                        bg: list.bg
                    },
                    path: list.url
                });
            }, 1000);
        }
    }
}
</script>

<style lang="scss">
#list {
    ul {width: 500px; margin: 0 auto;
        li {margin: 50px 0 0; height: 272px;
            &:first-child {margin-top: 0;}
            .image {width: 500px; height: 272px;
                img {width: 500px; height: 272px; transition: all 1000ms;}
            }
            &.push .image {
                img {opacity: 0;}
            }
        }
    }
}
</style>
