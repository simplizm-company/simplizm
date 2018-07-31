<template>
    <div class="write-table">
        <table>
            <colgroup>
                <col style="width: 20%;">
                <col style="width: auto;">
            </colgroup>
            <tbody>
                <tr>
                    <th>이름</th>
                    <td>
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <th>연락처</th>
                    <td>
                        <input type="tel">
                    </td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td>
                        <input type="email">
                    </td>
                </tr>
                <tr>
                    <th>성별</th>
                    <td>
                        <div class="cr-box">
                            <radio val="foo" v-model="componentRadio">남자</radio>
                            <radio val="bar" v-model="componentRadio">여자</radio>
                        </div>
                        <div>{{ componentRadio }}</div>
                    </td>
                </tr>
                <tr>
                    <th>성별2</th>
                    <td>
                        <div class="cr-box">
                            <radio val="a" v-model="componentRadio2">남자</radio>
                            <radio val="b" v-model="componentRadio2">여자</radio>
                        </div>
                        <div>{{ componentRadio2 }}</div>
                    </td>
                </tr>
                <tr>
                    <th>성별3</th>
                    <td>
                        <div class="cr-box">
                            <radio val="0" v-model="componentRadio3">남자</radio>
                            <radio val="1" v-model="componentRadio3">여자</radio>
                        </div>
                        <div>{{ componentRadio3 }}</div>
                    </td>
                </tr>
                <tr>
                    <th>체크박스</th>
                    <td>
                        <div class="cr-box">
                            <check val="foo" v-model="checkModel">체크박스 1<br>두줄이다</check>
                            <check val="bar" v-model="checkModel">체크박스 2</check>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>달력</th>
                    <td>
                        <datepicker style="width: 50%;" v-model="datepickerModel"></datepicker>
                        <div>{{ datepickerModel }}</div>
                    </td>
                </tr>
                <tr>
                    <th>달력 (기간)</th>
                    <td>
                        <datepicker style="width: 50%;" v-model="datepickerModel1" :to="datepickerModel2"></datepicker>
                        <datepicker style="width: 50%;" v-model="datepickerModel2" :from="datepickerModel1"></datepicker>
                        <div>{{ datepickerModel1 }}</div>
                        <div>{{ datepickerModel2 }}</div>
                    </td>
                </tr>
                <tr>
                    <th>셀렉트</th>
                    <td>
                        <select v-model="selectModel" style="width: 50%;">
                            <option value="1">A</option>
                            <option value="2">B</option>
                            <option value="3">C</option>
                        </select>
                        <select v-if="selectModel" v-model="selectModel2" style="width: 50%;">
                            <option value="A1" v-if="selectModel == 1">A - 1</option>
                            <option value="A2" v-if="selectModel == 1">A - 2</option>
                            <option value="A3" v-if="selectModel == 1">A - 3</option>

                            <option value="B1" v-if="selectModel == 2">B - 1</option>
                            <option value="B2" v-if="selectModel == 2">B - 2</option>
                            <option value="B3" v-if="selectModel == 2">B - 3</option>

                            <option value="C1" v-if="selectModel == 3">C - 1</option>
                            <option value="C2" v-if="selectModel == 3">C - 2</option>
                            <option value="C3" v-if="selectModel == 3">C - 3</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>텍스트없는 체크박스</th>
                    <td>
                        <div class="cr-box">
                            <check class="textNull"></check>
                            <check class="textNull"></check>
                            <radio class="textNull"></radio>
                            <radio class="textNull"></radio>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checkModel: [],
            componentRadio: 'foo',
            componentRadio2: 'b',
            componentRadio3: 1,
            selectModel: '',
            selectModel2: '',
            datepickerModel: '',
            datepickerModel1: '',
            datepickerModel2: ''
        }
    },
    watch: {
        selectModel () {
            this.selectModel2 = '';
        },
        selectModel2: {
            handler(newValue, oldValue) {
                console.log(newValue, oldValue);
            },
            deep: true
        }
    }
}
</script>


<style lang="scss">
.write-table {width: 100%;
    table {
        width: 100%; border-top: 1px solid #000000;
        tbody tr th {border-bottom: 1px solid #cccccc;}
        tbody tr td {border-bottom: 1px solid #cccccc; padding: 10px 20px;
            .cr-box {display: flex; flex-wrap: wrap; align-items: center;
                ._check,
                ._radio {margin: 10px 20px 10px 0; font-size: 17px;}
            }
        }
    }
}
</style>
