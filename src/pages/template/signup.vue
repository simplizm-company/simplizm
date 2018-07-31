<template>
    <div class="input-form">
        <dl>
            <cut tag="dt">이메일</cut>
            <dd>
                <input type="email"
                    placeholder="이메일"
                    spellcheck="false"
                    v-model="value.email"
                    :class="{
                        value: value.email,
                        valid: valid.email
                    }">
                <btn class="e1 h40 w100">중복확인</btn>
            </dd>
            <dd v-if="value.email">
                <p class="valid-text invalid" v-if="!valid.email">이메일주소를 확인해 주세요</p>
                <p class="valid-text valid" v-if="valid.email">유효한 이메일주소 입니다.</p>
            </dd>
        </dl>
        <dl>
            <cut tag="dt">비밀번호</cut>
            <dd>
                <input type="password"
                    placeholder="비밀번호"
                    v-model="value.password"
                    :class="{
                        value: value.password,
                        valid: valid.password
                    }">
            </dd>
            <dd v-if="value.password">
                <p class="valid-text invalid" v-if="!valid.password">영문, 숫자, 특수문자가 포함된 8 ~ 16자</p>
                <p class="valid-text valid" v-if="valid.password">사용할 수 있는 비밀번호 입니다.</p>
            </dd>
        </dl>
        <dl>
            <cut tag="dt">비밀번호 확인</cut>
            <dd>
                <input type="password"
                    placeholder="비밀번호 확인"
                    v-model="value.passwordConfirm"
                    :disabled="!valid.password"
                    :class="{
                        value: value.passwordConfirm,
                        valid: valid.passwordConfirm
                    }">
            </dd>
            <dd v-if="value.password && value.passwordConfirm">
                <p class="valid-text invalid" v-if="!valid.passwordConfirm">비밀번호와 일치하지 않습니다.</p>
                <p class="valid-text valid" v-if="valid.passwordConfirm">비밀번호와 일치합니다.</p>
            </dd>
        </dl>
        <dl>
            <cut tag="dt">이름</cut>
            <dd>
                <input type="text"
                    placeholder="이름"
                    v-model="value.name"
                    :class="{
                        value: value.name,
                        valid: valid.name
                    }">
            </dd>
        </dl>
        <dl>
            <cut tag="dt">성별</cut>
            <dd>
                <radio val="woman" v-model="value.gender">여자</radio>
                <radio val="man" v-model="value.gender">남자</radio>
            </dd>
        </dl>
        <dl>
            <cut tag="dt">생년월일</cut>
            <dd>
                <input type="text"
                    placeholder="19450815"
                    v-model="value.birth"
                    :class="{
                        value: value.birth,
                        valid: valid.birth
                    }">
            </dd>
        </dl>
        <dl>
            <cut tag="dt">핸드폰번호</cut>
            <dd>
                <input type="tel"
                    placeholder="01012341234"
                    v-model="value.phone"
                    :class="{
                        value: value.phone,
                        valid: valid.phone
                    }">
            </dd>
        </dl>
        <dl>
            <cut tag="dt">주소</cut>
            <dd>
                <input type="text"
                    readonly
                    placeholder="우편번호"
                    v-model="value.zipcode"
                    :class="{
                        value: value.zipcode,
                        valid: valid.zipcode
                    }"
                >
                <btn class="e1 h40 w150">우편번호찾기</btn>
            </dd>
        </dl>
        <dl>
            <cut tag="dt">인증번호</cut>
            <dd>
                <input type="text"
                    placeholder="인증번호"
                    v-model="value.certification"
                    :class="{
                        value: value.certification,
                        valid: valid.certification
                    }">
                <btn class="e1 h40 w100">인증확인</btn>
            </dd>
        </dl>
        <btnbox style="margin-top: 50px;">
            <btn class="c1 h60" :disabled="!valid.validAll" @click="signup">회원가입</btn>
        </btnbox>
        <div style="position: fixed; top: 50px; left: 700px;">
            <p>이메일 : {{ value.email }}</p>
            <p>비밀번호 : {{ value.password }}</p>
            <p>이름 : {{ value.name }}</p>
            <p>성별 : {{ value.gender }}</p>
            <p>생일 : {{ value.birth }}</p>
            <p>핸드폰번호 : {{ value.phone }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: {
                email: '',
                password: '',
                passwordConfirm: '',
                name: '',
                gender: 'woman',
                birth: '',
                phone: '',
                zipcode: '',
                certification: ''
            },
            valid: {
                email: false,
                password: false,
                passwordConfirm: false,
                name: false,
                gender: true,
                birth: false,
                phone: false,
                zipcode: false,
                certification: false,
                validAll: false
            }
        }
    },
    watch: {
        'value.email' () {
            // email 포맷 체크 정규식
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.valid.email = regex.test(this.value.email);
        },
        'value.password' () {
            // 비밀번호 영문, 숫자, 특수문자 포함 8 ~ 16 자리
            let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
            this.valid.password = regex.test(this.value.password);
            this.valid.passwordConfirm = this.value.password === this.value.passwordConfirm && this.value.password;
        },
        'value.passwordConfirm' () {
            this.valid.passwordConfirm = this.value.password === this.value.passwordConfirm && this.value.password;
        },
        'value.name' () {
            this.valid.name = this.value.name;
        },
        'value.birth' () {
            let regex = /^[0-9]{8}$/;
            this.valid.birth = regex.test(this.value.birth);
        },
        'value.phone' () {
            let regex = /^[0-9]{10,11}$/;
            this.valid.phone = regex.test(this.value.phone);
        },
        'value.certification' () {
            this.valid.certification = this.value.certification;
        },
        valid: {
            handler () {
                if (this.valid.email
                    && this.valid.password
                    && this.valid.passwordConfirm
                    && this.valid.name
                    && this.valid.birth
                    && this.valid.phone
                    && this.valid.certification) {
                    this.valid.validAll = true;
                } else {
                    this.valid.validAll = false;
                }
            },
            deep: true
        }
    },
    methods: {
        signup () {
            alert('signup');
        }
    }
}
</script>


<style lang="scss" scoped>
.input-form {max-width: 700px; padding: 100px;
    > dl {margin: 30px 0 0;
        &:first-child {margin-top: 0;}
        dt {margin: 0 0 10px; font-weight: 700; font-size: 17px;}
        dd {display: flex; flex-wrap: nowrap; align-items: center; margin: 0 0 10px;
            &:last-child {margin-bottom: 0;}
            @include inputTypeText {flex: 1 1 auto;
                &:focus {border-color: #000000;}
                &:read-only {border-color: #cccccc; cursor: default;}
                &.value {border-color: #ed1c24;}
                &.valid {border-color: #22b14c;}
            }
            button {flex: 1 0 auto; margin: 0 0 0 10px;}
            ._check,
            ._radio {margin: 10px 20px 10px 0;}
            .valid-text {font-size: 17px;
                &.invalid {color: #ed1c24;}
                &.valid {color: #22b14c;}
            }
        }
    }
}
</style>
