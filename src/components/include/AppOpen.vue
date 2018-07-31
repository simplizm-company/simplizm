<template>
    <div id="appOpen" :class="{ mounted: mounted }">
        <div class="panel">
            <div class="left"></div>
            <div class="right"></div>
            <div class="count">{{ count }}</div>
        </div>
        <img src="~/static/images/common/gearwheels-01.png" alt="" class="gearwheels-01">
        <img src="~/static/images/common/gearwheels-02.png" alt="" class="gearwheels-02">
    </div>
</template>

<script>
export default {
    data () {
        return {
            created: false,
            mounted: false,
            count: 0
        }
    },
    created () {
        this.created = true;
    },
    mounted () {
        const vue = this;
        setTimeout(function () {
            vue.zeroTohundred();
            setTimeout(function () {
                vue.mounted = true;
                setTimeout(function () {
                    vue.$store.state.common.firstAppOpen = true;
                }, 1200);
            }, 4000);
        }, 200);
    },
    methods: {
        zeroTohundred () {
            const vue = this;
            let delay = 30;

            let count = setTimeout(function run () {
                if (vue.count < 100) {
                    vue.count++;
                    if (vue.count == 12) {
                        delay = 500;
                    } else if (vue.count > 12 && vue.count < 80) {
                        delay = 30;
                    } else if (vue.count == 80) {
                        delay = 700;
                    } else {
                        delay = 20;
                    }
                    setTimeout(run, delay);
                }
            }, delay);
        }
    }
}
</script>

<style lang="scss">
@keyframes spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
@keyframes spin2 {
    from {transform: rotate(0deg);}
    to {transform: rotate(-360deg);}
}

#appOpen {position: fixed; top: 0; right: 0; bottom: 0; left: 0;
    .panel {position: absolute; top: 0; right: 0; bottom: 0; left: 0;
        .left {position: absolute; top: -50vw; bottom: -50vw; left: 0; width: 150vw; background: #000000; transform: rotate(30deg); transition: all 1200ms ease-in;}
        .right {position: absolute; top: -50vw; right: 0; bottom: -50vw; width: 150vw; background: #000000; transform: rotate(30deg); transition: all 1200ms ease-in;}
        .count {position: absolute; top: 3vw; left: 5vw; font-size: 100px; color: #ffffff;}
    }
    .gearwheels-01 {position: absolute; top: 10vw; left: 29vw; z-index: 2; width: 24vw; animation: spin 10000ms linear infinite;}
    .gearwheels-02 {position: absolute; top: 20vw; left: 50vw; z-index: 2; width: 24vw; animation: spin2 10000ms linear 120ms infinite;}

    &.mounted {
        .panel {
            .left {left: -200vw; opacity: 0;}
            .right {right: -200vw; opacity: 0;}
        }
    }
}
</style>


