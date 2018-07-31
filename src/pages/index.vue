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

        let line1 = {
            startX: 200,
            startY: 200,
            endX: 270,
            endY: 120
        }

        let line2 = {
            startX: 270,
            startY: 120,
            endX: 370,
            endY: 120
        }

        let line3 = {
            startX: 370,
            startY: 120,
            endX: 300,
            endY: 200
        }

        $context.lineWidth = 2;
        //$context.beginPath();
        /*$context.arc(200, 200, 50, 0, Math.PI * 2, true);
        $context.moveTo(200, 200);
        $context.lineTo(270, 120);
        $context.lineTo(370, 120);
        $context.lineTo(300, 200);
        $context.lineTo(200, 200);*/


        vue.firstCircle($canvas, $context, function () {
            vue.drawLine($canvas, $context, line1, function () {
                vue.drawLine($canvas, $context, line2, function () {
                    vue.drawLine($canvas, $context, line3, function () {
                        console.log('end');
                    });
                });
            });
        });
    },
    methods: {
        firstCircle (canvas, context, endCallback) {
            let amount = 0;
            let speed = 5;

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
        drawLine (canvas, context, path, endCallback) {
            let amount = 0;
            let speed = 5;

            context.moveTo(path.startX, path.startY);

            setTimeout(function play () {
                amount += 0.01;
                context.save();
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.lineTo(path.startX + (path.endX - path.startX) * amount, path.startY + (path.endY - path.startY) * amount);
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
