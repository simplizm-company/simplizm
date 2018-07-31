<template>
    <article id="index">
        <canvas ref="canvas" :width="this.window.width" :height="this.window.height"></canvas>
    </article>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data () {
        return {
            speed: 10
        }
    },
    computed: {
        ...mapState({
            window : state => state.window
        }),
        $canvas () {
            return this.$refs['canvas'];
        }
    },
    watch: {
        window: {
            handler () {
                console.log(this.window.width);
            },
            deep: true
        }
    },
    mounted () {
        /*
            canvas, context, endcallback
        */

        const vue = this;
        const $canvas = this.$canvas;
        const $context = $canvas.getContext('2d');

        $context.lineWidth = 2;
        //$context.beginPath();
        /*$context.arc(200, 200, 50, 0, Math.PI * 2, true);
        $context.moveTo(200, 200);
        $context.lineTo(270, 120);
        $context.lineTo(370, 120);
        $context.lineTo(300, 200);
        $context.lineTo(200, 200);*/


        vue.firstCircle($canvas, $context, function () {
            vue.firstLine($canvas, $context);
        });

    },
    methods: {
        firstCircle (canvas, context, endCallback) {
            let amount = 0;
            let speed = 10;

            setTimeout(function play () {
                amount += 0.01;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(200, 200, 50, 0, Math.PI * 2 * amount);
                context.stroke();
                if (amount < 1) {
                    setTimeout(function () {
                        play();
                    }, speed);
                } else {
                    if (endCallback) {
                        endCallback();
                    }
                }
            }, speed);
        },
        firstLine (canvas, context, endCallback) {
            let amount = 0;
            let speed = 10;

            context.moveTo(200, 200);

            setTimeout(function play () {
                amount += 0.01;
                context.save();
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.lineTo(200 + (270 - 200) * amount, 200 + (120 - 200) * amount);
                context.stroke();

                if (amount < 1) {
                    setTimeout(function () {
                        play();
                    }, speed);
                } else {
                    if (endCallback) {
                        endCallback();
                    }
                }
            }, speed);
        }
    }
}
</script>

<style lang="scss">
</style>
