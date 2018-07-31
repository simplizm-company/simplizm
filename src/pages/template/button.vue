<template>
    <div id="button">
        <section>
            <btnbox>
                <btn tag="a" href="/" class="c1 h40 w100 pw200" @click="aa">a 태그</btn>
                <btn tag="nuxt-link" to="/" class="c1 h40 w150" @click="aa">nuxt-link 태그</btn>
                <btn class="c1 h40 w100" @click="aa">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
                <btn class="c1 h40 w100" :disabled="true">비활성화</btn>
            </btnbox>
        </section>
        <section>
            <btnbox class="sbw">
                <btn class="c1 h40 w100">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
            </btnbox>
        </section>
        <section>
            <btnbox class="bw10">
                <btn class="c1 h40 w100">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
            </btnbox>
        </section>
        <section>
            <btnbox class="bw20">
                <btn class="c1 h40 w100">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
            </btnbox>
        </section>
        <section>
            <btnbox class="jcs">
                <btn class="c1 h40 w100">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
            </btnbox>
        </section>
        <section>
            <btnbox class="jce">
                <btn class="c1 h40 w100">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
            </btnbox>
        </section>
        <section>
            <btnbox class="sbw">
                <div>
                    <btn class="c1 h40 w100">긍정</btn>
                    <btn class="c2 h40 w100">부정</btn>
                    <btn class="e1 h40 w100">제어</btn>
                </div>
                <div>
                    <btn class="c1 h40 w100">긍정</btn>
                    <btn class="c2 h40 w100">부정</btn>
                    <btn class="e1 h40 w100">제어</btn>
                </div>
            </btnbox>
        </section>
        <section>
            <btnbox class="sbw bw10">
                <div>
                    <btn class="c1 h40 w100">긍정</btn>
                    <btn class="c2 h40 w100">부정</btn>
                    <btn class="e1 h40 w100">제어</btn>
                </div>
                <div>
                    <btn class="c1 h40 w100">긍정</btn>
                    <btn class="c2 h40 w100">부정</btn>
                    <btn class="e1 h40 w100">제어</btn>
                </div>
            </btnbox>
        </section>
        <section>
            <btnbox>
                <btn class="c1 h40 w100">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
                <btn class="c1 h40 w100 mla">긍정</btn>
                <btn class="c2 h40 w100">부정</btn>
                <btn class="e1 h40 w100">제어</btn>
            </btnbox>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        aa () {
            console.log('aa');
        }
    }
}
</script>


<style lang="scss" scoped>
#button {padding: 100px;
    > section {margin: 50px 0 0;
        &:first-child {margin-top: 0;}
    }
}
</style>
