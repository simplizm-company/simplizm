<template>
    <div id="page">
        <table-list-01>
            <colgroup>
                <col :style="isDevice ? 'width: 70px;' : 'width: 100px;'">
                <col style="width: auto;">
                <col v-if="!isDevice" style="width: 140px;">
                <col v-if="!isDevice" style="width: 140px;">
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th v-if="!isDevice">날짜</th>
                    <th v-if="!isDevice">조회수</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in 10" :key="index">
                    <td>01</td>
                    <td>
                        <div class="title">
                            <nuxt-link to="/">텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트</nuxt-link>
                            <div class="somthing">썸띵</div>
                        </div>
                    </td>
                    <td v-if="!isDevice">2018-07-19</td>
                    <td v-if="!isDevice">1324</td>
                </tr>
            </tbody>
        </table-list-01>
    </div>
</template>

<script>
export default {
    computed: {
        isDevice () {
            return this.$store.state.window.isDevice;
        }
    }
}
</script>


<style lang="scss">
</style>
